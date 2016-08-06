Feature: DTaP CDSi test cases

@SeriesStatus_NotComplete @VaccineGroup_DTaP @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0001] - Newborn Testing
	# added on 2013-01-01
	Given a female Patient born on 2012-02-01
	And no immunizations have been given
	When the Patient is assessed for DTaP on 2012-02-01
	Then the assessment should recommend a dose for DTaP on 2012-04-01
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_DTaP @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0002] - DTaP #2 at age 10 weeks-5 days
	# added on 2013-01-01
	Given a female Patient born on 2011-02-26
	And the following immunizations have been given
		| Date Administered | Vaccine Name     | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2011-04-06        | DTaP Unspecified | 107 |     |                   | Valid             |
		| 2011-05-02        | DTaP Unspecified | 107 |     | Age: Too Young    | Not Valid         |
	When the Patient is assessed for DTaP on 2011-05-02
	Then the assessment should recommend a dose for DTaP on 2011-06-26
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_DTaP @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0003] - DTaP #2 at 10 wks-4 days
	# added on 2013-01-01
	Given a female Patient born on 2011-02-26
	And the following immunizations have been given
		| Date Administered | Vaccine Name     | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2011-04-09        | DTaP Unspecified | 107 |     |                   | Valid             |
		| 2011-05-03        | DTaP Unspecified | 107 |     |                   | Valid             |
	When the Patient is assessed for DTaP on 2011-05-03
	Then the assessment should recommend a dose for DTaP on 2011-08-26
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_DTaP @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0004] - DTaP # 2 at age 10 weeks
	# added on 2013-01-01
	Given a female Patient born on 2011-02-26
	And the following immunizations have been given
		| Date Administered | Vaccine Name     | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2011-04-09        | DTaP Unspecified | 107 |     |                   | Valid             |
		| 2011-05-07        | DTaP Unspecified | 107 |     |                   | Valid             |
	When the Patient is assessed for DTaP on 2011-05-07
	Then the assessment should recommend a dose for DTaP on 2011-08-26
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_DTaP @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0005] - DTaP # 2 at age 4 months
	# added on 2013-01-01
	Given a female Patient born on 2011-08-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name     | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2011-10-01        | DTaP Unspecified | 107 |     |                   | Valid             |
		| 2011-12-01        | DTaP Unspecified | 107 |     |                   | Valid             |
	When the Patient is assessed for DTaP on 2011-12-01
	Then the assessment should recommend a dose for DTaP on 2012-02-01
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_DTaP @Gender_Female @ForecastTestType_RecommendedBasedOnMinimumIntervalFromPreviousDoseCatchUp
Scenario: [CTC 2013-0007] - # 2 (Tdap) to child age 7.  DTaP # 1 given before age 12 months.  Forecast # 3 (Td) in 4 weeks
	# updated on 2013-07-09 in version 1.1 - Past Due Date was missing and child is in catch-up.  Past Due Date added to align with Recommended Date.
	Given a female Patient born on 2003-09-16
	And the following immunizations have been given
		| Date Administered | Vaccine Name     | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2003-11-16        | DTaP Unspecified | 107 |     |                   | Valid             |
		| 2010-09-16        | BOOSTRIX         | 115 | SKB |                   | Valid             |
	When the Patient is assessed for DTaP on 2010-09-16
	Then the assessment should recommend a dose for DTaP on 2010-10-14
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_DTaP @Gender_Female @ForecastTestType_RecommendedBasedOnMinimumIntervalFromPreviousDoseCatchUp
Scenario: [CTC 2013-0008] - # 2 (Tdap) to child age 7.  DTaP # 1 at ≥ 12 months.  Forecast dose 3 for 6 months
	# updated on 2013-07-09 in version 1.1 - Past Due Date was missing and child is in catch-up.  Past Due Date added to align with Recommended Date.
	Given a female Patient born on 2004-09-16
	And the following immunizations have been given
		| Date Administered | Vaccine Name     | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2005-09-16        | DTaP Unspecified | 107 |     |                   | Valid             |
		| 2011-09-16        | BOOSTRIX         | 115 | SKB |                   | Valid             |
	When the Patient is assessed for DTaP on 2011-09-16
	Then the assessment should recommend a dose for DTaP on 2012-03-16
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_DTaP @Gender_Female @ForecastTestType_RecommendedBasedOnMinimumIntervalFromPreviousDoseCatchUp
Scenario: [CTC 2013-0010] - # 1 (Td) to # 2 (Tdap) interval 28-4 days in child age > 7 years.  Forecast # 3 in six months
	# updated on 2013-07-09 in version 1.1 - Past Due Date was missing and child is in catch-up.  Past Due Date added to align with Recommended Date.
	Given a female Patient born on 1998-07-07
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2006-10-10        | TD(GENERIC)  | 09  | MBL |                   | Valid             |
		| 2006-11-03        | BOOSTRIX     | 115 | SKB |                   | Valid             |
	When the Patient is assessed for DTaP on 2006-11-03
	Then the assessment should recommend a dose for DTaP on 2007-05-03
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_DTaP @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0011] - #3 at age 14 weeks-5 days
	# added on 2013-01-01
	Given a female Patient born on 2006-01-06
	And the following immunizations have been given
		| Date Administered | Vaccine Name     | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2006-02-17        | DTaP Unspecified | 107 |     |                   | Valid             |
		| 2006-03-17        | DTaP Unspecified | 107 |     |                   | Valid             |
	When the Patient is assessed for DTaP on 2006-04-09
	Then the assessment should recommend a dose for DTaP on 2006-07-06
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_DTaP @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0012] - Age 6.  No vaccinations. Forecast DTaP
	# added on 2013-01-01
	Given a female Patient born on 2005-12-01
	And no immunizations have been given
	When the Patient is assessed for DTaP on 2011-12-01
	Then the assessment should recommend a dose for DTaP on 2006-02-01
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_DTaP @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0013] - #3 at age 14 weeks-4 days
	# added on 2013-01-01
	Given a female Patient born on 2006-01-06
	And the following immunizations have been given
		| Date Administered | Vaccine Name     | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2006-02-17        | DTaP Unspecified | 107 |     |                   | Valid             |
		| 2006-03-15        | DTaP Unspecified | 107 |     |                   | Valid             |
	When the Patient is assessed for DTaP on 2006-04-10
	Then the assessment should recommend a dose for DTaP on 2007-04-06
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_DTaP @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0014] - #3 at age 14 weeks
	# added on 2013-01-01
	Given a female Patient born on 2006-01-06
	And the following immunizations have been given
		| Date Administered | Vaccine Name     | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2006-02-17        | DTaP Unspecified | 107 |     |                   | Valid             |
		| 2006-03-17        | DTaP Unspecified | 107 |     |                   | Valid             |
	When the Patient is assessed for DTaP on 2006-04-14
	Then the assessment should recommend a dose for DTaP on 2007-04-06
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_DTaP @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0015] - #3 at age 6 months
	# added on 2013-01-01
	Given a female Patient born on 2006-02-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name     | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2006-04-01        | DTaP Unspecified | 107 |     |                   | Valid             |
		| 2006-05-01        | DTaP Unspecified | 107 |     |                   | Valid             |
	When the Patient is assessed for DTaP on 2006-08-01
	Then the assessment should recommend a dose for DTaP on 2007-05-01
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_DTaP @Gender_Female @ForecastTestType_RecommendedBasedOnMinimumIntervalFromPreviousDoseCatchUp
Scenario: [CTC 2013-0016] - Doses # 2 and #3 at ≥ age 7 years; # 1 at age < 12 mo.  Forecast # 4 in 6 mo
	# added on 2013-01-01
	Given a female Patient born on 2004-03-16
	And the following immunizations have been given
		| Date Administered | Vaccine Name     | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2004-11-16        | DTaP Unspecified | 107 |     |                   | Valid             |
		| 2011-03-16        | TD(GENERIC)      | 09  | MBL |                   | Valid             |
	When the Patient is assessed for DTaP on 2011-04-16
	Then the assessment should recommend a dose for DTaP on 2011-10-16
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_DTaP @Gender_Female @ForecastTestType_RecommendedBasedOnInterval
Scenario: [CTC 2013-0017] - Doses # 2 and # 3 at ≥7 years old; dose # 1 at ≥ 12 months old
	# updated on 2013-07-09 in version 1.1 - Past Due Date was missing. Added past due date per NIPInfo guidance.
	Given a female Patient born on 2003-05-13
	And the following immunizations have been given
		| Date Administered | Vaccine Name     | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2004-07-15        | DTaP Unspecified | 107 |     |                   | Valid             |
		| 2010-05-21        | TD(GENERIC)      | 09  | MBL |                   | Valid             |
	When the Patient is assessed for DTaP on 2011-03-04
	Then the assessment should recommend a dose for DTaP on 2021-03-04
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_DTaP @Gender_Female @ForecastTestType_RecommendedBasedOnInterval
Scenario: [CTC 2013-0019] - 1 Tdap, 2 Td with appropriate intervals to child ≥ age 7 = UTD for 10 years
	# updated on 2013-07-09 in version 1.1 - Past Due Date was missing. Added past due date per NIPInfo guidance.
	Given a female Patient born on 2004-05-24
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2011-05-25        | BOOSTRIX     | 115 | SKB |                   | Valid             |
		| 2011-06-24        | TD(GENERIC)  | 09  | MBL |                   | Valid             |
	When the Patient is assessed for DTaP on 2011-12-24
	Then the assessment should recommend a dose for DTaP on 2021-12-24
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_DTaP @Gender_Female @ForecastTestType_RecommendedBasedOnMinimumIntervalFromInvalidDose
Scenario: [CTC 2013-0020] - 1 Tdap, 2 Td to child ≥ 7 years old with 6 mo-5 day interval between doses 2 and 3
	# updated on 2013-07-09 in version 1.1 - Past Due Date was missing and child is in catch-up.  Past Due Date added to align with Recommended Date.
	Given a female Patient born on 2003-05-05
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2011-05-05        | BOOSTRIX     | 115 | SKB |                   | Valid             |
		| 2011-06-05        | TD(GENERIC)  | 09  | MBL |                   | Valid             |
	When the Patient is assessed for DTaP on 2011-11-30
	Then the assessment should recommend a dose for DTaP on 2012-05-30
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_DTaP @Gender_Female @ForecastTestType_RecommendedBasedOnInterval
Scenario: [CTC 2013-0021] - 1 Tdap, 2 Td to child ≥ 7 years old with 6 mo-4 day interval between doses 2 and 3
	# updated on 2013-07-09 in version 1.1 - Past Due Date was missing. Added past due date per NIPInfo guidance.
	Given a female Patient born on 2003-11-11
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2010-11-20        | TD(GENERIC)  | 09  | MBL |                   | Valid             |
		| 2011-02-06        | BOOSTRIX     | 115 | SKB |                   | Valid             |
	When the Patient is assessed for DTaP on 2011-08-02
	Then the assessment should recommend a dose for DTaP on 2021-08-02
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_DTaP @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0022] - Age 7.  Two DTaP˂ 12 months old.  Needs Tdap
	# added on 2013-01-01
	Given a female Patient born on 2005-01-06
	And the following immunizations have been given
		| Date Administered | Vaccine Name     | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2005-04-04        | DTaP Unspecified | 107 |     |                   | Valid             |
		| 2005-07-10        | DTaP Unspecified | 107 |     |                   | Valid             |
	When the Patient is assessed for DTaP on 2012-01-06
	Then the assessment should recommend a dose for DTaP on 2012-01-06
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_DTaP @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0023] - Age 7.  No vaccinations.  Forecast Tdap
	# updated on 2013-07-09 in version 1.1 - Past Due Date was missing and child is in catch-up.  Past Due Date added to align with Recommended Date.
	Given a female Patient born on 2004-10-10
	And no immunizations have been given
	When the Patient is assessed for DTaP on 2011-10-10
	Then the assessment should recommend a dose for DTaP on 2011-10-10
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_DTaP @Gender_Female @ForecastTestType_RecommendedBasedOnMinimumIntervalFromPreviousDoseCatchUp
Scenario: [CTC 2013-0024] - Age 7. Two DTaP˂ 12 mos old & 1 ≥ 12 mo.  Needs Tdap
	# updated on 2013-07-09 in version 1.1 - Past Due Date was missing and child is in catch-up.  Past Due Date added to align with Recommended Date.
	Given a female Patient born on 2005-03-18
	And the following immunizations have been given
		| Date Administered | Vaccine Name     | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2005-06-18        | DTaP Unspecified | 107 |     |                   | Valid             |
		| 2005-10-18        | DTaP Unspecified | 107 |     |                   | Valid             |
	When the Patient is assessed for DTaP on 2012-03-18
	Then the assessment should recommend a dose for DTaP on 2012-03-18
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_DTaP @Gender_Female @ForecastTestType_RecommendedBasedOnMinimumIntervalFromInValidDose
Scenario: [CTC 2013-0025] - #4 at age 12 mo-5 days
	# added on 2013-01-01
	Given a female Patient born on 2010-04-04
	And the following immunizations have been given
		| Date Administered | Vaccine Name     | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2010-06-04        | DTaP Unspecified | 107 |     |                   | Valid             |
		| 2010-08-04        | DTaP Unspecified | 107 |     |                   | Valid             |
	When the Patient is assessed for DTaP on 2011-03-30
	Then the assessment should recommend a dose for DTaP on 2011-09-30
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_DTaP @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0026] - #4 at age 12 mo-4 days
	# added on 2013-01-01
	Given a female Patient born on 2005-06-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name     | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2005-08-01        | DTaP Unspecified | 107 |     |                   | Valid             |
		| 2005-10-01        | DTaP Unspecified | 107 |     |                   | Valid             |
	When the Patient is assessed for DTaP on 2006-05-28
	Then the assessment should recommend a dose for DTaP on 2009-06-01
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_DTaP @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0027] - #4 at age ≥ 12 months old
	# added on 2013-01-01
	Given a female Patient born on 2006-04-04
	And the following immunizations have been given
		| Date Administered | Vaccine Name     | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2006-06-04        | DTaP Unspecified | 107 |     |                   | Valid             |
		| 2006-08-04        | DTaP Unspecified | 107 |     |                   | Valid             |
	When the Patient is assessed for DTaP on 2007-04-04
	Then the assessment should recommend a dose for DTaP on 2010-04-04
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_DTaP @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0028] - #4 at age 4 is UTD until age 11
	# updated on 2013-12-06 in version 1.4 - V1.4: Updated past due date to shift 1 day earlier to align with business rule calculation and other similar tests in the DTaP/Tdap/Td forecasting at 11 years.
	Given a female Patient born on 2006-05-06
	And the following immunizations have been given
		| Date Administered | Vaccine Name     | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2006-08-01        | DTaP Unspecified | 107 |     |                   | Valid             |
		| 2006-10-01        | DTaP Unspecified | 107 |     |                   | Valid             |
	When the Patient is assessed for DTaP on 2010-05-06
	Then the assessment should recommend a dose for DTaP on 2017-05-06
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_DTaP @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0029] - 5 year old with no previous DTP product receives 4 vaccinations prior to age 7 years
	# updated on 2013-12-06 in version 1.4 - V1.4: Updated past due date to shift 1 day earlier to align with business rule calculation and other similar tests in the DTaP/Tdap/Td forecasting at 11 years.
	Given a female Patient born on 2000-02-25
	And the following immunizations have been given
		| Date Administered | Vaccine Name     | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2005-02-25        | DTaP Unspecified | 107 |     |                   | Valid             |
		| 2005-04-25        | DTaP Unspecified | 107 |     |                   | Valid             |
	When the Patient is assessed for DTaP on 2006-04-30
	Then the assessment should recommend a dose for DTaP on 2011-02-25
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_DTaP @Gender_Female @ForecastTestType_RecommendedBasedOnMinimumIntervalFromInvalidDose
Scenario: [CTC 2013-0030] - #5 at age 4 years-5 days
	# added on 2013-01-01
	Given a female Patient born on 2006-07-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name     | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2006-09-01        | DTaP Unspecified | 107 |     |                   | Valid             |
		| 2006-10-01        | DTaP Unspecified | 107 |     |                   | Valid             |
	When the Patient is assessed for DTaP on 2010-06-26
	Then the assessment should recommend a dose for DTaP on 2010-12-26
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_DTaP @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0031] - #5 at age 4 years-4 days
	# updated on 2013-12-06 in version 1.4 - V1.4: Updated past due date to shift 1 day earlier to align with business rule calculation and other similar tests in the DTaP/Tdap/Td forecasting at 11 years.
	Given a female Patient born on 2006-07-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name     | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2006-09-01        | DTaP Unspecified | 107 |     |                   | Valid             |
		| 2006-10-01        | DTaP Unspecified | 107 |     |                   | Valid             |
	When the Patient is assessed for DTaP on 2010-06-27
	Then the assessment should recommend a dose for DTaP on 2017-07-01
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_DTaP @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0032] - # 5 at age 4 years
	# updated on 2013-12-06 in version 1.4 - V1.4: Updated past due date to shift 1 day earlier to align with business rule calculation and other similar tests in the DTaP/Tdap/Td forecasting at 11 years.
	Given a female Patient born on 2006-07-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name     | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2006-09-01        | DTaP Unspecified | 107 |     |                   | Valid             |
		| 2006-12-14        | DTaP Unspecified | 107 |     |                   | Valid             |
	When the Patient is assessed for DTaP on 2010-07-01
	Then the assessment should recommend a dose for DTaP on 2017-07-01
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_DTaP @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0033] - DTaP #1 at age 6 weeks-5 days
	# added on 2013-01-01
	Given a female Patient born on 2011-05-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name     | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2011-06-07        | DTaP Unspecified | 107 |     | Age: Too Young    | Not Valid         |
	When the Patient is assessed for DTaP on 2011-06-07
	Then the assessment should recommend a dose for DTaP on 2011-07-01
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_DTaP @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0034] - # 6 DTaP before age 4.  Nothing more until Tdap at age 11 even if some are invalid
	# updated on 2013-08-20 in version 1.2 - Past Due Date was missing.  Added past due date of 13 years - 1 day to be consistent with supporting data a logic specficiation business rule calculations.  Earliest and Recommended Date shifted from 7 years to 11 years since child received enough valid D
	Given a female Patient born on 2008-04-02
	And the following immunizations have been given
		| Date Administered | Vaccine Name     | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2008-06-02        | DTaP Unspecified | 107 |     |                   | Valid             |
		| 2008-08-02        | DTaP Unspecified | 107 |     |                   | Valid             |
	When the Patient is assessed for DTaP on 2011-10-02
	Then the assessment should recommend a dose for DTaP on 2019-04-02
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_DTaP @Gender_Female @ForecastTestType_RecommendedBasedOnMinimumIntervalFromPreviousDoseCatchUp
Scenario: [CTC 2013-0035] - Adolescent with Td but no Tdap
	# updated on 2013-07-09 in version 1.1 - Past Due Date was missing and child is in catch-up.  Past Due Date added to align with Recommended Date.
	Given a female Patient born on 1998-04-04
	And the following immunizations have been given
		| Date Administered | Vaccine Name     | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 1998-06-04        | DTaP Unspecified | 107 |     |                   | Valid             |
		| 1998-08-04        | DTaP Unspecified | 107 |     |                   | Valid             |
	When the Patient is assessed for DTaP on 2010-12-12
	Then the assessment should recommend a dose for DTaP on 2010-12-12
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_DTaP @Gender_Female @ForecastTestType_RecommendedBasedOnMinimumIntervalFromPreviousDoseCatchUp
Scenario: [CTC 2013-0036] - Invalid age for dose # 1 in first of series
	# added on 2013-01-01
	Given a female Patient born on 2011-08-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name     | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2011-09-01        | DTaP Unspecified | 107 |     | Age: Too Young    | Not Valid         |
		| 2011-12-01        | DTaP Unspecified | 107 |     |                   | Valid             |
	When the Patient is assessed for DTaP on 2012-02-01
	Then the assessment should recommend a dose for DTaP on 2012-02-29
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_DTaP @Gender_Female @ForecastTestType_RecommendedBasedOnMinimumIntervalFromInvalidDose
Scenario: [CTC 2013-0037] - Invalid age for  dose # 2 in midst of others
	# added on 2013-01-01
	Given a female Patient born on 2011-08-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name     | CVX | MVX | Evaluation Reason   | Evaluation Status |
		| 2011-09-30        | DTaP Unspecified | 107 |     |                     | Valid             |
		| 2011-10-22        | DTaP Unspecified | 107 |     | Interval: Too Short | Not Valid         |
	When the Patient is assessed for DTaP on 2012-02-01
	Then the assessment should recommend a dose for DTaP on 2012-02-29
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_DTaP @Gender_Female @ForecastTestType_RecommendedBasedOnMinimumIntervalFromInvalidDose
Scenario: [CTC 2013-0038] - Invalid age for dose #3 in midst of others
	# added on 2013-01-01
	Given a female Patient born on 2010-06-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name     | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2010-07-13        | DTaP Unspecified | 107 |     |                   | Valid             |
		| 2010-08-07        | DTaP Unspecified | 107 |     |                   | Valid             |
	When the Patient is assessed for DTaP on 2011-06-02
	Then the assessment should recommend a dose for DTaP on 2011-12-02
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_DTaP @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0039] - InValid age for dose # 4 in midst of others
	# updated on 2013-12-06 in version 1.4 - V1.4: Updated past due date to shift 1 day earlier to align with business rule calculation and other similar tests in the DTaP/Tdap/Td forecasting at 11 years.
	Given a female Patient born on 2007-05-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name     | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2007-07-01        | DTaP Unspecified | 107 |     |                   | Valid             |
		| 2007-09-01        | DTaP Unspecified | 107 |     |                   | Valid             |
	When the Patient is assessed for DTaP on 2011-05-01
	Then the assessment should recommend a dose for DTaP on 2018-05-01
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_DTaP @Gender_Female @ForecastTestType_RecommendedBasedOnInterval
Scenario: [CTC 2013-0040] - Invalid age dose 5 in midst of others
	# updated on 2013-07-09 in version 1.1 - Past Due Date was missing. Added past due date per NIPInfo guidance.
	Given a female Patient born on 2000-06-06
	And the following immunizations have been given
		| Date Administered | Vaccine Name     | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2000-08-07        | DTaP Unspecified | 107 |     |                   | Valid             |
		| 2000-10-09        | DTaP Unspecified | 107 |     |                   | Valid             |
	When the Patient is assessed for DTaP on 2011-06-06
	Then the assessment should recommend a dose for DTaP on 2021-06-06
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_DTaP @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0041] - Dose 1 to dose 2 interval 28-5 days
	# added on 2013-01-01
	Given a female Patient born on 2006-03-04
	And the following immunizations have been given
		| Date Administered | Vaccine Name     | CVX | MVX | Evaluation Reason   | Evaluation Status |
		| 2006-05-04        | DTaP Unspecified | 107 |     |                     | Valid             |
		| 2006-05-27        | DTaP Unspecified | 107 |     | Interval: Too Short | Not Valid         |
	When the Patient is assessed for DTaP on 2006-05-27
	Then the assessment should recommend a dose for DTaP on 2006-07-04
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_DTaP @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0042] - Dose 1 to dose 2 interval 28-4 days
	# added on 2013-01-01
	Given a female Patient born on 2006-02-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name     | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2006-04-01        | DTaP Unspecified | 107 |     |                   | Valid             |
		| 2006-04-25        | DTaP Unspecified | 107 |     |                   | Valid             |
	When the Patient is assessed for DTaP on 2006-04-25
	Then the assessment should recommend a dose for DTaP on 2006-08-01
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_DTaP @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0043] - Dose 1 to dose 2 interval 28 days
	# added on 2013-01-01
	Given a female Patient born on 2010-04-07
	And the following immunizations have been given
		| Date Administered | Vaccine Name     | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2010-07-01        | DTaP Unspecified | 107 |     |                   | Valid             |
		| 2010-07-29        | DTaP Unspecified | 107 |     |                   | Valid             |
	When the Patient is assessed for DTaP on 2010-07-29
	Then the assessment should recommend a dose for DTaP on 2010-10-07
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_DTaP @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0044] - DTaP #1 at age 6 weeks-4 days
	# added on 2013-01-01
	Given a female Patient born on 2006-04-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name     | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2006-05-09        | DTaP Unspecified | 107 |     |                   | Valid             |
	When the Patient is assessed for DTaP on 2006-05-09
	Then the assessment should recommend a dose for DTaP on 2006-08-01
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_DTaP @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0045] - Dose 2 to dose 3 interval 28-5 days
	# added on 2013-01-01
	Given a female Patient born on 2011-04-13
	And the following immunizations have been given
		| Date Administered | Vaccine Name     | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2011-06-13        | DTaP Unspecified | 107 |     |                   | Valid             |
		| 2011-08-01        | DTaP Unspecified | 107 |     |                   | Valid             |
	When the Patient is assessed for DTaP on 2011-08-24
	Then the assessment should recommend a dose for DTaP on 2011-10-13
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_DTaP @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0046] - Dose 2 to dose 3 interval 28-4 days
	# added on 2013-01-01
	Given a female Patient born on 2005-12-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name     | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2006-01-10        | DTaP Unspecified | 107 |     |                   | Valid             |
		| 2006-02-17        | DTaP Unspecified | 107 |     |                   | Valid             |
	When the Patient is assessed for DTaP on 2006-03-13
	Then the assessment should recommend a dose for DTaP on 2007-03-01
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_DTaP @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0047] - Dose 2 to dose 3 interval 28 days
	# added on 2013-01-01
	Given a female Patient born on 2005-12-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name     | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2006-01-10        | DTaP Unspecified | 107 |     |                   | Valid             |
		| 2006-02-08        | DTaP Unspecified | 107 |     |                   | Valid             |
	When the Patient is assessed for DTaP on 2006-03-08
	Then the assessment should recommend a dose for DTaP on 2007-03-01
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_DTaP @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0049] - Dose 3 to dose 4 interval 6 months-4 days
	# added on 2013-01-01
	Given a female Patient born on 2009-08-09
	And the following immunizations have been given
		| Date Administered | Vaccine Name     | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2009-10-10        | DTaP Unspecified | 107 |     |                   | Valid             |
		| 2009-12-10        | DTaP Unspecified | 107 |     |                   | Valid             |
	When the Patient is assessed for DTaP on 2010-08-11
	Then the assessment should recommend a dose for DTaP on 2013-08-09
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_DTaP @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0050] - Dose 3 to dose 4 interval 6 months
	# added on 2013-01-01
	Given a female Patient born on 2009-08-09
	And the following immunizations have been given
		| Date Administered | Vaccine Name     | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2009-10-10        | DTaP Unspecified | 107 |     |                   | Valid             |
		| 2009-12-10        | DTaP Unspecified | 107 |     |                   | Valid             |
	When the Patient is assessed for DTaP on 2010-08-15
	Then the assessment should recommend a dose for DTaP on 2013-08-09
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_DTaP @Gender_Female @ForecastTestType_RecommendedBasedOnMinimumIntervalFromInValidDose
Scenario: [CTC 2013-0051] - Dose 3 to dose 4 interval 4 months-1 day.  4 day grace does not apply to reduced intervals
	# added on 2013-01-01
	Given a female Patient born on 2010-04-04
	And the following immunizations have been given
		| Date Administered | Vaccine Name     | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2010-06-04        | DTaP Unspecified | 107 |     |                   | Valid             |
		| 2010-08-04        | DTaP Unspecified | 107 |     |                   | Valid             |
	When the Patient is assessed for DTaP on 2011-05-09
	Then the assessment should recommend a dose for DTaP on 2011-11-09
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_DTaP @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0052] - Dose 3 to dose 4 interval 4 months
	# added on 2013-01-01
	Given a female Patient born on 2009-11-10
	And the following immunizations have been given
		| Date Administered | Vaccine Name     | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2010-01-10        | DTaP Unspecified | 107 |     |                   | Valid             |
		| 2010-03-10        | DTaP Unspecified | 107 |     |                   | Valid             |
	When the Patient is assessed for DTaP on 2010-11-10
	Then the assessment should recommend a dose for DTaP on 2013-11-10
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_DTaP @Gender_Female @ForecastTestType_RecommendedBasedOnMinimumIntervalFromInvalidDose
Scenario: [CTC 2013-0053] - Invalid dose 1 to dose 2 interval in midst of other vaccines
	# added on 2013-01-01
	Given a female Patient born on 2009-02-11
	And the following immunizations have been given
		| Date Administered | Vaccine Name     | CVX | MVX | Evaluation Reason   | Evaluation Status |
		| 2009-04-11        | DTaP Unspecified | 107 |     |                     | Valid             |
		| 2009-05-01        | DTaP Unspecified | 107 |     | Interval: Too Short | Not Valid         |
	When the Patient is assessed for DTaP on 2010-02-15
	Then the assessment should recommend a dose for DTaP on 2010-08-15
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_DTaP @Gender_Female @ForecastTestType_RecommendedBasedOnMinimumIntervalFromInvalidDose
Scenario: [CTC 2013-0054] - Invalid dose 2 to dose 3 interval in midst of other vaccines
	# added on 2013-01-01
	Given a female Patient born on 2010-02-02
	And the following immunizations have been given
		| Date Administered | Vaccine Name     | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2010-04-02        | DTaP Unspecified | 107 |     |                   | Valid             |
		| 2010-05-30        | DTaP Unspecified | 107 |     |                   | Valid             |
	When the Patient is assessed for DTaP on 2011-04-04
	Then the assessment should recommend a dose for DTaP on 2011-10-04
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_DTaP @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0055] - DTaP #1 at age 6 weeks
	# added on 2013-01-01
	Given a female Patient born on 2011-11-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name     | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2011-12-13        | DTaP Unspecified | 107 |     |                   | Valid             |
	When the Patient is assessed for DTaP on 2011-12-13
	Then the assessment should recommend a dose for DTaP on 2012-03-01
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_DTaP @Gender_Female @ForecastTestType_RecommendedBasedOnMinimumIntervalFromInValidDose
Scenario: [CTC 2013-0056] - Invalid dose 3 to dose 4 interval in midst of other vaccinations
	# added on 2013-01-01
	Given a female Patient born on 2010-03-18
	And the following immunizations have been given
		| Date Administered | Vaccine Name     | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2010-08-18        | DTaP Unspecified | 107 |     |                   | Valid             |
		| 2010-10-18        | DTaP Unspecified | 107 |     |                   | Valid             |
	When the Patient is assessed for DTaP on 2011-03-18
	Then the assessment should recommend a dose for DTaP on 2011-09-18
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_DTaP @Gender_Female @ForecastTestType_RecommendedBasedOnInterval
Scenario: [CTC 2013-0057] - Invalid dose 4 to dose 5 interval in midst of others
	# updated on 2013-12-11 in version 1.4 - V1.4: Updated past due date to align with EIPB guidance clarification on  past due date and other test cases.
	Given a female Patient born on 2000-02-11
	And the following immunizations have been given
		| Date Administered | Vaccine Name     | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2000-04-11        | DTaP Unspecified | 107 |     |                   | Valid             |
		| 2000-06-11        | DTaP Unspecified | 107 |     |                   | Valid             |
	When the Patient is assessed for DTaP on 2011-02-12
	Then the assessment should recommend a dose for DTaP on 2021-02-12
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_DTaP @Gender_Female @ForecastTestType_RecommendedBasedOnMinimumIntervalFromPreviousDoseCatchUp
Scenario: [CTC 2013-0058] - Tdap as dose #1
	# added on 2013-01-01
	Given a female Patient born on 2010-03-05
	And the following immunizations have been given
		| Date Administered | Vaccine Name     | CVX | MVX | Evaluation Reason      | Evaluation Status |
		| 2010-05-05        | BOOSTRIX         | 115 | SKB | Vaccine: Invalid Usage | Not Valid         |
		| 2010-07-07        | DTaP Unspecified | 107 |     |                        | Valid             |
	When the Patient is assessed for DTaP on 2011-04-04
	Then the assessment should recommend a dose for DTaP on 2011-10-04
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_DTaP @Gender_Female @ForecastTestType_RecommendedBasedOnMinimumIntervalFromPreviousDoseCatchUp
Scenario: [CTC 2013-0059] - Tdap as dose #2
	# added on 2013-01-01
	Given a female Patient born on 2010-03-05
	And the following immunizations have been given
		| Date Administered | Vaccine Name     | CVX | MVX | Evaluation Reason      | Evaluation Status |
		| 2010-05-05        | DTaP Unspecified | 107 |     |                        | Valid             |
		| 2010-07-07        | BOOSTRIX         | 115 | SKB | Vaccine: Invalid Usage | Not Valid         |
	When the Patient is assessed for DTaP on 2011-03-05
	Then the assessment should recommend a dose for DTaP on 2011-09-05
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_DTaP @Gender_Female @ForecastTestType_RecommendedBasedOnMinimumIntervalFromInvalidDose
Scenario: [CTC 2013-0060] - Tdap as dose 3 to child under age 4=invalid as DTaP 3
	# added on 2013-01-01
	Given a female Patient born on 2010-02-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name     | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2010-05-01        | DTaP Unspecified | 107 |     |                   | Valid             |
		| 2010-07-01        | DTaP Unspecified | 107 |     |                   | Valid             |
	When the Patient is assessed for DTaP on 2010-11-01
	Then the assessment should recommend a dose for DTaP on 2010-11-01
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_DTaP @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0061] - Tdap as dose 4 to age 15 months=valid as DTaP
	# added on 2013-01-01
	Given a female Patient born on 2010-02-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name     | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2010-05-01        | DTaP Unspecified | 107 |     |                   | Valid             |
		| 2010-07-01        | DTaP Unspecified | 107 |     |                   | Valid             |
	When the Patient is assessed for DTaP on 2011-05-05
	Then the assessment should recommend a dose for DTaP on 2014-02-01
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_DTaP @Gender_Female @ForecastTestType_RecommendedBasedOnMinimumIntervalFromInvalidDose
Scenario: [CTC 2013-0062] - Tdap as dose 5 to age 4 years-5 days=invalid as dose 5 of DTaP
	# added on 2013-01-01
	Given a female Patient born on 2007-02-11
	And the following immunizations have been given
		| Date Administered | Vaccine Name     | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2007-05-01        | DTaP Unspecified | 107 |     |                   | Valid             |
		| 2007-07-01        | DTaP Unspecified | 107 |     |                   | Valid             |
	When the Patient is assessed for DTaP on 2011-02-06
	Then the assessment should recommend a dose for DTaP on 2011-08-06
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_DTaP @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0063] - Tdap as dose 5 to age 4-4 days. Counts as valid DTaP.  Child will need another Tdap in adolescence
	# updated on 2013-12-06 in version 1.4 - V1.4: Updated past due date to shift 1 day earlier to align with business rule calculation and other similar tests in the DTaP/Tdap/Td forecasting at 11 years.
	Given a female Patient born on 2007-02-11
	And the following immunizations have been given
		| Date Administered | Vaccine Name     | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2007-05-01        | DTaP Unspecified | 107 |     |                   | Valid             |
		| 2007-07-01        | DTaP Unspecified | 107 |     |                   | Valid             |
	When the Patient is assessed for DTaP on 2011-02-07
	Then the assessment should recommend a dose for DTaP on 2018-02-11
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_DTaP @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0064] - Tdap as dose 5 to age 4 years old=valid as DTaP 5
	# updated on 2013-07-09 in version 1.1 - Past Due Date was missing.  Added past due date of 13 years - 1 day to be consistent with supporting data a logic specficiation business rule calculations.
	Given a female Patient born on 2007-02-11
	And the following immunizations have been given
		| Date Administered | Vaccine Name     | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2007-05-01        | DTaP Unspecified | 107 |     |                   | Valid             |
		| 2007-07-01        | DTaP Unspecified | 107 |     |                   | Valid             |
	When the Patient is assessed for DTaP on 2011-02-11
	Then the assessment should recommend a dose for DTaP on 2018-02-11
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_DTaP @Gender_Female @ForecastTestType_RecommendedBasedOnMinimumIntervalFromPreviousDoseCatchUp
Scenario: [CTC 2013-0065] - Tdap as dose 1 at age 7 years old
	# added on 2013-01-01
	Given a female Patient born on 2005-01-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2012-01-01        | BOOSTRIX     | 115 | SKB |                   | Valid             |
	When the Patient is assessed for DTaP on 2012-01-01
	Then the assessment should recommend a dose for DTaP on 2012-01-29
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_DTaP @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0066] - DTaP # 1 at age 2 months
	# added on 2013-01-01
	Given a female Patient born on 2011-11-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name     | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2012-01-01        | DTaP Unspecified | 107 |     |                   | Valid             |
	When the Patient is assessed for DTaP on 2012-01-01
	Then the assessment should recommend a dose for DTaP on 2012-03-01
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_DTaP @Gender_Female @ForecastTestType_RecommendedBasedOnMinimumIntervalFromPreviousDoseCatchUp
Scenario: [CTC 2013-0067] - Tdap as dose 2 at age ≥7 years
	# updated on 2013-07-09 in version 1.1 - Past Due Date was missing and child is in catch-up.  Past Due Date added to align with Recommended Date.
	Given a female Patient born on 2004-09-16
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2011-10-16        | TD(GENERIC)  | 09  | MBL |                   | Valid             |
		| 2011-11-13        | BOOSTRIX     | 115 | SKB |                   | Valid             |
	When the Patient is assessed for DTaP on 2011-11-13
	Then the assessment should recommend a dose for DTaP on 2012-05-13
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_DTaP @Gender_Female @ForecastTestType_RecommendedBasedOnInterval
Scenario: [CTC 2013-0068] - Tdap as dose 3 to ≥ 7 years old
	# updated on 2013-07-09 in version 1.1 - Past Due Date was missing. Added past due date per NIPInfo guidance.
	Given a female Patient born on 2004-09-20
	And the following immunizations have been given
		| Date Administered | Vaccine Name     | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2011-09-30        | DTaP Unspecified | 107 |     |                   | Valid             |
		| 2011-10-28        | DTaP Unspecified | 107 |     |                   | Valid             |
	When the Patient is assessed for DTaP on 2012-04-28
	Then the assessment should recommend a dose for DTaP on 2022-04-28
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_DTaP @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0069] - Tdap at age 7 years-5 days. Current age 7 years
	# updated on 2013-07-09 in version 1.1 - Past Due Date was missing and child is in catch-up.  Past Due Date added to align with Recommended Date.
	Given a female Patient born on 2003-03-08
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason      | Evaluation Status |
		| 2010-03-03        | BOOSTRIX     | 115 | SKB | Vaccine: Invalid Usage | Not Valid         |
	When the Patient is assessed for DTaP on 2010-03-08
	Then the assessment should recommend a dose for DTaP on 2010-03-08
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_DTaP @Gender_Female @ForecastTestType_RecommendedBasedOnInterval
Scenario: [CTC 2013-0070] - Tdap at age 11 to child up-to-date with DTaP
	# updated on 2013-07-09 in version 1.1 - Past Due Date was missing. Added past due date per NIPInfo guidance.
	Given a female Patient born on 2000-03-03
	And the following immunizations have been given
		| Date Administered | Vaccine Name     | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2000-05-05        | DTaP Unspecified | 107 |     |                   | Valid             |
		| 2000-07-07        | DTaP Unspecified | 107 |     |                   | Valid             |
	When the Patient is assessed for DTaP on 2011-05-09
	Then the assessment should recommend a dose for DTaP on 2021-05-09
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_DTaP @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0071] - Encephalopathy within 7 days of DTaP. Further pertussis is contraindicated
	# updated on 2013-12-06 in version 1.4 - V1.4: Updated past due date to shift 1 day earlier to align with business rule calculation and other similar tests in the DTaP/Tdap/Td forecasting at 11 years.
	Given a female Patient born on 2001-02-02
	And the following medical history is reported
	| Medical History Text | Medical History Code | Medical History System |
	|                      | VXC22                | CDCPHINVS              |
	And the following immunizations have been given
		| Date Administered | Vaccine Name     | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2001-04-02        | DTaP Unspecified | 107 |     |                   | Valid             |
		| 2001-06-02        | DT(GENERIC)      | 28  | PMC |                   | Valid             |
	When the Patient is assessed for DTaP on 2006-05-05
	Then the assessment should recommend a dose for DTaP on 2012-02-02
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_DTaP @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0072] - Encephalopathy within 7 days of DTaP # 5
	# updated on 2013-12-06 in version 1.4 - V1.4: Updated past due date to shift 1 day earlier to align with business rule calculation and other similar tests in the DTaP/Tdap/Td forecasting at 11 years.
	Given a female Patient born on 2000-08-01
	And the following medical history is reported
	| Medical History Text | Medical History Code | Medical History System |
	|                      | VXC22                | CDCPHINVS              |
	And the following immunizations have been given
		| Date Administered | Vaccine Name     | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2000-10-01        | DTaP Unspecified | 107 |     |                   | Valid             |
		| 2000-12-01        | DTaP Unspecified | 107 |     |                   | Valid             |
	When the Patient is assessed for DTaP on 2004-08-10
	Then the assessment should recommend a dose for DTaP on 2011-08-01
	And the series status should be Not Complete


