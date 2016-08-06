Feature: HPV CDSi test cases

@SeriesStatus_NotComplete @VaccineGroup_HPV @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0392] - #1 @ 9 yrs - 4 days, female, gardisil
	# added on 2013-01-01
	Given a female Patient born on 2002-05-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2011-04-27        | GARDASIL     | 62  | MSD |                   | Valid             |
	When the Patient is assessed for HPV on 2011-04-27
	Then the assessment should recommend a dose for HPV on 2013-07-01
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_HPV @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0393] - #1 @ 9 yrs - 5 days, female, gardisil
	# added on 2013-01-01
	Given a female Patient born on 2002-05-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2011-04-26        | GARDASIL     | 62  | MSD | Age: Too Young    | Not Valid         |
	When the Patient is assessed for HPV on 2011-04-26
	Then the assessment should recommend a dose for HPV on 2013-05-01
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_HPV @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0394] - #1 @ 9 yrs - 0 days, female, gardisil
	# added on 2013-01-01
	Given a female Patient born on 2002-05-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2011-05-01        | GARDASIL     | 62  | MSD |                   | Valid             |
	When the Patient is assessed for HPV on 2011-05-01
	Then the assessment should recommend a dose for HPV on 2013-07-01
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_HPV @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0395] - #1 @ 11 yrs - 0 days, female, gardisil
	# added on 2013-01-01
	Given a female Patient born on 2000-05-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2011-05-01        | GARDASIL     | 62  | MSD |                   | Valid             |
	When the Patient is assessed for HPV on 2011-05-01
	Then the assessment should recommend a dose for HPV on 2011-07-01
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_HPV @Gender_Male @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0396] - #1 @ 9 yrs - 4 days, male, gardisil
	# added on 2013-01-01
	Given a male Patient born on 2002-05-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2011-04-27        | GARDASIL     | 62  | MSD |                   | Valid             |
	When the Patient is assessed for HPV on 2011-04-27
	Then the assessment should recommend a dose for HPV on 2013-07-01
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_HPV @Gender_Male @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0397] - #1 @ 9 yrs - 5 days, male, gardisil
	# added on 2013-01-01
	Given a male Patient born on 2002-05-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2011-04-26        | GARDASIL     | 62  | MSD | Age: Too Young    | Not Valid         |
	When the Patient is assessed for HPV on 2011-04-26
	Then the assessment should recommend a dose for HPV on 2013-05-01
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_HPV @Gender_Male @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0398] - #1 @ 9 yrs - 0 days, male, gardisil
	# added on 2013-01-01
	Given a male Patient born on 2002-05-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2011-05-01        | GARDASIL     | 62  | MSD |                   | Valid             |
	When the Patient is assessed for HPV on 2011-05-01
	Then the assessment should recommend a dose for HPV on 2013-07-01
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_HPV @Gender_Male @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0399] - #1 @ 11 yrs - 0 days, male, gardisil
	# added on 2013-01-01
	Given a male Patient born on 2000-05-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2011-05-01        | GARDASIL     | 62  | MSD |                   | Valid             |
	When the Patient is assessed for HPV on 2011-05-01
	Then the assessment should recommend a dose for HPV on 2011-07-01
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_HPV @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0400] - #2 @ 9 yrs, 4 wks - 4 days, female, gardisil
	# added on 2013-01-01
	Given a female Patient born on 2002-05-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2011-04-27        | GARDASIL     | 62  | MSD |                   | Valid             |
		| 2011-05-25        | GARDASIL     | 62  | MSD |                   | valid             |
	When the Patient is assessed for HPV on 2011-05-21
	Then the assessment should recommend a dose for HPV on 2013-11-01
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_HPV @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0401] - #2 @ 9 yrs, 4 wks - 5 days, female gardisil
	# added on 2013-01-01
	Given a female Patient born on 2002-05-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2011-04-27        | GARDASIL     | 62  | MSD |                   | Valid             |
		| 2011-05-24        | GARDASIL     | 62  | MSD | Age: Too Young    | Not Valid         |
	When the Patient is assessed for HPV on 2011-05-24
	Then the assessment should recommend a dose for HPV on 2013-07-01
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_HPV @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0402] - #2 @ 9 yrs, 4 wks - 0 days, female gardisil
	# added on 2013-01-01
	Given a female Patient born on 2002-05-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2011-05-01        | GARDASIL     | 62  | MSD |                   | Valid             |
		| 2011-05-29        | GARDASIL     | 62  | MSD |                   | valid             |
	When the Patient is assessed for HPV on 2011-05-29
	Then the assessment should recommend a dose for HPV on 2013-11-01
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_HPV @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0403] - #2 @ 11 yrs + 2 mo, female, gardisil
	# added on 2013-01-01
	Given a female Patient born on 2000-05-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2011-05-01        | GARDASIL     | 62  | MSD |                   | Valid             |
		| 2011-07-01        | GARDASIL     | 62  | MSD |                   | valid             |
	When the Patient is assessed for HPV on 2011-07-01
	Then the assessment should recommend a dose for HPV on 2011-11-01
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_HPV @Gender_Male @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0404] - #2 @ 9 yrs, 4 wks - 4 days, male, gardisil
	# updated on 2013-06-26 in version 1.1 - Date calculation error on Forecast Earliest Date
	Given a male Patient born on 2002-05-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2011-04-28        | GARDASIL     | 62  | MSD |                   | Valid             |
		| 2011-05-25        | GARDASIL     | 62  | MSD |                   | valid             |
	When the Patient is assessed for HPV on 2011-05-25
	Then the assessment should recommend a dose for HPV on 2013-11-01
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_HPV @Gender_Male @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0405] - #2 @ 9 yrs, 4 wks - 5 days, male gardisil
	# added on 2013-01-01
	Given a male Patient born on 2002-05-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2011-04-27        | GARDASIL     | 62  | MSD |                   | Valid             |
		| 2011-05-24        | GARDASIL     | 62  | MSD | Age: Too Young    | Not Valid         |
	When the Patient is assessed for HPV on 2011-05-24
	Then the assessment should recommend a dose for HPV on 2013-07-01
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_HPV @Gender_Male @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0406] - #2 @ 9 yrs, 4 wks - 0 days, male gardisil
	# added on 2013-01-01
	Given a male Patient born on 2002-05-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2011-05-01        | GARDASIL     | 62  | MSD |                   | Valid             |
		| 2011-05-29        | GARDASIL     | 62  | MSD |                   | valid             |
	When the Patient is assessed for HPV on 2011-05-29
	Then the assessment should recommend a dose for HPV on 2013-11-01
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_HPV @Gender_Male @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0407] - #2 @ 11 yrs + 2 mo, male, gardisil
	# added on 2013-01-01
	Given a male Patient born on 2000-05-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2011-05-01        | GARDASIL     | 62  | MSD |                   | Valid             |
		| 2011-07-01        | GARDASIL     | 62  | MSD |                   | valid             |
	When the Patient is assessed for HPV on 2011-07-01
	Then the assessment should recommend a dose for HPV on 2011-11-01
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_HPV @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0409] - #3 @ 9 yrs, 16 weeks - 1 days, female, gardisil
	# added on 2013-01-01
	Given a female Patient born on 2002-05-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2011-04-30        | GARDASIL     | 62  | MSD |                   | Valid             |
		| 2011-05-28        | GARDASIL     | 62  | MSD |                   | Valid             |
	When the Patient is assessed for HPV on 2011-08-20
	Then the assessment should recommend a dose for HPV on 2013-11-01
	And the series status should be Not Complete


