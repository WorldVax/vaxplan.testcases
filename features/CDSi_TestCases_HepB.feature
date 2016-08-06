Feature: HepB CDSi test cases

@SeriesStatus_NotComplete @VaccineGroup_HepB @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0198] - Newborn Testing.  No vaccinations to date
	# added on 2013-01-01
	Given a female Patient born on 2011-12-12
	And no immunizations have been given
	When the Patient is assessed for HepB on 2011-12-12
	Then the assessment should recommend a dose for HepB on 2011-12-12
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_HepB @Gender_Female @ForecastTestType_RecommendedBasedOnMinimumIntervalFromInvalidDose
Scenario: [CTC 2013-0199] - Dose 1 to dose 2 interval 28-5 days
	# added on 2013-01-01
	Given a female Patient born on 2011-04-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name    | CVX | MVX | Evaluation Reason   | Evaluation Status |
		| 2011-05-01        | RECOMBIVAX-PEDS | 08  | MSD |                     | Valid             |
		| 2011-05-24        | RECOMBIVAX-PEDS | 08  | MSD | Interval: Too Short | Not Valid         |
	When the Patient is assessed for HepB on 2011-05-24
	Then the assessment should recommend a dose for HepB on 2011-06-21
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_HepB @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0200] - Dose 1 to dose 2 interval 28-4 days
	# added on 2013-01-01
	Given a female Patient born on 2011-04-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name      | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2011-04-01        | RECOMBIVAX-PEDS   | 08  | MSD |                   | Valid             |
		| 2011-04-25        | Hep B Unspecified | 45  |     |                   | Valid             |
	When the Patient is assessed for HepB on 2011-04-25
	Then the assessment should recommend a dose for HepB on 2011-10-01
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_HepB @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0201] - Dose 1 to dose 2 interval 28 days
	# added on 2013-01-01
	Given a female Patient born on 2011-04-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name    | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2011-04-01        | RECOMBIVAX-PEDS | 08  | MSD |                   | Valid             |
		| 2011-04-29        | RECOMBIVAX-PEDS | 08  | MSD |                   | Valid             |
	When the Patient is assessed for HepB on 2011-04-29
	Then the assessment should recommend a dose for HepB on 2011-10-01
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_HepB @Gender_Female @ForecastTestType_RecommendedBasedOnMinimumIntervalFromInvalidDose
Scenario: [CTC 2013-0202] - Dose 2 to dose 3 interval 8 wks-5 days. 4th dose needed
	# updated on 2014-11-07 in version 1.6 - v1.6: changed dose 3 from not valid to valid due to recent clarifications.  Also changed test case name to reflect a 4th dose is required.
	Given a female Patient born on 2005-06-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name    | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2005-09-01        | RECOMBIVAX-PEDS | 08  | MSD |                   | Valid             |
		| 2005-12-01        | RECOMBIVAX-PEDS | 08  | MSD |                   | Valid             |
	When the Patient is assessed for HepB on 2006-01-21
	Then the assessment should recommend a dose for HepB on 2006-03-18
	And the series status should be Not Complete


@SeriesStatus_Complete @VaccineGroup_HepB @Gender_Female @ForecastTestType_NotRecommendedSeriesComplete
Scenario: [CTC 2013-0203] - Dose 2 to dose 3 interval 8 wks-4 days.  Series complete
	# added on 2013-01-01
	Given a female Patient born on 2007-02-11
	And the following immunizations have been given
		| Date Administered | Vaccine Name      | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2007-03-01        | Hep B Unspecified | 45  |     |                   | Valid             |
		| 2007-08-01        | Hep B Unspecified | 45  |     |                   | Valid             |
	When the Patient is assessed for HepB on 2007-09-22
	Then the assessment should not recommend a dose for HepB
	And the series status should be Complete


@SeriesStatus_Complete @VaccineGroup_HepB @Gender_Female @ForecastTestType_NotRecommendedSeriesComplete
Scenario: [CTC 2013-0204] - Dose 2 to dose 3 interval is 8 weeks.  Series complete
	# added on 2013-01-01
	Given a female Patient born on 2006-10-11
	And the following immunizations have been given
		| Date Administered | Vaccine Name      | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2006-12-11        | Hep B Unspecified | 45  |     |                   | Valid             |
		| 2007-04-11        | Hep B Unspecified | 45  |     |                   | Valid             |
	When the Patient is assessed for HepB on 2007-06-06
	Then the assessment should not recommend a dose for HepB
	And the series status should be Complete


@SeriesStatus_NotComplete @VaccineGroup_HepB @Gender_Female @ForecastTestType_RecommendedBasedOnMinimumIntervalFromInvalidDose
Scenario: [CTC 2013-0205] - Dose 1 to dose 3 interval 16 weeks-5 days. 4th dose needed
	# updated on 2014-11-07 in version 1.6 - v1.6: changed dose 3 from not valid to valid due to recent clarifications.  Also changed test case name to reflect a 4th dose is required.; V1.1: Typo on Past Due Date by one day.
	Given a female Patient born on 2004-07-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name      | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2004-10-01        | Hep B Unspecified | 45  |     |                   | Valid             |
		| 2004-11-07        | RECOMBIVAX-PEDS   | 08  | MSD |                   | Valid             |
	When the Patient is assessed for HepB on 2005-01-16
	Then the assessment should recommend a dose for HepB on 2005-03-13
	And the series status should be Not Complete


