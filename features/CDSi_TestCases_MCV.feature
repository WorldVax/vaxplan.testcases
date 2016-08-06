Feature: MCV CDSi test cases

@SeriesStatus_NotComplete @VaccineGroup_MCV @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0487] - #1 @ 11 yrs, 0 days, MCV4
	# updated on 2014-11-07 in version 1.6 - v1.6: An EIPB clarification has resulted in a change to when dose 2 of MCV should be forecasted and validated.  The second dose must come on or after 16 years (- 4 days) of age to be considered valid.
	Given a female Patient born on 2000-05-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2011-05-01        | MENACTRA     | 114 | PMC |                   | Valid             |
	When the Patient is assessed for MCV on 2011-05-01
	Then the assessment should recommend a dose for MCV on 2016-05-01
	And the series status should be Not Complete


@SeriesStatus_Complete @VaccineGroup_MCV @Gender_Female @ForecastTestType_NotRecommendedSeriesComplete
Scenario: [CTC 2013-0488] - #2 @ 16 yr - 4 days, MCV4
	# updated on 2014-11-07 in version 1.6 - v1.6: Updated Test case to reflect new absolute minimum age on dose 2 based on EIPB clarification
	Given a female Patient born on 1995-05-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2006-05-01        | MENACTRA     | 114 | PMC |                   | Valid             |
		| 2011-04-27        | MENACTRA     | 114 | PMC |                   | valid             |
	When the Patient is assessed for MCV on 2011-04-27
	Then the assessment should not recommend a dose for MCV
	And the series status should be Complete


@SeriesStatus_NotComplete @VaccineGroup_MCV @Gender_Female @ForecastTestType_RecommendedBasedOnMinimumIntervalFromInvalidDose
Scenario: [CTC 2013-0489] - #2 @ 10 16 yr - 5 days, MCV4
	# updated on 2014-11-07 in version 1.6 - v1.6: Updated Test case to reflect new absolute minimum age on dose 2 based on EIPB clarification
	Given a female Patient born on 1995-05-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2006-05-01        | MENACTRA     | 114 | PMC |                   | Valid             |
		| 2011-04-26        | MENACTRA     | 114 | PMC | Age: Too Young    | Not Valid         |
	When the Patient is assessed for MCV on 2011-04-26
	Then the assessment should recommend a dose for MCV on 2011-06-21
	And the series status should be Not Complete


@SeriesStatus_Complete @VaccineGroup_MCV @Gender_Female @ForecastTestType_NotRecommendedSeriesComplete
Scenario: [CTC 2013-0491] - #2 @ 16 years, MCV4
	# added on 2013-01-01
	Given a female Patient born on 1990-05-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2001-05-01        | MENACTRA     | 114 | PMC |                   | Valid             |
		| 2006-05-01        | MENACTRA     | 114 | PMC |                   | Valid             |
	When the Patient is assessed for MCV on 2006-05-01
	Then the assessment should not recommend a dose for MCV
	And the series status should be Complete


@SeriesStatus_Complete @VaccineGroup_MCV @Gender_Female @ForecastTestType_NotRecommendedSeriesComplete
Scenario: [CTC 2013-0495] - #2 with interval of 5 years of #1
	# updated on 2013-07-29 in version 1.2 - Test case was set to have the first dose at age 16 and second dose at 21 years.  Test case was adjusted to be at 13 years and 18 years to avoid the 16 year age skip dose which is tested in another test
	Given a female Patient born on 1990-05-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2003-05-01        | MENACTRA     | 114 | PMC |                   | Valid             |
		| 2008-05-01        | MENACTRA     | 114 | PMC |                   | Valid             |
	When the Patient is assessed for MCV on 2008-05-01
	Then the assessment should not recommend a dose for MCV
	And the series status should be Complete


