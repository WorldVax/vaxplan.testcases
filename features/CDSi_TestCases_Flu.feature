Feature: Flu CDSi test cases

@SeriesStatus_NotComplete @VaccineGroup_Flu @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0167] - Newborn
	# updated on 2014-08-15 in version 1.5 - Rolled test cases forward from 2013-14 season to 2014-15 season.
	Given a female Patient born on 2014-02-01
	And no immunizations have been given
	When the Patient is assessed for Flu on 2014-02-01
	Then the assessment should recommend a dose for Flu on 2014-08-01
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_Flu @Gender_Female @ForecastTestType_RecommendedBasedOnSeasonalStartDate
Scenario: [CTC 2013-0168] - # 1 to # 2 interval 28 days
	# updated on 2014-08-15 in version 1.5 - Rolled test cases forward from 2013-14 season to 2014-15 season.
	Given a female Patient born on 2013-05-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name          | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2013-12-01        | Influenza Unspecified | 88  |     |                   | Valid             |
		| 2013-12-29        | Influenza Unspecified | 88  |     |                   | Valid             |
	When the Patient is assessed for Flu on 2013-12-29
	Then the assessment should recommend a dose for Flu on 2014-07-01
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_Flu @Gender_Female @ForecastTestType_RecommendedBasedOnInterval
Scenario: [CTC 2013-0169] - Child under 9 needs two in 1 first season
	# updated on 2014-08-15 in version 1.5 - Rolled test cases forward from 2013-14 season to 2014-15 season.
	Given a female Patient born on 2008-09-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2013-09-01        | FLUMIST      | 111 | MED |                   | Valid             |
	When the Patient is assessed for Flu on 2013-09-01
	Then the assessment should recommend a dose for Flu on 2013-09-29
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_Flu @Gender_Female @ForecastTestType_RecommendedBasedOnSeasonalStartDate
Scenario: [CTC 2013-0170] - Child under 9 received only one in first season
	# updated on 2014-08-15 in version 1.5 - Rolled test cases forward from 2013-14 season to 2014-15 season.
	Given a female Patient born on 2008-04-04
	And the following immunizations have been given
		| Date Administered | Vaccine Name          | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2013-10-15        | Influenza Unspecified | 88  |     |                   | Valid             |
	When the Patient is assessed for Flu on 2013-10-15
	Then the assessment should recommend a dose for Flu on 2014-07-01
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_Flu @Gender_Female @ForecastTestType_RecommendedBasedOnSeasonalStartDate
Scenario: [CTC 2013-0171] - Child under 9 received two in first season
	# updated on 2014-08-15 in version 1.5 - Rolled test cases forward from 2013-14 season to 2014-15 season.
	Given a female Patient born on 2008-05-10
	And the following immunizations have been given
		| Date Administered | Vaccine Name          | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2013-10-15        | Influenza Unspecified | 88  |     |                   | Valid             |
		| 2013-11-27        | Influenza Unspecified | 88  |     |                   | Valid             |
	When the Patient is assessed for Flu on 2013-11-27
	Then the assessment should recommend a dose for Flu on 2014-07-01
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_Flu @Gender_Female @ForecastTestType_RecommendedBasedOnSeasonalStartDate
Scenario: [CTC 2013-0172] - Invalid dose 1st season
	# updated on 2014-08-15 in version 1.5 - Rolled test cases forward from 2013-14 season to 2014-15 season.
	Given a female Patient born on 2013-05-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name          | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2013-10-15        | Influenza Unspecified | 88  |     | Age: Too Young    | Not Valid         |
	When the Patient is assessed for Flu on 2013-10-15
	Then the assessment should recommend a dose for Flu on 2014-07-01
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_Flu @Gender_Female @ForecastTestType_RecommendedBasedOnMinimumIntervalFromLiveVirusVaccine
Scenario: [CTC 2013-0175] - LAIV given one week after MMR is invalid
	# updated on 2014-08-15 in version 1.5 - Rolled test cases forward from 2013-14 season to 2014-15 season.
	Given a female Patient born on 2011-02-10
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason   | Evaluation Status |
		| 2013-02-10        | M-M-R II     | 03  | MSD |                     | Valid             |
		| 2013-02-17        | FLUMIST      | 111 | MED | Live Virus Conflict | Not Valid         |
	When the Patient is assessed for Flu on 2013-02-17
	Then the assessment should recommend a dose for Flu on 2013-03-16
	And the series status should be Not Complete