@SeriesStatus_Complete @VaccineGroup_HepB @Gender_Female @ForecastTestType_NotRecommendedSeriesComplete
Scenario: [CTC 2013-0206] - Dose 1 to dose 3 interval 16 weeks-4 days. Series complete
	# added on 2013-01-01
	Given a female Patient born on 2009-07-04
	And the following immunizations have been given
		| Date Administered | Vaccine Name      | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2009-10-01        | Hep B Unspecified | 45  |     |                   | Valid             |
		| 2009-11-24        | Hep B Unspecified | 45  |     |                   | Valid             |
	When the Patient is assessed for HepB on 2010-01-17
	Then the assessment should not recommend a dose for HepB
	And the series status should be Complete


@SeriesStatus_Complete @VaccineGroup_HepB @Gender_Female @ForecastTestType_NotRecommendedSeriesComplete
Scenario: [CTC 2013-0207] - Dose 1 to dose 3 interval 16 weeks.  Series complete
	# added on 2013-01-01
	Given a female Patient born on 2011-08-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name      | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2011-11-01        | Hep B Unspecified | 45  |     |                   | Valid             |
		| 2011-12-17        | Hep B Unspecified | 45  |     |                   | Valid             |
	When the Patient is assessed for HepB on 2012-02-21
	Then the assessment should not recommend a dose for HepB
	And the series status should be Complete


@SeriesStatus_NotComplete @VaccineGroup_HepB @Gender_Female @ForecastTestType_RecommendedBasedOnMinimumIntervalFromPreviousDoseCatchUp
Scenario: [CTC 2013-0208] - Recombivax Hep B ages 11-15.  Dose 2 recommended in 4-6 months
	# added on 2013-01-01
	Given a female Patient born on 1999-05-05
	And the following immunizations have been given
		| Date Administered | Vaccine Name     | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2011-11-25        | RECOMBIVAX-ADULT | 43  | MSD |                   | Valid             |
	When the Patient is assessed for HepB on 2011-11-25
	Then the assessment should recommend a dose for HepB on 2012-03-25
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_HepB @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0209] - Dose # 1 at age 0 days
	# added on 2013-01-01
	Given a female Patient born on 2011-04-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name      | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2011-04-01        | Hep B Unspecified | 45  |     |                   | Valid             |
	When the Patient is assessed for HepB on 2011-04-01
	Then the assessment should recommend a dose for HepB on 2011-05-01
	And the series status should be Not Complete


@SeriesStatus_Complete @VaccineGroup_HepB @Gender_Female @ForecastTestType_NotRecommendedSeriesComplete
Scenario: [CTC 2013-0210] - Doses 1 and 2 of Recombvx at ages 11-15 years with ≥ 4 mo interval = series complete
	# added on 2013-01-01
	Given a female Patient born on 1997-04-07
	And the following immunizations have been given
		| Date Administered | Vaccine Name     | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2009-10-13        | RECOMBIVAX-ADULT | 43  | MSD |                   | Valid             |
		| 2010-02-13        | RECOMBIVAX-ADULT | 43  | MSD |                   | Valid             |
	When the Patient is assessed for HepB on 2010-02-13
	Then the assessment should not recommend a dose for HepB
	And the series status should be Complete


@SeriesStatus_NotComplete @VaccineGroup_HepB @Gender_Female @ForecastTestType_RecommendedBasedOnMinimumIntervalFromPreviousDoseCatchUp
Scenario: [CTC 2013-0211] - Dose 1 to dose 2 Recombvx interval  4 months-5 days.  Two dose adolescent schedule no longer applies
	# added on 2013-01-01
	Given a female Patient born on 1996-05-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name     | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2007-05-01        | RECOMBIVAX-ADULT | 43  | MSD |                   | Valid             |
		| 2007-08-27        | RECOMBIVAX-ADULT | 43  | MSD |                   | Valid             |
	When the Patient is assessed for HepB on 2007-08-27
	Then the assessment should recommend a dose for HepB on 2007-10-22
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_HepB @Gender_Female @ForecastTestType_RecommendedBasedOnMinimumIntervalFromInvalidDose
Scenario: [CTC 2013-0212] - Dose 2 to dose 3 interval 8 wks-5 days in adolescent with two Recombvx not meeting rules for two dose adoles. 4th dose needed
	# updated on 2014-11-07 in version 1.6 - v1.6: changed dose 3 from not valid to valid due to recent clarifications.  Also changed test case name to reflect a 4th dose is required.
	Given a female Patient born on 1992-05-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name     | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2005-09-01        | RECOMBIVAX-ADULT | 43  | MSD |                   | Valid             |
		| 2005-12-01        | RECOMBIVAX-ADULT | 43  | MSD |                   | Valid             |
	When the Patient is assessed for HepB on 2006-01-21
	Then the assessment should recommend a dose for HepB on 2006-03-18
	And the series status should be Not Complete


