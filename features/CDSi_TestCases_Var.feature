Feature: Var CDSi test cases

@SeriesStatus_NotComplete @VaccineGroup_Var @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0789] - #1 at 15 months
	# updated on 2013-07-08 in version 1.1 - Improved test case name and forecast test type to acurately reflect what was being tested
	Given a female Patient born on 2000-03-14
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2001-06-14        | VARIVAX      | 21  | MSD |                   | Valid             |
	When the Patient is assessed for Var on 2001-06-14
	Then the assessment should recommend a dose for Var on 2004-03-14
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_Var @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0795] - No doses of Varicella: current age 13Y -1D
	# added on 2013-01-01
	Given a female Patient born on 1991-06-02
	And no immunizations have been given
	When the Patient is assessed for Var on 2004-06-01
	Then the assessment should recommend a dose for Var on 1992-06-02
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_Var @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0798] - #1 at 1 year
	# added on 2013-01-01
	Given a female Patient born on 2005-01-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2006-01-01        | VARIVAX      | 21  | MSD |                   | Valid             |
	When the Patient is assessed for Var on 2006-01-01
	Then the assessment should recommend a dose for Var on 2009-01-01
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_Var @Gender_Female @ForecastTestType_RecommendedBasedOnMinimumIntervalFromLiveVirusVaccine
Scenario: [CTC 2013-0803] - # 1 at 12 months-5 days
	# added on 2013-01-01
	Given a female Patient born on 2005-01-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2005-12-27        | VARIVAX      | 21  | MSD | Age: Too Young    | Not Valid         |
	When the Patient is assessed for Var on 2005-12-27
	Then the assessment should recommend a dose for Var on 2006-01-24
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_Var @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0804] - VAR # 1 at 12 months-4 days
	# added on 2013-01-01
	Given a female Patient born on 2005-01-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2005-12-28        | VARIVAX      | 21  | MSD |                   | Valid             |
	When the Patient is assessed for Var on 2005-12-28
	Then the assessment should recommend a dose for Var on 2009-01-01
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_Var @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0806] - Newborn forecasting
	# added on 2013-01-01
	Given a female Patient born on 2012-04-01
	And no immunizations have been given
	When the Patient is assessed for Var on 2012-04-01
	Then the assessment should recommend a dose for Var on 2013-04-01
	And the series status should be Not Complete


@SeriesStatus_Complete @VaccineGroup_Var @Gender_Female @ForecastTestType_NotRecommendedSeriesComplete
Scenario: [CTC 2013-0807] - # 2 at age 13 years + 28 days
	# added on 2013-01-01
	Given a female Patient born on 1998-10-18
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2011-10-18        | VARIVAX      | 21  | MSD |                   | Valid             |
		| 2011-11-15        | VARIVAX      | 21  | MSD |                   | Valid             |
	When the Patient is assessed for Var on 2011-11-15
	Then the assessment should not recommend a dose for Var
	And the series status should be Complete


@SeriesStatus_NotComplete @VaccineGroup_Var @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0808] - Dose 1 to dose 2 interval 28-1 days  in child < 13 years
	# updated on 2014-11-07 in version 1.6 - v1.6: Incorrect Forecast Test Type was used and has been updated to reflect how the recommended date was forecasted.
	Given a female Patient born on 2009-11-11
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason   | Evaluation Status |
		| 2010-11-12        | VARIVAX      | 21  | MSD |                     | Valid             |
		| 2010-12-09        | VARIVAX      | 21  | MSD | Interval: Too Short | Not Valid         |
	When the Patient is assessed for Var on 2010-12-09
	Then the assessment should recommend a dose for Var on 2013-11-11
	And the series status should be Not Complete


