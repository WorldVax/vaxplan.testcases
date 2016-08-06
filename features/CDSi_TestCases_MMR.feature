Feature: MMR CDSi test cases

@SeriesStatus_NotComplete @VaccineGroup_MMR @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0523] - #1 at 15 months
	# updated on 2013-07-08 in version 1.1 - Renamed to better reflect test case.
	Given a female Patient born on 2000-03-14
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2001-06-14        | M-M-R II     | 03  | MSD |                   | Valid             |
	When the Patient is assessed for MMR on 2001-06-14
	Then the assessment should recommend a dose for MMR on 2004-03-14
	And the series status should be Not Complete


@SeriesStatus_Complete @VaccineGroup_MMR @Gender_Female @ForecastTestType_NotRecommendedSeriesComplete
Scenario: [CTC 2013-0524] - #2 at 4 years
	# updated on 2013-07-08 in version 1.1 - Renamed to better reflect test case.
	Given a female Patient born on 2000-03-14
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2001-06-14        | M-M-R II     | 03  | MSD |                   | Valid             |
		| 2004-03-14        | M-M-R II     | 03  | MSD |                   | Valid             |
	When the Patient is assessed for MMR on 2004-03-14
	Then the assessment should not recommend a dose for MMR
	And the series status should be Complete


@SeriesStatus_NotComplete @VaccineGroup_MMR @Gender_Female @ForecastTestType_RecommendedBasedOnMinimumIntervalFromPreviousDoseCatchUp
Scenario: [CTC 2013-0525] - #1 at 7 years
	# updated on 2013-07-08 in version 1.1 - Renamed to better reflect test case.
	Given a female Patient born on 2000-03-14
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2007-03-14        | M-M-R II     | 03  | MSD |                   | Valid             |
	When the Patient is assessed for MMR on 2007-03-14
	Then the assessment should recommend a dose for MMR on 2007-04-11
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_MMR @Gender_Female @ForecastTestType_RecommendedBasedOnMinimumIntervalFromLiveVirusVaccine
Scenario: [CTC 2013-0528] - 5 single antigen doses: 1 Measles; 2 Mumps; 2 Rubella
	# updated on 2013-07-08 in version 1.1 - Renamed to better reflect test case.
	Given a female Patient born on 1999-03-05
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2000-03-05        | MUMPSVAX     | 07  | MSD |                   | Valid             |
		| 2000-04-02        | MERUVAX II   | 06  | MSD |                   | Valid             |
	When the Patient is assessed for MMR on 2004-05-02
	Then the assessment should recommend a dose for MMR on 2004-05-30
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_MMR @Gender_Female @ForecastTestType_RecommendedBasedOnMinimumIntervalFromLiveVirusVaccine
Scenario: [CTC 2013-0530] - 4 single antigen doses: 1 Measles; 2 Mumps; 1 Rubella
	# updated on 2013-07-08 in version 1.1 - Renamed to better reflect test case.
	Given a female Patient born on 1999-03-05
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2000-03-05        | MUMPSVAX     | 07  | MSD |                   | Valid             |
		| 2000-04-02        | MERUVAX II   | 06  | MSD |                   | Valid             |
	When the Patient is assessed for MMR on 2004-03-05
	Then the assessment should recommend a dose for MMR on 2004-04-02
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_MMR @Gender_Female @ForecastTestType_RecommendedBasedOnMinimumIntervalFromPreviousDoseCatchUp
Scenario: [CTC 2013-0531] - 1 single antigen dose at 12M: 1 Measles
	# updated on 2013-12-04 in version 1.4 - Renamed to better reflect test case. V1.4: Updated Earliest and Recommended date to adjust dates out 3 days.  Previous recommendation was 4 weeks from single dose administration, but this would result in the dose being forecasted too early for the second
	Given a female Patient born on 2000-03-05
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2001-03-05        | ATTENUVAX    | 05  | MSD |                   | Valid             |
	When the Patient is assessed for MMR on 2001-03-05
	Then the assessment should recommend a dose for MMR on 2001-04-05
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_MMR @Gender_Female @ForecastTestType_RecommendedBasedOnMinimumIntervalFromLiveVirusVaccine
Scenario: [CTC 2013-0534] - 2 single antigen doses: 1 Measles; 1 Mumps
	# updated on 2013-07-08 in version 1.1 - Renamed to better reflect test case.
	Given a female Patient born on 2000-03-05
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2001-03-05        | ATTENUVAX    | 05  | MSD |                   | Valid             |
		| 2001-04-13        | MUMPSVAX     | 07  | MSD |                   | Valid             |
	When the Patient is assessed for MMR on 2001-04-13
	Then the assessment should recommend a dose for MMR on 2001-05-11
	And the series status should be Not Complete