@SeriesStatus_Complete @VaccineGroup_HepB @Gender_Female @ForecastTestType_NotRecommendedSeriesComplete
Scenario: [CTC 2013-0213] - Hep at birth.  Comvax at 6 wks and 6 mo. Hep series complete
	# added on 2013-01-01
	Given a female Patient born on 2004-02-04
	And the following immunizations have been given
		| Date Administered | Vaccine Name    | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2004-02-04        | RECOMBIVAX-PEDS | 08  | MSD |                   | Valid             |
		| 2004-03-13        | COMVAX          | 51  | MSD |                   | Valid             |
	When the Patient is assessed for HepB on 2004-08-04
	Then the assessment should not recommend a dose for HepB
	And the series status should be Complete


@SeriesStatus_Complete @VaccineGroup_HepB @Gender_Female @ForecastTestType_NotRecommendedSeriesComplete
Scenario: [CTC 2013-0216] - Hep B at birth. Comvax at 4 weeks and 6 months.  Series complete for Hep B
	# added on 2013-01-01
	Given a female Patient born on 2006-02-02
	And the following immunizations have been given
		| Date Administered | Vaccine Name      | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2006-02-02        | Hep B Unspecified | 45  |     |                   | Valid             |
		| 2006-03-02        | COMVAX            | 51  | MSD |                   | Valid             |
	When the Patient is assessed for HepB on 2006-08-02
	Then the assessment should not recommend a dose for HepB
	And the series status should be Complete


@SeriesStatus_Complete @VaccineGroup_HepB @Gender_Female @ForecastTestType_NotRecommendedSeriesComplete
Scenario: [CTC 2013-0219] - Hep B at birth. Comvax at 5 mo and 8 wks-4 days later.  Series complete for Hep B
	# added on 2013-01-01
	Given a female Patient born on 2006-05-05
	And the following immunizations have been given
		| Date Administered | Vaccine Name    | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2006-05-05        | RECOMBIVAX-PEDS | 08  | MSD |                   | Valid             |
		| 2006-10-05        | COMVAX          | 51  | MSD |                   | Valid             |
	When the Patient is assessed for HepB on 2006-11-26
	Then the assessment should not recommend a dose for HepB
	And the series status should be Complete


@SeriesStatus_NotComplete @VaccineGroup_HepB @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0220] - Dose # 1 at age 1 day
	# added on 2013-01-01
	Given a female Patient born on 2011-04-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name    | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2011-04-02        | RECOMBIVAX-PEDS | 08  | MSD |                   | Valid             |
	When the Patient is assessed for HepB on 2011-04-02
	Then the assessment should recommend a dose for HepB on 2011-05-01
	And the series status should be Not Complete


@SeriesStatus_Complete @VaccineGroup_HepB @Gender_Female @ForecastTestType_NotRecommendedSeriesComplete
Scenario: [CTC 2013-0221] - Hep at birth.  Comvax at 5 mo and 8 wks later.  Series complete for Hep B
	# added on 2013-01-01
	Given a female Patient born on 2006-06-06
	And the following immunizations have been given
		| Date Administered | Vaccine Name    | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2006-06-06        | RECOMBIVAX-PEDS | 08  | MSD |                   | Valid             |
		| 2006-11-06        | COMVAX          | 51  | MSD |                   | Valid             |
	When the Patient is assessed for HepB on 2007-01-01
	Then the assessment should not recommend a dose for HepB
	And the series status should be Complete


@SeriesStatus_NotComplete @VaccineGroup_HepB @Gender_Female @ForecastTestType_RecommendedBasedOnMinimumIntervalFromInvalidDose
Scenario: [CTC 2013-0222] - Dose 1 to dose 3 interval of Comvax 16 wks-5 days. 4th dose needed
	# updated on 2014-11-07 in version 1.6 - v1.6: changed dose 3 from not valid to valid due to recent clarifications.  Also changed test case name to reflect a 4th dose is required.
	Given a female Patient born on 2002-05-15
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2002-08-01        | COMVAX       | 51  | MSD |                   | Valid             |
		| 2002-09-20        | COMVAX       | 51  | MSD |                   | Valid             |
	When the Patient is assessed for HepB on 2002-11-16
	Then the assessment should recommend a dose for HepB on 2003-01-11
	And the series status should be Not Complete


@SeriesStatus_Complete @VaccineGroup_HepB @Gender_Female @ForecastTestType_NotRecommendedSeriesComplete
Scenario: [CTC 2013-0223] - Dose 1 to dose 3 interval of Comvax 16 wks-4 days=valid Hep B # 3.  Hep B series complete
	# added on 2013-01-01
	Given a female Patient born on 2006-07-07
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2006-10-18        | COMVAX       | 51  | MSD |                   | Valid             |
		| 2006-12-09        | COMVAX       | 51  | MSD |                   | Valid             |
	When the Patient is assessed for HepB on 2007-02-03
	Then the assessment should not recommend a dose for HepB
	And the series status should be Complete