@SeriesStatus_Complete @VaccineGroup_Var @Gender_Female @ForecastTestType_NotRecommendedSeriesComplete
Scenario: [CTC 2013-0809] - Dose 1 to dose 2 interval 28 days  in child < 13 yrs old
	# added on 2013-01-01
	Given a female Patient born on 1997-01-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2006-03-01        | VARIVAX      | 21  | MSD |                   | Valid             |
		| 2006-03-29        | VARIVAX      | 21  | MSD |                   | Valid             |
	When the Patient is assessed for Var on 2006-03-29
	Then the assessment should not recommend a dose for Var
	And the series status should be Complete


@SeriesStatus_NotComplete @VaccineGroup_Var @Gender_Female @ForecastTestType_RecommendedBasedOnMinimumIntervalFromInvalidDose
Scenario: [CTC 2013-0810] - Dose 1 to dose 2 interval 28-5 days  in child ≥ 13 yrs old
	# added on 2013-01-01
	Given a female Patient born on 1997-01-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason   | Evaluation Status |
		| 2010-04-01        | VARIVAX      | 21  | MSD |                     | Valid             |
		| 2010-04-24        | VARIVAX      | 21  | MSD | Interval: Too Short | Not Valid         |
	When the Patient is assessed for Var on 2010-04-24
	Then the assessment should recommend a dose for Var on 2010-05-22
	And the series status should be Not Complete


@SeriesStatus_Complete @VaccineGroup_Var @Gender_Female @ForecastTestType_NotRecommendedSeriesComplete
Scenario: [CTC 2013-0811] - Dose 1 to dose 2 interval 28-4 days  in child ≥ 13 years old
	# added on 2013-01-01
	Given a female Patient born on 1997-01-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2010-04-01        | VARIVAX      | 21  | MSD |                   | Valid             |
		| 2010-04-25        | VARIVAX      | 21  | MSD |                   | Valid             |
	When the Patient is assessed for Var on 2010-04-25
	Then the assessment should not recommend a dose for Var
	And the series status should be Complete


@SeriesStatus_Complete @VaccineGroup_Var @Gender_Female @ForecastTestType_NotRecommendedSeriesComplete
Scenario: [CTC 2013-0812] - Dose 1 to dose 2 interval 28 days in child ≥ 13 years old
	# added on 2013-01-01
	Given a female Patient born on 1997-01-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2010-06-01        | VARIVAX      | 21  | MSD |                   | Valid             |
		| 2010-06-29        | VARIVAX      | 21  | MSD |                   | Valid             |
	When the Patient is assessed for Var on 2010-06-29
	Then the assessment should not recommend a dose for Var
	And the series status should be Complete


@SeriesStatus_NotComplete @VaccineGroup_Var @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0813] - VZ and MMR given on same day at age 12 months
	# added on 2013-01-01
	Given a female Patient born on 2008-08-08
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2009-08-08        | M-M-R II     | 03  | MSD |                   | Valid             |
		| 2009-08-08        | VARIVAX      | 21  | MSD |                   | Valid             |
	When the Patient is assessed for Var on 2009-08-08
	Then the assessment should recommend a dose for Var on 2012-08-08
	And the series status should be Not Complete


@SeriesStatus_Complete @VaccineGroup_Var @Gender_Female @ForecastTestType_NotRecommendedSeriesComplete
Scenario: [CTC 2013-0814] - Doses 1 and 2 of VZ and MMR given at ages 12 and 13 months
	# added on 2013-01-01
	Given a female Patient born on 2009-09-09
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2010-09-09        | M-M-R II     | 03  | MSD |                   | Valid             |
		| 2010-09-09        | VARIVAX      | 21  | MSD |                   | Valid             |
	When the Patient is assessed for Var on 2010-10-07
	Then the assessment should not recommend a dose for Var
	And the series status should be Complete