@SeriesStatus_Complete @VaccineGroup_HPV @Gender_Female @ForecastTestType_NotRecommendedSeriesComplete
Scenario: [CTC 2013-0410] - #3 @ 9 yrs, 24 weeks, 0 days, female, gardisil
	# added on 2013-01-01
	Given a female Patient born on 2002-05-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2011-05-01        | GARDASIL     | 62  | MSD |                   | Valid             |
		| 2011-05-29        | GARDASIL     | 62  | MSD |                   | Valid             |
	When the Patient is assessed for HPV on 2011-10-16
	Then the assessment should not recommend a dose for HPV
	And the series status should be Complete


@SeriesStatus_Complete @VaccineGroup_HPV @Gender_Female @ForecastTestType_NotRecommendedSeriesComplete
Scenario: [CTC 2013-0411] - #3 @ 11 yrs + 6 mo, female, gardisil
	# added on 2013-01-01
	Given a female Patient born on 2000-05-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2011-05-01        | GARDASIL     | 62  | MSD |                   | Valid             |
		| 2011-07-01        | GARDASIL     | 62  | MSD |                   | Valid             |
	When the Patient is assessed for HPV on 2011-11-01
	Then the assessment should not recommend a dose for HPV
	And the series status should be Complete


@SeriesStatus_NotComplete @VaccineGroup_HPV @Gender_Male @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0413] - #3 @ 9 yrs, 16 weeks - 1 days, male, gardisil
	# added on 2013-01-01
	Given a male Patient born on 2002-05-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2011-04-30        | GARDASIL     | 62  | MSD |                   | Valid             |
		| 2011-05-28        | GARDASIL     | 62  | MSD |                   | Valid             |
	When the Patient is assessed for HPV on 2011-08-20
	Then the assessment should recommend a dose for HPV on 2013-11-01
	And the series status should be Not Complete


@SeriesStatus_Complete @VaccineGroup_HPV @Gender_Male @ForecastTestType_NotRecommendedSeriesComplete
Scenario: [CTC 2013-0414] - #3 @ 9 yrs, 24 weeks, 0 days, male, gardisil
	# updated on 2013-06-26 in version 1.1 - Dose 1 must be Gardisil for it to be valid and match test case purpose.
	Given a male Patient born on 2002-05-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2011-05-01        | GARDASIL     | 62  | MSD |                   | Valid             |
		| 2011-05-29        | GARDASIL     | 62  | MSD |                   | Valid             |
	When the Patient is assessed for HPV on 2011-10-16
	Then the assessment should not recommend a dose for HPV
	And the series status should be Complete


@SeriesStatus_Complete @VaccineGroup_HPV @Gender_Male @ForecastTestType_NotRecommendedSeriesComplete
Scenario: [CTC 2013-0415] - #3 @ 11 yrs + 6 mo, male, gardisil
	# added on 2013-01-01
	Given a male Patient born on 2000-05-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2011-05-01        | GARDASIL     | 62  | MSD |                   | Valid             |
		| 2011-07-01        | GARDASIL     | 62  | MSD |                   | Valid             |
	When the Patient is assessed for HPV on 2011-11-01
	Then the assessment should not recommend a dose for HPV
	And the series status should be Complete


@SeriesStatus_AgedOut @VaccineGroup_HPV @Gender_Female @ForecastTestType_NotRecommendedTooOld
Scenario: [CTC 2013-0416] - Any dose ≥ 27 yrs, female, gardisil
	# updated on 2014-11-07 in version 1.6 - v1.6: Updated Series Status from "Not Complete" to "Aged Out" to align with updated CDSi Logic Specification Series Statuses.; ; v1.1: Changed test case name to better reflect the test case and align with other test case names.
	Given a female Patient born on 1985-05-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2012-05-02        | GARDASIL     | 62  | MSD | Age: Too Old      | Extraneous        |
	When the Patient is assessed for HPV on 2012-05-02
	Then the assessment should not recommend a dose for HPV
	And the series status should be Aged Out