@SeriesStatus_Complete @VaccineGroup_HepB @Gender_Female @ForecastTestType_NotRecommendedSeriesComplete
Scenario: [CTC 2013-0224] - Dose 1 to dose 3 interval of Comvax is 16 weeks.   Series complete for Hep B
	# added on 2013-01-01
	Given a female Patient born on 2006-08-08
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2006-10-31        | COMVAX       | 51  | MSD |                   | Valid             |
		| 2006-12-22        | COMVAX       | 51  | MSD |                   | Valid             |
	When the Patient is assessed for HepB on 2007-02-20
	Then the assessment should not recommend a dose for HepB
	And the series status should be Complete


@SeriesStatus_NotComplete @VaccineGroup_HepB @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0225] - Comvax given at birth
	# added on 2013-01-01
	Given a female Patient born on 2006-10-10
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2006-10-10        | COMVAX       | 51  | MSD |                   | Valid             |
	When the Patient is assessed for HepB on 2006-10-10
	Then the assessment should recommend a dose for HepB on 2006-11-10
	And the series status should be Not Complete


@SeriesStatus_Contraindicated @VaccineGroup_HepB @Gender_Female @ForecastTestType_NotRecommendedContraindication
Scenario: [CTC 2013-0226] - Anaphylaxis to previous dose of Hep B.  No further forecast
	# added on 2013-01-01
	Given a female Patient born on 2006-09-09
	And the following medical history is reported
	| Medical History Text | Medical History Code | Medical History System |
	|                      | VXC20                | CDCPHINVS              |
	And the following immunizations have been given
		| Date Administered | Vaccine Name    | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2006-11-11        | RECOMBIVAX-PEDS | 08  | MSD |                   | Valid             |
	When the Patient is assessed for HepB on 2006-11-11
	Then the assessment should not recommend a dose for HepB
	And the series status should be Contraindicated


@SeriesStatus_NotComplete @VaccineGroup_HepB @Gender_Female @ForecastTestType_RecommendedBasedOnMinimumIntervalFromInvalidDose
Scenario: [CTC 2013-0227] - Dose # 2 at 28-5 days
	# added on 2013-01-01
	Given a female Patient born on 2010-08-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name    | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2010-08-01        | RECOMBIVAX-PEDS | 08  | MSD |                   | Valid             |
		| 2010-08-24        | RECOMBIVAX-PEDS | 08  | MSD | Age: Too Young    | Not Valid         |
	When the Patient is assessed for HepB on 2010-08-24
	Then the assessment should recommend a dose for HepB on 2010-09-21
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_HepB @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0228] - Dose # 2 at 28-4 days
	# added on 2013-01-01
	Given a female Patient born on 2011-02-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name      | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2011-02-01        | Hep B Unspecified | 45  |     |                   | Valid             |
		| 2011-02-25        | RECOMBIVAX-PEDS   | 08  | MSD |                   | Valid             |
	When the Patient is assessed for HepB on 2011-02-25
	Then the assessment should recommend a dose for HepB on 2011-08-01
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_HepB @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0229] - Dose # 2 at 28 days
	# added on 2013-01-01
	Given a female Patient born on 2011-05-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name      | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2011-05-01        | Hep B Unspecified | 45  |     |                   | Valid             |
		| 2011-05-29        | Hep B Unspecified | 45  |     |                   | Valid             |
	When the Patient is assessed for HepB on 2011-05-29
	Then the assessment should recommend a dose for HepB on 2011-11-01
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_HepB @Gender_Female @ForecastTestType_RecommendedBasedOnMinimumIntervalFromInvalidDose
Scenario: [CTC 2013-0230] - Dose # 3 at age 24 weeks-5 days. 4th dose needed
	# updated on 2014-11-07 in version 1.6 - v1.6: changed dose 3 from not valid to valid due to recent clarifications.  Also changed test case name to reflect a 4th dose is required.
	Given a female Patient born on 2011-01-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name      | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2011-01-01        | Hep B Unspecified | 45  |     |                   | Valid             |
		| 2011-02-01        | Hep B Unspecified | 45  |     |                   | Valid             |
	When the Patient is assessed for HepB on 2011-06-13
	Then the assessment should recommend a dose for HepB on 2011-08-08
	And the series status should be Not Complete


@SeriesStatus_Complete @VaccineGroup_HepB @Gender_Female @ForecastTestType_NotRecommendedSeriesComplete
Scenario: [CTC 2013-0231] - Dose # 3 at age 24 weeks-4 days.  Series complete
	# added on 2013-01-01
	Given a female Patient born on 2010-12-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name    | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2010-12-01        | RECOMBIVAX-PEDS | 08  | MSD |                   | Valid             |
		| 2011-01-01        | RECOMBIVAX-PEDS | 08  | MSD |                   | Valid             |
	When the Patient is assessed for HepB on 2011-05-14
	Then the assessment should not recommend a dose for HepB
	And the series status should be Complete


