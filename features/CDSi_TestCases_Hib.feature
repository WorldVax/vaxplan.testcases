Feature: Hib CDSi test cases

@SeriesStatus_NotComplete @VaccineGroup_Hib @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0273] - Child<2 months, no shots, #1 forecasted at 2 months of age
	# added on 2013-01-01
	Given a female Patient born on 2010-01-01
	And no immunizations have been given
	When the Patient is assessed for Hib on 2010-01-01
	Then the assessment should recommend a dose for Hib on 2010-03-01
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_Hib @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0274] - # 1 at 6 wks-5 days
	# added on 2013-01-01
	Given a female Patient born on 2010-01-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2010-02-07        | ACTHIB       | 48  | PMC | Age: Too Young    | Not Valid         |
	When the Patient is assessed for Hib on 2010-02-07
	Then the assessment should recommend a dose for Hib on 2010-03-01
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_Hib @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0275] - # 1 at 6 wks-4 days
	# added on 2013-01-01
	Given a female Patient born on 2010-01-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2010-02-08        | ACTHIB       | 48  | PMC |                   | Valid             |
	When the Patient is assessed for Hib on 2010-02-08
	Then the assessment should recommend a dose for Hib on 2010-05-01
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_Hib @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0276] - # 1 at 6 wks -3 days
	# added on 2013-01-01
	Given a female Patient born on 2010-01-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2010-02-09        | ACTHIB       | 48  | PMC |                   | Valid             |
	When the Patient is assessed for Hib on 2010-02-09
	Then the assessment should recommend a dose for Hib on 2010-05-01
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_Hib @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0277] - # 1 at 3 months
	# added on 2013-01-01
	Given a female Patient born on 2010-01-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2010-04-01        | ACTHIB       | 48  | PMC |                   | Valid             |
	When the Patient is assessed for Hib on 2010-04-01
	Then the assessment should recommend a dose for Hib on 2010-05-01
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_Hib @Gender_Female @ForecastTestType_RecommendedBasedOnMinimumIntervalFromPreviousDoseCatchUp
Scenario: [CTC 2013-0278] - #1 at 3 months and 3 days-catchup- #2 recommended at +28 days
	# added on 2013-01-01
	Given a female Patient born on 2010-01-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2010-04-04        | ACTHIB       | 48  | PMC |                   | Valid             |
	When the Patient is assessed for Hib on 2010-04-04
	Then the assessment should recommend a dose for Hib on 2010-05-02
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_Hib @Gender_Female @ForecastTestType_RecommendedBasedOnMinimumIntervalFromPreviousDoseCatchUp
Scenario: [CTC 2013-0279] - #1 at 6 months - catchup- #2 recommended at +28 days
	# added on 2013-01-01
	Given a female Patient born on 2010-01-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2010-07-01        | ACTHIB       | 48  | PMC |                   | Valid             |
	When the Patient is assessed for Hib on 2010-07-01
	Then the assessment should recommend a dose for Hib on 2010-07-29
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_Hib @Gender_Female @ForecastTestType_RecommendedBasedOnMinimumIntervalFromPreviousDoseCatchUp
Scenario: [CTC 2013-0280] - #1 at 7 and <11 months - catchup- drop to 3 dose schedule
	# added on 2013-01-01
	Given a female Patient born on 2010-01-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2010-08-01        | ACTHIB       | 48  | PMC |                   | Valid             |
	When the Patient is assessed for Hib on 2010-08-01
	Then the assessment should recommend a dose for Hib on 2010-08-29
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_Hib @Gender_Female @ForecastTestType_RecommendedBasedOnMinimumIntervalFromPreviousDoseCatchUp
Scenario: [CTC 2013-0281] - #1 at 12 months, drop to 2-dose schedule
	# updated on 2013-06-26 in version 1.1 - Past Due Date was incorrect.  Should be in alignment with the earliest and recommended.  Child is in catch-up schedule.
	Given a female Patient born on 2010-01-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2011-01-01        | ACTHIB       | 48  | PMC |                   | Valid             |
	When the Patient is assessed for Hib on 2011-01-01
	Then the assessment should recommend a dose for Hib on 2011-02-26
	And the series status should be Not Complete


@SeriesStatus_Complete @VaccineGroup_Hib @Gender_Female @ForecastTestType_NotRecommendedSeriesComplete
Scenario: [CTC 2013-0282] - #1 at 15m -drop to 1 dose schedule
	# added on 2013-01-01
	Given a female Patient born on 2010-01-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2011-04-01        | ACTHIB       | 48  | PMC |                   | Valid             |
	When the Patient is assessed for Hib on 2011-04-01
	Then the assessment should not recommend a dose for Hib
	And the series status should be Complete


@SeriesStatus_Complete @VaccineGroup_Hib @Gender_Female @ForecastTestType_NotRecommendedSeriesComplete
Scenario: [CTC 2013-0283] - #1 at 3 years -drop to 1 dose schedule
	# added on 2013-01-01
	Given a female Patient born on 2008-01-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2011-01-01        | ACTHIB       | 48  | PMC |                   | Valid             |
	When the Patient is assessed for Hib on 2011-01-01
	Then the assessment should not recommend a dose for Hib
	And the series status should be Complete


@SeriesStatus_AgedOut @VaccineGroup_Hib @Gender_Female @ForecastTestType_NotRecommendedTooOld
Scenario: [CTC 2013-0284] - #1 at  5 years
	# updated on 2014-11-07 in version 1.6 - v1.6: Updated Series Status from "Not Complete" to "Aged Out" to align with updated CDSi Logic Specification Series Statuses.; ; v1.2:Within the scope of the CDSi effort, Hib on or after 5 years is not recommended.  The last administered dose was changed to
	Given a female Patient born on 2006-01-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2011-01-01        | ACTHIB       | 48  | PMC | Age: Too Old      | Extraneous        |
	When the Patient is assessed for Hib on 2011-01-01
	Then the assessment should not recommend a dose for Hib
	And the series status should be Aged Out


@SeriesStatus_AgedOut @VaccineGroup_Hib @Gender_Female @ForecastTestType_NotRecommendedTooOld
Scenario: [CTC 2013-0285] - #1 at 7 years
	# updated on 2014-11-07 in version 1.6 - v1.6: Updated Series Status from "Not Complete" to "Aged Out" to align with updated CDSi Logic Specification Series Statuses.; ; v1.2: Within the scope of the CDSi effort, Hib on or after 5 years is not recommended.  The last administered dose was changed t
	Given a female Patient born on 2005-01-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2012-01-01        | ACTHIB       | 48  | PMC | Age: Too Old      | Extraneous        |
	When the Patient is assessed for Hib on 2012-01-01
	Then the assessment should not recommend a dose for Hib
	And the series status should be Aged Out