@SeriesStatus_AgedOut @VaccineGroup_HPV @Gender_Male @ForecastTestType_NotRecommendedTooOld
Scenario: [CTC 2013-0417] - Any dose ≥ 27 yrs, male, gardisil
	# updated on 2014-11-07 in version 1.6 - v1.6: Updated Series Status from "Not Complete" to "Aged Out" to align with updated CDSi Logic Specification Series Statuses.; ; v1.1: Changed test case name to better reflect the test case and align with other test case names.
	Given a male Patient born on 1985-05-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2012-05-02        | GARDASIL     | 62  | MSD | Age: Too Old      | Extraneous        |
	When the Patient is assessed for HPV on 2012-05-02
	Then the assessment should not recommend a dose for HPV
	And the series status should be Aged Out


@SeriesStatus_NotComplete @VaccineGroup_HPV @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0418] - #1 @ 9 yrs - 4 days, female, Cervarix
	# added on 2013-01-01
	Given a female Patient born on 2002-05-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2011-04-27        | CERVARIX     | 118 | SKB |                   | Valid             |
	When the Patient is assessed for HPV on 2011-04-27
	Then the assessment should recommend a dose for HPV on 2013-07-01
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_HPV @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0419] - #1 @ 9 yrs - 5 days, female, Cervarix
	# added on 2013-01-01
	Given a female Patient born on 2002-05-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2011-04-26        | CERVARIX     | 118 | SKB | Age: Too Young    | Not Valid         |
	When the Patient is assessed for HPV on 2011-04-26
	Then the assessment should recommend a dose for HPV on 2013-05-01
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_HPV @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0421] - #1 @ 9 yrs - 0 days, female, Cervarix
	# added on 2013-01-01
	Given a female Patient born on 2002-05-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2011-05-01        | CERVARIX     | 118 | SKB |                   | Valid             |
	When the Patient is assessed for HPV on 2011-05-01
	Then the assessment should recommend a dose for HPV on 2013-07-01
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_HPV @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0422] - #1 @ 11 yrs - 0 days, female, Cervarix
	# added on 2013-01-01
	Given a female Patient born on 2000-05-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2011-05-01        | CERVARIX     | 118 | SKB |                   | Valid             |
	When the Patient is assessed for HPV on 2011-05-01
	Then the assessment should recommend a dose for HPV on 2011-07-01
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_HPV @Gender_Male @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0423] - #1 @ 9 yrs - 4 days, male, Cervarix
	# added on 2013-01-01
	Given a male Patient born on 2002-05-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason              | Evaluation Status |
		| 2011-04-28        | CERVARIX     | 118 | SKB | Gender: Invalid Administration | Not Valid         |
	When the Patient is assessed for HPV on 2011-04-28
	Then the assessment should recommend a dose for HPV on 2013-05-01
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_HPV @Gender_Male @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0424] - #1 @ 9 yrs - 5 days, male, Cervarix
	# added on 2013-01-01
	Given a male Patient born on 2002-05-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason              | Evaluation Status |
		| 2011-04-27        | CERVARIX     | 118 | SKB | Gender: Invalid Administration | Not Valid         |
	When the Patient is assessed for HPV on 2011-04-27
	Then the assessment should recommend a dose for HPV on 2013-05-01
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_HPV @Gender_Male @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0425] - #1 @ 9 yrs - 0 days, male, Cervarix
	# added on 2013-01-01
	Given a male Patient born on 2002-05-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason              | Evaluation Status |
		| 2011-05-01        | CERVARIX     | 118 | SKB | Gender: Invalid Administration | Not Valid         |
	When the Patient is assessed for HPV on 2011-05-01
	Then the assessment should recommend a dose for HPV on 2013-05-01
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_HPV @Gender_Male @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0426] - #1 @ 11 yrs - 0 days, male, Cervarix
	# added on 2013-01-01
	Given a male Patient born on 2000-05-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason              | Evaluation Status |
		| 2011-05-01        | CERVARIX     | 118 | SKB | Gender: Invalid Administration | Not Valid         |
	When the Patient is assessed for HPV on 2011-05-01
	Then the assessment should recommend a dose for HPV on 2011-05-01
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_HPV @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0427] - #2 @ 9 yrs, 4 wks - 4 days, female, Cervarix
	# updated on 2013-06-26 in version 1.1 - Date calculation error on Forecast Earliest Date
	Given a female Patient born on 2002-05-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2011-04-28        | CERVARIX     | 118 | SKB |                   | Valid             |
		| 2011-05-25        | CERVARIX     | 118 | SKB |                   | Valid             |
	When the Patient is assessed for HPV on 2011-05-25
	Then the assessment should recommend a dose for HPV on 2013-11-01
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_HPV @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0428] - #2 @ 9 yrs, 4 wks - 0 days, female Cervarix
	# added on 2013-01-01
	Given a female Patient born on 2002-05-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2011-05-01        | CERVARIX     | 118 | SKB |                   | Valid             |
		| 2011-05-29        | CERVARIX     | 118 | SKB |                   | Valid             |
	When the Patient is assessed for HPV on 2011-05-29
	Then the assessment should recommend a dose for HPV on 2013-11-01
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_HPV @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0429] - #2 @ 11 yrs + 2 mo, female, Cervarix
	# added on 2013-01-01
	Given a female Patient born on 2000-05-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2011-05-01        | CERVARIX     | 118 | SKB |                   | Valid             |
		| 2011-07-01        | CERVARIX     | 118 | SKB |                   | Valid             |
	When the Patient is assessed for HPV on 2011-07-01
	Then the assessment should recommend a dose for HPV on 2011-11-01
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_HPV @Gender_Male @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0430] - #2 @ 9 yrs, 4 wks - 4 days, male, Cervarix
	# updated on 2013-06-26 in version 1.1 - Past Due Date was wrong by 2 years.
	Given a male Patient born on 2002-05-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason              | Evaluation Status |
		| 2011-04-28        | CERVARIX     | 118 | SKB | Gender: Invalid Administration | Not Valid         |
		| 2011-05-22        | CERVARIX     | 118 | SKB | Gender: Invalid Administration | Not Valid         |
	When the Patient is assessed for HPV on 2011-05-22
	Then the assessment should recommend a dose for HPV on 2013-05-01
	And the series status should be Not Complete


