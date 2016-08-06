Feature: PCV CDSi test cases

@SeriesStatus_NotComplete @VaccineGroup_PCV @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0575] - Newborn Testing
	# added on 2013-01-01
	Given a female Patient born on 2012-02-01
	And no immunizations have been given
	When the Patient is assessed for PCV on 2012-02-01
	Then the assessment should recommend a dose for PCV on 2012-04-01
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_PCV @Gender_Female @ForecastTestType_RecommendedBasedOnMinimumIntervalFromPreviousDoseCatchUp
Scenario: [CTC 2013-0576] - Dose # 1 PCV 13 at age 18 months
	# added on 2013-01-01
	Given a female Patient born on 2009-10-10
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2011-04-10        | PREVNAR 13   | 133 | PFR |                   | Valid             |
	When the Patient is assessed for PCV on 2011-04-10
	Then the assessment should recommend a dose for PCV on 2011-06-05
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_PCV @Gender_Female @ForecastTestType_RecommendedBasedOnMinimumIntervalFromPreviousDoseCatchUp
Scenario: [CTC 2013-0577] - Dose # 1 of PCV 7 at age 24 months.  Need one dose PCV 13
	# added on 2013-01-01
	Given a female Patient born on 2008-03-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2010-03-01        | PREVNAR 7    | 100 | WAL |                   | Valid             |
	When the Patient is assessed for PCV on 2010-03-01
	Then the assessment should recommend a dose for PCV on 2010-04-26
	And the series status should be Not Complete


@SeriesStatus_Complete @VaccineGroup_PCV @Gender_Female @ForecastTestType_NotRecommendedSeriesComplete
Scenario: [CTC 2013-0578] - Dose # 1 of PCV 13 at age 24 months.  Series complete
	# added on 2013-01-01
	Given a female Patient born on 2009-07-10
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2011-07-10        | PREVNAR 13   | 133 | PFR |                   | Valid             |
	When the Patient is assessed for PCV on 2011-07-10
	Then the assessment should not recommend a dose for PCV
	And the series status should be Complete


@SeriesStatus_NotComplete @VaccineGroup_PCV @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0579] - Dose # 2 PCV 13 at age 10 weeks-5 days
	# added on 2013-01-01
	Given a female Patient born on 2010-09-10
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2010-10-18        | PREVNAR 13   | 133 | PFR |                   | Valid             |
		| 2010-11-14        | PREVNAR 13   | 133 | PFR | Age: Too Young    | Not Valid         |
	When the Patient is assessed for PCV on 2010-11-14
	Then the assessment should recommend a dose for PCV on 2011-01-10
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_PCV @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0580] - Dose # 2 PCV 13 at age 10 weeks-4 days
	# added on 2013-01-01
	Given a female Patient born on 2011-02-26
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2011-04-06        | PREVNAR 13   | 133 | PFR |                   | Valid             |
		| 2011-05-03        | PREVNAR 13   | 133 | PFR |                   | Valid             |
	When the Patient is assessed for PCV on 2011-05-03
	Then the assessment should recommend a dose for PCV on 2011-08-26
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_PCV @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0581] - Dose PCV 13 # 2 at age 10 weeks
	# added on 2013-01-01
	Given a female Patient born on 2011-02-26
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2011-04-09        | PREVNAR 13   | 133 | PFR |                   | Valid             |
		| 2011-05-07        | PREVNAR 13   | 133 | PFR |                   | Valid             |
	When the Patient is assessed for PCV on 2011-05-07
	Then the assessment should recommend a dose for PCV on 2011-08-26
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_PCV @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0582] - Dose # 2 PCV 13 at age 4 months
	# added on 2013-01-01
	Given a female Patient born on 2011-08-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2011-10-01        | PREVNAR 13   | 133 | PFR |                   | Valid             |
		| 2011-12-01        | PREVNAR 13   | 133 | PFR |                   | Valid             |
	When the Patient is assessed for PCV on 2011-12-01
	Then the assessment should recommend a dose for PCV on 2012-02-01
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_PCV @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0583] - Dose # 1 PCV 13 at  age7 months, dose # 2 at age 8 mos and current age ≥ 12 mos
	# added on 2013-01-01
	Given a female Patient born on 2011-02-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2011-09-01        | PREVNAR 13   | 133 | PFR |                   | Valid             |
		| 2011-10-01        | PREVNAR 13   | 133 | PFR |                   | Valid             |
	When the Patient is assessed for PCV on 2012-02-01
	Then the assessment should recommend a dose for PCV on 2012-02-01
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_PCV @Gender_Female @ForecastTestType_RecommendedBasedOnMinimumIntervalFromInvalidDose
Scenario: [CTC 2013-0584] - Dose # 1 PCV 13 at 12 mo; dose # 2 at 1 yr 8 wks-5 days
	# updated on 2013-07-30 in version 1.2 - Condensed the past due date to align with the earliest and recommended date since this child is in catch-up
	Given a female Patient born on 2010-02-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason   | Evaluation Status |
		| 2011-02-01        | PREVNAR 13   | 133 | PFR |                     | Valid             |
		| 2011-03-24        | PREVNAR 13   | 133 | PFR | Interval: Too Short | Not Valid         |
	When the Patient is assessed for PCV on 2011-03-24
	Then the assessment should recommend a dose for PCV on 2011-05-19
	And the series status should be Not Complete