@SeriesStatus_Complete @VaccineGroup_HepB @Gender_Female @ForecastTestType_NotRecommendedSeriesComplete
Scenario: [CTC 2013-0232] - Dose # 3 at 24 weeks.  Series complete
	# added on 2013-01-01
	Given a female Patient born on 2011-04-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name      | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2011-04-01        | RECOMBIVAX-PEDS   | 08  | MSD |                   | Valid             |
		| 2011-06-01        | Hep B Unspecified | 45  |     |                   | Valid             |
	When the Patient is assessed for HepB on 2011-09-16
	Then the assessment should not recommend a dose for HepB
	And the series status should be Complete


@SeriesStatus_NotComplete @VaccineGroup_HepB @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0233] - Newborn forecasting
	# added on 2013-01-01
	Given a female Patient born on 2012-04-01
	And no immunizations have been given
	When the Patient is assessed for HepB on 2012-04-01
	Then the assessment should recommend a dose for HepB on 2012-04-01
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_HepB @Gender_Female @ForecastTestType_RecommendedBasedOnMinimumIntervalFromPreviousDoseCatchUp
Scenario: [CTC 2013-0234] - # 2 Pediarix at 6 yrs 11.5 mo
	# added on 2013-01-01
	Given a female Patient born on 2005-01-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2007-12-16        | PEDIARIX     | 110 | SKB |                   | Valid             |
		| 2011-12-15        | PEDIARIX     | 110 | SKB |                   | Valid             |
	When the Patient is assessed for HepB on 2011-12-15
	Then the assessment should recommend a dose for HepB on 2012-02-09
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_HepB @Gender_Female @ForecastTestType_RecommendedBasedOnMinimumIntervalFromPreviousDoseCatchUp
Scenario: [CTC 2013-0235] - # 2 Pediarix at 7 yrs; # 1 at less than 12 mo
	# added on 2013-01-01
	Given a female Patient born on 2003-09-16
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2003-12-16        | PEDIARIX     | 110 | SKB |                   | Valid             |
		| 2010-09-16        | PEDIARIX     | 110 | SKB |                   | Valid             |
	When the Patient is assessed for HepB on 2010-09-16
	Then the assessment should recommend a dose for HepB on 2010-11-11
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_HepB @Gender_Female @ForecastTestType_RecommendedBasedOnMinimumIntervalFromPreviousDoseCatchUp
Scenario: [CTC 2013-0236] - # 2 Pediarix at 7 yrs; # 1 ≥ 12 mo
	# added on 2013-01-01
	Given a female Patient born on 2004-09-16
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2005-10-16        | PEDIARIX     | 110 | SKB |                   | Valid             |
		| 2011-09-16        | PEDIARIX     | 110 | SKB |                   | Valid             |
	When the Patient is assessed for HepB on 2011-09-16
	Then the assessment should recommend a dose for HepB on 2011-11-11
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_HepB @Gender_Female @ForecastTestType_RecommendedBasedOnMinimumIntervalFromPreviousDoseCatchUp
Scenario: [CTC 2013-0237] - # 1 and 2 Pediarix at ≥7 yrs  with 28 day interval
	# added on 2013-01-01
	Given a female Patient born on 2002-07-07
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2009-07-07        | PEDIARIX     | 110 | SKB |                   | Valid             |
		| 2009-08-04        | PEDIARIX     | 110 | SKB |                   | Valid             |
	When the Patient is assessed for HepB on 2009-08-04
	Then the assessment should recommend a dose for HepB on 2009-10-27
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_HepB @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0238] - # 3 Pediarix at 14 wks-5 days
	# added on 2013-01-01
	Given a female Patient born on 2005-06-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2005-07-09        | PEDIARIX     | 110 | SKB |                   | Valid             |
		| 2005-08-06        | PEDIARIX     | 110 | SKB |                   | Valid             |
	When the Patient is assessed for HepB on 2005-09-02
	Then the assessment should recommend a dose for HepB on 2005-12-01
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_HepB @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0239] - # 3 Pediarix at 14 wks-4 days
	# added on 2013-01-01
	Given a female Patient born on 2006-01-06
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2006-02-15        | PEDIARIX     | 110 | SKB |                   | Valid             |
		| 2006-03-15        | PEDIARIX     | 110 | SKB |                   | Valid             |
	When the Patient is assessed for HepB on 2006-04-10
	Then the assessment should recommend a dose for HepB on 2006-07-06
	And the series status should be Not Complete


@SeriesStatus_Complete @VaccineGroup_HepB @Gender_Female @ForecastTestType_NotRecommendedSeriesComplete
Scenario: [CTC 2013-0241] - # 3 Pediarix at 24 weeks-4 days. Valid for dose 3
	# added on 2013-01-01
	Given a female Patient born on 2011-05-13
	And the following immunizations have been given
		| Date Administered | Vaccine Name      | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2011-06-24        | Hep B Unspecified | 45  |     |                   | Valid             |
		| 2011-08-24        | Hep B Unspecified | 45  |     |                   | Valid             |
	When the Patient is assessed for HepB on 2011-10-24
	Then the assessment should not recommend a dose for HepB
	And the series status should be Complete