@SeriesStatus_NotComplete @VaccineGroup_Var @Gender_Female @ForecastTestType_RecommendedBasedOnMinimumIntervalFromLiveVirusVaccine
Scenario: [CTC 2013-0815] - MMR to VZ interval 28-1 day = invalid VZ
	# added on 2013-01-01
	Given a female Patient born on 2005-07-07
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason   | Evaluation Status |
		| 2006-07-07        | M-M-R II     | 03  | MSD |                     | Valid             |
		| 2006-08-03        | VARIVAX      | 21  | MSD | Live Virus Conflict | Not Valid         |
	When the Patient is assessed for Var on 2006-08-03
	Then the assessment should recommend a dose for Var on 2006-08-31
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_Var @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0816] - MMR given at age 12 mo; VZ at age 12 mo+28 days
	# added on 2013-01-01
	Given a female Patient born on 2010-10-10
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2011-10-10        | M-M-R II     | 03  | MSD |                   | Valid             |
		| 2011-11-07        | VARIVAX      | 21  | MSD |                   | Valid             |
	When the Patient is assessed for Var on 2011-11-07
	Then the assessment should recommend a dose for Var on 2014-10-10
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_Var @Gender_Female @ForecastTestType_RecommendedBasedOnMinimumIntervalFromLiveVirusVaccine
Scenario: [CTC 2013-0817] - # 1 at age 12 mo-5 days
	# added on 2013-01-01
	Given a female Patient born on 2009-11-10
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2010-11-05        | VARIVAX      | 21  | MSD | Age: Too Young    | Not Valid         |
	When the Patient is assessed for Var on 2010-11-05
	Then the assessment should recommend a dose for Var on 2010-12-03
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_Var @Gender_Female @ForecastTestType_RecommendedBasedOnMinimumIntervalFromLiveVirusVaccine
Scenario: [CTC 2013-0818] - # 1 MMRV at 12 m-5 days
	# added on 2013-01-01
	Given a female Patient born on 2009-11-10
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2010-11-05        | PROQUAD      | 94  | MSD | Age: Too Young    | Not Valid         |
	When the Patient is assessed for Var on 2010-11-05
	Then the assessment should recommend a dose for Var on 2010-12-03
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_Var @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0819] - # 1 MMRV at 12 m-4 days
	# added on 2013-01-01
	Given a female Patient born on 2005-07-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2006-06-27        | PROQUAD      | 94  | MSD |                   | Valid             |
	When the Patient is assessed for Var on 2006-06-27
	Then the assessment should recommend a dose for Var on 2009-07-01
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_Var @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0820] - # 1 MMRV at 12 months
	# added on 2013-01-01
	Given a female Patient born on 2009-07-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2010-07-01        | PROQUAD      | 94  | MSD |                   | Valid             |
	When the Patient is assessed for Var on 2010-07-01
	Then the assessment should recommend a dose for Var on 2013-07-01
	And the series status should be Not Complete


@SeriesStatus_Complete @VaccineGroup_Var @Gender_Female @ForecastTestType_NotRecommendedSeriesComplete
Scenario: [CTC 2013-0821] - Dose 1 to dose 2 MMRV interval 28 days in child < 15 months
	# added on 2013-01-01
	Given a female Patient born on 2008-05-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2009-06-01        | PROQUAD      | 94  | MSD |                   | Valid             |
		| 2009-06-29        | PROQUAD      | 94  | MSD |                   | Valid             |
	When the Patient is assessed for Var on 2009-06-29
	Then the assessment should not recommend a dose for Var
	And the series status should be Complete


@SeriesStatus_Complete @VaccineGroup_Var @Gender_Female @ForecastTestType_NotRecommendedSeriesComplete
Scenario: [CTC 2013-0822] - Dose 1 to dose 2 MMRV interval 28 days in child ≥ 15 months old=valid VZ
	# added on 2013-01-01
	Given a female Patient born on 2004-05-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2005-07-15        | PROQUAD      | 94  | MSD |                   | Valid             |
		| 2005-08-12        | PROQUAD      | 94  | MSD |                   | Valid             |
	When the Patient is assessed for Var on 2005-08-12
	Then the assessment should not recommend a dose for Var
	And the series status should be Complete


