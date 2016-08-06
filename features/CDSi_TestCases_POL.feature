Feature: POL CDSi test cases

@SeriesStatus_NotComplete @VaccineGroup_POL @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0626] - Newborn Testing
	# added on 2013-01-01
	Given a female Patient born on 2012-02-01
	And no immunizations have been given
	When the Patient is assessed for POL on 2012-02-01
	Then the assessment should recommend a dose for POL on 2012-04-01
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_POL @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0627] - Dose # 2 at age 10 weeks
	# updated on 2013-06-26 in version 1.1 - Typo on Past Due Date by one year.
	Given a female Patient born on 2011-02-26
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2011-04-09        | IPOL         | 10  | PMC |                   | Valid             |
		| 2011-05-07        | IPOL         | 10  | PMC |                   | Valid             |
	When the Patient is assessed for POL on 2011-05-07
	Then the assessment should recommend a dose for POL on 2011-08-26
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_POL @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0628] - Dose # 2 at age 4 months
	# updated on 2013-06-26 in version 1.1 - Typo on Past Due Date by one year.
	Given a female Patient born on 2011-08-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2011-10-01        | IPOL         | 10  | PMC |                   | Valid             |
		| 2011-12-01        | IPOL         | 10  | PMC |                   | Valid             |
	When the Patient is assessed for POL on 2011-12-01
	Then the assessment should recommend a dose for POL on 2012-02-01
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_POL @Gender_Female @ForecastTestType_RecommendedBasedOnMinimumIntervalFromPreviousDoseCatchUp
Scenario: [CTC 2013-0629] - Dose # 2 at age 3 years 9 months
	# added on 2013-01-01
	Given a female Patient born on 2007-07-08
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2007-09-08        | IPOL         | 10  | PMC |                   | Valid             |
		| 2011-04-08        | IPOL         | 10  | PMC |                   | Valid             |
	When the Patient is assessed for POL on 2011-04-08
	Then the assessment should recommend a dose for POL on 2011-05-06
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_POL @Gender_Female @ForecastTestType_RecommendedBasedOnMinimumIntervalFromPreviousDoseCatchUp
Scenario: [CTC 2013-0630] - Dose # 2 at age 4 years 0 months
	# updated on 2013-06-26 in version 1.1 - Polio should continue to be recommended in 4 weeks.  The dose should not be skipped until 4 years AND 6 months from previous dose.
	Given a female Patient born on 2007-12-12
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2009-12-12        | IPOL         | 10  | PMC |                   | Valid             |
		| 2011-12-12        | IPOL         | 10  | PMC |                   | Valid             |
	When the Patient is assessed for POL on 2011-12-12
	Then the assessment should recommend a dose for POL on 2012-01-09
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_POL @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0631] - Dose # 3 at age 14 weeks-5 days
	# updated on 2013-06-26 in version 1.1 - Typo on Past Due Date by one year.
	Given a female Patient born on 2010-06-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2010-07-09        | IPOL         | 10  | PMC |                   | Valid             |
		| 2010-08-06        | IPOL         | 10  | PMC |                   | Valid             |
	When the Patient is assessed for POL on 2010-09-02
	Then the assessment should recommend a dose for POL on 2010-12-01
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_POL @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0632] - Dose # 3 at age 14 weeks -4 days
	# added on 2013-01-01
	Given a female Patient born on 2006-01-06
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2006-02-17        | IPOL         | 10  | PMC |                   | Valid             |
		| 2006-03-17        | IPOL         | 10  | PMC |                   | Valid             |
	When the Patient is assessed for POL on 2006-04-10
	Then the assessment should recommend a dose for POL on 2010-01-06
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_POL @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0633] - Dose # 3 at age 14 weeks
	# added on 2013-01-01
	Given a female Patient born on 2006-01-06
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2006-02-17        | IPOL         | 10  | PMC |                   | Valid             |
		| 2006-03-17        | IPOL         | 10  | PMC |                   | Valid             |
	When the Patient is assessed for POL on 2006-04-14
	Then the assessment should recommend a dose for POL on 2010-01-06
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_POL @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0634] - Dose # 3 at age 6 months
	# added on 2013-01-01
	Given a female Patient born on 2006-02-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2006-04-01        | IPOL         | 10  | PMC |                   | Valid             |
		| 2006-06-01        | IPOL         | 10  | PMC |                   | Valid             |
	When the Patient is assessed for POL on 2006-08-01
	Then the assessment should recommend a dose for POL on 2010-02-01
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_POL @Gender_Female @ForecastTestType_RecommendedBasedOnMinimumIntervalFromPreviousDoseCatchUp
Scenario: [CTC 2013-0635] - Dose # 3 at age 3 yrs 11.5 years old
	# added on 2013-01-01
	Given a female Patient born on 1999-06-23
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 1999-08-23        | IPOL         | 10  | PMC |                   | Valid             |
		| 1999-10-23        | IPOL         | 10  | PMC |                   | Valid             |
	When the Patient is assessed for POL on 2003-06-07
	Then the assessment should recommend a dose for POL on 2003-12-07
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_POL @Gender_Female @ForecastTestType_RecommendedBasedOnMinimumIntervalFromPreviousDoseCatchUp
Scenario: [CTC 2013-0636] - Dose # 3 at age 4 years-5 days.   Is valid as a dose but child will need another
	# added on 2013-01-01
	Given a female Patient born on 2007-08-22
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2007-10-22        | IPOL         | 10  | PMC |                   | Valid             |
		| 2007-12-22        | IPOL         | 10  | PMC |                   | Valid             |
	When the Patient is assessed for POL on 2011-08-17
	Then the assessment should recommend a dose for POL on 2012-02-17
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_POL @Gender_Female @ForecastTestType_RecommendedBasedOnMinimumIntervalFromPreviousDoseCatchUp
Scenario: [CTC 2013-0637] - # 1 and # 2 at ≥ 4 years
	# updated on 2013-06-26 in version 1.1 - Polio should continue to be recommended in 4 weeks.  The dose should not be skipped until 4 years AND 6 months from previous dose.
	Given a female Patient born on 2007-02-11
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2011-02-11        | IPOL         | 10  | PMC |                   | Valid             |
		| 2011-03-11        | IPOL         | 10  | PMC |                   | Valid             |
	When the Patient is assessed for POL on 2011-03-11
	Then the assessment should recommend a dose for POL on 2011-04-08
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_POL @Gender_Female @ForecastTestType_RecommendedBasedOnMinimumIntervalFromPreviousDoseCatchUp
Scenario: [CTC 2013-0638] - Dose # 3 at 4 years-4 days but not six months after dose 2.  Child will need another
	# added on 2013-01-01
	Given a female Patient born on 2007-08-22
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2008-08-22        | IPOL         | 10  | PMC |                   | Valid             |
		| 2011-03-22        | IPOL         | 10  | PMC |                   | Valid             |
	When the Patient is assessed for POL on 2011-08-18
	Then the assessment should recommend a dose for POL on 2012-02-18
	And the series status should be Not Complete


@SeriesStatus_Complete @VaccineGroup_POL @Gender_Female @ForecastTestType_NotRecommendedSeriesComplete
Scenario: [CTC 2013-0639] - Dose # 3 at 4 years-4 days and ≥ 6 months since dose 2.  Series complete
	# added on 2013-01-01
	Given a female Patient born on 2007-08-22
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2008-08-22        | IPOL         | 10  | PMC |                   | Valid             |
		| 2011-01-22        | IPOL         | 10  | PMC |                   | Valid             |
	When the Patient is assessed for POL on 2011-08-18
	Then the assessment should not recommend a dose for POL
	And the series status should be Complete