@SeriesStatus_NotComplete @VaccineGroup_Hib @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0286] - # 2 at 10 wks-5 days
	# added on 2013-01-01
	Given a female Patient born on 2010-01-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2010-02-08        | ACTHIB       | 48  | PMC |                   | Valid             |
		| 2010-03-07        | ACTHIB       | 48  | PMC | Age: Too Young    | Not Valid         |
	When the Patient is assessed for Hib on 2010-03-07
	Then the assessment should recommend a dose for Hib on 2010-05-01
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_Hib @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0287] - # 2 at 10 wks-4 days
	# added on 2013-01-01
	Given a female Patient born on 2010-01-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2010-02-08        | ACTHIB       | 48  | PMC |                   | Valid             |
		| 2010-03-08        | ACTHIB       | 48  | PMC |                   | Valid             |
	When the Patient is assessed for Hib on 2010-03-08
	Then the assessment should recommend a dose for Hib on 2010-07-01
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_Hib @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0288] - # 2 at 10 wks -3 days
	# added on 2013-01-01
	Given a female Patient born on 2010-01-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2010-02-08        | ACTHIB       | 48  | PMC |                   | Valid             |
		| 2010-03-09        | ACTHIB       | 48  | PMC |                   | Valid             |
	When the Patient is assessed for Hib on 2010-03-09
	Then the assessment should recommend a dose for Hib on 2010-07-01
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_Hib @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0289] - # 2 at 4 months
	# added on 2013-01-01
	Given a female Patient born on 2005-01-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2005-03-01        | ACTHIB       | 48  | PMC |                   | Valid             |
		| 2005-05-01        | ACTHIB       | 48  | PMC |                   | Valid             |
	When the Patient is assessed for Hib on 2005-05-01
	Then the assessment should recommend a dose for Hib on 2005-07-01
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_Hib @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0290] - #2 at 5 months
	# added on 2013-01-01
	Given a female Patient born on 2005-01-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2005-03-01        | ACTHIB       | 48  | PMC |                   | Valid             |
		| 2005-06-01        | ACTHIB       | 48  | PMC |                   | Valid             |
	When the Patient is assessed for Hib on 2005-06-01
	Then the assessment should recommend a dose for Hib on 2005-07-01
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_Hib @Gender_Female @ForecastTestType_RecommendedBasedOnMinimumIntervalFromPreviousDoseCatchUp
Scenario: [CTC 2013-0291] - #2 at 5 months and 3 days-catchup-#3 at +28 days
	# added on 2013-01-01
	Given a female Patient born on 2005-01-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2005-03-01        | ACTHIB       | 48  | PMC |                   | Valid             |
		| 2005-06-04        | ACTHIB       | 48  | PMC |                   | valid             |
	When the Patient is assessed for Hib on 2005-06-04
	Then the assessment should recommend a dose for Hib on 2005-07-02
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_Hib @Gender_Female @ForecastTestType_RecommendedBasedOnMinimumIntervalFromPreviousDoseCatchUp
Scenario: [CTC 2013-0292] - #2 at 12 m - 5 days
	# added on 2013-01-01
	Given a female Patient born on 2005-01-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2005-03-01        | ACTHIB       | 48  | PMC |                   | Valid             |
		| 2005-12-27        | ACTHIB       | 48  | PMC |                   | Valid             |
	When the Patient is assessed for Hib on 2005-12-27
	Then the assessment should recommend a dose for Hib on 2006-01-24
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_Hib @Gender_Female @ForecastTestType_RecommendedBasedOnMinimumIntervalFromPreviousDoseCatchUp
Scenario: [CTC 2013-0293] - #2 at 12 m - 4 days drop to 3-dose schedule
	# added on 2013-01-01
	Given a female Patient born on 2005-01-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2005-03-01        | ACTHIB       | 48  | PMC |                   | Valid             |
		| 2005-12-28        | ACTHIB       | 48  | PMC |                   | Valid             |
	When the Patient is assessed for Hib on 2005-12-28
	Then the assessment should recommend a dose for Hib on 2006-02-22
	And the series status should be Not Complete


@SeriesStatus_Complete @VaccineGroup_Hib @Gender_Female @ForecastTestType_NotRecommendedSeriesComplete
Scenario: [CTC 2013-0294] - #2 at 15 months
	# added on 2013-01-01
	Given a female Patient born on 2010-01-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2010-03-01        | ACTHIB       | 48  | PMC |                   | Valid             |
		| 2011-04-01        | ACTHIB       | 48  | PMC |                   | Valid             |
	When the Patient is assessed for Hib on 2011-04-01
	Then the assessment should not recommend a dose for Hib
	And the series status should be Complete


@SeriesStatus_AgedOut @VaccineGroup_Hib @Gender_Female @ForecastTestType_NotRecommendedTooOld
Scenario: [CTC 2013-0295] - #2 at 5 years
	# updated on 2014-11-07 in version 1.6 - v1.6: Updated Series Status from "Not Complete" to "Aged Out" to align with updated CDSi Logic Specification Series Statuses.; ; v1.2: Within the scope of the CDSi effort, Hib on or after 5 years is not recommended.  The last administered dose was changed t
	Given a female Patient born on 2007-01-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2007-03-01        | ACTHIB       | 48  | PMC |                   | Valid             |
		| 2012-01-01        | ACTHIB       | 48  | PMC | Age: Too Old      | Extraneous        |
	When the Patient is assessed for Hib on 2012-01-01
	Then the assessment should not recommend a dose for Hib
	And the series status should be Aged Out


@SeriesStatus_NotComplete @VaccineGroup_Hib @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0296] - dose 1 to 2, interval 4 weeks -5 days
	# added on 2013-01-01
	Given a female Patient born on 2010-01-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason   | Evaluation Status |
		| 2010-03-01        | ACTHIB       | 48  | PMC |                     | Valid             |
		| 2010-03-24        | ACTHIB       | 48  | PMC | Interval: Too Short | Not Valid         |
	When the Patient is assessed for Hib on 2010-03-24
	Then the assessment should recommend a dose for Hib on 2010-05-01
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_Hib @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0297] - dose 1 to 2, interval 4 weeks -4 days
	# added on 2013-01-01
	Given a female Patient born on 2010-01-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2010-03-01        | ACTHIB       | 48  | PMC |                   | Valid             |
		| 2010-03-25        | ACTHIB       | 48  | PMC |                   | Valid             |
	When the Patient is assessed for Hib on 2010-03-25
	Then the assessment should recommend a dose for Hib on 2010-07-01
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_Hib @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0298] - dose 1 to 2, interval 4 weeks -3 days
	# added on 2013-01-01
	Given a female Patient born on 2010-01-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2010-03-01        | ACTHIB       | 48  | PMC |                   | Valid             |
		| 2010-03-26        | ACTHIB       | 48  | PMC |                   | Valid             |
	When the Patient is assessed for Hib on 2010-03-26
	Then the assessment should recommend a dose for Hib on 2010-07-01
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_Hib @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0299] - #3 at 14 weeks-5 days
	# updated on 2013-06-26 in version 1.1 - Changed Doses 2 and 3 to be ACTHIB rather than PRP-OMP vaccines to avoid possible confusion with PRP-OMP product specific schedule
	Given a female Patient born on 2010-01-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2010-02-10        | ACTHIB       | 48  | PMC |                   | Valid             |
		| 2010-03-08        | ACTHIB       | 48  | PMC |                   | Valid             |
	When the Patient is assessed for Hib on 2010-04-04
	Then the assessment should recommend a dose for Hib on 2010-07-01
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_Hib @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0300] - #3  at 6 months
	# added on 2013-01-01
	Given a female Patient born on 2010-01-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2010-03-01        | ACTHIB       | 48  | PMC |                   | Valid             |
		| 2010-05-01        | COMVAX       | 51  | MSD |                   | Valid             |
	When the Patient is assessed for Hib on 2010-07-01
	Then the assessment should recommend a dose for Hib on 2011-01-01
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_Hib @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0301] - Dose 2 to 3, interval 4 weeks-5 days
	# added on 2013-01-01
	Given a female Patient born on 2010-01-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2010-03-01        | ACTHIB       | 48  | PMC |                   | Valid             |
		| 2010-05-01        | COMVAX       | 51  | MSD |                   | Valid             |
	When the Patient is assessed for Hib on 2010-05-24
	Then the assessment should recommend a dose for Hib on 2010-07-01
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_Hib @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0302] - Dose 2 to 3, interval 4 weeks -4 days
	# added on 2013-01-01
	Given a female Patient born on 2010-01-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2010-03-01        | ACTHIB       | 48  | PMC |                   | Valid             |
		| 2010-05-01        | COMVAX       | 51  | MSD |                   | Valid             |
	When the Patient is assessed for Hib on 2010-05-25
	Then the assessment should recommend a dose for Hib on 2011-01-01
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_Hib @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0303] - Dose 2 to 3, interval 4 weeks
	# added on 2013-01-01
	Given a female Patient born on 2010-01-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2010-03-01        | ACTHIB       | 48  | PMC |                   | Valid             |
		| 2010-05-01        | HIBTITER     | 47  | WAL |                   | Valid             |
	When the Patient is assessed for Hib on 2010-05-29
	Then the assessment should recommend a dose for Hib on 2011-01-01
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_Hib @Gender_Female @ForecastTestType_RecommendedBasedOnMinimumIntervalFromInValidDose
Scenario: [CTC 2013-0304] - #4 at 360 days of age, interval between #3-4 >8 weeks
	# added on 2013-01-01
	Given a female Patient born on 2010-01-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2010-03-01        | ACTHIB       | 48  | PMC |                   | Valid             |
		| 2010-05-01        | ACTHIB       | 48  | PMC |                   | Valid             |
	When the Patient is assessed for Hib on 2010-12-27
	Then the assessment should recommend a dose for Hib on 2011-02-21
	And the series status should be Not Complete