@SeriesStatus_NotComplete @VaccineGroup_Var @Gender_Female @ForecastTestType_RecommendedBasedOnMinimumIntervalFromInvalidDose
Scenario: [CTC 2013-0823] - Dose 1 to dose 2 MMRV interval 28-1 days
	# added on 2013-01-01
	Given a female Patient born on 2004-09-06
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason   | Evaluation Status |
		| 2008-10-01        | PROQUAD      | 94  | MSD |                     | Valid             |
		| 2008-10-28        | PROQUAD      | 94  | MSD | Live Virus Conflict | Not Valid         |
	When the Patient is assessed for Var on 2008-10-28
	Then the assessment should recommend a dose for Var on 2009-01-20
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_Var @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0824] - MMR to MMRV interval 28 days=valid VZ # 1
	# added on 2013-01-01
	Given a female Patient born on 2005-02-02
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2006-02-02        | M-M-R II     | 03  | MSD |                   | Valid             |
		| 2006-03-02        | PROQUAD      | 94  | MSD |                   | Valid             |
	When the Patient is assessed for Var on 2006-03-02
	Then the assessment should recommend a dose for Var on 2009-02-02
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_Var @Gender_Female @ForecastTestType_RecommendedBasedOnMinimumIntervalFromLiveVirusVaccine
Scenario: [CTC 2013-0825] - MMR to MMRV interval 27 days=invalid as VZ # 1
	# added on 2013-01-01
	Given a female Patient born on 2011-02-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason   | Evaluation Status |
		| 2012-02-02        | M-M-R II     | 03  | MSD |                     | Valid             |
		| 2012-02-29        | PROQUAD      | 94  | MSD | Live Virus Conflict | Not Valid         |
	When the Patient is assessed for Var on 2012-02-29
	Then the assessment should recommend a dose for Var on 2012-03-28
	And the series status should be Not Complete


@SeriesStatus_Complete @VaccineGroup_Var @Gender_Female @ForecastTestType_NotRecommendedSeriesComplete
Scenario: [CTC 2013-0826] - Dose 1 to dose 2  MMRV interval 12 weeks in child < 13 years old
	# added on 2013-01-01
	Given a female Patient born on 2005-02-02
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2008-08-13        | PROQUAD      | 94  | MSD |                   | Valid             |
		| 2008-11-05        | PROQUAD      | 94  | MSD |                   | Valid             |
	When the Patient is assessed for Var on 2008-11-05
	Then the assessment should not recommend a dose for Var
	And the series status should be Complete


@SeriesStatus_Complete @VaccineGroup_Var @Gender_Female @ForecastTestType_NotRecommendedSeriesComplete
Scenario: [CTC 2013-0827] - Dose 1 to dose 2 interval of 4 wks between VZ and MMRV in any age child=both valid
	# added on 2013-01-01
	Given a female Patient born on 2005-05-22
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2006-06-01        | VARIVAX      | 21  | MSD |                   | Valid             |
		| 2006-06-29        | PROQUAD      | 94  | MSD |                   | Valid             |
	When the Patient is assessed for Var on 2006-06-29
	Then the assessment should not recommend a dose for Var
	And the series status should be Complete


