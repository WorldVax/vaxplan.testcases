<Query Kind="Program">
  <NuGetReference>LinqToExcel</NuGetReference>
  <Namespace>LinqToExcel</Namespace>
  <Namespace>LinqToExcel.Extensions</Namespace>
  <Namespace>LinqToExcel.Query</Namespace>
</Query>

const string CELL_CDC_Test_ID = "CDC_Test_ID";
const string CELL_Test_Case_Name = "Test_Case_Name";
const string CELL_DOB = "DOB";
const string CELL_Gender = "Gender";
const string CELL_Med_History_Text = "Med_History_Text";
const string CELL_Med_History_Code = "Med_History_Code";
const string CELL_Med_History_Code_Sys = "Med_History_Code_Sys";
const string CELL_Series_Status = "Series_Status";
const string CELL_Date_Administered_1 = "Date_Administered_1";
const string CELL_Vaccine_Name_1 = "Vaccine_Name_1";
const string CELL_CVX_1 = "CVX_1";
const string CELL_MVX_1 = "MVX_1";
const string CELL_Evaluation_Status_1 = "Evaluation_Status_1";
const string CELL_Evaluation_Reason_1 = "Evaluation_Reason_1";
const string CELL_Date_Administered_2 = "Date_Administered_2";
const string CELL_Vaccine_Name_2 = "Vaccine_Name_2";
const string CELL_CVX_2 = "CVX_2";
const string CELL_MVX_2 = "MVX_2";
const string CELL_Evaluation_Status_2 = "Evaluation_Status_2";
const string CELL_Evaluation_Reason_2 = "Evaluation_Reason_2";
const string CELL_Date_Administered_3 = "Date_Administered_3";
const string CELL_Vaccine_Name_3 = "Vaccine_Name_3";
const string CELL_CVX_3 = "CVX_3";
const string CELL_MVX_3 = "MVX_3";
const string CELL_Evaluation_Status_3 = "Evaluation_Status_3";
const string CELL_Evaluation_Reason_3 = "Evaluation_Reason_3";
const string CELL_Date_Administered_4 = "Date_Administered_4";
const string CELL_Vaccine_Name_4 = "Vaccine_Name_4";
const string CELL_CVX_4 = "CVX_4";
const string CELL_MVX_4 = "MVX_4";
const string CELL_Evaluation_Status_4 = "Evaluation_Status_4";
const string CELL_Evaluation_Reason_4 = "Evaluation_Reason_4";
const string CELL_Date_Administered_5 = "Date_Administered_5";
const string CELL_Vaccine_Name_5 = "Vaccine_Name_5";
const string CELL_CVX_5 = "CVX_5";
const string CELL_MVX_5 = "MVX_5";
const string CELL_Evaluation_Status_5 = "Evaluation_Status_5";
const string CELL_Evaluation_Reason_5 = "Evaluation_Reason_5";
const string CELL_Date_Administered_6 = "Date_Administered_6";
const string CELL_Vaccine_Name_6 = "Vaccine_Name_6";
const string CELL_CVX_6 = "CVX_6";
const string CELL_MVX_6 = "MVX_6";
const string CELL_Evaluation_Status_6 = "Evaluation_Status_6";
const string CELL_Evaluation_Reason_6 = "Evaluation_Reason_6";
const string CELL_Date_Administered_7 = "Date_Administered_7";
const string CELL_Vaccine_Name_7 = "Vaccine_Name_7";
const string CELL_CVX_7 = "CVX_7";
const string CELL_MVX_7 = "MVX_7";
const string CELL_Evaluation_Status_7 = "Evaluation_Status_7";
const string CELL_Evaluation_Reason_7 = "Evaluation_Reason_7";
const string CELL_Forecast_Number = "Forecast_#";
const string CELL_Earliest_Date = "Earliest_Date";
const string CELL_Recommended_Date = "Recommended_Date";
const string CELL_Past_Due_Date = "Past_Due_Date";
const string CELL_Vaccine_Group = "Vaccine_Group";
const string CELL_Assessment_Date = "Assessment_Date";
const string CELL_Evaluation_Test_Type = "Evaluation_Test_Type";
const string CELL_Date_added = "Date_added";
const string CELL_Date_updated = "Date_updated";
const string CELL_Forecast_Test_Type = "Forecast_Test_Type";
const string CELL_Reason_For_Change = "Reason_For_Change";
const string CELL_Changed_In_Version = "Changed_In_Version";

