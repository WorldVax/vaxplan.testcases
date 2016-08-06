Feature: Rota CDSi test cases

@SeriesStatus_NotComplete @VaccineGroup_Rota @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0753] - Newborn forecast
	# added on 2013-01-01
	Given a female Patient born on 2012-04-01
	And no immunizations have been given
	When the Patient is assessed for Rota on 2012-04-01
	Then the assessment should recommend a dose for Rota on 2012-06-01
	And the series status should be Not Complete


@SeriesStatus_Complete @VaccineGroup_Rota @Gender_Female @ForecastTestType_NotRecommendedSeriesComplete
Scenario: [CTC 2013-0754] - Dose # 3 Rotateq at age 14 weeks
	# added on 2013-01-01
	Given a female Patient born on 2011-11-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2011-12-13        | ROTATEQ      | 116 | MSD |                   | Valid             |
		| 2012-01-10        | ROTATEQ      | 116 | MSD |                   | Valid             |
	When the Patient is assessed for Rota on 2012-02-07
	Then the assessment should not recommend a dose for Rota
	And the series status should be Complete


@SeriesStatus_Complete @VaccineGroup_Rota @Gender_Female @ForecastTestType_NotRecommendedSeriesComplete
Scenario: [CTC 2013-0755] - Dose # 3 Rotateq at age 6 months
	# added on 2013-01-01
	Given a female Patient born on 2011-11-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2012-01-01        | ROTATEQ      | 116 | MSD |                   | Valid             |
		| 2012-03-01        | ROTATEQ      | 116 | MSD |                   | Valid             |
	When the Patient is assessed for Rota on 2012-05-01
	Then the assessment should not recommend a dose for Rota
	And the series status should be Complete


@SeriesStatus_NotComplete @VaccineGroup_Rota @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0756] - Dose 1 to dose 2 Rotateq interval 28-5 days
	# added on 2013-01-01
	Given a female Patient born on 2012-02-05
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason   | Evaluation Status |
		| 2012-03-25        | ROTATEQ      | 116 | MSD |                     | Valid             |
		| 2012-04-17        | ROTATEQ      | 116 | MSD | Interval: Too Short | Not Valid         |
	When the Patient is assessed for Rota on 2012-04-17
	Then the assessment should recommend a dose for Rota on 2012-06-05
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_Rota @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0757] - Dose 1 to dose 2 Rotateq interval 28-4 days
	# added on 2013-01-01
	Given a female Patient born on 2012-02-05
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2012-03-25        | ROTATEQ      | 116 | MSD |                   | Valid             |
		| 2012-04-18        | ROTATEQ      | 116 | MSD |                   | Valid             |
	When the Patient is assessed for Rota on 2012-04-18
	Then the assessment should recommend a dose for Rota on 2012-08-05
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_Rota @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0758] - Dose 1 to dose 2 Rotateq interval 28 days
	# added on 2013-01-01
	Given a female Patient born on 2012-02-05
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2012-03-25        | ROTATEQ      | 116 | MSD |                   | Valid             |
		| 2012-04-22        | ROTATEQ      | 116 | MSD |                   | Valid             |
	When the Patient is assessed for Rota on 2012-04-22
	Then the assessment should recommend a dose for Rota on 2012-08-05
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_Rota @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0759] - Dose 2 to dose 3 Rotateq  interval 28-5 days
	# added on 2013-01-01
	Given a female Patient born on 2011-11-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2011-12-28        | ROTATEQ      | 116 | MSD |                   | Valid             |
		| 2012-02-02        | ROTATEQ      | 116 | MSD |                   | Valid             |
	When the Patient is assessed for Rota on 2012-02-25
	Then the assessment should recommend a dose for Rota on 2012-05-01
	And the series status should be Not Complete


@SeriesStatus_Complete @VaccineGroup_Rota @Gender_Female @ForecastTestType_NotRecommendedSeriesComplete
Scenario: [CTC 2013-0760] - Dose 2 to dose 3 Rotateq interval  28-4 days
	# added on 2013-01-01
	Given a female Patient born on 2011-11-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2011-12-28        | ROTATEQ      | 116 | MSD |                   | Valid             |
		| 2012-02-02        | ROTATEQ      | 116 | MSD |                   | Valid             |
	When the Patient is assessed for Rota on 2012-02-26
	Then the assessment should not recommend a dose for Rota
	And the series status should be Complete