@SeriesStatus_Complete @VaccineGroup_HPV @Gender_Female @ForecastTestType_NotRecommendedSeriesComplete
Scenario: [CTC 2013-0433] - #3 @ 9 yrs, 24 weeks, 0 days, female, Cervarix
	# added on 2013-01-01
	Given a female Patient born on 2002-05-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2011-05-01        | CERVARIX     | 118 | SKB |                   | Valid             |
		| 2011-05-29        | CERVARIX     | 118 | SKB |                   | Valid             |
	When the Patient is assessed for HPV on 2011-10-16
	Then the assessment should not recommend a dose for HPV
	And the series status should be Complete


@SeriesStatus_Complete @VaccineGroup_HPV @Gender_Female @ForecastTestType_NotRecommendedSeriesComplete
Scenario: [CTC 2013-0434] - #3 @ 11 yrs + 6 mo, female, Cervarix
	# added on 2013-01-01
	Given a female Patient born on 2000-05-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2011-05-01        | CERVARIX     | 118 | SKB |                   | Valid             |
		| 2011-07-01        | CERVARIX     | 118 | SKB |                   | Valid             |
	When the Patient is assessed for HPV on 2011-11-01
	Then the assessment should not recommend a dose for HPV
	And the series status should be Complete


@SeriesStatus_NotComplete @VaccineGroup_HPV @Gender_Male @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0437] - #3 @ 9 yrs, 24 weeks, 0 days, male, Cervarix
	# added on 2013-01-01
	Given a male Patient born on 2002-05-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason              | Evaluation Status |
		| 2011-05-01        | CERVARIX     | 118 | SKB | Gender: Invalid Administration | Not Valid         |
		| 2011-05-29        | CERVARIX     | 118 | SKB | Gender: Invalid Administration | Not Valid         |
	When the Patient is assessed for HPV on 2011-10-19
	Then the assessment should recommend a dose for HPV on 2013-05-01
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_HPV @Gender_Male @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0438] - #3 @ 11 yrs + 6 mo, male, Cervarix
	# added on 2013-01-01
	Given a male Patient born on 2000-05-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason              | Evaluation Status |
		| 2011-05-01        | CERVARIX     | 118 | SKB | Gender: Invalid Administration | Not Valid         |
		| 2011-07-01        | CERVARIX     | 118 | SKB | Gender: Invalid Administration | Not Valid         |
	When the Patient is assessed for HPV on 2011-11-01
	Then the assessment should recommend a dose for HPV on 2011-05-01
	And the series status should be Not Complete


@SeriesStatus_AgedOut @VaccineGroup_HPV @Gender_Female @ForecastTestType_NotRecommendedTooOld
Scenario: [CTC 2013-0439] - Any dose ≥ 27 yrs, female, Cervarix
	# updated on 2014-11-07 in version 1.6 - v1.6: Updated Series Status from "Not Complete" to "Aged Out" to align with updated CDSi Logic Specification Series Statuses.; ; v1.1: Changed test case name to better reflect the test case and align with other test case names.
	Given a female Patient born on 1985-05-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2012-05-02        | CERVARIX     | 118 | SKB | Age: Too Old      | Extraneous        |
	When the Patient is assessed for HPV on 2012-05-02
	Then the assessment should not recommend a dose for HPV
	And the series status should be Aged Out


@SeriesStatus_NotComplete @VaccineGroup_HPV @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0440] - #2 with interval of 4 weeks from #1
	# added on 2013-01-01
	Given a female Patient born on 2000-05-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name    | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2011-05-01        | HPV Unspecified | 137 |     |                   | Valid             |
		| 2011-05-29        | HPV Unspecified | 137 |     |                   | Valid             |
	When the Patient is assessed for HPV on 2011-05-29
	Then the assessment should recommend a dose for HPV on 2011-11-01
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_HPV @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0441] - #2 with interval of 4 weeks - 4 days from #1
	# added on 2013-01-01
	Given a female Patient born on 2000-05-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name    | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2011-05-01        | HPV Unspecified | 137 |     |                   | Valid             |
		| 2011-05-25        | HPV Unspecified | 137 |     |                   | Valid             |
	When the Patient is assessed for HPV on 2011-05-25
	Then the assessment should recommend a dose for HPV on 2011-11-01
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_HPV @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0442] - #2 with interval of 4 weeks - 5 days from #1
	# added on 2013-01-01
	Given a female Patient born on 2000-05-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name    | CVX | MVX | Evaluation Reason   | Evaluation Status |
		| 2011-05-01        | HPV Unspecified | 137 |     |                     | Valid             |
		| 2011-05-24        | HPV Unspecified | 137 |     | Interval: Too Short | Not Valid         |
	When the Patient is assessed for HPV on 2011-05-24
	Then the assessment should recommend a dose for HPV on 2011-07-01
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_HPV @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0443] - #2 with interval of 2 mo from #1
	# added on 2013-01-01
	Given a female Patient born on 2000-05-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name    | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2011-05-01        | HPV Unspecified | 137 |     |                   | Valid             |
		| 2011-07-01        | HPV Unspecified | 137 |     |                   | Valid             |
	When the Patient is assessed for HPV on 2011-07-01
	Then the assessment should recommend a dose for HPV on 2011-11-01
	And the series status should be Not Complete


@SeriesStatus_Complete @VaccineGroup_HPV @Gender_Female @ForecastTestType_NotRecommendedSeriesComplete
Scenario: [CTC 2013-0444] - #3 with interval of 12 weeks from #2
	# added on 2013-01-01
	Given a female Patient born on 2002-05-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name    | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2011-05-01        | HPV Unspecified | 137 |     |                   | Valid             |
		| 2011-05-29        | HPV Unspecified | 137 |     |                   | Valid             |
	When the Patient is assessed for HPV on 2011-08-21
	Then the assessment should not recommend a dose for HPV
	And the series status should be Complete