@SeriesStatus_Complete @VaccineGroup_Hib @Gender_Female @ForecastTestType_NotRecommendedSeriesComplete
Scenario: [CTC 2013-0305] - #4 at 361 days of age, interval between #3-4 >8 weeks
	# added on 2013-01-01
	Given a female Patient born on 2010-01-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2010-03-01        | ACTHIB       | 48  | PMC |                   | Valid             |
		| 2010-05-01        | ACTHIB       | 48  | PMC |                   | Valid             |
	When the Patient is assessed for Hib on 2010-12-28
	Then the assessment should not recommend a dose for Hib
	And the series status should be Complete


@SeriesStatus_Complete @VaccineGroup_Hib @Gender_Female @ForecastTestType_NotRecommendedSeriesComplete
Scenario: [CTC 2013-0306] - #4 at 362 days of age, interval between #3-4 >8 weeks
	# added on 2013-01-01
	Given a female Patient born on 2010-01-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2010-03-01        | ACTHIB       | 48  | PMC |                   | Valid             |
		| 2010-05-01        | ACTHIB       | 48  | PMC |                   | Valid             |
	When the Patient is assessed for Hib on 2010-12-29
	Then the assessment should not recommend a dose for Hib
	And the series status should be Complete


@SeriesStatus_Complete @VaccineGroup_Hib @Gender_Female @ForecastTestType_NotRecommendedSeriesComplete
Scenario: [CTC 2013-0307] - #4 at 15 months of age, interval between #3-4 > 8 weeks
	# added on 2013-01-01
	Given a female Patient born on 2010-01-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2010-03-01        | ACTHIB       | 48  | PMC |                   | Valid             |
		| 2010-05-01        | ACTHIB       | 48  | PMC |                   | Valid             |
	When the Patient is assessed for Hib on 2011-04-01
	Then the assessment should not recommend a dose for Hib
	And the series status should be Complete


@SeriesStatus_NotComplete @VaccineGroup_Hib @Gender_Female @ForecastTestType_RecommendedBasedOnMinimumIntervalFromInValidDose
Scenario: [CTC 2013-0308] - #4 at 365 days of age, interval between #3-4 8 weeks -5 days
	# added on 2013-01-01
	Given a female Patient born on 2010-01-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2010-03-01        | ACTHIB       | 48  | PMC |                   | Valid             |
		| 2010-05-01        | ACTHIB       | 48  | PMC |                   | Valid             |
	When the Patient is assessed for Hib on 2011-01-01
	Then the assessment should recommend a dose for Hib on 2011-02-26
	And the series status should be Not Complete


@SeriesStatus_Complete @VaccineGroup_Hib @Gender_Female @ForecastTestType_NotRecommendedSeriesComplete
Scenario: [CTC 2013-0309] - #4 at 365 days of age, interval between #3-4 >8 weeks -4 days
	# added on 2013-01-01
	Given a female Patient born on 2010-01-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2010-03-01        | ACTHIB       | 48  | PMC |                   | Valid             |
		| 2010-05-01        | ACTHIB       | 48  | PMC |                   | Valid             |
	When the Patient is assessed for Hib on 2011-01-01
	Then the assessment should not recommend a dose for Hib
	And the series status should be Complete


@SeriesStatus_Complete @VaccineGroup_Hib @Gender_Female @ForecastTestType_NotRecommendedSeriesComplete
Scenario: [CTC 2013-0310] - # 4 at 15 months of age
	# added on 2013-01-01
	Given a female Patient born on 2010-01-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2010-03-01        | ACTHIB       | 48  | PMC |                   | Valid             |
		| 2010-05-01        | ACTHIB       | 48  | PMC |                   | Valid             |
	When the Patient is assessed for Hib on 2011-04-01
	Then the assessment should not recommend a dose for Hib
	And the series status should be Complete


@SeriesStatus_AgedOut @VaccineGroup_Hib @Gender_Female @ForecastTestType_NotRecommendedTooOld
Scenario: [CTC 2013-0313] - #4 at 5 years
	# updated on 2014-11-07 in version 1.6 - v1.6: Updated Series Status from "Not Complete" to "Aged Out" to align with updated CDSi Logic Specification Series Statuses.; ; v1.2: Within the scope of the CDSi effort, Hib on or after 5 years is not recommended.  The last administered dose was changed t
	Given a female Patient born on 2007-01-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2007-03-01        | ACTHIB       | 48  | PMC |                   | Valid             |
		| 2007-05-01        | ACTHIB       | 48  | PMC |                   | Valid             |
	When the Patient is assessed for Hib on 2012-01-01
	Then the assessment should not recommend a dose for Hib
	And the series status should be Aged Out


@SeriesStatus_AgedOut @VaccineGroup_Hib @Gender_Female @ForecastTestType_NotRecommendedTooOld
Scenario: [CTC 2013-0314] - #4 at 7 years
	# updated on 2014-11-07 in version 1.6 - v1.6: Updated Series Status from "Not Complete" to "Aged Out" to align with updated CDSi Logic Specification Series Statuses.; ; v1.2: Within the scope of the CDSi effort, Hib on or after 5 years is not recommended.  The last administered dose was changed t
	Given a female Patient born on 2005-01-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2005-03-01        | ACTHIB       | 48  | PMC |                   | Valid             |
		| 2005-05-01        | ACTHIB       | 48  | PMC |                   | Valid             |
	When the Patient is assessed for Hib on 2012-01-01
	Then the assessment should not recommend a dose for Hib
	And the series status should be Aged Out