@SeriesStatus_Complete @VaccineGroup_Rota @Gender_Female @ForecastTestType_NotRecommendedSeriesComplete
Scenario: [CTC 2013-0761] - Dose 2 to dose 3 Rotateq interval 28 days
	# added on 2013-01-01
	Given a female Patient born on 2011-11-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2011-12-28        | ROTATEQ      | 116 | MSD |                   | Valid             |
		| 2012-02-02        | ROTATEQ      | 116 | MSD |                   | Valid             |
	When the Patient is assessed for Rota on 2012-03-01
	Then the assessment should not recommend a dose for Rota
	And the series status should be Complete


@SeriesStatus_NotComplete @VaccineGroup_Rota @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0762] - Dose # 1 Rotarix at age 6 weeks-5 days
	# added on 2013-01-01
	Given a female Patient born on 2012-01-02
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2012-02-08        | ROTARIX      | 119 | SKB | Age: Too Young    | Not Valid         |
	When the Patient is assessed for Rota on 2012-02-08
	Then the assessment should recommend a dose for Rota on 2012-03-02
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_Rota @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0763] - Dose # 1 Rotarix at age 6 weeks-4 days
	# added on 2013-01-01
	Given a female Patient born on 2012-01-02
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2012-02-09        | ROTARIX      | 119 | SKB |                   | Valid             |
	When the Patient is assessed for Rota on 2012-02-09
	Then the assessment should recommend a dose for Rota on 2012-05-02
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_Rota @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0764] - Dose # 1 Rotateq at age 6 weeks-5 days
	# added on 2013-01-01
	Given a female Patient born on 2012-01-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2012-02-07        | ROTATEQ      | 116 | MSD | Age: Too Young    | Not Valid         |
	When the Patient is assessed for Rota on 2012-02-07
	Then the assessment should recommend a dose for Rota on 2012-03-01
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_Rota @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0765] - Dose # 1 Rotarix at age 6 weeks
	# added on 2013-01-01
	Given a female Patient born on 2012-01-02
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2012-02-13        | ROTARIX      | 119 | SKB |                   | Valid             |
	When the Patient is assessed for Rota on 2012-02-13
	Then the assessment should recommend a dose for Rota on 2012-05-02
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_Rota @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0766] - Dose # 2 Rotarix at age 10 weeks-5 days
	# added on 2013-01-01
	Given a female Patient born on 2011-12-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2012-01-10        | ROTARIX      | 119 | SKB |                   | Valid             |
		| 2012-02-04        | ROTARIX      | 119 | SKB | Age: Too Young    | Not Valid         |
	When the Patient is assessed for Rota on 2012-02-04
	Then the assessment should recommend a dose for Rota on 2012-04-01
	And the series status should be Not Complete


@SeriesStatus_Complete @VaccineGroup_Rota @Gender_Female @ForecastTestType_NotRecommendedSeriesComplete
Scenario: [CTC 2013-0767] - Dose # 2 Rotarix at age 10 weeks-4 days
	# added on 2013-01-01
	Given a female Patient born on 2011-12-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2012-01-12        | ROTARIX      | 119 | SKB |                   | Valid             |
		| 2012-02-05        | ROTARIX      | 119 | SKB |                   | Valid             |
	When the Patient is assessed for Rota on 2012-02-05
	Then the assessment should not recommend a dose for Rota
	And the series status should be Complete


@SeriesStatus_Complete @VaccineGroup_Rota @Gender_Female @ForecastTestType_NotRecommendedSeriesComplete
Scenario: [CTC 2013-0768] - Dose # 2 Rotarix at age 10 weeks
	# added on 2013-01-01
	Given a female Patient born on 2011-12-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2012-01-12        | ROTARIX      | 119 | SKB |                   | Valid             |
		| 2012-02-09        | ROTARIX      | 119 | SKB |                   | Valid             |
	When the Patient is assessed for Rota on 2012-02-09
	Then the assessment should not recommend a dose for Rota
	And the series status should be Complete


@SeriesStatus_NotComplete @VaccineGroup_Rota @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0769] - Dose 1 to dose 2 Rotarix interval 28-5 days
	# added on 2013-01-01
	Given a female Patient born on 2011-12-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason   | Evaluation Status |
		| 2012-02-01        | ROTARIX      | 119 | SKB |                     | Valid             |
		| 2012-02-24        | ROTARIX      | 119 | SKB | Interval: Too Short | Not Valid         |
	When the Patient is assessed for Rota on 2012-02-24
	Then the assessment should recommend a dose for Rota on 2012-04-01
	And the series status should be Not Complete


@SeriesStatus_Complete @VaccineGroup_Rota @Gender_Female @ForecastTestType_NotRecommendedSeriesComplete
Scenario: [CTC 2013-0770] - Dose 1 to dose 2 Rotarix interval 28-4 days
	# added on 2013-01-01
	Given a female Patient born on 2011-12-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2012-02-01        | ROTARIX      | 119 | SKB |                   | Valid             |
		| 2012-02-25        | ROTARIX      | 119 | SKB |                   | Valid             |
	When the Patient is assessed for Rota on 2012-02-25
	Then the assessment should not recommend a dose for Rota
	And the series status should be Complete