@SeriesStatus_Complete @VaccineGroup_MMR @Gender_Female @ForecastTestType_NotRecommendedSeriesComplete
Scenario: [CTC 2013-0535] - 7 single antigen doses: 2 Measles; 3 Mumps; 2 Rubella
	# updated on 2013-07-08 in version 1.1 - Renamed to better reflect test case.
	Given a female Patient born on 1999-03-05
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2000-03-05        | MUMPSVAX     | 07  | MSD |                   | Valid             |
		| 2000-04-02        | MERUVAX II   | 06  | MSD |                   | Valid             |
	When the Patient is assessed for MMR on 2004-06-04
	Then the assessment should not recommend a dose for MMR
	And the series status should be Complete


@SeriesStatus_NotComplete @VaccineGroup_MMR @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0536] - 3 single antigen doses: 1 Measles; 1 Mumps; 1 Rubella
	# updated on 2013-07-08 in version 1.1 - Renamed to better reflect test case.
	Given a female Patient born on 2000-03-05
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2001-03-05        | MUMPSVAX     | 07  | MSD |                   | Valid             |
		| 2001-04-05        | MERUVAX II   | 06  | MSD |                   | Valid             |
	When the Patient is assessed for MMR on 2001-06-28
	Then the assessment should recommend a dose for MMR on 2004-03-05
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_MMR @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0537] - 3 single antigen doses on same day: 1 Measles; 1 Mumps; 1 Rubella
	# updated on 2013-12-06 in version 1.4 - V1.1: Renamed to better reflect test case. V1.4: Updated Earliest date to reflect the earliest date of 13 months and not 12 months + 4 weeks to align with ACIP.
	Given a female Patient born on 1999-03-05
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2000-03-05        | MUMPSVAX     | 07  | MSD |                   | Valid             |
		| 2000-03-05        | MERUVAX II   | 06  | MSD |                   | Valid             |
	When the Patient is assessed for MMR on 2000-03-05
	Then the assessment should recommend a dose for MMR on 2003-03-05
	And the series status should be Not Complete


@SeriesStatus_Complete @VaccineGroup_MMR @Gender_Female @ForecastTestType_NotRecommendedSeriesComplete
Scenario: [CTC 2013-0538] - 6 single antigen doses: 2 Measles; 2 Mumps; 2 Rubella
	# updated on 2013-07-08 in version 1.1 - Renamed to better reflect test case.
	Given a female Patient born on 1999-03-05
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2000-03-05        | MUMPSVAX     | 07  | MSD |                   | Valid             |
		| 2000-04-02        | MERUVAX II   | 06  | MSD |                   | Valid             |
	When the Patient is assessed for MMR on 2004-04-30
	Then the assessment should not recommend a dose for MMR
	And the series status should be Complete