@SeriesStatus_Complete @VaccineGroup_PCV @Gender_Female @ForecastTestType_NotRecommendedSeriesComplete
Scenario: [CTC 2013-0585] - Dose # 1 PCV 13 at age 12 mos; # 2 at 1 yr 8 wks-4 days
	# added on 2013-01-01
	Given a female Patient born on 2010-02-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2011-02-01        | PREVNAR 13   | 133 | PFR |                   | Valid             |
		| 2011-03-25        | PREVNAR 13   | 133 | PFR |                   | Valid             |
	When the Patient is assessed for PCV on 2011-03-25
	Then the assessment should not recommend a dose for PCV
	And the series status should be Complete


@SeriesStatus_AgedOut @VaccineGroup_PCV @Gender_Female @ForecastTestType_NotRecommendedTooOld
Scenario: [CTC 2013-0586] - Healthy child, age ≥ 5 years.  No forecast
	# updated on 2014-11-07 in version 1.6 - v1.6: Updated Series Status from "Not Complete" to "Aged Out" to align with updated CDSi Logic Specification Series Statuses.
	Given a female Patient born on 2006-05-05
	And no immunizations have been given
	When the Patient is assessed for PCV on 2011-05-05
	Then the assessment should not recommend a dose for PCV
	And the series status should be Aged Out


@SeriesStatus_Complete @VaccineGroup_PCV @Gender_Female @ForecastTestType_NotRecommendedSeriesComplete
Scenario: [CTC 2013-0587] - Dose # 1 PCV 13 at age 12 months; # 2 at age 14 mos.  Series complete
	# added on 2013-01-01
	Given a female Patient born on 2010-01-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2011-01-01        | PREVNAR 13   | 133 | PFR |                   | Valid             |
		| 2011-03-01        | PREVNAR 13   | 133 | PFR |                   | Valid             |
	When the Patient is assessed for PCV on 2011-03-01
	Then the assessment should not recommend a dose for PCV
	And the series status should be Complete


@SeriesStatus_NotComplete @VaccineGroup_PCV @Gender_Female @ForecastTestType_RecommendedBasedOnMinimumIntervalFromPreviousDoseCatchUp
Scenario: [CTC 2013-0588] - Dose # 1 PCV 13 at 24 mo-5 days.  Valid but child needs another
	# added on 2013-01-01
	Given a female Patient born on 2010-03-18
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2012-03-13        | PREVNAR 13   | 133 | PFR |                   | Valid             |
	When the Patient is assessed for PCV on 2012-03-13
	Then the assessment should recommend a dose for PCV on 2012-05-08
	And the series status should be Not Complete


@SeriesStatus_Complete @VaccineGroup_PCV @Gender_Female @ForecastTestType_NotRecommendedSeriesComplete
Scenario: [CTC 2013-0589] - Dose 1 PCV 13 at 24 m-4 days.  Series complete
	# added on 2013-01-01
	Given a female Patient born on 2010-03-18
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2012-03-14        | PREVNAR 13   | 133 | PFR |                   | Valid             |
	When the Patient is assessed for PCV on 2012-03-14
	Then the assessment should not recommend a dose for PCV
	And the series status should be Complete


