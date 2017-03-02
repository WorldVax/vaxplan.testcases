Feature: DTaP CDSi test cases

@SeriesStatus_NotComplete @VaccineGroup_DTaP @Gender_Female @ForecastTestType_RecommendedBasedOnAge @simple
Scenario: [CTC 2013-0001] - Newborn Testing
	# added on 2013-01-01
	Given a female Patient born on 2012-02-01
	And no immunizations have been given
	When the Patient is assessed for DTaP on 2012-02-01
	Then the assessment should recommend a dose for DTaP on 2012-04-01
	And the series status should be Not Complete