@SeriesStatus_NotComplete @VaccineGroup_MMR @Gender_Female @ForecastTestType_RecommendedBasedOnMinimumIntervalFromLiveVirusVaccine
Scenario: [CTC 2013-0539] - 3 single antigen doses: 2 Measles; 1 Rubella
	# updated on 2013-07-08 in version 1.1 - Renamed to better reflect test case.
	Given a female Patient born on 2000-03-05
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2001-04-13        | ATTENUVAX    | 05  | MSD |                   | Valid             |
		| 2001-09-30        | MERUVAX II   | 06  | MSD |                   | Valid             |
	When the Patient is assessed for MMR on 2002-02-17
	Then the assessment should recommend a dose for MMR on 2002-03-17
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_MMR @Gender_Female @ForecastTestType_RecommendedBasedOnMinimumIntervalFromLiveVirusVaccine
Scenario: [CTC 2013-0540] - MMR # 1 at 12 months-5 days
	# added on 2013-01-01
	Given a female Patient born on 2000-03-14
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2001-03-09        | M-M-R II     | 03  | MSD | Age: Too Young    | Not Valid         |
	When the Patient is assessed for MMR on 2001-03-09
	Then the assessment should recommend a dose for MMR on 2001-04-06
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_MMR @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0541] - MMR # 1 at 12 months-4 days
	# added on 2013-01-01
	Given a female Patient born on 2000-03-14
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2001-03-10        | M-M-R II     | 03  | MSD |                   | Valid             |
	When the Patient is assessed for MMR on 2001-03-10
	Then the assessment should recommend a dose for MMR on 2004-03-14
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_MMR @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0542] - MMR # 1 at 12 months
	# added on 2013-01-01
	Given a female Patient born on 2000-03-14
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2001-03-14        | M-M-R II     | 03  | MSD |                   | Valid             |
	When the Patient is assessed for MMR on 2001-03-14
	Then the assessment should recommend a dose for MMR on 2004-03-14
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_MMR @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0543] - Newborn forecasting
	# added on 2013-01-01
	Given a female Patient born on 2012-02-01
	And no immunizations have been given
	When the Patient is assessed for MMR on 2012-02-01
	Then the assessment should recommend a dose for MMR on 2013-02-01
	And the series status should be Not Complete


@SeriesStatus_Complete @VaccineGroup_MMR @Gender_Female @ForecastTestType_NotRecommendedSeriesComplete
Scenario: [CTC 2013-0544] - Dose 1 to dose 2 interval 28 days
	# added on 2013-01-01
	Given a female Patient born on 2004-05-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2006-05-01        | M-M-R II     | 03  | MSD |                   | Valid             |
		| 2006-05-29        | M-M-R II     | 03  | MSD |                   | Valid             |
	When the Patient is assessed for MMR on 2006-05-29
	Then the assessment should not recommend a dose for MMR
	And the series status should be Complete


@SeriesStatus_NotComplete @VaccineGroup_MMR @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0545] - MMR and VZ given at age 12 months
	# added on 2013-01-01
	Given a female Patient born on 2004-08-08
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2005-08-08        | M-M-R II     | 03  | MSD |                   | Valid             |
		| 2005-08-08        | VARIVAX      | 21  | MSD |                   | Valid             |
	When the Patient is assessed for MMR on 2005-08-08
	Then the assessment should recommend a dose for MMR on 2008-08-08
	And the series status should be Not Complete


@SeriesStatus_Complete @VaccineGroup_MMR @Gender_Female @ForecastTestType_NotRecommendedSeriesComplete
Scenario: [CTC 2013-0546] - Doses 1 and 2 of MMR and VZ at ages 12 and 13 months
	# added on 2013-01-01
	Given a female Patient born on 2010-06-14
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2011-06-14        | M-M-R II     | 03  | MSD |                   | Valid             |
		| 2011-06-14        | VARIVAX      | 21  | MSD |                   | Valid             |
	When the Patient is assessed for MMR on 2011-07-14
	Then the assessment should not recommend a dose for MMR
	And the series status should be Complete


@SeriesStatus_NotComplete @VaccineGroup_MMR @Gender_Female @ForecastTestType_RecommendedBasedOnMinimumIntervalFromLiveVirusVaccine
Scenario: [CTC 2013-0547] - VZ to MMR interval 28-1 day = invalid MMR
	# added on 2013-01-01
	Given a female Patient born on 2010-12-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason   | Evaluation Status |
		| 2011-12-03        | VARIVAX      | 21  | MSD |                     | Valid             |
		| 2011-12-30        | M-M-R II     | 03  | MSD | Live Virus Conflict | Not Valid         |
	When the Patient is assessed for MMR on 2011-12-30
	Then the assessment should recommend a dose for MMR on 2012-01-27
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_MMR @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0548] - VZ given at age 12 mo; MMR at age 12 mo+28 days
	# added on 2013-01-01
	Given a female Patient born on 2009-10-13
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2010-10-13        | VARIVAX      | 21  | MSD |                   | Valid             |
		| 2010-11-10        | M-M-R II     | 03  | MSD |                   | Valid             |
	When the Patient is assessed for MMR on 2010-11-10
	Then the assessment should recommend a dose for MMR on 2013-10-13
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_MMR @Gender_Female @ForecastTestType_RecommendedBasedOnMinimumIntervalFromLiveVirusVaccine
Scenario: [CTC 2013-0549] - Dose 1 MMRV at 12 m-5 days
	# added on 2013-01-01
	Given a female Patient born on 2009-11-10
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2010-11-05        | PROQUAD      | 94  | MSD | Age: Too Young    | Not Valid         |
	When the Patient is assessed for MMR on 2010-11-05
	Then the assessment should recommend a dose for MMR on 2010-12-03
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_MMR @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0550] - Dose 1 MMRV at 12 m-4 days
	# added on 2013-01-01
	Given a female Patient born on 2005-07-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2006-06-27        | PROQUAD      | 94  | MSD |                   | Valid             |
	When the Patient is assessed for MMR on 2006-06-27
	Then the assessment should recommend a dose for MMR on 2009-07-01
	And the series status should be Not Complete