@SeriesStatus_NotComplete @VaccineGroup_PCV @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0590] - Dose # 3 PCV 13 at age 14 weeks-5 days
	# added on 2013-01-01
	Given a female Patient born on 2011-07-06
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2011-08-14        | PREVNAR 13   | 133 | PFR |                   | Valid             |
		| 2011-09-11        | PREVNAR 13   | 133 | PFR |                   | Valid             |
	When the Patient is assessed for PCV on 2011-10-07
	Then the assessment should recommend a dose for PCV on 2012-01-06
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_PCV @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0591] - Dose # 3 PCV 13 at age 14 weeks-4 days
	# added on 2013-01-01
	Given a female Patient born on 2011-07-06
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2011-08-14        | PREVNAR 13   | 133 | PFR |                   | Valid             |
		| 2011-09-11        | PREVNAR 13   | 133 | PFR |                   | Valid             |
	When the Patient is assessed for PCV on 2011-10-08
	Then the assessment should recommend a dose for PCV on 2012-07-06
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_PCV @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0592] - Dose # 3 PCV 13 at age 14 weeks
	# added on 2013-01-01
	Given a female Patient born on 2011-07-06
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2011-08-17        | PREVNAR 13   | 133 | PFR |                   | Valid             |
		| 2011-09-14        | PREVNAR 13   | 133 | PFR |                   | Valid             |
	When the Patient is assessed for PCV on 2011-10-12
	Then the assessment should recommend a dose for PCV on 2012-07-06
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_PCV @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0593] - Dose # 3 PCV 13 at 6 mo
	# added on 2013-01-01
	Given a female Patient born on 2011-02-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2011-04-01        | PREVNAR 13   | 133 | PFR |                   | Valid             |
		| 2011-06-01        | PREVNAR 13   | 133 | PFR |                   | Valid             |
	When the Patient is assessed for PCV on 2011-08-01
	Then the assessment should recommend a dose for PCV on 2012-02-01
	And the series status should be Not Complete


@SeriesStatus_Complete @VaccineGroup_PCV @Gender_Female @ForecastTestType_NotRecommendedSeriesComplete
Scenario: [CTC 2013-0594] - Mixed vaccines: dose # 1 PCV 7 at 6 mo; # 2 PCV 13 at 8 mo; # 3 PCV 13 at 12 months.  Series complete
	# added on 2013-01-01
	Given a female Patient born on 2010-03-04
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2010-09-04        | PREVNAR 7    | 100 | WAL |                   | Valid             |
		| 2010-11-04        | PREVNAR 13   | 133 | PFR |                   | Valid             |
	When the Patient is assessed for PCV on 2011-03-04
	Then the assessment should not recommend a dose for PCV
	And the series status should be Complete


@SeriesStatus_Complete @VaccineGroup_PCV @Gender_Female @ForecastTestType_NotRecommendedSeriesComplete
Scenario: [CTC 2013-0595] - Mixed vaccines: dose # 1 PCV 7 at 7 mo; # 2 PCV 7 at 8 mo; #3 PCV 13 at 12 months.  Series complete
	# updated on 2013-07-11 in version 1.1 - Minor typo in test case name corrected.
	Given a female Patient born on 2009-06-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2010-01-01        | PREVNAR 7    | 100 | WAL |                   | Valid             |
		| 2010-02-01        | PREVNAR 7    | 100 | WAL |                   | Valid             |
	When the Patient is assessed for PCV on 2010-06-01
	Then the assessment should not recommend a dose for PCV
	And the series status should be Complete


