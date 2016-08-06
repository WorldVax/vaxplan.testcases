Feature: HepA CDSi test cases

@SeriesStatus_NotComplete @VaccineGroup_HepA @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0185] - Infant forecasting
	# added on 2013-01-01
	Given a female Patient born on 2010-07-10
	And no immunizations have been given
	When the Patient is assessed for HepA on 2010-07-10
	Then the assessment should recommend a dose for HepA on 2011-07-10
	And the series status should be Not Complete


@SeriesStatus_Complete @VaccineGroup_HepA @Gender_Female @ForecastTestType_NotRecommendedSeriesComplete
Scenario: [CTC 2013-0186] - Dose 1 to dose 2 interval 6 months.  Series complete
	# added on 2013-01-01
	Given a female Patient born on 2009-08-09
	And the following immunizations have been given
		| Date Administered | Vaccine Name      | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2010-10-09        | Hep A Unspecified | 85  |     |                   | Valid             |
		| 2011-04-09        | Hep A Unspecified | 85  |     |                   | Valid             |
	When the Patient is assessed for HepA on 2011-04-09
	Then the assessment should not recommend a dose for HepA
	And the series status should be Complete


@SeriesStatus_Contraindicated @VaccineGroup_HepA @Gender_Female @ForecastTestType_NotRecommendedContraindication
Scenario: [CTC 2013-0187] - Anaphylaxis to previous dose of Hep A.  No forecast
	# added on 2013-01-01
	Given a female Patient born on 2003-03-03
	And the following medical history is reported
	| Medical History Text | Medical History Code | Medical History System |
	|                      | VXC20                | CDCPHINVS              |
	And the following immunizations have been given
		| Date Administered | Vaccine Name      | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2009-03-04        | Hep A Unspecified | 85  |     |                   | Valid             |
	When the Patient is assessed for HepA on 2009-03-04
	Then the assessment should not recommend a dose for HepA
	And the series status should be Contraindicated


@SeriesStatus_NotComplete @VaccineGroup_HepA @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0188] - Adult dose mistakenly given to a child.  Counts as valid
	# updated on 2013-07-16 in version 1.1 - Past Due Date was previously calculated based on an interval, but should have been calculated based on age of 24 months + 4 weeks - 1 day
	Given a female Patient born on 2011-02-02
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2012-02-02        | HAVRIX-ADULT | 52  | SKB |                   | Valid             |
	When the Patient is assessed for HepA on 2012-02-02
	Then the assessment should recommend a dose for HepA on 2012-08-02
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_HepA @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0189] - Dose # 1 at age 12 months-5 days
	# added on 2013-01-01
	Given a female Patient born on 2005-12-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name      | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2006-11-26        | Hep A Unspecified | 85  |     | Age: Too Young    | Not Valid         |
	When the Patient is assessed for HepA on 2006-11-26
	Then the assessment should recommend a dose for HepA on 2006-12-01
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_HepA @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0190] - Dose # 1 at age 12 months-4 days
	# updated on 2013-07-16 in version 1.1 - Past Due Date was previously calculated based on an interval, but should have been calculated based on age of 24 months + 4 weeks - 1 day
	Given a female Patient born on 2010-06-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name      | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2011-05-28        | Hep A Unspecified | 85  |     |                   | Valid             |
	When the Patient is assessed for HepA on 2011-05-28
	Then the assessment should recommend a dose for HepA on 2011-12-01
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_HepA @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0191] - Dose # 1 at age 12 months
	# updated on 2013-07-16 in version 1.1 - Past Due Date was previously calculated based on an interval, but should have been calculated based on age of 24 months + 4 weeks - 1 day
	Given a female Patient born on 2010-04-07
	And the following immunizations have been given
		| Date Administered | Vaccine Name      | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2011-04-07        | Hep A Unspecified | 85  |     |                   | Valid             |
	When the Patient is assessed for HepA on 2011-04-07
	Then the assessment should recommend a dose for HepA on 2011-10-07
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_HepA @Gender_Female @ForecastTestType_RecommendedBasedOnMinimumIntervalFromInvalidDose
Scenario: [CTC 2013-0192] - Dose 1 to dose 2 interval 6 mo-5 days=invalid
	# updated on 2013-07-16 in version 1.1 - Past Due Date was previously calculated based on an interval, but should have been calculated based on age of 24 months + 4 weeks - 1 day
	Given a female Patient born on 2008-11-10
	And the following immunizations have been given
		| Date Administered | Vaccine Name      | CVX | MVX | Evaluation Reason   | Evaluation Status |
		| 2009-11-10        | Hep A Unspecified | 85  |     |                     | Valid             |
		| 2010-05-05        | Hep A Unspecified | 85  |     | Interval: Too Short | Not Valid         |
	When the Patient is assessed for HepA on 2010-05-05
	Then the assessment should recommend a dose for HepA on 2010-11-05
	And the series status should be Not Complete