@SeriesStatus_Complete @VaccineGroup_HPV @Gender_Female @ForecastTestType_NotRecommendedSeriesComplete
Scenario: [CTC 2013-0445] - #3 with interval of 12 weeks - 4 days from #2
	# added on 2013-01-01
	Given a female Patient born on 2000-05-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name    | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2011-05-01        | HPV Unspecified | 137 |     |                   | Valid             |
		| 2011-06-06        | HPV Unspecified | 137 |     |                   | Valid             |
	When the Patient is assessed for HPV on 2011-08-25
	Then the assessment should not recommend a dose for HPV
	And the series status should be Complete


@SeriesStatus_NotComplete @VaccineGroup_HPV @Gender_Female @ForecastTestType_RecommendedBasedOnMinimumIntervalFromInvalidDose
Scenario: [CTC 2013-0446] - #3 with interval of 12 weeks - 5 days from #2
	# added on 2013-01-01
	Given a female Patient born on 2000-05-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name    | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2011-05-01        | HPV Unspecified | 137 |     |                   | Valid             |
		| 2011-06-06        | HPV Unspecified | 137 |     |                   | Valid             |
	When the Patient is assessed for HPV on 2011-08-24
	Then the assessment should recommend a dose for HPV on 2011-11-16
	And the series status should be Not Complete


@SeriesStatus_Complete @VaccineGroup_HPV @Gender_Female @ForecastTestType_NotRecommendedSeriesComplete
Scenario: [CTC 2013-0447] - #3 with interval of 4 mo from #2
	# added on 2013-01-01
	Given a female Patient born on 2000-05-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name    | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2011-05-01        | HPV Unspecified | 137 |     |                   | Valid             |
		| 2011-07-01        | HPV Unspecified | 137 |     |                   | Valid             |
	When the Patient is assessed for HPV on 2011-11-01
	Then the assessment should not recommend a dose for HPV
	And the series status should be Complete


@SeriesStatus_Complete @VaccineGroup_HPV @Gender_Female @ForecastTestType_NotRecommendedSeriesComplete
Scenario: [CTC 2013-0448] - #3 with interval of 24 weeks from #1
	# added on 2013-01-01
	Given a female Patient born on 2000-05-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name    | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2010-05-01        | HPV Unspecified | 137 |     |                   | Valid             |
		| 2010-05-29        | HPV Unspecified | 137 |     |                   | Valid             |
	When the Patient is assessed for HPV on 2010-10-16
	Then the assessment should not recommend a dose for HPV
	And the series status should be Complete


@SeriesStatus_Complete @VaccineGroup_HPV @Gender_Female @ForecastTestType_NotRecommendedSeriesComplete
Scenario: [CTC 2013-0450] - #3 with interval of 16 weeks from #1
	# added on 2013-01-01
	Given a female Patient born on 2000-05-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name    | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2010-05-01        | HPV Unspecified | 137 |     |                   | Valid             |
		| 2010-05-29        | HPV Unspecified | 137 |     |                   | Valid             |
	When the Patient is assessed for HPV on 2010-08-21
	Then the assessment should not recommend a dose for HPV
	And the series status should be Complete


@SeriesStatus_NotComplete @VaccineGroup_HPV @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0451] - #1 @ 8 yrs - 5 days, #2 @ 9 yrs - 5 days
	# added on 2013-01-01
	Given a female Patient born on 2002-05-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name    | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2010-04-26        | HPV Unspecified | 137 |     | Age: Too Young    | Not Valid         |
		| 2011-04-26        | HPV Unspecified | 137 |     | Age: Too Young    | Not Valid         |
	When the Patient is assessed for HPV on 2011-04-26
	Then the assessment should recommend a dose for HPV on 2013-05-01
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_HPV @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0452] - #1 @ 9 yrs - 5 days, #2 @ 9 yrs - 4 days
	# updated on 2013-06-26 in version 1.1 - Date calculation error on Forecast Earliest Date
	Given a female Patient born on 2002-05-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name    | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2011-04-26        | HPV Unspecified | 137 |     | Age: Too Young    | Not Valid         |
		| 2011-04-27        | HPV Unspecified | 137 |     |                   | Valid             |
	When the Patient is assessed for HPV on 2011-04-27
	Then the assessment should recommend a dose for HPV on 2013-07-01
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_HPV @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0453] - #1 @ 9 yrs, #2 @ 9 yrs + 2 weeks
	# added on 2013-01-01
	Given a female Patient born on 2002-05-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name    | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2011-05-01        | HPV Unspecified | 137 |     |                   | Valid             |
		| 2011-05-15        | HPV Unspecified | 137 |     | Age: Too Young    | Not Valid         |
	When the Patient is assessed for HPV on 2011-05-15
	Then the assessment should recommend a dose for HPV on 2013-07-01
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_HPV @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0454] - #1 @ 9 yrs, #2 @ 12 yrs, 2 mo, 3 days
	# added on 2013-01-01
	Given a female Patient born on 1998-05-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name    | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2007-05-01        | HPV Unspecified | 137 |     |                   | Valid             |
		| 2010-07-04        | HPV Unspecified | 137 |     |                   | Valid             |
	When the Patient is assessed for HPV on 2010-07-04
	Then the assessment should recommend a dose for HPV on 2010-09-26
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_HPV @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0455] - #1 @ 9 yrs, #2 @ 11 yr, 6 mo
	# added on 2013-01-01
	Given a female Patient born on 1998-05-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name    | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2007-05-01        | HPV Unspecified | 137 |     |                   | Valid             |
		| 2009-11-01        | HPV Unspecified | 137 |     |                   | Valid             |
	When the Patient is assessed for HPV on 2009-11-01
	Then the assessment should recommend a dose for HPV on 2010-01-24
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_HPV @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0456] - #1 @ 8 yrs - 5 days, #2 @ 9 yrs - 6 days, #3 @ 9 yrs - 5 days
	# added on 2013-01-01
	Given a female Patient born on 2002-05-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name    | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2010-04-26        | HPV Unspecified | 137 |     | Age: Too Young    | Not Valid         |
		| 2011-04-25        | HPV Unspecified | 137 |     | Age: Too Young    | Not Valid         |
	When the Patient is assessed for HPV on 2011-04-26
	Then the assessment should recommend a dose for HPV on 2013-05-01
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_HPV @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0457] - #1 @ 8 yrs - 5 days, #2 @ 9 yrs - 6 days, #3 @ 9 yrs - 0 days
	# added on 2013-01-01
	Given a female Patient born on 2002-05-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name    | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2010-04-26        | HPV Unspecified | 137 |     | Age: Too Young    | Not Valid         |
		| 2011-04-25        | HPV Unspecified | 137 |     | Age: Too Young    | Not Valid         |
	When the Patient is assessed for HPV on 2011-05-01
	Then the assessment should recommend a dose for HPV on 2013-07-01
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_HPV @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0458] - #1 @ 9 yrs - 5 days, #2 @ 9 yrs + 4 weeks, #3 @ 9 yrs, 8 weeks
	# added on 2013-01-01
	Given a female Patient born on 2002-05-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name    | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2011-04-26        | HPV Unspecified | 137 |     | Age: Too Young    | Not Valid         |
		| 2011-05-29        | HPV Unspecified | 137 |     |                   | Valid             |
	When the Patient is assessed for HPV on 2011-06-26
	Then the assessment should recommend a dose for HPV on 2013-11-01
	And the series status should be Not Complete