@SeriesStatus_NotComplete @VaccineGroup_PCV @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0596] - Dose # 1 PCV 13 at age 6 weeks-5 days
	# added on 2013-01-01
	Given a female Patient born on 2010-11-10
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2010-12-17        | PREVNAR 13   | 133 | PFR | Age: Too Young    | Not Valid         |
	When the Patient is assessed for PCV on 2010-12-17
	Then the assessment should recommend a dose for PCV on 2011-01-10
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_PCV @Gender_Female @ForecastTestType_RecommendedBasedOnMinimumIntervalFromInvalidDose
Scenario: [CTC 2013-0597] - Dose # 1 PCV 13 at 6 mo; # 2 at 11 mo, # 3 at 12 mo
	# updated on 2013-08-23 in version 1.2 - At 12 Months of age and after the spacing must be 8 weeks or more.  Dose 3 was given on 12 Months, but wasn't spaced 8 weeks.  The forecast in this case remains unchanged.
	Given a female Patient born on 2010-08-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2011-02-01        | PREVNAR 13   | 133 | PFR |                   | Valid             |
		| 2011-07-01        | PREVNAR 13   | 133 | PFR |                   | Valid             |
	When the Patient is assessed for PCV on 2011-08-01
	Then the assessment should recommend a dose for PCV on 2011-09-26
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_PCV @Gender_Female @ForecastTestType_RecommendedBasedOnMinimumIntervalFromInValidDose
Scenario: [CTC 2013-0598] - Dose # 4 PCV 13 at age 12 mo-5 days
	# added on 2013-01-01
	Given a female Patient born on 2010-06-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2010-08-01        | PREVNAR 13   | 133 | PFR |                   | Valid             |
		| 2010-10-01        | PREVNAR 13   | 133 | PFR |                   | Valid             |
	When the Patient is assessed for PCV on 2011-05-27
	Then the assessment should recommend a dose for PCV on 2011-07-22
	And the series status should be Not Complete


@SeriesStatus_Complete @VaccineGroup_PCV @Gender_Female @ForecastTestType_NotRecommendedSeriesComplete
Scenario: [CTC 2013-0599] - Dose # 4 PCV 13 at age 1 year-4 days.  Series complete
	# added on 2013-01-01
	Given a female Patient born on 2010-06-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2010-08-01        | PREVNAR 13   | 133 | PFR |                   | Valid             |
		| 2010-10-01        | PREVNAR 13   | 133 | PFR |                   | Valid             |
	When the Patient is assessed for PCV on 2011-05-28
	Then the assessment should not recommend a dose for PCV
	And the series status should be Complete


@SeriesStatus_Complete @VaccineGroup_PCV @Gender_Female @ForecastTestType_NotRecommendedSeriesComplete
Scenario: [CTC 2013-0600] - Dose # 4 PCV 13 at 1 year.  Series complete
	# added on 2013-01-01
	Given a female Patient born on 2009-06-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2009-08-01        | PREVNAR 13   | 133 | PFR |                   | Valid             |
		| 2009-10-01        | PREVNAR 13   | 133 | PFR |                   | Valid             |
	When the Patient is assessed for PCV on 2010-06-01
	Then the assessment should not recommend a dose for PCV
	And the series status should be Complete


@SeriesStatus_NotComplete @VaccineGroup_PCV @Gender_Female @ForecastTestType_RecommendedBasedOnMinimumIntervalFromPreviousDoseCatchUp
Scenario: [CTC 2013-0601] - 4 doses of PCV 7, no PCV 13.  Needs one PCV 13
	# updated on 2013-08-23 in version 1.3 - The fourth dose of PCV7 was marked as Not Valid.  In fact this was a valid administration with a need for a subsequent PCV13 in 8 weeks time.  V1.3: Updated Eval and Forecast Test Type and adjusted the past due date to align with the earliest and recommen
	Given a female Patient born on 2009-06-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2009-08-01        | PREVNAR 7    | 100 | WAL |                   | Valid             |
		| 2009-10-01        | PREVNAR 7    | 100 | WAL |                   | Valid             |
	When the Patient is assessed for PCV on 2010-07-01
	Then the assessment should recommend a dose for PCV on 2010-08-26
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_PCV @Gender_Female @ForecastTestType_RecommendedBasedOnMinimumIntervalFromPreviousDoseCatchUp
Scenario: [CTC 2013-0602] - Dose 1 invalid (age) as first of others
	# added on 2013-01-01
	Given a female Patient born on 2011-08-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2011-09-01        | PREVNAR 13   | 133 | PFR | Age: Too Young    | Not Valid         |
		| 2011-11-15        | PREVNAR 13   | 133 | PFR |                   | Valid             |
	When the Patient is assessed for PCV on 2012-02-01
	Then the assessment should recommend a dose for PCV on 2012-02-29
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_PCV @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0603] - Dose 2 invalid (age) in midst of others
	# added on 2013-01-01
	Given a female Patient born on 2011-09-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2011-10-11        | PREVNAR 13   | 133 | PFR |                   | Valid             |
		| 2011-11-05        | PREVNAR 13   | 133 | PFR | Age: Too Young    | Not Valid         |
	When the Patient is assessed for PCV on 2012-02-01
	Then the assessment should recommend a dose for PCV on 2012-03-01
	And the series status should be Not Complete