@SeriesStatus_NotComplete @VaccineGroup_POL @Gender_Female @ForecastTestType_RecommendedBasedOnMinimumIntervalFromPreviousDoseCatchUp
Scenario: [CTC 2013-0640] - Dose # 3 at age 4 years but < 6 months after dose 2.  Valid but child will need a dose # 4
	# added on 2013-01-01
	Given a female Patient born on 2007-02-11
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2008-02-11        | IPOL         | 10  | PMC |                   | Valid             |
		| 2010-10-11        | IPOL         | 10  | PMC |                   | Valid             |
	When the Patient is assessed for POL on 2011-02-11
	Then the assessment should recommend a dose for POL on 2011-08-11
	And the series status should be Not Complete


@SeriesStatus_Complete @VaccineGroup_POL @Gender_Female @ForecastTestType_NotRecommendedSeriesComplete
Scenario: [CTC 2013-0641] - Dose # 3 at 4 years 0 months and ≥ 6 mo since dose 2.   Series complete
	# added on 2013-01-01
	Given a female Patient born on 1997-03-18
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 1997-05-18        | IPOL         | 10  | PMC |                   | Valid             |
		| 1997-07-18        | IPOL         | 10  | PMC |                   | Valid             |
	When the Patient is assessed for POL on 2001-03-18
	Then the assessment should not recommend a dose for POL
	And the series status should be Complete


@SeriesStatus_NotComplete @VaccineGroup_POL @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0642] - Dose # 4 at age 18 months.   InValid as dose 4
	# updated on 2014-08-06 in version 1.5 - V1.5: Rolled all dates forward 5 years to ensure test was relevant to when ACIP recommendations were made.  Previous dates were before the ACIP recommendations were published.
	Given a female Patient born on 2010-06-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2010-08-01        | IPOL         | 10  | PMC |                   | Valid             |
		| 2010-10-01        | IPOL         | 10  | PMC |                   | Valid             |
	When the Patient is assessed for POL on 2011-12-01
	Then the assessment should recommend a dose for POL on 2014-06-01
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_POL @Gender_Female @ForecastTestType_RecommendedBasedOnMinimumIntervalFromPreviousDoseCatchUp
Scenario: [CTC 2013-0643] - Dose # 4 at age 4 yrs-5 days
	# added on 2013-01-01
	Given a female Patient born on 2007-12-25
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2008-03-25        | IPOL         | 10  | PMC |                   | Valid             |
		| 2008-07-25        | IPOL         | 10  | PMC |                   | Valid             |
	When the Patient is assessed for POL on 2011-12-20
	Then the assessment should recommend a dose for POL on 2012-06-20
	And the series status should be Not Complete


@SeriesStatus_Complete @VaccineGroup_POL @Gender_Female @ForecastTestType_NotRecommendedSeriesComplete
Scenario: [CTC 2013-0644] - Dose # 4 at age 4 years-4 days.  Series complete
	# added on 2013-01-01
	Given a female Patient born on 2007-12-25
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2008-03-25        | IPOL         | 10  | PMC |                   | Valid             |
		| 2008-07-25        | IPOL         | 10  | PMC |                   | Valid             |
	When the Patient is assessed for POL on 2011-12-21
	Then the assessment should not recommend a dose for POL
	And the series status should be Complete


@SeriesStatus_Complete @VaccineGroup_POL @Gender_Female @ForecastTestType_NotRecommendedSeriesComplete
Scenario: [CTC 2013-0645] - Dose # 4 at age 4 years 0 days.  Series complete
	# added on 2013-01-01
	Given a female Patient born on 2001-06-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2001-08-01        | IPOL         | 10  | PMC |                   | Valid             |
		| 2001-10-01        | IPOL         | 10  | PMC |                   | Valid             |
	When the Patient is assessed for POL on 2005-06-01
	Then the assessment should not recommend a dose for POL
	And the series status should be Complete


@SeriesStatus_NotComplete @VaccineGroup_POL @Gender_Female @ForecastTestType_RecommendedBasedOnMinimumIntervalFromPreviousDoseCatchUp
Scenario: [CTC 2013-0646] - Invalid dose 1 (age) as first of others
	# added on 2013-01-01
	Given a female Patient born on 2011-08-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2011-09-01        | IPOL         | 10  | PMC | Age: Too Young    | Not Valid         |
		| 2011-12-01        | IPOL         | 10  | PMC |                   | Valid             |
	When the Patient is assessed for POL on 2012-02-01
	Then the assessment should recommend a dose for POL on 2012-02-29
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_POL @Gender_Female @ForecastTestType_RecommendedBasedOnMinimumIntervalFromPreviousDoseCatchUp
Scenario: [CTC 2013-0647] - Invalid dose # 2 (age) in midst of others
	# added on 2013-01-01
	Given a female Patient born on 2011-08-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2011-09-08        | IPOL         | 10  | PMC |                   | Valid             |
		| 2011-10-05        | IPOL         | 10  | PMC | Age: Too Young    | Not Valid         |
	When the Patient is assessed for POL on 2012-02-01
	Then the assessment should recommend a dose for POL on 2012-02-29
	And the series status should be Not Complete


@SeriesStatus_Complete @VaccineGroup_POL @Gender_Female @ForecastTestType_NotRecommendedSeriesComplete
Scenario: [CTC 2013-0648] - Invalid dose 3 (age) in midst of others.  No additional dose required. The next dose  was at age 4 and ≥ 6 months since previous dose.  Series complete
	# added on 2013-01-01
	Given a female Patient born on 2007-06-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2007-07-13        | IPOL         | 10  | PMC |                   | Valid             |
		| 2007-08-07        | IPOL         | 10  | PMC |                   | Valid             |
	When the Patient is assessed for POL on 2011-06-01
	Then the assessment should not recommend a dose for POL
	And the series status should be Complete


@SeriesStatus_NotComplete @VaccineGroup_POL @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0649] - Dose 1 to dose 2 interval 28-5 days
	# added on 2013-01-01
	Given a female Patient born on 2009-06-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason   | Evaluation Status |
		| 2009-08-01        | IPOL         | 10  | PMC |                     | Valid             |
		| 2009-08-24        | IPOL         | 10  | PMC | Interval: Too Short | Not Valid         |
	When the Patient is assessed for POL on 2009-08-24
	Then the assessment should recommend a dose for POL on 2009-10-01
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_POL @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0650] - Dose 1 to dose2  interval 28-4 days
	# added on 2013-01-01
	Given a female Patient born on 2006-02-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2006-04-01        | IPOL         | 10  | PMC |                   | Valid             |
		| 2006-04-25        | IPOL         | 10  | PMC |                   | Valid             |
	When the Patient is assessed for POL on 2006-04-25
	Then the assessment should recommend a dose for POL on 2006-08-01
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_POL @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0651] - Dose 1 to dose 2 interval 28 days
	# added on 2013-01-01
	Given a female Patient born on 2006-02-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2006-04-01        | IPOL         | 10  | PMC |                   | Valid             |
		| 2006-04-29        | IPOL         | 10  | PMC |                   | Valid             |
	When the Patient is assessed for POL on 2006-04-29
	Then the assessment should recommend a dose for POL on 2006-08-01
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_POL @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0652] - Dose 2 to dose 3 interval 28-5 days
	# added on 2013-01-01
	Given a female Patient born on 2010-04-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2010-06-01        | IPOL         | 10  | PMC |                   | Valid             |
		| 2010-08-01        | IPOL         | 10  | PMC |                   | Valid             |
	When the Patient is assessed for POL on 2010-08-24
	Then the assessment should recommend a dose for POL on 2010-10-01
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_POL @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0653] - Dose 2 to dose 3 interval 28-4 days
	# added on 2013-01-01
	Given a female Patient born on 2005-12-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2006-01-10        | IPOL         | 10  | PMC |                   | Valid             |
		| 2006-02-13        | IPOL         | 10  | PMC |                   | Valid             |
	When the Patient is assessed for POL on 2006-03-09
	Then the assessment should recommend a dose for POL on 2009-12-01
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_POL @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0654] - Dose 2 to dose 3 interval 28 days
	# added on 2013-01-01
	Given a female Patient born on 2005-12-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2006-02-01        | IPOL         | 10  | PMC |                   | Valid             |
		| 2006-04-01        | IPOL         | 10  | PMC |                   | Valid             |
	When the Patient is assessed for POL on 2006-04-29
	Then the assessment should recommend a dose for POL on 2009-12-01
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_POL @Gender_Female @ForecastTestType_RecommendedBasedOnMinimumIntervalFromInValidDose
Scenario: [CTC 2013-0655] - Dose 3 to dose 4 interval 6 m-5 days
	# added on 2013-01-01
	Given a female Patient born on 2006-11-15
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2007-11-15        | IPOL         | 10  | PMC |                   | Valid             |
		| 2008-11-15        | IPOL         | 10  | PMC |                   | Valid             |
	When the Patient is assessed for POL on 2010-11-15
	Then the assessment should recommend a dose for POL on 2011-05-15
	And the series status should be Not Complete