@SeriesStatus_Complete @VaccineGroup_HepB @Gender_Female @ForecastTestType_NotRecommendedSeriesComplete
Scenario: [CTC 2013-0243] - # 4 Pediarix at 1 yr -5 days
	# added on 2013-01-01
	Given a female Patient born on 2010-04-04
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2010-06-04        | PEDIARIX     | 110 | SKB |                   | Valid             |
		| 2010-08-04        | PEDIARIX     | 110 | SKB |                   | Valid             |
	When the Patient is assessed for HepB on 2011-03-30
	Then the assessment should not recommend a dose for HepB
	And the series status should be Complete


@SeriesStatus_NotComplete @VaccineGroup_HepB @Gender_Female @ForecastTestType_RecommendedBasedOnMinimumIntervalFromPreviousDoseCatchUp
Scenario: [CTC 2013-0244] - # 1 Pediarix at 6 wks-5 days
	# added on 2013-01-01
	Given a female Patient born on 2011-05-06
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2011-06-12        | PEDIARIX     | 110 | SKB |                   | Valid             |
	When the Patient is assessed for HepB on 2011-06-12
	Then the assessment should recommend a dose for HepB on 2011-07-10
	And the series status should be Not Complete


@SeriesStatus_Complete @VaccineGroup_HepB @Gender_Female @ForecastTestType_NotRecommendedSeriesComplete
Scenario: [CTC 2013-0245] - # 4 Pediarix at 1 yr -4 days
	# added on 2013-01-01
	Given a female Patient born on 2005-06-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2005-08-01        | PEDIARIX     | 110 | SKB |                   | Valid             |
		| 2005-11-01        | PEDIARIX     | 110 | SKB |                   | Valid             |
	When the Patient is assessed for HepB on 2006-05-28
	Then the assessment should not recommend a dose for HepB
	And the series status should be Complete


@SeriesStatus_Complete @VaccineGroup_HepB @Gender_Female @ForecastTestType_NotRecommendedSeriesComplete
Scenario: [CTC 2013-0246] - # 4 Pediarix at 3 yrs 11.5 mo
	# added on 2013-01-01
	Given a female Patient born on 2008-02-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2008-04-01        | PEDIARIX     | 110 | SKB |                   | Valid             |
		| 2008-07-01        | PEDIARIX     | 110 | SKB |                   | Valid             |
	When the Patient is assessed for HepB on 2012-01-15
	Then the assessment should not recommend a dose for HepB
	And the series status should be Complete


@SeriesStatus_Complete @VaccineGroup_HepB @Gender_Female @ForecastTestType_NotRecommendedSeriesComplete
Scenario: [CTC 2013-0247] - # 4 Pediarix at 4 yrs
	# added on 2013-01-01
	Given a female Patient born on 2006-05-06
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2006-09-09        | PEDIARIX     | 110 | SKB |                   | Valid             |
		| 2007-03-03        | PEDIARIX     | 110 | SKB |                   | Valid             |
	When the Patient is assessed for HepB on 2010-05-06
	Then the assessment should not recommend a dose for HepB
	And the series status should be Complete


@SeriesStatus_Complete @VaccineGroup_HepB @Gender_Female @ForecastTestType_NotRecommendedSeriesComplete
Scenario: [CTC 2013-0248] - # 5 Pediarix at 4 yrs -5 days
	# added on 2013-01-01
	Given a female Patient born on 2006-07-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2006-09-01        | PEDIARIX     | 110 | SKB |                   | Valid             |
		| 2006-10-01        | PEDIARIX     | 110 | SKB |                   | Valid             |
	When the Patient is assessed for HepB on 2010-06-26
	Then the assessment should not recommend a dose for HepB
	And the series status should be Complete


@SeriesStatus_Complete @VaccineGroup_HepB @Gender_Female @ForecastTestType_NotRecommendedSeriesComplete
Scenario: [CTC 2013-0249] - # 5 Pediarix at 4 yrs -4 days
	# added on 2013-01-01
	Given a female Patient born on 2006-07-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2006-09-01        | PEDIARIX     | 110 | SKB |                   | Valid             |
		| 2006-10-01        | PEDIARIX     | 110 | SKB |                   | Valid             |
	When the Patient is assessed for HepB on 2010-06-27
	Then the assessment should not recommend a dose for HepB
	And the series status should be Complete


@SeriesStatus_Complete @VaccineGroup_HepB @Gender_Female @ForecastTestType_NotRecommendedSeriesComplete
Scenario: [CTC 2013-0250] - # 5 Pediarix at 6 yrs 11.5 mo
	# added on 2013-01-01
	Given a female Patient born on 2005-04-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2005-06-01        | PEDIARIX     | 110 | SKB |                   | Valid             |
		| 2005-08-01        | PEDIARIX     | 110 | SKB |                   | Valid             |
	When the Patient is assessed for HepB on 2012-03-15
	Then the assessment should not recommend a dose for HepB
	And the series status should be Complete