@SeriesStatus_Complete @VaccineGroup_PCV @Gender_Female @ForecastTestType_NotRecommendedSeriesComplete
Scenario: [CTC 2013-0604] - Dose # 3 invalid (age) in midst of others.   Four valid doses not required in this scenario
	# added on 2013-01-01
	Given a female Patient born on 2009-12-12
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2010-01-22        | PREVNAR 13   | 133 | PFR |                   | Valid             |
		| 2010-02-18        | PREVNAR 13   | 133 | PFR |                   | Valid             |
	When the Patient is assessed for PCV on 2010-12-24
	Then the assessment should not recommend a dose for PCV
	And the series status should be Complete


@SeriesStatus_NotComplete @VaccineGroup_PCV @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0605] - Dose 1 to dose 2 interval 28-5 days
	# added on 2013-01-01
	Given a female Patient born on 2011-08-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason   | Evaluation Status |
		| 2011-10-01        | PREVNAR 13   | 133 | PFR |                     | Valid             |
		| 2011-10-24        | PREVNAR 13   | 133 | PFR | Interval: Too Short | Not Valid         |
	When the Patient is assessed for PCV on 2011-10-24
	Then the assessment should recommend a dose for PCV on 2011-12-01
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_PCV @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0606] - Dose 1 to dose 2 interval 28-4 days
	# added on 2013-01-01
	Given a female Patient born on 2011-08-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2011-10-01        | PREVNAR 13   | 133 | PFR |                   | Valid             |
		| 2011-10-25        | PREVNAR 13   | 133 | PFR |                   | Valid             |
	When the Patient is assessed for PCV on 2011-10-25
	Then the assessment should recommend a dose for PCV on 2012-02-01
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_PCV @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0607] - Dose # 1 PCV 13 at age 6 weeks-4 days
	# added on 2013-01-01
	Given a female Patient born on 2011-04-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2011-05-09        | PREVNAR 13   | 133 | PFR |                   | Valid             |
	When the Patient is assessed for PCV on 2011-05-09
	Then the assessment should recommend a dose for PCV on 2011-08-01
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_PCV @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0608] - Dose 1 PCV 13 to dose 2 interval 28 days
	# added on 2013-01-01
	Given a female Patient born on 2011-08-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2011-10-01        | PREVNAR 13   | 133 | PFR |                   | Valid             |
		| 2011-10-29        | PREVNAR 13   | 133 | PFR |                   | Valid             |
	When the Patient is assessed for PCV on 2011-10-29
	Then the assessment should recommend a dose for PCV on 2012-02-01
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_PCV @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0609] - Dose 2 to dose 3  interval  28-5 days
	# added on 2013-01-01
	Given a female Patient born on 2011-04-13
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2011-06-13        | PREVNAR 13   | 133 | PFR |                   | Valid             |
		| 2011-08-13        | PREVNAR 13   | 133 | PFR |                   | Valid             |
	When the Patient is assessed for PCV on 2011-09-05
	Then the assessment should recommend a dose for PCV on 2011-10-13
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_PCV @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0610] - Dose 2 to dose 3 PCV 13 interval 28-4 days
	# added on 2013-01-01
	Given a female Patient born on 2010-12-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2011-02-01        | PREVNAR 13   | 133 | PFR |                   | Valid             |
		| 2011-04-17        | PREVNAR 13   | 133 | PFR |                   | Valid             |
	When the Patient is assessed for PCV on 2011-05-11
	Then the assessment should recommend a dose for PCV on 2011-12-01
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_PCV @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0611] - Dose 2 to dose 3 PCV 13 interval 28 days
	# added on 2013-01-01
	Given a female Patient born on 2010-12-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2011-02-01        | PREVNAR 13   | 133 | PFR |                   | Valid             |
		| 2011-04-17        | PREVNAR 13   | 133 | PFR |                   | Valid             |
	When the Patient is assessed for PCV on 2011-05-15
	Then the assessment should recommend a dose for PCV on 2011-12-01
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_PCV @Gender_Female @ForecastTestType_RecommendedBasedOnMinimumIntervalFromInValidDose
Scenario: [CTC 2013-0612] - Dose 3 PCV 13 to dose 4 interval 8 weeks-5 days
	# added on 2013-01-01
	Given a female Patient born on 2010-04-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2010-10-01        | PREVNAR 13   | 133 | PFR |                   | Valid             |
		| 2011-02-01        | PREVNAR 13   | 133 | PFR |                   | Valid             |
	When the Patient is assessed for PCV on 2011-04-21
	Then the assessment should recommend a dose for PCV on 2011-06-16
	And the series status should be Not Complete