@SeriesStatus_Complete @VaccineGroup_POL @Gender_Female @ForecastTestType_NotRecommendedSeriesComplete
Scenario: [CTC 2013-0656] - Dose 3 to dose 4 interval 6 months-4 days.  Series complete
	# added on 2013-01-01
	Given a female Patient born on 2006-11-15
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2007-11-15        | IPOL         | 10  | PMC |                   | Valid             |
		| 2008-11-15        | IPOL         | 10  | PMC |                   | Valid             |
	When the Patient is assessed for POL on 2010-11-15
	Then the assessment should not recommend a dose for POL
	And the series status should be Complete


@SeriesStatus_Complete @VaccineGroup_POL @Gender_Female @ForecastTestType_NotRecommendedSeriesComplete
Scenario: [CTC 2013-0657] - Dose 3 to dose 4 interval 6 months.  Series complete
	# added on 2013-01-01
	Given a female Patient born on 2006-11-15
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2007-11-15        | IPOL         | 10  | PMC |                   | Valid             |
		| 2008-11-15        | IPOL         | 10  | PMC |                   | Valid             |
	When the Patient is assessed for POL on 2010-11-19
	Then the assessment should not recommend a dose for POL
	And the series status should be Complete


@SeriesStatus_NotComplete @VaccineGroup_POL @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0658] - Dose # 1 at age 6 weeks-5 days
	# added on 2013-01-01
	Given a female Patient born on 2010-11-10
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2010-12-17        | IPOL         | 10  | PMC | Age: Too Young    | Not Valid         |
	When the Patient is assessed for POL on 2010-12-17
	Then the assessment should recommend a dose for POL on 2011-01-10
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_POL @Gender_Female @ForecastTestType_RecommendedBasedOnMinimumIntervalFromPreviousDoseCatchUp
Scenario: [CTC 2013-0659] - Invalid dose 1 to dose 2 interval in midst of others
	# added on 2013-01-01
	Given a female Patient born on 2009-02-11
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason   | Evaluation Status |
		| 2009-04-11        | IPOL         | 10  | PMC |                     | Valid             |
		| 2009-05-03        | IPOL         | 10  | PMC | Interval: Too Short | Not Valid         |
	When the Patient is assessed for POL on 2009-08-11
	Then the assessment should recommend a dose for POL on 2009-09-08
	And the series status should be Not Complete


@SeriesStatus_Complete @VaccineGroup_POL @Gender_Female @ForecastTestType_NotRecommendedSeriesComplete
Scenario: [CTC 2013-0660] - Invalid dose 3 (interval) in midst of others makes no difference in forecasting if # 4 is ≥ 4 years old and ≥ 6 months after previous dose.  Series complete
	# added on 2013-01-01
	Given a female Patient born on 2008-02-02
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2008-04-02        | IPOL         | 10  | PMC |                   | Valid             |
		| 2008-06-02        | IPOL         | 10  | PMC |                   | Valid             |
	When the Patient is assessed for POL on 2012-02-04
	Then the assessment should not recommend a dose for POL
	And the series status should be Complete


@SeriesStatus_NotComplete @VaccineGroup_POL @Gender_Female @ForecastTestType_RecommendedBasedOnMinimumIntervalFromPreviousDoseCatchUp
Scenario: [CTC 2013-0661] - Mixed OPV/IPV require 4 doses even if # 3 is after age 4 and ≥ 6 months after previous dose
	# added on 2013-01-01
	Given a female Patient born on 2004-10-16
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2004-12-16        | ORIMUNE      | 02  | WAL |                   | Valid             |
		| 2005-02-16        | ORIMUNE      | 02  | WAL |                   | Valid             |
	When the Patient is assessed for POL on 2009-10-16
	Then the assessment should recommend a dose for POL on 2010-04-16
	And the series status should be Not Complete


@SeriesStatus_Complete @VaccineGroup_POL @Gender_Female @ForecastTestType_NotRecommendedSeriesComplete
Scenario: [CTC 2013-0662] - 4 doses of mixed OPV/IPV with one after age 4=polio series complete
	# added on 2013-01-01
	Given a female Patient born on 1999-04-13
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 1999-06-13        | ORIMUNE      | 02  | WAL |                   | Valid             |
		| 1999-08-13        | ORIMUNE      | 02  | WAL |                   | Valid             |
	When the Patient is assessed for POL on 2004-04-17
	Then the assessment should not recommend a dose for POL
	And the series status should be Complete


@SeriesStatus_Contraindicated @VaccineGroup_POL @Gender_Female @ForecastTestType_NotRecommendedContraindication
Scenario: [CTC 2013-0663] - Anaphylaxis to previous dose.  No forecast
	# added on 2013-01-01
	Given a female Patient born on 2010-07-24
	And the following medical history is reported
	| Medical History Text | Medical History Code | Medical History System |
	|                      | VXC20                | CDCPHINVS              |
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2010-09-24        | IPOL         | 10  | PMC |                   | Valid             |
	When the Patient is assessed for POL on 2010-09-24
	Then the assessment should not recommend a dose for POL
	And the series status should be Contraindicated


@SeriesStatus_NotComplete @VaccineGroup_POL @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0664] - Dose 1 given as Kinrix at age 2 mos.  Off-label but valid as IPV # 1
	# added on 2013-01-01
	Given a female Patient born on 2011-11-11
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2012-01-11        | KINRIX       | 130 | SKB |                   | Valid             |
	When the Patient is assessed for POL on 2012-01-11
	Then the assessment should recommend a dose for POL on 2012-03-11
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_POL @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0665] - Dose 2 given as Kinrix at age 4 mo.  Off label but valid as IPV 2
	# added on 2013-01-01
	Given a female Patient born on 2011-09-09
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2011-11-15        | IPOL         | 10  | PMC |                   | Valid             |
		| 2012-01-09        | KINRIX       | 130 | SKB |                   | Valid             |
	When the Patient is assessed for POL on 2012-01-09
	Then the assessment should recommend a dose for POL on 2012-03-09
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_POL @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0666] - Dose 3 given as Kinrix at age 6 mos.  Off label but valid
	# added on 2013-01-01
	Given a female Patient born on 2011-07-07
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2011-09-09        | IPOL         | 10  | PMC |                   | Valid             |
		| 2011-11-11        | IPOL         | 10  | PMC |                   | Valid             |
	When the Patient is assessed for POL on 2012-01-07
	Then the assessment should recommend a dose for POL on 2015-07-07
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_POL @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0667] - Kinrix at 12 months old.  Not Valid as dose 4 of IPV
	# added on 2013-01-01
	Given a female Patient born on 2006-07-07
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2006-09-09        | IPOL         | 10  | PMC |                   | Valid             |
		| 2006-11-11        | IPOL         | 10  | PMC |                   | Valid             |
	When the Patient is assessed for POL on 2007-08-01
	Then the assessment should recommend a dose for POL on 2010-07-07
	And the series status should be Not Complete