@SeriesStatus_Complete @VaccineGroup_MMR @Gender_Female @ForecastTestType_NotRecommendedSeriesComplete
Scenario: [CTC 2013-0551] - Dose 1 to dose 2 MMRV interval 28 days age < 15 months old= valid MMR
	# added on 2013-01-01
	Given a female Patient born on 2004-05-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2005-05-01        | PROQUAD      | 94  | MSD |                   | Valid             |
		| 2005-05-29        | PROQUAD      | 94  | MSD |                   | Valid             |
	When the Patient is assessed for MMR on 2005-05-29
	Then the assessment should not recommend a dose for MMR
	And the series status should be Complete


@SeriesStatus_Complete @VaccineGroup_MMR @Gender_Female @ForecastTestType_NotRecommendedSeriesComplete
Scenario: [CTC 2013-0552] - Dose 1 to 2 MMRV interval 28 days in child ≥ 15 months old=valid MMR
	# added on 2013-01-01
	Given a female Patient born on 2004-05-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2007-05-01        | PROQUAD      | 94  | MSD |                   | Valid             |
		| 2007-05-29        | PROQUAD      | 94  | MSD |                   | Valid             |
	When the Patient is assessed for MMR on 2007-05-29
	Then the assessment should not recommend a dose for MMR
	And the series status should be Complete


@SeriesStatus_NotComplete @VaccineGroup_MMR @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0554] - Dose 1 to 2 MMRV interval 28-4 days=neither MMR nor VZ valid as second dose
	# updated on 2013-07-08 in version 1.1 - Shifted dates of administration and forecast to strictly test the Live Virus conflict only.  Previously it was testing a couple conditions
	Given a female Patient born on 2004-09-06
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason   | Evaluation Status |
		| 2005-10-06        | PROQUAD      | 94  | MSD |                     | Valid             |
		| 2005-10-30        | PROQUAD      | 94  | MSD | Live Virus Conflict | Not Valid         |
	When the Patient is assessed for MMR on 2005-10-30
	Then the assessment should recommend a dose for MMR on 2008-09-06
	And the series status should be Not Complete


@SeriesStatus_Complete @VaccineGroup_MMR @Gender_Female @ForecastTestType_NotRecommendedSeriesComplete
Scenario: [CTC 2013-0555] - MMR to MMRV interval 28 days=valid MMR # 2
	# added on 2013-01-01
	Given a female Patient born on 2005-02-02
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2006-02-02        | M-M-R II     | 03  | MSD |                   | Valid             |
		| 2006-03-02        | PROQUAD      | 94  | MSD |                   | Valid             |
	When the Patient is assessed for MMR on 2006-03-02
	Then the assessment should not recommend a dose for MMR
	And the series status should be Complete


@SeriesStatus_NotComplete @VaccineGroup_MMR @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0556] - MMR to MMRV interval 24 days=not valid MMR # 2
	# updated on 2013-12-04 in version 1.4 - V1.4: Final Guidance for MMRV live virus spacing is 28 days.  Grace period can't be applied.
	Given a female Patient born on 2005-01-02
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason   | Evaluation Status |
		| 2006-02-02        | M-M-R II     | 03  | MSD |                     | Valid             |
		| 2006-02-26        | PROQUAD      | 94  | MSD | Live Virus Conflict | Not Valid         |
	When the Patient is assessed for MMR on 2006-02-26
	Then the assessment should recommend a dose for MMR on 2009-01-02
	And the series status should be Not Complete