@SeriesStatus_Complete @VaccineGroup_PCV @Gender_Female @ForecastTestType_NotRecommendedSeriesComplete
Scenario: [CTC 2013-0613] - Dose 3 PCV 13 to dose 4 interval 8 wks-4 days.  Series complete
	# added on 2013-01-01
	Given a female Patient born on 2010-04-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2010-10-01        | PREVNAR 13   | 133 | PFR |                   | Valid             |
		| 2011-02-01        | PREVNAR 13   | 133 | PFR |                   | Valid             |
	When the Patient is assessed for PCV on 2011-04-22
	Then the assessment should not recommend a dose for PCV
	And the series status should be Complete


@SeriesStatus_Complete @VaccineGroup_PCV @Gender_Female @ForecastTestType_NotRecommendedSeriesComplete
Scenario: [CTC 2013-0614] - Dose 3 PCV 13 to dose 4 interval 8 weeks.  Series complete
	# added on 2013-01-01
	Given a female Patient born on 2010-04-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2010-10-01        | PREVNAR 13   | 133 | PFR |                   | Valid             |
		| 2011-02-01        | PREVNAR 13   | 133 | PFR |                   | Valid             |
	When the Patient is assessed for PCV on 2011-04-26
	Then the assessment should not recommend a dose for PCV
	And the series status should be Complete


@SeriesStatus_Complete @VaccineGroup_PCV @Gender_Female @ForecastTestType_NotRecommendedSeriesComplete
Scenario: [CTC 2013-0615] - Invalid dose 2 (interval) in midst of others
	# added on 2013-01-01
	Given a female Patient born on 2009-02-11
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason   | Evaluation Status |
		| 2009-03-31        | PREVNAR 13   | 133 | PFR |                     | Valid             |
		| 2009-04-23        | PREVNAR 13   | 133 | PFR | Interval: Too Short | Not Valid         |
	When the Patient is assessed for PCV on 2010-02-11
	Then the assessment should not recommend a dose for PCV
	And the series status should be Complete


@SeriesStatus_Complete @VaccineGroup_PCV @Gender_Female @ForecastTestType_NotRecommendedSeriesComplete
Scenario: [CTC 2013-0616] - Invalid dose 3 (interval) in midst of others
	# added on 2013-01-01
	Given a female Patient born on 2010-02-02
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2010-06-02        | PREVNAR 13   | 133 | PFR |                   | Valid             |
		| 2010-09-10        | PREVNAR 13   | 133 | PFR |                   | Valid             |
	When the Patient is assessed for PCV on 2011-03-02
	Then the assessment should not recommend a dose for PCV
	And the series status should be Complete


@SeriesStatus_Complete @VaccineGroup_PCV @Gender_Female @ForecastTestType_NotRecommendedSeriesComplete
Scenario: [CTC 2013-0617] - InValid dose 4 (interval) in midst of others
	# added on 2013-01-01
	Given a female Patient born on 2010-03-18
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2010-05-18        | PREVNAR 13   | 133 | PFR |                   | Valid             |
		| 2010-09-18        | PREVNAR 13   | 133 | PFR |                   | Valid             |
	When the Patient is assessed for PCV on 2011-06-05
	Then the assessment should not recommend a dose for PCV
	And the series status should be Complete


@SeriesStatus_NotComplete @VaccineGroup_PCV @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0618] - Dose # 1 PCV 13 at age 6 weeks
	# added on 2013-01-01
	Given a female Patient born on 2011-11-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2011-12-13        | PREVNAR 13   | 133 | PFR |                   | Valid             |
	When the Patient is assessed for PCV on 2011-12-13
	Then the assessment should recommend a dose for PCV on 2012-03-01
	And the series status should be Not Complete