@SeriesStatus_Complete @VaccineGroup_POL @Gender_Female @ForecastTestType_NotRecommendedSeriesComplete
Scenario: [CTC 2013-0668] - Kinrix at age 4 years as dose 4=polio series complete
	# added on 2013-01-01
	Given a female Patient born on 2006-10-04
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2006-12-06        | PEDIARIX     | 110 | SKB |                   | Valid             |
		| 2007-02-04        | PEDIARIX     | 110 | SKB |                   | Valid             |
	When the Patient is assessed for POL on 2010-10-04
	Then the assessment should not recommend a dose for POL
	And the series status should be Complete


@SeriesStatus_NotComplete @VaccineGroup_POL @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0669] - Dose # 1 at age 6 weeks-4 days
	# added on 2013-01-01
	Given a female Patient born on 2006-04-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2006-05-09        | IPOL         | 10  | PMC |                   | Valid             |
	When the Patient is assessed for POL on 2006-05-09
	Then the assessment should recommend a dose for POL on 2006-08-01
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_POL @Gender_Female @ForecastTestType_RecommendedBasedOnMinimumIntervalFromInValidDose
Scenario: [CTC 2013-0670] - Kinrix as dose 4 at age 4 years-5 days
	# added on 2013-01-01
	Given a female Patient born on 2007-07-07
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2007-08-30        | PEDIARIX     | 110 | SKB |                   | Valid             |
		| 2007-10-24        | PEDIARIX     | 110 | SKB |                   | Valid             |
	When the Patient is assessed for POL on 2011-07-02
	Then the assessment should recommend a dose for POL on 2012-01-02
	And the series status should be Not Complete


@SeriesStatus_Complete @VaccineGroup_POL @Gender_Female @ForecastTestType_NotRecommendedSeriesComplete
Scenario: [CTC 2013-0671] - Kinrix as dose 4 at age 4 years-4 days= polio series complete
	# added on 2013-01-01
	Given a female Patient born on 2007-10-18
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2007-12-07        | PEDIARIX     | 110 | SKB |                   | Valid             |
		| 2008-02-04        | PEDIARIX     | 110 | SKB |                   | Valid             |
	When the Patient is assessed for POL on 2011-10-14
	Then the assessment should not recommend a dose for POL
	And the series status should be Complete


@SeriesStatus_NotComplete @VaccineGroup_POL @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0672] - Dose # 1 at age 6 weeks
	# added on 2013-01-01
	Given a female Patient born on 2011-11-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2011-12-13        | IPOL         | 10  | PMC |                   | Valid             |
	When the Patient is assessed for POL on 2011-12-13
	Then the assessment should recommend a dose for POL on 2012-03-01
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_POL @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0673] - Dose # 1 at age 2 months
	# added on 2013-01-01
	Given a female Patient born on 2011-11-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2012-01-01        | IPOL         | 10  | PMC |                   | Valid             |
	When the Patient is assessed for POL on 2012-01-01
	Then the assessment should recommend a dose for POL on 2012-03-01
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_POL @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0674] - Dose # 2 at age 10 weeks-5 days
	# added on 2013-01-01
	Given a female Patient born on 2005-09-10
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2005-10-18        | IPOL         | 10  | PMC |                   | Valid             |
		| 2005-11-14        | IPOL         | 10  | PMC | Age: Too Young    | Not Valid         |
	When the Patient is assessed for POL on 2005-11-14
	Then the assessment should recommend a dose for POL on 2006-01-10
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_POL @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0675] - Dose # 2 at age 10 weeks-4 days
	# updated on 2013-06-26 in version 1.1 - Typo on Past Due Date by one year.
	Given a female Patient born on 2011-02-26
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2011-04-09        | IPOL         | 10  | PMC |                   | Valid             |
		| 2011-05-03        | IPOL         | 10  | PMC |                   | Valid             |
	When the Patient is assessed for POL on 2011-05-03
	Then the assessment should recommend a dose for POL on 2011-08-26
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_POL @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0676] - Newborn forecasting
	# added on 2013-01-01
	Given a female Patient born on 2012-04-01
	And no immunizations have been given
	When the Patient is assessed for POL on 2012-04-01
	Then the assessment should recommend a dose for POL on 2012-06-01
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_POL @Gender_Female @ForecastTestType_RecommendedBasedOnMinimumIntervalFromPreviousDoseCatchUp
Scenario: [CTC 2013-0677] - # 2 Pediarix at 6 yrs 11.5 mo
	# updated on 2013-06-26 in version 1.1 - Polio should continue to be recommended in 4 weeks.  The dose should not be skipped until 4 years AND 6 months from previous dose.
	Given a female Patient born on 2005-01-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2007-12-16        | PEDIARIX     | 110 | SKB |                   | Valid             |
		| 2011-12-15        | PEDIARIX     | 110 | SKB |                   | Valid             |
	When the Patient is assessed for POL on 2011-12-15
	Then the assessment should recommend a dose for POL on 2012-01-12
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_POL @Gender_Female @ForecastTestType_RecommendedBasedOnMinimumIntervalFromPreviousDoseCatchUp
Scenario: [CTC 2013-0678] - # 2 Pediarix at 7 yrs; # 1 at less than 12 mo
	# updated on 2013-06-26 in version 1.1 - Polio should continue to be recommended in 4 weeks.  The dose should not be skipped until 4 years AND 6 months from previous dose.
	Given a female Patient born on 2003-09-16
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2003-12-16        | PEDIARIX     | 110 | SKB |                   | Valid             |
		| 2010-09-16        | PEDIARIX     | 110 | SKB |                   | Valid             |
	When the Patient is assessed for POL on 2010-09-16
	Then the assessment should recommend a dose for POL on 2010-10-14
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_POL @Gender_Female @ForecastTestType_RecommendedBasedOnMinimumIntervalFromPreviousDoseCatchUp
Scenario: [CTC 2013-0679] - # 2 Pediarix at 7 yrs; # 1 ≥ 12 mo
	# updated on 2013-06-26 in version 1.1 - Polio should continue to be recommended in 4 weeks.  The dose should not be skipped until 4 years AND 6 months from previous dose.
	Given a female Patient born on 2004-09-16
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2005-10-16        | PEDIARIX     | 110 | SKB |                   | Valid             |
		| 2011-09-16        | PEDIARIX     | 110 | SKB |                   | Valid             |
	When the Patient is assessed for POL on 2011-09-16
	Then the assessment should recommend a dose for POL on 2011-10-14
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_POL @Gender_Female @ForecastTestType_RecommendedBasedOnMinimumIntervalFromPreviousDoseCatchUp
Scenario: [CTC 2013-0680] - # 1 and 2 Pediarix at ≥7 yrs  with 28 day interval.  Off label
	# updated on 2013-08-07 in version 1.2 - Original forecast were suggesting skipping dose 3 to the final dose at 6 months.  EIPB guidance and harmonized schedule does not allow skipping until 6 months has passed.  The forecast should be in 4 weeks per the dose 3 interval.
	Given a female Patient born on 2002-07-07
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2009-07-07        | PEDIARIX     | 110 | SKB |                   | Valid             |
		| 2009-08-04        | PEDIARIX     | 110 | SKB |                   | Valid             |
	When the Patient is assessed for POL on 2009-08-04
	Then the assessment should recommend a dose for POL on 2009-09-01
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_POL @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0681] - # 3 Pediarix at 14 wks-5 days
	# updated on 2013-06-26 in version 1.1 - Typo on Past Due Date by one year.
	Given a female Patient born on 2005-06-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2005-07-09        | PEDIARIX     | 110 | SKB |                   | Valid             |
		| 2005-08-06        | PEDIARIX     | 110 | SKB |                   | Valid             |
	When the Patient is assessed for POL on 2005-09-02
	Then the assessment should recommend a dose for POL on 2005-12-01
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_POL @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0682] - # 3 Pediarix at 14 wks-4 days
	# added on 2013-01-01
	Given a female Patient born on 2006-01-06
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2006-02-15        | PEDIARIX     | 110 | SKB |                   | Valid             |
		| 2006-03-15        | PEDIARIX     | 110 | SKB |                   | Valid             |
	When the Patient is assessed for POL on 2006-04-10
	Then the assessment should recommend a dose for POL on 2010-01-06
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_POL @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0683] - # 3 Pediarix at 24 weeks-5 days
	# added on 2013-01-01
	Given a female Patient born on 2011-05-13
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2011-06-24        | PEDIARIX     | 110 | SKB |                   | Valid             |
		| 2011-08-24        | PEDIARIX     | 110 | SKB |                   | Valid             |
	When the Patient is assessed for POL on 2011-10-23
	Then the assessment should recommend a dose for POL on 2015-05-13
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_POL @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0684] - # 3 Pediarix at 24 weeks-4 days
	# added on 2013-01-01
	Given a female Patient born on 2011-05-13
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2011-06-24        | PEDIARIX     | 110 | SKB |                   | Valid             |
		| 2011-08-24        | PEDIARIX     | 110 | SKB |                   | Valid             |
	When the Patient is assessed for POL on 2011-10-24
	Then the assessment should recommend a dose for POL on 2015-05-13
	And the series status should be Not Complete