@SeriesStatus_NotComplete @VaccineGroup_Var @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0829] - 28 day interval between invalid VZ and subsequent MMRV=valid VZ
	# added on 2013-01-01
	Given a female Patient born on 2005-05-22
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2006-05-17        | VARIVAX      | 21  | MSD | Age: Too Young    | Not Valid         |
		| 2006-06-14        | PROQUAD      | 94  | MSD |                   | Valid             |
	When the Patient is assessed for Var on 2006-06-14
	Then the assessment should recommend a dose for Var on 2009-05-22
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_Var @Gender_Female @ForecastTestType_RecommendedBasedOnMinimumIntervalFromLiveVirusVaccine
Scenario: [CTC 2013-0831] - Interval of < 24 days between an invalid VZ and a subsequent MMRV=not valid VZ
	# updated on 2013-06-26 in version 1.1 - Forecast Dates were forecasting Dose 2, but the patient is still trying to satisfy target dose #1.  Dates were updated to reflect a forecast for dose 1 based on live virus spacing.
	Given a female Patient born on 2005-07-16
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason   | Evaluation Status |
		| 2006-07-11        | VARIVAX      | 21  | MSD | Age: Too Young      | Not Valid         |
		| 2006-08-04        | PROQUAD      | 94  | MSD | Live Virus Conflict | Not Valid         |
	When the Patient is assessed for Var on 2006-08-04
	Then the assessment should recommend a dose for Var on 2006-09-01
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_Var @Gender_Female @ForecastTestType_RecommendedBasedOnMinimumIntervalFromLiveVirusVaccine
Scenario: [CTC 2013-0832] - LAIV given at age 3 years; VZ at age 3 years + 27 days
	# added on 2013-01-01
	Given a female Patient born on 2008-10-14
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason   | Evaluation Status |
		| 2011-10-14        | FLUMIST      | 111 | MED |                     | Valid             |
		| 2011-11-10        | VARIVAX      | 21  | MSD | Live Virus Conflict | Not Valid         |
	When the Patient is assessed for Var on 2011-11-10
	Then the assessment should recommend a dose for Var on 2011-12-08
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_Var @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0833] - LAIV given at age 3 years; VZ at age 3 years + 28 days
	# added on 2013-01-01
	Given a female Patient born on 2008-10-14
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2011-10-14        | FLUMIST      | 111 | MED |                   | Valid             |
		| 2011-11-11        | VARIVAX      | 21  | MSD |                   | Valid             |
	When the Patient is assessed for Var on 2011-11-11
	Then the assessment should recommend a dose for Var on 2012-10-14
	And the series status should be Not Complete


@SeriesStatus_Immune @VaccineGroup_Var @Gender_Female @ForecastTestType_NotRecommendedImmune
Scenario: [CTC 2013-0834] - History of VZ=series complete or exempt by hx of disease
	# added on 2013-01-01
	Given a female Patient born on 2004-05-01
	And the following medical history is reported
	| Medical History Text | Medical History Code | Medical History System |
	|                      | 38907003             | SCT                    |
	And no immunizations have been given
	When the Patient is assessed for Var on 2005-04-01
	Then the assessment should not recommend a dose for Var
	And the series status should be Immune


@SeriesStatus_Immune @VaccineGroup_Var @Gender_Female @ForecastTestType_NotRecommendedImmune
Scenario: [CTC 2013-0835] - Titer of immunity to VZ=series complete or exempt
	# added on 2013-01-01
	Given a female Patient born on 2005-06-01
	And the following medical history is reported
	| Medical History Text | Medical History Code | Medical History System |
	|                      | 38907003             | SCT                    |
	And no immunizations have been given
	When the Patient is assessed for Var on 2006-06-01
	Then the assessment should not recommend a dose for Var
	And the series status should be Immune


@SeriesStatus_Contraindicated @VaccineGroup_Var @Gender_Female @ForecastTestType_NotRecommendedContraindication
Scenario: [CTC 2013-0836] - Anaphylactic reaction to dose 1 of VZ
	# added on 2013-01-01
	Given a female Patient born on 2010-12-12
	And the following medical history is reported
	| Medical History Text | Medical History Code | Medical History System |
	|                      | VXC20                | CDCPHINVS              |
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2012-03-15        | VARIVAX      | 21  | MSD |                   | Valid             |
	When the Patient is assessed for Var on 2012-03-15
	Then the assessment should not recommend a dose for Var
	And the series status should be Contraindicated