@SeriesStatus_NotComplete @VaccineGroup_Hib @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0315] - Child<2 months, no shots, #1 forecasted at 2 months of age
	# added on 2013-01-01
	Given a female Patient born on 2010-01-01
	And no immunizations have been given
	When the Patient is assessed for Hib on 2010-01-01
	Then the assessment should recommend a dose for Hib on 2010-03-01
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_Hib @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0317] - # 2 at 10 wks-4 days, PRP-OMP series
	# added on 2013-01-01
	Given a female Patient born on 2005-01-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2005-02-08        | PEDVAXHIB    | 49  | MSD |                   | Valid             |
		| 2005-03-08        | PEDVAXHIB    | 49  | MSD |                   | Valid             |
	When the Patient is assessed for Hib on 2005-03-08
	Then the assessment should recommend a dose for Hib on 2006-01-01
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_Hib @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0318] - # 2 at 10 wks-3 days, PRP-OMP series
	# added on 2013-01-01
	Given a female Patient born on 2005-01-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2005-02-08        | PEDVAXHIB    | 49  | MSD |                   | Valid             |
		| 2005-03-09        | PEDVAXHIB    | 49  | MSD |                   | Valid             |
	When the Patient is assessed for Hib on 2005-03-09
	Then the assessment should recommend a dose for Hib on 2006-01-01
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_Hib @Gender_Female @ForecastTestType_RecommendedBasedOnMinimumIntervalFromPreviousDoseCatchUp
Scenario: [CTC 2013-0319] - # 2 at 12 months
	# added on 2013-01-01
	Given a female Patient born on 2005-01-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2005-03-01        | ACTHIB       | 48  | PMC |                   | Valid             |
		| 2006-01-01        | ACTHIB       | 48  | PMC |                   | Valid             |
	When the Patient is assessed for Hib on 2006-01-01
	Then the assessment should recommend a dose for Hib on 2006-02-26
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_Hib @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0320] - #3 at 5m (#1, #2 at 2 and 4m)
	# added on 2013-01-01
	Given a female Patient born on 2010-01-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2010-03-01        | COMVAX       | 51  | MSD |                   | Valid             |
		| 2010-05-01        | PEDVAXHIB    | 49  | MSD |                   | Valid             |
	When the Patient is assessed for Hib on 2010-06-01
	Then the assessment should recommend a dose for Hib on 2011-01-01
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_Hib @Gender_Female @ForecastTestType_RecommendedBasedOnMinimumIntervalFromPreviousDoseCatchUp
Scenario: [CTC 2013-0321] - #3 at 10 months and 9 days (#1,2 at 2 and 4 m)
	# added on 2013-01-01
	Given a female Patient born on 2010-01-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2010-03-01        | COMVAX       | 51  | MSD |                   | Valid             |
		| 2010-04-01        | COMVAX       | 51  | MSD |                   | Valid             |
	When the Patient is assessed for Hib on 2010-11-10
	Then the assessment should recommend a dose for Hib on 2011-01-05
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_Hib @Gender_Female @ForecastTestType_RecommendedBasedOnMinimumIntervalFromPreviousDoseCatchUp
Scenario: [CTC 2013-0322] - #3 at 11 months
	# added on 2013-01-01
	Given a female Patient born on 2010-01-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2010-03-01        | COMVAX       | 51  | MSD |                   | Valid             |
		| 2010-05-01        | PEDVAXHIB    | 49  | MSD |                   | Valid             |
	When the Patient is assessed for Hib on 2010-12-01
	Then the assessment should recommend a dose for Hib on 2011-01-26
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_Hib @Gender_Female @ForecastTestType_RecommendedBasedOnMinimumIntervalFromPreviousDoseCatchUp
Scenario: [CTC 2013-0323] - #3 at 12 months -5 days
	# added on 2013-01-01
	Given a female Patient born on 2010-01-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2010-03-01        | COMVAX       | 51  | MSD |                   | Valid             |
		| 2010-05-01        | COMVAX       | 51  | MSD |                   | Valid             |
	When the Patient is assessed for Hib on 2010-12-27
	Then the assessment should recommend a dose for Hib on 2011-02-21
	And the series status should be Not Complete


@SeriesStatus_Complete @VaccineGroup_Hib @Gender_Female @ForecastTestType_NotRecommendedSeriesComplete
Scenario: [CTC 2013-0324] - #3 at 12 months - 3 days
	# updated on 2013-06-26 in version 1.1 - This patient should have been marked complete for Hib.  No Further Doses Needed.
	Given a female Patient born on 2005-01-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2005-03-01        | ACTHIB       | 48  | PMC |                   | Valid             |
		| 2005-05-01        | ACTHIB       | 48  | PMC |                   | Valid             |
	When the Patient is assessed for Hib on 2005-12-29
	Then the assessment should not recommend a dose for Hib
	And the series status should be Complete


@SeriesStatus_Complete @VaccineGroup_Hib @Gender_Female @ForecastTestType_NotRecommendedSeriesComplete
Scenario: [CTC 2013-0325] - #3 at 15 months
	# added on 2013-01-01
	Given a female Patient born on 2005-01-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2005-03-01        | ACTHIB       | 48  | PMC |                   | Valid             |
		| 2005-05-01        | ACTHIB       | 48  | PMC |                   | Valid             |
	When the Patient is assessed for Hib on 2006-04-01
	Then the assessment should not recommend a dose for Hib
	And the series status should be Complete


@SeriesStatus_Complete @VaccineGroup_Hib @Gender_Female @ForecastTestType_NotRecommendedSeriesComplete
Scenario: [CTC 2013-0326] - #3 at 59 months
	# added on 2013-01-01
	Given a female Patient born on 2007-01-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2007-03-01        | COMVAX       | 51  | MSD |                   | Valid             |
		| 2007-05-01        | PEDVAXHIB    | 49  | MSD |                   | Valid             |
	When the Patient is assessed for Hib on 2011-12-31
	Then the assessment should not recommend a dose for Hib
	And the series status should be Complete


@SeriesStatus_NotComplete @VaccineGroup_Hib @Gender_Female @ForecastTestType_RecommendedBasedOnMinimumIntervalFromPreviousDoseCatchUp
Scenario: [CTC 2013-0327] - #1 at 7 months-5 days
	# added on 2013-01-01
	Given a female Patient born on 2010-01-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2010-07-27        | ACTHIB       | 48  | PMC |                   | Valid             |
	When the Patient is assessed for Hib on 2010-07-27
	Then the assessment should recommend a dose for Hib on 2010-08-24
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_Hib @Gender_Female @ForecastTestType_RecommendedBasedOnMinimumIntervalFromPreviousDoseCatchUp
Scenario: [CTC 2013-0328] - #1 at 7 months- 3 days
	# updated on 2013-06-26 in version 1.1 - Past Due Date was incorrect.  Should be in alignment with the earliest and recommended.  Child is in catch-up schedule.
	Given a female Patient born on 2005-01-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2005-07-29        | ACTHIB       | 48  | PMC |                   | Valid             |
	When the Patient is assessed for Hib on 2005-07-29
	Then the assessment should recommend a dose for Hib on 2005-08-26
	And the series status should be Not Complete


@SeriesStatus_Complete @VaccineGroup_Hib @Gender_Female @ForecastTestType_NotRecommendedSeriesComplete
Scenario: [CTC 2013-0329] - Dose 2 to 3, interval 8 weeks -3 days, #3 after 12 months of age
	# updated on 2013-06-26 in version 1.1 - This patient should have been marked complete for Hib.  No Further Doses Needed.
	Given a female Patient born on 2005-01-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2005-03-01        | ACTHIB       | 48  | PMC |                   | Valid             |
		| 2005-11-09        | ACTHIB       | 48  | PMC |                   | Valid             |
	When the Patient is assessed for Hib on 2006-01-01
	Then the assessment should not recommend a dose for Hib
	And the series status should be Complete