@SeriesStatus_Contraindicated @VaccineGroup_DTaP @Gender_Female @ForecastTestType_NotRecommendedContraindication
Scenario: [CTC 2013-0073] - Anaphylaxis to previous dose
	# added on 2013-01-01
	Given a female Patient born on 2010-10-10
	And the following medical history is reported
	| Medical History Text | Medical History Code | Medical History System |
	|                      | VXC20                | CDCPHINVS              |
	And the following immunizations have been given
		| Date Administered | Vaccine Name     | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2010-12-10        | DTaP Unspecified | 107 |     |                   | Valid             |
	When the Patient is assessed for DTaP on 2010-12-10
	Then the assessment should not recommend a dose for DTaP
	And the series status should be Contraindicated


@SeriesStatus_NotComplete @VaccineGroup_DTaP @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0074] - 4 doses of Tetramune to child DOB 1999
	# updated on 2013-12-06 in version 1.4 - V1.4: Updated past due date to shift 1 day earlier to align with business rule calculation and other similar tests in the DTaP/Tdap/Td forecasting at 11 years.
	Given a female Patient born on 1995-05-05
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 1995-07-05        | TETRAMUNE    | 22  | WAL |                   | Valid             |
		| 1995-09-05        | TETRAMUNE    | 22  | WAL |                   | Valid             |
	When the Patient is assessed for DTaP on 2002-05-05
	Then the assessment should recommend a dose for DTaP on 2006-05-05
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_DTaP @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0075] - 4 doses of Tetramune with a DTaP booster.  Forecast Tdap
	# updated on 2013-12-06 in version 1.4 - V1.4: Updated past due date to shift 1 day earlier to align with business rule calculation and other similar tests in the DTaP/Tdap/Td forecasting at 11 years.
	Given a female Patient born on 1999-12-12
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2000-02-15        | TETRAMUNE    | 22  | WAL |                   | Valid             |
		| 2000-04-15        | TETRAMUNE    | 22  | WAL |                   | Valid             |
	When the Patient is assessed for DTaP on 2004-12-01
	Then the assessment should recommend a dose for DTaP on 2010-12-12
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_DTaP @Gender_Female @ForecastTestType_RecommendedBasedOnInterval
Scenario: [CTC 2013-0076] - 4 Tetramune and Tdap at age 11=UTD for 10 years
	# updated on 2013-07-09 in version 1.1 - Past Due Date was missing. Added past due date per NIPInfo guidance.
	Given a female Patient born on 1996-03-03
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 1996-05-05        | TETRAMUNE    | 22  | WAL |                   | Valid             |
		| 1996-08-08        | TETRAMUNE    | 22  | WAL |                   | Valid             |
	When the Patient is assessed for DTaP on 2007-03-18
	Then the assessment should recommend a dose for DTaP on 2017-03-18
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_DTaP @Gender_Female @ForecastTestType_RecommendedBasedOnMinimumIntervalFromPreviousDoseCatchUp
Scenario: [CTC 2013-0077] - DTaP #1 at age 6.5 years
	# added on 2013-01-01
	Given a female Patient born on 2005-11-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name     | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2012-05-01        | DTaP Unspecified | 107 |     |                   | Valid             |
	When the Patient is assessed for DTaP on 2012-05-01
	Then the assessment should recommend a dose for DTaP on 2012-05-29
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_DTaP @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0078] - TriHibit as primary dose.  DTaP=valid.  (Hib=invalid)
	# added on 2013-01-01
	Given a female Patient born on 2011-05-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2011-07-01        | TRIHIBIT     | 50  | PMC |                   | Valid             |
	When the Patient is assessed for DTaP on 2011-07-01
	Then the assessment should recommend a dose for DTaP on 2011-09-01
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_DTaP @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0079] - TriHibit as valid dose 4 of DTaP
	# added on 2013-01-01
	Given a female Patient born on 2008-02-02
	And the following immunizations have been given
		| Date Administered | Vaccine Name     | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2008-04-04        | DTaP Unspecified | 107 |     |                   | Valid             |
		| 2008-06-06        | DTaP Unspecified | 107 |     |                   | Valid             |
	When the Patient is assessed for DTaP on 2009-05-19
	Then the assessment should recommend a dose for DTaP on 2012-02-02
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_DTaP @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0080] - TriHibit as valid dose 5 of DTaP
	# updated on 2013-12-06 in version 1.4 - V1.4: Updated past due date to align with ACIP and other test cases to be 1 day before the 13th birthday.
	Given a female Patient born on 2006-10-08
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2006-11-29        | PEDIARIX     | 110 | SKB |                   | Valid             |
		| 2007-01-29        | PEDIARIX     | 110 | SKB |                   | Valid             |
	When the Patient is assessed for DTaP on 2010-10-09
	Then the assessment should recommend a dose for DTaP on 2017-10-08
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_DTaP @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0081] - Pentavalente (Mexico) DTP-Hib-Hep  counts as valid
	# added on 2013-01-01
	Given a female Patient born on 2009-10-18
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2010-02-18        | PENTAVALENTE | 102 |     |                   | Valid             |
		| 2010-04-18        | PENTAVALENTE | 102 |     |                   | Valid             |
	When the Patient is assessed for DTaP on 2010-12-27
	Then the assessment should recommend a dose for DTaP on 2013-10-18
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_DTaP @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0082] - Kinrix at age 2 months as Dose 1 of DTaP.  Off label but valid
	# added on 2013-01-01
	Given a female Patient born on 2011-11-11
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2012-01-11        | KINRIX       | 130 | SKB |                   | Valid             |
	When the Patient is assessed for DTaP on 2012-01-11
	Then the assessment should recommend a dose for DTaP on 2012-03-11
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_DTaP @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0083] - Kinrix at age 4 months as dose 2 of DTaP.  Off label but valid
	# added on 2013-01-01
	Given a female Patient born on 2011-09-09
	And the following immunizations have been given
		| Date Administered | Vaccine Name     | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2011-11-15        | DTaP Unspecified | 107 |     |                   | Valid             |
		| 2012-01-09        | KINRIX           | 130 | SKB |                   | Valid             |
	When the Patient is assessed for DTaP on 2012-01-09
	Then the assessment should recommend a dose for DTaP on 2012-03-09
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_DTaP @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0084] - Kinrix at age 6 months as dose 3 of DTaP.  Off label but valid
	# added on 2013-01-01
	Given a female Patient born on 2011-07-07
	And the following immunizations have been given
		| Date Administered | Vaccine Name     | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2011-09-09        | DTaP Unspecified | 107 |     |                   | Valid             |
		| 2011-11-11        | DTaP Unspecified | 107 |     |                   | Valid             |
	When the Patient is assessed for DTaP on 2012-01-07
	Then the assessment should recommend a dose for DTaP on 2012-10-07
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_DTaP @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0085] - Kinrix at age 12 months as dose 4 of DTaP=valid
	# added on 2013-01-01
	Given a female Patient born on 2006-07-07
	And the following immunizations have been given
		| Date Administered | Vaccine Name     | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2006-09-09        | DTaP Unspecified | 107 |     |                   | Valid             |
		| 2006-11-11        | DTaP Unspecified | 107 |     |                   | Valid             |
	When the Patient is assessed for DTaP on 2007-07-07
	Then the assessment should recommend a dose for DTaP on 2010-07-07
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_DTaP @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0086] - Kinrix at age 4 to child with appropriate DTaP=UTD until adolescence
	# updated on 2013-12-06 in version 1.4 - V1.4: Updated past due date to align with ACIP and other test cases to be 1 day before the 13th birthday.
	Given a female Patient born on 2006-10-04
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2006-12-06        | PEDIARIX     | 110 | SKB |                   | Valid             |
		| 2007-02-04        | PEDIARIX     | 110 | SKB |                   | Valid             |
	When the Patient is assessed for DTaP on 2010-10-04
	Then the assessment should recommend a dose for DTaP on 2017-10-04
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_DTaP @Gender_Female @ForecastTestType_RecommendedBasedOnMinimumIntervalFromInvalidDose
Scenario: [CTC 2013-0087] - Kinrix at age 4 years-5 days
	# added on 2013-01-01
	Given a female Patient born on 2007-07-07
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2007-08-30        | PEDIARIX     | 110 | SKB |                   | Valid             |
		| 2007-10-24        | PEDIARIX     | 110 | SKB |                   | Valid             |
	When the Patient is assessed for DTaP on 2011-07-02
	Then the assessment should recommend a dose for DTaP on 2012-01-02
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_DTaP @Gender_Female @ForecastTestType_RecommendedBasedOnMinimumIntervalFromPreviousDoseCatchUp
Scenario: [CTC 2013-0088] - DTaP # 1 at age 7 years (off label but counts as valid)
	# added on 2013-01-01
	Given a female Patient born on 2005-02-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name     | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2012-02-01        | DTaP Unspecified | 107 |     |                   | Valid             |
	When the Patient is assessed for DTaP on 2012-02-01
	Then the assessment should recommend a dose for DTaP on 2012-02-29
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_DTaP @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0089] - Kinrix at age 4 years -4 days
	# updated on 2013-07-09 in version 1.1 - Past Due Date was missing.  Added past due date of 13 years - 1 day to be consistent with supporting data a logic specficiation business rule calculations.
	Given a female Patient born on 2007-10-18
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2007-12-07        | PEDIARIX     | 110 | SKB |                   | Valid             |
		| 2008-02-04        | PEDIARIX     | 110 | SKB |                   | Valid             |
	When the Patient is assessed for DTaP on 2011-10-14
	Then the assessment should recommend a dose for DTaP on 2018-10-18
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_DTaP @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0090] - Newborn forecasting
	# added on 2013-01-01
	Given a female Patient born on 2012-04-01
	And no immunizations have been given
	When the Patient is assessed for DTaP on 2012-04-01
	Then the assessment should recommend a dose for DTaP on 2012-06-01
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_DTaP @Gender_Female @ForecastTestType_RecommendedBasedOnMinimumIntervalFromPreviousDoseCatchUp
Scenario: [CTC 2013-0091] - # 2 Pediarix at 6 yrs 11.5 mo
	# added on 2013-01-01
	Given a female Patient born on 2005-01-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2007-12-16        | PEDIARIX     | 110 | SKB |                   | Valid             |
		| 2011-12-15        | PEDIARIX     | 110 | SKB |                   | Valid             |
	When the Patient is assessed for DTaP on 2011-12-15
	Then the assessment should recommend a dose for DTaP on 2012-01-12
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_DTaP @Gender_Female @ForecastTestType_RecommendedBasedOnMinimumIntervalFromPreviousDoseCatchUp
Scenario: [CTC 2013-0092] - # 2 Pediarix at 7 yrs; # 1 at less than 12 mo
	# updated on 2013-07-09 in version 1.1 - Past Due Date was missing and child is in catch-up.  Past Due Date added to align with Recommended Date.
	Given a female Patient born on 2003-09-16
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2003-12-16        | PEDIARIX     | 110 | SKB |                   | Valid             |
		| 2010-09-16        | PEDIARIX     | 110 | SKB |                   | Valid             |
	When the Patient is assessed for DTaP on 2010-09-16
	Then the assessment should recommend a dose for DTaP on 2010-10-14
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_DTaP @Gender_Female @ForecastTestType_RecommendedBasedOnMinimumIntervalFromPreviousDoseCatchUp
Scenario: [CTC 2013-0093] - # 2 Pediarix at 7 yrs; # 1 ≥ 12 mo. Need 6 mo interval from 2 to 3
	# updated on 2013-07-09 in version 1.1 - Past Due Date was missing and child is in catch-up.  Past Due Date added to align with Recommended Date.
	Given a female Patient born on 2004-09-16
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2005-10-16        | PEDIARIX     | 110 | SKB |                   | Valid             |
		| 2011-09-16        | PEDIARIX     | 110 | SKB |                   | Valid             |
	When the Patient is assessed for DTaP on 2011-09-16
	Then the assessment should recommend a dose for DTaP on 2012-03-16
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_DTaP @Gender_Female @ForecastTestType_RecommendedBasedOnMinimumIntervalFromPreviousDoseCatchUp
Scenario: [CTC 2013-0094] - # 1 and 2 Pediarix at ≥7 yrs  with 28 day interval.  Off label but does not need repeating
	# added on 2013-01-01
	Given a female Patient born on 2002-07-07
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2009-07-07        | PEDIARIX     | 110 | SKB |                   | Valid             |
		| 2009-08-04        | PEDIARIX     | 110 | SKB |                   | Valid             |
	When the Patient is assessed for DTaP on 2009-08-04
	Then the assessment should recommend a dose for DTaP on 2010-02-04
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_DTaP @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0095] - # 3 Pediarix at 14 wks-5 days
	# added on 2013-01-01
	Given a female Patient born on 2005-06-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2005-07-09        | PEDIARIX     | 110 | SKB |                   | Valid             |
		| 2005-08-06        | PEDIARIX     | 110 | SKB |                   | Valid             |
	When the Patient is assessed for DTaP on 2005-09-02
	Then the assessment should recommend a dose for DTaP on 2005-12-01
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_DTaP @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0096] - # 3 Pediarix at 14 wks-4 days
	# added on 2013-01-01
	Given a female Patient born on 2006-01-06
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2006-02-15        | PEDIARIX     | 110 | SKB |                   | Valid             |
		| 2006-03-15        | PEDIARIX     | 110 | SKB |                   | Valid             |
	When the Patient is assessed for DTaP on 2006-04-10
	Then the assessment should recommend a dose for DTaP on 2007-04-06
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_DTaP @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0097] - #3 Pediarix at age 24 weeks- 5 days
	# added on 2013-01-01
	Given a female Patient born on 2011-05-13
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2011-06-24        | PEDIARIX     | 110 | SKB |                   | Valid             |
		| 2011-08-24        | PEDIARIX     | 110 | SKB |                   | Valid             |
	When the Patient is assessed for DTaP on 2011-10-23
	Then the assessment should recommend a dose for DTaP on 2012-08-13
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_DTaP @Gender_Female @ForecastTestType_RecommendedBasedOnMinimumIntervalFromPreviousDoseCatchUp
Scenario: [CTC 2013-0099] - # 3 Pediarix at 6 yrs 11.5 mo
	# added on 2013-01-01
	Given a female Patient born on 2004-07-07
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2007-05-05        | PEDIARIX     | 110 | SKB |                   | Valid             |
		| 2008-08-08        | PEDIARIX     | 110 | SKB |                   | Valid             |
	When the Patient is assessed for DTaP on 2011-06-25
	Then the assessment should recommend a dose for DTaP on 2011-12-25
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_DTaP @Gender_Female @ForecastTestType_RecommendedBasedOnMinimumIntervalFromInValidDose
Scenario: [CTC 2013-0100] - # 4 Pediarix at 1 yr -5 days
	# added on 2013-01-01
	Given a female Patient born on 2010-04-04
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2010-06-04        | PEDIARIX     | 110 | SKB |                   | Valid             |
		| 2010-08-04        | PEDIARIX     | 110 | SKB |                   | Valid             |
	When the Patient is assessed for DTaP on 2011-03-30
	Then the assessment should recommend a dose for DTaP on 2011-09-30
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_DTaP @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0101] - # 1 Pediarix at 6 wks-5 days
	# added on 2013-01-01
	Given a female Patient born on 2011-05-06
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2011-06-12        | PEDIARIX     | 110 | SKB | Age: Too Young    | Not Valid         |
	When the Patient is assessed for DTaP on 2011-06-12
	Then the assessment should recommend a dose for DTaP on 2011-07-06
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_DTaP @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0102] - # 4 Pediarix at 1 yr -4 days
	# added on 2013-01-01
	Given a female Patient born on 2005-06-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2005-08-01        | PEDIARIX     | 110 | SKB |                   | Valid             |
		| 2005-11-01        | PEDIARIX     | 110 | SKB |                   | Valid             |
	When the Patient is assessed for DTaP on 2006-05-28
	Then the assessment should recommend a dose for DTaP on 2009-06-01
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_DTaP @Gender_Female @ForecastTestType_RecommendedBasedOnMinimumIntervalFromPreviousDoseCatchUp
Scenario: [CTC 2013-0103] - # 4 Pediarix at 3 yrs 11.5 mo
	# added on 2013-01-01
	Given a female Patient born on 2008-02-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2008-04-01        | PEDIARIX     | 110 | SKB |                   | Valid             |
		| 2008-07-01        | PEDIARIX     | 110 | SKB |                   | Valid             |
	When the Patient is assessed for DTaP on 2012-01-15
	Then the assessment should recommend a dose for DTaP on 2012-07-15
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_DTaP @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0104] - # 4 Pediarix at 4 yrs=complete until age 11
	# updated on 2013-07-09 in version 1.1 - Past Due Date was missing.  Added past due date of 13 years - 1 day to be consistent with supporting data a logic specficiation business rule calculations.
	Given a female Patient born on 2006-05-06
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2006-09-09        | PEDIARIX     | 110 | SKB |                   | Valid             |
		| 2007-03-03        | PEDIARIX     | 110 | SKB |                   | Valid             |
	When the Patient is assessed for DTaP on 2010-05-06
	Then the assessment should recommend a dose for DTaP on 2017-05-06
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_DTaP @Gender_Female @ForecastTestType_RecommendedBasedOnMinimumIntervalFromInvalidDose
Scenario: [CTC 2013-0105] - # 5 Pediarix at 4 yrs -5 days
	# added on 2013-01-01
	Given a female Patient born on 2006-07-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2006-09-01        | PEDIARIX     | 110 | SKB |                   | Valid             |
		| 2006-10-01        | PEDIARIX     | 110 | SKB |                   | Valid             |
	When the Patient is assessed for DTaP on 2010-06-26
	Then the assessment should recommend a dose for DTaP on 2010-12-26
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_DTaP @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0106] - # 5 Pediarix at 4 yrs -4 days
	# updated on 2013-07-09 in version 1.1 - Past Due Date was missing.  Added past due date of 13 years - 1 day to be consistent with supporting data a logic specficiation business rule calculations.
	Given a female Patient born on 2006-07-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2006-09-01        | PEDIARIX     | 110 | SKB |                   | Valid             |
		| 2006-10-01        | PEDIARIX     | 110 | SKB |                   | Valid             |
	When the Patient is assessed for DTaP on 2010-06-27
	Then the assessment should recommend a dose for DTaP on 2017-07-01
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_DTaP @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0107] - # 5 Pediarix at 6 yrs 11.5 mo
	# updated on 2013-07-09 in version 1.1 - Past Due Date was missing.  Added past due date of 13 years - 1 day to be consistent with supporting data a logic specficiation business rule calculations.
	Given a female Patient born on 2005-04-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2005-06-01        | PEDIARIX     | 110 | SKB |                   | Valid             |
		| 2005-08-01        | PEDIARIX     | 110 | SKB |                   | Valid             |
	When the Patient is assessed for DTaP on 2012-03-15
	Then the assessment should recommend a dose for DTaP on 2016-04-01
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_DTaP @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0108] - # 5 Pediarix at 7 yrs.  Off label but valid
	# updated on 2013-12-11 in version 1.4 - V1.4: Updated to reflect 10 year recurring dose since the DTaP at age 7 can count as the adolescent (11 - 12 year) Tdap dose per conversation with EIPB and guidance in MMWRs
	Given a female Patient born on 2005-05-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2005-08-01        | PEDIARIX     | 110 | SKB |                   | Valid             |
		| 2005-11-01        | PEDIARIX     | 110 | SKB |                   | Valid             |
	When the Patient is assessed for DTaP on 2012-05-01
	Then the assessment should recommend a dose for DTaP on 2022-05-01
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_DTaP @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0109] - Invalid age dose 1 as first of others
	# added on 2013-01-01
	Given a female Patient born on 2011-08-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2011-09-07        | PEDIARIX     | 110 | SKB | Age: Too Young    | Not Valid         |
		| 2011-11-01        | PEDIARIX     | 110 | SKB |                   | Valid             |
	When the Patient is assessed for DTaP on 2011-11-01
	Then the assessment should recommend a dose for DTaP on 2011-12-01
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_DTaP @Gender_Female @ForecastTestType_RecommendedBasedOnMinimumIntervalFromPreviousDoseCatchUp
Scenario: [CTC 2013-0110] - Invalid age dose 2 in midst of others
	# added on 2013-01-01
	Given a female Patient born on 2010-10-18
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2010-11-25        | PEDIARIX     | 110 | SKB |                   | Valid             |
		| 2010-12-21        | PEDIARIX     | 110 | SKB | Age: Too Young    | Not Valid         |
	When the Patient is assessed for DTaP on 2011-04-18
	Then the assessment should recommend a dose for DTaP on 2011-05-16
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_DTaP @Gender_Female @ForecastTestType_RecommendedBasedOnMinimumIntervalFromPreviousDoseCatchUp
Scenario: [CTC 2013-0111] - invalid age dose 3 in midst of others
	# added on 2013-01-01
	Given a female Patient born on 2010-06-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2010-07-15        | PEDIARIX     | 110 | SKB |                   | Valid             |
		| 2010-08-10        | PEDIARIX     | 110 | SKB |                   | Valid             |
	When the Patient is assessed for DTaP on 2011-06-01
	Then the assessment should recommend a dose for DTaP on 2011-12-01
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_DTaP @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0112] - # 1 Pediarix at 6 wks-4 days
	# added on 2013-01-01
	Given a female Patient born on 2006-04-04
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2006-05-12        | PEDIARIX     | 110 | SKB |                   | Valid             |
	When the Patient is assessed for DTaP on 2006-05-12
	Then the assessment should recommend a dose for DTaP on 2006-08-04
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_DTaP @Gender_Female @ForecastTestType_RecommendedBasedOnMinimumIntervalFromInvalidDose
Scenario: [CTC 2013-0113] - dose 1 to 2 Pediarix, interval 28-5 days
	# added on 2013-01-01
	Given a female Patient born on 2010-11-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason   | Evaluation Status |
		| 2011-01-03        | PEDIARIX     | 110 | SKB |                     | Valid             |
		| 2011-01-26        | PEDIARIX     | 110 | SKB | Interval: Too Short | Not Valid         |
	When the Patient is assessed for DTaP on 2011-01-26
	Then the assessment should recommend a dose for DTaP on 2011-03-01
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_DTaP @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0114] - dose 1 to 2 Pediarix, interval 28-4 days
	# added on 2013-01-01
	Given a female Patient born on 2006-02-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2006-04-01        | PEDIARIX     | 110 | SKB |                   | Valid             |
		| 2006-04-25        | PEDIARIX     | 110 | SKB |                   | Valid             |
	When the Patient is assessed for DTaP on 2006-04-25
	Then the assessment should recommend a dose for DTaP on 2006-08-01
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_DTaP @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0115] - dose 2 to 3 Pediarix, interval 28-5 days
	# added on 2013-01-01
	Given a female Patient born on 2011-04-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2011-06-01        | PEDIARIX     | 110 | SKB |                   | Valid             |
		| 2011-08-01        | PEDIARIX     | 110 | SKB |                   | Valid             |
	When the Patient is assessed for DTaP on 2011-08-24
	Then the assessment should recommend a dose for DTaP on 2011-10-01
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_DTaP @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0116] - dose 2 to 3 Pediarix, interval 28-4 days
	# added on 2013-01-01
	Given a female Patient born on 2005-12-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2006-02-01        | PEDIARIX     | 110 | SKB |                   | Valid             |
		| 2006-04-01        | PEDIARIX     | 110 | SKB |                   | Valid             |
	When the Patient is assessed for DTaP on 2006-04-25
	Then the assessment should recommend a dose for DTaP on 2007-03-01
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_DTaP @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0117] - dose 3 to 4 Pediarix, interval 6m-5 days
	# added on 2013-01-01
	Given a female Patient born on 2009-08-09
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2009-10-09        | PEDIARIX     | 110 | SKB |                   | Valid             |
		| 2009-12-09        | PEDIARIX     | 110 | SKB |                   | Valid             |
	When the Patient is assessed for DTaP on 2010-10-04
	Then the assessment should recommend a dose for DTaP on 2013-08-09
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_DTaP @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0118] - dose 3 to 4 Pediarix, interval 6m-4 days
	# added on 2013-01-01
	Given a female Patient born on 2009-08-09
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2009-10-09        | PEDIARIX     | 110 | SKB |                   | Valid             |
		| 2009-12-09        | PEDIARIX     | 110 | SKB |                   | Valid             |
	When the Patient is assessed for DTaP on 2010-10-05
	Then the assessment should recommend a dose for DTaP on 2013-08-09
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_DTaP @Gender_Female @ForecastTestType_RecommendedBasedOnMinimumIntervalFromInValidDose
Scenario: [CTC 2013-0119] - dose 3 to 4 Pediarix, interval 4 mo-1 day
	# added on 2013-01-01
	Given a female Patient born on 2010-04-04
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2010-06-04        | PEDIARIX     | 110 | SKB |                   | Valid             |
		| 2010-08-04        | PEDIARIX     | 110 | SKB |                   | Valid             |
	When the Patient is assessed for DTaP on 2011-06-03
	Then the assessment should recommend a dose for DTaP on 2011-12-03
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_DTaP @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0120] - dose 3 to 4 Pediarix, interval 4 mo
	# added on 2013-01-01
	Given a female Patient born on 2010-04-04
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2010-06-04        | PEDIARIX     | 110 | SKB |                   | Valid             |
		| 2010-08-04        | PEDIARIX     | 110 | SKB |                   | Valid             |
	When the Patient is assessed for DTaP on 2011-06-04
	Then the assessment should recommend a dose for DTaP on 2014-04-04
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_DTaP @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0121] - invalid dose 1-2 interval in midst of others
	# added on 2013-01-01
	Given a female Patient born on 2009-02-11
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason   | Evaluation Status |
		| 2009-04-11        | PEDIARIX     | 110 | SKB |                     | Valid             |
		| 2009-04-30        | PEDIARIX     | 110 | SKB | Interval: Too Short | Not Valid         |
	When the Patient is assessed for DTaP on 2009-06-11
	Then the assessment should recommend a dose for DTaP on 2009-08-11
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_DTaP @Gender_Female @ForecastTestType_RecommendedBasedOnMinimumIntervalFromPreviousDoseCatchUp
Scenario: [CTC 2013-0122] - invalid dose 2-3 interval in midst of others
	# added on 2013-01-01
	Given a female Patient born on 2010-02-02
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2010-04-02        | PEDIARIX     | 110 | SKB |                   | Valid             |
		| 2010-06-02        | PEDIARIX     | 110 | SKB |                   | Valid             |
	When the Patient is assessed for DTaP on 2011-02-02
	Then the assessment should recommend a dose for DTaP on 2011-08-02
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_DTaP @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0123] - # 1 Pediarix at 6 wks
	# added on 2013-01-01
	Given a female Patient born on 2011-11-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2011-12-13        | PEDIARIX     | 110 | SKB |                   | Valid             |
	When the Patient is assessed for DTaP on 2011-12-13
	Then the assessment should recommend a dose for DTaP on 2012-03-01
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_DTaP @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0124] - inValid dose 3-4 interval in midst of others
	# updated on 2013-12-06 in version 1.4 - V1.4: Updated past due date to shift 1 day earlier to align with business rule calculation and other similar tests in the DTaP/Tdap/Td forecasting at 11 years.
	Given a female Patient born on 2008-03-18
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2008-05-18        | PEDIARIX     | 110 | SKB |                   | Valid             |
		| 2008-07-18        | PEDIARIX     | 110 | SKB |                   | Valid             |
	When the Patient is assessed for DTaP on 2012-03-20
	Then the assessment should recommend a dose for DTaP on 2019-03-18
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_DTaP @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0125] - Encephalopathy within 7 days of Pediarix
	# added on 2013-01-01
	Given a female Patient born on 2011-02-02
	And the following medical history is reported
	| Medical History Text | Medical History Code | Medical History System |
	|                      | VXC22                | CDCPHINVS              |
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2011-04-02        | PEDIARIX     | 110 | SKB |                   | Valid             |
	When the Patient is assessed for DTaP on 2011-04-02
	Then the assessment should recommend a dose for DTaP on 2011-06-02
	And the series status should be Not Complete