@SeriesStatus_Contraindicated @VaccineGroup_Var @Gender_Female @ForecastTestType_NotRecommendedContraindication
Scenario: [CTC 2013-0837] - Diagnosis of severe immunodeficiency.  No second dose
	# added on 2013-01-01
	Given a female Patient born on 2009-12-12
	And the following medical history is reported
	| Medical History Text | Medical History Code | Medical History System |
	|                      | VXC27                | CDCPHINVS              |
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2010-12-20        | VARIVAX      | 21  | MSD |                   | Valid             |
	When the Patient is assessed for Var on 2010-12-20
	Then the assessment should not recommend a dose for Var
	And the series status should be Contraindicated


@SeriesStatus_Contraindicated @VaccineGroup_Var @Gender_Female @ForecastTestType_NotRecommendedContraindication
Scenario: [CTC 2013-0839] - Diagnosis of severe immunodeficiency before administration of any VZ. No VZ to be given
	# added on 2013-01-01
	Given a female Patient born on 2010-11-18
	And the following medical history is reported
	| Medical History Text | Medical History Code | Medical History System |
	|                      | VXC27                | CDCPHINVS              |
	And no immunizations have been given
	When the Patient is assessed for Var on 2011-10-18
	Then the assessment should not recommend a dose for Var
	And the series status should be Contraindicated


@SeriesStatus_NotComplete @VaccineGroup_Var @Gender_Female @ForecastTestType_RecommendedBasedOnMinimumIntervalFromLiveVirusVaccine
Scenario: [CTC 2013-0840] - # 1 MMR at 12.5 mo; VZ not given=need 28 day interval for VZ
	# added on 2013-01-01
	Given a female Patient born on 2011-03-17
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2012-04-01        | M-M-R II     | 03  | MSD |                   | Valid             |
	When the Patient is assessed for Var on 2012-04-01
	Then the assessment should recommend a dose for Var on 2012-04-29
	And the series status should be Not Complete


@SeriesStatus_Complete @VaccineGroup_Var @Gender_Female @ForecastTestType_NotRecommendedSeriesComplete
Scenario: [CTC 2013-0842] - # 2 at age 12 mo+ 4 Weeks
	# added on 2013-01-01
	Given a female Patient born on 2007-11-28
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2008-11-28        | VARIVAX      | 21  | MSD |                   | Valid             |
		| 2008-12-26        | VARIVAX      | 21  | MSD |                   | Valid             |
	When the Patient is assessed for Var on 2008-12-26
	Then the assessment should not recommend a dose for Var
	And the series status should be Complete


@SeriesStatus_Complete @VaccineGroup_Var @Gender_Female @ForecastTestType_NotRecommendedSeriesComplete
Scenario: [CTC 2013-0843] - # 2 at age 15 mo
	# added on 2013-01-01
	Given a female Patient born on 2007-11-28
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2008-11-28        | VARIVAX      | 21  | MSD |                   | Valid             |
		| 2009-02-28        | VARIVAX      | 21  | MSD |                   | Valid             |
	When the Patient is assessed for Var on 2009-02-28
	Then the assessment should not recommend a dose for Var
	And the series status should be Complete


@SeriesStatus_NotComplete @VaccineGroup_Var @Gender_Female @ForecastTestType_RecommendedBasedOnMinimumIntervalFromPreviousDoseCatchUp
Scenario: [CTC 2013-0844] - # 1 at age ≥ 13 years old
	# updated on 2013-06-26 in version 1.1 - Past Due Date was incorrect.  Should be in alignment with the earliest and recommended.  Child is in catch-up schedule.
	Given a female Patient born on 1997-01-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2010-01-04        | VARIVAX      | 21  | MSD |                   | Valid             |
	When the Patient is assessed for Var on 2010-01-04
	Then the assessment should recommend a dose for Var on 2010-02-01
	And the series status should be Not Complete