@SeriesStatus_NotComplete @VaccineGroup_Hib @Gender_Female @ForecastTestType_RecommendedBasedOnMinimumIntervalFromPreviousDoseCatchUp
Scenario: [CTC 2013-0330] - # 1 at 7 months -4 days
	# updated on 2013-06-26 in version 1.1 - Past Due Date was incorrect.  Should be in alignment with the earliest and recommended.  Child is in catch-up schedule.
	Given a female Patient born on 2005-01-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2005-07-28        | ACTHIB       | 48  | PMC |                   | Valid             |
	When the Patient is assessed for Hib on 2005-07-28
	Then the assessment should recommend a dose for Hib on 2005-08-25
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_Hib @Gender_Female @ForecastTestType_RecommendedBasedOnMinimumIntervalFromPreviousDoseCatchUp
Scenario: [CTC 2013-0331] - # 1 at 12 months minus 5 days
	# added on 2013-01-01
	Given a female Patient born on 2010-01-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2010-12-27        | ACTHIB       | 48  | PMC |                   | Valid             |
	When the Patient is assessed for Hib on 2010-12-27
	Then the assessment should recommend a dose for Hib on 2011-01-24
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_Hib @Gender_Female @ForecastTestType_RecommendedBasedOnMinimumIntervalFromPreviousDoseCatchUp
Scenario: [CTC 2013-0332] - # 1 at 12 months -4 days
	# updated on 2013-06-26 in version 1.1 - Past Due Date was incorrect.  Should be in alignment with the earliest and recommended.  Child is in catch-up schedule.
	Given a female Patient born on 2010-01-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2010-12-28        | ACTHIB       | 48  | PMC |                   | Valid             |
	When the Patient is assessed for Hib on 2010-12-28
	Then the assessment should recommend a dose for Hib on 2011-02-22
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_Hib @Gender_Female @ForecastTestType_RecommendedBasedOnMinimumIntervalFromPreviousDoseCatchUp
Scenario: [CTC 2013-0333] - # 1 at 12 months -3 days
	# updated on 2013-06-26 in version 1.1 - Past Due Date was incorrect.  Should be in alignment with the earliest and recommended.  Child is in catch-up schedule.
	Given a female Patient born on 2010-01-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2010-12-29        | ACTHIB       | 48  | PMC |                   | Valid             |
	When the Patient is assessed for Hib on 2010-12-29
	Then the assessment should recommend a dose for Hib on 2011-02-23
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_Hib @Gender_Female @ForecastTestType_RecommendedBasedOnMinimumIntervalFromInvalidDose
Scenario: [CTC 2013-0334] - #2 at 7 m and 23 days (#1 at 7 m)
	# added on 2013-01-01
	Given a female Patient born on 2005-01-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason   | Evaluation Status |
		| 2005-08-01        | ACTHIB       | 48  | PMC |                     | Valid             |
		| 2005-08-24        | ACTHIB       | 48  | PMC | Interval: Too Short | Not Valid         |
	When the Patient is assessed for Hib on 2005-08-24
	Then the assessment should recommend a dose for Hib on 2005-09-21
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_Hib @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0335] - #2 at 7 m and 24 days (#1 at 7 m)
	# added on 2013-01-01
	Given a female Patient born on 2005-01-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2005-08-01        | ACTHIB       | 48  | PMC |                   | Valid             |
		| 2005-08-25        | ACTHIB       | 48  | PMC |                   | Valid             |
	When the Patient is assessed for Hib on 2005-08-25
	Then the assessment should recommend a dose for Hib on 2006-01-01
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_Hib @Gender_Female @ForecastTestType_RecommendedBasedOnMinimumIntervalFromPreviousDoseCatchUp
Scenario: [CTC 2013-0336] - #2 at 11 m (#1 at 7 m)
	# added on 2013-01-01
	Given a female Patient born on 2005-01-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2005-08-01        | ACTHIB       | 48  | PMC |                   | Valid             |
		| 2005-12-01        | ACTHIB       | 48  | PMC |                   | Valid             |
	When the Patient is assessed for Hib on 2005-12-01
	Then the assessment should recommend a dose for Hib on 2006-01-26
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_Hib @Gender_Female @ForecastTestType_RecommendedBasedOnMinimumIntervalFromPreviousDoseCatchUp
Scenario: [CTC 2013-0337] - #2 at 12 m  (#1 at 7 m)
	# added on 2013-01-01
	Given a female Patient born on 2005-01-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2005-08-01        | ACTHIB       | 48  | PMC |                   | Valid             |
		| 2006-01-01        | ACTHIB       | 48  | PMC |                   | Valid             |
	When the Patient is assessed for Hib on 2006-01-01
	Then the assessment should recommend a dose for Hib on 2006-02-26
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_Hib @Gender_Female @ForecastTestType_RecommendedBasedOnMinimumIntervalFromInvalidDose
Scenario: [CTC 2013-0338] - #3 at 365 d -5 days (#1 at 7m, #2 at 8m)
	# updated on 2013-08-29 in version 1.2 - Dose 3 was too young by 1 day according to the cath-up schedule.  Evaluation of dose 3 was changed from valid to not valid with a reason of Age: Too Young which aligns with original test case evaluation test type and forecast test type
	Given a female Patient born on 2005-01-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2005-08-01        | ACTHIB       | 48  | PMC |                   | Valid             |
		| 2005-09-01        | ACTHIB       | 48  | PMC |                   | Valid             |
	When the Patient is assessed for Hib on 2005-12-27
	Then the assessment should recommend a dose for Hib on 2006-02-21
	And the series status should be Not Complete


@SeriesStatus_Complete @VaccineGroup_Hib @Gender_Female @ForecastTestType_NotRecommendedSeriesComplete
Scenario: [CTC 2013-0339] - #3 at 365 d -4 days (#1 at 7m, #2 at 8m)
	# added on 2013-01-01
	Given a female Patient born on 2005-01-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2005-08-01        | ACTHIB       | 48  | PMC |                   | Valid             |
		| 2005-09-01        | ACTHIB       | 48  | PMC |                   | Valid             |
	When the Patient is assessed for Hib on 2005-12-28
	Then the assessment should not recommend a dose for Hib
	And the series status should be Complete


@SeriesStatus_Complete @VaccineGroup_Hib @Gender_Female @ForecastTestType_NotRecommendedSeriesComplete
Scenario: [CTC 2013-0340] - #3 at 365 days - 3 days (#1 at 7m, #2 at 8m)
	# added on 2013-01-01
	Given a female Patient born on 2005-01-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2005-08-01        | ACTHIB       | 48  | PMC |                   | Valid             |
		| 2005-09-01        | ACTHIB       | 48  | PMC |                   | Valid             |
	When the Patient is assessed for Hib on 2005-12-29
	Then the assessment should not recommend a dose for Hib
	And the series status should be Complete


@SeriesStatus_Complete @VaccineGroup_Hib @Gender_Female @ForecastTestType_NotRecommendedSeriesComplete
Scenario: [CTC 2013-0341] - #3 at 59 months (#1 at 7m, #2 at 8m)
	# added on 2013-01-01
	Given a female Patient born on 2005-01-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2005-08-01        | ACTHIB       | 48  | PMC |                   | Valid             |
		| 2005-09-01        | ACTHIB       | 48  | PMC |                   | Valid             |
	When the Patient is assessed for Hib on 2009-12-01
	Then the assessment should not recommend a dose for Hib
	And the series status should be Complete


@SeriesStatus_AgedOut @VaccineGroup_Hib @Gender_Female @ForecastTestType_NotRecommendedTooOld
Scenario: [CTC 2013-0342] - #3 at 5 years (#1 at 7m, #2 at 8m)
	# updated on 2014-11-07 in version 1.6 - v1.6: Updated Series Status from "Not Complete" to "Aged Out" to align with updated CDSi Logic Specification Series Statuses.; ; v1.2: Within the scope of the CDSi effort, Hib on or after 5 years is not recommended.  The last administered dose was changed t
	Given a female Patient born on 2005-01-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2005-08-01        | ACTHIB       | 48  | PMC |                   | Valid             |
		| 2005-09-01        | ACTHIB       | 48  | PMC |                   | Valid             |
	When the Patient is assessed for Hib on 2010-01-01
	Then the assessment should not recommend a dose for Hib
	And the series status should be Aged Out