@SeriesStatus_Complete @VaccineGroup_HepB @Gender_Female @ForecastTestType_NotRecommendedSeriesComplete
Scenario: [CTC 2013-0251] - # 5 Pediarix at 7 yrs
	# added on 2013-01-01
	Given a female Patient born on 2005-05-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2005-08-01        | PEDIARIX     | 110 | SKB |                   | Valid             |
		| 2005-11-01        | PEDIARIX     | 110 | SKB |                   | Valid             |
	When the Patient is assessed for HepB on 2012-05-01
	Then the assessment should not recommend a dose for HepB
	And the series status should be Complete


@SeriesStatus_NotComplete @VaccineGroup_HepB @Gender_Female @ForecastTestType_RecommendedBasedOnMinimumIntervalFromPreviousDoseCatchUp
Scenario: [CTC 2013-0255] - # 1 Pediarix at 6 wks-4 days
	# added on 2013-01-01
	Given a female Patient born on 2006-04-04
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2006-05-12        | PEDIARIX     | 110 | SKB |                   | Valid             |
	When the Patient is assessed for HepB on 2006-05-12
	Then the assessment should recommend a dose for HepB on 2006-06-09
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_HepB @Gender_Female @ForecastTestType_RecommendedBasedOnMinimumIntervalFromInvalidDose
Scenario: [CTC 2013-0256] - dose 1 to 2 Pediarix, interval 28-5 days
	# added on 2013-01-01
	Given a female Patient born on 2010-11-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason   | Evaluation Status |
		| 2011-01-03        | PEDIARIX     | 110 | SKB |                     | Valid             |
		| 2011-01-26        | PEDIARIX     | 110 | SKB | Interval: Too Short | Not Valid         |
	When the Patient is assessed for HepB on 2011-01-26
	Then the assessment should recommend a dose for HepB on 2011-02-23
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_HepB @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0257] - dose 1 to 2 Pediarix, interval 28-4 days
	# added on 2013-01-01
	Given a female Patient born on 2006-02-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2006-04-01        | PEDIARIX     | 110 | SKB |                   | Valid             |
		| 2006-04-25        | PEDIARIX     | 110 | SKB |                   | Valid             |
	When the Patient is assessed for HepB on 2006-04-25
	Then the assessment should recommend a dose for HepB on 2006-08-01
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_HepB @Gender_Female @ForecastTestType_RecommendedBasedOnMinimumIntervalFromInvalidDose
Scenario: [CTC 2013-0258] - dose 2 to 3 Pediarix, interval 8 weeks-5 days. 4th dose needed
	# updated on 2014-11-07 in version 1.6 - v1.6: changed dose 3 from not valid to valid due to recent clarifications.  Also changed test case name to reflect a 4th dose is required.
	Given a female Patient born on 2011-04-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2011-05-25        | PEDIARIX     | 110 | SKB |                   | Valid             |
		| 2011-07-27        | PEDIARIX     | 110 | SKB |                   | Valid             |
	When the Patient is assessed for HepB on 2011-09-16
	Then the assessment should recommend a dose for HepB on 2011-11-11
	And the series status should be Not Complete


@SeriesStatus_Complete @VaccineGroup_HepB @Gender_Female @ForecastTestType_NotRecommendedSeriesComplete
Scenario: [CTC 2013-0259] - dose 2 to 3 Pediarix, interval 8 weeks-4 days
	# added on 2013-01-01
	Given a female Patient born on 2005-12-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2006-01-25        | PEDIARIX     | 110 | SKB |                   | Valid             |
		| 2006-03-27        | PEDIARIX     | 110 | SKB |                   | Valid             |
	When the Patient is assessed for HepB on 2006-05-18
	Then the assessment should not recommend a dose for HepB
	And the series status should be Complete


@SeriesStatus_Complete @VaccineGroup_HepB @Gender_Female @ForecastTestType_NotRecommendedSeriesComplete
Scenario: [CTC 2013-0260] - dose 3 to 4 Pediarix, interval 6m-5 days
	# added on 2013-01-01
	Given a female Patient born on 2009-08-09
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2009-10-09        | PEDIARIX     | 110 | SKB |                   | Valid             |
		| 2009-12-09        | PEDIARIX     | 110 | SKB |                   | Valid             |
	When the Patient is assessed for HepB on 2010-10-04
	Then the assessment should not recommend a dose for HepB
	And the series status should be Complete


@SeriesStatus_Complete @VaccineGroup_HepB @Gender_Female @ForecastTestType_NotRecommendedSeriesComplete
Scenario: [CTC 2013-0261] - dose 3 to 4 Pediarix, interval 6m-4 days
	# added on 2013-01-01
	Given a female Patient born on 2009-08-09
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2009-10-09        | PEDIARIX     | 110 | SKB |                   | Valid             |
		| 2009-12-09        | PEDIARIX     | 110 | SKB |                   | Valid             |
	When the Patient is assessed for HepB on 2010-10-05
	Then the assessment should not recommend a dose for HepB
	And the series status should be Complete