@SeriesStatus_Complete @VaccineGroup_POL @Gender_Female @ForecastTestType_NotRecommendedSeriesComplete
Scenario: [CTC 2013-0685] - # 3 Pediarix at 6 yrs 11.5 mo
	# added on 2013-01-01
	Given a female Patient born on 2004-07-07
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2007-05-05        | PEDIARIX     | 110 | SKB |                   | Valid             |
		| 2008-08-08        | PEDIARIX     | 110 | SKB |                   | Valid             |
	When the Patient is assessed for POL on 2011-06-25
	Then the assessment should not recommend a dose for POL
	And the series status should be Complete


@SeriesStatus_NotComplete @VaccineGroup_POL @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0686] - # 4 Pediarix at 1 yr -5 days
	# added on 2013-01-01
	Given a female Patient born on 2010-04-04
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2010-06-04        | PEDIARIX     | 110 | SKB |                   | Valid             |
		| 2010-08-04        | PEDIARIX     | 110 | SKB |                   | Valid             |
	When the Patient is assessed for POL on 2011-03-30
	Then the assessment should recommend a dose for POL on 2014-04-04
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_POL @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0687] - # 1 Pediarix at 6 wks-5 days
	# added on 2013-01-01
	Given a female Patient born on 2011-05-06
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2011-06-12        | PEDIARIX     | 110 | SKB | Age: Too Young    | Not Valid         |
	When the Patient is assessed for POL on 2011-06-12
	Then the assessment should recommend a dose for POL on 2011-07-06
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_POL @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0688] - # 4 Pediarix at 1 yr -4 days
	# added on 2013-01-01
	Given a female Patient born on 2005-06-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2005-08-01        | PEDIARIX     | 110 | SKB |                   | Valid             |
		| 2005-11-01        | PEDIARIX     | 110 | SKB |                   | Valid             |
	When the Patient is assessed for POL on 2006-05-28
	Then the assessment should recommend a dose for POL on 2009-06-01
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_POL @Gender_Female @ForecastTestType_RecommendedBasedOnMinimumIntervalFromInvalidDose
Scenario: [CTC 2013-0689] - # 4 Pediarix at 3 yrs 11.5 mo
	# added on 2013-01-01
	Given a female Patient born on 2008-02-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2008-04-01        | PEDIARIX     | 110 | SKB |                   | Valid             |
		| 2008-07-01        | PEDIARIX     | 110 | SKB |                   | Valid             |
	When the Patient is assessed for POL on 2012-01-15
	Then the assessment should recommend a dose for POL on 2012-07-15
	And the series status should be Not Complete


@SeriesStatus_Complete @VaccineGroup_POL @Gender_Female @ForecastTestType_NotRecommendedSeriesComplete
Scenario: [CTC 2013-0690] - # 4 Pediarix at 4 yrs
	# added on 2013-01-01
	Given a female Patient born on 2006-05-06
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2006-09-09        | PEDIARIX     | 110 | SKB |                   | Valid             |
		| 2007-03-03        | PEDIARIX     | 110 | SKB |                   | Valid             |
	When the Patient is assessed for POL on 2010-05-06
	Then the assessment should not recommend a dose for POL
	And the series status should be Complete


@SeriesStatus_NotComplete @VaccineGroup_POL @Gender_Female @ForecastTestType_RecommendedBasedOnMinimumIntervalFromInValidDose
Scenario: [CTC 2013-0691] - # 5 Pediarix at 4 yrs -5 days
	# added on 2013-01-01
	Given a female Patient born on 2006-07-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2006-09-01        | PEDIARIX     | 110 | SKB |                   | Valid             |
		| 2006-10-01        | PEDIARIX     | 110 | SKB |                   | Valid             |
	When the Patient is assessed for POL on 2010-06-26
	Then the assessment should recommend a dose for POL on 2010-12-26
	And the series status should be Not Complete


@SeriesStatus_Complete @VaccineGroup_POL @Gender_Female @ForecastTestType_NotRecommendedSeriesComplete
Scenario: [CTC 2013-0692] - # 5 Pediarix at 4 yrs -4 days
	# added on 2013-01-01
	Given a female Patient born on 2006-07-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2006-09-01        | PEDIARIX     | 110 | SKB |                   | Valid             |
		| 2006-10-01        | PEDIARIX     | 110 | SKB |                   | Valid             |
	When the Patient is assessed for POL on 2010-06-27
	Then the assessment should not recommend a dose for POL
	And the series status should be Complete


@SeriesStatus_Complete @VaccineGroup_POL @Gender_Female @ForecastTestType_NotRecommendedSeriesComplete
Scenario: [CTC 2013-0693] - # 5 Pediarix at 6 yrs 11.5 mo
	# added on 2013-01-01
	Given a female Patient born on 2005-04-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2005-06-01        | PEDIARIX     | 110 | SKB |                   | Valid             |
		| 2005-08-01        | PEDIARIX     | 110 | SKB |                   | Valid             |
	When the Patient is assessed for POL on 2012-03-15
	Then the assessment should not recommend a dose for POL
	And the series status should be Complete


@SeriesStatus_Complete @VaccineGroup_POL @Gender_Female @ForecastTestType_NotRecommendedSeriesComplete
Scenario: [CTC 2013-0694] - # 5 Pediarix at 7 yrs.  Off label
	# added on 2013-01-01
	Given a female Patient born on 2005-05-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2005-08-01        | PEDIARIX     | 110 | SKB |                   | Valid             |
		| 2005-11-01        | PEDIARIX     | 110 | SKB |                   | Valid             |
	When the Patient is assessed for POL on 2012-05-01
	Then the assessment should not recommend a dose for POL
	And the series status should be Complete