@SeriesStatus_NotComplete @VaccineGroup_Hib @Gender_Female @ForecastTestType_RecommendedBasedOnMinimumIntervalFromPreviousDoseCatchUp
Scenario: [CTC 2013-0343] - Dose 2 to 3, interval 8 weeks-5 days, #3 after 12 months of age
	# updated on 2013-06-26 in version 1.1 - Dose 3 should be invalid due to an interval violation
	Given a female Patient born on 2010-01-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2010-03-01        | COMVAX       | 51  | MSD |                   | Valid             |
		| 2010-12-15        | PEDVAXHIB    | 49  | MSD |                   | Valid             |
	When the Patient is assessed for Hib on 2011-02-04
	Then the assessment should recommend a dose for Hib on 2011-04-01
	And the series status should be Not Complete


@SeriesStatus_Complete @VaccineGroup_Hib @Gender_Female @ForecastTestType_NotRecommendedSeriesComplete
Scenario: [CTC 2013-0344] - Dose 2 to 3, interval 8 weeks -4 days, #3 after 12 months of age
	# added on 2013-01-01
	Given a female Patient born on 2010-01-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2010-03-01        | COMVAX       | 51  | MSD |                   | Valid             |
		| 2010-12-15        | PEDVAXHIB    | 49  | MSD |                   | Valid             |
	When the Patient is assessed for Hib on 2011-02-05
	Then the assessment should not recommend a dose for Hib
	And the series status should be Complete


@SeriesStatus_Complete @VaccineGroup_Hib @Gender_Female @ForecastTestType_NotRecommendedSeriesComplete
Scenario: [CTC 2013-0345] - Dose 2 to 3, interval 8 weeks -3 days, #3 after 12 months of age
	# added on 2013-01-01
	Given a female Patient born on 2010-01-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2010-03-01        | COMVAX       | 51  | MSD |                   | Valid             |
		| 2010-12-15        | PEDVAXHIB    | 49  | MSD |                   | Valid             |
	When the Patient is assessed for Hib on 2011-02-06
	Then the assessment should not recommend a dose for Hib
	And the series status should be Complete


@SeriesStatus_NotComplete @VaccineGroup_Hib @Gender_Female @ForecastTestType_RecommendedBasedOnMinimumIntervalFromPreviousDoseCatchUp
Scenario: [CTC 2013-0346] - #1 at 15 months -5 days
	# updated on 2013-06-26 in version 1.1 - Past Due Date was incorrect.  Should be in alignment with the earliest and recommended.  Child is in catch-up schedule.
	Given a female Patient born on 2010-01-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2011-03-27        | ACTHIB       | 48  | PMC |                   | Valid             |
	When the Patient is assessed for Hib on 2011-03-27
	Then the assessment should recommend a dose for Hib on 2011-05-22
	And the series status should be Not Complete


@SeriesStatus_Complete @VaccineGroup_Hib @Gender_Female @ForecastTestType_NotRecommendedSeriesComplete
Scenario: [CTC 2013-0347] - #1 at 15 months -4 days
	# added on 2013-01-01
	Given a female Patient born on 2010-01-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2011-03-28        | ACTHIB       | 48  | PMC |                   | Valid             |
	When the Patient is assessed for Hib on 2011-03-28
	Then the assessment should not recommend a dose for Hib
	And the series status should be Complete