@SeriesStatus_Complete @VaccineGroup_HepA @Gender_Female @ForecastTestType_NotRecommendedSeriesComplete
Scenario: [CTC 2013-0193] - Dose 1 to Dose 2 interval 6 mo-4 days.  Series complete
	# added on 2013-01-01
	Given a female Patient born on 2001-04-04
	And the following immunizations have been given
		| Date Administered | Vaccine Name      | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2009-04-04        | Hep A Unspecified | 85  |     |                   | Valid             |
		| 2009-09-30        | Hep A Unspecified | 85  |     |                   | Valid             |
	When the Patient is assessed for HepA on 2009-09-30
	Then the assessment should not recommend a dose for HepA
	And the series status should be Complete


@SeriesStatus_Complete @VaccineGroup_HepA @Gender_Female @ForecastTestType_NotRecommendedSeriesComplete
Scenario: [CTC 2013-0194] - Dose # 2 at 18 months=series complete
	# added on 2013-01-01
	Given a female Patient born on 2009-08-09
	And the following immunizations have been given
		| Date Administered | Vaccine Name      | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2010-08-09        | Hep A Unspecified | 85  |     |                   | Valid             |
		| 2011-02-09        | Hep A Unspecified | 85  |     |                   | Valid             |
	When the Patient is assessed for HepA on 2011-02-09
	Then the assessment should not recommend a dose for HepA
	And the series status should be Complete


@SeriesStatus_NotComplete @VaccineGroup_HepA @Gender_Female @ForecastTestType_RecommendedBasedOnMinimumIntervalFromInvalidDose
Scenario: [CTC 2013-0196] - Dose 1 to dose 2 interval 6 mo-5 days
	# updated on 2013-07-16 in version 1.1 - Child is lapse enough that the Past Due Date should have been aligned with the earliest and recommended.
	Given a female Patient born on 2009-08-09
	And the following immunizations have been given
		| Date Administered | Vaccine Name      | CVX | MVX | Evaluation Reason   | Evaluation Status |
		| 2010-10-09        | Hep A Unspecified | 85  |     |                     | Valid             |
		| 2011-04-04        | Hep A Unspecified | 85  |     | Interval: Too Short | Not Valid         |
	When the Patient is assessed for HepA on 2011-04-04
	Then the assessment should recommend a dose for HepA on 2011-10-04
	And the series status should be Not Complete


@SeriesStatus_Complete @VaccineGroup_HepA @Gender_Female @ForecastTestType_NotRecommendedSeriesComplete
Scenario: [CTC 2013-0197] - Dose 1 to dose 2 interval 6 months-4 days.  Series complete
	# added on 2013-01-01
	Given a female Patient born on 2009-08-09
	And the following immunizations have been given
		| Date Administered | Vaccine Name      | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2010-10-09        | Hep A Unspecified | 85  |     |                   | Valid             |
		| 2011-04-05        | Hep A Unspecified | 85  |     |                   | Valid             |
	When the Patient is assessed for HepA on 2011-04-05
	Then the assessment should not recommend a dose for HepA
	And the series status should be Complete