@SeriesStatus_Complete @VaccineGroup_MMR @Gender_Female @ForecastTestType_NotRecommendedSeriesComplete
Scenario: [CTC 2013-0557] - MMRV to MMR interval 28 days=valid MMR dose 2
	# added on 2013-01-01
	Given a female Patient born on 2005-02-02
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2006-03-02        | PROQUAD      | 94  | MSD |                   | Valid             |
		| 2006-03-30        | M-M-R II     | 03  | MSD |                   | Valid             |
	When the Patient is assessed for MMR on 2006-03-30
	Then the assessment should not recommend a dose for MMR
	And the series status should be Complete


@SeriesStatus_NotComplete @VaccineGroup_MMR @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0558] - Dose 1 to dose 2 interval 4 wks between VZ and MMRV in any age child=valid MMR
	# added on 2013-01-01
	Given a female Patient born on 2005-05-22
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2006-06-01        | VARIVAX      | 21  | MSD |                   | Valid             |
		| 2006-06-29        | PROQUAD      | 94  | MSD |                   | Valid             |
	When the Patient is assessed for MMR on 2006-06-29
	Then the assessment should recommend a dose for MMR on 2009-05-22
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_MMR @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0559] - 28 day interval between invalid VZ and subsequent MMRV=valid MMR and VZ
	# added on 2013-01-01
	Given a female Patient born on 2005-05-22
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2006-05-17        | VARIVAX      | 21  | MSD | Age: Too Young    | Not Valid         |
		| 2006-06-14        | PROQUAD      | 94  | MSD |                   | Valid             |
	When the Patient is assessed for MMR on 2006-06-14
	Then the assessment should recommend a dose for MMR on 2009-05-22
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_MMR @Gender_Female @ForecastTestType_RecommendedBasedOnMinimumIntervalFromLiveVirusVaccine
Scenario: [CTC 2013-0562] - Interval of < 24 days between an invalid MMR and a subsequent MMRV=no valid MMR's
	# added on 2013-01-01
	Given a female Patient born on 2005-07-16
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason   | Evaluation Status |
		| 2006-07-11        | M-M-R II     | 03  | MSD | Age: Too Young      | Not Valid         |
		| 2006-08-03        | PROQUAD      | 94  | MSD | Live Virus Conflict | Not Valid         |
	When the Patient is assessed for MMR on 2006-08-03
	Then the assessment should recommend a dose for MMR on 2006-08-31
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_MMR @Gender_Female @ForecastTestType_RecommendedBasedOnMinimumIntervalFromLiveVirusVaccine
Scenario: [CTC 2013-0563] - Interval of < 24 days between an invalid VZ and a subsequent MMRV=no valid MMR or VZ
	# added on 2013-01-01
	Given a female Patient born on 2005-07-16
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason   | Evaluation Status |
		| 2006-07-11        | VARIVAX      | 21  | MSD | Age: Too Young      | Not Valid         |
		| 2006-08-03        | PROQUAD      | 94  | MSD | Live Virus Conflict | Not Valid         |
	When the Patient is assessed for MMR on 2006-08-03
	Then the assessment should recommend a dose for MMR on 2006-08-31
	And the series status should be Not Complete


@SeriesStatus_Complete @VaccineGroup_MMR @Gender_Female @ForecastTestType_NotRecommendedSeriesComplete
Scenario: [CTC 2013-0565] - Correctly administered single antigen M, M and R followed by MMR=series complete
	# added on 2013-01-01
	Given a female Patient born on 2004-09-09
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2005-11-15        | MUMPSVAX     | 07  | MSD |                   | Valid             |
		| 2006-01-15        | MERUVAX II   | 06  | MSD |                   | Valid             |
	When the Patient is assessed for MMR on 2007-09-15
	Then the assessment should not recommend a dose for MMR
	And the series status should be Complete


@SeriesStatus_NotComplete @VaccineGroup_MMR @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0566] - Hx of measles. Child  still needs MMR
	# added on 2013-01-01
	Given a female Patient born on 2010-04-07
	And the following medical history is reported
	| Medical History Text | Medical History Code | Medical History System |
	|                      | 14189004             | SCT                    |
	And no immunizations have been given
	When the Patient is assessed for MMR on 2011-01-01
	Then the assessment should recommend a dose for MMR on 2011-04-07
	And the series status should be Not Complete