@SeriesStatus_Complete @VaccineGroup_HPV @Gender_Female @ForecastTestType_NotRecommendedSeriesComplete
Scenario: [CTC 2013-0459] - #1 @ 9 yrs - 5 days, #2 @ 9 yrs + 4 weeks, #3 @ 9 yrs, 8 weeks, #4 @ 9 yrs, 24 weeks
	# added on 2013-01-01
	Given a female Patient born on 2002-05-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name    | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2011-04-26        | HPV Unspecified | 137 |     | Age: Too Young    | Not Valid         |
		| 2011-05-29        | HPV Unspecified | 137 |     |                   | Valid             |
	When the Patient is assessed for HPV on 2011-10-19
	Then the assessment should not recommend a dose for HPV
	And the series status should be Complete


@SeriesStatus_NotComplete @VaccineGroup_HPV @Gender_Male @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0460] - Adolescent male, no HPV yet given
	# added on 2013-01-01
	Given a male Patient born on 1999-04-04
	And no immunizations have been given
	When the Patient is assessed for HPV on 2008-03-01
	Then the assessment should recommend a dose for HPV on 2010-04-04
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_HPV @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0461] - # 2 at age 9 years 4 weeks-5 days
	# added on 2013-01-01
	Given a female Patient born on 2001-12-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name    | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2010-11-30        | HPV Unspecified | 137 |     |                   | Valid             |
		| 2010-12-24        | HPV Unspecified | 137 |     | Age: Too Young    | Not Valid         |
	When the Patient is assessed for HPV on 2010-12-24
	Then the assessment should recommend a dose for HPV on 2013-02-01
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_HPV @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0462] - # 2 at age 9 years 4 weeks-4 days
	# added on 2013-01-01
	Given a female Patient born on 2001-12-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name    | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2010-11-30        | HPV Unspecified | 137 |     |                   | Valid             |
		| 2010-12-25        | HPV Unspecified | 137 |     |                   | Valid             |
	When the Patient is assessed for HPV on 2010-12-25
	Then the assessment should recommend a dose for HPV on 2013-06-01
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_HPV @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0463] - # 2 at age 9 years 4 weeks
	# added on 2013-01-01
	Given a female Patient born on 2001-12-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name    | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2010-12-01        | HPV Unspecified | 137 |     |                   | Valid             |
		| 2010-12-25        | HPV Unspecified | 137 |     |                   | Valid             |
	When the Patient is assessed for HPV on 2010-12-25
	Then the assessment should recommend a dose for HPV on 2013-06-01
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_HPV @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0465] - # 3 at age 9 years 16 weeks-1 days
	# added on 2013-01-01
	Given a female Patient born on 2001-12-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name    | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2010-11-30        | HPV Unspecified | 137 |     |                   | Valid             |
		| 2010-12-28        | HPV Unspecified | 137 |     |                   | Valid             |
	When the Patient is assessed for HPV on 2011-03-22
	Then the assessment should recommend a dose for HPV on 2013-06-01
	And the series status should be Not Complete


@SeriesStatus_Complete @VaccineGroup_HPV @Gender_Female @ForecastTestType_NotRecommendedSeriesComplete
Scenario: [CTC 2013-0466] - # 3 at age 9 years 16 weeks
	# added on 2013-01-01
	Given a female Patient born on 2002-12-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name    | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2011-12-01        | HPV Unspecified | 137 |     |                   | Valid             |
		| 2011-12-29        | HPV Unspecified | 137 |     |                   | Valid             |
	When the Patient is assessed for HPV on 2012-03-22
	Then the assessment should not recommend a dose for HPV
	And the series status should be Complete