@SeriesStatus_Complete @VaccineGroup_Rota @Gender_Female @ForecastTestType_NotRecommendedSeriesComplete
Scenario: [CTC 2013-0771] - Dose 1 to dose 2 Rotarix interval 28 days
	# added on 2013-01-01
	Given a female Patient born on 2011-12-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2012-02-01        | ROTARIX      | 119 | SKB |                   | Valid             |
		| 2012-02-29        | ROTARIX      | 119 | SKB |                   | Valid             |
	When the Patient is assessed for Rota on 2012-02-29
	Then the assessment should not recommend a dose for Rota
	And the series status should be Complete


@SeriesStatus_AgedOut @VaccineGroup_Rota @Gender_Female @ForecastTestType_NotRecommendedTooOld
Scenario: [CTC 2013-0772] - ≥15 weeks old with no rota vax:  no forecast for rotavirus
	# updated on 2014-11-07 in version 1.6 - v1.6: Updated Series Status from "Not Complete" to "Aged Out" to align with updated CDSi Logic Specification Series Statuses.
	Given a female Patient born on 2012-01-01
	And no immunizations have been given
	When the Patient is assessed for Rota on 2012-04-15
	Then the assessment should not recommend a dose for Rota
	And the series status should be Aged Out


@SeriesStatus_NotComplete @VaccineGroup_Rota @Gender_Female @ForecastTestType_RecommendedBasedOnMinimumIntervalFromPreviousDoseCatchUp
Scenario: [CTC 2013-0773] - Dose # 1 ≥ 15 weeks old
	# added on 2013-01-01
	Given a female Patient born on 2011-12-28
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2012-04-15        | ROTARIX      | 119 | SKB |                   | Valid             |
	When the Patient is assessed for Rota on 2012-04-15
	Then the assessment should recommend a dose for Rota on 2012-05-13
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_Rota @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0774] - 8 months old with only one rota vax
	# updated on 2013-06-26 in version 1.1 - Child is exactly 8 months old based on the Assessment Date and should still be recommended for administration.
	Given a female Patient born on 2011-08-17
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2011-11-17        | ROTARIX      | 119 | SKB |                   | Valid             |
	When the Patient is assessed for Rota on 2012-04-17
	Then the assessment should recommend a dose for Rota on 2011-12-17
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_Rota @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0775] - Dose # 1 Rotateq at age 6 weeks-4 days
	# added on 2013-01-01
	Given a female Patient born on 2012-01-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2012-02-08        | ROTATEQ      | 116 | MSD |                   | Valid             |
	When the Patient is assessed for Rota on 2012-02-08
	Then the assessment should recommend a dose for Rota on 2012-05-01
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_Rota @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0776] - Rotateq at 2 months; rotarix at 4 mo
	# added on 2013-01-01
	Given a female Patient born on 2012-01-06
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2012-03-06        | ROTATEQ      | 116 | MSD |                   | Valid             |
		| 2012-05-06        | ROTARIX      | 119 | SKB |                   | Valid             |
	When the Patient is assessed for Rota on 2012-05-06
	Then the assessment should recommend a dose for Rota on 2012-07-06
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_Rota @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0777] - Rotatrix at 2 mo; rotateq at 4 mo
	# added on 2013-01-01
	Given a female Patient born on 2012-01-06
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2012-03-06        | ROTARIX      | 119 | SKB |                   | Valid             |
		| 2012-05-06        | ROTATEQ      | 116 | MSD |                   | Valid             |
	When the Patient is assessed for Rota on 2012-05-06
	Then the assessment should recommend a dose for Rota on 2012-07-06
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_Rota @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0778] - Unspecified rotavirus at 2 and 4 mo
	# added on 2013-01-01
	Given a female Patient born on 2011-12-06
	And the following immunizations have been given
		| Date Administered | Vaccine Name          | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2012-02-06        | Rotavirus Unspecified | 122 |     |                   | Valid             |
		| 2012-04-06        | Rotavirus Unspecified | 122 |     |                   | Valid             |
	When the Patient is assessed for Rota on 2012-04-06
	Then the assessment should recommend a dose for Rota on 2012-06-06
	And the series status should be Not Complete


@SeriesStatus_Contraindicated @VaccineGroup_Rota @Gender_Female @ForecastTestType_NotRecommendedContraindication
Scenario: [CTC 2013-0779] - Severe combined immunodeficiency (SCID)=no rotavirus vaccine
	# added on 2013-01-01
	Given a female Patient born on 2012-02-01
	And the following medical history is reported
	| Medical History Text | Medical History Code | Medical History System |
	|                      | VXC27                | CDCPHINVS              |
	And no immunizations have been given
	When the Patient is assessed for Rota on 2012-03-01
	Then the assessment should not recommend a dose for Rota
	And the series status should be Contraindicated