void Main()
{
	var basePath = Path.GetDirectoryName(Util.CurrentQueryPath);
	var filename = Path.Combine(basePath,  @"cdsi-test-cases-results.xlsx");
	var excelQuery = new ExcelQueryFactory(filename);
	
	var rows = excelQuery.WorksheetRange("A1", "BJ746", 0).ToArray();
	
	// value conversion and formatting
	Func<Cell, string> dateOrNull = (cell) => (cell != null && cell.Value != null && cell.Value.GetType() == typeof(DateTime)) ? Convert.ToDateTime(cell.Value).ToString("yyyy-MM-dd") : null;
	Func<Cell, string> intOrNull = (cell) => (cell != null && cell.Value != null && cell.Value.GetType() == typeof(int)) ? Convert.ToInt32(cell.Value).ToString() : null;
	//Func<Cell, string> doubleOrNull = (cell) => (cell != null && cell.Value != null && cell.Value != DBNull.Value) ? Convert.ToDouble(cell.Value.Cast<double>()).ToString() : null;
	Func<Cell, string> cellText = (cell) => (cell != null && cell.Value != null && cell.Value != DBNull.Value) ? Convert.ToString(cell.Value) : null;

	// condit
	Func<string, string, string> textIfHasValue = (preposition, dateText) => string.IsNullOrEmpty(dateText) ? string.Empty : string.Format("{0} {1}", preposition, dateText);
	Func<bool, Func<string>, string> returnTextIf = (cond, textFunc) => (cond) ? textFunc() : null;
	
	
	// table row building
	Func<IEnumerable<string>, string> buildTableRow = values => string.Format("{0}|", string.Concat(values.Select (v => string.Format("| {0} ", v))));
	
	Func<string, string[]> splitAtColumns = t => { var values = Regex.Split(t, @"\s*\|\s*"); return values.Skip(1).Take(values.Length - 2).ToArray(); };
	
	Func<string, string> autoSizeColumns = input => {
		var lines = Regex.Split((input ?? ""), @"\r?\n");
		
		var mostPipes = lines.Length > 0 ? lines.Select(line => Regex.Matches(line, @"\s*\|\s*").OfType<Match>().Count()).Max() : 0;
		
		if(mostPipes < 2)
			return input;
		
		var columnMaxLengths = new int[mostPipes - 1];
		foreach (var line in lines.Where(l => l != null && l.IndexOf('|') > -1))
		{
			var splitFields = splitAtColumns(line);
			// yes, i starts at 1 to skip the first field
			// and, yes, the length has 1 subtracted to avoid using the very last split element
			for (int i = 0; i < splitFields.Length; i++)
			{
				var fieldValue = (splitFields[i] ?? "").Trim();
				if(fieldValue != null && fieldValue.Length > columnMaxLengths[i])
					columnMaxLengths[i] = fieldValue.Length;
			}
		}
		
		var adjustedLines =
			from line in lines
			let hasColumns = (line != null && line.Count(c => c == '|') > 1)
			let adjustedLine = (hasColumns) ? string.Concat(splitAtColumns(line).Select ((r, idx) => "| " + (r ?? "").PadRight(columnMaxLengths[idx]) + " ")) + "|" : line
			select adjustedLine;
		
		var adjustedText = string.Join(Environment.NewLine, adjustedLines);
		
		return adjustedText;
	};

	// replacements
	Func<string, string> toTitleCase = t => Regex.Replace(t, @"(\b.)", m => m.Value.ToUpper());
	Func<string, string> swapInvalidCharacters = t => Regex.Replace(t, @"[-\(\):]", " ");
	Func<string, string> removeWhitespace = t => Regex.Replace(t, @"\s+", string.Empty);
	Func<string, string> toEnumStyle = t => removeWhitespace(toTitleCase(swapInvalidCharacters(t)));
	Func<string, string, string> makeTag = (pfx, t) => (!string.IsNullOrWhiteSpace(t)) ? string.Format(@"@{0}{1}", pfx, toEnumStyle(t)) : null;
	
	Func<string, string[]> splitIntoLines = t => (t != null) ? t.Split(new string[] { Environment.NewLine }, StringSplitOptions.None) : new [] { t };
	
	Func<string, IEnumerable<string>, string> addHeaders = (headers, items) => string.Join("\n", new [] { headers }.Concat(items));
	
	// line formatting
	Func<string, int, string> tabify = (t, tabCount) => (!string.IsNullOrEmpty(t)) ? string.Concat(Enumerable.Repeat("\t", tabCount)) + t : t;
	Func<string, int, string> wrapAndTab = (t, tabCount) => (!string.IsNullOrEmpty(t)) ? "\n" + tabify(t, tabCount): t;
	Func<string, int, string> wrapAndTabifyBlock = (block, tabCount) => (block != null) ? string.Concat(splitIntoLines(block).Select(i => wrapAndTab(i, tabCount))): block;
	
	var immunzationHeaders = buildTableRow(new [] { "Date Administered", "Vaccine Name", "CVX", "MVX", "Evaluation Reason", "Evaluation Status" });
	var medicalHistoryHeaders = buildTableRow(new [] { "Medical History Text", "Medical History Code", "Medical History System" });

	var testCases =
		from row in rows
		let cdcTestId = cellText(row[CELL_CDC_Test_ID])
		let testCaseName = cellText(row[CELL_Test_Case_Name])
		let birthDate = dateOrNull(row[CELL_DOB])
		let gender = (cellText(row[CELL_Gender]) ?? "").StartsWith("f", StringComparison.InvariantCultureIgnoreCase) ? "female" : "male"
		let medHistoryText = cellText(row[CELL_Med_History_Text])
		let medHistoryCode = cellText(row[CELL_Med_History_Code])
		let medHistoryCodeSys = cellText(row[CELL_Med_History_Code_Sys])
		let seriesStatus = cellText(row[CELL_Series_Status])
		
		// Dose 1
		let dateAdministered1 = dateOrNull(row[CELL_Date_Administered_1])
		let vaccineName1 = cellText(row[CELL_Vaccine_Name_1])
		let cvx1 = cellText(row[CELL_CVX_1])
		let mvx1 = cellText(row[CELL_MVX_1])
		let evaluationStatus1 = cellText(row[CELL_Evaluation_Status_1])
		let evaluationReason1 = cellText(row[CELL_Evaluation_Reason_1])
		let dose1 = Tuple.Create(dateAdministered1, vaccineName1, cvx1, mvx1, evaluationReason1, evaluationStatus1)
		
		// Dose 2
		let dateAdministered2 = dateOrNull(row[CELL_Date_Administered_2])
		let vaccineName2 = cellText(row[CELL_Vaccine_Name_2])
		let cvx2 = cellText(row[CELL_CVX_2])
		let mvx2 = cellText(row[CELL_MVX_2])
		let evaluationStatus2 = cellText(row[CELL_Evaluation_Status_2])
		let evaluationReason2 = cellText(row[CELL_Evaluation_Reason_2])
		let dose2 = Tuple.Create(dateAdministered2, vaccineName2, cvx2, mvx2, evaluationReason2, evaluationStatus2)
		
		// Dose 3
		let dateAdministered3 = dateOrNull(row[CELL_Date_Administered_3])
		let vaccineName3 = cellText(row[CELL_Vaccine_Name_3])
		let cvx3 = cellText(row[CELL_CVX_3])
		let mvx3 = cellText(row[CELL_MVX_3])
		let evaluationStatus3 = cellText(row[CELL_Evaluation_Status_3])
		let evaluationReason3 = cellText(row[CELL_Evaluation_Reason_3])
		let dose3 = Tuple.Create(dateAdministered3, vaccineName3, cvx3, mvx3, evaluationReason3, evaluationStatus3)
		
		// Dose 4
		let dateAdministered4 = dateOrNull(row[CELL_Date_Administered_4])
		let vaccineName4 = cellText(row[CELL_Vaccine_Name_4])
		let cvx4 = cellText(row[CELL_CVX_4])
		let mvx4 = cellText(row[CELL_MVX_4])
		let evaluationStatus4 = cellText(row[CELL_Evaluation_Status_4])
		let evaluationReason4 = cellText(row[CELL_Evaluation_Reason_4])
		let dose4 = Tuple.Create(dateAdministered4, vaccineName4, cvx4, mvx4, evaluationReason4, evaluationStatus4)
		
		// Dose 5
		let dateAdministered5 = dateOrNull(row[CELL_Date_Administered_5])
		let vaccineName5 = cellText(row[CELL_Vaccine_Name_5])
		let cvx5 = cellText(row[CELL_CVX_5])
		let mvx5 = cellText(row[CELL_MVX_5])
		let evaluationStatus5 = cellText(row[CELL_Evaluation_Status_5])
		let evaluationReason5 = cellText(row[CELL_Evaluation_Reason_5])
		let dose5 = Tuple.Create(dateAdministered5, vaccineName5, cvx5, mvx5, evaluationReason5, evaluationStatus5)
		
		// Dose 6
		let dateAdministered6 = dateOrNull(row[CELL_Date_Administered_6])
		let vaccineName6 = cellText(row[CELL_Vaccine_Name_6])
		let cvx6 = cellText(row[CELL_CVX_6])
		let mvx6 = cellText(row[CELL_MVX_6])
		let evaluationStatus6 = cellText(row[CELL_Evaluation_Status_6])
		let evaluationReason6 = cellText(row[CELL_Evaluation_Reason_6])
		let dose6 = Tuple.Create(dateAdministered6, vaccineName6, cvx6, mvx6, evaluationReason6, evaluationStatus6)
		
		// Dose 7
		let dateAdministered7 = dateOrNull(row[CELL_Date_Administered_7])
		let vaccineName7 = cellText(row[CELL_Vaccine_Name_7])
		let cvx7 = cellText(row[CELL_CVX_7])
		let mvx7 = cellText(row[CELL_MVX_7])
		let evaluationStatus7 = cellText(row[CELL_Evaluation_Status_7])
		let evaluationReason7 = cellText(row[CELL_Evaluation_Reason_7])
		let dose7 = Tuple.Create(dateAdministered7, vaccineName7, cvx7, mvx7, evaluationReason7, evaluationStatus7)

		// Combine doses, omitting empty slots
		let doses = (new[] { dose1, dose2, dose3, dose4, dose5, dose6, dose7 })
			.Where (d => d.Item1 != null)
			.Select(d => buildTableRow(new[] { d.Item1, d.Item2, d.Item3, d.Item4, d.Item5, d.Item6 }) )
			.ToArray()

		let forecastNumber = intOrNull(row[CELL_Forecast_Number])
		let earliestDate = dateOrNull(row[CELL_Earliest_Date])
		let recommendedDate = dateOrNull(row[CELL_Recommended_Date])
		let recommendOrNot = (!string.IsNullOrWhiteSpace(recommendedDate)) ? "recommend" : "not recommend"
		let pastDueDate = dateOrNull(row[CELL_Past_Due_Date])
		let vaccineGroup = cellText(row[CELL_Vaccine_Group])
		let assessmentDate = dateOrNull(row[CELL_Assessment_Date])
		let evaluationTestType = row[CELL_Evaluation_Test_Type]
		let dateAdded = dateOrNull(row[CELL_Date_added])
		let dateUpdated = dateOrNull(row[CELL_Date_updated])
		let forecastTestType = cellText(row[CELL_Forecast_Test_Type])
		let reasonForChange = (cellText(row[CELL_Reason_For_Change]) ?? "").Replace("\r", "; ").Replace("\n", "; ").Trim()
		let changedInVersion = cellText(row[CELL_Changed_In_Version])

		// build tags
		let seriesStatusTag = makeTag("SeriesStatus_", seriesStatus)
		let vaccineGroupTag = makeTag("VaccineGroup_", vaccineGroup)
		let genderTag = makeTag("Gender_", gender)
		let forecastTypeTag = makeTag("ForecastTestType_", forecastTestType)
		
		// format the Gherkin block
		let allTags = string.Format("\n{0}", string.Join(" ", seriesStatusTag, vaccineGroupTag, genderTag, forecastTypeTag))
		let scenarioTitle = wrapAndTab(string.Format("Scenario: [CTC {0}] - {1}", cdcTestId, testCaseName.Trim().TrimEnd('.')), 0)
		let metaData = wrapAndTab("# " + ((dateAdded != dateUpdated) ? string.Format("updated on {0} in version {1} - {2}", dateUpdated, changedInVersion, reasonForChange) : string.Format("added on {0}", dateAdded)), 1)
		let givenAPatient = wrapAndTab(string.Format("Given a {0} Patient born on {1}", gender, Convert.ToDateTime(birthDate).ToString("yyyy-MM-dd")), 1)
		let medicalHistory = returnTextIf(!string.IsNullOrWhiteSpace(medHistoryCode), () => wrapAndTab("And the following medical history is reported", 1) + wrapAndTabifyBlock(autoSizeColumns(addHeaders(medicalHistoryHeaders, new [] { buildTableRow(new[]{medHistoryText, medHistoryCode, medHistoryCodeSys}) })), 1))
		let doseTable = returnTextIf(doses.Any(), () => wrapAndTabifyBlock(autoSizeColumns(addHeaders(immunzationHeaders, doses)), 2))
		let immunizationsClause =
			(string.IsNullOrEmpty(doseTable)) ? 
				wrapAndTab("And no immunizations have been given", 1)
				:  wrapAndTab("And the following immunizations have been given", 1) + doseTable
		let whenPatientAssessedOnDate = wrapAndTab(string.Format("When the Patient is assessed for {0} on {1}", vaccineGroup, assessmentDate), 1)
		let thenPatientShouldBe = wrapAndTab(string.Format("Then the assessment should {0} a dose for {1}{2}", recommendOrNot, vaccineGroup, textIfHasValue(" on", recommendedDate)), 1)
		let seriesStatusShouldBe = wrapAndTab(string.Format("And the series status should be {0}", seriesStatus), 1)
		let scenario = string.Concat(allTags, scenarioTitle, metaData, givenAPatient, medicalHistory, immunizationsClause, whenPatientAssessedOnDate, thenPatientShouldBe, seriesStatusShouldBe, "\n\n")
		let feature = string.Format("Feature: {0} CDSi test cases", vaccineGroup)
		group scenario by new { feature, vaccineGroup } into vaccineGroupScenario
		select vaccineGroupScenario;

	foreach (var scenarioGroup in testCases)
	{
		var outputFile = Path.Combine(basePath, "CDSi_TestCases_" + scenarioGroup.Key.vaccineGroup + ".feature");
		File.WriteAllText(outputFile, string.Format("{0}\n{1}", scenarioGroup.Key.feature, string.Concat(scenarioGroup)));
	}
}

// Define other methods and classes here