@SeriesStatus_NotComplete @VaccineGroup_MCV @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0497] - #1 @ 10 yrs - 1 day, #2 @ 10 yrs + 8 weeks - 5 days
	# updated on 2014-11-07 in version 1.6 - v1.6: An EIPB clarification has resulted in a change to when dose 2 of MCV should be forecasted and validated.  The second dose must come on or after 16 years (- 4 days) of age to be considered valid.; v1.2: Same test case as previous version rolled younge
	Given a female Patient born on 2000-05-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2010-04-30        | MENACTRA     | 114 | PMC | Age: Too Young    | Not Valid         |
		| 2010-06-21        | MENACTRA     | 114 | PMC |                   | Valid             |
	When the Patient is assessed for MCV on 2010-06-21
	Then the assessment should recommend a dose for MCV on 2016-05-01
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_MCV @Gender_Female @ForecastTestType_RecommendedBasedOnMinimumIntervalFromInvalidDose
Scenario: [CTC 2013-0498] - #1 @ 10 yrs - 1 day, #2 @ 10 yrs + 8 weeks
	# updated on 2014-11-07 in version 1.6 - v1.6: An EIPB clarification has resulted in a change to when dose 2 of MCV should be forecasted and validated.  The second dose must come on or after 16 years (- 4 days) of age to be considered valid.; v1.2: Same test case as previous version rolled younge
	Given a female Patient born on 2000-05-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2010-04-30        | MENACTRA     | 114 | PMC | Age: Too Young    | Not Valid         |
		| 2010-06-26        | MENACTRA     | 114 | PMC |                   | Valid             |
	When the Patient is assessed for MCV on 2010-06-26
	Then the assessment should recommend a dose for MCV on 2016-05-01
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_MCV @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0499] - #1 @ 10 yrs, MCV4
	# updated on 2014-11-07 in version 1.6 - v1.6: An EIPB clarification has resulted in a change to when dose 2 of MCV should be forecasted and validated.  The second dose must come on or after 16 years (- 4 days) of age to be considered valid.; v1.2: Same test case as previous version rolled younge
	Given a female Patient born on 2000-05-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2010-05-01        | MENACTRA     | 114 | PMC |                   | Valid             |
	When the Patient is assessed for MCV on 2010-05-01
	Then the assessment should recommend a dose for MCV on 2016-05-01
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_MCV @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0500] - #1 @ 10 yrs - 1 day, MCV4
	# updated on 2013-07-29 in version 1.2 - Same test case as previous version rolled younger to allow for the 10 year clarification by NIPInfo
	Given a female Patient born on 2000-05-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2010-04-30        | MENACTRA     | 114 | PMC | Age: Too Young    | Not Valid         |
	When the Patient is assessed for MCV on 2010-04-30
	Then the assessment should recommend a dose for MCV on 2011-05-01
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_MCV @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0501] - #1 @ 10 yrs - 1 day, #2 @ 10 yrs, 8 weeks - 4 days
	# updated on 2014-11-07 in version 1.6 - v1.6: An EIPB clarification has resulted in a change to when dose 2 of MCV should be forecasted and validated.  The second dose must come on or after 16 years (- 4 days) of age to be considered valid.; v1.2: Same test case as previous version rolled younge
	Given a female Patient born on 2000-05-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2010-04-30        | MENACTRA     | 114 | PMC | Age: Too Young    | Not Valid         |
		| 2010-06-22        | MENACTRA     | 114 | PMC |                   | Valid             |
	When the Patient is assessed for MCV on 2010-06-22
	Then the assessment should recommend a dose for MCV on 2016-05-01
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_MCV @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0502] - Newborn
	# added on 2013-01-01
	Given a female Patient born on 2012-02-01
	And no immunizations have been given
	When the Patient is assessed for MCV on 2012-02-01
	Then the assessment should recommend a dose for MCV on 2023-02-01
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_MCV @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0503] - Dose 1 to dose 2 interval 8 wks-5 days
	# updated on 2014-11-07 in version 1.6 - v1.6: An EIPB clarification has resulted in a change to when dose 2 of MCV should be forecasted and validated.  The second dose must come on or after 16 years (- 4 days) of age to be considered valid.
	Given a female Patient born on 1995-01-06
	And the following immunizations have been given
		| Date Administered | Vaccine Name                   | CVX | MVX | Evaluation Reason   | Evaluation Status |
		| 2006-03-27        | Meningococcal MCV4 Unspecified | 147 |     |                     | Valid             |
		| 2006-05-17        | Meningococcal MCV4 Unspecified | 147 |     | Interval: Too Short | Not Valid         |
	When the Patient is assessed for MCV on 2006-05-17
	Then the assessment should recommend a dose for MCV on 2011-01-06
	And the series status should be Not Complete


@SeriesStatus_Complete @VaccineGroup_MCV @Gender_Female @ForecastTestType_NotRecommendedSeriesComplete
Scenario: [CTC 2013-0504] - Dose 1 to dose 2 interval 8 wks-4 days
	# updated on 2014-11-07 in version 1.6 - v1.6: updated to reflect interval without also testing age attributes.  Simply made the patient older
	Given a female Patient born on 1995-04-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name                   | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2011-03-18        | Meningococcal MCV4 Unspecified | 147 |     |                   | Valid             |
		| 2011-05-09        | Meningococcal MCV4 Unspecified | 147 |     |                   | Valid             |
	When the Patient is assessed for MCV on 2011-05-09
	Then the assessment should not recommend a dose for MCV
	And the series status should be Complete


@SeriesStatus_Complete @VaccineGroup_MCV @Gender_Female @ForecastTestType_NotRecommendedSeriesComplete
Scenario: [CTC 2013-0505] - Dose 1 to dose 2 interval 8 weeks
	# updated on 2014-11-07 in version 1.6 - v1.6: updated to reflect interval without also testing age attributes.  Simply made the patient older
	Given a female Patient born on 1995-06-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name                   | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2011-05-20        | Meningococcal MCV4 Unspecified | 147 |     |                   | Valid             |
		| 2011-07-15        | Meningococcal MCV4 Unspecified | 147 |     |                   | Valid             |
	When the Patient is assessed for MCV on 2011-07-15
	Then the assessment should not recommend a dose for MCV
	And the series status should be Complete