@SeriesStatus_NotComplete @VaccineGroup_Hib @Gender_Female @ForecastTestType_RecommendedBasedOnMinimumIntervalFromInvalidDose
Scenario: [CTC 2013-0348] - Dose 1 to 2 at 8 weeks -5 days (#1 at 1 year)
	# updated on 2013-08-08 in version 1.2 - Condensed the past due date to align with the earliest and recommended date since this child is in catch-up
	Given a female Patient born on 2010-01-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason   | Evaluation Status |
		| 2011-01-01        | ACTHIB       | 48  | PMC |                     | Valid             |
		| 2011-02-21        | PEDVAXHIB    | 49  | MSD | Interval: Too Short | Not Valid         |
	When the Patient is assessed for Hib on 2011-02-21
	Then the assessment should recommend a dose for Hib on 2011-04-18
	And the series status should be Not Complete


@SeriesStatus_Complete @VaccineGroup_Hib @Gender_Female @ForecastTestType_NotRecommendedSeriesComplete
Scenario: [CTC 2013-0349] - Dose 1 to 2 at 8 weeks -4 days (#1 at >=1 year)
	# added on 2013-01-01
	Given a female Patient born on 2010-01-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2011-01-01        | COMVAX       | 51  | MSD |                   | Valid             |
		| 2011-02-22        | HIBTITER     | 47  | WAL |                   | Valid             |
	When the Patient is assessed for Hib on 2011-02-22
	Then the assessment should not recommend a dose for Hib
	And the series status should be Complete


@SeriesStatus_Complete @VaccineGroup_Hib @Gender_Female @ForecastTestType_NotRecommendedSeriesComplete
Scenario: [CTC 2013-0350] - Dose 1 to 2 at 8 weeks - 3 days (#1 at >=1 year)
	# added on 2013-01-01
	Given a female Patient born on 2010-01-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2011-01-01        | ACTHIB       | 48  | PMC |                   | Valid             |
		| 2011-02-23        | COMVAX       | 51  | MSD |                   | Valid             |
	When the Patient is assessed for Hib on 2011-02-23
	Then the assessment should not recommend a dose for Hib
	And the series status should be Complete


@SeriesStatus_Complete @VaccineGroup_Hib @Gender_Female @ForecastTestType_NotRecommendedSeriesComplete
Scenario: [CTC 2013-0351] - # 3 (#1 at  one year, #2 at 15 months)
	# added on 2013-01-01
	Given a female Patient born on 2005-01-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2006-01-01        | ACTHIB       | 48  | PMC |                   | Valid             |
		| 2006-04-01        | ACTHIB       | 48  | PMC |                   | Valid             |
	When the Patient is assessed for Hib on 2006-05-27
	Then the assessment should not recommend a dose for Hib
	And the series status should be Complete


@SeriesStatus_Complete @VaccineGroup_Hib @Gender_Female @ForecastTestType_NotRecommendedSeriesComplete
Scenario: [CTC 2013-0352] - # 1 at 15 m - 3 days
	# added on 2013-01-01
	Given a female Patient born on 2010-01-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2011-03-29        | ACTHIB       | 48  | PMC |                   | Valid             |
	When the Patient is assessed for Hib on 2011-03-29
	Then the assessment should not recommend a dose for Hib
	And the series status should be Complete


@SeriesStatus_Complete @VaccineGroup_Hib @Gender_Female @ForecastTestType_NotRecommendedSeriesComplete
Scenario: [CTC 2013-0353] - # 1 at 5 years - 1 day
	# added on 2013-01-01
	Given a female Patient born on 2006-01-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2010-12-31        | ACTHIB       | 48  | PMC |                   | Valid             |
	When the Patient is assessed for Hib on 2010-12-31
	Then the assessment should not recommend a dose for Hib
	And the series status should be Complete


@SeriesStatus_Complete @VaccineGroup_Hib @Gender_Female @ForecastTestType_NotRecommendedSeriesComplete
Scenario: [CTC 2013-0354] - #2 at 2 years, #1 at 15 m
	# added on 2013-01-01
	Given a female Patient born on 2005-01-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason       | Evaluation Status |
		| 2006-04-01        | ACTHIB       | 48  | PMC |                         | Valid             |
		| 2007-01-01        | ACTHIB       | 48  | PMC | Series Already Complete | Extraneous        |
	When the Patient is assessed for Hib on 2007-01-01
	Then the assessment should not recommend a dose for Hib
	And the series status should be Complete


@SeriesStatus_NotComplete @VaccineGroup_Hib @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0355] - #2 at 5 months
	# added on 2013-01-01
	Given a female Patient born on 2012-01-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2012-03-01        | ACTHIB       | 48  | PMC |                   | Valid             |
		| 2012-06-01        | ACTHIB       | 48  | PMC |                   | Valid             |
	When the Patient is assessed for Hib on 2012-06-01
	Then the assessment should recommend a dose for Hib on 2012-07-01
	And the series status should be Not Complete


@SeriesStatus_Complete @VaccineGroup_Hib @Gender_Female @ForecastTestType_NotRecommendedSeriesComplete
Scenario: [CTC 2013-0356] - # 2 Pentacel at 6 yrs 11.5 mo
	# added on 2013-01-01
	Given a female Patient born on 2005-01-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason       | Evaluation Status |
		| 2007-09-22        | PENTACEL     | 120 | PMC |                         | Valid             |
		| 2011-12-15        | PENTACEL     | 120 | PMC | Series Already Complete | Extraneous        |
	When the Patient is assessed for Hib on 2011-12-15
	Then the assessment should not recommend a dose for Hib
	And the series status should be Complete


@SeriesStatus_NotComplete @VaccineGroup_Hib @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0357] - # 3 Pentacel at 14 wks-5 days
	# updated on 2013-06-26 in version 1.1 - Past Due Date was incorrectly calculated as it was missing the 4 week buffer for overdue.
	Given a female Patient born on 2010-06-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2010-07-09        | PENTACEL     | 120 | PMC |                   | Valid             |
		| 2010-08-06        | PENTACEL     | 120 | PMC |                   | Valid             |
	When the Patient is assessed for Hib on 2010-09-02
	Then the assessment should recommend a dose for Hib on 2010-12-01
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_Hib @Gender_Female @ForecastTestType_RecommendedBasedOnMinimumIntervalFromPreviousDoseCatchUp
Scenario: [CTC 2013-0358] - invalid age dose 1 as first of others
	# added on 2013-01-01
	Given a female Patient born on 2011-08-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2011-09-05        | PENTACEL     | 120 | PMC | Age: Too Young    | Not Valid         |
		| 2011-12-01        | PENTACEL     | 120 | PMC |                   | Valid             |
	When the Patient is assessed for Hib on 2012-02-01
	Then the assessment should recommend a dose for Hib on 2012-02-29
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_Hib @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0359] - dose 1 to 2 Pentacel, interval 28-4 days
	# updated on 2013-06-26 in version 1.1 - Past Due Date was incorrectly calculated as it was missing the 4 week buffer for overdue.
	Given a female Patient born on 2009-11-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2010-01-03        | PENTACEL     | 120 | PMC |                   | Valid             |
		| 2010-01-27        | PENTACEL     | 120 | PMC |                   | Valid             |
	When the Patient is assessed for Hib on 2010-01-27
	Then the assessment should recommend a dose for Hib on 2010-05-01
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_Hib @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0360] - dose 2 to 3 Pentacel, interval 28-5 days
	# updated on 2013-06-26 in version 1.1 - Past Due Date was incorrectly calculated as it was missing the 4 week buffer for overdue.
	Given a female Patient born on 2008-04-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2008-06-01        | PENTACEL     | 120 | PMC |                   | Valid             |
		| 2008-08-01        | PENTACEL     | 120 | PMC |                   | Valid             |
	When the Patient is assessed for Hib on 2008-08-24
	Then the assessment should recommend a dose for Hib on 2008-10-01
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_Hib @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0365] - # 1 Pentacel at 6 wks
	# added on 2013-01-01
	Given a female Patient born on 2008-04-04
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2008-05-16        | PENTACEL     | 120 | PMC |                   | Valid             |
	When the Patient is assessed for Hib on 2008-05-16
	Then the assessment should recommend a dose for Hib on 2008-08-04
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_Hib @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0366] - # 1 Pentacel at 6 wks-4 days
	# added on 2013-01-01
	Given a female Patient born on 2008-04-04
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2008-05-12        | PENTACEL     | 120 | PMC |                   | Valid             |
	When the Patient is assessed for Hib on 2008-05-12
	Then the assessment should recommend a dose for Hib on 2008-08-04
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_Hib @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0367] - # 1 Pentacel at 6 wks-5 days
	# added on 2013-01-01
	Given a female Patient born on 2010-05-06
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2010-06-12        | PENTACEL     | 120 | PMC | Age: Too Young    | Not Valid         |
	When the Patient is assessed for Hib on 2010-06-12
	Then the assessment should recommend a dose for Hib on 2010-07-06
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_Hib @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0368] - # 2 Pentacel at 10 wks-4 days
	# added on 2013-01-01
	Given a female Patient born on 2010-10-10
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2010-11-17        | PENTACEL     | 120 | PMC |                   | Valid             |
		| 2010-12-15        | PENTACEL     | 120 | PMC |                   | Valid             |
	When the Patient is assessed for Hib on 2010-12-15
	Then the assessment should recommend a dose for Hib on 2011-04-10
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_Hib @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0369] - # 2 Pentacel at 10 wks-5 days
	# added on 2013-01-01
	Given a female Patient born on 2010-10-10
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2010-11-17        | PENTACEL     | 120 | PMC |                   | Valid             |
		| 2010-12-14        | PENTACEL     | 120 | PMC | Age: Too Young    | Not Valid         |
	When the Patient is assessed for Hib on 2010-12-14
	Then the assessment should recommend a dose for Hib on 2011-02-10
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_Hib @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0370] - # 3 Pentacel at 14 wks-4 days
	# updated on 2013-06-26 in version 1.1 - Past Due Date was incorrect based on recommendations.
	Given a female Patient born on 2010-06-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2010-07-09        | PENTACEL     | 120 | PMC |                   | Valid             |
		| 2010-08-06        | PENTACEL     | 120 | PMC |                   | Valid             |
	When the Patient is assessed for Hib on 2010-09-03
	Then the assessment should recommend a dose for Hib on 2011-06-01
	And the series status should be Not Complete


@SeriesStatus_Complete @VaccineGroup_Hib @Gender_Female @ForecastTestType_NotRecommendedSeriesComplete
Scenario: [CTC 2013-0371] - # 4 Pentacel ≥ age 12 mo
	# added on 2013-01-01
	Given a female Patient born on 2010-04-04
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2010-06-04        | PENTACEL     | 120 | PMC |                   | Valid             |
		| 2010-08-04        | PENTACEL     | 120 | PMC |                   | Valid             |
	When the Patient is assessed for Hib on 2011-04-04
	Then the assessment should not recommend a dose for Hib
	And the series status should be Complete


@SeriesStatus_Complete @VaccineGroup_Hib @Gender_Female @ForecastTestType_NotRecommendedSeriesComplete
Scenario: [CTC 2013-0372] - # 4 Pentacel at 1 yr -4 days
	# added on 2013-01-01
	Given a female Patient born on 2010-04-04
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2010-06-04        | PENTACEL     | 120 | PMC |                   | Valid             |
		| 2010-08-04        | PENTACEL     | 120 | PMC |                   | Valid             |
	When the Patient is assessed for Hib on 2011-03-31
	Then the assessment should not recommend a dose for Hib
	And the series status should be Complete