@SeriesStatus_Contraindicated @VaccineGroup_DTaP @Gender_Female @ForecastTestType_NotRecommendedContraindication
Scenario: [CTC 2013-0126] - Anaphylaxis to previous dose of Pediarix
	# added on 2013-01-01
	Given a female Patient born on 2010-10-10
	And the following medical history is reported
	| Medical History Text | Medical History Code | Medical History System |
	|                      | VXC20                | CDCPHINVS              |
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2010-12-15        | PEDIARIX     | 110 | SKB |                   | Valid             |
	When the Patient is assessed for DTaP on 2010-12-15
	Then the assessment should not recommend a dose for DTaP
	And the series status should be Contraindicated


@SeriesStatus_NotComplete @VaccineGroup_DTaP @Gender_Female @ForecastTestType_RecommendedBasedOnMinimumIntervalFromPreviousDoseCatchUp
Scenario: [CTC 2013-0127] - # 1 Pediarix at 6 yrs 11.5 mo
	# added on 2013-01-01
	Given a female Patient born on 2005-04-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2012-03-16        | PEDIARIX     | 110 | SKB |                   | Valid             |
	When the Patient is assessed for DTaP on 2012-03-16
	Then the assessment should recommend a dose for DTaP on 2012-04-13
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_DTaP @Gender_Female @ForecastTestType_RecommendedBasedOnMinimumIntervalFromPreviousDoseCatchUp
Scenario: [CTC 2013-0128] - # 1 Pediarix at 7 yrs
	# added on 2013-01-01
	Given a female Patient born on 2005-02-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2012-02-01        | PEDIARIX     | 110 | SKB |                   | Valid             |
	When the Patient is assessed for DTaP on 2012-02-01
	Then the assessment should recommend a dose for DTaP on 2012-02-29
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_DTaP @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0129] - # 2 Pediarix at 10 wks-5 days
	# added on 2013-01-01
	Given a female Patient born on 2011-10-10
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2011-11-17        | PEDIARIX     | 110 | SKB |                   | Valid             |
		| 2011-12-14        | PEDIARIX     | 110 | SKB | Age: Too Young    | Not Valid         |
	When the Patient is assessed for DTaP on 2011-12-14
	Then the assessment should recommend a dose for DTaP on 2012-02-10
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_DTaP @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0130] - # 2 Pediarix at 10 wks-4 days
	# added on 2013-01-01
	Given a female Patient born on 2011-02-26
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2011-04-09        | PEDIARIX     | 110 | SKB |                   | Valid             |
		| 2011-05-03        | PEDIARIX     | 110 | SKB |                   | Valid             |
	When the Patient is assessed for DTaP on 2011-05-03
	Then the assessment should recommend a dose for DTaP on 2011-08-26
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_DTaP @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0131] - # 2 Pediarix at 10 wks
	# added on 2013-01-01
	Given a female Patient born on 2011-02-26
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2011-04-09        | PEDIARIX     | 110 | SKB |                   | Valid             |
		| 2011-05-07        | PEDIARIX     | 110 | SKB |                   | Valid             |
	When the Patient is assessed for DTaP on 2011-05-07
	Then the assessment should recommend a dose for DTaP on 2011-08-26
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_DTaP @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0132] - Newborn
	# added on 2013-01-01
	Given a female Patient born on 2012-02-01
	And no immunizations have been given
	When the Patient is assessed for DTaP on 2012-02-01
	Then the assessment should recommend a dose for DTaP on 2012-04-01
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_DTaP @Gender_Female @ForecastTestType_RecommendedBasedOnMinimumIntervalFromPreviousDoseCatchUp
Scenario: [CTC 2013-0133] - # 2 Pentacel at 6 yrs 11.5 mo. Off label but counts. Current Age 7 years
	# updated on 2013-07-09 in version 1.1 - Past Due Date was missing and child is in catch-up.  Past Due Date added to align with Recommended Date.
	Given a female Patient born on 2005-01-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2007-09-22        | PENTACEL     | 120 | PMC |                   | Valid             |
		| 2011-12-15        | PENTACEL     | 120 | PMC |                   | Valid             |
	When the Patient is assessed for DTaP on 2012-01-01
	Then the assessment should recommend a dose for DTaP on 2012-06-15
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_DTaP @Gender_Female @ForecastTestType_RecommendedBasedOnMinimumIntervalFromPreviousDoseCatchUp
Scenario: [CTC 2013-0134] - # 2 Pentacel at 7 yrs; # 1 at age < 12 mo
	# updated on 2013-07-09 in version 1.1 - Past Due Date was missing and child is in catch-up.  Past Due Date added to align with Recommended Date.
	Given a female Patient born on 2003-09-16
	And the following immunizations have been given
		| Date Administered | Vaccine Name     | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2004-02-25        | DTaP Unspecified | 107 |     |                   | Valid             |
		| 2010-09-20        | PENTACEL         | 120 | PMC |                   | Valid             |
	When the Patient is assessed for DTaP on 2010-09-20
	Then the assessment should recommend a dose for DTaP on 2010-10-18
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_DTaP @Gender_Female @ForecastTestType_RecommendedBasedOnMinimumIntervalFromPreviousDoseCatchUp
Scenario: [CTC 2013-0135] - # 2 Pentacel at 7 yrs; # 1 at age ≥ 12 mo
	# updated on 2013-07-09 in version 1.1 - Past Due Date was missing and child is in catch-up.  Past Due Date added to align with Recommended Date.
	Given a female Patient born on 2004-09-16
	And the following immunizations have been given
		| Date Administered | Vaccine Name     | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2005-11-19        | DTaP Unspecified | 107 |     |                   | Valid             |
		| 2011-09-20        | PENTACEL         | 120 | PMC |                   | Valid             |
	When the Patient is assessed for DTaP on 2011-09-20
	Then the assessment should recommend a dose for DTaP on 2012-03-20
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_DTaP @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0136] - # 3 Pentacel at 14 wks-5 days
	# added on 2013-01-01
	Given a female Patient born on 2010-06-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2010-07-09        | PENTACEL     | 120 | PMC |                   | Valid             |
		| 2010-08-06        | PENTACEL     | 120 | PMC |                   | Valid             |
	When the Patient is assessed for DTaP on 2010-09-02
	Then the assessment should recommend a dose for DTaP on 2010-12-01
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_DTaP @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0137] - # 3 Pentacel at 14 wks-4 days
	# added on 2013-01-01
	Given a female Patient born on 2010-06-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2010-07-09        | PENTACEL     | 120 | PMC |                   | Valid             |
		| 2010-08-06        | PENTACEL     | 120 | PMC |                   | Valid             |
	When the Patient is assessed for DTaP on 2010-09-03
	Then the assessment should recommend a dose for DTaP on 2011-09-01
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_DTaP @Gender_Female @ForecastTestType_RecommendedBasedOnMinimumIntervalFromPreviousDoseCatchUp
Scenario: [CTC 2013-0138] - # 3 Pentacel at 6 yrs 11.5 mo
	# added on 2013-01-01
	Given a female Patient born on 2005-01-15
	And the following immunizations have been given
		| Date Administered | Vaccine Name     | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2005-03-12        | DTaP Unspecified | 107 |     |                   | Valid             |
		| 2008-06-15        | DTaP Unspecified | 107 |     |                   | Valid             |
	When the Patient is assessed for DTaP on 2011-12-30
	Then the assessment should recommend a dose for DTaP on 2012-06-30
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_DTaP @Gender_Female @ForecastTestType_RecommendedBasedOnMinimumIntervalFromInValidDose
Scenario: [CTC 2013-0139] - # 4 Pentacel at 1 yr -5 days
	# added on 2013-01-01
	Given a female Patient born on 2010-04-04
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2010-06-04        | PENTACEL     | 120 | PMC |                   | Valid             |
		| 2010-08-04        | PENTACEL     | 120 | PMC |                   | Valid             |
	When the Patient is assessed for DTaP on 2011-03-30
	Then the assessment should recommend a dose for DTaP on 2011-09-30
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_DTaP @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0140] - # 4 Pentacel at 1 yr -4 days
	# added on 2013-01-01
	Given a female Patient born on 2010-04-04
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2010-06-04        | PENTACEL     | 120 | PMC |                   | Valid             |
		| 2010-08-04        | PENTACEL     | 120 | PMC |                   | Valid             |
	When the Patient is assessed for DTaP on 2011-03-31
	Then the assessment should recommend a dose for DTaP on 2014-04-04
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_DTaP @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0141] - # 4 Pentacel at age 12 mo
	# added on 2013-01-01
	Given a female Patient born on 2010-04-04
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2010-06-04        | PENTACEL     | 120 | PMC |                   | Valid             |
		| 2010-08-04        | PENTACEL     | 120 | PMC |                   | Valid             |
	When the Patient is assessed for DTaP on 2011-04-04
	Then the assessment should recommend a dose for DTaP on 2014-04-04
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_DTaP @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0142] - # 4 Pentacel at 4 yrs
	# updated on 2013-12-06 in version 1.4 - V1.4: Updated past due date to shift 1 day earlier to align with business rule calculation and other similar tests in the DTaP/Tdap/Td forecasting at 11 years.
	Given a female Patient born on 2006-05-06
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2006-09-15        | PENTACEL     | 120 | PMC |                   | Valid             |
		| 2007-04-28        | PENTACEL     | 120 | PMC |                   | Valid             |
	When the Patient is assessed for DTaP on 2010-05-06
	Then the assessment should recommend a dose for DTaP on 2017-05-06
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_DTaP @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0143] - # 5 Pentacel at ≥ 4 yrs
	# updated on 2013-12-06 in version 1.4 - V1.4: Updated past due date to align with ACIP and other test cases to be 1 day before the 13th birthday.
	Given a female Patient born on 2008-02-08
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2009-01-08        | PENTACEL     | 120 | PMC |                   | Valid             |
		| 2009-04-08        | PENTACEL     | 120 | PMC |                   | Valid             |
	When the Patient is assessed for DTaP on 2012-03-01
	Then the assessment should recommend a dose for DTaP on 2019-02-08
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_DTaP @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0144] - # 4 Pentacel at 5 yrs=off label but counts
	# updated on 2013-12-06 in version 1.4 - V1.4: Updated past due date to shift 1 day earlier to align with business rule calculation and other similar tests in the DTaP/Tdap/Td forecasting at 11 years.
	Given a female Patient born on 2007-02-08
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2007-06-08        | PENTACEL     | 120 | PMC |                   | Valid             |
		| 2007-12-05        | PENTACEL     | 120 | PMC |                   | Valid             |
	When the Patient is assessed for DTaP on 2012-02-08
	Then the assessment should recommend a dose for DTaP on 2018-02-08
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_DTaP @Gender_Female @ForecastTestType_RecommendedBasedOnMinimumIntervalFromPreviousDoseCatchUp
Scenario: [CTC 2013-0145] - invalid age dose 2 in midst of others
	# added on 2013-01-01
	Given a female Patient born on 2010-10-18
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2010-11-25        | PENTACEL     | 120 | PMC |                   | Valid             |
		| 2010-12-22        | PENTACEL     | 120 | PMC | Age: Too Young    | Not Valid         |
	When the Patient is assessed for DTaP on 2011-10-20
	Then the assessment should recommend a dose for DTaP on 2012-04-20
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_DTaP @Gender_Female @ForecastTestType_RecommendedBasedOnMinimumIntervalFromPreviousDoseCatchUp
Scenario: [CTC 2013-0146] - invalid age dose 3 in midst of others
	# added on 2013-01-01
	Given a female Patient born on 2010-06-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2010-07-09        | PENTACEL     | 120 | PMC |                   | Valid             |
		| 2010-08-06        | PENTACEL     | 120 | PMC |                   | Valid             |
	When the Patient is assessed for DTaP on 2011-07-07
	Then the assessment should recommend a dose for DTaP on 2012-01-07
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_DTaP @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0147] - dose 1 to 2 Pentacel, interval 28-5 days
	# added on 2013-01-01
	Given a female Patient born on 2009-11-09
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason   | Evaluation Status |
		| 2010-01-03        | PENTACEL     | 120 | PMC |                     | Valid             |
		| 2010-01-26        | PENTACEL     | 120 | PMC | Interval: Too Short | Not Valid         |
	When the Patient is assessed for DTaP on 2010-01-26
	Then the assessment should recommend a dose for DTaP on 2010-03-09
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_DTaP @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0148] - dose 1 to 2 Pentacel, interval 28-4 days
	# added on 2013-01-01
	Given a female Patient born on 2009-11-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2010-01-03        | PENTACEL     | 120 | PMC |                   | Valid             |
		| 2010-01-27        | PENTACEL     | 120 | PMC |                   | Valid             |
	When the Patient is assessed for DTaP on 2010-01-27
	Then the assessment should recommend a dose for DTaP on 2010-05-01
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_DTaP @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0149] - dose 2 to 3 Pentacel, interval 28-5 days
	# added on 2013-01-01
	Given a female Patient born on 2008-04-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2008-06-01        | PENTACEL     | 120 | PMC |                   | Valid             |
		| 2008-08-01        | PENTACEL     | 120 | PMC |                   | Valid             |
	When the Patient is assessed for DTaP on 2008-08-24
	Then the assessment should recommend a dose for DTaP on 2008-10-01
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_DTaP @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0150] - dose 2 to 3 Pentacel, interval 28-4 days
	# added on 2013-01-01
	Given a female Patient born on 2008-04-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2008-06-01        | PENTACEL     | 120 | PMC |                   | Valid             |
		| 2008-08-01        | PENTACEL     | 120 | PMC |                   | Valid             |
	When the Patient is assessed for DTaP on 2008-08-25
	Then the assessment should recommend a dose for DTaP on 2009-07-01
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_DTaP @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0152] - # 1 Pentacel at 6 wks-4 days
	# added on 2013-01-01
	Given a female Patient born on 2008-04-04
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2008-05-12        | PENTACEL     | 120 | PMC |                   | Valid             |
	When the Patient is assessed for DTaP on 2008-05-12
	Then the assessment should recommend a dose for DTaP on 2008-08-04
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_DTaP @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0153] - dose 3 to 4 Pentacel, interval 6m-4 days
	# added on 2013-01-01
	Given a female Patient born on 2009-08-09
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2009-10-09        | PENTACEL     | 120 | PMC |                   | Valid             |
		| 2010-02-09        | PENTACEL     | 120 | PMC |                   | Valid             |
	When the Patient is assessed for DTaP on 2010-10-05
	Then the assessment should recommend a dose for DTaP on 2013-08-09
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_DTaP @Gender_Female @ForecastTestType_RecommendedBasedOnMinimumIntervalFromInValidDose
Scenario: [CTC 2013-0154] - dose 3 to 4 Pentacel, interval 4 mo-1 day
	# added on 2013-01-01
	Given a female Patient born on 2010-04-04
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2010-06-04        | PENTACEL     | 120 | PMC |                   | Valid             |
		| 2010-10-10        | PENTACEL     | 120 | PMC |                   | Valid             |
	When the Patient is assessed for DTaP on 2011-05-14
	Then the assessment should recommend a dose for DTaP on 2011-11-14
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_DTaP @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0155] - dose 3 to 4 Pentacel, interval 4 mo
	# added on 2013-01-01
	Given a female Patient born on 2010-04-04
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2010-06-04        | PENTACEL     | 120 | PMC |                   | Valid             |
		| 2010-10-10        | PENTACEL     | 120 | PMC |                   | Valid             |
	When the Patient is assessed for DTaP on 2011-05-15
	Then the assessment should recommend a dose for DTaP on 2014-04-04
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_DTaP @Gender_Female @ForecastTestType_RecommendedBasedOnMinimumIntervalFromPreviousDoseCatchUp
Scenario: [CTC 2013-0156] - invalid dose 1-2 interval in midst of others
	# added on 2013-01-01
	Given a female Patient born on 2009-02-11
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason   | Evaluation Status |
		| 2009-04-11        | PENTACEL     | 120 | PMC |                     | Valid             |
		| 2009-05-04        | PENTACEL     | 120 | PMC | Interval: Too Short | Not Valid         |
	When the Patient is assessed for DTaP on 2009-08-01
	Then the assessment should recommend a dose for DTaP on 2009-08-29
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_DTaP @Gender_Female @ForecastTestType_RecommendedBasedOnMinimumIntervalFromPreviousDoseCatchUp
Scenario: [CTC 2013-0157] - invalid dose 2-3 interval in midst of others
	# added on 2013-01-01
	Given a female Patient born on 2010-02-02
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2010-04-02        | PENTACEL     | 120 | PMC |                   | Valid             |
		| 2010-06-02        | PENTACEL     | 120 | PMC |                   | Valid             |
	When the Patient is assessed for DTaP on 2011-02-05
	Then the assessment should recommend a dose for DTaP on 2011-08-05
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_DTaP @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0158] - inValid dose 3-4 interval in midst of others
	# updated on 2013-12-06 in version 1.4 - V1.4: Updated past due date to shift 1 day earlier to align with business rule calculation and other similar tests in the DTaP/Tdap/Td forecasting at 11 years.
	Given a female Patient born on 2008-03-18
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2008-05-20        | PENTACEL     | 120 | PMC |                   | Valid             |
		| 2008-07-25        | PENTACEL     | 120 | PMC |                   | Valid             |
	When the Patient is assessed for DTaP on 2012-03-22
	Then the assessment should recommend a dose for DTaP on 2019-03-18
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_DTaP @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0159] - Encephalopathy on 8/3/10 (within 7 days of Pentacel)
	# added on 2013-01-01
	Given a female Patient born on 2010-06-06
	And the following medical history is reported
	| Medical History Text | Medical History Code | Medical History System |
	|                      | VXC22                | CDCPHINVS              |
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2010-08-01        | PENTACEL     | 120 | PMC |                   | Valid             |
	When the Patient is assessed for DTaP on 2010-08-01
	Then the assessment should recommend a dose for DTaP on 2010-10-06
	And the series status should be Not Complete