@SeriesStatus_NotComplete @VaccineGroup_POL @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0695] - Invalid age dose 1 as first of others
	# added on 2013-01-01
	Given a female Patient born on 2011-08-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2011-09-06        | PEDIARIX     | 110 | SKB | Age: Too Young    | Not Valid         |
		| 2011-11-01        | PEDIARIX     | 110 | SKB |                   | Valid             |
	When the Patient is assessed for POL on 2011-11-01
	Then the assessment should recommend a dose for POL on 2011-12-01
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_POL @Gender_Female @ForecastTestType_RecommendedBasedOnMinimumIntervalFromPreviousDoseCatchUp
Scenario: [CTC 2013-0696] - Invalid age dose 2 in midst of others
	# updated on 2013-06-26 in version 1.1 - Typo on Past Due Date by one year.
	Given a female Patient born on 2010-10-18
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2010-11-25        | PEDIARIX     | 110 | SKB |                   | Valid             |
		| 2010-12-21        | PEDIARIX     | 110 | SKB | Age: Too Young    | Not Valid         |
	When the Patient is assessed for POL on 2011-04-18
	Then the assessment should recommend a dose for POL on 2011-05-16
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_POL @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0697] - invalid age dose 3 in midst of others
	# added on 2013-01-01
	Given a female Patient born on 2010-06-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2010-07-15        | PEDIARIX     | 110 | SKB |                   | Valid             |
		| 2010-08-10        | PEDIARIX     | 110 | SKB |                   | Valid             |
	When the Patient is assessed for POL on 2011-06-01
	Then the assessment should recommend a dose for POL on 2014-06-01
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_POL @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0698] - # 1 Pediarix at 6 wks-4 days
	# added on 2013-01-01
	Given a female Patient born on 2006-04-04
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2006-05-12        | PEDIARIX     | 110 | SKB |                   | Valid             |
	When the Patient is assessed for POL on 2006-05-12
	Then the assessment should recommend a dose for POL on 2006-08-04
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_POL @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0699] - dose 1 to 2 Pediarix, interval 28-5 days
	# added on 2013-01-01
	Given a female Patient born on 2010-11-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason   | Evaluation Status |
		| 2011-01-03        | PEDIARIX     | 110 | SKB |                     | Valid             |
		| 2011-01-26        | PEDIARIX     | 110 | SKB | Interval: Too Short | Not Valid         |
	When the Patient is assessed for POL on 2011-01-26
	Then the assessment should recommend a dose for POL on 2011-03-01
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_POL @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0700] - dose 1 to 2 Pediarix, interval 28-4 days
	# updated on 2013-06-26 in version 1.1 - Typo on Past Due Date by one year.
	Given a female Patient born on 2006-02-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2006-04-01        | PEDIARIX     | 110 | SKB |                   | Valid             |
		| 2006-04-25        | PEDIARIX     | 110 | SKB |                   | Valid             |
	When the Patient is assessed for POL on 2006-04-25
	Then the assessment should recommend a dose for POL on 2006-08-01
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_POL @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0701] - dose 2 to 3 Pediarix, interval 28-5 days
	# updated on 2013-06-26 in version 1.1 - Typo on Past Due Date by one year.
	Given a female Patient born on 2011-04-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2011-06-01        | PEDIARIX     | 110 | SKB |                   | Valid             |
		| 2011-08-01        | PEDIARIX     | 110 | SKB |                   | Valid             |
	When the Patient is assessed for POL on 2011-08-24
	Then the assessment should recommend a dose for POL on 2011-10-01
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_POL @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0702] - dose 2 to 3 Pediarix, interval 28-4 days
	# added on 2013-01-01
	Given a female Patient born on 2005-12-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2006-02-01        | PEDIARIX     | 110 | SKB |                   | Valid             |
		| 2006-04-01        | PEDIARIX     | 110 | SKB |                   | Valid             |
	When the Patient is assessed for POL on 2006-04-25
	Then the assessment should recommend a dose for POL on 2009-12-01
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_POL @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0704] - dose 3 to 4 Pediarix, interval 6m-4 days
	# added on 2013-01-01
	Given a female Patient born on 2009-08-09
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2009-10-09        | PEDIARIX     | 110 | SKB |                   | Valid             |
		| 2009-12-09        | PEDIARIX     | 110 | SKB |                   | Valid             |
	When the Patient is assessed for POL on 2010-10-05
	Then the assessment should recommend a dose for POL on 2013-08-09
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_POL @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0707] - invalid dose 1-2 interval in midst of others
	# updated on 2013-06-26 in version 1.1 - Typo on Past Due Date by one year.
	Given a female Patient born on 2009-02-11
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason   | Evaluation Status |
		| 2009-04-11        | PEDIARIX     | 110 | SKB |                     | Valid             |
		| 2009-04-30        | PEDIARIX     | 110 | SKB | Interval: Too Short | Not Valid         |
	When the Patient is assessed for POL on 2009-06-11
	Then the assessment should recommend a dose for POL on 2009-08-11
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_POL @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0708] - invalid dose 2-3 interval in midst of others
	# added on 2013-01-01
	Given a female Patient born on 2010-02-02
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2010-04-02        | PEDIARIX     | 110 | SKB |                   | Valid             |
		| 2010-06-02        | PEDIARIX     | 110 | SKB |                   | Valid             |
	When the Patient is assessed for POL on 2011-02-02
	Then the assessment should recommend a dose for POL on 2014-02-02
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_POL @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0709] - # 1 Pediarix at 6 wks
	# added on 2013-01-01
	Given a female Patient born on 2011-11-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2011-12-13        | PEDIARIX     | 110 | SKB |                   | Valid             |
	When the Patient is assessed for POL on 2011-12-13
	Then the assessment should recommend a dose for POL on 2012-03-01
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_POL @Gender_Female @ForecastTestType_RecommendedBasedOnMinimumIntervalFromPreviousDoseCatchUp
Scenario: [CTC 2013-0712] - # 1 Pediarix at 6 yrs 11.5 mo
	# added on 2013-01-01
	Given a female Patient born on 2005-04-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2012-03-16        | PEDIARIX     | 110 | SKB |                   | Valid             |
	When the Patient is assessed for POL on 2012-03-16
	Then the assessment should recommend a dose for POL on 2012-04-13
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_POL @Gender_Female @ForecastTestType_RecommendedBasedOnMinimumIntervalFromPreviousDoseCatchUp
Scenario: [CTC 2013-0713] - # 1 Pediarix at 7 yrs
	# added on 2013-01-01
	Given a female Patient born on 2005-02-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2012-02-01        | PEDIARIX     | 110 | SKB |                   | Valid             |
	When the Patient is assessed for POL on 2012-02-01
	Then the assessment should recommend a dose for POL on 2012-02-29
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_POL @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0714] - # 2 Pediarix at 10 wks-5 days
	# added on 2013-01-01
	Given a female Patient born on 2011-10-10
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2011-11-17        | PEDIARIX     | 110 | SKB |                   | Valid             |
		| 2011-12-14        | PEDIARIX     | 110 | SKB | Age: Too Young    | Not Valid         |
	When the Patient is assessed for POL on 2011-12-14
	Then the assessment should recommend a dose for POL on 2012-02-10
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_POL @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0715] - # 2 Pediarix at 10 wks-4 days
	# updated on 2013-06-26 in version 1.1 - Typo on Past Due Date by one year.
	Given a female Patient born on 2011-02-26
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2011-04-07        | PEDIARIX     | 110 | SKB |                   | Valid             |
		| 2011-05-03        | PEDIARIX     | 110 | SKB |                   | Valid             |
	When the Patient is assessed for POL on 2011-05-03
	Then the assessment should recommend a dose for POL on 2011-08-26
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_POL @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0716] - # 2 Pediarix at 10 wks
	# updated on 2013-06-26 in version 1.1 - Typo on Past Due Date by one year.
	Given a female Patient born on 2011-02-26
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2011-04-07        | PEDIARIX     | 110 | SKB |                   | Valid             |
		| 2011-05-07        | PEDIARIX     | 110 | SKB |                   | Valid             |
	When the Patient is assessed for POL on 2011-05-07
	Then the assessment should recommend a dose for POL on 2011-08-26
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_POL @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0717] - Newborn
	# added on 2013-01-01
	Given a female Patient born on 2012-02-01
	And no immunizations have been given
	When the Patient is assessed for POL on 2012-02-01
	Then the assessment should recommend a dose for POL on 2012-04-01
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_POL @Gender_Female @ForecastTestType_RecommendedBasedOnMinimumIntervalFromPreviousDoseCatchUp
Scenario: [CTC 2013-0718] - # 2 Pentacel at 6 yrs 11.5 mo. Off label but counts
	# updated on 2013-06-26 in version 1.1 - Polio should continue to be recommended in 4 weeks.  The dose should not be skipped until 4 years AND 6 months from previous dose.
	Given a female Patient born on 2005-01-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2007-09-22        | PENTACEL     | 120 | PMC |                   | Valid             |
		| 2011-12-15        | PENTACEL     | 120 | PMC |                   | Valid             |
	When the Patient is assessed for POL on 2011-12-15
	Then the assessment should recommend a dose for POL on 2012-01-12
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_POL @Gender_Female @ForecastTestType_RecommendedBasedOnMinimumIntervalFromPreviousDoseCatchUp
Scenario: [CTC 2013-0719] - Pentacel at 7 yrs; # 1 at age < 12 mo.   Off label use
	# updated on 2013-06-26 in version 1.1 - Polio should continue to be recommended in 4 weeks.  The dose should not be skipped until 4 years AND 6 months from previous dose.
	Given a female Patient born on 2003-09-16
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2004-02-25        | IPOL         | 10  | PMC |                   | Valid             |
		| 2010-09-16        | PENTACEL     | 120 | PMC |                   | Valid             |
	When the Patient is assessed for POL on 2010-09-16
	Then the assessment should recommend a dose for POL on 2010-10-14
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_POL @Gender_Female @ForecastTestType_RecommendedBasedOnMinimumIntervalFromPreviousDoseCatchUp
Scenario: [CTC 2013-0720] - # 2 Pentacel at 7 yrs; # 1 at age ≥ 12 mo
	# updated on 2013-08-07 in version 1.2 - Original forecast were suggesting skipping dose 3 to the final dose at 6 months.  EIPB guidance and harmonized schedule does not allow skipping until 6 months has passed.  The forecast should be in 4 weeks per the dose 3 interval.
	Given a female Patient born on 2004-09-16
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2005-11-19        | IPOL         | 10  | PMC |                   | Valid             |
		| 2011-09-16        | PENTACEL     | 120 | PMC |                   | Valid             |
	When the Patient is assessed for POL on 2011-09-16
	Then the assessment should recommend a dose for POL on 2011-10-14
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_POL @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0721] - # 3 Pentacel at 14 wks-5 days
	# updated on 2013-06-26 in version 1.1 - Typo on Past Due Date by one year.
	Given a female Patient born on 2010-06-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2010-07-09        | PENTACEL     | 120 | PMC |                   | Valid             |
		| 2010-08-06        | PENTACEL     | 120 | PMC |                   | Valid             |
	When the Patient is assessed for POL on 2010-09-02
	Then the assessment should recommend a dose for POL on 2010-12-01
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_POL @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0722] - # 3 Pentacel at 14 wks-4 days
	# added on 2013-01-01
	Given a female Patient born on 2010-06-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2010-07-09        | PENTACEL     | 120 | PMC |                   | Valid             |
		| 2010-08-06        | PENTACEL     | 120 | PMC |                   | Valid             |
	When the Patient is assessed for POL on 2010-09-03
	Then the assessment should recommend a dose for POL on 2014-06-01
	And the series status should be Not Complete