@SeriesStatus_Contraindicated @VaccineGroup_Rota @Gender_Female @ForecastTestType_NotRecommendedContraindication
Scenario: [CTC 2013-0780] - Anaphylaxis following previous dose
	# added on 2013-01-01
	Given a female Patient born on 2012-02-01
	And the following medical history is reported
	| Medical History Text | Medical History Code | Medical History System |
	|                      | VXC20                | CDCPHINVS              |
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2012-04-01        | ROTARIX      | 119 | SKB |                   | Valid             |
	When the Patient is assessed for Rota on 2012-04-01
	Then the assessment should not recommend a dose for Rota
	And the series status should be Contraindicated


@SeriesStatus_NotComplete @VaccineGroup_Rota @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0781] - Dose # 1 Rotateq at age 6 weeks
	# added on 2013-01-01
	Given a female Patient born on 2012-01-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2012-02-12        | ROTATEQ      | 116 | MSD |                   | Valid             |
	When the Patient is assessed for Rota on 2012-02-12
	Then the assessment should recommend a dose for Rota on 2012-05-01
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_Rota @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0782] - Dose # 2 Rotateq at age 10 weeks-5 days
	# added on 2013-01-01
	Given a female Patient born on 2011-12-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2012-01-10        | ROTATEQ      | 116 | MSD |                   | Valid             |
		| 2012-02-04        | ROTATEQ      | 116 | MSD | Age: Too Young    | Not Valid         |
	When the Patient is assessed for Rota on 2012-02-04
	Then the assessment should recommend a dose for Rota on 2012-04-01
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_Rota @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0783] - Dose # 2 Rotateq at age 10 weeks-4 days
	# added on 2013-01-01
	Given a female Patient born on 2011-12-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2012-01-12        | ROTATEQ      | 116 | MSD |                   | Valid             |
		| 2012-02-05        | ROTATEQ      | 116 | MSD |                   | Valid             |
	When the Patient is assessed for Rota on 2012-02-05
	Then the assessment should recommend a dose for Rota on 2012-06-01
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_Rota @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0784] - Dose # 2 Rotateq at age 10 weeks
	# added on 2013-01-01
	Given a female Patient born on 2011-12-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2012-01-12        | ROTATEQ      | 116 | MSD |                   | Valid             |
		| 2012-02-09        | ROTATEQ      | 116 | MSD |                   | Valid             |
	When the Patient is assessed for Rota on 2012-02-09
	Then the assessment should recommend a dose for Rota on 2012-06-01
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_Rota @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0785] - Dose # 3 Rotateq at age 14 weeks-5 days
	# added on 2013-01-01
	Given a female Patient born on 2011-11-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2011-12-10        | ROTATEQ      | 116 | MSD |                   | Valid             |
		| 2012-01-07        | ROTATEQ      | 116 | MSD |                   | Valid             |
	When the Patient is assessed for Rota on 2012-02-02
	Then the assessment should recommend a dose for Rota on 2012-05-01
	And the series status should be Not Complete


@SeriesStatus_Complete @VaccineGroup_Rota @Gender_Female @ForecastTestType_NotRecommendedSeriesComplete
Scenario: [CTC 2013-0786] - Dose # 3 Rotateq at age 14 weeks-4 days
	# added on 2013-01-01
	Given a female Patient born on 2011-11-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2011-12-13        | ROTATEQ      | 116 | MSD |                   | Valid             |
		| 2012-01-10        | ROTATEQ      | 116 | MSD |                   | Valid             |
	When the Patient is assessed for Rota on 2012-02-03
	Then the assessment should not recommend a dose for Rota
	And the series status should be Complete


@SeriesStatus_Contraindicated @VaccineGroup_Rota @Gender_Female @ForecastTestType_NotRecommendedContraindication
Scenario: [CTC 2013-0787] - Anaphylaxis following previous dose
	# added on 2013-01-01
	Given a female Patient born on 2012-02-01
	And the following medical history is reported
	| Medical History Text | Medical History Code | Medical History System |
	|                      | VXC20                | CDCPHINVS              |
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2012-04-01        | ROTATEQ      | 116 | MSD |                   | Valid             |
		| 2012-05-01        | ROTARIX      | 119 | SKB |                   | Valid             |
	When the Patient is assessed for Rota on 2012-05-01
	Then the assessment should not recommend a dose for Rota
	And the series status should be Contraindicated