@SeriesStatus_Contraindicated @VaccineGroup_MMR @Gender_Female @ForecastTestType_NotRecommendedContraindication
Scenario: [CTC 2013-0567] - Anaphylactic reaction to dose 1 of MMR.  No forecast for additional dose
	# added on 2013-01-01
	Given a female Patient born on 2010-08-13
	And the following medical history is reported
	| Medical History Text | Medical History Code | Medical History System |
	|                      | VXC20                | CDCPHINVS              |
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2011-09-02        | M-M-R II     | 03  | MSD |                   | Valid             |
	When the Patient is assessed for MMR on 2011-09-02
	Then the assessment should not recommend a dose for MMR
	And the series status should be Contraindicated


@SeriesStatus_Contraindicated @VaccineGroup_MMR @Gender_Female @ForecastTestType_NotRecommendedContraindication
Scenario: [CTC 2013-0568] - Diagnosis of severe immunodeficiency.  No forecast for MMR
	# added on 2013-01-01
	Given a female Patient born on 2011-09-10
	And the following medical history is reported
	| Medical History Text | Medical History Code | Medical History System |
	|                      | VXC27                | CDCPHINVS              |
	And no immunizations have been given
	When the Patient is assessed for MMR on 2011-09-10
	Then the assessment should not recommend a dose for MMR
	And the series status should be Contraindicated


@SeriesStatus_NotComplete @VaccineGroup_MMR @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0570] - Dose 2 at age 13 mo -5 days
	# added on 2013-01-01
	Given a female Patient born on 2007-08-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2008-07-29        | M-M-R II     | 03  | MSD |                   | Valid             |
		| 2008-08-27        | M-M-R II     | 03  | MSD | Age: Too Young    | Not Valid         |
	When the Patient is assessed for MMR on 2008-08-27
	Then the assessment should recommend a dose for MMR on 2011-08-01
	And the series status should be Not Complete


@SeriesStatus_Complete @VaccineGroup_MMR @Gender_Female @ForecastTestType_NotRecommendedSeriesComplete
Scenario: [CTC 2013-0571] - Dose 2 at age 13 mo - 4 days
	# added on 2013-01-01
	Given a female Patient born on 2007-08-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2008-08-01        | M-M-R II     | 03  | MSD |                   | Valid             |
		| 2008-08-28        | M-M-R II     | 03  | MSD |                   | Valid             |
	When the Patient is assessed for MMR on 2008-08-28
	Then the assessment should not recommend a dose for MMR
	And the series status should be Complete


@SeriesStatus_Complete @VaccineGroup_MMR @Gender_Female @ForecastTestType_NotRecommendedSeriesComplete
Scenario: [CTC 2013-0572] - Dose 2 at age 13 mo
	# added on 2013-01-01
	Given a female Patient born on 2007-08-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2008-08-01        | M-M-R II     | 03  | MSD |                   | Valid             |
		| 2008-09-01        | M-M-R II     | 03  | MSD |                   | Valid             |
	When the Patient is assessed for MMR on 2008-09-01
	Then the assessment should not recommend a dose for MMR
	And the series status should be Complete


@SeriesStatus_NotComplete @VaccineGroup_MMR @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0573] - Dose 1 to dose 2 interval 28 days-5 days
	# added on 2013-01-01
	Given a female Patient born on 2004-04-13
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason   | Evaluation Status |
		| 2006-07-05        | M-M-R II     | 03  | MSD |                     | Valid             |
		| 2006-07-28        | M-M-R II     | 03  | MSD | Interval: Too Short | Not Valid         |
	When the Patient is assessed for MMR on 2006-07-28
	Then the assessment should recommend a dose for MMR on 2008-04-13
	And the series status should be Not Complete


@SeriesStatus_Complete @VaccineGroup_MMR @Gender_Female @ForecastTestType_NotRecommendedSeriesComplete
Scenario: [CTC 2013-0574] - Dose 1 to dose 2 interval 28-4 days
	# added on 2013-01-01
	Given a female Patient born on 2004-04-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2005-05-01        | M-M-R II     | 03  | MSD |                   | Valid             |
		| 2005-05-25        | M-M-R II     | 03  | MSD |                   | Valid             |
	When the Patient is assessed for MMR on 2005-05-25
	Then the assessment should not recommend a dose for MMR
	And the series status should be Complete