@SeriesStatus_Complete @VaccineGroup_POL @Gender_Female @ForecastTestType_NotRecommendedSeriesComplete
Scenario: [CTC 2013-0723] - # 3 Pentacel at 6 yrs 11.5 mo
	# added on 2013-01-01
	Given a female Patient born on 2005-01-15
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2005-03-15        | IPOL         | 10  | PMC |                   | Valid             |
		| 2005-05-15        | IPOL         | 10  | PMC |                   | Valid             |
	When the Patient is assessed for POL on 2011-12-30
	Then the assessment should not recommend a dose for POL
	And the series status should be Complete


@SeriesStatus_NotComplete @VaccineGroup_POL @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0724] - # 4 Pentacel at 1 yr -5 days
	# added on 2013-01-01
	Given a female Patient born on 2010-04-04
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2010-06-04        | PENTACEL     | 120 | PMC |                   | Valid             |
		| 2010-08-04        | PENTACEL     | 120 | PMC |                   | Valid             |
	When the Patient is assessed for POL on 2011-03-30
	Then the assessment should recommend a dose for POL on 2014-04-04
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_POL @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0725] - # 4 Pentacel at 1 yr -4 days
	# added on 2013-01-01
	Given a female Patient born on 2010-04-04
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2010-06-04        | PENTACEL     | 120 | PMC |                   | Valid             |
		| 2010-08-04        | PENTACEL     | 120 | PMC |                   | Valid             |
	When the Patient is assessed for POL on 2011-03-31
	Then the assessment should recommend a dose for POL on 2014-04-04
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_POL @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0726] - # 4 Pentacel ≥ age 12 mo
	# added on 2013-01-01
	Given a female Patient born on 2010-04-04
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2010-06-04        | PENTACEL     | 120 | PMC |                   | Valid             |
		| 2010-08-04        | PENTACEL     | 120 | PMC |                   | Valid             |
	When the Patient is assessed for POL on 2011-04-04
	Then the assessment should recommend a dose for POL on 2014-04-04
	And the series status should be Not Complete


@SeriesStatus_Complete @VaccineGroup_POL @Gender_Female @ForecastTestType_NotRecommendedSeriesComplete
Scenario: [CTC 2013-0727] - # 4 Pentacel at 4 yrs
	# added on 2013-01-01
	Given a female Patient born on 2006-05-06
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2006-09-15        | PENTACEL     | 120 | PMC |                   | Valid             |
		| 2007-04-28        | PENTACEL     | 120 | PMC |                   | Valid             |
	When the Patient is assessed for POL on 2010-05-06
	Then the assessment should not recommend a dose for POL
	And the series status should be Complete


@SeriesStatus_NotComplete @VaccineGroup_POL @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0728] - # 1 Pentacel at 6 wks-5 days
	# added on 2013-01-01
	Given a female Patient born on 2010-05-06
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2010-06-12        | PENTACEL     | 120 | PMC | Age: Too Young    | Not Valid         |
	When the Patient is assessed for POL on 2010-06-12
	Then the assessment should recommend a dose for POL on 2010-07-06
	And the series status should be Not Complete


@SeriesStatus_Complete @VaccineGroup_POL @Gender_Female @ForecastTestType_NotRecommendedSeriesComplete
Scenario: [CTC 2013-0729] - # 5 Pentacel at ≥ 4 yrs
	# added on 2013-01-01
	Given a female Patient born on 2008-02-08
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2009-01-08        | PENTACEL     | 120 | PMC |                   | Valid             |
		| 2009-04-08        | PENTACEL     | 120 | PMC |                   | Valid             |
	When the Patient is assessed for POL on 2012-03-01
	Then the assessment should not recommend a dose for POL
	And the series status should be Complete


@SeriesStatus_Complete @VaccineGroup_POL @Gender_Female @ForecastTestType_NotRecommendedSeriesComplete
Scenario: [CTC 2013-0730] - # 4 Pentacel at 5 yrs=off label
	# added on 2013-01-01
	Given a female Patient born on 2007-02-08
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2007-06-08        | PENTACEL     | 120 | PMC |                   | Valid             |
		| 2007-12-05        | PENTACEL     | 120 | PMC |                   | Valid             |
	When the Patient is assessed for POL on 2012-02-10
	Then the assessment should not recommend a dose for POL
	And the series status should be Complete