@SeriesStatus_NotComplete @VaccineGroup_HPV @Gender_Female @ForecastTestType_RecommendedBasedOnMinimumIntervalFromPreviousDoseCatchUp
Scenario: [CTC 2013-0467] - # 2 at age 26 yrs 11 months 15 days; forecast # 3; female
	# added on 2013-01-01
	Given a female Patient born on 1985-04-04
	And the following immunizations have been given
		| Date Administered | Vaccine Name    | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2010-04-04        | HPV Unspecified | 137 |     |                   | Valid             |
		| 2012-03-19        | HPV Unspecified | 137 |     |                   | Valid             |
	When the Patient is assessed for HPV on 2012-03-19
	Then the assessment should recommend a dose for HPV on 2012-06-11
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_HPV @Gender_Female @ForecastTestType_RecommendedBasedOnMinimumIntervalFromPreviousDoseCatchUp
Scenario: [CTC 2013-0468] - Dose 1 to dose 2 interval 28-5 days
	# added on 2013-01-01
	Given a female Patient born on 1999-04-04
	And the following immunizations have been given
		| Date Administered | Vaccine Name    | CVX | MVX | Evaluation Reason   | Evaluation Status |
		| 2011-07-01        | HPV Unspecified | 137 |     |                     | Valid             |
		| 2011-07-24        | HPV Unspecified | 137 |     | Interval: Too Short | Not Valid         |
	When the Patient is assessed for HPV on 2011-07-24
	Then the assessment should recommend a dose for HPV on 2011-08-21
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_HPV @Gender_Female @ForecastTestType_RecommendedBasedOnMinimumIntervalFromPreviousDoseCatchUp
Scenario: [CTC 2013-0469] - Dose 1 to dose 2 interval 28 days
	# added on 2013-01-01
	Given a female Patient born on 1999-04-04
	And the following immunizations have been given
		| Date Administered | Vaccine Name    | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2011-07-01        | HPV Unspecified | 137 |     |                   | Valid             |
		| 2011-07-29        | HPV Unspecified | 137 |     |                   | Valid             |
	When the Patient is assessed for HPV on 2011-07-29
	Then the assessment should recommend a dose for HPV on 2011-12-16
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_HPV @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0470] - Adolescent female, no HPV yet  given
	# added on 2013-01-01
	Given a female Patient born on 1999-12-25
	And no immunizations have been given
	When the Patient is assessed for HPV on 2008-06-01
	Then the assessment should recommend a dose for HPV on 2010-12-25
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_HPV @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0471] - Dose 2 to dose 3 interval 12 weeks-5 days
	# added on 2013-01-01
	Given a female Patient born on 2000-09-16
	And the following immunizations have been given
		| Date Administered | Vaccine Name    | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2010-09-20        | HPV Unspecified | 137 |     |                   | Valid             |
		| 2010-11-20        | HPV Unspecified | 137 |     |                   | Valid             |
	When the Patient is assessed for HPV on 2011-02-07
	Then the assessment should recommend a dose for HPV on 2012-03-16
	And the series status should be Not Complete


@SeriesStatus_Complete @VaccineGroup_HPV @Gender_Female @ForecastTestType_NotRecommendedSeriesComplete
Scenario: [CTC 2013-0472] - Dose 2 to dose 3 interval 12 weeks-4 days
	# added on 2013-01-01
	Given a female Patient born on 2000-09-16
	And the following immunizations have been given
		| Date Administered | Vaccine Name    | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2010-09-20        | HPV Unspecified | 137 |     |                   | Valid             |
		| 2010-11-20        | HPV Unspecified | 137 |     |                   | Valid             |
	When the Patient is assessed for HPV on 2011-02-08
	Then the assessment should not recommend a dose for HPV
	And the series status should be Complete


@SeriesStatus_Complete @VaccineGroup_HPV @Gender_Female @ForecastTestType_NotRecommendedSeriesComplete
Scenario: [CTC 2013-0473] - Dose 2 to dose 3 interval 12 weeks
	# added on 2013-01-01
	Given a female Patient born on 2000-09-16
	And the following immunizations have been given
		| Date Administered | Vaccine Name    | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2010-09-20        | HPV Unspecified | 137 |     |                   | Valid             |
		| 2010-11-20        | HPV Unspecified | 137 |     |                   | Valid             |
	When the Patient is assessed for HPV on 2011-02-12
	Then the assessment should not recommend a dose for HPV
	And the series status should be Complete


@SeriesStatus_NotComplete @VaccineGroup_HPV @Gender_Female @ForecastTestType_RecommendedBasedOnMinimumIntervalFromInvalidDose
Scenario: [CTC 2013-0474] - Dose 1 to dose 3 interval 16 weeks -1 days
	# added on 2013-01-01
	Given a female Patient born on 1996-03-21
	And the following immunizations have been given
		| Date Administered | Vaccine Name    | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2008-04-18        | HPV Unspecified | 137 |     |                   | Valid             |
		| 2008-05-16        | HPV Unspecified | 137 |     |                   | Valid             |
	When the Patient is assessed for HPV on 2008-08-07
	Then the assessment should recommend a dose for HPV on 2008-10-30
	And the series status should be Not Complete


@SeriesStatus_Complete @VaccineGroup_HPV @Gender_Female @ForecastTestType_NotRecommendedSeriesComplete
Scenario: [CTC 2013-0475] - Dose 1 to dose 3 interval 16 weeks=valid
	# added on 2013-01-01
	Given a female Patient born on 1996-03-21
	And the following immunizations have been given
		| Date Administered | Vaccine Name    | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2008-04-18        | HPV Unspecified | 137 |     |                   | Valid             |
		| 2008-05-16        | HPV Unspecified | 137 |     |                   | Valid             |
	When the Patient is assessed for HPV on 2008-08-08
	Then the assessment should not recommend a dose for HPV
	And the series status should be Complete


@SeriesStatus_Complete @VaccineGroup_HPV @Gender_Female @ForecastTestType_NotRecommendedSeriesComplete
Scenario: [CTC 2013-0476] - # 2 to # 3 interval 12 wks-4 days
	# added on 2013-01-01
	Given a female Patient born on 1997-01-01
	And the following immunizations have been given
		| Date Administered | Vaccine Name    | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2010-07-01        | HPV Unspecified | 137 |     |                   | Valid             |
		| 2010-09-23        | HPV Unspecified | 137 |     |                   | Valid             |
	When the Patient is assessed for HPV on 2010-12-12
	Then the assessment should not recommend a dose for HPV
	And the series status should be Complete