@SeriesStatus_Contraindicated @VaccineGroup_DTaP @Gender_Female @ForecastTestType_NotRecommendedContraindication
Scenario: [CTC 2013-0160] - Anaphylaxis to previous dose of Pentacel
	# added on 2013-01-01
	Given a female Patient born on 2010-06-06
	And the following medical history is reported
	| Medical History Text | Medical History Code | Medical History System |
	|                      | VXC20                | CDCPHINVS              |
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2010-08-02        | PENTACEL     | 120 | PMC |                   | Valid             |
	When the Patient is assessed for DTaP on 2010-08-02
	Then the assessment should not recommend a dose for DTaP
	And the series status should be Contraindicated


@SeriesStatus_NotComplete @VaccineGroup_DTaP @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0161] - # 1 Pentacel at 6 wks
	# added on 2013-01-01
	Given a female Patient born on 2008-04-04
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2008-05-16        | PENTACEL     | 120 | PMC |                   | Valid             |
	When the Patient is assessed for DTaP on 2008-05-16
	Then the assessment should recommend a dose for DTaP on 2008-08-04
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_DTaP @Gender_Female @ForecastTestType_RecommendedBasedOnMinimumIntervalFromPreviousDoseCatchUp
Scenario: [CTC 2013-0162] - # 1 Pentacel at 6 yrs 11.5 mo
	# added on 2013-01-01
	Given a female Patient born on 2005-01-15
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2012-01-02        | PENTACEL     | 120 | PMC |                   | Valid             |
	When the Patient is assessed for DTaP on 2012-01-02
	Then the assessment should recommend a dose for DTaP on 2012-01-30
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_DTaP @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0163] - # 1 Pentacel at 7 yrs.  Off label use but counts as dose 1
	# added on 2013-01-01
	Given a female Patient born on 2005-02-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2012-02-01        | PENTACEL     | 120 | PMC |                   | Valid             |
	When the Patient is assessed for DTaP on 2012-02-01
	Then the assessment should recommend a dose for DTaP on 2012-02-29
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_DTaP @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0164] - # 2 Pentacel at 10 wks-5 days
	# added on 2013-01-01
	Given a female Patient born on 2010-10-10
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2010-11-17        | PENTACEL     | 120 | PMC |                   | Valid             |
		| 2010-12-14        | PENTACEL     | 120 | PMC | Age: Too Young    | Not Valid         |
	When the Patient is assessed for DTaP on 2010-12-14
	Then the assessment should recommend a dose for DTaP on 2011-02-10
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_DTaP @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0165] - # 2 Pentacel at 10 wks-4 days
	# added on 2013-01-01
	Given a female Patient born on 2010-10-10
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2010-11-17        | PENTACEL     | 120 | PMC |                   | Valid             |
		| 2010-12-15        | PENTACEL     | 120 | PMC |                   | Valid             |
	When the Patient is assessed for DTaP on 2010-12-15
	Then the assessment should recommend a dose for DTaP on 2011-04-10
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_DTaP @Gender_Female @ForecastTestType_RecommendedBasedOnMinimumIntervalFromPreviousDoseCatchUp
Scenario: [CTC 2013-0166] - # 2 Pentacel at 6 yrs .  Off label but counts
	# added on 2013-01-01
	Given a female Patient born on 2005-01-15
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2006-01-15        | PENTACEL     | 120 | PMC |                   | Valid             |
		| 2011-01-15        | PENTACEL     | 120 | PMC |                   | Valid             |
	When the Patient is assessed for DTaP on 2011-01-15
	Then the assessment should recommend a dose for DTaP on 2011-02-12
	And the series status should be Not Complete