@SeriesStatus_NotComplete @VaccineGroup_POL @Gender_Female @ForecastTestType_RecommendedBasedOnMinimumIntervalFromPreviousDoseCatchUp
Scenario: [CTC 2013-0731] - invalid age dose 1 as first of others
	# updated on 2013-06-26 in version 1.1 - Typo on Past Due Date by one year.
	Given a female Patient born on 2011-08-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2011-09-05        | PENTACEL     | 120 | PMC | Age: Too Young    | Not Valid         |
		| 2011-12-01        | PENTACEL     | 120 | PMC |                   | Valid             |
	When the Patient is assessed for POL on 2012-02-01
	Then the assessment should recommend a dose for POL on 2012-02-29
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_POL @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0732] - invalid age dose 2 in midst of others
	# added on 2013-01-01
	Given a female Patient born on 2010-10-18
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2010-11-25        | PENTACEL     | 120 | PMC |                   | Valid             |
		| 2010-12-22        | PENTACEL     | 120 | PMC | Age: Too Young    | Not Valid         |
	When the Patient is assessed for POL on 2011-10-20
	Then the assessment should recommend a dose for POL on 2014-10-18
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_POL @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0733] - invalid age dose 3 in midst of others
	# added on 2013-01-01
	Given a female Patient born on 2010-06-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2010-07-09        | PENTACEL     | 120 | PMC |                   | Valid             |
		| 2010-08-06        | PENTACEL     | 120 | PMC |                   | Valid             |
	When the Patient is assessed for POL on 2011-07-07
	Then the assessment should recommend a dose for POL on 2014-06-01
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_POL @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0734] - dose 1 to 2 Pentacel, interval 28-5 days
	# added on 2013-01-01
	Given a female Patient born on 2009-11-09
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason   | Evaluation Status |
		| 2010-01-03        | PENTACEL     | 120 | PMC |                     | Valid             |
		| 2010-01-26        | PENTACEL     | 120 | PMC | Interval: Too Short | Not Valid         |
	When the Patient is assessed for POL on 2010-01-26
	Then the assessment should recommend a dose for POL on 2010-03-09
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_POL @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0735] - dose 1 to 2 Pentacel, interval 28-4 days
	# updated on 2013-06-26 in version 1.1 - Typo on Past Due Date by one year.
	Given a female Patient born on 2009-11-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2010-01-03        | PENTACEL     | 120 | PMC |                   | Valid             |
		| 2010-01-27        | PENTACEL     | 120 | PMC |                   | Valid             |
	When the Patient is assessed for POL on 2010-01-27
	Then the assessment should recommend a dose for POL on 2010-05-01
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_POL @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0736] - dose 2 to 3 Pentacel, interval 28-5 days
	# updated on 2013-06-26 in version 1.1 - Typo on Past Due Date by one year.
	Given a female Patient born on 2008-04-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2008-06-01        | PENTACEL     | 120 | PMC |                   | Valid             |
		| 2008-08-01        | PENTACEL     | 120 | PMC |                   | Valid             |
	When the Patient is assessed for POL on 2008-08-24
	Then the assessment should recommend a dose for POL on 2008-10-01
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_POL @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0737] - dose 2 to 3 Pentacel, interval 28-4 days
	# added on 2013-01-01
	Given a female Patient born on 2008-04-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2008-06-01        | PENTACEL     | 120 | PMC |                   | Valid             |
		| 2008-08-01        | PENTACEL     | 120 | PMC |                   | Valid             |
	When the Patient is assessed for POL on 2008-08-25
	Then the assessment should recommend a dose for POL on 2012-04-01
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_POL @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0739] - # 1 Pentacel at 6 wks-4 days
	# added on 2013-01-01
	Given a female Patient born on 2008-04-04
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2008-05-12        | PENTACEL     | 120 | PMC |                   | Valid             |
	When the Patient is assessed for POL on 2008-05-12
	Then the assessment should recommend a dose for POL on 2008-08-04
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_POL @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0740] - dose 3 to 4 Pentacel, interval 6m-4 days
	# added on 2013-01-01
	Given a female Patient born on 2009-08-09
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2009-10-09        | PENTACEL     | 120 | PMC |                   | Valid             |
		| 2010-02-09        | PENTACEL     | 120 | PMC |                   | Valid             |
	When the Patient is assessed for POL on 2010-10-05
	Then the assessment should recommend a dose for POL on 2013-08-09
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_POL @Gender_Female @ForecastTestType_RecommendedBasedOnMinimumIntervalFromPreviousDoseCatchUp
Scenario: [CTC 2013-0743] - invalid dose 1-2 interval in midst of others
	# updated on 2013-06-26 in version 1.1 - Typo on Past Due Date by one year.
	Given a female Patient born on 2009-02-11
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason   | Evaluation Status |
		| 2009-04-11        | PENTACEL     | 120 | PMC |                     | Valid             |
		| 2009-05-04        | PENTACEL     | 120 | PMC | Interval: Too Short | Not Valid         |
	When the Patient is assessed for POL on 2009-08-01
	Then the assessment should recommend a dose for POL on 2009-08-29
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_POL @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0744] - invalid dose 2-3 interval in midst of others
	# added on 2013-01-01
	Given a female Patient born on 2010-02-02
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2010-04-02        | PENTACEL     | 120 | PMC |                   | Valid             |
		| 2010-06-02        | PENTACEL     | 120 | PMC |                   | Valid             |
	When the Patient is assessed for POL on 2011-02-05
	Then the assessment should recommend a dose for POL on 2014-02-02
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_POL @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0747] - # 1 Pentacel at 6 wks
	# added on 2013-01-01
	Given a female Patient born on 2008-04-04
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2008-05-16        | PENTACEL     | 120 | PMC |                   | Valid             |
	When the Patient is assessed for POL on 2008-05-16
	Then the assessment should recommend a dose for POL on 2008-08-04
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_POL @Gender_Female @ForecastTestType_RecommendedBasedOnMinimumIntervalFromPreviousDoseCatchUp
Scenario: [CTC 2013-0748] - # 1 Pentacel at 6 yrs 11.5 mo
	# added on 2013-01-01
	Given a female Patient born on 2005-01-15
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2012-01-02        | PENTACEL     | 120 | PMC |                   | Valid             |
	When the Patient is assessed for POL on 2012-01-02
	Then the assessment should recommend a dose for POL on 2012-01-30
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_POL @Gender_Female @ForecastTestType_RecommendedBasedOnMinimumIntervalFromPreviousDoseCatchUp
Scenario: [CTC 2013-0749] - # 1 Pentacel at 7 yrs.  Off label
	# added on 2013-01-01
	Given a female Patient born on 2005-02-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2012-02-01        | PENTACEL     | 120 | PMC |                   | Valid             |
	When the Patient is assessed for POL on 2012-02-01
	Then the assessment should recommend a dose for POL on 2012-02-29
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_POL @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0750] - # 2 Pentacel at 10 wks-5 days
	# added on 2013-01-01
	Given a female Patient born on 2010-10-10
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2010-11-17        | PENTACEL     | 120 | PMC |                   | Valid             |
		| 2010-12-14        | PENTACEL     | 120 | PMC | Age: Too Young    | Not Valid         |
	When the Patient is assessed for POL on 2010-12-14
	Then the assessment should recommend a dose for POL on 2011-02-10
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_POL @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0751] - # 2 Pentacel at 10 wks-4 days
	# updated on 2013-06-26 in version 1.1 - Typo on Past Due Date by one year.
	Given a female Patient born on 2010-10-10
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2010-11-17        | PENTACEL     | 120 | PMC |                   | Valid             |
		| 2010-12-15        | PENTACEL     | 120 | PMC |                   | Valid             |
	When the Patient is assessed for POL on 2010-12-15
	Then the assessment should recommend a dose for POL on 2011-04-10
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_POL @Gender_Female @ForecastTestType_RecommendedBasedOnMinimumIntervalFromPreviousDoseCatchUp
Scenario: [CTC 2013-0752] - # 2 Pentacel at 6 yrs .  Off label
	# updated on 2013-06-26 in version 1.1 - Polio should continue to be recommended in 4 weeks.  The dose should not be skipped until 4 years AND 6 months from previous dose.
	Given a female Patient born on 2005-01-15
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2006-01-15        | PENTACEL     | 120 | PMC |                   | Valid             |
		| 2011-01-15        | PENTACEL     | 120 | PMC |                   | Valid             |
	When the Patient is assessed for POL on 2011-01-15
	Then the assessment should recommend a dose for POL on 2011-02-12
	And the series status should be Not Complete