@SeriesStatus_Complete @VaccineGroup_HepB @Gender_Female @ForecastTestType_NotRecommendedSeriesComplete
Scenario: [CTC 2013-0262] - dose 3 to 4 Pediarix, interval 4 mo-1 day
	# added on 2013-01-01
	Given a female Patient born on 2010-04-04
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2010-06-04        | PEDIARIX     | 110 | SKB |                   | Valid             |
		| 2010-08-04        | PEDIARIX     | 110 | SKB |                   | Valid             |
	When the Patient is assessed for HepB on 2011-06-03
	Then the assessment should not recommend a dose for HepB
	And the series status should be Complete


@SeriesStatus_Complete @VaccineGroup_HepB @Gender_Female @ForecastTestType_NotRecommendedSeriesComplete
Scenario: [CTC 2013-0263] - dose 3 to 4 Pediarix, interval 4 mo
	# added on 2013-01-01
	Given a female Patient born on 2010-04-04
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2010-06-04        | PEDIARIX     | 110 | SKB |                   | Valid             |
		| 2010-08-04        | PEDIARIX     | 110 | SKB |                   | Valid             |
	When the Patient is assessed for HepB on 2011-06-04
	Then the assessment should not recommend a dose for HepB
	And the series status should be Complete


@SeriesStatus_NotComplete @VaccineGroup_HepB @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0264] - invalid dose 1-2 interval in midst of others
	# added on 2013-01-01
	Given a female Patient born on 2009-02-11
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason   | Evaluation Status |
		| 2009-04-11        | PEDIARIX     | 110 | SKB |                     | Valid             |
		| 2009-04-30        | PEDIARIX     | 110 | SKB | Interval: Too Short | Not Valid         |
	When the Patient is assessed for HepB on 2009-06-11
	Then the assessment should recommend a dose for HepB on 2009-08-11
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_HepB @Gender_Female @ForecastTestType_RecommendedBasedOnMinimumIntervalFromPreviousDoseCatchUp
Scenario: [CTC 2013-0266] - # 1 Pediarix at 6 wks
	# added on 2013-01-01
	Given a female Patient born on 2011-11-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2011-12-13        | PEDIARIX     | 110 | SKB |                   | Valid             |
	When the Patient is assessed for HepB on 2011-12-13
	Then the assessment should recommend a dose for HepB on 2012-01-10
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_HepB @Gender_Female @ForecastTestType_RecommendedBasedOnMinimumIntervalFromPreviousDoseCatchUp
Scenario: [CTC 2013-0267] - # 1 Pediarix at 6 yrs 11.5 mo
	# added on 2013-01-01
	Given a female Patient born on 2005-04-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2012-03-16        | PEDIARIX     | 110 | SKB |                   | Valid             |
	When the Patient is assessed for HepB on 2012-03-16
	Then the assessment should recommend a dose for HepB on 2012-04-13
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_HepB @Gender_Female @ForecastTestType_RecommendedBasedOnMinimumIntervalFromPreviousDoseCatchUp
Scenario: [CTC 2013-0268] - # 1 Pediarix at 7 yrs
	# added on 2013-01-01
	Given a female Patient born on 2005-02-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2012-02-01        | PEDIARIX     | 110 | SKB |                   | Valid             |
	When the Patient is assessed for HepB on 2012-02-01
	Then the assessment should recommend a dose for HepB on 2012-02-29
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_HepB @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0269] - # 2 Pediarix at 10 wks-5 days
	# added on 2013-01-01
	Given a female Patient born on 2011-10-10
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2011-11-17        | PEDIARIX     | 110 | SKB |                   | Valid             |
		| 2011-12-14        | PEDIARIX     | 110 | SKB |                   | Valid             |
	When the Patient is assessed for HepB on 2011-12-14
	Then the assessment should recommend a dose for HepB on 2012-04-10
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_HepB @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0270] - # 2 Pediarix at 10 wks-4 days
	# added on 2013-01-01
	Given a female Patient born on 2011-02-26
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2011-03-26        | PEDIARIX     | 110 | SKB |                   | Valid             |
		| 2011-05-03        | PEDIARIX     | 110 | SKB |                   | Valid             |
	When the Patient is assessed for HepB on 2011-05-03
	Then the assessment should recommend a dose for HepB on 2011-08-26
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_HepB @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0271] - # 2 Pediarix at 10 wks
	# added on 2013-01-01
	Given a female Patient born on 2011-02-26
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2011-03-26        | PEDIARIX     | 110 | SKB |                   | Valid             |
		| 2011-05-07        | PEDIARIX     | 110 | SKB |                   | Valid             |
	When the Patient is assessed for HepB on 2011-05-07
	Then the assessment should recommend a dose for HepB on 2011-08-26
	And the series status should be Not Complete