@SeriesStatus_Contraindicated @VaccineGroup_MCV @Gender_Female @ForecastTestType_NotRecommendedContraindication
Scenario: [CTC 2013-0506] - Anaphylaxis to previous dose of MCV
	# added on 2013-01-01
	Given a female Patient born on 2000-02-26
	And the following medical history is reported
	| Medical History Text | Medical History Code | Medical History System |
	|                      | VXC20                | CDCPHINVS              |
	And the following immunizations have been given
		| Date Administered | Vaccine Name                   | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2011-03-15        | Meningococcal MCV4 Unspecified | 147 |     |                   | Valid             |
	When the Patient is assessed for MCV on 2011-03-15
	Then the assessment should not recommend a dose for MCV
	And the series status should be Contraindicated


@SeriesStatus_NotComplete @VaccineGroup_MCV @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0507] - # 1 at age 11 years
	# updated on 2014-11-07 in version 1.6 - v1.6: An EIPB clarification has resulted in a change to when dose 2 of MCV should be forecasted and validated.  The second dose must come on or after 16 years (- 4 days) of age to be considered valid.
	Given a female Patient born on 1996-09-06
	And the following immunizations have been given
		| Date Administered | Vaccine Name                   | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2007-09-06        | Meningococcal MCV4 Unspecified | 147 |     |                   | Valid             |
	When the Patient is assessed for MCV on 2007-09-06
	Then the assessment should recommend a dose for MCV on 2012-09-06
	And the series status should be Not Complete


@SeriesStatus_AgedOut @VaccineGroup_MCV @Gender_Female @ForecastTestType_NotRecommendedTooOld
Scenario: [CTC 2013-0508] - age 22.  No doses; No forecast
	# updated on 2014-11-07 in version 1.6 - v1.6: Updated Series Status from "Not Complete" to "Aged Out" to align with updated CDSi Logic Specification Series Statuses.
	Given a female Patient born on 1990-01-07
	And no immunizations have been given
	When the Patient is assessed for MCV on 2012-01-07
	Then the assessment should not recommend a dose for MCV
	And the series status should be Aged Out


@SeriesStatus_NotComplete @VaccineGroup_MCV @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0509] - # 1 at age 15 years
	# updated on 2014-11-07 in version 1.6 - v1.6: An EIPB clarification has resulted in a change to when dose 2 of MCV should be forecasted and validated.  The second dose must come on or after 16 years (- 4 days) of age to be considered valid.
	Given a female Patient born on 1995-04-21
	And the following immunizations have been given
		| Date Administered | Vaccine Name                   | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2010-04-29        | Meningococcal MCV4 Unspecified | 147 |     |                   | Valid             |
	When the Patient is assessed for MCV on 2010-04-29
	Then the assessment should recommend a dose for MCV on 2011-04-21
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_MCV @Gender_Female @ForecastTestType_RecommendedBasedOnMinimumIntervalFromPreviousDoseCatchUp
Scenario: [CTC 2013-0510] - # 1 at age 16 years -5 days
	# added on 2013-01-01
	Given a female Patient born on 1994-08-22
	And the following immunizations have been given
		| Date Administered | Vaccine Name                   | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2010-08-17        | Meningococcal MCV4 Unspecified | 147 |     |                   | Valid             |
	When the Patient is assessed for MCV on 2010-08-17
	Then the assessment should recommend a dose for MCV on 2010-10-12
	And the series status should be Not Complete


@SeriesStatus_Complete @VaccineGroup_MCV @Gender_Female @ForecastTestType_NotRecommendedSeriesComplete
Scenario: [CTC 2013-0511] - # 1 at age 16 years -4 days
	# added on 2013-01-01
	Given a female Patient born on 1994-08-22
	And the following immunizations have been given
		| Date Administered | Vaccine Name                   | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2010-08-18        | Meningococcal MCV4 Unspecified | 147 |     |                   | Valid             |
	When the Patient is assessed for MCV on 2010-08-18
	Then the assessment should not recommend a dose for MCV
	And the series status should be Complete


@SeriesStatus_Complete @VaccineGroup_MCV @Gender_Female @ForecastTestType_NotRecommendedSeriesComplete
Scenario: [CTC 2013-0512] - # 1 at age 16 years
	# added on 2013-01-01
	Given a female Patient born on 1994-08-22
	And the following immunizations have been given
		| Date Administered | Vaccine Name                   | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2010-08-22        | Meningococcal MCV4 Unspecified | 147 |     |                   | Valid             |
	When the Patient is assessed for MCV on 2010-08-22
	Then the assessment should not recommend a dose for MCV
	And the series status should be Complete