@SeriesStatus_NotComplete @VaccineGroup_Hib @Gender_Female @ForecastTestType_RecommendedBasedOnMinimumIntervalFromInvalidDose
Scenario: [CTC 2013-0373] - # 4 Pentacel at 1 yr -5 days
	# updated on 2013-06-26 in version 1.1 - Past Due Date was incorrect based on recommendations.
	Given a female Patient born on 2010-04-04
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2010-06-04        | PENTACEL     | 120 | PMC |                   | Valid             |
		| 2010-08-04        | PENTACEL     | 120 | PMC |                   | Valid             |
	When the Patient is assessed for Hib on 2011-03-30
	Then the assessment should recommend a dose for Hib on 2011-05-25
	And the series status should be Not Complete


@SeriesStatus_Complete @VaccineGroup_Hib @Gender_Female @ForecastTestType_NotRecommendedSeriesComplete
Scenario: [CTC 2013-0374] - # 4 Pentacel at 4 yrs
	# added on 2013-01-01
	Given a female Patient born on 2006-05-06
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2006-09-15        | PENTACEL     | 120 | PMC |                   | Valid             |
		| 2007-04-28        | PENTACEL     | 120 | PMC |                   | Valid             |
	When the Patient is assessed for Hib on 2010-05-10
	Then the assessment should not recommend a dose for Hib
	And the series status should be Complete


@SeriesStatus_AgedOut @VaccineGroup_Hib @Gender_Female @ForecastTestType_NotRecommendedTooOld
Scenario: [CTC 2013-0375] - # 4 Pentacel at 5 yrs=off label but counts
	# updated on 2014-11-07 in version 1.6 - v1.6: Updated Series Status from "Not Complete" to "Aged Out" to align with updated CDSi Logic Specification Series Statuses.; ; v1.1: Changed Dose 3 vaccination date from 2/7/08 to 2/3/08 to avoid completion of series on dose 3 to properly test off-label u
	Given a female Patient born on 2007-02-08
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2007-06-08        | PENTACEL     | 120 | PMC |                   | Valid             |
		| 2007-12-05        | PENTACEL     | 120 | PMC |                   | Valid             |
	When the Patient is assessed for Hib on 2012-02-08
	Then the assessment should not recommend a dose for Hib
	And the series status should be Aged Out


@SeriesStatus_Complete @VaccineGroup_Hib @Gender_Female @ForecastTestType_NotRecommendedSeriesComplete
Scenario: [CTC 2013-0376] - # 5 Pentacel at ≥ 4 yrs is off label but counts
	# added on 2013-01-01
	Given a female Patient born on 2008-02-08
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2009-01-08        | PENTACEL     | 120 | PMC |                   | Valid             |
		| 2009-04-08        | PENTACEL     | 120 | PMC |                   | Valid             |
	When the Patient is assessed for Hib on 2012-03-01
	Then the assessment should not recommend a dose for Hib
	And the series status should be Complete


@SeriesStatus_Contraindicated @VaccineGroup_Hib @Gender_Female @ForecastTestType_NotRecommendedContraindication
Scenario: [CTC 2013-0377] - Anaphylaxis to previous dose of Pentacel
	# added on 2013-01-01
	Given a female Patient born on 2010-06-06
	And the following medical history is reported
	| Medical History Text | Medical History Code | Medical History System |
	|                      | VXC20                | CDCPHINVS              |
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2010-08-02        | PENTACEL     | 120 | PMC |                   | Valid             |
	When the Patient is assessed for Hib on 2010-08-02
	Then the assessment should not recommend a dose for Hib
	And the series status should be Contraindicated


@SeriesStatus_NotComplete @VaccineGroup_Hib @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0378] - dose 1 to 2 Pentacel, interval 28-5 days
	# added on 2013-01-01
	Given a female Patient born on 2009-11-09
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason   | Evaluation Status |
		| 2010-01-03        | PENTACEL     | 120 | PMC |                     | Valid             |
		| 2010-01-26        | PENTACEL     | 120 | PMC | Interval: Too Short | Not Valid         |
	When the Patient is assessed for Hib on 2010-01-26
	Then the assessment should recommend a dose for Hib on 2010-03-09
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_Hib @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0379] - dose 2 to 3 Pentacel, interval 28-4 days
	# updated on 2013-06-26 in version 1.1 - Past Due Date was incorrect based on recommendations.
	Given a female Patient born on 2008-04-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2008-06-01        | PENTACEL     | 120 | PMC |                   | Valid             |
		| 2008-08-01        | PENTACEL     | 120 | PMC |                   | Valid             |
	When the Patient is assessed for Hib on 2008-08-25
	Then the assessment should recommend a dose for Hib on 2009-04-01
	And the series status should be Not Complete


@SeriesStatus_Complete @VaccineGroup_Hib @Gender_Female @ForecastTestType_NotRecommendedSeriesComplete
Scenario: [CTC 2013-0380] - invalid age dose 2 in midst of others
	# updated on 2013-06-26 in version 1.1 - This patient should have been marked complete for Hib.  No Further Doses Needed.
	Given a female Patient born on 2010-10-18
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2010-11-25        | PENTACEL     | 120 | PMC |                   | Valid             |
		| 2010-12-22        | PENTACEL     | 120 | PMC | Age: Too Young    | Not Valid         |
	When the Patient is assessed for Hib on 2011-10-20
	Then the assessment should not recommend a dose for Hib
	And the series status should be Complete


@SeriesStatus_Complete @VaccineGroup_Hib @Gender_Female @ForecastTestType_NotRecommendedSeriesComplete
Scenario: [CTC 2013-0381] - invalid age dose 3 in midst of others
	# updated on 2013-06-26 in version 1.1 - This patient should have been marked complete for Hib.  No Further Doses Needed.
	Given a female Patient born on 2010-06-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2010-07-09        | PENTACEL     | 120 | PMC |                   | Valid             |
		| 2010-08-06        | PENTACEL     | 120 | PMC |                   | Valid             |
	When the Patient is assessed for Hib on 2011-07-07
	Then the assessment should not recommend a dose for Hib
	And the series status should be Complete


@SeriesStatus_NotComplete @VaccineGroup_Hib @Gender_Female @ForecastTestType_RecommendedBasedOnMinimumIntervalFromPreviousDoseCatchUp
Scenario: [CTC 2013-0382] - invalid dose 1-2 interval in midst of others
	# added on 2013-01-01
	Given a female Patient born on 2009-02-11
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason   | Evaluation Status |
		| 2009-04-11        | PENTACEL     | 120 | PMC |                     | Valid             |
		| 2009-05-04        | PENTACEL     | 120 | PMC | Interval: Too Short | Not Valid         |
	When the Patient is assessed for Hib on 2009-08-01
	Then the assessment should recommend a dose for Hib on 2009-08-29
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_Hib @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0383] - Newborn
	# added on 2013-01-01
	Given a female Patient born on 2012-02-01
	And no immunizations have been given
	When the Patient is assessed for Hib on 2012-02-01
	Then the assessment should recommend a dose for Hib on 2012-04-01
	And the series status should be Not Complete


@SeriesStatus_AgedOut @VaccineGroup_Hib @Gender_Female @ForecastTestType_NotRecommendedTooOld
Scenario: [CTC 2013-0384] - Pentacel at 7 yrs; # 1 at age < 12 mo for DTaP and Hib 1
	# updated on 2014-11-07 in version 1.6 - v1.6: Updated Series Status from "Not Complete" to "Aged Out" to align with updated CDSi Logic Specification Series Statuses.; ; v1.2: Within the scope of the CDSi effort, Hib on or after 5 years is not recommended.  The last administered dose was changed t
	Given a female Patient born on 2003-09-16
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2004-02-25        | PENTACEL     | 120 | PMC |                   | Valid             |
		| 2010-09-16        | PENTACEL     | 120 | PMC | Age: Too Old      | Extraneous        |
	When the Patient is assessed for Hib on 2010-09-16
	Then the assessment should not recommend a dose for Hib
	And the series status should be Aged Out