@SeriesStatus_NotComplete @VaccineGroup_HPV @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0477] - Invalid dose 1 of three doses given
	# added on 2013-01-01
	Given a female Patient born on 2001-07-21
	And the following immunizations have been given
		| Date Administered | Vaccine Name    | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2010-07-01        | HPV Unspecified | 137 |     | Age: Too Young    | Not Valid         |
		| 2010-10-21        | HPV Unspecified | 137 |     |                   | Valid             |
	When the Patient is assessed for HPV on 2011-05-05
	Then the assessment should recommend a dose for HPV on 2013-01-21
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_HPV @Gender_Female @ForecastTestType_RecommendedBasedOnMinimumIntervalFromPreviousDoseCatchUp
Scenario: [CTC 2013-0478] - Invalid dose 2 in midst of others
	# added on 2013-01-01
	Given a female Patient born on 1998-12-25
	And the following immunizations have been given
		| Date Administered | Vaccine Name    | CVX | MVX | Evaluation Reason   | Evaluation Status |
		| 2010-02-25        | HPV Unspecified | 137 |     |                     | Valid             |
		| 2010-03-18        | HPV Unspecified | 137 |     | Interval: Too Short | Not Valid         |
	When the Patient is assessed for HPV on 2010-08-25
	Then the assessment should recommend a dose for HPV on 2010-11-17
	And the series status should be Not Complete


@SeriesStatus_Contraindicated @VaccineGroup_HPV @Gender_Female @ForecastTestType_NotRecommendedContraindication
Scenario: [CTC 2013-0479] - Anaphylaxis to previous dose
	# added on 2013-01-01
	Given a female Patient born on 2000-05-19
	And the following medical history is reported
	| Medical History Text | Medical History Code | Medical History System |
	|                      | VXC20                | CDCPHINVS              |
	And the following immunizations have been given
		| Date Administered | Vaccine Name    | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2011-06-19        | HPV Unspecified | 137 |     |                   | Valid             |
	When the Patient is assessed for HPV on 2011-06-19
	Then the assessment should not recommend a dose for HPV
	And the series status should be Contraindicated


@SeriesStatus_AgedOut @VaccineGroup_HPV @Gender_Female @ForecastTestType_NotRecommendedTooOld
Scenario: [CTC 2013-0480] - Adult female age 27 years, No Doses
	# updated on 2014-11-07 in version 1.6 - v1.6: Updated Series Status from "Not Complete" to "Aged Out" to align with updated CDSi Logic Specification Series Statuses.
	Given a female Patient born on 1985-03-30
	And no immunizations have been given
	When the Patient is assessed for HPV on 2012-03-30
	Then the assessment should not recommend a dose for HPV
	And the series status should be Aged Out


@SeriesStatus_AgedOut @VaccineGroup_HPV @Gender_Male @ForecastTestType_NotRecommendedTooOld
Scenario: [CTC 2013-0481] - Male age 27. HPV not recommended
	# updated on 2014-11-07 in version 1.6 - v1.6: Updated Series Status from "Not Complete" to "Aged Out" to align with updated CDSi Logic Specification Series Statuses.; ; v1.1: Gender should be M rather than F based on test case name; Also changed birth date to make patient 27 years old based on MM
	Given a male Patient born on 1985-04-01
	And no immunizations have been given
	When the Patient is assessed for HPV on 2012-04-01
	Then the assessment should not recommend a dose for HPV
	And the series status should be Aged Out


@SeriesStatus_NotComplete @VaccineGroup_HPV @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0482] - Female, age 14.  HPV recommended
	# added on 2013-01-01
	Given a female Patient born on 1998-04-01
	And no immunizations have been given
	When the Patient is assessed for HPV on 2012-04-01
	Then the assessment should recommend a dose for HPV on 2009-04-01
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_HPV @Gender_Male @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0483] - HPV bivalent to male adolescent. Not valid. Forecast quadrivalent
	# added on 2013-01-01
	Given a male Patient born on 2000-06-18
	And the following immunizations have been given
		| Date Administered | Vaccine Name | CVX | MVX | Evaluation Reason              | Evaluation Status |
		| 2011-06-20        | CERVARIX     | 118 | SKB | Gender: Invalid Administration | Not Valid         |
	When the Patient is assessed for HPV on 2011-06-20
	Then the assessment should recommend a dose for HPV on 2011-06-18
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_HPV @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0484] - # 1 at age 9 years-5 days
	# added on 2013-01-01
	Given a female Patient born on 2001-12-08
	And the following immunizations have been given
		| Date Administered | Vaccine Name    | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2010-12-03        | HPV Unspecified | 137 |     | Age: Too Young    | Not Valid         |
	When the Patient is assessed for HPV on 2010-12-03
	Then the assessment should recommend a dose for HPV on 2012-12-08
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_HPV @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0485] - # 1 at age  9 years-4 days
	# added on 2013-01-01
	Given a female Patient born on 2001-12-08
	And the following immunizations have been given
		| Date Administered | Vaccine Name    | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2010-12-04        | HPV Unspecified | 137 |     |                   | Valid             |
	When the Patient is assessed for HPV on 2010-12-04
	Then the assessment should recommend a dose for HPV on 2013-02-08
	And the series status should be Not Complete


@SeriesStatus_NotComplete @VaccineGroup_HPV @Gender_Female @ForecastTestType_RecommendedBasedOnAge
Scenario: [CTC 2013-0486] - # 1 at age 9 years
	# added on 2013-01-01
	Given a female Patient born on 2001-12-08
	And the following immunizations have been given
		| Date Administered | Vaccine Name    | CVX | MVX | Evaluation Reason | Evaluation Status |
		| 2010-12-08        | HPV Unspecified | 137 |     |                   | Valid             |
	When the Patient is assessed for HPV on 2010-12-08
	Then the assessment should recommend a dose for HPV on 2013-02-08
	And the series status should be Not Complete