@SeriesStatus_Contraindicated @VaccineGroup_Flu @Gender_Female @ForecastTestType_NotRecommendedContraindication
Scenario: [CTC 2013-0176] - Anaphylaxis following previous dose
	# updated on 2014-08-15 in version 1.5 - Rolled test cases forward from 2013-14 season to 2014-15 season.
	Given a female Patient born on 2011-07-04
	And the following medical history is reported
	| Medical History Text | Medical History Code | Medical History System |
	|                      | VXC20                | CDCPHINVS              |
	And the following immunizations have been given
		| Date Administered | Vaccine Name          | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2012-10-08        | Influenza Unspecified | 88  |     |                   | Valid             |
	When the Patient is assessed for Flu on 2012-10-08
	Then the assessment should not recommend a dose for Flu
	And the series status should be Contraindicated


@SeriesStatus_NotComplete @VaccineGroup_Flu @Gender_Female @ForecastTestType_RecommendedBasedOnMinimumIntervalFromLiveVirusVaccine
Scenario: [CTC 2013-0177] - # 1 at 6 mo-5 days
	# updated on 2014-08-15 in version 1.5 - Rolled test cases forward from 2013-14 season to 2014-15 season.
	Given a female Patient born on 2013-04-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2013-09-26        | FLUMIST      | 111 | MED | Age: Too Young    | Not Valid         |
	When the Patient is assessed for Flu on 2013-09-26
	Then the assessment should recommend a dose for Flu on 2013-10-24
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_Flu @Gender_Female @ForecastTestType_RecommendedBasedOnInterval
Scenario: [CTC 2013-0178] - # 1 at 6 mo-4 days
	# updated on 2014-08-15 in version 1.5 - Rolled test cases forward from 2013-14 season to 2014-15 season.
	Given a female Patient born on 2013-04-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name          | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2013-09-27        | Influenza Unspecified | 88  |     |                   | Valid             |
	When the Patient is assessed for Flu on 2013-09-27
	Then the assessment should recommend a dose for Flu on 2013-10-25
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_Flu @Gender_Female @ForecastTestType_RecommendedBasedOnInterval
Scenario: [CTC 2013-0179] - # 1 at 6 mo
	# updated on 2014-08-15 in version 1.5 - Rolled test cases forward from 2013-14 season to 2014-15 season.
	Given a female Patient born on 2013-04-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name          | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2013-10-01        | Influenza Unspecified | 88  |     |                   | Valid             |
	When the Patient is assessed for Flu on 2013-10-01
	Then the assessment should recommend a dose for Flu on 2013-10-29
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_Flu @Gender_Female @ForecastTestType_RecommendedBasedOnMinimumIntervalFromInvalidDose
Scenario: [CTC 2013-0183] - # 1 to # 2 interval 23 days
	# updated on 2014-08-15 in version 1.5 - Rolled test cases forward from 2013-14 season to 2014-15 season.
	Given a female Patient born on 2013-05-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name          | CVX | MVX | Evaluation Reason   | Evaluation Status |
		| 2013-12-01        | Influenza Unspecified | 88  |     |                     | Valid             |
		| 2013-12-24        | Influenza Unspecified | 88  |     | Interval: Too Short | Not Valid         |
	When the Patient is assessed for Flu on 2013-12-24
	Then the assessment should recommend a dose for Flu on 2014-01-21
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_Flu @Gender_Female @ForecastTestType_RecommendedBasedOnSeasonalStartDate
Scenario: [CTC 2013-0184] - # 1 to # 2 interval 24 days
	# updated on 2014-08-15 in version 1.5 - Rolled test cases forward from 2013-14 season to 2014-15 season.
	Given a female Patient born on 2013-05-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name          | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2013-12-01        | Influenza Unspecified | 88  |     |                   | Valid             |
		| 2013-12-25        | Influenza Unspecified | 88  |     |                   | Valid             |
	When the Patient is assessed for Flu on 2013-12-25
	Then the assessment should recommend a dose for Flu on 2014-07-01
	And the series status should be Not Complete