@SeriesStatus_Complete @VaccineGroup_PCV @Gender_Female @ForecastTestType_NotRecommendedSeriesComplete
Scenario: [CTC 2013-0619] - 4 doses of PCV 7 and 1 dose of PCV 13=series complete
	# updated on 2013-08-23 in version 1.3 - The fourth dose of PCV7 was marked as Not Valid.  In fact this was a valid administration.  The PCV13 which followed completed the series. V1.3 updated Evaluation Test Type
	Given a female Patient born on 2008-06-06
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2008-08-06        | PREVNAR 7    | 100 | WAL |                   | Valid             |
		| 2008-10-06        | PREVNAR 7    | 100 | WAL |                   | Valid             |
	When the Patient is assessed for PCV on 2012-03-05
	Then the assessment should not recommend a dose for PCV
	And the series status should be Complete


@SeriesStatus_AgedOut @VaccineGroup_PCV @Gender_Female @ForecastTestType_NotRecommendedTooOld
Scenario: [CTC 2013-0620] - Four doses PCV 7, no PCV 13 child ≥ 5 years old.  No forecast
	# updated on 2014-11-07 in version 1.6 - v1.6: Updated Series Status from "Not Complete" to "Aged Out" to align with updated CDSi Logic Specification Series Statuses.; ; v1.3: The fourth dose of PCV7 was marked as Not Valid.  This was a valid administration.  The child aged out of the recommended
	Given a female Patient born on 2006-06-06
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2006-08-08        | PREVNAR 7    | 100 | WAL |                   | Valid             |
		| 2006-10-10        | PREVNAR 7    | 100 | WAL |                   | Valid             |
	When the Patient is assessed for PCV on 2011-06-06
	Then the assessment should not recommend a dose for PCV
	And the series status should be Aged Out


@SeriesStatus_Contraindicated @VaccineGroup_PCV @Gender_Female @ForecastTestType_NotRecommendedContraindication
Scenario: [CTC 2013-0621] - Anaphylaxis to previous dose of PCV.  No forecast
	# added on 2013-01-01
	Given a female Patient born on 2007-07-11
	And the following medical history is reported
	| Medical History Text | Medical History Code | Medical History System |
	|                      | VXC20                | CDCPHINVS              |
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2007-09-11        | PREVNAR 7    | 100 | WAL |                   | Valid             |
	When the Patient is assessed for PCV on 2007-09-11
	Then the assessment should not recommend a dose for PCV
	And the series status should be Contraindicated


@SeriesStatus_NotComplete @VaccineGroup_PCV @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0622] - Dose # 1 PCV 13 at age 2 months
	# added on 2013-01-01
	Given a female Patient born on 2011-11-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2012-01-01        | PREVNAR 13   | 133 | PFR |                   | Valid             |
	When the Patient is assessed for PCV on 2012-01-01
	Then the assessment should recommend a dose for PCV on 2012-03-01
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_PCV @Gender_Female @ForecastTestType_RecommendedBasedOnMinimumIntervalFromPreviousDoseCatchUp
Scenario: [CTC 2013-0624] - Dose # 1 PCV 13 at age 11 months
	# added on 2013-01-01
	Given a female Patient born on 2011-02-03
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2012-01-03        | PREVNAR 13   | 133 | PFR |                   | Valid             |
	When the Patient is assessed for PCV on 2012-01-03
	Then the assessment should recommend a dose for PCV on 2012-01-31
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_PCV @Gender_Female @ForecastTestType_RecommendedBasedOnMinimumIntervalFromPreviousDoseCatchUp
Scenario: [CTC 2013-0625] - Dose # 1 PCV 13 at age 12 months
	# updated on 2013-07-09 in version 1.1 - Past Due Date was incorrect.  Should be in alignment with the earliest and recommended.  Child is in catch-up schedule.
	Given a female Patient born on 2010-12-12
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2011-12-12        | PREVNAR 13   | 133 | PFR |                   | Valid             |
	When the Patient is assessed for PCV on 2011-12-12
	Then the assessment should recommend a dose for PCV on 2012-02-06
	And the series status should be Not Complete

