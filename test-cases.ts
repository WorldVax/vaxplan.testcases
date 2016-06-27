/**
@overview  Support data
@author Dennis Dunn <ansofive@gmail.com>
@license MIT
 */

module.exports = [{
		"CdcTestId" : "2013-0001",
		"TestCaseName" : "Newborn Testing",
		"ExpectedForecast" : {
			"AssessmentDate" : "2012-02-01T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2012-03-14T00:00:00",
			"EvaluationTestType" : "No Doses Administered",
			"ForecastNumber" : 1,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2012-05-28T00:00:00",
			"RecommendedDate" : "2012-04-01T00:00:00",
			"VaccineGroup" : "DTaP"
		},
		"PatientProfile" : {
			"Dob" : "2012-02-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : []
		}
	}, {
		"CdcTestId" : "2013-0002",
		"TestCaseName" : "DTaP #2 at age 10 weeks-5 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-05-02T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2011-05-30T00:00:00",
			"EvaluationTestType" : "Age: Below Absolute Minimum",
			"ForecastNumber" : 2,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2011-08-22T00:00:00",
			"RecommendedDate" : "2011-06-26T00:00:00",
			"VaccineGroup" : "DTaP"
		},
		"PatientProfile" : {
			"Dob" : "2011-02-26T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "107",
					"DateAdministered" : "2011-04-06T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}, {
					"Cvx" : "107",
					"DateAdministered" : "2011-05-02T00:00:00",
					"EvaluationReason" : "Age: Too Young",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0003",
		"TestCaseName" : "DTaP #2 at 10 wks-4 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-05-03T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2011-06-04T00:00:00",
			"EvaluationTestType" : "Age: At Absolute Minimum",
			"ForecastNumber" : 3,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2011-10-23T00:00:00",
			"RecommendedDate" : "2011-08-26T00:00:00",
			"VaccineGroup" : "DTaP"
		},
		"PatientProfile" : {
			"Dob" : "2011-02-26T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "107",
					"DateAdministered" : "2011-04-09T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}, {
					"Cvx" : "107",
					"DateAdministered" : "2011-05-03T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0004",
		"TestCaseName" : "DTaP # 2 at age 10 weeks",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-05-07T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2011-06-04T00:00:00",
			"EvaluationTestType" : "Age: At Minimum",
			"ForecastNumber" : 3,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2011-10-23T00:00:00",
			"RecommendedDate" : "2011-08-26T00:00:00",
			"VaccineGroup" : "DTaP"
		},
		"PatientProfile" : {
			"Dob" : "2011-02-26T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "107",
					"DateAdministered" : "2011-04-09T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}, {
					"Cvx" : "107",
					"DateAdministered" : "2011-05-07T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0005",
		"TestCaseName" : "DTaP # 2 at age 4 months",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-12-01T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2011-12-29T00:00:00",
			"EvaluationTestType" : "Age: At Recommended",
			"ForecastNumber" : 3,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2012-03-28T00:00:00",
			"RecommendedDate" : "2012-02-01T00:00:00",
			"VaccineGroup" : "DTaP"
		},
		"PatientProfile" : {
			"Dob" : "2011-08-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "107",
					"DateAdministered" : "2011-10-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}, {
					"Cvx" : "107",
					"DateAdministered" : "2011-12-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0007",
		"TestCaseName" : "# 2 (Tdap) to child age 7.  DTaP # 1 given before age 12 months.  Forecast # 3 (Td) in 4 weeks. ",
		"ExpectedForecast" : {
			"AssessmentDate" : "2010-09-16T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2010-10-14T00:00:00",
			"EvaluationTestType" : "Age: At Minimum",
			"ForecastNumber" : 3,
			"ForecastTestType" : "Recommended based on minimum interval from previous dose (catch-up)",
			"PastDueDate" : null,
			"RecommendedDate" : "2010-10-14T00:00:00",
			"VaccineGroup" : "DTaP"
		},
		"PatientProfile" : {
			"Dob" : "2003-09-16T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "107",
					"DateAdministered" : "2003-11-16T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}, {
					"Cvx" : "115",
					"DateAdministered" : "2010-09-16T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "BOOSTRIX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0008",
		"TestCaseName" : "# 2 (Tdap) to child age 7.  DTaP # 1 at ≥ 12 months.  Forecast dose 3 for 6 months. ",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-09-16T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2012-03-16T00:00:00",
			"EvaluationTestType" : "Age: At Minimum",
			"ForecastNumber" : 3,
			"ForecastTestType" : "Recommended based on minimum interval from previous dose (catch-up)",
			"PastDueDate" : null,
			"RecommendedDate" : "2012-03-16T00:00:00",
			"VaccineGroup" : "DTaP"
		},
		"PatientProfile" : {
			"Dob" : "2004-09-16T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "107",
					"DateAdministered" : "2005-09-16T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}, {
					"Cvx" : "115",
					"DateAdministered" : "2011-09-16T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "BOOSTRIX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0010",
		"TestCaseName" : "# 1 (Td) to # 2 (Tdap) interval 28-4 days in child age > 7 years.  Forecast # 3 in six months. ",
		"ExpectedForecast" : {
			"AssessmentDate" : "2006-11-03T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2007-05-03T00:00:00",
			"EvaluationTestType" : "Interval: At Absolute Minimum",
			"ForecastNumber" : 3,
			"ForecastTestType" : "Recommended based on minimum interval from previous dose (catch-up)",
			"PastDueDate" : null,
			"RecommendedDate" : "2007-05-03T00:00:00",
			"VaccineGroup" : "DTaP"
		},
		"PatientProfile" : {
			"Dob" : "1998-07-07T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "09",
					"DateAdministered" : "2006-10-10T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MBL",
					"VaccineName" : "TD(GENERIC)"
				}, {
					"Cvx" : "115",
					"DateAdministered" : "2006-11-03T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "BOOSTRIX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0011",
		"TestCaseName" : "#3 at age 14 weeks-5 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2006-04-09T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2006-05-07T00:00:00",
			"EvaluationTestType" : "Age: Below Absolute Minimum",
			"ForecastNumber" : 3,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2006-09-02T00:00:00",
			"RecommendedDate" : "2006-07-06T00:00:00",
			"VaccineGroup" : "DTaP"
		},
		"PatientProfile" : {
			"Dob" : "2006-01-06T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "107",
					"DateAdministered" : "2006-02-17T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}, {
					"Cvx" : "107",
					"DateAdministered" : "2006-03-17T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}, {
					"Cvx" : "107",
					"DateAdministered" : "2006-04-09T00:00:00",
					"EvaluationReason" : "Age: Too Young",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0012",
		"TestCaseName" : "Age 6.  No vaccinations. Forecast DTaP.",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-12-01T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2006-01-12T00:00:00",
			"EvaluationTestType" : "No Doses Administered",
			"ForecastNumber" : 1,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2006-03-28T00:00:00",
			"RecommendedDate" : "2006-02-01T00:00:00",
			"VaccineGroup" : "DTaP"
		},
		"PatientProfile" : {
			"Dob" : "2005-12-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : []
		}
	}, {
		"CdcTestId" : "2013-0013",
		"TestCaseName" : "#3 at age 14 weeks-4 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2006-04-10T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2007-01-06T00:00:00",
			"EvaluationTestType" : "Age: At Absolute Minimum",
			"ForecastNumber" : 4,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2007-09-02T00:00:00",
			"RecommendedDate" : "2007-04-06T00:00:00",
			"VaccineGroup" : "DTaP"
		},
		"PatientProfile" : {
			"Dob" : "2006-01-06T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "107",
					"DateAdministered" : "2006-02-17T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}, {
					"Cvx" : "107",
					"DateAdministered" : "2006-03-15T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}, {
					"Cvx" : "107",
					"DateAdministered" : "2006-04-10T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0014",
		"TestCaseName" : "#3 at age 14 weeks",
		"ExpectedForecast" : {
			"AssessmentDate" : "2006-04-14T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2007-01-06T00:00:00",
			"EvaluationTestType" : "Age: At Minimum",
			"ForecastNumber" : 4,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2007-09-02T00:00:00",
			"RecommendedDate" : "2007-04-06T00:00:00",
			"VaccineGroup" : "DTaP"
		},
		"PatientProfile" : {
			"Dob" : "2006-01-06T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "107",
					"DateAdministered" : "2006-02-17T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}, {
					"Cvx" : "107",
					"DateAdministered" : "2006-03-17T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}, {
					"Cvx" : "107",
					"DateAdministered" : "2006-04-14T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0015",
		"TestCaseName" : "#3 at age 6 months",
		"ExpectedForecast" : {
			"AssessmentDate" : "2006-08-01T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2007-02-01T00:00:00",
			"EvaluationTestType" : "Age: At Recommended",
			"ForecastNumber" : 4,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2007-09-28T00:00:00",
			"RecommendedDate" : "2007-05-01T00:00:00",
			"VaccineGroup" : "DTaP"
		},
		"PatientProfile" : {
			"Dob" : "2006-02-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "107",
					"DateAdministered" : "2006-04-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}, {
					"Cvx" : "107",
					"DateAdministered" : "2006-05-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}, {
					"Cvx" : "107",
					"DateAdministered" : "2006-08-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0016",
		"TestCaseName" : "Doses # 2 and #3 at ≥ age 7 years; # 1 at age < 12 mo.  Forecast # 4 in 6 mo. ",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-04-16T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2011-10-16T00:00:00",
			"EvaluationTestType" : "All Valid: Forecast Test",
			"ForecastNumber" : 4,
			"ForecastTestType" : "Recommended based on minimum interval from previous dose (catch-up)",
			"PastDueDate" : "2011-10-16T00:00:00",
			"RecommendedDate" : "2011-10-16T00:00:00",
			"VaccineGroup" : "DTaP"
		},
		"PatientProfile" : {
			"Dob" : "2004-03-16T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "107",
					"DateAdministered" : "2004-11-16T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}, {
					"Cvx" : "09",
					"DateAdministered" : "2011-03-16T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MBL",
					"VaccineName" : "TD(GENERIC)"
				}, {
					"Cvx" : "115",
					"DateAdministered" : "2011-04-16T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "BOOSTRIX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0017",
		"TestCaseName" : "Doses # 2 and # 3 at ≥7 years old; dose # 1 at ≥ 12 months old.",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-03-04T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2016-03-04T00:00:00",
			"EvaluationTestType" : "All Valid: Forecast Test",
			"ForecastNumber" : 4,
			"ForecastTestType" : "Recommended based on interval",
			"PastDueDate" : null,
			"RecommendedDate" : "2021-03-04T00:00:00",
			"VaccineGroup" : "DTaP"
		},
		"PatientProfile" : {
			"Dob" : "2003-05-13T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "107",
					"DateAdministered" : "2004-07-15T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}, {
					"Cvx" : "09",
					"DateAdministered" : "2010-05-21T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MBL",
					"VaccineName" : "TD(GENERIC)"
				}, {
					"Cvx" : "115",
					"DateAdministered" : "2011-03-04T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "BOOSTRIX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0019",
		"TestCaseName" : "1 Tdap, 2 Td with appropriate intervals to child ≥ age 7 = UTD for 10 years",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-12-24T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2016-12-24T00:00:00",
			"EvaluationTestType" : "All Valid: Forecast Test",
			"ForecastNumber" : 4,
			"ForecastTestType" : "Recommended based on interval",
			"PastDueDate" : null,
			"RecommendedDate" : "2021-12-24T00:00:00",
			"VaccineGroup" : "DTaP"
		},
		"PatientProfile" : {
			"Dob" : "2004-05-24T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "115",
					"DateAdministered" : "2011-05-25T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "BOOSTRIX"
				}, {
					"Cvx" : "09",
					"DateAdministered" : "2011-06-24T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MBL",
					"VaccineName" : "TD(GENERIC)"
				}, {
					"Cvx" : "09",
					"DateAdministered" : "2011-12-24T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MBL",
					"VaccineName" : "TD(GENERIC)"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0020",
		"TestCaseName" : "1 Tdap, 2 Td to child ≥ 7 years old with 6 mo-5 day interval between doses 2 and 3.",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-11-30T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2012-05-30T00:00:00",
			"EvaluationTestType" : "Interval: Below Absolute Minimum",
			"ForecastNumber" : 3,
			"ForecastTestType" : "Recommended based on minimum interval from invalid dose",
			"PastDueDate" : null,
			"RecommendedDate" : "2012-05-30T00:00:00",
			"VaccineGroup" : "DTaP"
		},
		"PatientProfile" : {
			"Dob" : "2003-05-05T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "115",
					"DateAdministered" : "2011-05-05T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "BOOSTRIX"
				}, {
					"Cvx" : "09",
					"DateAdministered" : "2011-06-05T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MBL",
					"VaccineName" : "TD(GENERIC)"
				}, {
					"Cvx" : "09",
					"DateAdministered" : "2011-11-30T00:00:00",
					"EvaluationReason" : "Interval: Too Short",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : "MBL",
					"VaccineName" : "TD(GENERIC)"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0021",
		"TestCaseName" : "1 Tdap, 2 Td to child ≥ 7 years old with 6 mo-4 day interval between doses 2 and 3. ",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-08-02T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2016-08-02T00:00:00",
			"EvaluationTestType" : "Interval: At Absolute Minimum",
			"ForecastNumber" : 4,
			"ForecastTestType" : "Recommended based on interval",
			"PastDueDate" : null,
			"RecommendedDate" : "2021-08-02T00:00:00",
			"VaccineGroup" : "DTaP"
		},
		"PatientProfile" : {
			"Dob" : "2003-11-11T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "09",
					"DateAdministered" : "2010-11-20T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MBL",
					"VaccineName" : "TD(GENERIC)"
				}, {
					"Cvx" : "115",
					"DateAdministered" : "2011-02-06T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "BOOSTRIX"
				}, {
					"Cvx" : "09",
					"DateAdministered" : "2011-08-02T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MBL",
					"VaccineName" : "TD(GENERIC)"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0022",
		"TestCaseName" : "Age 7.  Two DTaP˂ 12 months old.  Needs Tdap.",
		"ExpectedForecast" : {
			"AssessmentDate" : "2012-01-06T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2012-01-06T00:00:00",
			"EvaluationTestType" : "All Valid: Forecast Test",
			"ForecastNumber" : 3,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2012-01-06T00:00:00",
			"RecommendedDate" : "2012-01-06T00:00:00",
			"VaccineGroup" : "DTaP"
		},
		"PatientProfile" : {
			"Dob" : "2005-01-06T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "107",
					"DateAdministered" : "2005-04-04T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}, {
					"Cvx" : "107",
					"DateAdministered" : "2005-07-10T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0023",
		"TestCaseName" : "Age 7.  No vaccinations.  Forecast Tdap.",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-10-10T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2011-10-10T00:00:00",
			"EvaluationTestType" : "No Doses Administered",
			"ForecastNumber" : 1,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : null,
			"RecommendedDate" : "2011-10-10T00:00:00",
			"VaccineGroup" : "DTaP"
		},
		"PatientProfile" : {
			"Dob" : "2004-10-10T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : []
		}
	}, {
		"CdcTestId" : "2013-0024",
		"TestCaseName" : "Age 7. Two DTaP˂ 12 mos old & 1 ≥ 12 mo.  Needs Tdap.",
		"ExpectedForecast" : {
			"AssessmentDate" : "2012-03-18T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2012-03-18T00:00:00",
			"EvaluationTestType" : "All Valid: Forecast Test",
			"ForecastNumber" : 4,
			"ForecastTestType" : "Recommended based on minimum interval from previous dose (catch-up)",
			"PastDueDate" : null,
			"RecommendedDate" : "2012-03-18T00:00:00",
			"VaccineGroup" : "DTaP"
		},
		"PatientProfile" : {
			"Dob" : "2005-03-18T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "107",
					"DateAdministered" : "2005-06-18T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}, {
					"Cvx" : "107",
					"DateAdministered" : "2005-10-18T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}, {
					"Cvx" : "107",
					"DateAdministered" : "2007-03-20T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0025",
		"TestCaseName" : "#4 at age 12 mo-5 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-03-30T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2011-09-30T00:00:00",
			"EvaluationTestType" : "Age: Below Absolute Minimum",
			"ForecastNumber" : 4,
			"ForecastTestType" : "Recommended based on minimum interval from inValid dose",
			"PastDueDate" : "2011-12-01T00:00:00",
			"RecommendedDate" : "2011-09-30T00:00:00",
			"VaccineGroup" : "DTaP"
		},
		"PatientProfile" : {
			"Dob" : "2010-04-04T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "107",
					"DateAdministered" : "2010-06-04T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}, {
					"Cvx" : "107",
					"DateAdministered" : "2010-08-04T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}, {
					"Cvx" : "107",
					"DateAdministered" : "2010-09-30T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}, {
					"Cvx" : "107",
					"DateAdministered" : "2011-03-30T00:00:00",
					"EvaluationReason" : "Age: Too Young",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0026",
		"TestCaseName" : "#4 at age 12 mo-4 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2006-05-28T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2009-06-01T00:00:00",
			"EvaluationTestType" : "Age: At Absolute Minimum",
			"ForecastNumber" : 5,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2012-05-31T00:00:00",
			"RecommendedDate" : "2009-06-01T00:00:00",
			"VaccineGroup" : "DTaP"
		},
		"PatientProfile" : {
			"Dob" : "2005-06-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "107",
					"DateAdministered" : "2005-08-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}, {
					"Cvx" : "107",
					"DateAdministered" : "2005-10-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}, {
					"Cvx" : "107",
					"DateAdministered" : "2005-11-28T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}, {
					"Cvx" : "107",
					"DateAdministered" : "2006-05-28T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0027",
		"TestCaseName" : "#4 at age ≥ 12 months old",
		"ExpectedForecast" : {
			"AssessmentDate" : "2007-04-04T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2010-04-04T00:00:00",
			"EvaluationTestType" : "Age: At Recommended",
			"ForecastNumber" : 5,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2013-04-03T00:00:00",
			"RecommendedDate" : "2010-04-04T00:00:00",
			"VaccineGroup" : "DTaP"
		},
		"PatientProfile" : {
			"Dob" : "2006-04-04T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "107",
					"DateAdministered" : "2006-06-04T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}, {
					"Cvx" : "107",
					"DateAdministered" : "2006-08-04T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}, {
					"Cvx" : "107",
					"DateAdministered" : "2006-10-04T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}, {
					"Cvx" : "107",
					"DateAdministered" : "2007-04-04T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0028",
		"TestCaseName" : "#4 at age 4 is UTD until age 11.",
		"ExpectedForecast" : {
			"AssessmentDate" : "2010-05-06T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2017-05-06T00:00:00",
			"EvaluationTestType" : "All Valid: Forecast Test",
			"ForecastNumber" : 5,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2019-05-06T00:00:00",
			"RecommendedDate" : "2017-05-06T00:00:00",
			"VaccineGroup" : "DTaP"
		},
		"PatientProfile" : {
			"Dob" : "2006-05-06T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "107",
					"DateAdministered" : "2006-08-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}, {
					"Cvx" : "107",
					"DateAdministered" : "2006-10-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}, {
					"Cvx" : "107",
					"DateAdministered" : "2006-12-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}, {
					"Cvx" : "107",
					"DateAdministered" : "2010-05-06T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0029",
		"TestCaseName" : "5 year old with no previous DTP product receives 4 vaccinations prior to age 7 years",
		"ExpectedForecast" : {
			"AssessmentDate" : "2006-04-30T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2011-02-25T00:00:00",
			"EvaluationTestType" : "All Valid: Forecast Test",
			"ForecastNumber" : 5,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2013-02-25T00:00:00",
			"RecommendedDate" : "2011-02-25T00:00:00",
			"VaccineGroup" : "DTaP"
		},
		"PatientProfile" : {
			"Dob" : "2000-02-25T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "107",
					"DateAdministered" : "2005-02-25T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}, {
					"Cvx" : "107",
					"DateAdministered" : "2005-04-25T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}, {
					"Cvx" : "107",
					"DateAdministered" : "2005-10-27T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}, {
					"Cvx" : "107",
					"DateAdministered" : "2006-04-30T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0030",
		"TestCaseName" : "#5 at age 4 years-5 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2010-06-26T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2010-12-26T00:00:00",
			"EvaluationTestType" : "Age: Below Absolute Minimum",
			"ForecastNumber" : 5,
			"ForecastTestType" : "Recommended based on minimum interval from invalid dose",
			"PastDueDate" : "2013-06-30T00:00:00",
			"RecommendedDate" : "2010-12-26T00:00:00",
			"VaccineGroup" : "DTaP"
		},
		"PatientProfile" : {
			"Dob" : "2006-07-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "107",
					"DateAdministered" : "2006-09-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}, {
					"Cvx" : "107",
					"DateAdministered" : "2006-10-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}, {
					"Cvx" : "107",
					"DateAdministered" : "2006-12-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}, {
					"Cvx" : "107",
					"DateAdministered" : "2007-07-02T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}, {
					"Cvx" : "107",
					"DateAdministered" : "2010-06-26T00:00:00",
					"EvaluationReason" : "Age: Too Young",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0031",
		"TestCaseName" : "#5 at age 4 years-4 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2010-06-27T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2017-07-01T00:00:00",
			"EvaluationTestType" : "Age: At Absolute Minimum",
			"ForecastNumber" : 6,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2019-07-01T00:00:00",
			"RecommendedDate" : "2017-07-01T00:00:00",
			"VaccineGroup" : "DTaP"
		},
		"PatientProfile" : {
			"Dob" : "2006-07-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "107",
					"DateAdministered" : "2006-09-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}, {
					"Cvx" : "107",
					"DateAdministered" : "2006-10-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}, {
					"Cvx" : "107",
					"DateAdministered" : "2006-12-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}, {
					"Cvx" : "107",
					"DateAdministered" : "2007-07-02T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}, {
					"Cvx" : "107",
					"DateAdministered" : "2010-06-27T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0032",
		"TestCaseName" : "# 5 at age 4 years",
		"ExpectedForecast" : {
			"AssessmentDate" : "2010-07-01T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2017-07-01T00:00:00",
			"EvaluationTestType" : "Age: At Minimum",
			"ForecastNumber" : 6,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2019-07-01T00:00:00",
			"RecommendedDate" : "2017-07-01T00:00:00",
			"VaccineGroup" : "DTaP"
		},
		"PatientProfile" : {
			"Dob" : "2006-07-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "107",
					"DateAdministered" : "2006-09-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}, {
					"Cvx" : "107",
					"DateAdministered" : "2006-12-14T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}, {
					"Cvx" : "107",
					"DateAdministered" : "2007-03-03T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}, {
					"Cvx" : "107",
					"DateAdministered" : "2008-09-19T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}, {
					"Cvx" : "107",
					"DateAdministered" : "2010-07-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0033",
		"TestCaseName" : "DTaP #1 at age 6 weeks-5 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-06-07T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2011-06-12T00:00:00",
			"EvaluationTestType" : "Age: Below Absolute Minimum",
			"ForecastNumber" : 1,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2011-08-28T00:00:00",
			"RecommendedDate" : "2011-07-01T00:00:00",
			"VaccineGroup" : "DTaP"
		},
		"PatientProfile" : {
			"Dob" : "2011-05-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "107",
					"DateAdministered" : "2011-06-07T00:00:00",
					"EvaluationReason" : "Age: Too Young",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0034",
		"TestCaseName" : "# 6 DTaP before age 4.  Nothing more until Tdap at age 7 even if some are invalid. ",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-10-02T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2015-04-02T00:00:00",
			"EvaluationTestType" : "Extra Doses",
			"ForecastNumber" : 5,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : null,
			"RecommendedDate" : "2015-04-02T00:00:00",
			"VaccineGroup" : "DTaP"
		},
		"PatientProfile" : {
			"Dob" : "2008-04-02T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "107",
					"DateAdministered" : "2008-06-02T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}, {
					"Cvx" : "107",
					"DateAdministered" : "2008-08-02T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "",
					"VaccineName" : "DTaP Unspecified"
				}, {
					"Cvx" : "107",
					"DateAdministered" : "2008-10-02T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}, {
					"Cvx" : "107",
					"DateAdministered" : "2010-04-02T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "",
					"VaccineName" : "DTaP Unspecified"
				}, {
					"Cvx" : "107",
					"DateAdministered" : "2010-07-02T00:00:00",
					"EvaluationReason" : "Age: Too Young",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : "",
					"VaccineName" : "DTaP Unspecified"
				}, {
					"Cvx" : "107",
					"DateAdministered" : "2011-10-02T00:00:00",
					"EvaluationReason" : "Age: Too Young",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0035",
		"TestCaseName" : "Adolescent with Td but no Tdap.  ",
		"ExpectedForecast" : {
			"AssessmentDate" : "2010-12-12T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2010-12-12T00:00:00",
			"EvaluationTestType" : "All Valid: Forecast Test",
			"ForecastNumber" : 7,
			"ForecastTestType" : "Recommended based on minimum interval from previous dose (catch-up)",
			"PastDueDate" : null,
			"RecommendedDate" : "2010-12-12T00:00:00",
			"VaccineGroup" : "DTaP"
		},
		"PatientProfile" : {
			"Dob" : "1998-04-04T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "107",
					"DateAdministered" : "1998-06-04T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}, {
					"Cvx" : "107",
					"DateAdministered" : "1998-08-04T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}, {
					"Cvx" : "107",
					"DateAdministered" : "1998-10-04T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}, {
					"Cvx" : "107",
					"DateAdministered" : "1999-07-07T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}, {
					"Cvx" : "107",
					"DateAdministered" : "2003-07-02T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}, {
					"Cvx" : "09",
					"DateAdministered" : "2010-12-12T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MBL",
					"VaccineName" : "TD(GENERIC)"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0036",
		"TestCaseName" : "Invalid age for dose # 1 in first of series",
		"ExpectedForecast" : {
			"AssessmentDate" : "2012-02-01T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2012-02-29T00:00:00",
			"EvaluationTestType" : "Age: Below Absolute Minimum",
			"ForecastNumber" : 3,
			"ForecastTestType" : "Recommended based on minimum interval from previous dose (catch-up)",
			"PastDueDate" : "2012-03-28T00:00:00",
			"RecommendedDate" : "2012-02-29T00:00:00",
			"VaccineGroup" : "DTaP"
		},
		"PatientProfile" : {
			"Dob" : "2011-08-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "107",
					"DateAdministered" : "2011-09-01T00:00:00",
					"EvaluationReason" : "Age: Too Young",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}, {
					"Cvx" : "107",
					"DateAdministered" : "2011-12-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}, {
					"Cvx" : "107",
					"DateAdministered" : "2012-02-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0037",
		"TestCaseName" : "Invalid age for  dose # 2 in midst of others",
		"ExpectedForecast" : {
			"AssessmentDate" : "2012-02-01T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2012-02-29T00:00:00",
			"EvaluationTestType" : "Interval: Below Absolute Minimum",
			"ForecastNumber" : 3,
			"ForecastTestType" : "Recommended based on minimum interval from invalid dose",
			"PastDueDate" : "2012-03-28T00:00:00",
			"RecommendedDate" : "2012-02-29T00:00:00",
			"VaccineGroup" : "DTaP"
		},
		"PatientProfile" : {
			"Dob" : "2011-08-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "107",
					"DateAdministered" : "2011-09-30T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}, {
					"Cvx" : "107",
					"DateAdministered" : "2011-10-22T00:00:00",
					"EvaluationReason" : "Interval: Too Short",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}, {
					"Cvx" : "107",
					"DateAdministered" : "2012-02-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0038",
		"TestCaseName" : "Invalid age for dose #3 in midst of others",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-06-02T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2011-12-02T00:00:00",
			"EvaluationTestType" : "Age: Below Absolute Minimum",
			"ForecastNumber" : 4,
			"ForecastTestType" : "Recommended based on minimum interval from invalid dose",
			"PastDueDate" : "2012-01-28T00:00:00",
			"RecommendedDate" : "2011-12-02T00:00:00",
			"VaccineGroup" : "DTaP"
		},
		"PatientProfile" : {
			"Dob" : "2010-06-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "107",
					"DateAdministered" : "2010-07-13T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}, {
					"Cvx" : "107",
					"DateAdministered" : "2010-08-07T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}, {
					"Cvx" : "107",
					"DateAdministered" : "2010-09-01T00:00:00",
					"EvaluationReason" : "Age: Too Young",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}, {
					"Cvx" : "107",
					"DateAdministered" : "2011-06-02T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0039",
		"TestCaseName" : "InValid age for dose # 4 in midst of others ",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-05-01T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2018-05-01T00:00:00",
			"EvaluationTestType" : "Age: Below Absolute Minimum",
			"ForecastNumber" : 5,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2020-05-01T00:00:00",
			"RecommendedDate" : "2018-05-01T00:00:00",
			"VaccineGroup" : "DTaP"
		},
		"PatientProfile" : {
			"Dob" : "2007-05-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "107",
					"DateAdministered" : "2007-07-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}, {
					"Cvx" : "107",
					"DateAdministered" : "2007-09-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}, {
					"Cvx" : "107",
					"DateAdministered" : "2007-10-25T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}, {
					"Cvx" : "107",
					"DateAdministered" : "2008-04-25T00:00:00",
					"EvaluationReason" : "Age: Too Young",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}, {
					"Cvx" : "107",
					"DateAdministered" : "2011-05-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0040",
		"TestCaseName" : "Invalid age dose 5 in midst of others",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-06-06T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2016-06-06T00:00:00",
			"EvaluationTestType" : "Age: Below Absolute Minimum",
			"ForecastNumber" : 6,
			"ForecastTestType" : "Recommended based on interval",
			"PastDueDate" : null,
			"RecommendedDate" : "2021-06-06T00:00:00",
			"VaccineGroup" : "DTaP"
		},
		"PatientProfile" : {
			"Dob" : "2000-06-06T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "107",
					"DateAdministered" : "2000-08-07T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}, {
					"Cvx" : "107",
					"DateAdministered" : "2000-10-09T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}, {
					"Cvx" : "107",
					"DateAdministered" : "2000-12-20T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}, {
					"Cvx" : "107",
					"DateAdministered" : "2001-09-06T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}, {
					"Cvx" : "107",
					"DateAdministered" : "2003-07-02T00:00:00",
					"EvaluationReason" : "Age: Too Young",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}, {
					"Cvx" : "115",
					"DateAdministered" : "2011-06-06T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "BOOSTRIX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0041",
		"TestCaseName" : "Dose 1 to dose 2 interval 28-5 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2006-05-27T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2006-06-24T00:00:00",
			"EvaluationTestType" : "Interval: Below Absolute Minimum",
			"ForecastNumber" : 2,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2006-08-31T00:00:00",
			"RecommendedDate" : "2006-07-04T00:00:00",
			"VaccineGroup" : "DTaP"
		},
		"PatientProfile" : {
			"Dob" : "2006-03-04T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "107",
					"DateAdministered" : "2006-05-04T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}, {
					"Cvx" : "107",
					"DateAdministered" : "2006-05-27T00:00:00",
					"EvaluationReason" : "Interval: Too Short",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0042",
		"TestCaseName" : "Dose 1 to dose 2 interval 28-4 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2006-04-25T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2006-05-23T00:00:00",
			"EvaluationTestType" : "Interval: At Absolute Minimum",
			"ForecastNumber" : 3,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2006-09-28T00:00:00",
			"RecommendedDate" : "2006-08-01T00:00:00",
			"VaccineGroup" : "DTaP"
		},
		"PatientProfile" : {
			"Dob" : "2006-02-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "107",
					"DateAdministered" : "2006-04-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}, {
					"Cvx" : "107",
					"DateAdministered" : "2006-04-25T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0043",
		"TestCaseName" : "Dose 1 to dose 2 interval 28 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2010-07-29T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2010-08-26T00:00:00",
			"EvaluationTestType" : "Interval: At Minimum",
			"ForecastNumber" : 3,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2010-12-04T00:00:00",
			"RecommendedDate" : "2010-10-07T00:00:00",
			"VaccineGroup" : "DTaP"
		},
		"PatientProfile" : {
			"Dob" : "2010-04-07T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "107",
					"DateAdministered" : "2010-07-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}, {
					"Cvx" : "107",
					"DateAdministered" : "2010-07-29T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0044",
		"TestCaseName" : "DTaP #1 at age 6 weeks-4 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2006-05-09T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2006-06-10T00:00:00",
			"EvaluationTestType" : "Age: At Absolute Minimum",
			"ForecastNumber" : 2,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2006-09-28T00:00:00",
			"RecommendedDate" : "2006-08-01T00:00:00",
			"VaccineGroup" : "DTaP"
		},
		"PatientProfile" : {
			"Dob" : "2006-04-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "107",
					"DateAdministered" : "2006-05-09T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0045",
		"TestCaseName" : "Dose 2 to dose 3 interval 28-5 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-08-24T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2011-09-21T00:00:00",
			"EvaluationTestType" : "Interval: Below Absolute Minimum",
			"ForecastNumber" : 3,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2011-12-10T00:00:00",
			"RecommendedDate" : "2011-10-13T00:00:00",
			"VaccineGroup" : "DTaP"
		},
		"PatientProfile" : {
			"Dob" : "2011-04-13T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "107",
					"DateAdministered" : "2011-06-13T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}, {
					"Cvx" : "107",
					"DateAdministered" : "2011-08-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}, {
					"Cvx" : "107",
					"DateAdministered" : "2011-08-24T00:00:00",
					"EvaluationReason" : "Interval: Too Short",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0046",
		"TestCaseName" : "Dose 2 to dose 3 interval 28-4 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2006-03-13T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2006-12-01T00:00:00",
			"EvaluationTestType" : "Interval: At Absolute Minimum",
			"ForecastNumber" : 4,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2007-07-28T00:00:00",
			"RecommendedDate" : "2007-03-01T00:00:00",
			"VaccineGroup" : "DTaP"
		},
		"PatientProfile" : {
			"Dob" : "2005-12-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "107",
					"DateAdministered" : "2006-01-10T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}, {
					"Cvx" : "107",
					"DateAdministered" : "2006-02-17T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}, {
					"Cvx" : "107",
					"DateAdministered" : "2006-03-13T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0047",
		"TestCaseName" : "Dose 2 to dose 3 interval 28 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2006-03-08T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2006-12-01T00:00:00",
			"EvaluationTestType" : "Interval: At Minimum",
			"ForecastNumber" : 4,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2007-07-28T00:00:00",
			"RecommendedDate" : "2007-03-01T00:00:00",
			"VaccineGroup" : "DTaP"
		},
		"PatientProfile" : {
			"Dob" : "2005-12-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "107",
					"DateAdministered" : "2006-01-10T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}, {
					"Cvx" : "107",
					"DateAdministered" : "2006-02-08T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}, {
					"Cvx" : "107",
					"DateAdministered" : "2006-03-08T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0049",
		"TestCaseName" : "Dose 3 to dose 4 interval 6 months-4 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2010-08-11T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2013-08-09T00:00:00",
			"EvaluationTestType" : "All Valid: Forecast Test",
			"ForecastNumber" : 5,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2016-08-08T00:00:00",
			"RecommendedDate" : "2013-08-09T00:00:00",
			"VaccineGroup" : "DTaP"
		},
		"PatientProfile" : {
			"Dob" : "2009-08-09T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "107",
					"DateAdministered" : "2009-10-10T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}, {
					"Cvx" : "107",
					"DateAdministered" : "2009-12-10T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}, {
					"Cvx" : "107",
					"DateAdministered" : "2010-02-15T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}, {
					"Cvx" : "107",
					"DateAdministered" : "2010-08-11T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0050",
		"TestCaseName" : "Dose 3 to dose 4 interval 6 months",
		"ExpectedForecast" : {
			"AssessmentDate" : "2010-08-15T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2013-08-09T00:00:00",
			"EvaluationTestType" : "Interval: At Minimum",
			"ForecastNumber" : 5,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2016-08-08T00:00:00",
			"RecommendedDate" : "2013-08-09T00:00:00",
			"VaccineGroup" : "DTaP"
		},
		"PatientProfile" : {
			"Dob" : "2009-08-09T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "107",
					"DateAdministered" : "2009-10-10T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}, {
					"Cvx" : "107",
					"DateAdministered" : "2009-12-10T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}, {
					"Cvx" : "107",
					"DateAdministered" : "2010-02-15T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}, {
					"Cvx" : "107",
					"DateAdministered" : "2010-08-15T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0051",
		"TestCaseName" : "Dose 3 to dose 4 interval 4 months-1 day.  4 day grace does not apply to reduced intervals. ",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-05-09T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2011-11-09T00:00:00",
			"EvaluationTestType" : "Interval: Below Absolute Minimum",
			"ForecastNumber" : 4,
			"ForecastTestType" : "Recommended based on minimum interval from inValid dose",
			"PastDueDate" : "2011-12-01T00:00:00",
			"RecommendedDate" : "2011-11-09T00:00:00",
			"VaccineGroup" : "DTaP"
		},
		"PatientProfile" : {
			"Dob" : "2010-04-04T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "107",
					"DateAdministered" : "2010-06-04T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}, {
					"Cvx" : "107",
					"DateAdministered" : "2010-08-04T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}, {
					"Cvx" : "107",
					"DateAdministered" : "2011-01-10T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}, {
					"Cvx" : "107",
					"DateAdministered" : "2011-05-09T00:00:00",
					"EvaluationReason" : "Interval: Too Short",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0052",
		"TestCaseName" : "Dose 3 to dose 4 interval 4 months",
		"ExpectedForecast" : {
			"AssessmentDate" : "2010-11-10T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2013-11-10T00:00:00",
			"EvaluationTestType" : "Interval: At Minimum",
			"ForecastNumber" : 5,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2016-11-09T00:00:00",
			"RecommendedDate" : "2013-11-10T00:00:00",
			"VaccineGroup" : "DTaP"
		},
		"PatientProfile" : {
			"Dob" : "2009-11-10T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "107",
					"DateAdministered" : "2010-01-10T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}, {
					"Cvx" : "107",
					"DateAdministered" : "2010-03-10T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}, {
					"Cvx" : "107",
					"DateAdministered" : "2010-07-10T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}, {
					"Cvx" : "107",
					"DateAdministered" : "2010-11-10T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0053",
		"TestCaseName" : "Invalid dose 1 to dose 2 interval in midst of other vaccines ",
		"ExpectedForecast" : {
			"AssessmentDate" : "2010-02-15T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2010-08-15T00:00:00",
			"EvaluationTestType" : "Interval: Below Absolute Minimum",
			"ForecastNumber" : 4,
			"ForecastTestType" : "Recommended based on minimum interval from invalid dose",
			"PastDueDate" : "2010-10-08T00:00:00",
			"RecommendedDate" : "2010-08-15T00:00:00",
			"VaccineGroup" : "DTaP"
		},
		"PatientProfile" : {
			"Dob" : "2009-02-11T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "107",
					"DateAdministered" : "2009-04-11T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}, {
					"Cvx" : "107",
					"DateAdministered" : "2009-05-01T00:00:00",
					"EvaluationReason" : "Interval: Too Short",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}, {
					"Cvx" : "107",
					"DateAdministered" : "2009-08-11T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}, {
					"Cvx" : "107",
					"DateAdministered" : "2010-02-15T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0054",
		"TestCaseName" : "Invalid dose 2 to dose 3 interval in midst of other vaccines.",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-04-04T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2011-10-04T00:00:00",
			"EvaluationTestType" : "Interval: Below Absolute Minimum",
			"ForecastNumber" : 4,
			"ForecastTestType" : "Recommended based on minimum interval from invalid dose",
			"PastDueDate" : "2011-10-04T00:00:00",
			"RecommendedDate" : "2011-10-04T00:00:00",
			"VaccineGroup" : "DTaP"
		},
		"PatientProfile" : {
			"Dob" : "2010-02-02T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "107",
					"DateAdministered" : "2010-04-02T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}, {
					"Cvx" : "107",
					"DateAdministered" : "2010-05-30T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}, {
					"Cvx" : "107",
					"DateAdministered" : "2010-06-21T00:00:00",
					"EvaluationReason" : "Interval: Too Short",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}, {
					"Cvx" : "107",
					"DateAdministered" : "2011-04-04T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0055",
		"TestCaseName" : "DTaP #1 at age 6 weeks",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-12-13T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2012-01-10T00:00:00",
			"EvaluationTestType" : "Age: At Minimum",
			"ForecastNumber" : 2,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2012-04-28T00:00:00",
			"RecommendedDate" : "2012-03-01T00:00:00",
			"VaccineGroup" : "DTaP"
		},
		"PatientProfile" : {
			"Dob" : "2011-11-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "107",
					"DateAdministered" : "2011-12-13T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0056",
		"TestCaseName" : "Invalid dose 3 to dose 4 interval in midst of other vaccinations",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-03-18T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2011-09-18T00:00:00",
			"EvaluationTestType" : "Interval: Below Absolute Minimum",
			"ForecastNumber" : 4,
			"ForecastTestType" : "Recommended based on minimum interval from inValid dose",
			"PastDueDate" : "2011-11-14T00:00:00",
			"RecommendedDate" : "2011-09-18T00:00:00",
			"VaccineGroup" : "DTaP"
		},
		"PatientProfile" : {
			"Dob" : "2010-03-18T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "107",
					"DateAdministered" : "2010-08-18T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}, {
					"Cvx" : "107",
					"DateAdministered" : "2010-10-18T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}, {
					"Cvx" : "107",
					"DateAdministered" : "2010-12-10T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}, {
					"Cvx" : "107",
					"DateAdministered" : "2011-03-18T00:00:00",
					"EvaluationReason" : "Interval: Too Short",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0057",
		"TestCaseName" : "Invalid dose 4 to dose 5 interval in midst of others",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-02-12T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2016-02-12T00:00:00",
			"EvaluationTestType" : "Interval: Below Absolute Minimum",
			"ForecastNumber" : 6,
			"ForecastTestType" : "Recommended based on interval",
			"PastDueDate" : "2022-02-12T00:00:00",
			"RecommendedDate" : "2021-02-12T00:00:00",
			"VaccineGroup" : "DTaP"
		},
		"PatientProfile" : {
			"Dob" : "2000-02-11T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "107",
					"DateAdministered" : "2000-04-11T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}, {
					"Cvx" : "107",
					"DateAdministered" : "2000-06-11T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}, {
					"Cvx" : "107",
					"DateAdministered" : "2000-08-11T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}, {
					"Cvx" : "107",
					"DateAdministered" : "2003-10-30T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}, {
					"Cvx" : "107",
					"DateAdministered" : "2004-02-12T00:00:00",
					"EvaluationReason" : "Interval: Too Short",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}, {
					"Cvx" : "115",
					"DateAdministered" : "2011-02-12T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "BOOSTRIX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0058",
		"TestCaseName" : "Tdap as dose #1",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-04-04T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2011-10-04T00:00:00",
			"EvaluationTestType" : "Vaccine: Invalid Usage",
			"ForecastNumber" : 4,
			"ForecastTestType" : "Recommended based on minimum interval from previous dose (catch-up)",
			"PastDueDate" : "2011-11-01T00:00:00",
			"RecommendedDate" : "2011-10-04T00:00:00",
			"VaccineGroup" : "DTaP"
		},
		"PatientProfile" : {
			"Dob" : "2010-03-05T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "115",
					"DateAdministered" : "2010-05-05T00:00:00",
					"EvaluationReason" : "Vaccine: Invalid Usage",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : "SKB",
					"VaccineName" : "BOOSTRIX"
				}, {
					"Cvx" : "107",
					"DateAdministered" : "2010-07-07T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}, {
					"Cvx" : "107",
					"DateAdministered" : "2010-09-09T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}, {
					"Cvx" : "107",
					"DateAdministered" : "2011-04-04T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0059",
		"TestCaseName" : "Tdap as dose #2",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-03-05T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2011-09-05T00:00:00",
			"EvaluationTestType" : "Vaccine: Invalid Usage",
			"ForecastNumber" : 4,
			"ForecastTestType" : "Recommended based on minimum interval from previous dose (catch-up)",
			"PastDueDate" : "2011-11-01T00:00:00",
			"RecommendedDate" : "2011-09-05T00:00:00",
			"VaccineGroup" : "DTaP"
		},
		"PatientProfile" : {
			"Dob" : "2010-03-05T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "107",
					"DateAdministered" : "2010-05-05T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}, {
					"Cvx" : "115",
					"DateAdministered" : "2010-07-07T00:00:00",
					"EvaluationReason" : "Vaccine: Invalid Usage",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : "SKB",
					"VaccineName" : "BOOSTRIX"
				}, {
					"Cvx" : "107",
					"DateAdministered" : "2010-09-09T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}, {
					"Cvx" : "107",
					"DateAdministered" : "2011-03-05T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0060",
		"TestCaseName" : "Tdap as dose 3 to child under age 4=invalid as DTaP 3",
		"ExpectedForecast" : {
			"AssessmentDate" : "2010-11-01T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2010-11-01T00:00:00",
			"EvaluationTestType" : "Vaccine: Invalid Usage",
			"ForecastNumber" : 3,
			"ForecastTestType" : "Recommended based on minimum interval from invalid dose",
			"PastDueDate" : "2010-11-01T00:00:00",
			"RecommendedDate" : "2010-11-01T00:00:00",
			"VaccineGroup" : "DTaP"
		},
		"PatientProfile" : {
			"Dob" : "2010-02-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "107",
					"DateAdministered" : "2010-05-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}, {
					"Cvx" : "107",
					"DateAdministered" : "2010-07-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}, {
					"Cvx" : "115",
					"DateAdministered" : "2010-11-01T00:00:00",
					"EvaluationReason" : "Vaccine: Invalid Usage",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : "SKB",
					"VaccineName" : "BOOSTRIX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0061",
		"TestCaseName" : "Tdap as dose 4 to age 15 months=valid as DTaP",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-05-05T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2014-02-01T00:00:00",
			"EvaluationTestType" : "Vaccine: Off Label",
			"ForecastNumber" : 5,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2017-01-31T00:00:00",
			"RecommendedDate" : "2014-02-01T00:00:00",
			"VaccineGroup" : "DTaP"
		},
		"PatientProfile" : {
			"Dob" : "2010-02-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "107",
					"DateAdministered" : "2010-05-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}, {
					"Cvx" : "107",
					"DateAdministered" : "2010-07-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}, {
					"Cvx" : "107",
					"DateAdministered" : "2010-11-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}, {
					"Cvx" : "115",
					"DateAdministered" : "2011-05-05T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "BOOSTRIX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0062",
		"TestCaseName" : "Tdap as dose 5 to age 4 years-5 days=invalid as dose 5 of DTaP",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-02-06T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2011-08-06T00:00:00",
			"EvaluationTestType" : "Age: Below Absolute Minimum",
			"ForecastNumber" : 5,
			"ForecastTestType" : "Recommended based on minimum interval from invalid dose",
			"PastDueDate" : "2014-02-10T00:00:00",
			"RecommendedDate" : "2011-08-06T00:00:00",
			"VaccineGroup" : "DTaP"
		},
		"PatientProfile" : {
			"Dob" : "2007-02-11T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "107",
					"DateAdministered" : "2007-05-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}, {
					"Cvx" : "107",
					"DateAdministered" : "2007-07-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}, {
					"Cvx" : "107",
					"DateAdministered" : "2007-11-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}, {
					"Cvx" : "107",
					"DateAdministered" : "2008-06-06T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}, {
					"Cvx" : "115",
					"DateAdministered" : "2011-02-06T00:00:00",
					"EvaluationReason" : "Age: Too Young",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : "SKB",
					"VaccineName" : "BOOSTRIX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0063",
		"TestCaseName" : "Tdap as dose 5 to age 4-4 days. Counts as valid DTaP.  Child will need another Tdap in adolescence.",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-02-07T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2018-02-11T00:00:00",
			"EvaluationTestType" : "Age: At Absolute Minimum",
			"ForecastNumber" : 6,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2020-02-11T00:00:00",
			"RecommendedDate" : "2018-02-11T00:00:00",
			"VaccineGroup" : "DTaP"
		},
		"PatientProfile" : {
			"Dob" : "2007-02-11T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "107",
					"DateAdministered" : "2007-05-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}, {
					"Cvx" : "107",
					"DateAdministered" : "2007-07-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}, {
					"Cvx" : "107",
					"DateAdministered" : "2007-11-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}, {
					"Cvx" : "107",
					"DateAdministered" : "2008-06-06T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}, {
					"Cvx" : "115",
					"DateAdministered" : "2011-02-07T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "BOOSTRIX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0064",
		"TestCaseName" : "Tdap as dose 5 to age 4 years old=valid as DTaP 5.  ",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-02-11T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2018-02-11T00:00:00",
			"EvaluationTestType" : "Vaccine: Off Label",
			"ForecastNumber" : 6,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : null,
			"RecommendedDate" : "2018-02-11T00:00:00",
			"VaccineGroup" : "DTaP"
		},
		"PatientProfile" : {
			"Dob" : "2007-02-11T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "107",
					"DateAdministered" : "2007-05-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}, {
					"Cvx" : "107",
					"DateAdministered" : "2007-07-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}, {
					"Cvx" : "107",
					"DateAdministered" : "2007-11-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}, {
					"Cvx" : "107",
					"DateAdministered" : "2008-06-06T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}, {
					"Cvx" : "115",
					"DateAdministered" : "2011-02-11T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "BOOSTRIX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0065",
		"TestCaseName" : "Tdap as dose 1 at age 7 years old",
		"ExpectedForecast" : {
			"AssessmentDate" : "2012-01-01T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2012-01-29T00:00:00",
			"EvaluationTestType" : "All Valid: Forecast Test",
			"ForecastNumber" : 2,
			"ForecastTestType" : "Recommended based on minimum interval from previous dose (catch-up)",
			"PastDueDate" : "2012-01-29T00:00:00",
			"RecommendedDate" : "2012-01-29T00:00:00",
			"VaccineGroup" : "DTaP"
		},
		"PatientProfile" : {
			"Dob" : "2005-01-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "115",
					"DateAdministered" : "2012-01-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "BOOSTRIX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0066",
		"TestCaseName" : "DTaP # 1 at age 2 months",
		"ExpectedForecast" : {
			"AssessmentDate" : "2012-01-01T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2012-01-29T00:00:00",
			"EvaluationTestType" : "Age: At Recommended",
			"ForecastNumber" : 2,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2012-04-28T00:00:00",
			"RecommendedDate" : "2012-03-01T00:00:00",
			"VaccineGroup" : "DTaP"
		},
		"PatientProfile" : {
			"Dob" : "2011-11-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "107",
					"DateAdministered" : "2012-01-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0067",
		"TestCaseName" : "Tdap as dose 2 at age ≥7 years",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-11-13T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2012-05-13T00:00:00",
			"EvaluationTestType" : "Interval: At Minimum",
			"ForecastNumber" : 3,
			"ForecastTestType" : "Recommended based on minimum interval from previous dose (catch-up)",
			"PastDueDate" : null,
			"RecommendedDate" : "2012-05-13T00:00:00",
			"VaccineGroup" : "DTaP"
		},
		"PatientProfile" : {
			"Dob" : "2004-09-16T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "09",
					"DateAdministered" : "2011-10-16T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MBL",
					"VaccineName" : "TD(GENERIC)"
				}, {
					"Cvx" : "115",
					"DateAdministered" : "2011-11-13T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "BOOSTRIX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0068",
		"TestCaseName" : "Tdap as dose 3 to ≥ 7 years old",
		"ExpectedForecast" : {
			"AssessmentDate" : "2012-04-28T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2017-04-28T00:00:00",
			"EvaluationTestType" : "Interval: At Minimum",
			"ForecastNumber" : 4,
			"ForecastTestType" : "Recommended based on interval",
			"PastDueDate" : null,
			"RecommendedDate" : "2022-04-28T00:00:00",
			"VaccineGroup" : "DTaP"
		},
		"PatientProfile" : {
			"Dob" : "2004-09-20T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "107",
					"DateAdministered" : "2011-09-30T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}, {
					"Cvx" : "107",
					"DateAdministered" : "2011-10-28T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}, {
					"Cvx" : "115",
					"DateAdministered" : "2012-04-28T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "BOOSTRIX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0069",
		"TestCaseName" : "Tdap at age 7 years-5 days. Current age 7 years",
		"ExpectedForecast" : {
			"AssessmentDate" : "2010-03-08T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2010-03-08T00:00:00",
			"EvaluationTestType" : "Age: Below Absolute Minimum",
			"ForecastNumber" : 1,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : null,
			"RecommendedDate" : "2010-03-08T00:00:00",
			"VaccineGroup" : "DTaP"
		},
		"PatientProfile" : {
			"Dob" : "2003-03-08T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "115",
					"DateAdministered" : "2010-03-03T00:00:00",
					"EvaluationReason" : "Vaccine: Invalid Usage",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : "SKB",
					"VaccineName" : "BOOSTRIX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0070",
		"TestCaseName" : "Tdap at age 11 to child up-to-date with DTaP",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-05-09T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2016-05-09T00:00:00",
			"EvaluationTestType" : "All Valid: Forecast Test",
			"ForecastNumber" : 7,
			"ForecastTestType" : "Recommended based on interval",
			"PastDueDate" : null,
			"RecommendedDate" : "2021-05-09T00:00:00",
			"VaccineGroup" : "DTaP"
		},
		"PatientProfile" : {
			"Dob" : "2000-03-03T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "107",
					"DateAdministered" : "2000-05-05T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}, {
					"Cvx" : "107",
					"DateAdministered" : "2000-07-07T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}, {
					"Cvx" : "107",
					"DateAdministered" : "2000-09-09T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}, {
					"Cvx" : "107",
					"DateAdministered" : "2001-04-04T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}, {
					"Cvx" : "107",
					"DateAdministered" : "2004-05-09T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}, {
					"Cvx" : "115",
					"DateAdministered" : "2011-05-09T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "BOOSTRIX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0071",
		"TestCaseName" : "Encephalopathy within 7 days of DTaP. Further pertussis is contraindicated.",
		"ExpectedForecast" : {
			"AssessmentDate" : "2006-05-05T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2012-02-02T00:00:00",
			"EvaluationTestType" : "All Valid: Forecast Test",
			"ForecastNumber" : 6,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2014-02-02T00:00:00",
			"RecommendedDate" : "2012-02-02T00:00:00",
			"VaccineGroup" : "DTaP"
		},
		"PatientProfile" : {
			"Dob" : "2001-02-02T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : "VXC22",
			"MedHistoryCodeSys" : "CDCPHINVS",
			"MedHistoryText" : "encephalopathy within 7 days of previous dose of DTP or DTaP",
			"Series" : [{
					"Cvx" : "107",
					"DateAdministered" : "2001-04-02T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}, {
					"Cvx" : "28",
					"DateAdministered" : "2001-06-02T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "DT(GENERIC)"
				}, {
					"Cvx" : "28",
					"DateAdministered" : "2001-08-02T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "DT(GENERIC)"
				}, {
					"Cvx" : "28",
					"DateAdministered" : "2002-05-02T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "DT(GENERIC)"
				}, {
					"Cvx" : "28",
					"DateAdministered" : "2006-05-05T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "DT(GENERIC)"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0072",
		"TestCaseName" : "Encephalopathy within 7 days of DTaP # 5",
		"ExpectedForecast" : {
			"AssessmentDate" : "2004-08-10T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2011-08-01T00:00:00",
			"EvaluationTestType" : "All Valid: Forecast Test",
			"ForecastNumber" : 6,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2013-08-01T00:00:00",
			"RecommendedDate" : "2011-08-01T00:00:00",
			"VaccineGroup" : "DTaP"
		},
		"PatientProfile" : {
			"Dob" : "2000-08-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : "VXC22",
			"MedHistoryCodeSys" : "CDCPHINVS",
			"MedHistoryText" : "encephalopathy within 7 days of previous dose of DTP or DTaP",
			"Series" : [{
					"Cvx" : "107",
					"DateAdministered" : "2000-10-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}, {
					"Cvx" : "107",
					"DateAdministered" : "2000-12-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}, {
					"Cvx" : "107",
					"DateAdministered" : "2001-02-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}, {
					"Cvx" : "107",
					"DateAdministered" : "2001-11-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}, {
					"Cvx" : "107",
					"DateAdministered" : "2004-08-10T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0073",
		"TestCaseName" : "Anaphylaxis to previous dose",
		"ExpectedForecast" : {
			"AssessmentDate" : "2010-12-10T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "All Valid: Forecast Test",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: contraindication",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "DTaP"
		},
		"PatientProfile" : {
			"Dob" : "2010-10-10T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : "VXC20",
			"MedHistoryCodeSys" : "CDCPHINVS",
			"MedHistoryText" : "allergy to previous dose of this vaccine or to any of its unlisted vaccine components (anaphylactic)",
			"Series" : [{
					"Cvx" : "107",
					"DateAdministered" : "2010-12-10T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0074",
		"TestCaseName" : "4 doses of Tetramune to child DOB 1999.",
		"ExpectedForecast" : {
			"AssessmentDate" : "2002-05-05T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2006-05-05T00:00:00",
			"EvaluationTestType" : "All Valid: Forecast Test",
			"ForecastNumber" : 5,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2008-05-05T00:00:00",
			"RecommendedDate" : "2006-05-05T00:00:00",
			"VaccineGroup" : "DTaP"
		},
		"PatientProfile" : {
			"Dob" : "1995-05-05T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "22",
					"DateAdministered" : "1995-07-05T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "WAL",
					"VaccineName" : "TETRAMUNE"
				}, {
					"Cvx" : "22",
					"DateAdministered" : "1995-09-05T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "WAL",
					"VaccineName" : "TETRAMUNE"
				}, {
					"Cvx" : "22",
					"DateAdministered" : "1995-11-05T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "WAL",
					"VaccineName" : "TETRAMUNE"
				}, {
					"Cvx" : "22",
					"DateAdministered" : "1996-10-05T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "WAL",
					"VaccineName" : "TETRAMUNE"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0075",
		"TestCaseName" : "4 doses of Tetramune with a DTaP booster.  Forecast Tdap.",
		"ExpectedForecast" : {
			"AssessmentDate" : "2004-12-01T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2010-12-12T00:00:00",
			"EvaluationTestType" : "All Valid: Forecast Test",
			"ForecastNumber" : 6,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2012-12-12T00:00:00",
			"RecommendedDate" : "2010-12-12T00:00:00",
			"VaccineGroup" : "DTaP"
		},
		"PatientProfile" : {
			"Dob" : "1999-12-12T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "22",
					"DateAdministered" : "2000-02-15T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "WAL",
					"VaccineName" : "TETRAMUNE"
				}, {
					"Cvx" : "22",
					"DateAdministered" : "2000-04-15T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "WAL",
					"VaccineName" : "TETRAMUNE"
				}, {
					"Cvx" : "22",
					"DateAdministered" : "2000-06-15T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "WAL",
					"VaccineName" : "TETRAMUNE"
				}, {
					"Cvx" : "22",
					"DateAdministered" : "2001-02-15T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "WAL",
					"VaccineName" : "TETRAMUNE"
				}, {
					"Cvx" : "107",
					"DateAdministered" : "2004-12-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0076",
		"TestCaseName" : "4 Tetramune and Tdap at age 11=UTD for 10 years",
		"ExpectedForecast" : {
			"AssessmentDate" : "2007-03-18T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2012-03-18T00:00:00",
			"EvaluationTestType" : "All Valid: Forecast Test",
			"ForecastNumber" : 6,
			"ForecastTestType" : "Recommended based on interval",
			"PastDueDate" : null,
			"RecommendedDate" : "2017-03-18T00:00:00",
			"VaccineGroup" : "DTaP"
		},
		"PatientProfile" : {
			"Dob" : "1996-03-03T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "22",
					"DateAdministered" : "1996-05-05T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "WAL",
					"VaccineName" : "TETRAMUNE"
				}, {
					"Cvx" : "22",
					"DateAdministered" : "1996-08-08T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "WAL",
					"VaccineName" : "TETRAMUNE"
				}, {
					"Cvx" : "22",
					"DateAdministered" : "1997-01-04T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "WAL",
					"VaccineName" : "TETRAMUNE"
				}, {
					"Cvx" : "22",
					"DateAdministered" : "1998-04-04T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "WAL",
					"VaccineName" : "TETRAMUNE"
				}, {
					"Cvx" : "115",
					"DateAdministered" : "2007-03-18T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "BOOSTRIX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0077",
		"TestCaseName" : "DTaP #1 at age 6.5 years. ",
		"ExpectedForecast" : {
			"AssessmentDate" : "2012-05-01T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2012-05-29T00:00:00",
			"EvaluationTestType" : "All Valid: Forecast Test",
			"ForecastNumber" : 2,
			"ForecastTestType" : "Recommended based on minimum interval from previous dose (catch-up)",
			"PastDueDate" : "2012-05-29T00:00:00",
			"RecommendedDate" : "2012-05-29T00:00:00",
			"VaccineGroup" : "DTaP"
		},
		"PatientProfile" : {
			"Dob" : "2005-11-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "107",
					"DateAdministered" : "2012-05-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0078",
		"TestCaseName" : "TriHibit as primary dose.  DTaP=valid.  (Hib=invalid).",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-07-01T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2011-07-29T00:00:00",
			"EvaluationTestType" : "Vaccine: Off Label",
			"ForecastNumber" : 2,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2011-10-28T00:00:00",
			"RecommendedDate" : "2011-09-01T00:00:00",
			"VaccineGroup" : "DTaP"
		},
		"PatientProfile" : {
			"Dob" : "2011-05-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "50",
					"DateAdministered" : "2011-07-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "TRIHIBIT"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0079",
		"TestCaseName" : "TriHibit as valid dose 4 of DTaP",
		"ExpectedForecast" : {
			"AssessmentDate" : "2009-05-19T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2012-02-02T00:00:00",
			"EvaluationTestType" : "Vaccine: Off Label",
			"ForecastNumber" : 5,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2015-02-01T00:00:00",
			"RecommendedDate" : "2012-02-02T00:00:00",
			"VaccineGroup" : "DTaP"
		},
		"PatientProfile" : {
			"Dob" : "2008-02-02T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "107",
					"DateAdministered" : "2008-04-04T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}, {
					"Cvx" : "107",
					"DateAdministered" : "2008-06-06T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}, {
					"Cvx" : "107",
					"DateAdministered" : "2008-08-08T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}, {
					"Cvx" : "50",
					"DateAdministered" : "2009-05-19T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "TRIHIBIT"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0080",
		"TestCaseName" : "TriHibit as valid dose 5 of DTaP",
		"ExpectedForecast" : {
			"AssessmentDate" : "2010-10-09T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2017-10-08T00:00:00",
			"EvaluationTestType" : "All Valid: Forecast Test",
			"ForecastNumber" : 6,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2018-11-04T00:00:00",
			"RecommendedDate" : "2017-10-08T00:00:00",
			"VaccineGroup" : "DTaP"
		},
		"PatientProfile" : {
			"Dob" : "2006-10-08T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "110",
					"DateAdministered" : "2006-11-29T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2007-01-29T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2007-03-29T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2008-02-02T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "50",
					"DateAdministered" : "2010-10-09T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "TRIHIBIT"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0081",
		"TestCaseName" : "Pentavalente (Mexico) DTP-Hib-Hep  counts as valid. ",
		"ExpectedForecast" : {
			"AssessmentDate" : "2010-12-27T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2013-10-18T00:00:00",
			"EvaluationTestType" : "Vaccine: Off Label",
			"ForecastNumber" : 5,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2016-10-17T00:00:00",
			"RecommendedDate" : "2013-10-18T00:00:00",
			"VaccineGroup" : "DTaP"
		},
		"PatientProfile" : {
			"Dob" : "2009-10-18T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "102",
					"DateAdministered" : "2010-02-18T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "PENTAVALENTE"
				}, {
					"Cvx" : "102",
					"DateAdministered" : "2010-04-18T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "",
					"VaccineName" : "PENTAVALENTE"
				}, {
					"Cvx" : "102",
					"DateAdministered" : "2010-06-18T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "PENTAVALENTE"
				}, {
					"Cvx" : "102",
					"DateAdministered" : "2010-12-27T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "",
					"VaccineName" : "PENTAVALENTE"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0082",
		"TestCaseName" : "Kinrix at age 2 months as Dose 1 of DTaP.  Off label but valid. ",
		"ExpectedForecast" : {
			"AssessmentDate" : "2012-01-11T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2012-02-08T00:00:00",
			"EvaluationTestType" : "Vaccine: Off Label",
			"ForecastNumber" : 2,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2012-05-08T00:00:00",
			"RecommendedDate" : "2012-03-11T00:00:00",
			"VaccineGroup" : "DTaP"
		},
		"PatientProfile" : {
			"Dob" : "2011-11-11T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "130",
					"DateAdministered" : "2012-01-11T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "KINRIX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0083",
		"TestCaseName" : "Kinrix at age 4 months as dose 2 of DTaP.  Off label but valid. ",
		"ExpectedForecast" : {
			"AssessmentDate" : "2012-01-09T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2012-02-06T00:00:00",
			"EvaluationTestType" : "Vaccine: Off Label",
			"ForecastNumber" : 3,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2012-05-06T00:00:00",
			"RecommendedDate" : "2012-03-09T00:00:00",
			"VaccineGroup" : "DTaP"
		},
		"PatientProfile" : {
			"Dob" : "2011-09-09T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "107",
					"DateAdministered" : "2011-11-15T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}, {
					"Cvx" : "130",
					"DateAdministered" : "2012-01-09T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "KINRIX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0084",
		"TestCaseName" : "Kinrix at age 6 months as dose 3 of DTaP.  Off label but valid. ",
		"ExpectedForecast" : {
			"AssessmentDate" : "2012-01-07T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2012-07-07T00:00:00",
			"EvaluationTestType" : "Vaccine: Off Label",
			"ForecastNumber" : 4,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2013-03-06T00:00:00",
			"RecommendedDate" : "2012-10-07T00:00:00",
			"VaccineGroup" : "DTaP"
		},
		"PatientProfile" : {
			"Dob" : "2011-07-07T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "107",
					"DateAdministered" : "2011-09-09T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}, {
					"Cvx" : "107",
					"DateAdministered" : "2011-11-11T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}, {
					"Cvx" : "130",
					"DateAdministered" : "2012-01-07T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "KINRIX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0085",
		"TestCaseName" : "Kinrix at age 12 months as dose 4 of DTaP=valid",
		"ExpectedForecast" : {
			"AssessmentDate" : "2007-07-07T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2010-07-07T00:00:00",
			"EvaluationTestType" : "Age: At Minimum",
			"ForecastNumber" : 5,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2013-07-06T00:00:00",
			"RecommendedDate" : "2010-07-07T00:00:00",
			"VaccineGroup" : "DTaP"
		},
		"PatientProfile" : {
			"Dob" : "2006-07-07T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "107",
					"DateAdministered" : "2006-09-09T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}, {
					"Cvx" : "107",
					"DateAdministered" : "2006-11-11T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}, {
					"Cvx" : "107",
					"DateAdministered" : "2006-12-30T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}, {
					"Cvx" : "130",
					"DateAdministered" : "2007-07-07T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "KINRIX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0086",
		"TestCaseName" : "Kinrix at age 4 to child with appropriate DTaP=UTD until adolescence",
		"ExpectedForecast" : {
			"AssessmentDate" : "2010-10-04T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2017-10-04T00:00:00",
			"EvaluationTestType" : "Age: At Minimum",
			"ForecastNumber" : 6,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2018-10-04T00:00:00",
			"RecommendedDate" : "2017-10-04T00:00:00",
			"VaccineGroup" : "DTaP"
		},
		"PatientProfile" : {
			"Dob" : "2006-10-04T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "110",
					"DateAdministered" : "2006-12-06T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2007-02-04T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2007-04-06T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2007-10-04T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "130",
					"DateAdministered" : "2010-10-04T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "KINRIX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0087",
		"TestCaseName" : "Kinrix at age 4 years-5 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-07-02T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2012-01-02T00:00:00",
			"EvaluationTestType" : "Age: Below Absolute Minimum",
			"ForecastNumber" : 5,
			"ForecastTestType" : "Recommended based on minimum interval from invalid dose",
			"PastDueDate" : "2014-07-06T00:00:00",
			"RecommendedDate" : "2012-01-02T00:00:00",
			"VaccineGroup" : "DTaP"
		},
		"PatientProfile" : {
			"Dob" : "2007-07-07T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "110",
					"DateAdministered" : "2007-08-30T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2007-10-24T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2008-03-05T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2008-11-19T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "130",
					"DateAdministered" : "2011-07-02T00:00:00",
					"EvaluationReason" : "Age: Too Young",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : "SKB",
					"VaccineName" : "KINRIX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0088",
		"TestCaseName" : "DTaP # 1 at age 7 years (off label but counts as valid). ",
		"ExpectedForecast" : {
			"AssessmentDate" : "2012-02-01T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2012-02-29T00:00:00",
			"EvaluationTestType" : "Vaccine: Off Label",
			"ForecastNumber" : 2,
			"ForecastTestType" : "Recommended based on minimum interval from previous dose (catch-up)",
			"PastDueDate" : "2012-02-29T00:00:00",
			"RecommendedDate" : "2012-02-29T00:00:00",
			"VaccineGroup" : "DTaP"
		},
		"PatientProfile" : {
			"Dob" : "2005-02-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "107",
					"DateAdministered" : "2012-02-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0089",
		"TestCaseName" : "Kinrix at age 4 years -4 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-10-14T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2018-10-18T00:00:00",
			"EvaluationTestType" : "Age: At Absolute Minimum",
			"ForecastNumber" : 6,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : null,
			"RecommendedDate" : "2018-10-18T00:00:00",
			"VaccineGroup" : "DTaP"
		},
		"PatientProfile" : {
			"Dob" : "2007-10-18T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "110",
					"DateAdministered" : "2007-12-07T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2008-02-04T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2008-04-04T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2008-12-27T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "130",
					"DateAdministered" : "2011-10-14T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "KINRIX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0090",
		"TestCaseName" : "Newborn forecasting",
		"ExpectedForecast" : {
			"AssessmentDate" : "2012-04-01T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2012-05-13T00:00:00",
			"EvaluationTestType" : "No Doses Administered",
			"ForecastNumber" : 1,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2012-07-28T00:00:00",
			"RecommendedDate" : "2012-06-01T00:00:00",
			"VaccineGroup" : "DTaP"
		},
		"PatientProfile" : {
			"Dob" : "2012-04-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : []
		}
	}, {
		"CdcTestId" : "2013-0091",
		"TestCaseName" : "# 2 Pediarix at 6 yrs 11.5 mo",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-12-15T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2012-01-12T00:00:00",
			"EvaluationTestType" : "All Valid: Forecast Test",
			"ForecastNumber" : 3,
			"ForecastTestType" : "Recommended based on minimum interval from previous dose (catch-up)",
			"PastDueDate" : "2012-01-12T00:00:00",
			"RecommendedDate" : "2012-01-12T00:00:00",
			"VaccineGroup" : "DTaP"
		},
		"PatientProfile" : {
			"Dob" : "2005-01-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "110",
					"DateAdministered" : "2007-12-16T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2011-12-15T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0092",
		"TestCaseName" : "# 2 Pediarix at 7 yrs; # 1 at less than 12 mo. ",
		"ExpectedForecast" : {
			"AssessmentDate" : "2010-09-16T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2010-10-14T00:00:00",
			"EvaluationTestType" : "All Valid: Forecast Test",
			"ForecastNumber" : 3,
			"ForecastTestType" : "Recommended based on minimum interval from previous dose (catch-up)",
			"PastDueDate" : null,
			"RecommendedDate" : "2010-10-14T00:00:00",
			"VaccineGroup" : "DTaP"
		},
		"PatientProfile" : {
			"Dob" : "2003-09-16T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "110",
					"DateAdministered" : "2003-12-16T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2010-09-16T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0093",
		"TestCaseName" : "# 2 Pediarix at 7 yrs; # 1 ≥ 12 mo. Need 6 mo interval from 2 to 3.",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-09-16T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2012-03-16T00:00:00",
			"EvaluationTestType" : "All Valid: Forecast Test",
			"ForecastNumber" : 3,
			"ForecastTestType" : "Recommended based on minimum interval from previous dose (catch-up)",
			"PastDueDate" : null,
			"RecommendedDate" : "2012-03-16T00:00:00",
			"VaccineGroup" : "DTaP"
		},
		"PatientProfile" : {
			"Dob" : "2004-09-16T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "110",
					"DateAdministered" : "2005-10-16T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2011-09-16T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0094",
		"TestCaseName" : "# 1 and 2 Pediarix at ≥7 yrs  with 28 day interval.  Off label but does not need repeating. ",
		"ExpectedForecast" : {
			"AssessmentDate" : "2009-08-04T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2010-02-04T00:00:00",
			"EvaluationTestType" : "Interval: At Minimum",
			"ForecastNumber" : 3,
			"ForecastTestType" : "Recommended based on minimum interval from previous dose (catch-up)",
			"PastDueDate" : "2010-02-04T00:00:00",
			"RecommendedDate" : "2010-02-04T00:00:00",
			"VaccineGroup" : "DTaP"
		},
		"PatientProfile" : {
			"Dob" : "2002-07-07T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "110",
					"DateAdministered" : "2009-07-07T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2009-08-04T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0095",
		"TestCaseName" : "# 3 Pediarix at 14 wks-5 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2005-09-02T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2005-09-30T00:00:00",
			"EvaluationTestType" : "Age: Below Absolute Minimum",
			"ForecastNumber" : 3,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2006-01-28T00:00:00",
			"RecommendedDate" : "2005-12-01T00:00:00",
			"VaccineGroup" : "DTaP"
		},
		"PatientProfile" : {
			"Dob" : "2005-06-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "110",
					"DateAdministered" : "2005-07-09T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2005-08-06T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2005-09-02T00:00:00",
					"EvaluationReason" : "Age: Too Young",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0096",
		"TestCaseName" : "# 3 Pediarix at 14 wks-4 days.",
		"ExpectedForecast" : {
			"AssessmentDate" : "2006-04-10T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2007-01-06T00:00:00",
			"EvaluationTestType" : "Age: At Absolute Minimum",
			"ForecastNumber" : 4,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2007-09-02T00:00:00",
			"RecommendedDate" : "2007-04-06T00:00:00",
			"VaccineGroup" : "DTaP"
		},
		"PatientProfile" : {
			"Dob" : "2006-01-06T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "110",
					"DateAdministered" : "2006-02-15T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2006-03-15T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2006-04-10T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0097",
		"TestCaseName" : "#3 Pediarix at age 24 weeks- 5 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-10-23T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2012-05-13T00:00:00",
			"EvaluationTestType" : "All Valid: Forecast Test",
			"ForecastNumber" : 4,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2013-01-09T00:00:00",
			"RecommendedDate" : "2012-08-13T00:00:00",
			"VaccineGroup" : "DTaP"
		},
		"PatientProfile" : {
			"Dob" : "2011-05-13T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "110",
					"DateAdministered" : "2011-06-24T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2011-08-24T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2011-10-23T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0099",
		"TestCaseName" : "# 3 Pediarix at 6 yrs 11.5 mo",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-06-25T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2011-12-25T00:00:00",
			"EvaluationTestType" : "All Valid: Forecast Test",
			"ForecastNumber" : 4,
			"ForecastTestType" : "Recommended based on minimum interval from previous dose (catch-up)",
			"PastDueDate" : "2011-12-25T00:00:00",
			"RecommendedDate" : "2011-12-25T00:00:00",
			"VaccineGroup" : "DTaP"
		},
		"PatientProfile" : {
			"Dob" : "2004-07-07T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "110",
					"DateAdministered" : "2007-05-05T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2008-08-08T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2011-06-25T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0100",
		"TestCaseName" : "# 4 Pediarix at 1 yr -5 days.",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-03-30T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2011-09-30T00:00:00",
			"EvaluationTestType" : "Age: Below Absolute Minimum",
			"ForecastNumber" : 4,
			"ForecastTestType" : "Recommended based on minimum interval from inValid dose",
			"PastDueDate" : "2011-12-01T00:00:00",
			"RecommendedDate" : "2011-09-30T00:00:00",
			"VaccineGroup" : "DTaP"
		},
		"PatientProfile" : {
			"Dob" : "2010-04-04T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "110",
					"DateAdministered" : "2010-06-04T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2010-08-04T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2010-10-10T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2011-03-30T00:00:00",
					"EvaluationReason" : "Age: Too Young",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0101",
		"TestCaseName" : "# 1 Pediarix at 6 wks-5 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-06-12T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2011-06-17T00:00:00",
			"EvaluationTestType" : "Age: Below Absolute Minimum",
			"ForecastNumber" : 1,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2011-09-02T00:00:00",
			"RecommendedDate" : "2011-07-06T00:00:00",
			"VaccineGroup" : "DTaP"
		},
		"PatientProfile" : {
			"Dob" : "2011-05-06T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "110",
					"DateAdministered" : "2011-06-12T00:00:00",
					"EvaluationReason" : "Age: Too Young",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0102",
		"TestCaseName" : "# 4 Pediarix at 1 yr -4 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2006-05-28T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2009-06-01T00:00:00",
			"EvaluationTestType" : "Age: At Absolute Minimum",
			"ForecastNumber" : 5,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2012-05-31T00:00:00",
			"RecommendedDate" : "2009-06-01T00:00:00",
			"VaccineGroup" : "DTaP"
		},
		"PatientProfile" : {
			"Dob" : "2005-06-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "110",
					"DateAdministered" : "2005-08-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2005-11-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2006-01-15T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2006-05-28T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0103",
		"TestCaseName" : "# 4 Pediarix at 3 yrs 11.5 mo. ",
		"ExpectedForecast" : {
			"AssessmentDate" : "2012-01-15T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2012-07-15T00:00:00",
			"EvaluationTestType" : "All Valid: Forecast Test",
			"ForecastNumber" : 5,
			"ForecastTestType" : "Recommended based on minimum interval from previous dose (catch-up)",
			"PastDueDate" : "2015-01-31T00:00:00",
			"RecommendedDate" : "2012-07-15T00:00:00",
			"VaccineGroup" : "DTaP"
		},
		"PatientProfile" : {
			"Dob" : "2008-02-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "110",
					"DateAdministered" : "2008-04-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2008-07-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2008-10-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2012-01-15T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0104",
		"TestCaseName" : "# 4 Pediarix at 4 yrs=complete until age 11",
		"ExpectedForecast" : {
			"AssessmentDate" : "2010-05-06T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2017-05-06T00:00:00",
			"EvaluationTestType" : "All Valid: Forecast Test",
			"ForecastNumber" : 5,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : null,
			"RecommendedDate" : "2017-05-06T00:00:00",
			"VaccineGroup" : "DTaP"
		},
		"PatientProfile" : {
			"Dob" : "2006-05-06T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "110",
					"DateAdministered" : "2006-09-09T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2007-03-03T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2008-07-10T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2010-05-06T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0105",
		"TestCaseName" : "# 5 Pediarix at 4 yrs -5 days.",
		"ExpectedForecast" : {
			"AssessmentDate" : "2010-06-26T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2010-12-26T00:00:00",
			"EvaluationTestType" : "Age: Below Absolute Minimum",
			"ForecastNumber" : 5,
			"ForecastTestType" : "Recommended based on minimum interval from invalid dose",
			"PastDueDate" : "2013-06-30T00:00:00",
			"RecommendedDate" : "2010-12-26T00:00:00",
			"VaccineGroup" : "DTaP"
		},
		"PatientProfile" : {
			"Dob" : "2006-07-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "110",
					"DateAdministered" : "2006-09-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2006-10-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2007-02-02T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2007-10-10T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2010-06-26T00:00:00",
					"EvaluationReason" : "Age: Too Young",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0106",
		"TestCaseName" : "# 5 Pediarix at 4 yrs -4 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2010-06-27T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2017-07-01T00:00:00",
			"EvaluationTestType" : "Age: At Absolute Minimum",
			"ForecastNumber" : 6,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : null,
			"RecommendedDate" : "2017-07-01T00:00:00",
			"VaccineGroup" : "DTaP"
		},
		"PatientProfile" : {
			"Dob" : "2006-07-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "110",
					"DateAdministered" : "2006-09-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2006-10-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2007-02-02T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2007-10-10T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2010-06-27T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0107",
		"TestCaseName" : "# 5 Pediarix at 6 yrs 11.5 mo",
		"ExpectedForecast" : {
			"AssessmentDate" : "2012-03-15T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2016-04-01T00:00:00",
			"EvaluationTestType" : "All Valid: Forecast Test",
			"ForecastNumber" : 6,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : null,
			"RecommendedDate" : "2016-04-01T00:00:00",
			"VaccineGroup" : "DTaP"
		},
		"PatientProfile" : {
			"Dob" : "2005-04-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "110",
					"DateAdministered" : "2005-06-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2005-08-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2005-10-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2006-05-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2012-03-15T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0108",
		"TestCaseName" : "# 5 Pediarix at 7 yrs.  Off label but valid. ",
		"ExpectedForecast" : {
			"AssessmentDate" : "2012-05-01T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2016-05-01T00:00:00",
			"EvaluationTestType" : "Vaccine: Off Label",
			"ForecastNumber" : 6,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2017-05-01T00:00:00",
			"RecommendedDate" : "2016-05-01T00:00:00",
			"VaccineGroup" : "DTaP"
		},
		"PatientProfile" : {
			"Dob" : "2005-05-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "110",
					"DateAdministered" : "2005-08-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2005-11-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2006-02-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2006-11-16T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2012-05-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0109",
		"TestCaseName" : "Invalid age dose 1 as first of others. ",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-11-01T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2011-11-29T00:00:00",
			"EvaluationTestType" : "Age: Below Absolute Minimum",
			"ForecastNumber" : 2,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2012-01-28T00:00:00",
			"RecommendedDate" : "2011-12-01T00:00:00",
			"VaccineGroup" : "DTaP"
		},
		"PatientProfile" : {
			"Dob" : "2011-08-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "110",
					"DateAdministered" : "2011-09-07T00:00:00",
					"EvaluationReason" : "Age: Too Young",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2011-11-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0110",
		"TestCaseName" : "Invalid age dose 2 in midst of others",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-04-18T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2011-05-16T00:00:00",
			"EvaluationTestType" : "Age: Below Absolute Minimum",
			"ForecastNumber" : 3,
			"ForecastTestType" : "Recommended based on minimum interval from previous dose (catch-up)",
			"PastDueDate" : "2011-06-14T00:00:00",
			"RecommendedDate" : "2011-05-16T00:00:00",
			"VaccineGroup" : "DTaP"
		},
		"PatientProfile" : {
			"Dob" : "2010-10-18T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "110",
					"DateAdministered" : "2010-11-25T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2010-12-21T00:00:00",
					"EvaluationReason" : "Age: Too Young",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2011-04-18T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0111",
		"TestCaseName" : "invalid age dose 3 in midst of others",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-06-01T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2011-12-01T00:00:00",
			"EvaluationTestType" : "Interval: Below Absolute Minimum",
			"ForecastNumber" : 4,
			"ForecastTestType" : "Recommended based on minimum interval from previous dose (catch-up)",
			"PastDueDate" : "2012-01-28T00:00:00",
			"RecommendedDate" : "2011-12-01T00:00:00",
			"VaccineGroup" : "DTaP"
		},
		"PatientProfile" : {
			"Dob" : "2010-06-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "110",
					"DateAdministered" : "2010-07-15T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2010-08-10T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2010-09-01T00:00:00",
					"EvaluationReason" : "Interval: Too Short",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2011-06-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0112",
		"TestCaseName" : "# 1 Pediarix at 6 wks-4 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2006-05-12T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2006-06-13T00:00:00",
			"EvaluationTestType" : "Age: At Absolute Minimum",
			"ForecastNumber" : 2,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2006-10-01T00:00:00",
			"RecommendedDate" : "2006-08-04T00:00:00",
			"VaccineGroup" : "DTaP"
		},
		"PatientProfile" : {
			"Dob" : "2006-04-04T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "110",
					"DateAdministered" : "2006-05-12T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0113",
		"TestCaseName" : "dose 1 to 2 Pediarix, interval 28-5 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-01-26T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2011-02-23T00:00:00",
			"EvaluationTestType" : "Interval: Below Absolute Minimum",
			"ForecastNumber" : 2,
			"ForecastTestType" : "Recommended based on minimum interval from invalid dose",
			"PastDueDate" : "2011-04-28T00:00:00",
			"RecommendedDate" : "2011-03-01T00:00:00",
			"VaccineGroup" : "DTaP"
		},
		"PatientProfile" : {
			"Dob" : "2010-11-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "110",
					"DateAdministered" : "2011-01-03T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2011-01-26T00:00:00",
					"EvaluationReason" : "Interval: Too Short",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0114",
		"TestCaseName" : "dose 1 to 2 Pediarix, interval 28-4 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2006-04-25T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2006-05-23T00:00:00",
			"EvaluationTestType" : "Interval: At Absolute Minimum",
			"ForecastNumber" : 3,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2006-09-28T00:00:00",
			"RecommendedDate" : "2006-08-01T00:00:00",
			"VaccineGroup" : "DTaP"
		},
		"PatientProfile" : {
			"Dob" : "2006-02-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "110",
					"DateAdministered" : "2006-04-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2006-04-25T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0115",
		"TestCaseName" : "dose 2 to 3 Pediarix, interval 28-5 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-08-24T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2011-09-21T00:00:00",
			"EvaluationTestType" : "Interval: Below Absolute Minimum",
			"ForecastNumber" : 3,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2011-11-28T00:00:00",
			"RecommendedDate" : "2011-10-01T00:00:00",
			"VaccineGroup" : "DTaP"
		},
		"PatientProfile" : {
			"Dob" : "2011-04-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "110",
					"DateAdministered" : "2011-06-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2011-08-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2011-08-24T00:00:00",
					"EvaluationReason" : "Interval: Too Short",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0116",
		"TestCaseName" : "dose 2 to 3 Pediarix, interval 28-4 days.",
		"ExpectedForecast" : {
			"AssessmentDate" : "2006-04-25T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2006-12-01T00:00:00",
			"EvaluationTestType" : "Interval: At Absolute Minimum",
			"ForecastNumber" : 4,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2007-07-28T00:00:00",
			"RecommendedDate" : "2007-03-01T00:00:00",
			"VaccineGroup" : "DTaP"
		},
		"PatientProfile" : {
			"Dob" : "2005-12-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "110",
					"DateAdministered" : "2006-02-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2006-04-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2006-04-25T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0117",
		"TestCaseName" : "dose 3 to 4 Pediarix, interval 6m-5 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2010-10-04T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2013-08-09T00:00:00",
			"EvaluationTestType" : "All Valid: Forecast Test",
			"ForecastNumber" : 5,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2016-08-08T00:00:00",
			"RecommendedDate" : "2013-08-09T00:00:00",
			"VaccineGroup" : "DTaP"
		},
		"PatientProfile" : {
			"Dob" : "2009-08-09T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "110",
					"DateAdministered" : "2009-10-09T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2009-12-09T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2010-04-09T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2010-10-04T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0118",
		"TestCaseName" : "dose 3 to 4 Pediarix, interval 6m-4 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2010-10-05T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2013-08-09T00:00:00",
			"EvaluationTestType" : "All Valid: Forecast Test",
			"ForecastNumber" : 5,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2016-08-08T00:00:00",
			"RecommendedDate" : "2013-08-09T00:00:00",
			"VaccineGroup" : "DTaP"
		},
		"PatientProfile" : {
			"Dob" : "2009-08-09T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "110",
					"DateAdministered" : "2009-10-09T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2009-12-09T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2010-04-09T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2010-10-05T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0119",
		"TestCaseName" : "dose 3 to 4 Pediarix, interval 4 mo-1 day.",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-06-03T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2011-12-03T00:00:00",
			"EvaluationTestType" : "Interval: Below Absolute Minimum",
			"ForecastNumber" : 4,
			"ForecastTestType" : "Recommended based on minimum interval from inValid dose",
			"PastDueDate" : "2011-12-03T00:00:00",
			"RecommendedDate" : "2011-12-03T00:00:00",
			"VaccineGroup" : "DTaP"
		},
		"PatientProfile" : {
			"Dob" : "2010-04-04T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "110",
					"DateAdministered" : "2010-06-04T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2010-08-04T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2011-02-04T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2011-06-03T00:00:00",
					"EvaluationReason" : "Interval: Too Short",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0120",
		"TestCaseName" : "dose 3 to 4 Pediarix, interval 4 mo",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-06-04T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2014-04-04T00:00:00",
			"EvaluationTestType" : "Interval: At Absolute Minimum",
			"ForecastNumber" : 5,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2017-04-03T00:00:00",
			"RecommendedDate" : "2014-04-04T00:00:00",
			"VaccineGroup" : "DTaP"
		},
		"PatientProfile" : {
			"Dob" : "2010-04-04T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "110",
					"DateAdministered" : "2010-06-04T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2010-08-04T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2011-02-04T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2011-06-04T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0121",
		"TestCaseName" : "invalid dose 1-2 interval in midst of others",
		"ExpectedForecast" : {
			"AssessmentDate" : "2009-06-11T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2009-07-09T00:00:00",
			"EvaluationTestType" : "Interval: Below Absolute Minimum",
			"ForecastNumber" : 3,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2009-10-08T00:00:00",
			"RecommendedDate" : "2009-08-11T00:00:00",
			"VaccineGroup" : "DTaP"
		},
		"PatientProfile" : {
			"Dob" : "2009-02-11T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "110",
					"DateAdministered" : "2009-04-11T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2009-04-30T00:00:00",
					"EvaluationReason" : "Interval: Too Short",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2009-06-11T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0122",
		"TestCaseName" : "invalid dose 2-3 interval in midst of others",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-02-02T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2011-08-02T00:00:00",
			"EvaluationTestType" : "Interval: Below Absolute Minimum",
			"ForecastNumber" : 4,
			"ForecastTestType" : "Recommended based on minimum interval from previous dose (catch-up)",
			"PastDueDate" : "2011-09-29T00:00:00",
			"RecommendedDate" : "2011-08-02T00:00:00",
			"VaccineGroup" : "DTaP"
		},
		"PatientProfile" : {
			"Dob" : "2010-02-02T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "110",
					"DateAdministered" : "2010-04-02T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2010-06-02T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2010-06-25T00:00:00",
					"EvaluationReason" : "Interval: Too Short",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2011-02-02T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0123",
		"TestCaseName" : "# 1 Pediarix at 6 wks",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-12-13T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2012-01-10T00:00:00",
			"EvaluationTestType" : "Age: At Minimum",
			"ForecastNumber" : 2,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2012-04-28T00:00:00",
			"RecommendedDate" : "2012-03-01T00:00:00",
			"VaccineGroup" : "DTaP"
		},
		"PatientProfile" : {
			"Dob" : "2011-11-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "110",
					"DateAdministered" : "2011-12-13T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0124",
		"TestCaseName" : "inValid dose 3-4 interval in midst of others",
		"ExpectedForecast" : {
			"AssessmentDate" : "2012-03-20T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2019-03-18T00:00:00",
			"EvaluationTestType" : "Interval: Below Absolute Minimum",
			"ForecastNumber" : 5,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2021-03-18T00:00:00",
			"RecommendedDate" : "2019-03-18T00:00:00",
			"VaccineGroup" : "DTaP"
		},
		"PatientProfile" : {
			"Dob" : "2008-03-18T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "110",
					"DateAdministered" : "2008-05-18T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2008-07-18T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2009-02-12T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2009-06-10T00:00:00",
					"EvaluationReason" : "Interval: Too Short",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2012-03-20T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0125",
		"TestCaseName" : "Encephalopathy within 7 days of Pediarix. ",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-04-02T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2011-04-30T00:00:00",
			"EvaluationTestType" : "All Valid: Forecast Test",
			"ForecastNumber" : 2,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2011-07-29T00:00:00",
			"RecommendedDate" : "2011-06-02T00:00:00",
			"VaccineGroup" : "DTaP"
		},
		"PatientProfile" : {
			"Dob" : "2011-02-02T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : "VXC22",
			"MedHistoryCodeSys" : "CDCPHINVS",
			"MedHistoryText" : "encephalopathy within 7 days of previous dose of DTP or DTaP",
			"Series" : [{
					"Cvx" : "110",
					"DateAdministered" : "2011-04-02T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0126",
		"TestCaseName" : "Anaphylaxis to previous dose of Pediarix",
		"ExpectedForecast" : {
			"AssessmentDate" : "2010-12-15T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "All Valid: Forecast Test",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: contraindication",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "DTaP"
		},
		"PatientProfile" : {
			"Dob" : "2010-10-10T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : "VXC20",
			"MedHistoryCodeSys" : "CDCPHINVS",
			"MedHistoryText" : "allergy to previous dose of this vaccine or to any of its unlisted vaccine components (anaphylactic)",
			"Series" : [{
					"Cvx" : "110",
					"DateAdministered" : "2010-12-15T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0127",
		"TestCaseName" : "# 1 Pediarix at 6 yrs 11.5 mo",
		"ExpectedForecast" : {
			"AssessmentDate" : "2012-03-16T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2012-04-13T00:00:00",
			"EvaluationTestType" : "All Valid: Forecast Test",
			"ForecastNumber" : 2,
			"ForecastTestType" : "Recommended based on minimum interval from previous dose (catch-up)",
			"PastDueDate" : "2012-04-13T00:00:00",
			"RecommendedDate" : "2012-04-13T00:00:00",
			"VaccineGroup" : "DTaP"
		},
		"PatientProfile" : {
			"Dob" : "2005-04-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "110",
					"DateAdministered" : "2012-03-16T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0128",
		"TestCaseName" : "# 1 Pediarix at 7 yrs",
		"ExpectedForecast" : {
			"AssessmentDate" : "2012-02-01T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2012-02-29T00:00:00",
			"EvaluationTestType" : "All Valid: Forecast Test",
			"ForecastNumber" : 2,
			"ForecastTestType" : "Recommended based on minimum interval from previous dose (catch-up)",
			"PastDueDate" : "2012-02-29T00:00:00",
			"RecommendedDate" : "2012-02-29T00:00:00",
			"VaccineGroup" : "DTaP"
		},
		"PatientProfile" : {
			"Dob" : "2005-02-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "110",
					"DateAdministered" : "2012-02-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0129",
		"TestCaseName" : "# 2 Pediarix at 10 wks-5 days.",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-12-14T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2012-01-11T00:00:00",
			"EvaluationTestType" : "Age: Below Absolute Minimum",
			"ForecastNumber" : 2,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2012-04-06T00:00:00",
			"RecommendedDate" : "2012-02-10T00:00:00",
			"VaccineGroup" : "DTaP"
		},
		"PatientProfile" : {
			"Dob" : "2011-10-10T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "110",
					"DateAdministered" : "2011-11-17T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2011-12-14T00:00:00",
					"EvaluationReason" : "Age: Too Young",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0130",
		"TestCaseName" : "# 2 Pediarix at 10 wks-4 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-05-03T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2011-06-04T00:00:00",
			"EvaluationTestType" : "Age: At Absolute Minimum",
			"ForecastNumber" : 3,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2011-10-23T00:00:00",
			"RecommendedDate" : "2011-08-26T00:00:00",
			"VaccineGroup" : "DTaP"
		},
		"PatientProfile" : {
			"Dob" : "2011-02-26T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "110",
					"DateAdministered" : "2011-04-09T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2011-05-03T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0131",
		"TestCaseName" : "# 2 Pediarix at 10 wks",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-05-07T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2011-06-04T00:00:00",
			"EvaluationTestType" : "Age: At Minimum",
			"ForecastNumber" : 3,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2011-10-23T00:00:00",
			"RecommendedDate" : "2011-08-26T00:00:00",
			"VaccineGroup" : "DTaP"
		},
		"PatientProfile" : {
			"Dob" : "2011-02-26T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "110",
					"DateAdministered" : "2011-04-09T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2011-05-07T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0132",
		"TestCaseName" : "Newborn",
		"ExpectedForecast" : {
			"AssessmentDate" : "2012-02-01T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2012-03-14T00:00:00",
			"EvaluationTestType" : "No Doses Administered",
			"ForecastNumber" : 1,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2012-05-28T00:00:00",
			"RecommendedDate" : "2012-04-01T00:00:00",
			"VaccineGroup" : "DTaP"
		},
		"PatientProfile" : {
			"Dob" : "2012-02-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : []
		}
	}, {
		"CdcTestId" : "2013-0133",
		"TestCaseName" : "# 2 Pentacel at 6 yrs 11.5 mo. Off label but counts. Current Age 7 years",
		"ExpectedForecast" : {
			"AssessmentDate" : "2012-01-01T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2012-06-15T00:00:00",
			"EvaluationTestType" : "All Valid: Forecast Test",
			"ForecastNumber" : 3,
			"ForecastTestType" : "Recommended based on minimum interval from previous dose (catch-up)",
			"PastDueDate" : null,
			"RecommendedDate" : "2012-06-15T00:00:00",
			"VaccineGroup" : "DTaP"
		},
		"PatientProfile" : {
			"Dob" : "2005-01-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "120",
					"DateAdministered" : "2007-09-22T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}, {
					"Cvx" : "120",
					"DateAdministered" : "2011-12-15T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0134",
		"TestCaseName" : "# 2 Pentacel at 7 yrs; # 1 at age < 12 mo",
		"ExpectedForecast" : {
			"AssessmentDate" : "2010-09-20T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2010-10-18T00:00:00",
			"EvaluationTestType" : "All Valid: Forecast Test",
			"ForecastNumber" : 3,
			"ForecastTestType" : "Recommended based on minimum interval from previous dose (catch-up)",
			"PastDueDate" : null,
			"RecommendedDate" : "2010-10-18T00:00:00",
			"VaccineGroup" : "DTaP"
		},
		"PatientProfile" : {
			"Dob" : "2003-09-16T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "107",
					"DateAdministered" : "2004-02-25T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}, {
					"Cvx" : "120",
					"DateAdministered" : "2010-09-20T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0135",
		"TestCaseName" : "# 2 Pentacel at 7 yrs; # 1 at age ≥ 12 mo.",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-09-20T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2012-03-20T00:00:00",
			"EvaluationTestType" : "All Valid: Forecast Test",
			"ForecastNumber" : 3,
			"ForecastTestType" : "Recommended based on minimum interval from previous dose (catch-up)",
			"PastDueDate" : null,
			"RecommendedDate" : "2012-03-20T00:00:00",
			"VaccineGroup" : "DTaP"
		},
		"PatientProfile" : {
			"Dob" : "2004-09-16T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "107",
					"DateAdministered" : "2005-11-19T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}, {
					"Cvx" : "120",
					"DateAdministered" : "2011-09-20T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0136",
		"TestCaseName" : "# 3 Pentacel at 14 wks-5 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2010-09-02T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2010-09-30T00:00:00",
			"EvaluationTestType" : "Age: Below Absolute Minimum",
			"ForecastNumber" : 3,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2011-01-28T00:00:00",
			"RecommendedDate" : "2010-12-01T00:00:00",
			"VaccineGroup" : "DTaP"
		},
		"PatientProfile" : {
			"Dob" : "2010-06-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "120",
					"DateAdministered" : "2010-07-09T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}, {
					"Cvx" : "120",
					"DateAdministered" : "2010-08-06T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}, {
					"Cvx" : "120",
					"DateAdministered" : "2010-09-02T00:00:00",
					"EvaluationReason" : "Age: Too Young",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0137",
		"TestCaseName" : "# 3 Pentacel at 14 wks-4 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2010-09-03T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2011-06-01T00:00:00",
			"EvaluationTestType" : "Age: At Absolute Minimum",
			"ForecastNumber" : 4,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2012-01-28T00:00:00",
			"RecommendedDate" : "2011-09-01T00:00:00",
			"VaccineGroup" : "DTaP"
		},
		"PatientProfile" : {
			"Dob" : "2010-06-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "120",
					"DateAdministered" : "2010-07-09T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}, {
					"Cvx" : "120",
					"DateAdministered" : "2010-08-06T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}, {
					"Cvx" : "120",
					"DateAdministered" : "2010-09-03T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0138",
		"TestCaseName" : "# 3 Pentacel at 6 yrs 11.5 mo",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-12-30T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2012-06-30T00:00:00",
			"EvaluationTestType" : "All Valid: Forecast Test",
			"ForecastNumber" : 4,
			"ForecastTestType" : "Recommended based on minimum interval from previous dose (catch-up)",
			"PastDueDate" : "2012-06-30T00:00:00",
			"RecommendedDate" : "2012-06-30T00:00:00",
			"VaccineGroup" : "DTaP"
		},
		"PatientProfile" : {
			"Dob" : "2005-01-15T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "107",
					"DateAdministered" : "2005-03-12T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}, {
					"Cvx" : "107",
					"DateAdministered" : "2008-06-15T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "DTaP Unspecified"
				}, {
					"Cvx" : "120",
					"DateAdministered" : "2011-12-30T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0139",
		"TestCaseName" : "# 4 Pentacel at 1 yr -5 days.  ",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-03-30T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2011-09-30T00:00:00",
			"EvaluationTestType" : "Age: Below Absolute Minimum",
			"ForecastNumber" : 4,
			"ForecastTestType" : "Recommended based on minimum interval from inValid dose",
			"PastDueDate" : "2011-12-01T00:00:00",
			"RecommendedDate" : "2011-09-30T00:00:00",
			"VaccineGroup" : "DTaP"
		},
		"PatientProfile" : {
			"Dob" : "2010-04-04T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "120",
					"DateAdministered" : "2010-06-04T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}, {
					"Cvx" : "120",
					"DateAdministered" : "2010-08-04T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}, {
					"Cvx" : "120",
					"DateAdministered" : "2010-10-04T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}, {
					"Cvx" : "120",
					"DateAdministered" : "2011-03-30T00:00:00",
					"EvaluationReason" : "Age: Too Young",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0140",
		"TestCaseName" : "# 4 Pentacel at 1 yr -4 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-03-31T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2014-04-04T00:00:00",
			"EvaluationTestType" : "Age: At Absolute Minimum",
			"ForecastNumber" : 5,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2017-04-03T00:00:00",
			"RecommendedDate" : "2014-04-04T00:00:00",
			"VaccineGroup" : "DTaP"
		},
		"PatientProfile" : {
			"Dob" : "2010-04-04T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "120",
					"DateAdministered" : "2010-06-04T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}, {
					"Cvx" : "120",
					"DateAdministered" : "2010-08-04T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}, {
					"Cvx" : "120",
					"DateAdministered" : "2010-10-04T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}, {
					"Cvx" : "120",
					"DateAdministered" : "2011-03-31T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0141",
		"TestCaseName" : "# 4 Pentacel at age 12 mo",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-04-04T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2014-04-04T00:00:00",
			"EvaluationTestType" : "Age: At Minimum",
			"ForecastNumber" : 5,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2017-04-03T00:00:00",
			"RecommendedDate" : "2014-04-04T00:00:00",
			"VaccineGroup" : "DTaP"
		},
		"PatientProfile" : {
			"Dob" : "2010-04-04T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "120",
					"DateAdministered" : "2010-06-04T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}, {
					"Cvx" : "120",
					"DateAdministered" : "2010-08-04T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}, {
					"Cvx" : "120",
					"DateAdministered" : "2010-10-04T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}, {
					"Cvx" : "120",
					"DateAdministered" : "2011-04-04T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0142",
		"TestCaseName" : "# 4 Pentacel at 4 yrs",
		"ExpectedForecast" : {
			"AssessmentDate" : "2010-05-06T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2017-05-06T00:00:00",
			"EvaluationTestType" : "All Valid: Forecast Test",
			"ForecastNumber" : 5,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2019-05-06T00:00:00",
			"RecommendedDate" : "2017-05-06T00:00:00",
			"VaccineGroup" : "DTaP"
		},
		"PatientProfile" : {
			"Dob" : "2006-05-06T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "120",
					"DateAdministered" : "2006-09-15T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}, {
					"Cvx" : "120",
					"DateAdministered" : "2007-04-28T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}, {
					"Cvx" : "120",
					"DateAdministered" : "2009-11-02T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}, {
					"Cvx" : "120",
					"DateAdministered" : "2010-05-06T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0143",
		"TestCaseName" : "# 5 Pentacel at ≥ 4 yrs",
		"ExpectedForecast" : {
			"AssessmentDate" : "2012-03-01T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2019-02-08T00:00:00",
			"EvaluationTestType" : "All Valid: Forecast Test",
			"ForecastNumber" : 6,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2020-02-08T00:00:00",
			"RecommendedDate" : "2019-02-08T00:00:00",
			"VaccineGroup" : "DTaP"
		},
		"PatientProfile" : {
			"Dob" : "2008-02-08T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "120",
					"DateAdministered" : "2009-01-08T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}, {
					"Cvx" : "120",
					"DateAdministered" : "2009-04-08T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}, {
					"Cvx" : "120",
					"DateAdministered" : "2009-07-08T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}, {
					"Cvx" : "120",
					"DateAdministered" : "2009-12-09T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}, {
					"Cvx" : "120",
					"DateAdministered" : "2012-03-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0144",
		"TestCaseName" : "# 4 Pentacel at 5 yrs=off label but counts. ",
		"ExpectedForecast" : {
			"AssessmentDate" : "2012-02-08T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2018-02-08T00:00:00",
			"EvaluationTestType" : "All Valid: Forecast Test",
			"ForecastNumber" : 5,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2020-02-08T00:00:00",
			"RecommendedDate" : "2018-02-08T00:00:00",
			"VaccineGroup" : "DTaP"
		},
		"PatientProfile" : {
			"Dob" : "2007-02-08T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "120",
					"DateAdministered" : "2007-06-08T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}, {
					"Cvx" : "120",
					"DateAdministered" : "2007-12-05T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}, {
					"Cvx" : "120",
					"DateAdministered" : "2008-02-07T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}, {
					"Cvx" : "120",
					"DateAdministered" : "2012-02-08T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0145",
		"TestCaseName" : "invalid age dose 2 in midst of others",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-10-20T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2012-04-20T00:00:00",
			"EvaluationTestType" : "Age: Below Absolute Minimum",
			"ForecastNumber" : 4,
			"ForecastTestType" : "Recommended based on minimum interval from previous dose (catch-up)",
			"PastDueDate" : "2012-06-14T00:00:00",
			"RecommendedDate" : "2012-04-20T00:00:00",
			"VaccineGroup" : "DTaP"
		},
		"PatientProfile" : {
			"Dob" : "2010-10-18T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "120",
					"DateAdministered" : "2010-11-25T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}, {
					"Cvx" : "120",
					"DateAdministered" : "2010-12-22T00:00:00",
					"EvaluationReason" : "Age: Too Young",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}, {
					"Cvx" : "120",
					"DateAdministered" : "2011-03-10T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}, {
					"Cvx" : "120",
					"DateAdministered" : "2011-10-20T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0146",
		"TestCaseName" : "invalid age dose 3 in midst of others",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-07-07T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2012-01-07T00:00:00",
			"EvaluationTestType" : "Age: Below Absolute Minimum",
			"ForecastNumber" : 4,
			"ForecastTestType" : "Recommended based on minimum interval from previous dose (catch-up)",
			"PastDueDate" : "2012-01-28T00:00:00",
			"RecommendedDate" : "2012-01-07T00:00:00",
			"VaccineGroup" : "DTaP"
		},
		"PatientProfile" : {
			"Dob" : "2010-06-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "120",
					"DateAdministered" : "2010-07-09T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}, {
					"Cvx" : "120",
					"DateAdministered" : "2010-08-06T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}, {
					"Cvx" : "120",
					"DateAdministered" : "2010-09-02T00:00:00",
					"EvaluationReason" : "Age: Too Young",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}, {
					"Cvx" : "120",
					"DateAdministered" : "2011-07-07T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0147",
		"TestCaseName" : "dose 1 to 2 Pentacel, interval 28-5 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2010-01-26T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2010-02-23T00:00:00",
			"EvaluationTestType" : "Interval: Below Absolute Minimum",
			"ForecastNumber" : 2,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2010-05-06T00:00:00",
			"RecommendedDate" : "2010-03-09T00:00:00",
			"VaccineGroup" : "DTaP"
		},
		"PatientProfile" : {
			"Dob" : "2009-11-09T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "120",
					"DateAdministered" : "2010-01-03T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}, {
					"Cvx" : "120",
					"DateAdministered" : "2010-01-26T00:00:00",
					"EvaluationReason" : "Interval: Too Short",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0148",
		"TestCaseName" : "dose 1 to 2 Pentacel, interval 28-4 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2010-01-27T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2010-02-24T00:00:00",
			"EvaluationTestType" : "Interval: At Absolute Minimum",
			"ForecastNumber" : 3,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2010-06-28T00:00:00",
			"RecommendedDate" : "2010-05-01T00:00:00",
			"VaccineGroup" : "DTaP"
		},
		"PatientProfile" : {
			"Dob" : "2009-11-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "120",
					"DateAdministered" : "2010-01-03T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}, {
					"Cvx" : "120",
					"DateAdministered" : "2010-01-27T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0149",
		"TestCaseName" : "dose 2 to 3 Pentacel, interval 28-5 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2008-08-24T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2008-09-21T00:00:00",
			"EvaluationTestType" : "Interval: Below Absolute Minimum",
			"ForecastNumber" : 3,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2008-11-28T00:00:00",
			"RecommendedDate" : "2008-10-01T00:00:00",
			"VaccineGroup" : "DTaP"
		},
		"PatientProfile" : {
			"Dob" : "2008-04-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "120",
					"DateAdministered" : "2008-06-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}, {
					"Cvx" : "120",
					"DateAdministered" : "2008-08-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}, {
					"Cvx" : "120",
					"DateAdministered" : "2008-08-24T00:00:00",
					"EvaluationReason" : "Interval: Too Short",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0150",
		"TestCaseName" : "dose 2 to 3 Pentacel, interval 28-4 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2008-08-25T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2009-04-01T00:00:00",
			"EvaluationTestType" : "Interval: At Absolute Minimum",
			"ForecastNumber" : 4,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2009-11-28T00:00:00",
			"RecommendedDate" : "2009-07-01T00:00:00",
			"VaccineGroup" : "DTaP"
		},
		"PatientProfile" : {
			"Dob" : "2008-04-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "120",
					"DateAdministered" : "2008-06-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}, {
					"Cvx" : "120",
					"DateAdministered" : "2008-08-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}, {
					"Cvx" : "120",
					"DateAdministered" : "2008-08-25T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0152",
		"TestCaseName" : "# 1 Pentacel at 6 wks-4 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2008-05-12T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2008-06-13T00:00:00",
			"EvaluationTestType" : "Age: At Absolute Minimum",
			"ForecastNumber" : 2,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2008-10-01T00:00:00",
			"RecommendedDate" : "2008-08-04T00:00:00",
			"VaccineGroup" : "DTaP"
		},
		"PatientProfile" : {
			"Dob" : "2008-04-04T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "120",
					"DateAdministered" : "2008-05-12T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0153",
		"TestCaseName" : "dose 3 to 4 Pentacel, interval 6m-4 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2010-10-05T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2013-08-09T00:00:00",
			"EvaluationTestType" : "All Valid: Forecast Test",
			"ForecastNumber" : 5,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2016-08-08T00:00:00",
			"RecommendedDate" : "2013-08-09T00:00:00",
			"VaccineGroup" : "DTaP"
		},
		"PatientProfile" : {
			"Dob" : "2009-08-09T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "120",
					"DateAdministered" : "2009-10-09T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}, {
					"Cvx" : "120",
					"DateAdministered" : "2010-02-09T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}, {
					"Cvx" : "120",
					"DateAdministered" : "2010-04-09T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}, {
					"Cvx" : "120",
					"DateAdministered" : "2010-10-05T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0154",
		"TestCaseName" : "dose 3 to 4 Pentacel, interval 4 mo-1 day.",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-05-14T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2011-11-14T00:00:00",
			"EvaluationTestType" : "Interval: Below Absolute Minimum",
			"ForecastNumber" : 4,
			"ForecastTestType" : "Recommended based on minimum interval from inValid dose",
			"PastDueDate" : "2011-12-01T00:00:00",
			"RecommendedDate" : "2011-11-14T00:00:00",
			"VaccineGroup" : "DTaP"
		},
		"PatientProfile" : {
			"Dob" : "2010-04-04T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "120",
					"DateAdministered" : "2010-06-04T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}, {
					"Cvx" : "120",
					"DateAdministered" : "2010-10-10T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}, {
					"Cvx" : "120",
					"DateAdministered" : "2011-01-15T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}, {
					"Cvx" : "120",
					"DateAdministered" : "2011-05-14T00:00:00",
					"EvaluationReason" : "Interval: Too Short",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0155",
		"TestCaseName" : "dose 3 to 4 Pentacel, interval 4 mo.",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-05-15T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2014-04-04T00:00:00",
			"EvaluationTestType" : "Interval: At Absolute Minimum",
			"ForecastNumber" : 5,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2017-04-03T00:00:00",
			"RecommendedDate" : "2014-04-04T00:00:00",
			"VaccineGroup" : "DTaP"
		},
		"PatientProfile" : {
			"Dob" : "2010-04-04T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "120",
					"DateAdministered" : "2010-06-04T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}, {
					"Cvx" : "120",
					"DateAdministered" : "2010-10-10T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}, {
					"Cvx" : "120",
					"DateAdministered" : "2011-01-15T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}, {
					"Cvx" : "120",
					"DateAdministered" : "2011-05-15T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0156",
		"TestCaseName" : "invalid dose 1-2 interval in midst of others",
		"ExpectedForecast" : {
			"AssessmentDate" : "2009-08-01T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2009-08-29T00:00:00",
			"EvaluationTestType" : "Interval: Below Absolute Minimum",
			"ForecastNumber" : 3,
			"ForecastTestType" : "Recommended based on minimum interval from previous dose (catch-up)",
			"PastDueDate" : "2009-10-08T00:00:00",
			"RecommendedDate" : "2009-08-29T00:00:00",
			"VaccineGroup" : "DTaP"
		},
		"PatientProfile" : {
			"Dob" : "2009-02-11T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "120",
					"DateAdministered" : "2009-04-11T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}, {
					"Cvx" : "120",
					"DateAdministered" : "2009-05-04T00:00:00",
					"EvaluationReason" : "Interval: Too Short",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}, {
					"Cvx" : "120",
					"DateAdministered" : "2009-08-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0157",
		"TestCaseName" : "invalid dose 2-3 interval in midst of others",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-02-05T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2011-08-05T00:00:00",
			"EvaluationTestType" : "Interval: Below Absolute Minimum",
			"ForecastNumber" : 4,
			"ForecastTestType" : "Recommended based on minimum interval from previous dose (catch-up)",
			"PastDueDate" : "2011-09-29T00:00:00",
			"RecommendedDate" : "2011-08-05T00:00:00",
			"VaccineGroup" : "DTaP"
		},
		"PatientProfile" : {
			"Dob" : "2010-02-02T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "120",
					"DateAdministered" : "2010-04-02T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}, {
					"Cvx" : "120",
					"DateAdministered" : "2010-06-02T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}, {
					"Cvx" : "120",
					"DateAdministered" : "2010-06-23T00:00:00",
					"EvaluationReason" : "Interval: Too Short",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}, {
					"Cvx" : "120",
					"DateAdministered" : "2011-02-05T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0158",
		"TestCaseName" : "inValid dose 3-4 interval in midst of others",
		"ExpectedForecast" : {
			"AssessmentDate" : "2012-03-22T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2019-03-18T00:00:00",
			"EvaluationTestType" : "Interval: Below Absolute Minimum",
			"ForecastNumber" : 5,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2021-03-18T00:00:00",
			"RecommendedDate" : "2019-03-18T00:00:00",
			"VaccineGroup" : "DTaP"
		},
		"PatientProfile" : {
			"Dob" : "2008-03-18T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "120",
					"DateAdministered" : "2008-05-20T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}, {
					"Cvx" : "120",
					"DateAdministered" : "2008-07-25T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}, {
					"Cvx" : "120",
					"DateAdministered" : "2009-12-28T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}, {
					"Cvx" : "120",
					"DateAdministered" : "2010-03-22T00:00:00",
					"EvaluationReason" : "Interval: Too Short",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}, {
					"Cvx" : "120",
					"DateAdministered" : "2012-03-22T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0159",
		"TestCaseName" : "Encephalopathy on 8/3/10 (within 7 days of Pentacel)",
		"ExpectedForecast" : {
			"AssessmentDate" : "2010-08-01T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2010-08-29T00:00:00",
			"EvaluationTestType" : "All Valid: Forecast Test",
			"ForecastNumber" : 2,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2010-12-03T00:00:00",
			"RecommendedDate" : "2010-10-06T00:00:00",
			"VaccineGroup" : "DTaP"
		},
		"PatientProfile" : {
			"Dob" : "2010-06-06T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : "VXC22",
			"MedHistoryCodeSys" : "CDCPHINVS",
			"MedHistoryText" : "encephalopathy within 7 days of previous dose of DTP or DTaP",
			"Series" : [{
					"Cvx" : "120",
					"DateAdministered" : "2010-08-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0160",
		"TestCaseName" : "Anaphylaxis to previous dose of Pentacel",
		"ExpectedForecast" : {
			"AssessmentDate" : "2010-08-02T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "All Valid: Forecast Test",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: contraindication",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "DTaP"
		},
		"PatientProfile" : {
			"Dob" : "2010-06-06T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : "VXC20",
			"MedHistoryCodeSys" : "CDCPHINVS",
			"MedHistoryText" : "allergy to previous dose of this vaccine or to any of its unlisted vaccine components (anaphylactic)",
			"Series" : [{
					"Cvx" : "120",
					"DateAdministered" : "2010-08-02T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0161",
		"TestCaseName" : "# 1 Pentacel at 6 wks",
		"ExpectedForecast" : {
			"AssessmentDate" : "2008-05-16T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2008-06-13T00:00:00",
			"EvaluationTestType" : "Age: At Minimum",
			"ForecastNumber" : 2,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2008-10-01T00:00:00",
			"RecommendedDate" : "2008-08-04T00:00:00",
			"VaccineGroup" : "DTaP"
		},
		"PatientProfile" : {
			"Dob" : "2008-04-04T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "120",
					"DateAdministered" : "2008-05-16T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0162",
		"TestCaseName" : "# 1 Pentacel at 6 yrs 11.5 mo",
		"ExpectedForecast" : {
			"AssessmentDate" : "2012-01-02T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2012-01-30T00:00:00",
			"EvaluationTestType" : "All Valid: Forecast Test",
			"ForecastNumber" : 2,
			"ForecastTestType" : "Recommended based on minimum interval from previous dose (catch-up)",
			"PastDueDate" : "2012-01-30T00:00:00",
			"RecommendedDate" : "2012-01-30T00:00:00",
			"VaccineGroup" : "DTaP"
		},
		"PatientProfile" : {
			"Dob" : "2005-01-15T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "120",
					"DateAdministered" : "2012-01-02T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0163",
		"TestCaseName" : "# 1 Pentacel at 7 yrs.  Off label use but counts as dose 1. ",
		"ExpectedForecast" : {
			"AssessmentDate" : "2012-02-01T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2012-02-29T00:00:00",
			"EvaluationTestType" : "All Valid: Forecast Test",
			"ForecastNumber" : 2,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2012-02-29T00:00:00",
			"RecommendedDate" : "2012-02-29T00:00:00",
			"VaccineGroup" : "DTaP"
		},
		"PatientProfile" : {
			"Dob" : "2005-02-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "120",
					"DateAdministered" : "2012-02-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0164",
		"TestCaseName" : "# 2 Pentacel at 10 wks-5 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2010-12-14T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2011-01-11T00:00:00",
			"EvaluationTestType" : "Age: Below Absolute Minimum",
			"ForecastNumber" : 2,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2011-04-06T00:00:00",
			"RecommendedDate" : "2011-02-10T00:00:00",
			"VaccineGroup" : "DTaP"
		},
		"PatientProfile" : {
			"Dob" : "2010-10-10T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "120",
					"DateAdministered" : "2010-11-17T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}, {
					"Cvx" : "120",
					"DateAdministered" : "2010-12-14T00:00:00",
					"EvaluationReason" : "Age: Too Young",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0165",
		"TestCaseName" : "# 2 Pentacel at 10 wks-4 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2010-12-15T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2011-01-16T00:00:00",
			"EvaluationTestType" : "Age: At Absolute Minimum",
			"ForecastNumber" : 3,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2011-06-06T00:00:00",
			"RecommendedDate" : "2011-04-10T00:00:00",
			"VaccineGroup" : "DTaP"
		},
		"PatientProfile" : {
			"Dob" : "2010-10-10T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "120",
					"DateAdministered" : "2010-11-17T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}, {
					"Cvx" : "120",
					"DateAdministered" : "2010-12-15T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0166",
		"TestCaseName" : "# 2 Pentacel at 6 yrs .  Off label but counts. ",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-01-15T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2011-02-12T00:00:00",
			"EvaluationTestType" : "All Valid: Forecast Test",
			"ForecastNumber" : 3,
			"ForecastTestType" : "Recommended based on minimum interval from previous dose (catch-up)",
			"PastDueDate" : "2011-02-12T00:00:00",
			"RecommendedDate" : "2011-02-12T00:00:00",
			"VaccineGroup" : "DTaP"
		},
		"PatientProfile" : {
			"Dob" : "2005-01-15T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "120",
					"DateAdministered" : "2006-01-15T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}, {
					"Cvx" : "120",
					"DateAdministered" : "2011-01-15T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0167",
		"TestCaseName" : "Newborn",
		"ExpectedForecast" : {
			"AssessmentDate" : "2012-02-01T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2012-08-01T00:00:00",
			"EvaluationTestType" : "No Doses Administered",
			"ForecastNumber" : 1,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : null,
			"RecommendedDate" : "2012-08-01T00:00:00",
			"VaccineGroup" : "Flu"
		},
		"PatientProfile" : {
			"Dob" : "2012-02-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : []
		}
	}, {
		"CdcTestId" : "2013-0168",
		"TestCaseName" : "# 1 to # 2 interval 28 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-12-29T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2012-07-01T00:00:00",
			"EvaluationTestType" : "Interval: At Minimum",
			"ForecastNumber" : 3,
			"ForecastTestType" : "Recommended based on seasonal start date",
			"PastDueDate" : null,
			"RecommendedDate" : "2012-07-01T00:00:00",
			"VaccineGroup" : "Flu"
		},
		"PatientProfile" : {
			"Dob" : "2011-05-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "88",
					"DateAdministered" : "2011-12-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "Influenza Unspecified"
				}, {
					"Cvx" : "88",
					"DateAdministered" : "2011-12-29T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "Influenza Unspecified"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0169",
		"TestCaseName" : "Child under 9 needs two in 1 first season",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-09-01T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2011-09-29T00:00:00",
			"EvaluationTestType" : "All Valid: Forecast Test",
			"ForecastNumber" : 2,
			"ForecastTestType" : "Recommended based on interval",
			"PastDueDate" : null,
			"RecommendedDate" : "2011-10-01T00:00:00",
			"VaccineGroup" : "Flu"
		},
		"PatientProfile" : {
			"Dob" : "2006-09-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "111",
					"DateAdministered" : "2011-09-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MED",
					"VaccineName" : "FLUMIST"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0170",
		"TestCaseName" : "Child under 9 received only one in first season",
		"ExpectedForecast" : {
			"AssessmentDate" : "2012-10-15T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2012-07-01T00:00:00",
			"EvaluationTestType" : "All Valid: Forecast Test",
			"ForecastNumber" : 2,
			"ForecastTestType" : "Recommended based on seasonal start date",
			"PastDueDate" : null,
			"RecommendedDate" : "2012-07-01T00:00:00",
			"VaccineGroup" : "Flu"
		},
		"PatientProfile" : {
			"Dob" : "2006-04-04T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "88",
					"DateAdministered" : "2011-10-15T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "Influenza Unspecified"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0171",
		"TestCaseName" : "Child under 9 received two in first season",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-11-27T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2012-07-01T00:00:00",
			"EvaluationTestType" : "All Valid: Forecast Test",
			"ForecastNumber" : 3,
			"ForecastTestType" : "Recommended based on seasonal start date",
			"PastDueDate" : null,
			"RecommendedDate" : "2012-07-01T00:00:00",
			"VaccineGroup" : "Flu"
		},
		"PatientProfile" : {
			"Dob" : "2006-05-10T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "88",
					"DateAdministered" : "2011-10-15T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "Influenza Unspecified"
				}, {
					"Cvx" : "88",
					"DateAdministered" : "2011-11-27T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "Influenza Unspecified"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0172",
		"TestCaseName" : "Invalid dose 1st season",
		"ExpectedForecast" : {
			"AssessmentDate" : "2012-10-15T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2012-07-01T00:00:00",
			"EvaluationTestType" : "Age: Below Absolute Minimum",
			"ForecastNumber" : 1,
			"ForecastTestType" : "Recommended based on seasonal start date",
			"PastDueDate" : null,
			"RecommendedDate" : "2012-07-01T00:00:00",
			"VaccineGroup" : "Flu"
		},
		"PatientProfile" : {
			"Dob" : "2011-05-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "88",
					"DateAdministered" : "2011-10-15T00:00:00",
					"EvaluationReason" : "Age: Too Young",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : null,
					"VaccineName" : "Influenza Unspecified"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0175",
		"TestCaseName" : "LAIV given one week after MMR is invalid. ",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-02-17T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2011-03-17T00:00:00",
			"EvaluationTestType" : "Live Virus: Below Minimum",
			"ForecastNumber" : 1,
			"ForecastTestType" : "Recommended based on minimum interval from live virus vaccine",
			"PastDueDate" : null,
			"RecommendedDate" : "2011-03-17T00:00:00",
			"VaccineGroup" : "Flu"
		},
		"PatientProfile" : {
			"Dob" : "2009-02-10T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "03",
					"DateAdministered" : "2011-02-10T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "M-M-R II"
				}, {
					"Cvx" : "111",
					"DateAdministered" : "2011-02-17T00:00:00",
					"EvaluationReason" : "Live Virus Conflict",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : "MED",
					"VaccineName" : "FLUMIST"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0176",
		"TestCaseName" : "Anaphylaxis following previous dose",
		"ExpectedForecast" : {
			"AssessmentDate" : "2010-10-08T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "All Valid: Forecast Test",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: contraindication",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "Flu"
		},
		"PatientProfile" : {
			"Dob" : "2009-07-04T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : "VXC20",
			"MedHistoryCodeSys" : "CDCPHINVS",
			"MedHistoryText" : "allergy to previous dose of this vaccine or to any of its unlisted vaccine components (anaphylactic)",
			"Series" : [{
					"Cvx" : "88",
					"DateAdministered" : "2010-10-08T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "Influenza Unspecified"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0177",
		"TestCaseName" : "# 1 at 6 mo-5 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-09-26T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2011-10-24T00:00:00",
			"EvaluationTestType" : "Age: Below Absolute Minimum",
			"ForecastNumber" : 1,
			"ForecastTestType" : "Recommended based on minimum interval from live virus vaccine",
			"PastDueDate" : null,
			"RecommendedDate" : "2011-10-24T00:00:00",
			"VaccineGroup" : "Flu"
		},
		"PatientProfile" : {
			"Dob" : "2011-04-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "88",
					"DateAdministered" : "2011-09-26T00:00:00",
					"EvaluationReason" : "Age: Too Young",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : null,
					"VaccineName" : "Influenza Unspecified"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0178",
		"TestCaseName" : "# 1 at 6 mo-4 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-09-27T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2011-10-25T00:00:00",
			"EvaluationTestType" : "Age: At Absolute Minimum",
			"ForecastNumber" : 2,
			"ForecastTestType" : "Recommended based on interval",
			"PastDueDate" : null,
			"RecommendedDate" : "2011-10-25T00:00:00",
			"VaccineGroup" : "Flu"
		},
		"PatientProfile" : {
			"Dob" : "2011-04-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "88",
					"DateAdministered" : "2011-09-27T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "Influenza Unspecified"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0179",
		"TestCaseName" : "# 1 at 6 mo",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-10-01T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2011-10-29T00:00:00",
			"EvaluationTestType" : "Age: At Minimum",
			"ForecastNumber" : 2,
			"ForecastTestType" : "Recommended based on interval",
			"PastDueDate" : null,
			"RecommendedDate" : "2011-10-29T00:00:00",
			"VaccineGroup" : "Flu"
		},
		"PatientProfile" : {
			"Dob" : "2011-04-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "88",
					"DateAdministered" : "2011-10-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "Influenza Unspecified"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0183",
		"TestCaseName" : "# 1 to # 2 interval 23 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-12-24T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2012-01-21T00:00:00",
			"EvaluationTestType" : "Interval: Below Absolute Minimum",
			"ForecastNumber" : 2,
			"ForecastTestType" : "Recommended based on minimum interval from invalid dose",
			"PastDueDate" : null,
			"RecommendedDate" : "2012-01-21T00:00:00",
			"VaccineGroup" : "Flu"
		},
		"PatientProfile" : {
			"Dob" : "2011-05-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "88",
					"DateAdministered" : "2011-12-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "Influenza Unspecified"
				}, {
					"Cvx" : "88",
					"DateAdministered" : "2011-12-24T00:00:00",
					"EvaluationReason" : "Interval: Too Short",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : null,
					"VaccineName" : "Influenza Unspecified"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0184",
		"TestCaseName" : "# 1 to # 2 interval 24 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2012-07-01T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2012-07-01T00:00:00",
			"EvaluationTestType" : "Interval: At Absolute Minimum",
			"ForecastNumber" : 3,
			"ForecastTestType" : "Recommended based on seasonal start date",
			"PastDueDate" : null,
			"RecommendedDate" : "2012-07-01T00:00:00",
			"VaccineGroup" : "Flu"
		},
		"PatientProfile" : {
			"Dob" : "2011-05-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "88",
					"DateAdministered" : "2011-12-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "Influenza Unspecified"
				}, {
					"Cvx" : "88",
					"DateAdministered" : "2011-12-25T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "Influenza Unspecified"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0185",
		"TestCaseName" : "Infant forecasting",
		"ExpectedForecast" : {
			"AssessmentDate" : "2010-07-10T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2011-07-10T00:00:00",
			"EvaluationTestType" : "No Doses Administered",
			"ForecastNumber" : 1,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2012-08-06T00:00:00",
			"RecommendedDate" : "2011-07-10T00:00:00",
			"VaccineGroup" : "HepA"
		},
		"PatientProfile" : {
			"Dob" : "2010-07-10T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : []
		}
	}, {
		"CdcTestId" : "2013-0186",
		"TestCaseName" : "Dose 1 to dose 2 interval 6 months.  Series complete. ",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-04-09T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "Interval: At Minimum",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: series complete",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "HepA"
		},
		"PatientProfile" : {
			"Dob" : "2009-08-09T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "85",
					"DateAdministered" : "2010-10-09T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "Hep A Unspecified"
				}, {
					"Cvx" : "85",
					"DateAdministered" : "2011-04-09T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "Hep A Unspecified"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0187",
		"TestCaseName" : "Anaphylaxis to previous dose of Hep A.  No forecast. ",
		"ExpectedForecast" : {
			"AssessmentDate" : "2009-03-04T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "All Valid: Forecast Test",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: contraindication",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "HepA"
		},
		"PatientProfile" : {
			"Dob" : "2003-03-03T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : "VXC20",
			"MedHistoryCodeSys" : "CDCPHINVS",
			"MedHistoryText" : "allergy to previous dose of this vaccine or to any of its unlisted vaccine components (anaphylactic)",
			"Series" : [{
					"Cvx" : "85",
					"DateAdministered" : "2009-03-04T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "Hep A Unspecified"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0188",
		"TestCaseName" : "Adult dose mistakenly given to a child.  Counts as valid. ",
		"ExpectedForecast" : {
			"AssessmentDate" : "2012-02-02T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2012-08-02T00:00:00",
			"EvaluationTestType" : "Vaccine: Off Label",
			"ForecastNumber" : 2,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2013-09-29T00:00:00",
			"RecommendedDate" : "2012-08-02T00:00:00",
			"VaccineGroup" : "HepA"
		},
		"PatientProfile" : {
			"Dob" : "2011-02-02T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "52",
					"DateAdministered" : "2012-02-02T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "HAVRIX-ADULT"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0189",
		"TestCaseName" : "Dose # 1 at age 12 months-5 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2006-11-26T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2006-12-01T00:00:00",
			"EvaluationTestType" : "Age: Below Absolute Minimum",
			"ForecastNumber" : 1,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2007-12-28T00:00:00",
			"RecommendedDate" : "2006-12-01T00:00:00",
			"VaccineGroup" : "HepA"
		},
		"PatientProfile" : {
			"Dob" : "2005-12-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "85",
					"DateAdministered" : "2006-11-26T00:00:00",
					"EvaluationReason" : "Age: Too Young",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : null,
					"VaccineName" : "Hep A Unspecified"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0190",
		"TestCaseName" : "Dose # 1 at age 12 months-4 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-05-28T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2011-12-01T00:00:00",
			"EvaluationTestType" : "Age: At Absolute Minimum",
			"ForecastNumber" : 2,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2013-01-24T00:00:00",
			"RecommendedDate" : "2011-12-01T00:00:00",
			"VaccineGroup" : "HepA"
		},
		"PatientProfile" : {
			"Dob" : "2010-06-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "85",
					"DateAdministered" : "2011-05-28T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "Hep A Unspecified"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0191",
		"TestCaseName" : "Dose # 1 at age 12 months.",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-04-07T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2011-10-07T00:00:00",
			"EvaluationTestType" : "Age: At Minimum",
			"ForecastNumber" : 2,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2012-12-04T00:00:00",
			"RecommendedDate" : "2011-10-07T00:00:00",
			"VaccineGroup" : "HepA"
		},
		"PatientProfile" : {
			"Dob" : "2010-04-07T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "85",
					"DateAdministered" : "2011-04-07T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "Hep A Unspecified"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0192",
		"TestCaseName" : "Dose 1 to dose 2 interval 6 mo-5 days=invalid",
		"ExpectedForecast" : {
			"AssessmentDate" : "2010-05-05T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2010-11-05T00:00:00",
			"EvaluationTestType" : "Interval: Below Absolute Minimum",
			"ForecastNumber" : 2,
			"ForecastTestType" : "Recommended based on minimum interval from invalid dose",
			"PastDueDate" : "2012-01-02T00:00:00",
			"RecommendedDate" : "2010-11-05T00:00:00",
			"VaccineGroup" : "HepA"
		},
		"PatientProfile" : {
			"Dob" : "2008-11-10T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "85",
					"DateAdministered" : "2009-11-10T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "Hep A Unspecified"
				}, {
					"Cvx" : "85",
					"DateAdministered" : "2010-05-05T00:00:00",
					"EvaluationReason" : "Interval: Too Short",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : null,
					"VaccineName" : "Hep A Unspecified"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0193",
		"TestCaseName" : "Dose 1 to Dose 2 interval 6 mo-4 days.  Series complete.",
		"ExpectedForecast" : {
			"AssessmentDate" : "2009-09-30T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "Interval: At Absolute Minimum",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: series complete",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "HepA"
		},
		"PatientProfile" : {
			"Dob" : "2001-04-04T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "85",
					"DateAdministered" : "2009-04-04T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "Hep A Unspecified"
				}, {
					"Cvx" : "85",
					"DateAdministered" : "2009-09-30T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "Hep A Unspecified"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0194",
		"TestCaseName" : "Dose # 2 at 18 months=series complete. ",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-02-09T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "Age: At Minimum",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: series complete",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "HepA"
		},
		"PatientProfile" : {
			"Dob" : "2009-08-09T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "85",
					"DateAdministered" : "2010-08-09T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "Hep A Unspecified"
				}, {
					"Cvx" : "85",
					"DateAdministered" : "2011-02-09T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "Hep A Unspecified"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0195",
		"TestCaseName" : "Dose 1 to dose 2 interval 6 mo-5 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-04-04T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2011-10-04T00:00:00",
			"EvaluationTestType" : "Interval: Below Absolute Minimum",
			"ForecastNumber" : 2,
			"ForecastTestType" : "Recommended based on minimum interval from invalid dose",
			"PastDueDate" : "2012-12-02T00:00:00",
			"RecommendedDate" : "2011-10-04T00:00:00",
			"VaccineGroup" : "HepA"
		},
		"PatientProfile" : {
			"Dob" : "2009-08-09T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "85",
					"DateAdministered" : "2010-10-09T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "Hep A Unspecified"
				}, {
					"Cvx" : "85",
					"DateAdministered" : "2011-04-04T00:00:00",
					"EvaluationReason" : "Interval: Too Short",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : null,
					"VaccineName" : "Hep A Unspecified"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0196",
		"TestCaseName" : "Dose 1 to dose 2 interval 6 mo-5 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-04-04T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2011-10-04T00:00:00",
			"EvaluationTestType" : "Interval: Below Absolute Minimum",
			"ForecastNumber" : 2,
			"ForecastTestType" : "Recommended based on minimum interval from invalid dose",
			"PastDueDate" : "2012-12-01T00:00:00",
			"RecommendedDate" : "2011-10-04T00:00:00",
			"VaccineGroup" : "HepA"
		},
		"PatientProfile" : {
			"Dob" : "2009-08-09T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "85",
					"DateAdministered" : "2010-10-09T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "Hep A Unspecified"
				}, {
					"Cvx" : "85",
					"DateAdministered" : "2011-04-04T00:00:00",
					"EvaluationReason" : "Interval: Too Short",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : null,
					"VaccineName" : "Hep A Unspecified"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0197",
		"TestCaseName" : "Dose 1 to dose 2 interval 6 months-4 days.  Series complete. ",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-04-05T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "Interval: At Absolute Minimum",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: series complete",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "HepA"
		},
		"PatientProfile" : {
			"Dob" : "2009-08-09T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "85",
					"DateAdministered" : "2010-10-09T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "Hep A Unspecified"
				}, {
					"Cvx" : "85",
					"DateAdministered" : "2011-04-05T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "Hep A Unspecified"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0198",
		"TestCaseName" : "Newborn Testing.  No vaccinations to date. ",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-12-12T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2011-12-12T00:00:00",
			"EvaluationTestType" : "No Doses Administered",
			"ForecastNumber" : 1,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2012-01-08T00:00:00",
			"RecommendedDate" : "2011-12-12T00:00:00",
			"VaccineGroup" : "HepB"
		},
		"PatientProfile" : {
			"Dob" : "2011-12-12T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : []
		}
	}, {
		"CdcTestId" : "2013-0199",
		"TestCaseName" : "Dose 1 to dose 2 interval 28-5 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-05-24T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2011-06-21T00:00:00",
			"EvaluationTestType" : "Interval: Below Absolute Minimum",
			"ForecastNumber" : 2,
			"ForecastTestType" : "Recommended based on minimum interval from invalid dose",
			"PastDueDate" : "2011-07-28T00:00:00",
			"RecommendedDate" : "2011-06-21T00:00:00",
			"VaccineGroup" : "HepB"
		},
		"PatientProfile" : {
			"Dob" : "2011-04-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "08",
					"DateAdministered" : "2011-05-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "RECOMBIVAX-PEDS"
				}, {
					"Cvx" : "08",
					"DateAdministered" : "2011-05-24T00:00:00",
					"EvaluationReason" : "Interval: Too Short",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : "MSD",
					"VaccineName" : "RECOMBIVAX-PEDS"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0200",
		"TestCaseName" : "Dose 1 to dose 2 interval 28-4 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-04-25T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2011-09-16T00:00:00",
			"EvaluationTestType" : "Interval: At Absolute Minimum",
			"ForecastNumber" : 3,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2012-11-28T00:00:00",
			"RecommendedDate" : "2011-10-01T00:00:00",
			"VaccineGroup" : "HepB"
		},
		"PatientProfile" : {
			"Dob" : "2011-04-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "08",
					"DateAdministered" : "2011-04-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "RECOMBIVAX-PEDS"
				}, {
					"Cvx" : "45",
					"DateAdministered" : "2011-04-25T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "Hep B Unspecified"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0201",
		"TestCaseName" : "Dose 1 to dose 2 interval 28 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-04-29T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2011-09-16T00:00:00",
			"EvaluationTestType" : "Interval: At Minimum",
			"ForecastNumber" : 3,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2012-11-28T00:00:00",
			"RecommendedDate" : "2011-10-01T00:00:00",
			"VaccineGroup" : "HepB"
		},
		"PatientProfile" : {
			"Dob" : "2011-04-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "08",
					"DateAdministered" : "2011-04-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "RECOMBIVAX-PEDS"
				}, {
					"Cvx" : "08",
					"DateAdministered" : "2011-04-29T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "RECOMBIVAX-PEDS"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0202",
		"TestCaseName" : "Dose 2 to dose 3 interval 8 wks-5 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2006-01-21T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2006-03-18T00:00:00",
			"EvaluationTestType" : "Interval: Below Absolute Minimum",
			"ForecastNumber" : 3,
			"ForecastTestType" : "Recommended based on minimum interval from invalid dose",
			"PastDueDate" : "2007-01-28T00:00:00",
			"RecommendedDate" : "2006-03-18T00:00:00",
			"VaccineGroup" : "HepB"
		},
		"PatientProfile" : {
			"Dob" : "2005-06-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "08",
					"DateAdministered" : "2005-09-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "RECOMBIVAX-PEDS"
				}, {
					"Cvx" : "08",
					"DateAdministered" : "2005-12-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "RECOMBIVAX-PEDS"
				}, {
					"Cvx" : "08",
					"DateAdministered" : "2006-01-21T00:00:00",
					"EvaluationReason" : "Interval: Too Short",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : "MSD",
					"VaccineName" : "RECOMBIVAX-PEDS"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0203",
		"TestCaseName" : "Dose 2 to dose 3 interval 8 wks-4 days.  Series complete",
		"ExpectedForecast" : {
			"AssessmentDate" : "2007-09-22T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "Interval: At Absolute Minimum",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: series complete",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "HepB"
		},
		"PatientProfile" : {
			"Dob" : "2007-02-11T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "45",
					"DateAdministered" : "2007-03-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "Hep B Unspecified"
				}, {
					"Cvx" : "45",
					"DateAdministered" : "2007-08-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "Hep B Unspecified"
				}, {
					"Cvx" : "45",
					"DateAdministered" : "2007-09-22T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "Hep B Unspecified"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0204",
		"TestCaseName" : "Dose 2 to dose 3 interval is 8 weeks.  Series complete.",
		"ExpectedForecast" : {
			"AssessmentDate" : "2007-06-06T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "Interval: At Minimum",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: series complete",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "HepB"
		},
		"PatientProfile" : {
			"Dob" : "2006-10-11T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "45",
					"DateAdministered" : "2006-12-11T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "Hep B Unspecified"
				}, {
					"Cvx" : "45",
					"DateAdministered" : "2007-04-11T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "Hep B Unspecified"
				}, {
					"Cvx" : "45",
					"DateAdministered" : "2007-06-06T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "Hep B Unspecified"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0205",
		"TestCaseName" : "Dose 1 to dose 3 interval 16 weeks-5 days.",
		"ExpectedForecast" : {
			"AssessmentDate" : "2005-01-16T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2005-03-13T00:00:00",
			"EvaluationTestType" : "Interval: Below Absolute Minimum",
			"ForecastNumber" : 3,
			"ForecastTestType" : "Recommended based on minimum interval from invalid dose",
			"PastDueDate" : "2006-03-01T00:00:00",
			"RecommendedDate" : "2005-03-13T00:00:00",
			"VaccineGroup" : "HepB"
		},
		"PatientProfile" : {
			"Dob" : "2004-07-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "45",
					"DateAdministered" : "2004-10-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "Hep B Unspecified"
				}, {
					"Cvx" : "08",
					"DateAdministered" : "2004-11-07T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "RECOMBIVAX-PEDS"
				}, {
					"Cvx" : "08",
					"DateAdministered" : "2005-01-16T00:00:00",
					"EvaluationReason" : "Interval: Too Short",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : "MSD",
					"VaccineName" : "RECOMBIVAX-PEDS"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0206",
		"TestCaseName" : "Dose 1 to dose 3 interval 16 weeks-4 days. Series complete. ",
		"ExpectedForecast" : {
			"AssessmentDate" : "2010-01-17T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "Interval: At Absolute Minimum",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: series complete",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "HepB"
		},
		"PatientProfile" : {
			"Dob" : "2009-07-04T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "45",
					"DateAdministered" : "2009-10-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "Hep B Unspecified"
				}, {
					"Cvx" : "45",
					"DateAdministered" : "2009-11-24T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "Hep B Unspecified"
				}, {
					"Cvx" : "08",
					"DateAdministered" : "2010-01-17T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "RECOMBIVAX-PEDS"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0207",
		"TestCaseName" : "Dose 1 to dose 3 interval 16 weeks.  Series complete. ",
		"ExpectedForecast" : {
			"AssessmentDate" : "2012-02-21T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "Interval: At Minimum",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: series complete",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "HepB"
		},
		"PatientProfile" : {
			"Dob" : "2011-08-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "45",
					"DateAdministered" : "2011-11-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "Hep B Unspecified"
				}, {
					"Cvx" : "45",
					"DateAdministered" : "2011-12-17T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "Hep B Unspecified"
				}, {
					"Cvx" : "45",
					"DateAdministered" : "2012-02-21T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "Hep B Unspecified"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0208",
		"TestCaseName" : "Recombivax Hep B ages 11-15.  Dose 2 recommended in 4-6 months. ",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-11-25T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2012-03-25T00:00:00",
			"EvaluationTestType" : "All Valid: Forecast Test",
			"ForecastNumber" : 2,
			"ForecastTestType" : "Recommended based on minimum interval from previous dose (catch-up)",
			"PastDueDate" : "2012-07-22T00:00:00",
			"RecommendedDate" : "2012-03-25T00:00:00",
			"VaccineGroup" : "HepB"
		},
		"PatientProfile" : {
			"Dob" : "1999-05-05T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "43",
					"DateAdministered" : "2011-11-25T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "RECOMBIVAX-ADULT"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0209",
		"TestCaseName" : "Dose # 1 at age 0 days. ",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-04-01T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2011-04-29T00:00:00",
			"EvaluationTestType" : "Age: At Minimum",
			"ForecastNumber" : 2,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2011-07-28T00:00:00",
			"RecommendedDate" : "2011-05-01T00:00:00",
			"VaccineGroup" : "HepB"
		},
		"PatientProfile" : {
			"Dob" : "2011-04-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "45",
					"DateAdministered" : "2011-04-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "Hep B Unspecified"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0210",
		"TestCaseName" : "Doses 1 and 2 of Recombvx at ages 11-15 years with ≥ 4 mo interval = series complete. ",
		"ExpectedForecast" : {
			"AssessmentDate" : "2010-02-13T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "Interval: At Minimum",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: series complete",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "HepB"
		},
		"PatientProfile" : {
			"Dob" : "1997-04-07T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "43",
					"DateAdministered" : "2009-10-13T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "RECOMBIVAX-ADULT"
				}, {
					"Cvx" : "43",
					"DateAdministered" : "2010-02-13T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "RECOMBIVAX-ADULT"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0211",
		"TestCaseName" : "Dose 1 to dose 2 Recombvx interval  4 months-5 days.  Two dose adolescent schedule no longer applies.  ",
		"ExpectedForecast" : {
			"AssessmentDate" : "2007-08-27T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2007-10-22T00:00:00",
			"EvaluationTestType" : "All Valid: Forecast Test",
			"ForecastNumber" : 3,
			"ForecastTestType" : "Recommended based on minimum interval from previous dose (catch-up)",
			"PastDueDate" : "2007-10-22T00:00:00",
			"RecommendedDate" : "2007-10-22T00:00:00",
			"VaccineGroup" : "HepB"
		},
		"PatientProfile" : {
			"Dob" : "1996-05-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "43",
					"DateAdministered" : "2007-05-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "RECOMBIVAX-ADULT"
				}, {
					"Cvx" : "43",
					"DateAdministered" : "2007-08-27T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "RECOMBIVAX-ADULT"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0212",
		"TestCaseName" : "Dose 2 to dose 3 interval 8 wks-5 days in adolescent with two Recombvx not meeting rules for two dose adoles. schedule ",
		"ExpectedForecast" : {
			"AssessmentDate" : "2006-01-21T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2006-03-18T00:00:00",
			"EvaluationTestType" : "Interval: Below Absolute Minimum",
			"ForecastNumber" : 3,
			"ForecastTestType" : "Recommended based on minimum interval from invalid dose",
			"PastDueDate" : "2006-03-18T00:00:00",
			"RecommendedDate" : "2006-03-18T00:00:00",
			"VaccineGroup" : "HepB"
		},
		"PatientProfile" : {
			"Dob" : "1992-05-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "43",
					"DateAdministered" : "2005-09-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "RECOMBIVAX-ADULT"
				}, {
					"Cvx" : "43",
					"DateAdministered" : "2005-12-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "RECOMBIVAX-ADULT"
				}, {
					"Cvx" : "08",
					"DateAdministered" : "2006-01-21T00:00:00",
					"EvaluationReason" : "Interval: Too Short",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : "MSD",
					"VaccineName" : "RECOMBIVAX-PEDS"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0213",
		"TestCaseName" : "Hep at birth.  Comvax at 6 wks and 6 mo. Hep series complete. ",
		"ExpectedForecast" : {
			"AssessmentDate" : "2004-08-04T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "All Valid: Forecast Test",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: series complete",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "HepB"
		},
		"PatientProfile" : {
			"Dob" : "2004-02-04T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "08",
					"DateAdministered" : "2004-02-04T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "RECOMBIVAX-PEDS"
				}, {
					"Cvx" : "51",
					"DateAdministered" : "2004-03-13T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "COMVAX"
				}, {
					"Cvx" : "51",
					"DateAdministered" : "2004-08-04T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "COMVAX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0216",
		"TestCaseName" : "Hep B at birth. Comvax at 4 weeks and 6 months.  Series complete for Hep B.  ",
		"ExpectedForecast" : {
			"AssessmentDate" : "2006-08-02T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "Interval: At Minimum",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: series complete",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "HepB"
		},
		"PatientProfile" : {
			"Dob" : "2006-02-02T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "45",
					"DateAdministered" : "2006-02-02T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "Hep B Unspecified"
				}, {
					"Cvx" : "51",
					"DateAdministered" : "2006-03-02T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "COMVAX"
				}, {
					"Cvx" : "51",
					"DateAdministered" : "2006-08-02T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "COMVAX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0219",
		"TestCaseName" : "Hep B at birth. Comvax at 5 mo and 8 wks-4 days later.  Series complete for Hep B. ",
		"ExpectedForecast" : {
			"AssessmentDate" : "2006-11-26T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "Interval: At Absolute Minimum",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: series complete",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "HepB"
		},
		"PatientProfile" : {
			"Dob" : "2006-05-05T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "08",
					"DateAdministered" : "2006-05-05T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "RECOMBIVAX-PEDS"
				}, {
					"Cvx" : "51",
					"DateAdministered" : "2006-10-05T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "COMVAX"
				}, {
					"Cvx" : "51",
					"DateAdministered" : "2006-11-26T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "COMVAX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0220",
		"TestCaseName" : "Dose # 1 at age 1 day",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-04-02T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2011-04-30T00:00:00",
			"EvaluationTestType" : "All Valid: Forecast Test",
			"ForecastNumber" : 2,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2011-07-28T00:00:00",
			"RecommendedDate" : "2011-05-01T00:00:00",
			"VaccineGroup" : "HepB"
		},
		"PatientProfile" : {
			"Dob" : "2011-04-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "08",
					"DateAdministered" : "2011-04-02T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "RECOMBIVAX-PEDS"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0221",
		"TestCaseName" : "Hep at birth.  Comvax at 5 mo and 8 wks later.  Series complete for Hep B. ",
		"ExpectedForecast" : {
			"AssessmentDate" : "2007-01-01T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "Interval: At Minimum",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: series complete",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "HepB"
		},
		"PatientProfile" : {
			"Dob" : "2006-06-06T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "08",
					"DateAdministered" : "2006-06-06T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "RECOMBIVAX-PEDS"
				}, {
					"Cvx" : "51",
					"DateAdministered" : "2006-11-06T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "COMVAX"
				}, {
					"Cvx" : "51",
					"DateAdministered" : "2007-01-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "COMVAX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0222",
		"TestCaseName" : "Dose 1 to dose 3 interval of Comvax 16 wks-5 days=invalid as Hep B dose 3.",
		"ExpectedForecast" : {
			"AssessmentDate" : "2002-11-16T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2003-01-11T00:00:00",
			"EvaluationTestType" : "Interval: Below Absolute Minimum",
			"ForecastNumber" : 3,
			"ForecastTestType" : "Recommended based on minimum interval from invalid dose",
			"PastDueDate" : "2004-01-11T00:00:00",
			"RecommendedDate" : "2003-01-11T00:00:00",
			"VaccineGroup" : "HepB"
		},
		"PatientProfile" : {
			"Dob" : "2002-05-15T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "51",
					"DateAdministered" : "2002-08-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "COMVAX"
				}, {
					"Cvx" : "51",
					"DateAdministered" : "2002-09-20T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "COMVAX"
				}, {
					"Cvx" : "51",
					"DateAdministered" : "2002-11-16T00:00:00",
					"EvaluationReason" : "Interval: Too Short",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : "MSD",
					"VaccineName" : "COMVAX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0223",
		"TestCaseName" : "Dose 1 to dose 3 interval of Comvax 16 wks-4 days=valid Hep B # 3.  Hep B series complete. ",
		"ExpectedForecast" : {
			"AssessmentDate" : "2007-02-03T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "Interval: At Absolute Minimum",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: series complete",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "HepB"
		},
		"PatientProfile" : {
			"Dob" : "2006-07-07T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "51",
					"DateAdministered" : "2006-10-18T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "COMVAX"
				}, {
					"Cvx" : "51",
					"DateAdministered" : "2006-12-09T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "COMVAX"
				}, {
					"Cvx" : "51",
					"DateAdministered" : "2007-02-03T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "COMVAX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0224",
		"TestCaseName" : "Dose 1 to dose 3 interval of Comvax is 16 weeks.   Series complete for Hep B. ",
		"ExpectedForecast" : {
			"AssessmentDate" : "2007-02-20T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "Interval: At Minimum",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: series complete",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "HepB"
		},
		"PatientProfile" : {
			"Dob" : "2006-08-08T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "51",
					"DateAdministered" : "2006-10-31T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "COMVAX"
				}, {
					"Cvx" : "51",
					"DateAdministered" : "2006-12-22T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "COMVAX"
				}, {
					"Cvx" : "51",
					"DateAdministered" : "2007-02-20T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "COMVAX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0225",
		"TestCaseName" : "Comvax given at birth.",
		"ExpectedForecast" : {
			"AssessmentDate" : "2006-10-10T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2006-11-07T00:00:00",
			"EvaluationTestType" : "Age: At Minimum",
			"ForecastNumber" : 2,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2007-02-06T00:00:00",
			"RecommendedDate" : "2006-11-10T00:00:00",
			"VaccineGroup" : "HepB"
		},
		"PatientProfile" : {
			"Dob" : "2006-10-10T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "51",
					"DateAdministered" : "2006-10-10T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "COMVAX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0226",
		"TestCaseName" : "Anaphylaxis to previous dose of Hep B.  No further forecast. ",
		"ExpectedForecast" : {
			"AssessmentDate" : "2006-11-11T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "All Valid: Forecast Test",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: contraindication",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "HepB"
		},
		"PatientProfile" : {
			"Dob" : "2006-09-09T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : "VXC20",
			"MedHistoryCodeSys" : "CDCPHINVS",
			"MedHistoryText" : "allergy to previous dose of this vaccine or to any of its unlisted vaccine components (anaphylactic)",
			"Series" : [{
					"Cvx" : "08",
					"DateAdministered" : "2006-11-11T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "RECOMBIVAX-PEDS"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0227",
		"TestCaseName" : "Dose # 2 at 28-5 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2010-08-24T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2010-09-21T00:00:00",
			"EvaluationTestType" : "Age: Below Absolute Minimum",
			"ForecastNumber" : 2,
			"ForecastTestType" : "Recommended based on minimum interval from invalid dose",
			"PastDueDate" : "2010-11-28T00:00:00",
			"RecommendedDate" : "2010-09-21T00:00:00",
			"VaccineGroup" : "HepB"
		},
		"PatientProfile" : {
			"Dob" : "2010-08-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "08",
					"DateAdministered" : "2010-08-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "RECOMBIVAX-PEDS"
				}, {
					"Cvx" : "08",
					"DateAdministered" : "2010-08-24T00:00:00",
					"EvaluationReason" : "Age: Too Young",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : "MSD",
					"VaccineName" : "RECOMBIVAX-PEDS"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0228",
		"TestCaseName" : "Dose # 2 at 28-4 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-02-25T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2011-07-19T00:00:00",
			"EvaluationTestType" : "Age: At Absolute Minimum",
			"ForecastNumber" : 3,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2012-09-28T00:00:00",
			"RecommendedDate" : "2011-08-01T00:00:00",
			"VaccineGroup" : "HepB"
		},
		"PatientProfile" : {
			"Dob" : "2011-02-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "45",
					"DateAdministered" : "2011-02-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "Hep B Unspecified"
				}, {
					"Cvx" : "08",
					"DateAdministered" : "2011-02-25T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "RECOMBIVAX-PEDS"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0229",
		"TestCaseName" : "Dose # 2 at 28 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-05-29T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2011-10-16T00:00:00",
			"EvaluationTestType" : "Interval: At Minimum",
			"ForecastNumber" : 3,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2012-12-28T00:00:00",
			"RecommendedDate" : "2011-11-01T00:00:00",
			"VaccineGroup" : "HepB"
		},
		"PatientProfile" : {
			"Dob" : "2011-05-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "45",
					"DateAdministered" : "2011-05-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "Hep B Unspecified"
				}, {
					"Cvx" : "45",
					"DateAdministered" : "2011-05-29T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "Hep B Unspecified"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0230",
		"TestCaseName" : "Dose # 3 at age 24 weeks-5 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-06-13T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2011-08-08T00:00:00",
			"EvaluationTestType" : "Age: Below Absolute Minimum",
			"ForecastNumber" : 3,
			"ForecastTestType" : "Recommended based on minimum interval from invalid dose",
			"PastDueDate" : "2012-08-28T00:00:00",
			"RecommendedDate" : "2011-08-08T00:00:00",
			"VaccineGroup" : "HepB"
		},
		"PatientProfile" : {
			"Dob" : "2011-01-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "45",
					"DateAdministered" : "2011-01-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "Hep B Unspecified"
				}, {
					"Cvx" : "45",
					"DateAdministered" : "2011-02-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "Hep B Unspecified"
				}, {
					"Cvx" : "45",
					"DateAdministered" : "2011-06-13T00:00:00",
					"EvaluationReason" : "Age: Too Young",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : null,
					"VaccineName" : "Hep B Unspecified"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0231",
		"TestCaseName" : "Dose # 3 at age 24 weeks-4 days.  Series complete. ",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-05-14T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "Age: At Absolute Minimum",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: series complete",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "HepB"
		},
		"PatientProfile" : {
			"Dob" : "2010-12-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "08",
					"DateAdministered" : "2010-12-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "RECOMBIVAX-PEDS"
				}, {
					"Cvx" : "08",
					"DateAdministered" : "2011-01-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "RECOMBIVAX-PEDS"
				}, {
					"Cvx" : "08",
					"DateAdministered" : "2011-05-14T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "RECOMBIVAX-PEDS"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0232",
		"TestCaseName" : "Dose # 3 at 24 weeks.  Series complete.",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-09-16T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "Age: At Minimum",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: series complete",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "HepB"
		},
		"PatientProfile" : {
			"Dob" : "2011-04-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "08",
					"DateAdministered" : "2011-04-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "RECOMBIVAX-PEDS"
				}, {
					"Cvx" : "45",
					"DateAdministered" : "2011-06-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "Hep B Unspecified"
				}, {
					"Cvx" : "45",
					"DateAdministered" : "2011-09-16T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "Hep B Unspecified"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0233",
		"TestCaseName" : "Newborn forecasting",
		"ExpectedForecast" : {
			"AssessmentDate" : "2012-04-01T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2012-04-01T00:00:00",
			"EvaluationTestType" : "No Doses Administered",
			"ForecastNumber" : 1,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2012-04-28T00:00:00",
			"RecommendedDate" : "2012-04-01T00:00:00",
			"VaccineGroup" : "HepB"
		},
		"PatientProfile" : {
			"Dob" : "2012-04-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : []
		}
	}, {
		"CdcTestId" : "2013-0234",
		"TestCaseName" : "# 2 Pediarix at 6 yrs 11.5 mo",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-12-15T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2012-02-09T00:00:00",
			"EvaluationTestType" : "All Valid: Forecast Test",
			"ForecastNumber" : 3,
			"ForecastTestType" : "Recommended based on minimum interval from previous dose (catch-up)",
			"PastDueDate" : "2012-02-09T00:00:00",
			"RecommendedDate" : "2012-02-09T00:00:00",
			"VaccineGroup" : "HepB"
		},
		"PatientProfile" : {
			"Dob" : "2005-01-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "110",
					"DateAdministered" : "2007-12-16T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2011-12-15T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0235",
		"TestCaseName" : "# 2 Pediarix at 7 yrs; # 1 at less than 12 mo. ",
		"ExpectedForecast" : {
			"AssessmentDate" : "2010-09-16T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2010-11-11T00:00:00",
			"EvaluationTestType" : "All Valid: Forecast Test",
			"ForecastNumber" : 3,
			"ForecastTestType" : "Recommended based on minimum interval from previous dose (catch-up)",
			"PastDueDate" : "2010-11-11T00:00:00",
			"RecommendedDate" : "2010-11-11T00:00:00",
			"VaccineGroup" : "HepB"
		},
		"PatientProfile" : {
			"Dob" : "2003-09-16T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "110",
					"DateAdministered" : "2003-12-16T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2010-09-16T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0236",
		"TestCaseName" : "# 2 Pediarix at 7 yrs; # 1 ≥ 12 mo.",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-09-16T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2011-11-11T00:00:00",
			"EvaluationTestType" : "All Valid: Forecast Test",
			"ForecastNumber" : 3,
			"ForecastTestType" : "Recommended based on minimum interval from previous dose (catch-up)",
			"PastDueDate" : "2011-11-11T00:00:00",
			"RecommendedDate" : "2011-11-11T00:00:00",
			"VaccineGroup" : "HepB"
		},
		"PatientProfile" : {
			"Dob" : "2004-09-16T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "110",
					"DateAdministered" : "2005-10-16T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2011-09-16T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0237",
		"TestCaseName" : "# 1 and 2 Pediarix at ≥7 yrs  with 28 day interval.",
		"ExpectedForecast" : {
			"AssessmentDate" : "2009-08-04T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2009-10-27T00:00:00",
			"EvaluationTestType" : "Interval: At Minimum",
			"ForecastNumber" : 3,
			"ForecastTestType" : "Recommended based on minimum interval from previous dose (catch-up)",
			"PastDueDate" : "2009-10-27T00:00:00",
			"RecommendedDate" : "2009-10-27T00:00:00",
			"VaccineGroup" : "HepB"
		},
		"PatientProfile" : {
			"Dob" : "2002-07-07T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "110",
					"DateAdministered" : "2009-07-07T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2009-08-04T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0238",
		"TestCaseName" : "# 3 Pediarix at 14 wks-5 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2005-09-02T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2005-11-16T00:00:00",
			"EvaluationTestType" : "All Valid: Forecast Test",
			"ForecastNumber" : 4,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2007-01-28T00:00:00",
			"RecommendedDate" : "2005-12-01T00:00:00",
			"VaccineGroup" : "HepB"
		},
		"PatientProfile" : {
			"Dob" : "2005-06-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "110",
					"DateAdministered" : "2005-07-09T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2005-08-06T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2005-09-02T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0239",
		"TestCaseName" : "# 3 Pediarix at 14 wks-4 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2006-04-10T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2006-06-23T00:00:00",
			"EvaluationTestType" : "All Valid: Forecast Test",
			"ForecastNumber" : 4,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2007-09-02T00:00:00",
			"RecommendedDate" : "2006-07-06T00:00:00",
			"VaccineGroup" : "HepB"
		},
		"PatientProfile" : {
			"Dob" : "2006-01-06T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "110",
					"DateAdministered" : "2006-02-15T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2006-03-15T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2006-04-10T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0241",
		"TestCaseName" : "# 3 Pediarix at 24 weeks-4 days. Valid for dose 3",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-10-24T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "Age: At Absolute Minimum",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: series complete",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "HepB"
		},
		"PatientProfile" : {
			"Dob" : "2011-05-13T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "45",
					"DateAdministered" : "2011-06-24T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "Hep B Unspecified"
				}, {
					"Cvx" : "45",
					"DateAdministered" : "2011-08-24T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "Hep B Unspecified"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2011-10-24T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0243",
		"TestCaseName" : "# 4 Pediarix at 1 yr -5 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-03-30T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "Extra Doses",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: series complete",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "HepB"
		},
		"PatientProfile" : {
			"Dob" : "2010-04-04T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "110",
					"DateAdministered" : "2010-06-04T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2010-08-04T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2010-10-10T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2011-03-30T00:00:00",
					"EvaluationReason" : "Series Already Complete",
					"EvaluationStatus" : "Extraneous",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0244",
		"TestCaseName" : "# 1 Pediarix at 6 wks-5 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-06-12T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2011-07-10T00:00:00",
			"EvaluationTestType" : "All Valid: Forecast Test",
			"ForecastNumber" : 2,
			"ForecastTestType" : "Recommended based on minimum interval from previous dose (catch-up)",
			"PastDueDate" : "2011-09-02T00:00:00",
			"RecommendedDate" : "2011-07-10T00:00:00",
			"VaccineGroup" : "HepB"
		},
		"PatientProfile" : {
			"Dob" : "2011-05-06T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "110",
					"DateAdministered" : "2011-06-12T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0245",
		"TestCaseName" : "# 4 Pediarix at 1 yr -4 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2006-05-28T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "Extra Doses",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: series complete",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "HepB"
		},
		"PatientProfile" : {
			"Dob" : "2005-06-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "110",
					"DateAdministered" : "2005-08-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2005-11-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2006-01-15T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2006-05-28T00:00:00",
					"EvaluationReason" : "Series Already Complete",
					"EvaluationStatus" : "Extraneous",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0246",
		"TestCaseName" : "# 4 Pediarix at 3 yrs 11.5 mo. ",
		"ExpectedForecast" : {
			"AssessmentDate" : "2012-01-15T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "Extra Doses",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: series complete",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "HepB"
		},
		"PatientProfile" : {
			"Dob" : "2008-02-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "110",
					"DateAdministered" : "2008-04-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2008-07-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2008-10-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2012-01-15T00:00:00",
					"EvaluationReason" : "Series Already Complete",
					"EvaluationStatus" : "Extraneous",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0247",
		"TestCaseName" : "# 4 Pediarix at 4 yrs",
		"ExpectedForecast" : {
			"AssessmentDate" : "2010-05-06T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "Extra Doses",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: series complete",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "HepB"
		},
		"PatientProfile" : {
			"Dob" : "2006-05-06T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "110",
					"DateAdministered" : "2006-09-09T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2007-03-03T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2008-07-10T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2010-05-06T00:00:00",
					"EvaluationReason" : "Series Already Complete",
					"EvaluationStatus" : "Extraneous",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0248",
		"TestCaseName" : "# 5 Pediarix at 4 yrs -5 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2010-06-26T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "Extra Doses",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: series complete",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "HepB"
		},
		"PatientProfile" : {
			"Dob" : "2006-07-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "110",
					"DateAdministered" : "2006-09-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2006-10-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2007-02-02T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2007-10-10T00:00:00",
					"EvaluationReason" : "Series Already Complete",
					"EvaluationStatus" : "Extraneous",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2010-06-26T00:00:00",
					"EvaluationReason" : "Series Already Complete",
					"EvaluationStatus" : "Extraneous",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0249",
		"TestCaseName" : "# 5 Pediarix at 4 yrs -4 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2010-06-27T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "Extra Doses",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: series complete",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "HepB"
		},
		"PatientProfile" : {
			"Dob" : "2006-07-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "110",
					"DateAdministered" : "2006-09-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2006-10-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2007-02-02T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2007-10-10T00:00:00",
					"EvaluationReason" : "Series Already Complete",
					"EvaluationStatus" : "Extraneous",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2010-06-27T00:00:00",
					"EvaluationReason" : "Series Already Complete",
					"EvaluationStatus" : "Extraneous",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0250",
		"TestCaseName" : "# 5 Pediarix at 6 yrs 11.5 mo",
		"ExpectedForecast" : {
			"AssessmentDate" : "2012-03-15T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "Extra Doses",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: series complete",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "HepB"
		},
		"PatientProfile" : {
			"Dob" : "2005-04-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "110",
					"DateAdministered" : "2005-06-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2005-08-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2005-10-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2006-05-01T00:00:00",
					"EvaluationReason" : "Series Already Complete",
					"EvaluationStatus" : "Extraneous",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2012-03-15T00:00:00",
					"EvaluationReason" : "Series Already Complete",
					"EvaluationStatus" : "Extraneous",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0251",
		"TestCaseName" : "# 5 Pediarix at 7 yrs",
		"ExpectedForecast" : {
			"AssessmentDate" : "2012-05-01T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "Extra Doses",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: series complete",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "HepB"
		},
		"PatientProfile" : {
			"Dob" : "2005-05-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "110",
					"DateAdministered" : "2005-08-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2005-11-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2006-02-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2006-11-16T00:00:00",
					"EvaluationReason" : "Series Already Complete",
					"EvaluationStatus" : "Extraneous",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2012-05-01T00:00:00",
					"EvaluationReason" : "Series Already Complete",
					"EvaluationStatus" : "Extraneous",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0255",
		"TestCaseName" : "# 1 Pediarix at 6 wks-4 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2006-05-12T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2006-06-09T00:00:00",
			"EvaluationTestType" : "All Valid: Forecast Test",
			"ForecastNumber" : 2,
			"ForecastTestType" : "Recommended based on minimum interval from previous dose (catch-up)",
			"PastDueDate" : "2006-07-31T00:00:00",
			"RecommendedDate" : "2006-06-09T00:00:00",
			"VaccineGroup" : "HepB"
		},
		"PatientProfile" : {
			"Dob" : "2006-04-04T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "110",
					"DateAdministered" : "2006-05-12T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0256",
		"TestCaseName" : "dose 1 to 2 Pediarix, interval 28-5 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-01-26T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2011-02-23T00:00:00",
			"EvaluationTestType" : "Interval: Below Absolute Minimum",
			"ForecastNumber" : 2,
			"ForecastTestType" : "Recommended based on minimum interval from invalid dose",
			"PastDueDate" : "2011-02-28T00:00:00",
			"RecommendedDate" : "2011-02-23T00:00:00",
			"VaccineGroup" : "HepB"
		},
		"PatientProfile" : {
			"Dob" : "2010-11-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "110",
					"DateAdministered" : "2011-01-03T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2011-01-26T00:00:00",
					"EvaluationReason" : "Interval: Too Short",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0257",
		"TestCaseName" : "dose 1 to 2 Pediarix, interval 28-4 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2006-04-25T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2006-07-22T00:00:00",
			"EvaluationTestType" : "Interval: At Absolute Minimum",
			"ForecastNumber" : 3,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2007-09-28T00:00:00",
			"RecommendedDate" : "2006-08-01T00:00:00",
			"VaccineGroup" : "HepB"
		},
		"PatientProfile" : {
			"Dob" : "2006-02-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "110",
					"DateAdministered" : "2006-04-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2006-04-25T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0258",
		"TestCaseName" : "dose 2 to 3 Pediarix, interval 8 weeks-5 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-09-16T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2011-11-11T00:00:00",
			"EvaluationTestType" : "Interval: Below Absolute Minimum",
			"ForecastNumber" : 3,
			"ForecastTestType" : "Recommended based on minimum interval from invalid dose",
			"PastDueDate" : "2012-11-28T00:00:00",
			"RecommendedDate" : "2011-11-11T00:00:00",
			"VaccineGroup" : "HepB"
		},
		"PatientProfile" : {
			"Dob" : "2011-04-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "110",
					"DateAdministered" : "2011-05-25T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2011-07-27T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2011-09-16T00:00:00",
					"EvaluationReason" : "Interval: Too Short",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0259",
		"TestCaseName" : "dose 2 to 3 Pediarix, interval 8 weeks-4 days ",
		"ExpectedForecast" : {
			"AssessmentDate" : "2006-05-18T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "Interval: At Absolute Minimum",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: series complete",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "HepB"
		},
		"PatientProfile" : {
			"Dob" : "2005-12-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "110",
					"DateAdministered" : "2006-01-25T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2006-03-27T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2006-05-18T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0260",
		"TestCaseName" : "dose 3 to 4 Pediarix, interval 6m-5 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2010-10-04T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "Extra Doses",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: series complete",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "HepB"
		},
		"PatientProfile" : {
			"Dob" : "2009-08-09T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "110",
					"DateAdministered" : "2009-10-09T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2009-12-09T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2010-04-09T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2010-10-04T00:00:00",
					"EvaluationReason" : "Series Already Complete",
					"EvaluationStatus" : "Extraneous",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0261",
		"TestCaseName" : "dose 3 to 4 Pediarix, interval 6m-4 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2010-10-05T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "Extra Doses",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: series complete",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "HepB"
		},
		"PatientProfile" : {
			"Dob" : "2009-08-09T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "110",
					"DateAdministered" : "2009-10-09T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2009-12-09T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2010-04-09T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2010-10-05T00:00:00",
					"EvaluationReason" : "Series Already Complete",
					"EvaluationStatus" : "Extraneous",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0262",
		"TestCaseName" : "dose 3 to 4 Pediarix, interval 4 mo-1 day",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-06-03T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "Extra Doses",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: series complete",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "HepB"
		},
		"PatientProfile" : {
			"Dob" : "2010-04-04T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "110",
					"DateAdministered" : "2010-06-04T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2010-08-04T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2011-02-04T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2011-06-03T00:00:00",
					"EvaluationReason" : "Series Already Complete",
					"EvaluationStatus" : "Extraneous",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0263",
		"TestCaseName" : "dose 3 to 4 Pediarix, interval 4 mo",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-06-04T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "Extra Doses",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: series complete",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "HepB"
		},
		"PatientProfile" : {
			"Dob" : "2010-04-04T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "110",
					"DateAdministered" : "2010-06-04T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2010-08-04T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2011-02-04T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2011-06-04T00:00:00",
					"EvaluationReason" : "Series Already Complete",
					"EvaluationStatus" : "Extraneous",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0264",
		"TestCaseName" : "invalid dose 1-2 interval in midst of others",
		"ExpectedForecast" : {
			"AssessmentDate" : "2009-06-11T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2009-08-06T00:00:00",
			"EvaluationTestType" : "Interval: Below Absolute Minimum",
			"ForecastNumber" : 3,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2010-10-08T00:00:00",
			"RecommendedDate" : "2009-08-11T00:00:00",
			"VaccineGroup" : "HepB"
		},
		"PatientProfile" : {
			"Dob" : "2009-02-11T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "110",
					"DateAdministered" : "2009-04-11T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2009-04-30T00:00:00",
					"EvaluationReason" : "Interval: Too Short",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2009-06-11T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0265",
		"TestCaseName" : "invalid dose 2-3 interval in midst of others",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-02-02T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "Interval: Below Absolute Minimum",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: series complete",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "HepB"
		},
		"PatientProfile" : {
			"Dob" : "2010-02-02T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "110",
					"DateAdministered" : "2010-04-02T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2010-06-02T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2010-06-25T00:00:00",
					"EvaluationReason" : "Interval: Too Short",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2011-02-02T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0266",
		"TestCaseName" : "# 1 Pediarix at 6 wks",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-12-13T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2012-01-10T00:00:00",
			"EvaluationTestType" : "All Valid: Forecast Test",
			"ForecastNumber" : 2,
			"ForecastTestType" : "Recommended based on minimum interval from previous dose (catch-up)",
			"PastDueDate" : "2012-02-28T00:00:00",
			"RecommendedDate" : "2012-01-10T00:00:00",
			"VaccineGroup" : "HepB"
		},
		"PatientProfile" : {
			"Dob" : "2011-11-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "110",
					"DateAdministered" : "2011-12-13T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0267",
		"TestCaseName" : "# 1 Pediarix at 6 yrs 11.5 mo",
		"ExpectedForecast" : {
			"AssessmentDate" : "2012-03-16T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2012-04-13T00:00:00",
			"EvaluationTestType" : "All Valid: Forecast Test",
			"ForecastNumber" : 2,
			"ForecastTestType" : "Recommended based on minimum interval from previous dose (catch-up)",
			"PastDueDate" : "2012-04-13T00:00:00",
			"RecommendedDate" : "2012-04-13T00:00:00",
			"VaccineGroup" : "HepB"
		},
		"PatientProfile" : {
			"Dob" : "2005-04-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "110",
					"DateAdministered" : "2012-03-16T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0268",
		"TestCaseName" : "# 1 Pediarix at 7 yrs",
		"ExpectedForecast" : {
			"AssessmentDate" : "2012-02-01T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2012-02-29T00:00:00",
			"EvaluationTestType" : "All Valid: Forecast Test",
			"ForecastNumber" : 2,
			"ForecastTestType" : "Recommended based on minimum interval from previous dose (catch-up)",
			"PastDueDate" : "2012-02-29T00:00:00",
			"RecommendedDate" : "2012-02-29T00:00:00",
			"VaccineGroup" : "HepB"
		},
		"PatientProfile" : {
			"Dob" : "2005-02-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "110",
					"DateAdministered" : "2012-02-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0269",
		"TestCaseName" : "# 2 Pediarix at 10 wks-5 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-12-14T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2012-03-26T00:00:00",
			"EvaluationTestType" : "All Valid: Forecast Test",
			"ForecastNumber" : 3,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2013-06-06T00:00:00",
			"RecommendedDate" : "2012-04-10T00:00:00",
			"VaccineGroup" : "HepB"
		},
		"PatientProfile" : {
			"Dob" : "2011-10-10T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "110",
					"DateAdministered" : "2011-11-17T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2011-12-14T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0270",
		"TestCaseName" : "# 2 Pediarix at 10 wks-4 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-05-03T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2011-08-13T00:00:00",
			"EvaluationTestType" : "All Valid: Forecast Test",
			"ForecastNumber" : 3,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2012-10-23T00:00:00",
			"RecommendedDate" : "2011-08-26T00:00:00",
			"VaccineGroup" : "HepB"
		},
		"PatientProfile" : {
			"Dob" : "2011-02-26T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "110",
					"DateAdministered" : "2011-03-26T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2011-05-03T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0271",
		"TestCaseName" : "# 2 Pediarix at 10 wks",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-05-07T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2011-08-13T00:00:00",
			"EvaluationTestType" : "All Valid: Forecast Test",
			"ForecastNumber" : 3,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2012-10-23T00:00:00",
			"RecommendedDate" : "2011-08-26T00:00:00",
			"VaccineGroup" : "HepB"
		},
		"PatientProfile" : {
			"Dob" : "2011-02-26T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "110",
					"DateAdministered" : "2011-03-26T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2011-05-07T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0273",
		"TestCaseName" : "Child<2 months, no shots, #1 forecasted at 2 months of age",
		"ExpectedForecast" : {
			"AssessmentDate" : "2010-01-01T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2010-02-12T00:00:00",
			"EvaluationTestType" : "No Doses Administered",
			"ForecastNumber" : 1,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2010-04-28T00:00:00",
			"RecommendedDate" : "2010-03-01T00:00:00",
			"VaccineGroup" : "Hib"
		},
		"PatientProfile" : {
			"Dob" : "2010-01-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : []
		}
	}, {
		"CdcTestId" : "2013-0274",
		"TestCaseName" : "# 1 at 6 wks-5 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2010-02-07T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2010-02-12T00:00:00",
			"EvaluationTestType" : "Age: Below Absolute Minimum",
			"ForecastNumber" : 1,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2010-04-28T00:00:00",
			"RecommendedDate" : "2010-03-01T00:00:00",
			"VaccineGroup" : "Hib"
		},
		"PatientProfile" : {
			"Dob" : "2010-01-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "48",
					"DateAdministered" : "2010-02-07T00:00:00",
					"EvaluationReason" : "Age: Too Young",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : "PMC",
					"VaccineName" : "ACTHIB"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0275",
		"TestCaseName" : "# 1 at 6 wks-4 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2010-02-08T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2010-03-12T00:00:00",
			"EvaluationTestType" : "Age: At Absolute Minimum",
			"ForecastNumber" : 2,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2010-06-28T00:00:00",
			"RecommendedDate" : "2010-05-01T00:00:00",
			"VaccineGroup" : "Hib"
		},
		"PatientProfile" : {
			"Dob" : "2010-01-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "48",
					"DateAdministered" : "2010-02-08T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "ACTHIB"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0276",
		"TestCaseName" : "# 1 at 6 wks -3 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2010-02-09T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2010-03-12T00:00:00",
			"EvaluationTestType" : "All Valid: Forecast Test",
			"ForecastNumber" : 2,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2010-06-28T00:00:00",
			"RecommendedDate" : "2010-05-01T00:00:00",
			"VaccineGroup" : "Hib"
		},
		"PatientProfile" : {
			"Dob" : "2010-01-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "48",
					"DateAdministered" : "2010-02-09T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "ACTHIB"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0277",
		"TestCaseName" : "# 1 at 3 months",
		"ExpectedForecast" : {
			"AssessmentDate" : "2010-04-01T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2010-04-29T00:00:00",
			"EvaluationTestType" : "All Valid: Forecast Test",
			"ForecastNumber" : 2,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2010-06-28T00:00:00",
			"RecommendedDate" : "2010-05-01T00:00:00",
			"VaccineGroup" : "Hib"
		},
		"PatientProfile" : {
			"Dob" : "2010-01-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "48",
					"DateAdministered" : "2010-04-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "ACTHIB"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0278",
		"TestCaseName" : "#1 at 3 months and 3 days-catchup- #2 recommended at +28 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2010-04-04T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2010-05-02T00:00:00",
			"EvaluationTestType" : "All Valid: Forecast Test",
			"ForecastNumber" : 2,
			"ForecastTestType" : "Recommended based on minimum interval from previous dose (catch-up)",
			"PastDueDate" : "2010-06-28T00:00:00",
			"RecommendedDate" : "2010-05-02T00:00:00",
			"VaccineGroup" : "Hib"
		},
		"PatientProfile" : {
			"Dob" : "2010-01-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "48",
					"DateAdministered" : "2010-04-04T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "ACTHIB"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0279",
		"TestCaseName" : "#1 at 6 months - catchup- #2 recommended at +28 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2010-07-01T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2010-07-29T00:00:00",
			"EvaluationTestType" : "All Valid: Forecast Test",
			"ForecastNumber" : 2,
			"ForecastTestType" : "Recommended based on minimum interval from previous dose (catch-up)",
			"PastDueDate" : "2010-07-29T00:00:00",
			"RecommendedDate" : "2010-07-29T00:00:00",
			"VaccineGroup" : "Hib"
		},
		"PatientProfile" : {
			"Dob" : "2010-01-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "48",
					"DateAdministered" : "2010-07-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "ACTHIB"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0280",
		"TestCaseName" : "#1 at 7 and <11 months - catchup- drop to 3 dose schedule",
		"ExpectedForecast" : {
			"AssessmentDate" : "2010-08-01T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2010-08-29T00:00:00",
			"EvaluationTestType" : "All Valid: Forecast Test",
			"ForecastNumber" : 2,
			"ForecastTestType" : "Recommended based on minimum interval from previous dose (catch-up)",
			"PastDueDate" : "2010-08-29T00:00:00",
			"RecommendedDate" : "2010-08-29T00:00:00",
			"VaccineGroup" : "Hib"
		},
		"PatientProfile" : {
			"Dob" : "2010-01-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "48",
					"DateAdministered" : "2010-08-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "ACTHIB"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0281",
		"TestCaseName" : "#1 at 12 months, drop to 2-dose schedule",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-01-01T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2011-02-26T00:00:00",
			"EvaluationTestType" : "All Valid: Forecast Test",
			"ForecastNumber" : 2,
			"ForecastTestType" : "Recommended based on minimum interval from previous dose (catch-up)",
			"PastDueDate" : "2011-05-28T00:00:00",
			"RecommendedDate" : "2011-02-26T00:00:00",
			"VaccineGroup" : "Hib"
		},
		"PatientProfile" : {
			"Dob" : "2010-01-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "48",
					"DateAdministered" : "2011-01-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "ACTHIB"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0282",
		"TestCaseName" : "#1 at 15m -drop to 1 dose schedule",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-04-01T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "All Valid: Forecast Test",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: series complete",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "Hib"
		},
		"PatientProfile" : {
			"Dob" : "2010-01-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "48",
					"DateAdministered" : "2011-04-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "ACTHIB"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0283",
		"TestCaseName" : "#1 at 3 years -drop to 1 dose schedule",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-01-01T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "All Valid: Forecast Test",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: series complete",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "Hib"
		},
		"PatientProfile" : {
			"Dob" : "2008-01-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "48",
					"DateAdministered" : "2011-01-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "ACTHIB"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0284",
		"TestCaseName" : "#1 at  5 years",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-01-01T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "All Valid: Forecast Test",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: series complete",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "Hib"
		},
		"PatientProfile" : {
			"Dob" : "2006-01-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "48",
					"DateAdministered" : "2011-01-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "ACTHIB"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0285",
		"TestCaseName" : "#1 at 7 years",
		"ExpectedForecast" : {
			"AssessmentDate" : "2012-01-01T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "All Valid: Forecast Test",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: series complete",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "Hib"
		},
		"PatientProfile" : {
			"Dob" : "2005-01-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "48",
					"DateAdministered" : "2012-01-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "ACTHIB"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0286",
		"TestCaseName" : "# 2 at 10 wks-5 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2010-03-07T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2010-04-04T00:00:00",
			"EvaluationTestType" : "Age: Below Absolute Minimum",
			"ForecastNumber" : 2,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2010-06-28T00:00:00",
			"RecommendedDate" : "2010-05-01T00:00:00",
			"VaccineGroup" : "Hib"
		},
		"PatientProfile" : {
			"Dob" : "2010-01-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "48",
					"DateAdministered" : "2010-02-08T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "ACTHIB"
				}, {
					"Cvx" : "48",
					"DateAdministered" : "2010-03-07T00:00:00",
					"EvaluationReason" : "Age: Too Young",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : "PMC",
					"VaccineName" : "ACTHIB"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0287",
		"TestCaseName" : "# 2 at 10 wks-4 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2010-03-08T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2010-04-09T00:00:00",
			"EvaluationTestType" : "Age: At Absolute Minimum",
			"ForecastNumber" : 3,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2010-08-28T00:00:00",
			"RecommendedDate" : "2010-07-01T00:00:00",
			"VaccineGroup" : "Hib"
		},
		"PatientProfile" : {
			"Dob" : "2010-01-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "48",
					"DateAdministered" : "2010-02-08T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "ACTHIB"
				}, {
					"Cvx" : "48",
					"DateAdministered" : "2010-03-08T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "ACTHIB"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0288",
		"TestCaseName" : "# 2 at 10 wks -3 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2010-03-09T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2010-04-09T00:00:00",
			"EvaluationTestType" : "All Valid: Forecast Test",
			"ForecastNumber" : 3,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2010-08-28T00:00:00",
			"RecommendedDate" : "2010-07-01T00:00:00",
			"VaccineGroup" : "Hib"
		},
		"PatientProfile" : {
			"Dob" : "2010-01-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "48",
					"DateAdministered" : "2010-02-08T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "ACTHIB"
				}, {
					"Cvx" : "48",
					"DateAdministered" : "2010-03-09T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "ACTHIB"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0289",
		"TestCaseName" : "# 2 at 4 months",
		"ExpectedForecast" : {
			"AssessmentDate" : "2005-05-01T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2005-05-29T00:00:00",
			"EvaluationTestType" : "Age: At Recommended",
			"ForecastNumber" : 3,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2005-08-28T00:00:00",
			"RecommendedDate" : "2005-07-01T00:00:00",
			"VaccineGroup" : "Hib"
		},
		"PatientProfile" : {
			"Dob" : "2005-01-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "48",
					"DateAdministered" : "2005-03-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "ACTHIB"
				}, {
					"Cvx" : "48",
					"DateAdministered" : "2005-05-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "ACTHIB"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0290",
		"TestCaseName" : "#2 at 5 months",
		"ExpectedForecast" : {
			"AssessmentDate" : "2005-06-01T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2005-06-29T00:00:00",
			"EvaluationTestType" : "All Valid: Forecast Test",
			"ForecastNumber" : 3,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2005-08-28T00:00:00",
			"RecommendedDate" : "2005-07-01T00:00:00",
			"VaccineGroup" : "Hib"
		},
		"PatientProfile" : {
			"Dob" : "2005-01-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "48",
					"DateAdministered" : "2005-03-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "ACTHIB"
				}, {
					"Cvx" : "48",
					"DateAdministered" : "2005-06-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "ACTHIB"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0291",
		"TestCaseName" : "#2 at 5 months and 3 days-catchup-#3 at +28 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2005-06-04T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2005-07-02T00:00:00",
			"EvaluationTestType" : "All Valid: Forecast Test",
			"ForecastNumber" : 3,
			"ForecastTestType" : "Recommended based on minimum interval from previous dose (catch-up)",
			"PastDueDate" : "2005-08-28T00:00:00",
			"RecommendedDate" : "2005-07-02T00:00:00",
			"VaccineGroup" : "Hib"
		},
		"PatientProfile" : {
			"Dob" : "2005-01-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "48",
					"DateAdministered" : "2005-03-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "ACTHIB"
				}, {
					"Cvx" : "48",
					"DateAdministered" : "2005-06-04T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "valid",
					"Mvx" : "PMC",
					"VaccineName" : "ACTHIB"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0292",
		"TestCaseName" : "#2 at 12 m - 5 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2005-12-27T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2006-01-24T00:00:00",
			"EvaluationTestType" : "All Valid: Forecast Test",
			"ForecastNumber" : 3,
			"ForecastTestType" : "Recommended based on minimum interval from previous dose (catch-up)",
			"PastDueDate" : "2006-01-24T00:00:00",
			"RecommendedDate" : "2006-01-24T00:00:00",
			"VaccineGroup" : "Hib"
		},
		"PatientProfile" : {
			"Dob" : "2005-01-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "48",
					"DateAdministered" : "2005-03-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "ACTHIB"
				}, {
					"Cvx" : "48",
					"DateAdministered" : "2005-12-27T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "ACTHIB"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0293",
		"TestCaseName" : "#2 at 12 m - 4 days drop to 3-dose schedule",
		"ExpectedForecast" : {
			"AssessmentDate" : "2005-12-28T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2006-02-22T00:00:00",
			"EvaluationTestType" : "All Valid: Forecast Test",
			"ForecastNumber" : 3,
			"ForecastTestType" : "Recommended based on minimum interval from previous dose (catch-up)",
			"PastDueDate" : "2006-05-28T00:00:00",
			"RecommendedDate" : "2006-02-22T00:00:00",
			"VaccineGroup" : "Hib"
		},
		"PatientProfile" : {
			"Dob" : "2005-01-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "48",
					"DateAdministered" : "2005-03-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "ACTHIB"
				}, {
					"Cvx" : "48",
					"DateAdministered" : "2005-12-28T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "ACTHIB"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0294",
		"TestCaseName" : "#2 at 15 months",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-04-01T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "All Valid: Forecast Test",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: series complete",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "Hib"
		},
		"PatientProfile" : {
			"Dob" : "2010-01-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "48",
					"DateAdministered" : "2010-03-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "ACTHIB"
				}, {
					"Cvx" : "48",
					"DateAdministered" : "2011-04-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "ACTHIB"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0295",
		"TestCaseName" : "#2 at 5 years",
		"ExpectedForecast" : {
			"AssessmentDate" : "2012-01-01T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "All Valid: Forecast Test",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: series complete",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "Hib"
		},
		"PatientProfile" : {
			"Dob" : "2007-01-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "48",
					"DateAdministered" : "2007-03-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "ACTHIB"
				}, {
					"Cvx" : "48",
					"DateAdministered" : "2012-01-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "ACTHIB"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0296",
		"TestCaseName" : "dose 1 to 2, interval 4 weeks -5 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2010-03-24T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2010-04-21T00:00:00",
			"EvaluationTestType" : "Interval: Below Absolute Minimum",
			"ForecastNumber" : 2,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2010-06-28T00:00:00",
			"RecommendedDate" : "2010-05-01T00:00:00",
			"VaccineGroup" : "Hib"
		},
		"PatientProfile" : {
			"Dob" : "2010-01-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "48",
					"DateAdministered" : "2010-03-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "ACTHIB"
				}, {
					"Cvx" : "48",
					"DateAdministered" : "2010-03-24T00:00:00",
					"EvaluationReason" : "Interval: Too Short",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : "PMC",
					"VaccineName" : "ACTHIB"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0297",
		"TestCaseName" : "dose 1 to 2, interval 4 weeks -4 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2010-03-25T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2010-04-22T00:00:00",
			"EvaluationTestType" : "Interval: At Absolute Minimum",
			"ForecastNumber" : 3,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2010-08-28T00:00:00",
			"RecommendedDate" : "2010-07-01T00:00:00",
			"VaccineGroup" : "Hib"
		},
		"PatientProfile" : {
			"Dob" : "2010-01-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "48",
					"DateAdministered" : "2010-03-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "ACTHIB"
				}, {
					"Cvx" : "48",
					"DateAdministered" : "2010-03-25T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "ACTHIB"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0298",
		"TestCaseName" : "dose 1 to 2, interval 4 weeks -3 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2010-03-26T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2010-04-23T00:00:00",
			"EvaluationTestType" : "Interval: At Minimum",
			"ForecastNumber" : 3,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2010-08-28T00:00:00",
			"RecommendedDate" : "2010-07-01T00:00:00",
			"VaccineGroup" : "Hib"
		},
		"PatientProfile" : {
			"Dob" : "2010-01-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "48",
					"DateAdministered" : "2010-03-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "ACTHIB"
				}, {
					"Cvx" : "48",
					"DateAdministered" : "2010-03-26T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "ACTHIB"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0299",
		"TestCaseName" : "#3 at 14 weeks-5 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2010-04-04T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2010-05-02T00:00:00",
			"EvaluationTestType" : "Age: Below Absolute Minimum",
			"ForecastNumber" : 3,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2010-08-28T00:00:00",
			"RecommendedDate" : "2010-07-01T00:00:00",
			"VaccineGroup" : "Hib"
		},
		"PatientProfile" : {
			"Dob" : "2010-01-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "48",
					"DateAdministered" : "2010-02-10T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "ACTHIB"
				}, {
					"Cvx" : "51",
					"DateAdministered" : "2010-03-08T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "COMVAX"
				}, {
					"Cvx" : "49",
					"DateAdministered" : "2010-04-04T00:00:00",
					"EvaluationReason" : "Age: Too Young",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : "MSD",
					"VaccineName" : "PEDVAXHIB"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0300",
		"TestCaseName" : "#3  at 6 months",
		"ExpectedForecast" : {
			"AssessmentDate" : "2010-07-01T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2011-01-01T00:00:00",
			"EvaluationTestType" : "Age: At Recommended",
			"ForecastNumber" : 4,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2011-05-28T00:00:00",
			"RecommendedDate" : "2011-01-01T00:00:00",
			"VaccineGroup" : "Hib"
		},
		"PatientProfile" : {
			"Dob" : "2010-01-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "48",
					"DateAdministered" : "2010-03-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "ACTHIB"
				}, {
					"Cvx" : "51",
					"DateAdministered" : "2010-05-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "COMVAX"
				}, {
					"Cvx" : "47",
					"DateAdministered" : "2010-07-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "WAL",
					"VaccineName" : "HIBTITER"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0301",
		"TestCaseName" : "Dose 2 to 3, interval 4 weeks-5 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2010-05-24T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2010-06-21T00:00:00",
			"EvaluationTestType" : "Interval: Below Absolute Minimum",
			"ForecastNumber" : 3,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2010-08-28T00:00:00",
			"RecommendedDate" : "2010-07-01T00:00:00",
			"VaccineGroup" : "Hib"
		},
		"PatientProfile" : {
			"Dob" : "2010-01-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "48",
					"DateAdministered" : "2010-03-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "ACTHIB"
				}, {
					"Cvx" : "51",
					"DateAdministered" : "2010-05-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "COMVAX"
				}, {
					"Cvx" : "48",
					"DateAdministered" : "2010-05-24T00:00:00",
					"EvaluationReason" : "Interval: Too Short",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : "PMC",
					"VaccineName" : "ACTHIB"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0302",
		"TestCaseName" : "Dose 2 to 3, interval 4 weeks -4 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2010-05-25T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2011-01-01T00:00:00",
			"EvaluationTestType" : "Interval: At Absolute Minimum",
			"ForecastNumber" : 4,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2011-05-28T00:00:00",
			"RecommendedDate" : "2011-01-01T00:00:00",
			"VaccineGroup" : "Hib"
		},
		"PatientProfile" : {
			"Dob" : "2010-01-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "48",
					"DateAdministered" : "2010-03-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "ACTHIB"
				}, {
					"Cvx" : "51",
					"DateAdministered" : "2010-05-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "COMVAX"
				}, {
					"Cvx" : "48",
					"DateAdministered" : "2010-05-25T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "ACTHIB"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0303",
		"TestCaseName" : "Dose 2 to 3, interval 4 weeks",
		"ExpectedForecast" : {
			"AssessmentDate" : "2010-05-29T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2011-01-01T00:00:00",
			"EvaluationTestType" : "Interval: At Minimum",
			"ForecastNumber" : 4,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2011-05-28T00:00:00",
			"RecommendedDate" : "2011-01-01T00:00:00",
			"VaccineGroup" : "Hib"
		},
		"PatientProfile" : {
			"Dob" : "2010-01-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "48",
					"DateAdministered" : "2010-03-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "ACTHIB"
				}, {
					"Cvx" : "47",
					"DateAdministered" : "2010-05-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "WAL",
					"VaccineName" : "HIBTITER"
				}, {
					"Cvx" : "47",
					"DateAdministered" : "2010-05-29T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "WAL",
					"VaccineName" : "HIBTITER"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0304",
		"TestCaseName" : "#4 at 360 days of age, interval between #3-4 >8 weeks",
		"ExpectedForecast" : {
			"AssessmentDate" : "2010-12-27T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2011-02-21T00:00:00",
			"EvaluationTestType" : "Age: Below Absolute Minimum",
			"ForecastNumber" : 4,
			"ForecastTestType" : "Recommended based on minimum interval from inValid dose",
			"PastDueDate" : "2011-05-28T00:00:00",
			"RecommendedDate" : "2011-02-21T00:00:00",
			"VaccineGroup" : "Hib"
		},
		"PatientProfile" : {
			"Dob" : "2010-01-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "48",
					"DateAdministered" : "2010-03-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "ACTHIB"
				}, {
					"Cvx" : "48",
					"DateAdministered" : "2010-05-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "ACTHIB"
				}, {
					"Cvx" : "48",
					"DateAdministered" : "2010-07-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "ACTHIB"
				}, {
					"Cvx" : "48",
					"DateAdministered" : "2010-12-27T00:00:00",
					"EvaluationReason" : "Age: Too Young",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : "PMC",
					"VaccineName" : "ACTHIB"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0305",
		"TestCaseName" : "#4 at 361 days of age, interval between #3-4 >8 weeks",
		"ExpectedForecast" : {
			"AssessmentDate" : "2010-12-28T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "Age: At Absolute Minimum",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: series complete",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "Hib"
		},
		"PatientProfile" : {
			"Dob" : "2010-01-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "48",
					"DateAdministered" : "2010-03-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "ACTHIB"
				}, {
					"Cvx" : "48",
					"DateAdministered" : "2010-05-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "ACTHIB"
				}, {
					"Cvx" : "48",
					"DateAdministered" : "2010-07-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "ACTHIB"
				}, {
					"Cvx" : "48",
					"DateAdministered" : "2010-12-28T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "ACTHIB"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0306",
		"TestCaseName" : "#4 at 362 days of age, interval between #3-4 >8 weeks",
		"ExpectedForecast" : {
			"AssessmentDate" : "2010-12-29T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "All Valid: Forecast Test",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: series complete",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "Hib"
		},
		"PatientProfile" : {
			"Dob" : "2010-01-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "48",
					"DateAdministered" : "2010-03-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "ACTHIB"
				}, {
					"Cvx" : "48",
					"DateAdministered" : "2010-05-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "ACTHIB"
				}, {
					"Cvx" : "48",
					"DateAdministered" : "2010-07-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "ACTHIB"
				}, {
					"Cvx" : "48",
					"DateAdministered" : "2010-12-29T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "ACTHIB"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0307",
		"TestCaseName" : "#4 at 15 months of age, interval between #3-4 > 8 weeks",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-04-01T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "All Valid: Forecast Test",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: series complete",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "Hib"
		},
		"PatientProfile" : {
			"Dob" : "2010-01-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "48",
					"DateAdministered" : "2010-03-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "ACTHIB"
				}, {
					"Cvx" : "48",
					"DateAdministered" : "2010-05-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "ACTHIB"
				}, {
					"Cvx" : "48",
					"DateAdministered" : "2010-07-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "ACTHIB"
				}, {
					"Cvx" : "48",
					"DateAdministered" : "2011-04-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "ACTHIB"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0308",
		"TestCaseName" : "#4 at 365 days of age, interval between #3-4 8 weeks -5 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-01-01T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2011-02-26T00:00:00",
			"EvaluationTestType" : "Interval: Below Absolute Minimum",
			"ForecastNumber" : 4,
			"ForecastTestType" : "Recommended based on minimum interval from inValid dose",
			"PastDueDate" : "2011-05-28T00:00:00",
			"RecommendedDate" : "2011-02-26T00:00:00",
			"VaccineGroup" : "Hib"
		},
		"PatientProfile" : {
			"Dob" : "2010-01-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "48",
					"DateAdministered" : "2010-03-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "ACTHIB"
				}, {
					"Cvx" : "48",
					"DateAdministered" : "2010-05-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "ACTHIB"
				}, {
					"Cvx" : "48",
					"DateAdministered" : "2010-11-11T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "ACTHIB"
				}, {
					"Cvx" : "48",
					"DateAdministered" : "2011-01-01T00:00:00",
					"EvaluationReason" : "Interval: Too Short",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : "PMC",
					"VaccineName" : "ACTHIB"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0309",
		"TestCaseName" : "#4 at 365 days of age, interval between #3-4 >8 weeks -4 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-01-01T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "Interval: At Absolute Minimum",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: series complete",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "Hib"
		},
		"PatientProfile" : {
			"Dob" : "2010-01-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "48",
					"DateAdministered" : "2010-03-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "ACTHIB"
				}, {
					"Cvx" : "48",
					"DateAdministered" : "2010-05-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "ACTHIB"
				}, {
					"Cvx" : "48",
					"DateAdministered" : "2010-11-10T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "ACTHIB"
				}, {
					"Cvx" : "48",
					"DateAdministered" : "2011-01-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "ACTHIB"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0310",
		"TestCaseName" : "# 4 at 15 months of age",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-04-01T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "Age: At Recommended",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: series complete",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "Hib"
		},
		"PatientProfile" : {
			"Dob" : "2010-01-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "48",
					"DateAdministered" : "2010-03-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "ACTHIB"
				}, {
					"Cvx" : "48",
					"DateAdministered" : "2010-05-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "ACTHIB"
				}, {
					"Cvx" : "48",
					"DateAdministered" : "2010-08-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "ACTHIB"
				}, {
					"Cvx" : "48",
					"DateAdministered" : "2011-04-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "ACTHIB"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0313",
		"TestCaseName" : "#4 at 5 years",
		"ExpectedForecast" : {
			"AssessmentDate" : "2012-01-01T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "All Valid: Forecast Test",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: series complete",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "Hib"
		},
		"PatientProfile" : {
			"Dob" : "2007-01-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "48",
					"DateAdministered" : "2007-03-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "ACTHIB"
				}, {
					"Cvx" : "48",
					"DateAdministered" : "2007-05-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "ACTHIB"
				}, {
					"Cvx" : "48",
					"DateAdministered" : "2007-08-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "ACTHIB"
				}, {
					"Cvx" : "48",
					"DateAdministered" : "2012-01-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "ACTHIB"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0314",
		"TestCaseName" : "#4 at 7 years",
		"ExpectedForecast" : {
			"AssessmentDate" : "2012-01-01T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "All Valid: Forecast Test",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: series complete",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "Hib"
		},
		"PatientProfile" : {
			"Dob" : "2005-01-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "48",
					"DateAdministered" : "2005-03-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "ACTHIB"
				}, {
					"Cvx" : "48",
					"DateAdministered" : "2005-05-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "ACTHIB"
				}, {
					"Cvx" : "48",
					"DateAdministered" : "2005-09-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "ACTHIB"
				}, {
					"Cvx" : "48",
					"DateAdministered" : "2012-01-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "ACTHIB"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0315",
		"TestCaseName" : "Child<2 months, no shots, #1 forecasted at 2 months of age",
		"ExpectedForecast" : {
			"AssessmentDate" : "2010-01-01T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2010-02-12T00:00:00",
			"EvaluationTestType" : "No Doses Administered",
			"ForecastNumber" : 1,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2010-04-28T00:00:00",
			"RecommendedDate" : "2010-03-01T00:00:00",
			"VaccineGroup" : "Hib"
		},
		"PatientProfile" : {
			"Dob" : "2010-01-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : []
		}
	}, {
		"CdcTestId" : "2013-0317",
		"TestCaseName" : "# 2 at 10 wks-4 days, PRP-OMP series",
		"ExpectedForecast" : {
			"AssessmentDate" : "2005-03-08T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2006-01-01T00:00:00",
			"EvaluationTestType" : "Interval: At Absolute Minimum",
			"ForecastNumber" : 3,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2006-05-28T00:00:00",
			"RecommendedDate" : "2006-01-01T00:00:00",
			"VaccineGroup" : "Hib"
		},
		"PatientProfile" : {
			"Dob" : "2005-01-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "49",
					"DateAdministered" : "2005-02-08T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "PEDVAXHIB"
				}, {
					"Cvx" : "49",
					"DateAdministered" : "2005-03-08T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "PEDVAXHIB"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0318",
		"TestCaseName" : "# 2 at 10 wks-3 days, PRP-OMP series",
		"ExpectedForecast" : {
			"AssessmentDate" : "2005-03-09T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2006-01-01T00:00:00",
			"EvaluationTestType" : "All Valid: Forecast Test",
			"ForecastNumber" : 3,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2006-05-28T00:00:00",
			"RecommendedDate" : "2006-01-01T00:00:00",
			"VaccineGroup" : "Hib"
		},
		"PatientProfile" : {
			"Dob" : "2005-01-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "49",
					"DateAdministered" : "2005-02-08T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "PEDVAXHIB"
				}, {
					"Cvx" : "49",
					"DateAdministered" : "2005-03-09T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "PEDVAXHIB"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0319",
		"TestCaseName" : "# 2 at 12 months",
		"ExpectedForecast" : {
			"AssessmentDate" : "2006-01-01T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2006-02-26T00:00:00",
			"EvaluationTestType" : "All Valid: Forecast Test",
			"ForecastNumber" : 3,
			"ForecastTestType" : "Recommended based on minimum interval from previous dose (catch-up)",
			"PastDueDate" : "2006-05-28T00:00:00",
			"RecommendedDate" : "2006-02-26T00:00:00",
			"VaccineGroup" : "Hib"
		},
		"PatientProfile" : {
			"Dob" : "2005-01-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "48",
					"DateAdministered" : "2005-03-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "ACTHIB"
				}, {
					"Cvx" : "48",
					"DateAdministered" : "2006-01-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "ACTHIB"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0320",
		"TestCaseName" : "#3 at 5m (#1, #2 at 2 and 4m)",
		"ExpectedForecast" : {
			"AssessmentDate" : "2010-06-01T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2011-01-01T00:00:00",
			"EvaluationTestType" : "All Valid: Forecast Test",
			"ForecastNumber" : 4,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2011-05-28T00:00:00",
			"RecommendedDate" : "2011-01-01T00:00:00",
			"VaccineGroup" : "Hib"
		},
		"PatientProfile" : {
			"Dob" : "2010-01-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "51",
					"DateAdministered" : "2010-03-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "COMVAX"
				}, {
					"Cvx" : "49",
					"DateAdministered" : "2010-05-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "PEDVAXHIB"
				}, {
					"Cvx" : "48",
					"DateAdministered" : "2010-06-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "ACTHIB"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0321",
		"TestCaseName" : "#3 at 10 months and 9 days (#1,2 at 2 and 4 m)",
		"ExpectedForecast" : {
			"AssessmentDate" : "2010-11-10T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2011-01-05T00:00:00",
			"EvaluationTestType" : "All Valid: Forecast Test",
			"ForecastNumber" : 4,
			"ForecastTestType" : "Recommended based on minimum interval from previous dose (catch-up)",
			"PastDueDate" : "2011-05-28T00:00:00",
			"RecommendedDate" : "2011-01-05T00:00:00",
			"VaccineGroup" : "Hib"
		},
		"PatientProfile" : {
			"Dob" : "2010-01-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "51",
					"DateAdministered" : "2010-03-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "COMVAX"
				}, {
					"Cvx" : "51",
					"DateAdministered" : "2010-04-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "COMVAX"
				}, {
					"Cvx" : "49",
					"DateAdministered" : "2010-11-10T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "PEDVAXHIB"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0322",
		"TestCaseName" : "#3 at 11 months",
		"ExpectedForecast" : {
			"AssessmentDate" : "2010-12-01T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2011-01-26T00:00:00",
			"EvaluationTestType" : "All Valid: Forecast Test",
			"ForecastNumber" : 4,
			"ForecastTestType" : "Recommended based on minimum interval from previous dose (catch-up)",
			"PastDueDate" : "2011-05-28T00:00:00",
			"RecommendedDate" : "2011-01-26T00:00:00",
			"VaccineGroup" : "Hib"
		},
		"PatientProfile" : {
			"Dob" : "2010-01-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "51",
					"DateAdministered" : "2010-03-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "COMVAX"
				}, {
					"Cvx" : "49",
					"DateAdministered" : "2010-05-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "PEDVAXHIB"
				}, {
					"Cvx" : "48",
					"DateAdministered" : "2010-12-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "ACTHIB"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0323",
		"TestCaseName" : "#3 at 12 months -5 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2010-12-27T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2011-02-21T00:00:00",
			"EvaluationTestType" : "All Valid: Forecast Test",
			"ForecastNumber" : 4,
			"ForecastTestType" : "Recommended based on minimum interval from previous dose (catch-up)",
			"PastDueDate" : "2011-05-28T00:00:00",
			"RecommendedDate" : "2011-02-21T00:00:00",
			"VaccineGroup" : "Hib"
		},
		"PatientProfile" : {
			"Dob" : "2010-01-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "51",
					"DateAdministered" : "2010-03-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "COMVAX"
				}, {
					"Cvx" : "51",
					"DateAdministered" : "2010-05-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "COMVAX"
				}, {
					"Cvx" : "47",
					"DateAdministered" : "2010-12-27T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "WAL",
					"VaccineName" : "HIBTITER"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0324",
		"TestCaseName" : "#3 at 12 months - 3 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2005-12-29T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2006-02-23T00:00:00",
			"EvaluationTestType" : "All Valid: Forecast Test",
			"ForecastNumber" : 4,
			"ForecastTestType" : "Recommended based on minimum interval from previous dose (catch-up)",
			"PastDueDate" : "2006-05-28T00:00:00",
			"RecommendedDate" : "2006-02-23T00:00:00",
			"VaccineGroup" : "Hib"
		},
		"PatientProfile" : {
			"Dob" : "2005-01-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "48",
					"DateAdministered" : "2005-03-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "ACTHIB"
				}, {
					"Cvx" : "48",
					"DateAdministered" : "2005-05-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "ACTHIB"
				}, {
					"Cvx" : "48",
					"DateAdministered" : "2005-12-29T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "ACTHIB"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0325",
		"TestCaseName" : "#3 at 15 months",
		"ExpectedForecast" : {
			"AssessmentDate" : "2006-04-01T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "All Valid: Forecast Test",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: series complete",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "Hib"
		},
		"PatientProfile" : {
			"Dob" : "2005-01-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "48",
					"DateAdministered" : "2005-03-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "ACTHIB"
				}, {
					"Cvx" : "48",
					"DateAdministered" : "2005-05-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "ACTHIB"
				}, {
					"Cvx" : "48",
					"DateAdministered" : "2006-04-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "ACTHIB"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0326",
		"TestCaseName" : "#3 at 59 months",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-12-31T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "All Valid: Forecast Test",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: series complete",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "Hib"
		},
		"PatientProfile" : {
			"Dob" : "2007-01-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "51",
					"DateAdministered" : "2007-03-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "COMVAX"
				}, {
					"Cvx" : "49",
					"DateAdministered" : "2007-05-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "PEDVAXHIB"
				}, {
					"Cvx" : "17",
					"DateAdministered" : "2011-12-31T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "Hib Unspecified"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0327",
		"TestCaseName" : "#1 at 7 months-5 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2010-07-27T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2010-08-24T00:00:00",
			"EvaluationTestType" : "All Valid: Forecast Test",
			"ForecastNumber" : 2,
			"ForecastTestType" : "Recommended based on minimum interval from previous dose (catch-up)",
			"PastDueDate" : "2010-08-24T00:00:00",
			"RecommendedDate" : "2010-08-24T00:00:00",
			"VaccineGroup" : "Hib"
		},
		"PatientProfile" : {
			"Dob" : "2010-01-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "48",
					"DateAdministered" : "2010-07-27T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "ACTHIB"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0328",
		"TestCaseName" : "#1 at 7 months- 3 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2005-07-29T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2005-08-26T00:00:00",
			"EvaluationTestType" : "All Valid: Forecast Test",
			"ForecastNumber" : 2,
			"ForecastTestType" : "Recommended based on minimum interval from previous dose (catch-up)",
			"PastDueDate" : "2005-08-28T00:00:00",
			"RecommendedDate" : "2005-08-26T00:00:00",
			"VaccineGroup" : "Hib"
		},
		"PatientProfile" : {
			"Dob" : "2005-01-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "48",
					"DateAdministered" : "2005-07-29T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "ACTHIB"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0329",
		"TestCaseName" : "Dose 2 to 3, interval 8 weeks -3 days, #3 after 12 months of age",
		"ExpectedForecast" : {
			"AssessmentDate" : "2006-01-01T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2006-02-26T00:00:00",
			"EvaluationTestType" : "All Valid: Forecast Test",
			"ForecastNumber" : 4,
			"ForecastTestType" : "Recommended based on minimum interval from previous dose (catch-up)",
			"PastDueDate" : "2006-05-28T00:00:00",
			"RecommendedDate" : "2006-02-26T00:00:00",
			"VaccineGroup" : "Hib"
		},
		"PatientProfile" : {
			"Dob" : "2005-01-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "48",
					"DateAdministered" : "2005-03-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "ACTHIB"
				}, {
					"Cvx" : "48",
					"DateAdministered" : "2005-11-09T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "ACTHIB"
				}, {
					"Cvx" : "48",
					"DateAdministered" : "2006-01-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "ACTHIB"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0330",
		"TestCaseName" : "# 1 at 7 months -4 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2005-07-28T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2005-08-25T00:00:00",
			"EvaluationTestType" : "All Valid: Forecast Test",
			"ForecastNumber" : 2,
			"ForecastTestType" : "Recommended based on minimum interval from previous dose (catch-up)",
			"PastDueDate" : "2005-08-28T00:00:00",
			"RecommendedDate" : "2005-08-25T00:00:00",
			"VaccineGroup" : "Hib"
		},
		"PatientProfile" : {
			"Dob" : "2005-01-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "48",
					"DateAdministered" : "2005-07-28T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "ACTHIB"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0331",
		"TestCaseName" : "# 1 at 12 months minus 5 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2010-12-27T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2011-01-24T00:00:00",
			"EvaluationTestType" : "All Valid: Forecast Test",
			"ForecastNumber" : 2,
			"ForecastTestType" : "Recommended based on minimum interval from previous dose (catch-up)",
			"PastDueDate" : "2011-01-24T00:00:00",
			"RecommendedDate" : "2011-01-24T00:00:00",
			"VaccineGroup" : "Hib"
		},
		"PatientProfile" : {
			"Dob" : "2010-01-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "48",
					"DateAdministered" : "2010-12-27T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "ACTHIB"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0332",
		"TestCaseName" : "# 1 at 12 months -4 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2010-12-28T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2011-02-22T00:00:00",
			"EvaluationTestType" : "All Valid: Forecast Test",
			"ForecastNumber" : 2,
			"ForecastTestType" : "Recommended based on minimum interval from previous dose (catch-up)",
			"PastDueDate" : "2011-05-28T00:00:00",
			"RecommendedDate" : "2011-02-22T00:00:00",
			"VaccineGroup" : "Hib"
		},
		"PatientProfile" : {
			"Dob" : "2010-01-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "48",
					"DateAdministered" : "2010-12-28T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "ACTHIB"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0333",
		"TestCaseName" : "# 1 at 12 months -3 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2010-12-29T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2011-02-23T00:00:00",
			"EvaluationTestType" : "All Valid: Forecast Test",
			"ForecastNumber" : 2,
			"ForecastTestType" : "Recommended based on minimum interval from previous dose (catch-up)",
			"PastDueDate" : "2011-05-28T00:00:00",
			"RecommendedDate" : "2011-02-23T00:00:00",
			"VaccineGroup" : "Hib"
		},
		"PatientProfile" : {
			"Dob" : "2010-01-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "48",
					"DateAdministered" : "2010-12-29T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "ACTHIB"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0334",
		"TestCaseName" : "#2 at 7 m and 23 days (#1 at 7 m)",
		"ExpectedForecast" : {
			"AssessmentDate" : "2005-08-24T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2005-09-21T00:00:00",
			"EvaluationTestType" : "Interval: Below Absolute Minimum",
			"ForecastNumber" : 2,
			"ForecastTestType" : "Recommended based on minimum interval from invalid dose",
			"PastDueDate" : "2005-09-21T00:00:00",
			"RecommendedDate" : "2005-09-21T00:00:00",
			"VaccineGroup" : "Hib"
		},
		"PatientProfile" : {
			"Dob" : "2005-01-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "48",
					"DateAdministered" : "2005-08-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "ACTHIB"
				}, {
					"Cvx" : "48",
					"DateAdministered" : "2005-08-24T00:00:00",
					"EvaluationReason" : "Interval: Too Short",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : "PMC",
					"VaccineName" : "ACTHIB"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0335",
		"TestCaseName" : "#2 at 7 m and 24 days (#1 at 7 m)",
		"ExpectedForecast" : {
			"AssessmentDate" : "2005-08-25T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2006-01-01T00:00:00",
			"EvaluationTestType" : "Interval: At Absolute Minimum",
			"ForecastNumber" : 3,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2006-05-28T00:00:00",
			"RecommendedDate" : "2006-01-01T00:00:00",
			"VaccineGroup" : "Hib"
		},
		"PatientProfile" : {
			"Dob" : "2005-01-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "48",
					"DateAdministered" : "2005-08-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "ACTHIB"
				}, {
					"Cvx" : "48",
					"DateAdministered" : "2005-08-25T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "ACTHIB"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0336",
		"TestCaseName" : "#2 at 11 m (#1 at 7 m)",
		"ExpectedForecast" : {
			"AssessmentDate" : "2005-12-01T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2006-01-26T00:00:00",
			"EvaluationTestType" : "All Valid: Forecast Test",
			"ForecastNumber" : 3,
			"ForecastTestType" : "Recommended based on minimum interval from previous dose (catch-up)",
			"PastDueDate" : "2006-05-28T00:00:00",
			"RecommendedDate" : "2006-01-26T00:00:00",
			"VaccineGroup" : "Hib"
		},
		"PatientProfile" : {
			"Dob" : "2005-01-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "48",
					"DateAdministered" : "2005-08-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "ACTHIB"
				}, {
					"Cvx" : "48",
					"DateAdministered" : "2005-12-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "ACTHIB"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0337",
		"TestCaseName" : "#2 at 12 m  (#1 at 7 m)",
		"ExpectedForecast" : {
			"AssessmentDate" : "2006-01-01T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2006-02-26T00:00:00",
			"EvaluationTestType" : "All Valid: Forecast Test",
			"ForecastNumber" : 3,
			"ForecastTestType" : "Recommended based on minimum interval from previous dose (catch-up)",
			"PastDueDate" : "2006-05-28T00:00:00",
			"RecommendedDate" : "2006-02-26T00:00:00",
			"VaccineGroup" : "Hib"
		},
		"PatientProfile" : {
			"Dob" : "2005-01-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "48",
					"DateAdministered" : "2005-08-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "ACTHIB"
				}, {
					"Cvx" : "48",
					"DateAdministered" : "2006-01-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "ACTHIB"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0338",
		"TestCaseName" : "#3 at 365 d -5 days (#1 at 7m, #2 at 8m)",
		"ExpectedForecast" : {
			"AssessmentDate" : "2005-12-27T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2006-02-21T00:00:00",
			"EvaluationTestType" : "Age: Below Absolute Minimum",
			"ForecastNumber" : 4,
			"ForecastTestType" : "Recommended based on minimum interval from invalid dose",
			"PastDueDate" : "2006-05-28T00:00:00",
			"RecommendedDate" : "2006-02-21T00:00:00",
			"VaccineGroup" : "Hib"
		},
		"PatientProfile" : {
			"Dob" : "2005-01-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "48",
					"DateAdministered" : "2005-08-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "ACTHIB"
				}, {
					"Cvx" : "48",
					"DateAdministered" : "2005-09-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "ACTHIB"
				}, {
					"Cvx" : "48",
					"DateAdministered" : "2005-12-27T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "ACTHIB"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0339",
		"TestCaseName" : "#3 at 365 d -4 days (#1 at 7m, #2 at 8m)",
		"ExpectedForecast" : {
			"AssessmentDate" : "2005-12-28T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "Age: At Absolute Minimum",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: series complete",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "Hib"
		},
		"PatientProfile" : {
			"Dob" : "2005-01-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "48",
					"DateAdministered" : "2005-08-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "ACTHIB"
				}, {
					"Cvx" : "48",
					"DateAdministered" : "2005-09-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "ACTHIB"
				}, {
					"Cvx" : "48",
					"DateAdministered" : "2005-12-28T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "ACTHIB"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0340",
		"TestCaseName" : "#3 at 365 days - 3 days (#1 at 7m, #2 at 8m)",
		"ExpectedForecast" : {
			"AssessmentDate" : "2005-12-29T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "All Valid: Forecast Test",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: series complete",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "Hib"
		},
		"PatientProfile" : {
			"Dob" : "2005-01-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "48",
					"DateAdministered" : "2005-08-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "ACTHIB"
				}, {
					"Cvx" : "48",
					"DateAdministered" : "2005-09-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "ACTHIB"
				}, {
					"Cvx" : "48",
					"DateAdministered" : "2005-12-29T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "ACTHIB"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0341",
		"TestCaseName" : "#3 at 59 months (#1 at 7m, #2 at 8m)",
		"ExpectedForecast" : {
			"AssessmentDate" : "2009-12-01T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "All Valid: Forecast Test",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: series complete",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "Hib"
		},
		"PatientProfile" : {
			"Dob" : "2005-01-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "48",
					"DateAdministered" : "2005-08-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "ACTHIB"
				}, {
					"Cvx" : "48",
					"DateAdministered" : "2005-09-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "ACTHIB"
				}, {
					"Cvx" : "48",
					"DateAdministered" : "2009-12-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "ACTHIB"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0342",
		"TestCaseName" : "#3 at 5 years (#1 at 7m, #2 at 8m)",
		"ExpectedForecast" : {
			"AssessmentDate" : "2010-01-01T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "All Valid: Forecast Test",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: series complete",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "Hib"
		},
		"PatientProfile" : {
			"Dob" : "2005-01-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "48",
					"DateAdministered" : "2005-08-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "ACTHIB"
				}, {
					"Cvx" : "48",
					"DateAdministered" : "2005-09-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "ACTHIB"
				}, {
					"Cvx" : "48",
					"DateAdministered" : "2010-01-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "ACTHIB"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0343",
		"TestCaseName" : "Dose 2 to 3, interval 8 weeks-5 days, #3 after 12 months of age",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-02-04T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2011-04-01T00:00:00",
			"EvaluationTestType" : "All Valid: Forecast Test",
			"ForecastNumber" : 4,
			"ForecastTestType" : "Recommended based on minimum interval from previous dose (catch-up)",
			"PastDueDate" : "2011-05-28T00:00:00",
			"RecommendedDate" : "2011-04-01T00:00:00",
			"VaccineGroup" : "Hib"
		},
		"PatientProfile" : {
			"Dob" : "2010-01-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "51",
					"DateAdministered" : "2010-03-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "COMVAX"
				}, {
					"Cvx" : "49",
					"DateAdministered" : "2010-12-15T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "PEDVAXHIB"
				}, {
					"Cvx" : "49",
					"DateAdministered" : "2011-02-04T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "PEDVAXHIB"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0344",
		"TestCaseName" : "Dose 2 to 3, interval 8 weeks -4 days, #3 after 12 months of age",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-02-05T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "All Valid: Forecast Test",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: series complete",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "Hib"
		},
		"PatientProfile" : {
			"Dob" : "2010-01-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "51",
					"DateAdministered" : "2010-03-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "COMVAX"
				}, {
					"Cvx" : "49",
					"DateAdministered" : "2010-12-15T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "PEDVAXHIB"
				}, {
					"Cvx" : "49",
					"DateAdministered" : "2011-02-05T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "PEDVAXHIB"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0345",
		"TestCaseName" : "Dose 2 to 3, interval 8 weeks -3 days, #3 after 12 months of age",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-02-06T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "All Valid: Forecast Test",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: series complete",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "Hib"
		},
		"PatientProfile" : {
			"Dob" : "2010-01-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "51",
					"DateAdministered" : "2010-03-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "COMVAX"
				}, {
					"Cvx" : "49",
					"DateAdministered" : "2010-12-15T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "PEDVAXHIB"
				}, {
					"Cvx" : "49",
					"DateAdministered" : "2011-02-06T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "PEDVAXHIB"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0346",
		"TestCaseName" : "#1 at 15 months -5 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-03-27T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2011-05-22T00:00:00",
			"EvaluationTestType" : "All Valid: Forecast Test",
			"ForecastNumber" : 2,
			"ForecastTestType" : "Recommended based on minimum interval from previous dose (catch-up)",
			"PastDueDate" : "2011-05-28T00:00:00",
			"RecommendedDate" : "2011-05-22T00:00:00",
			"VaccineGroup" : "Hib"
		},
		"PatientProfile" : {
			"Dob" : "2010-01-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "48",
					"DateAdministered" : "2011-03-27T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "ACTHIB"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0347",
		"TestCaseName" : "#1 at 15 months -4 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-03-28T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "All Valid: Forecast Test",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: series complete",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "Hib"
		},
		"PatientProfile" : {
			"Dob" : "2010-01-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "48",
					"DateAdministered" : "2011-03-28T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "ACTHIB"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0348",
		"TestCaseName" : "Dose 1 to 2 at 8 weeks -5 days (#1 at 1 year)",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-02-21T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2011-04-18T00:00:00",
			"EvaluationTestType" : "Interval: Below Absolute Minimum",
			"ForecastNumber" : 2,
			"ForecastTestType" : "Recommended based on minimum interval from invalid dose",
			"PastDueDate" : "2011-05-28T00:00:00",
			"RecommendedDate" : "2011-04-18T00:00:00",
			"VaccineGroup" : "Hib"
		},
		"PatientProfile" : {
			"Dob" : "2010-01-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "48",
					"DateAdministered" : "2011-01-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "ACTHIB"
				}, {
					"Cvx" : "49",
					"DateAdministered" : "2011-02-21T00:00:00",
					"EvaluationReason" : "Interval: Too Short",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : "MSD",
					"VaccineName" : "PEDVAXHIB"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0349",
		"TestCaseName" : "Dose 1 to 2 at 8 weeks -4 days (#1 at >=1 year)",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-02-22T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "Interval: At Absolute Minimum",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: series complete",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "Hib"
		},
		"PatientProfile" : {
			"Dob" : "2010-01-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "51",
					"DateAdministered" : "2011-01-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "COMVAX"
				}, {
					"Cvx" : "47",
					"DateAdministered" : "2011-02-22T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "WAL",
					"VaccineName" : "HIBTITER"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0350",
		"TestCaseName" : "Dose 1 to 2 at 8 weeks - 3 days (#1 at >=1 year)",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-02-23T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "Interval: At Absolute Minimum",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: series complete",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "Hib"
		},
		"PatientProfile" : {
			"Dob" : "2010-01-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "48",
					"DateAdministered" : "2011-01-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "ACTHIB"
				}, {
					"Cvx" : "51",
					"DateAdministered" : "2011-02-23T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "COMVAX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0351",
		"TestCaseName" : "# 3 (#1 at  one year, #2 at 15 months)",
		"ExpectedForecast" : {
			"AssessmentDate" : "2006-05-27T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "Extra Doses",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: series complete",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "Hib"
		},
		"PatientProfile" : {
			"Dob" : "2005-01-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "48",
					"DateAdministered" : "2006-01-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "ACTHIB"
				}, {
					"Cvx" : "48",
					"DateAdministered" : "2006-04-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "ACTHIB"
				}, {
					"Cvx" : "48",
					"DateAdministered" : "2006-05-27T00:00:00",
					"EvaluationReason" : "Series Already Complete",
					"EvaluationStatus" : "Extraneous",
					"Mvx" : "PMC",
					"VaccineName" : "ACTHIB"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0352",
		"TestCaseName" : "# 1 at 15 m - 3 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-03-29T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "All Valid: Forecast Test",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: series complete",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "Hib"
		},
		"PatientProfile" : {
			"Dob" : "2010-01-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "48",
					"DateAdministered" : "2011-03-29T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "ACTHIB"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0353",
		"TestCaseName" : "# 1 at 5 years - 1 day",
		"ExpectedForecast" : {
			"AssessmentDate" : "2010-12-31T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "All Valid: Forecast Test",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: series complete",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "Hib"
		},
		"PatientProfile" : {
			"Dob" : "2006-01-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "48",
					"DateAdministered" : "2010-12-31T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "ACTHIB"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0354",
		"TestCaseName" : "#2 at 2 years, #1 at 15 m",
		"ExpectedForecast" : {
			"AssessmentDate" : "2007-01-01T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "Extra Doses",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: series complete",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "Hib"
		},
		"PatientProfile" : {
			"Dob" : "2005-01-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "48",
					"DateAdministered" : "2006-04-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "ACTHIB"
				}, {
					"Cvx" : "48",
					"DateAdministered" : "2007-01-01T00:00:00",
					"EvaluationReason" : "Series Already Complete",
					"EvaluationStatus" : "Extraneous",
					"Mvx" : "PMC",
					"VaccineName" : "ACTHIB"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0355",
		"TestCaseName" : "#2 at 5 months",
		"ExpectedForecast" : {
			"AssessmentDate" : "2012-06-01T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2012-06-29T00:00:00",
			"EvaluationTestType" : "All Valid: Forecast Test",
			"ForecastNumber" : 3,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2012-08-28T00:00:00",
			"RecommendedDate" : "2012-07-01T00:00:00",
			"VaccineGroup" : "Hib"
		},
		"PatientProfile" : {
			"Dob" : "2012-01-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "48",
					"DateAdministered" : "2012-03-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "ACTHIB"
				}, {
					"Cvx" : "48",
					"DateAdministered" : "2012-06-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "ACTHIB"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0356",
		"TestCaseName" : "# 2 Pentacel at 6 yrs 11.5 mo.",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-12-15T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "All Valid: Forecast Test",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: series complete",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "Hib"
		},
		"PatientProfile" : {
			"Dob" : "2005-01-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "120",
					"DateAdministered" : "2007-09-22T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}, {
					"Cvx" : "120",
					"DateAdministered" : "2011-12-15T00:00:00",
					"EvaluationReason" : "Series Already Complete",
					"EvaluationStatus" : "Extraneous",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0357",
		"TestCaseName" : "# 3 Pentacel at 14 wks-5 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2010-09-02T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2010-09-30T00:00:00",
			"EvaluationTestType" : "Age: Below Absolute Minimum",
			"ForecastNumber" : 3,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2011-01-01T00:00:00",
			"RecommendedDate" : "2010-12-01T00:00:00",
			"VaccineGroup" : "Hib"
		},
		"PatientProfile" : {
			"Dob" : "2010-06-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "120",
					"DateAdministered" : "2010-07-09T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}, {
					"Cvx" : "120",
					"DateAdministered" : "2010-08-06T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}, {
					"Cvx" : "120",
					"DateAdministered" : "2010-09-02T00:00:00",
					"EvaluationReason" : "Age: Too Young",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0358",
		"TestCaseName" : "invalid age dose 1 as first of others",
		"ExpectedForecast" : {
			"AssessmentDate" : "2012-02-01T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2012-02-29T00:00:00",
			"EvaluationTestType" : "Age: Below Absolute Minimum",
			"ForecastNumber" : 3,
			"ForecastTestType" : "Recommended based on minimum interval from previous dose (catch-up)",
			"PastDueDate" : "2012-03-28T00:00:00",
			"RecommendedDate" : "2012-02-29T00:00:00",
			"VaccineGroup" : "Hib"
		},
		"PatientProfile" : {
			"Dob" : "2011-08-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "120",
					"DateAdministered" : "2011-09-05T00:00:00",
					"EvaluationReason" : "Age: Too Young",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}, {
					"Cvx" : "120",
					"DateAdministered" : "2011-12-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}, {
					"Cvx" : "120",
					"DateAdministered" : "2012-02-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0359",
		"TestCaseName" : "dose 1 to 2 Pentacel, interval 28-4 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2010-01-27T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2010-02-24T00:00:00",
			"EvaluationTestType" : "Interval: At Absolute Minimum",
			"ForecastNumber" : 3,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2010-06-01T00:00:00",
			"RecommendedDate" : "2010-05-01T00:00:00",
			"VaccineGroup" : "Hib"
		},
		"PatientProfile" : {
			"Dob" : "2009-11-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "120",
					"DateAdministered" : "2010-01-03T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}, {
					"Cvx" : "120",
					"DateAdministered" : "2010-01-27T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0360",
		"TestCaseName" : "dose 2 to 3 Pentacel, interval 28-5 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2008-08-24T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2008-09-21T00:00:00",
			"EvaluationTestType" : "Interval: Below Absolute Minimum",
			"ForecastNumber" : 3,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2008-11-01T00:00:00",
			"RecommendedDate" : "2008-10-01T00:00:00",
			"VaccineGroup" : "Hib"
		},
		"PatientProfile" : {
			"Dob" : "2008-04-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "120",
					"DateAdministered" : "2008-06-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}, {
					"Cvx" : "120",
					"DateAdministered" : "2008-08-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}, {
					"Cvx" : "120",
					"DateAdministered" : "2008-08-24T00:00:00",
					"EvaluationReason" : "Interval: Too Short",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0365",
		"TestCaseName" : "# 1 Pentacel at 6 wks",
		"ExpectedForecast" : {
			"AssessmentDate" : "2008-05-16T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2008-06-13T00:00:00",
			"EvaluationTestType" : "Age: At Minimum",
			"ForecastNumber" : 2,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2008-10-01T00:00:00",
			"RecommendedDate" : "2008-08-04T00:00:00",
			"VaccineGroup" : "Hib"
		},
		"PatientProfile" : {
			"Dob" : "2008-04-04T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "120",
					"DateAdministered" : "2008-05-16T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0366",
		"TestCaseName" : "# 1 Pentacel at 6 wks-4 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2008-05-12T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2008-06-13T00:00:00",
			"EvaluationTestType" : "Age: At Absolute Minimum",
			"ForecastNumber" : 2,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2008-10-01T00:00:00",
			"RecommendedDate" : "2008-08-04T00:00:00",
			"VaccineGroup" : "Hib"
		},
		"PatientProfile" : {
			"Dob" : "2008-04-04T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "120",
					"DateAdministered" : "2008-05-12T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0367",
		"TestCaseName" : "# 1 Pentacel at 6 wks-5 days.  ",
		"ExpectedForecast" : {
			"AssessmentDate" : "2010-06-12T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2010-06-17T00:00:00",
			"EvaluationTestType" : "Age: Below Absolute Minimum",
			"ForecastNumber" : 1,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2010-09-02T00:00:00",
			"RecommendedDate" : "2010-07-06T00:00:00",
			"VaccineGroup" : "Hib"
		},
		"PatientProfile" : {
			"Dob" : "2010-05-06T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "120",
					"DateAdministered" : "2010-06-12T00:00:00",
					"EvaluationReason" : "Age: Too Young",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0368",
		"TestCaseName" : "# 2 Pentacel at 10 wks-4 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2010-12-15T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2011-01-16T00:00:00",
			"EvaluationTestType" : "Age: At Absolute Minimum",
			"ForecastNumber" : 3,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2011-06-06T00:00:00",
			"RecommendedDate" : "2011-04-10T00:00:00",
			"VaccineGroup" : "Hib"
		},
		"PatientProfile" : {
			"Dob" : "2010-10-10T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "120",
					"DateAdministered" : "2010-11-17T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}, {
					"Cvx" : "120",
					"DateAdministered" : "2010-12-15T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0369",
		"TestCaseName" : "# 2 Pentacel at 10 wks-5 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2010-12-14T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2011-01-11T00:00:00",
			"EvaluationTestType" : "Age: Below Absolute Minimum",
			"ForecastNumber" : 2,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2011-04-06T00:00:00",
			"RecommendedDate" : "2011-02-10T00:00:00",
			"VaccineGroup" : "Hib"
		},
		"PatientProfile" : {
			"Dob" : "2010-10-10T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "120",
					"DateAdministered" : "2010-11-17T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}, {
					"Cvx" : "120",
					"DateAdministered" : "2010-12-14T00:00:00",
					"EvaluationReason" : "Age: Too Young",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0370",
		"TestCaseName" : "# 3 Pentacel at 14 wks-4 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2010-09-03T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2011-06-01T00:00:00",
			"EvaluationTestType" : "Age: At Absolute Minimum",
			"ForecastNumber" : 4,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2012-01-28T00:00:00",
			"RecommendedDate" : "2011-06-01T00:00:00",
			"VaccineGroup" : "Hib"
		},
		"PatientProfile" : {
			"Dob" : "2010-06-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "120",
					"DateAdministered" : "2010-07-09T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}, {
					"Cvx" : "120",
					"DateAdministered" : "2010-08-06T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}, {
					"Cvx" : "120",
					"DateAdministered" : "2010-09-03T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0371",
		"TestCaseName" : "# 4 Pentacel ≥ age 12 mo",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-04-04T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "Age: At Minimum",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: series complete",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "Hib"
		},
		"PatientProfile" : {
			"Dob" : "2010-04-04T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "120",
					"DateAdministered" : "2010-06-04T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}, {
					"Cvx" : "120",
					"DateAdministered" : "2010-08-04T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}, {
					"Cvx" : "120",
					"DateAdministered" : "2010-10-04T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}, {
					"Cvx" : "120",
					"DateAdministered" : "2011-04-04T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0372",
		"TestCaseName" : "# 4 Pentacel at 1 yr -4 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-03-31T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "Age: At Absolute Minimum",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: series complete",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "Hib"
		},
		"PatientProfile" : {
			"Dob" : "2010-04-04T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "120",
					"DateAdministered" : "2010-06-04T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}, {
					"Cvx" : "120",
					"DateAdministered" : "2010-08-04T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}, {
					"Cvx" : "120",
					"DateAdministered" : "2010-10-04T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}, {
					"Cvx" : "120",
					"DateAdministered" : "2011-03-31T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0373",
		"TestCaseName" : "# 4 Pentacel at 1 yr -5 days.  ",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-03-30T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2011-05-25T00:00:00",
			"EvaluationTestType" : "Age: Below Absolute Minimum",
			"ForecastNumber" : 4,
			"ForecastTestType" : "Recommended based on minimum interval from inValid dose",
			"PastDueDate" : "2011-12-01T00:00:00",
			"RecommendedDate" : "2011-05-25T00:00:00",
			"VaccineGroup" : "Hib"
		},
		"PatientProfile" : {
			"Dob" : "2010-04-04T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "120",
					"DateAdministered" : "2010-06-04T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}, {
					"Cvx" : "120",
					"DateAdministered" : "2010-08-04T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}, {
					"Cvx" : "120",
					"DateAdministered" : "2010-09-15T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}, {
					"Cvx" : "120",
					"DateAdministered" : "2011-03-30T00:00:00",
					"EvaluationReason" : "Age: Too Young",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0374",
		"TestCaseName" : "# 4 Pentacel at 4 yrs",
		"ExpectedForecast" : {
			"AssessmentDate" : "2010-05-10T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "Extra Doses",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: series complete",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "Hib"
		},
		"PatientProfile" : {
			"Dob" : "2006-05-06T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "120",
					"DateAdministered" : "2006-09-15T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}, {
					"Cvx" : "120",
					"DateAdministered" : "2007-04-28T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}, {
					"Cvx" : "120",
					"DateAdministered" : "2009-12-12T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}, {
					"Cvx" : "120",
					"DateAdministered" : "2010-05-10T00:00:00",
					"EvaluationReason" : "Series Already Complete",
					"EvaluationStatus" : "Extraneous",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0375",
		"TestCaseName" : "# 4 Pentacel at 5 yrs=off label but counts. ",
		"ExpectedForecast" : {
			"AssessmentDate" : "2012-02-08T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "All Valid: Forecast Test",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: series complete",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "Hib"
		},
		"PatientProfile" : {
			"Dob" : "2007-02-08T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "120",
					"DateAdministered" : "2007-06-08T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}, {
					"Cvx" : "120",
					"DateAdministered" : "2007-12-05T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}, {
					"Cvx" : "120",
					"DateAdministered" : "2008-02-07T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}, {
					"Cvx" : "120",
					"DateAdministered" : "2012-02-08T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0376",
		"TestCaseName" : "# 5 Pentacel at ≥ 4 yrs is off label but counts",
		"ExpectedForecast" : {
			"AssessmentDate" : "2012-03-01T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "Extra Doses",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: series complete",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "Hib"
		},
		"PatientProfile" : {
			"Dob" : "2008-02-08T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "120",
					"DateAdministered" : "2009-01-08T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}, {
					"Cvx" : "120",
					"DateAdministered" : "2009-04-08T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}, {
					"Cvx" : "120",
					"DateAdministered" : "2009-07-08T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}, {
					"Cvx" : "120",
					"DateAdministered" : "2009-12-09T00:00:00",
					"EvaluationReason" : "Series Already Complete",
					"EvaluationStatus" : "Extraneous",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}, {
					"Cvx" : "120",
					"DateAdministered" : "2012-03-01T00:00:00",
					"EvaluationReason" : "Series Already Complete",
					"EvaluationStatus" : "Extraneous",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0377",
		"TestCaseName" : "Anaphylaxis to previous dose of Pentacel",
		"ExpectedForecast" : {
			"AssessmentDate" : "2010-08-02T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "All Valid: Forecast Test",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: contraindication",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "Hib"
		},
		"PatientProfile" : {
			"Dob" : "2010-06-06T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : "VXC20",
			"MedHistoryCodeSys" : "CDCPHINVS",
			"MedHistoryText" : "allergy to previous dose of this vaccine or to any of its unlisted vaccine components (anaphylactic)",
			"Series" : [{
					"Cvx" : "120",
					"DateAdministered" : "2010-08-02T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0378",
		"TestCaseName" : "dose 1 to 2 Pentacel, interval 28-5 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2010-01-26T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2010-02-23T00:00:00",
			"EvaluationTestType" : "Interval: Below Absolute Minimum",
			"ForecastNumber" : 2,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2010-05-06T00:00:00",
			"RecommendedDate" : "2010-03-09T00:00:00",
			"VaccineGroup" : "Hib"
		},
		"PatientProfile" : {
			"Dob" : "2009-11-09T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "120",
					"DateAdministered" : "2010-01-03T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}, {
					"Cvx" : "120",
					"DateAdministered" : "2010-01-26T00:00:00",
					"EvaluationReason" : "Interval: Too Short",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0379",
		"TestCaseName" : "dose 2 to 3 Pentacel, interval 28-4 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2008-08-25T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2009-04-01T00:00:00",
			"EvaluationTestType" : "Interval: At Absolute Minimum",
			"ForecastNumber" : 4,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2009-11-28T00:00:00",
			"RecommendedDate" : "2009-04-01T00:00:00",
			"VaccineGroup" : "Hib"
		},
		"PatientProfile" : {
			"Dob" : "2008-04-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "120",
					"DateAdministered" : "2008-06-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}, {
					"Cvx" : "120",
					"DateAdministered" : "2008-08-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}, {
					"Cvx" : "120",
					"DateAdministered" : "2008-08-25T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0380",
		"TestCaseName" : "invalid age dose 2 in midst of others",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-10-20T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2011-12-15T00:00:00",
			"EvaluationTestType" : "Age: Below Absolute Minimum",
			"ForecastNumber" : 4,
			"ForecastTestType" : "Recommended based on minimum interval from previous dose (catch-up)",
			"PastDueDate" : "2012-03-16T00:00:00",
			"RecommendedDate" : "2011-12-15T00:00:00",
			"VaccineGroup" : "Hib"
		},
		"PatientProfile" : {
			"Dob" : "2010-10-18T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "120",
					"DateAdministered" : "2010-11-25T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}, {
					"Cvx" : "120",
					"DateAdministered" : "2010-12-22T00:00:00",
					"EvaluationReason" : "Age: Too Young",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}, {
					"Cvx" : "120",
					"DateAdministered" : "2011-03-10T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}, {
					"Cvx" : "120",
					"DateAdministered" : "2011-10-20T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0381",
		"TestCaseName" : "invalid age dose 3 in midst of others",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-07-07T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2011-09-01T00:00:00",
			"EvaluationTestType" : "Age: Below Absolute Minimum",
			"ForecastNumber" : 4,
			"ForecastTestType" : "Recommended based on minimum interval from previous dose (catch-up)",
			"PastDueDate" : "2011-10-28T00:00:00",
			"RecommendedDate" : "2011-09-01T00:00:00",
			"VaccineGroup" : "Hib"
		},
		"PatientProfile" : {
			"Dob" : "2010-06-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "120",
					"DateAdministered" : "2010-07-09T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}, {
					"Cvx" : "120",
					"DateAdministered" : "2010-08-06T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}, {
					"Cvx" : "120",
					"DateAdministered" : "2010-09-02T00:00:00",
					"EvaluationReason" : "Age: Too Young",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}, {
					"Cvx" : "120",
					"DateAdministered" : "2011-07-07T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0382",
		"TestCaseName" : "invalid dose 1-2 interval in midst of others",
		"ExpectedForecast" : {
			"AssessmentDate" : "2009-08-01T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2009-08-29T00:00:00",
			"EvaluationTestType" : "Interval: Below Absolute Minimum",
			"ForecastNumber" : 3,
			"ForecastTestType" : "Recommended based on minimum interval from previous dose (catch-up)",
			"PastDueDate" : "2009-10-08T00:00:00",
			"RecommendedDate" : "2009-08-29T00:00:00",
			"VaccineGroup" : "Hib"
		},
		"PatientProfile" : {
			"Dob" : "2009-02-11T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "120",
					"DateAdministered" : "2009-04-11T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}, {
					"Cvx" : "120",
					"DateAdministered" : "2009-05-04T00:00:00",
					"EvaluationReason" : "Interval: Too Short",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}, {
					"Cvx" : "120",
					"DateAdministered" : "2009-08-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0383",
		"TestCaseName" : "Newborn",
		"ExpectedForecast" : {
			"AssessmentDate" : "2012-02-01T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2012-03-14T00:00:00",
			"EvaluationTestType" : "No Doses Administered",
			"ForecastNumber" : 1,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2012-05-28T00:00:00",
			"RecommendedDate" : "2012-04-01T00:00:00",
			"VaccineGroup" : "Hib"
		},
		"PatientProfile" : {
			"Dob" : "2012-02-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : []
		}
	}, {
		"CdcTestId" : "2013-0384",
		"TestCaseName" : "Pentacel at 7 yrs; # 1 at age < 12 mo for DTaP and Hib 1.",
		"ExpectedForecast" : {
			"AssessmentDate" : "2010-09-16T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "All Valid: Forecast Test",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: series complete",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "Hib"
		},
		"PatientProfile" : {
			"Dob" : "2003-09-16T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "120",
					"DateAdministered" : "2004-02-25T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}, {
					"Cvx" : "120",
					"DateAdministered" : "2010-09-16T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0392",
		"TestCaseName" : "#1 @ 9 yrs - 4 days, female, gardisil ",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-04-27T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2011-05-29T00:00:00",
			"EvaluationTestType" : "Age: At Absolute Minimum",
			"ForecastNumber" : 2,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2015-07-28T00:00:00",
			"RecommendedDate" : "2013-07-01T00:00:00",
			"VaccineGroup" : "HPV"
		},
		"PatientProfile" : {
			"Dob" : "2002-05-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "62",
					"DateAdministered" : "2011-04-27T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "GARDASIL"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0393",
		"TestCaseName" : "#1 @ 9 yrs - 5 days, female, gardisil ",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-04-26T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2011-05-01T00:00:00",
			"EvaluationTestType" : "Age: Below Absolute Minimum",
			"ForecastNumber" : 1,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2015-05-28T00:00:00",
			"RecommendedDate" : "2013-05-01T00:00:00",
			"VaccineGroup" : "HPV"
		},
		"PatientProfile" : {
			"Dob" : "2002-05-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "62",
					"DateAdministered" : "2011-04-26T00:00:00",
					"EvaluationReason" : "Age: Too Young",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : "MSD",
					"VaccineName" : "GARDASIL"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0394",
		"TestCaseName" : "#1 @ 9 yrs - 0 days, female, gardisil",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-05-01T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2011-05-29T00:00:00",
			"EvaluationTestType" : "Age: At Minimum",
			"ForecastNumber" : 2,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2015-07-28T00:00:00",
			"RecommendedDate" : "2013-07-01T00:00:00",
			"VaccineGroup" : "HPV"
		},
		"PatientProfile" : {
			"Dob" : "2002-05-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "62",
					"DateAdministered" : "2011-05-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "GARDASIL"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0395",
		"TestCaseName" : "#1 @ 11 yrs - 0 days, female, gardisil ",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-05-01T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2011-05-29T00:00:00",
			"EvaluationTestType" : "Age: At Recommended",
			"ForecastNumber" : 2,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2013-07-28T00:00:00",
			"RecommendedDate" : "2011-07-01T00:00:00",
			"VaccineGroup" : "HPV"
		},
		"PatientProfile" : {
			"Dob" : "2000-05-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "62",
					"DateAdministered" : "2011-05-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "GARDASIL"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0396",
		"TestCaseName" : "#1 @ 9 yrs - 4 days, male, gardisil ",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-04-27T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2011-05-29T00:00:00",
			"EvaluationTestType" : "Age: At Absolute Minimum",
			"ForecastNumber" : 2,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2015-07-28T00:00:00",
			"RecommendedDate" : "2013-07-01T00:00:00",
			"VaccineGroup" : "HPV"
		},
		"PatientProfile" : {
			"Dob" : "2002-05-01T00:00:00",
			"Gender" : "M",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "62",
					"DateAdministered" : "2011-04-27T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "GARDASIL"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0397",
		"TestCaseName" : "#1 @ 9 yrs - 5 days, male, gardisil ",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-04-26T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2011-05-01T00:00:00",
			"EvaluationTestType" : "Age: Below Absolute Minimum",
			"ForecastNumber" : 1,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2015-05-28T00:00:00",
			"RecommendedDate" : "2013-05-01T00:00:00",
			"VaccineGroup" : "HPV"
		},
		"PatientProfile" : {
			"Dob" : "2002-05-01T00:00:00",
			"Gender" : "M",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "62",
					"DateAdministered" : "2011-04-26T00:00:00",
					"EvaluationReason" : "Age: Too Young",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : "MSD",
					"VaccineName" : "GARDASIL"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0398",
		"TestCaseName" : "#1 @ 9 yrs - 0 days, male, gardisil ",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-05-01T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2011-05-29T00:00:00",
			"EvaluationTestType" : "Age: At Minimum",
			"ForecastNumber" : 2,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2015-07-28T00:00:00",
			"RecommendedDate" : "2013-07-01T00:00:00",
			"VaccineGroup" : "HPV"
		},
		"PatientProfile" : {
			"Dob" : "2002-05-01T00:00:00",
			"Gender" : "M",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "62",
					"DateAdministered" : "2011-05-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "GARDASIL"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0399",
		"TestCaseName" : "#1 @ 11 yrs - 0 days, male, gardisil ",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-05-01T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2011-05-29T00:00:00",
			"EvaluationTestType" : "Age: At Recommended",
			"ForecastNumber" : 2,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2013-07-28T00:00:00",
			"RecommendedDate" : "2011-07-01T00:00:00",
			"VaccineGroup" : "HPV"
		},
		"PatientProfile" : {
			"Dob" : "2000-05-01T00:00:00",
			"Gender" : "M",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "62",
					"DateAdministered" : "2011-05-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "GARDASIL"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0400",
		"TestCaseName" : "#2 @ 9 yrs, 4 wks - 4 days, female, gardisil ",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-05-21T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2011-10-16T00:00:00",
			"EvaluationTestType" : "Age: At Absolute Minimum",
			"ForecastNumber" : 3,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2015-11-28T00:00:00",
			"RecommendedDate" : "2013-11-01T00:00:00",
			"VaccineGroup" : "HPV"
		},
		"PatientProfile" : {
			"Dob" : "2002-05-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "62",
					"DateAdministered" : "2011-04-27T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "GARDASIL"
				}, {
					"Cvx" : "62",
					"DateAdministered" : "2011-05-25T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "valid",
					"Mvx" : "MSD",
					"VaccineName" : "GARDASIL"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0401",
		"TestCaseName" : "#2 @ 9 yrs, 4 wks - 5 days, female gardisil ",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-05-24T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2011-06-21T00:00:00",
			"EvaluationTestType" : "Age: Below Absolute Minimum",
			"ForecastNumber" : 2,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2015-07-28T00:00:00",
			"RecommendedDate" : "2013-07-01T00:00:00",
			"VaccineGroup" : "HPV"
		},
		"PatientProfile" : {
			"Dob" : "2002-05-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "62",
					"DateAdministered" : "2011-04-27T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "GARDASIL"
				}, {
					"Cvx" : "62",
					"DateAdministered" : "2011-05-24T00:00:00",
					"EvaluationReason" : "Age: Too Young",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : "MSD",
					"VaccineName" : "GARDASIL"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0402",
		"TestCaseName" : "#2 @ 9 yrs, 4 wks - 0 days, female gardisil ",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-05-29T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2011-10-16T00:00:00",
			"EvaluationTestType" : "Age: At Minimum",
			"ForecastNumber" : 3,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2015-11-28T00:00:00",
			"RecommendedDate" : "2013-11-01T00:00:00",
			"VaccineGroup" : "HPV"
		},
		"PatientProfile" : {
			"Dob" : "2002-05-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "62",
					"DateAdministered" : "2011-05-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "GARDASIL"
				}, {
					"Cvx" : "62",
					"DateAdministered" : "2011-05-29T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "valid",
					"Mvx" : "MSD",
					"VaccineName" : "GARDASIL"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0403",
		"TestCaseName" : "#2 @ 11 yrs + 2 mo, female, gardisil ",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-07-01T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2011-10-16T00:00:00",
			"EvaluationTestType" : "Age: At Recommended",
			"ForecastNumber" : 3,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2013-11-28T00:00:00",
			"RecommendedDate" : "2011-11-01T00:00:00",
			"VaccineGroup" : "HPV"
		},
		"PatientProfile" : {
			"Dob" : "2000-05-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "62",
					"DateAdministered" : "2011-05-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "GARDASIL"
				}, {
					"Cvx" : "62",
					"DateAdministered" : "2011-07-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "valid",
					"Mvx" : "MSD",
					"VaccineName" : "GARDASIL"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0404",
		"TestCaseName" : "#2 @ 9 yrs, 4 wks - 4 days, male, gardisil ",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-05-25T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2011-10-13T00:00:00",
			"EvaluationTestType" : "Age: At Absolute Minimum",
			"ForecastNumber" : 3,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2015-11-28T00:00:00",
			"RecommendedDate" : "2013-11-01T00:00:00",
			"VaccineGroup" : "HPV"
		},
		"PatientProfile" : {
			"Dob" : "2002-05-01T00:00:00",
			"Gender" : "M",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "62",
					"DateAdministered" : "2011-04-28T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "GARDASIL"
				}, {
					"Cvx" : "62",
					"DateAdministered" : "2011-05-25T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "valid",
					"Mvx" : "MSD",
					"VaccineName" : "GARDASIL"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0405",
		"TestCaseName" : "#2 @ 9 yrs, 4 wks - 5 days, male gardisil ",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-05-24T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2011-06-21T00:00:00",
			"EvaluationTestType" : "Age: Below Absolute Minimum",
			"ForecastNumber" : 2,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2015-07-28T00:00:00",
			"RecommendedDate" : "2013-07-01T00:00:00",
			"VaccineGroup" : "HPV"
		},
		"PatientProfile" : {
			"Dob" : "2002-05-01T00:00:00",
			"Gender" : "M",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "62",
					"DateAdministered" : "2011-04-27T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "GARDASIL"
				}, {
					"Cvx" : "62",
					"DateAdministered" : "2011-05-24T00:00:00",
					"EvaluationReason" : "Age: Too Young",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : "MSD",
					"VaccineName" : "GARDASIL"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0406",
		"TestCaseName" : "#2 @ 9 yrs, 4 wks - 0 days, male gardisil ",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-05-29T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2011-10-16T00:00:00",
			"EvaluationTestType" : "Age: At Minimum",
			"ForecastNumber" : 3,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2015-11-28T00:00:00",
			"RecommendedDate" : "2013-11-01T00:00:00",
			"VaccineGroup" : "HPV"
		},
		"PatientProfile" : {
			"Dob" : "2002-05-01T00:00:00",
			"Gender" : "M",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "62",
					"DateAdministered" : "2011-05-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "GARDASIL"
				}, {
					"Cvx" : "62",
					"DateAdministered" : "2011-05-29T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "valid",
					"Mvx" : "MSD",
					"VaccineName" : "GARDASIL"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0407",
		"TestCaseName" : "#2 @ 11 yrs + 2 mo, male, gardisil ",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-07-01T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2011-10-16T00:00:00",
			"EvaluationTestType" : "Age: At Recommended",
			"ForecastNumber" : 3,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2013-11-28T00:00:00",
			"RecommendedDate" : "2011-11-01T00:00:00",
			"VaccineGroup" : "HPV"
		},
		"PatientProfile" : {
			"Dob" : "2000-05-01T00:00:00",
			"Gender" : "M",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "62",
					"DateAdministered" : "2011-05-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "GARDASIL"
				}, {
					"Cvx" : "62",
					"DateAdministered" : "2011-07-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "valid",
					"Mvx" : "MSD",
					"VaccineName" : "GARDASIL"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0409",
		"TestCaseName" : "#3 @ 9 yrs, 16 weeks - 1 days, female, gardisil ",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-08-20T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2011-11-12T00:00:00",
			"EvaluationTestType" : "Age: Below Absolute Minimum",
			"ForecastNumber" : 3,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2015-11-28T00:00:00",
			"RecommendedDate" : "2013-11-01T00:00:00",
			"VaccineGroup" : "HPV"
		},
		"PatientProfile" : {
			"Dob" : "2002-05-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "62",
					"DateAdministered" : "2011-04-30T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "GARDASIL"
				}, {
					"Cvx" : "62",
					"DateAdministered" : "2011-05-28T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "GARDASIL"
				}, {
					"Cvx" : "62",
					"DateAdministered" : "2011-08-20T00:00:00",
					"EvaluationReason" : "Age: Too Young",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : "MSD",
					"VaccineName" : "GARDASIL"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0410",
		"TestCaseName" : "#3 @ 9 yrs, 24 weeks, 0 days, female, gardisil",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-10-16T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "Age: At Minimum",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: series complete",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "HPV"
		},
		"PatientProfile" : {
			"Dob" : "2002-05-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "62",
					"DateAdministered" : "2011-05-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "GARDASIL"
				}, {
					"Cvx" : "62",
					"DateAdministered" : "2011-05-29T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "GARDASIL"
				}, {
					"Cvx" : "62",
					"DateAdministered" : "2011-10-16T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "GARDASIL"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0411",
		"TestCaseName" : "#3 @ 11 yrs + 6 mo, female, gardisil ",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-11-01T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "Age: At Recommended",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: series complete",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "HPV"
		},
		"PatientProfile" : {
			"Dob" : "2000-05-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "62",
					"DateAdministered" : "2011-05-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "GARDASIL"
				}, {
					"Cvx" : "62",
					"DateAdministered" : "2011-07-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "GARDASIL"
				}, {
					"Cvx" : "62",
					"DateAdministered" : "2011-11-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "GARDASIL"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0413",
		"TestCaseName" : "#3 @ 9 yrs, 16 weeks - 1 days, male, gardisil ",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-08-20T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2011-11-12T00:00:00",
			"EvaluationTestType" : "Age: Below Absolute Minimum",
			"ForecastNumber" : 3,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2015-11-28T00:00:00",
			"RecommendedDate" : "2013-11-01T00:00:00",
			"VaccineGroup" : "HPV"
		},
		"PatientProfile" : {
			"Dob" : "2002-05-01T00:00:00",
			"Gender" : "M",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "62",
					"DateAdministered" : "2011-04-30T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "GARDASIL"
				}, {
					"Cvx" : "62",
					"DateAdministered" : "2011-05-28T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "GARDASIL"
				}, {
					"Cvx" : "62",
					"DateAdministered" : "2011-08-20T00:00:00",
					"EvaluationReason" : "Age: Too Young",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : "MSD",
					"VaccineName" : "GARDASIL"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0414",
		"TestCaseName" : "#3 @ 9 yrs, 24 weeks, 0 days, male, gardisil ",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-10-16T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "Age: At Minimum",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: series complete",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "HPV"
		},
		"PatientProfile" : {
			"Dob" : "2002-05-01T00:00:00",
			"Gender" : "M",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "118",
					"DateAdministered" : "2011-05-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "CERVARIX"
				}, {
					"Cvx" : "62",
					"DateAdministered" : "2011-05-29T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "GARDASIL"
				}, {
					"Cvx" : "62",
					"DateAdministered" : "2011-10-16T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "GARDASIL"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0415",
		"TestCaseName" : "#3 @ 11 yrs + 6 mo, male, gardisil ",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-11-01T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "Age: At Recommended",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: series complete",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "HPV"
		},
		"PatientProfile" : {
			"Dob" : "2000-05-01T00:00:00",
			"Gender" : "M",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "62",
					"DateAdministered" : "2011-05-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "GARDASIL"
				}, {
					"Cvx" : "62",
					"DateAdministered" : "2011-07-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "GARDASIL"
				}, {
					"Cvx" : "62",
					"DateAdministered" : "2011-11-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "GARDASIL"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0416",
		"TestCaseName" : "Any dose > 26 yrs, female, gardisil",
		"ExpectedForecast" : {
			"AssessmentDate" : "2012-05-02T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "Age: Too Old",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: too old",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "HPV"
		},
		"PatientProfile" : {
			"Dob" : "1985-05-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "62",
					"DateAdministered" : "2012-05-02T00:00:00",
					"EvaluationReason" : "Age: Too Old",
					"EvaluationStatus" : "Extraneous",
					"Mvx" : "MSD",
					"VaccineName" : "GARDASIL"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0417",
		"TestCaseName" : "Any dose > 26 yrs, male, gardisil ",
		"ExpectedForecast" : {
			"AssessmentDate" : "2012-05-02T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "Age: Too Old",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: too old",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "HPV"
		},
		"PatientProfile" : {
			"Dob" : "1985-05-01T00:00:00",
			"Gender" : "M",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "62",
					"DateAdministered" : "2012-05-02T00:00:00",
					"EvaluationReason" : "Age: Too Old",
					"EvaluationStatus" : "Extraneous",
					"Mvx" : "MSD",
					"VaccineName" : "GARDASIL"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0418",
		"TestCaseName" : "#1 @ 9 yrs - 4 days, female, Cervarix ",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-04-27T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2011-05-29T00:00:00",
			"EvaluationTestType" : "Age: At Absolute Minimum",
			"ForecastNumber" : 2,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2015-07-28T00:00:00",
			"RecommendedDate" : "2013-07-01T00:00:00",
			"VaccineGroup" : "HPV"
		},
		"PatientProfile" : {
			"Dob" : "2002-05-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "118",
					"DateAdministered" : "2011-04-27T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "CERVARIX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0419",
		"TestCaseName" : "#1 @ 9 yrs - 5 days, female, Cervarix ",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-04-26T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2011-05-01T00:00:00",
			"EvaluationTestType" : "Age: Below Absolute Minimum",
			"ForecastNumber" : 1,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2015-05-28T00:00:00",
			"RecommendedDate" : "2013-05-01T00:00:00",
			"VaccineGroup" : "HPV"
		},
		"PatientProfile" : {
			"Dob" : "2002-05-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "118",
					"DateAdministered" : "2011-04-26T00:00:00",
					"EvaluationReason" : "Age: Too Young",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : "SKB",
					"VaccineName" : "CERVARIX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0421",
		"TestCaseName" : "#1 @ 9 yrs - 0 days, female, Cervarix ",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-05-01T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2011-05-29T00:00:00",
			"EvaluationTestType" : "Age: At Minimum",
			"ForecastNumber" : 2,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2015-07-28T00:00:00",
			"RecommendedDate" : "2013-07-01T00:00:00",
			"VaccineGroup" : "HPV"
		},
		"PatientProfile" : {
			"Dob" : "2002-05-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "118",
					"DateAdministered" : "2011-05-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "CERVARIX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0422",
		"TestCaseName" : "#1 @ 11 yrs - 0 days, female, Cervarix ",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-05-01T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2011-05-29T00:00:00",
			"EvaluationTestType" : "Age: At Recommended",
			"ForecastNumber" : 2,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2013-07-28T00:00:00",
			"RecommendedDate" : "2011-07-01T00:00:00",
			"VaccineGroup" : "HPV"
		},
		"PatientProfile" : {
			"Dob" : "2000-05-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "118",
					"DateAdministered" : "2011-05-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "CERVARIX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0423",
		"TestCaseName" : "#1 @ 9 yrs - 4 days, male, Cervarix ",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-04-28T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2011-05-01T00:00:00",
			"EvaluationTestType" : "Gender: Invalid Administration",
			"ForecastNumber" : 1,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2015-05-28T00:00:00",
			"RecommendedDate" : "2013-05-01T00:00:00",
			"VaccineGroup" : "HPV"
		},
		"PatientProfile" : {
			"Dob" : "2002-05-01T00:00:00",
			"Gender" : "M",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "118",
					"DateAdministered" : "2011-04-28T00:00:00",
					"EvaluationReason" : "Gender: Invalid Administration",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : "SKB",
					"VaccineName" : "CERVARIX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0424",
		"TestCaseName" : "#1 @ 9 yrs - 5 days, male, Cervarix ",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-04-27T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2011-05-01T00:00:00",
			"EvaluationTestType" : "Gender: Invalid Administration",
			"ForecastNumber" : 1,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2015-05-28T00:00:00",
			"RecommendedDate" : "2013-05-01T00:00:00",
			"VaccineGroup" : "HPV"
		},
		"PatientProfile" : {
			"Dob" : "2002-05-01T00:00:00",
			"Gender" : "M",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "118",
					"DateAdministered" : "2011-04-27T00:00:00",
					"EvaluationReason" : "Gender: Invalid Administration",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : "SKB",
					"VaccineName" : "CERVARIX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0425",
		"TestCaseName" : "#1 @ 9 yrs - 0 days, male, Cervarix",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-05-01T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2011-05-01T00:00:00",
			"EvaluationTestType" : "Gender: Invalid Administration",
			"ForecastNumber" : 1,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2015-05-28T00:00:00",
			"RecommendedDate" : "2013-05-01T00:00:00",
			"VaccineGroup" : "HPV"
		},
		"PatientProfile" : {
			"Dob" : "2002-05-01T00:00:00",
			"Gender" : "M",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "118",
					"DateAdministered" : "2011-05-01T00:00:00",
					"EvaluationReason" : "Gender: Invalid Administration",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : "SKB",
					"VaccineName" : "CERVARIX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0426",
		"TestCaseName" : "#1 @ 11 yrs - 0 days, male, Cervarix ",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-05-01T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2009-05-01T00:00:00",
			"EvaluationTestType" : "Gender: Invalid Administration",
			"ForecastNumber" : 1,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2013-05-28T00:00:00",
			"RecommendedDate" : "2011-05-01T00:00:00",
			"VaccineGroup" : "HPV"
		},
		"PatientProfile" : {
			"Dob" : "2000-05-01T00:00:00",
			"Gender" : "M",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "118",
					"DateAdministered" : "2011-05-01T00:00:00",
					"EvaluationReason" : "Gender: Invalid Administration",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : "SKB",
					"VaccineName" : "CERVARIX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0427",
		"TestCaseName" : "#2 @ 9 yrs, 4 wks - 4 days, female, Cervarix ",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-05-25T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2011-10-13T00:00:00",
			"EvaluationTestType" : "Age: At Absolute Minimum",
			"ForecastNumber" : 3,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2015-11-28T00:00:00",
			"RecommendedDate" : "2013-11-01T00:00:00",
			"VaccineGroup" : "HPV"
		},
		"PatientProfile" : {
			"Dob" : "2002-05-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "118",
					"DateAdministered" : "2011-04-28T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "CERVARIX"
				}, {
					"Cvx" : "118",
					"DateAdministered" : "2011-05-25T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "CERVARIX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0428",
		"TestCaseName" : "#2 @ 9 yrs, 4 wks - 0 days, female Cervarix ",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-05-29T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2011-10-16T00:00:00",
			"EvaluationTestType" : "Age: At Minimum",
			"ForecastNumber" : 3,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2015-11-28T00:00:00",
			"RecommendedDate" : "2013-11-01T00:00:00",
			"VaccineGroup" : "HPV"
		},
		"PatientProfile" : {
			"Dob" : "2002-05-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "118",
					"DateAdministered" : "2011-05-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "CERVARIX"
				}, {
					"Cvx" : "118",
					"DateAdministered" : "2011-05-29T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "CERVARIX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0429",
		"TestCaseName" : "#2 @ 11 yrs + 2 mo, female, Cervarix ",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-07-01T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2011-10-16T00:00:00",
			"EvaluationTestType" : "Age: At Recommended",
			"ForecastNumber" : 3,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2013-11-28T00:00:00",
			"RecommendedDate" : "2011-11-01T00:00:00",
			"VaccineGroup" : "HPV"
		},
		"PatientProfile" : {
			"Dob" : "2000-05-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "118",
					"DateAdministered" : "2011-05-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "CERVARIX"
				}, {
					"Cvx" : "118",
					"DateAdministered" : "2011-07-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "CERVARIX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0430",
		"TestCaseName" : "#2 @ 9 yrs, 4 wks - 4 days, male, Cervarix ",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-05-22T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2011-05-01T00:00:00",
			"EvaluationTestType" : "Gender: Invalid Administration",
			"ForecastNumber" : 1,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2013-05-28T00:00:00",
			"RecommendedDate" : "2013-05-01T00:00:00",
			"VaccineGroup" : "HPV"
		},
		"PatientProfile" : {
			"Dob" : "2002-05-01T00:00:00",
			"Gender" : "M",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "118",
					"DateAdministered" : "2011-04-28T00:00:00",
					"EvaluationReason" : "Gender: Invalid Administration",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : "SKB",
					"VaccineName" : "CERVARIX"
				}, {
					"Cvx" : "118",
					"DateAdministered" : "2011-05-22T00:00:00",
					"EvaluationReason" : "Gender: Invalid Administration",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : "SKB",
					"VaccineName" : "CERVARIX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0433",
		"TestCaseName" : "#3 @ 9 yrs, 24 weeks, 0 days, female, Cervarix ",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-10-16T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "Interval: At Minimum",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: series complete",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "HPV"
		},
		"PatientProfile" : {
			"Dob" : "2002-05-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "118",
					"DateAdministered" : "2011-05-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "CERVARIX"
				}, {
					"Cvx" : "118",
					"DateAdministered" : "2011-05-29T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "CERVARIX"
				}, {
					"Cvx" : "118",
					"DateAdministered" : "2011-10-16T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "CERVARIX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0434",
		"TestCaseName" : "#3 @ 11 yrs + 6 mo, female, Cervarix ",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-11-01T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "Age: At Recommended",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: series complete",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "HPV"
		},
		"PatientProfile" : {
			"Dob" : "2000-05-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "118",
					"DateAdministered" : "2011-05-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "CERVARIX"
				}, {
					"Cvx" : "118",
					"DateAdministered" : "2011-07-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "CERVARIX"
				}, {
					"Cvx" : "118",
					"DateAdministered" : "2011-11-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "valid",
					"Mvx" : "SKB",
					"VaccineName" : "CERVARIX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0437",
		"TestCaseName" : "#3 @ 9 yrs, 24 weeks, 0 days, male, Cervarix ",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-10-19T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2011-05-01T00:00:00",
			"EvaluationTestType" : "Gender: Invalid Administration",
			"ForecastNumber" : 1,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2015-05-28T00:00:00",
			"RecommendedDate" : "2013-05-01T00:00:00",
			"VaccineGroup" : "HPV"
		},
		"PatientProfile" : {
			"Dob" : "2002-05-01T00:00:00",
			"Gender" : "M",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "118",
					"DateAdministered" : "2011-05-01T00:00:00",
					"EvaluationReason" : "Gender: Invalid Administration",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : "SKB",
					"VaccineName" : "CERVARIX"
				}, {
					"Cvx" : "118",
					"DateAdministered" : "2011-05-29T00:00:00",
					"EvaluationReason" : "Gender: Invalid Administration",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : "SKB",
					"VaccineName" : "CERVARIX"
				}, {
					"Cvx" : "118",
					"DateAdministered" : "2011-10-19T00:00:00",
					"EvaluationReason" : "Gender: Invalid Administration",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : "SKB",
					"VaccineName" : "CERVARIX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0438",
		"TestCaseName" : "#3 @ 11 yrs + 6 mo, male, Cervarix ",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-11-01T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2009-05-01T00:00:00",
			"EvaluationTestType" : "Gender: Invalid Administration",
			"ForecastNumber" : 1,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2013-05-28T00:00:00",
			"RecommendedDate" : "2011-05-01T00:00:00",
			"VaccineGroup" : "HPV"
		},
		"PatientProfile" : {
			"Dob" : "2000-05-01T00:00:00",
			"Gender" : "M",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "118",
					"DateAdministered" : "2011-05-01T00:00:00",
					"EvaluationReason" : "Gender: Invalid Administration",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : "SKB",
					"VaccineName" : "CERVARIX"
				}, {
					"Cvx" : "118",
					"DateAdministered" : "2011-07-01T00:00:00",
					"EvaluationReason" : "Gender: Invalid Administration",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : "SKB",
					"VaccineName" : "CERVARIX"
				}, {
					"Cvx" : "118",
					"DateAdministered" : "2011-11-01T00:00:00",
					"EvaluationReason" : "Gender: Invalid Administration",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : "SKB",
					"VaccineName" : "CERVARIX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0439",
		"TestCaseName" : "Any dose ≥ 26 yrs, female, Cervarix",
		"ExpectedForecast" : {
			"AssessmentDate" : "2012-05-02T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "Age: Too Old",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: too old",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "HPV"
		},
		"PatientProfile" : {
			"Dob" : "1985-05-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "118",
					"DateAdministered" : "2012-05-02T00:00:00",
					"EvaluationReason" : "Age: Too Old",
					"EvaluationStatus" : "Extraneous",
					"Mvx" : "SKB",
					"VaccineName" : "CERVARIX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0440",
		"TestCaseName" : "#2 with interval of 4 weeks from #1",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-05-29T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2011-10-16T00:00:00",
			"EvaluationTestType" : "Interval: At Minimum",
			"ForecastNumber" : 3,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2013-11-28T00:00:00",
			"RecommendedDate" : "2011-11-01T00:00:00",
			"VaccineGroup" : "HPV"
		},
		"PatientProfile" : {
			"Dob" : "2000-05-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "137",
					"DateAdministered" : "2011-05-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "HPV Unspecified"
				}, {
					"Cvx" : "137",
					"DateAdministered" : "2011-05-29T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "HPV Unspecified"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0441",
		"TestCaseName" : "#2 with interval of 4 weeks - 4 days from #1",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-05-25T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2011-10-16T00:00:00",
			"EvaluationTestType" : "Interval: At Absolute Minimum",
			"ForecastNumber" : 3,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2013-11-28T00:00:00",
			"RecommendedDate" : "2011-11-01T00:00:00",
			"VaccineGroup" : "HPV"
		},
		"PatientProfile" : {
			"Dob" : "2000-05-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "137",
					"DateAdministered" : "2011-05-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "HPV Unspecified"
				}, {
					"Cvx" : "137",
					"DateAdministered" : "2011-05-25T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "HPV Unspecified"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0442",
		"TestCaseName" : "#2 with interval of 4 weeks - 5 days from #1",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-05-24T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2011-06-21T00:00:00",
			"EvaluationTestType" : "Interval: Below Absolute Minimum",
			"ForecastNumber" : 2,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2013-07-28T00:00:00",
			"RecommendedDate" : "2011-07-01T00:00:00",
			"VaccineGroup" : "HPV"
		},
		"PatientProfile" : {
			"Dob" : "2000-05-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "137",
					"DateAdministered" : "2011-05-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "HPV Unspecified"
				}, {
					"Cvx" : "137",
					"DateAdministered" : "2011-05-24T00:00:00",
					"EvaluationReason" : "Interval: Too Short",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : null,
					"VaccineName" : "HPV Unspecified"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0443",
		"TestCaseName" : "#2 with interval of 2 mo from #1",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-07-01T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2011-10-16T00:00:00",
			"EvaluationTestType" : "Interval: At Recommended",
			"ForecastNumber" : 3,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2013-11-28T00:00:00",
			"RecommendedDate" : "2011-11-01T00:00:00",
			"VaccineGroup" : "HPV"
		},
		"PatientProfile" : {
			"Dob" : "2000-05-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "137",
					"DateAdministered" : "2011-05-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "HPV Unspecified"
				}, {
					"Cvx" : "137",
					"DateAdministered" : "2011-07-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "HPV Unspecified"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0444",
		"TestCaseName" : "#3 with interval of 12 weeks from #2",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-08-21T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "Interval: At Minimum",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: series complete",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "HPV"
		},
		"PatientProfile" : {
			"Dob" : "2002-05-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "137",
					"DateAdministered" : "2011-05-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "HPV Unspecified"
				}, {
					"Cvx" : "137",
					"DateAdministered" : "2011-05-29T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "HPV Unspecified"
				}, {
					"Cvx" : "137",
					"DateAdministered" : "2011-08-21T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "HPV Unspecified"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0445",
		"TestCaseName" : "#3 with interval of 12 weeks - 4 days from #2",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-08-25T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "Interval: At Absolute Minimum",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: series complete",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "HPV"
		},
		"PatientProfile" : {
			"Dob" : "2000-05-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "137",
					"DateAdministered" : "2011-05-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "HPV Unspecified"
				}, {
					"Cvx" : "137",
					"DateAdministered" : "2011-06-06T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "HPV Unspecified"
				}, {
					"Cvx" : "137",
					"DateAdministered" : "2011-08-25T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "HPV Unspecified"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0446",
		"TestCaseName" : "#3 with interval of 12 weeks - 5 days from #2",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-08-24T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2011-11-16T00:00:00",
			"EvaluationTestType" : "Interval: Below Absolute Minimum",
			"ForecastNumber" : 3,
			"ForecastTestType" : "Recommended based on minimum interval from invalid dose",
			"PastDueDate" : "2013-11-28T00:00:00",
			"RecommendedDate" : "2011-11-16T00:00:00",
			"VaccineGroup" : "HPV"
		},
		"PatientProfile" : {
			"Dob" : "2000-05-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "137",
					"DateAdministered" : "2011-05-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "HPV Unspecified"
				}, {
					"Cvx" : "137",
					"DateAdministered" : "2011-06-06T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "HPV Unspecified"
				}, {
					"Cvx" : "137",
					"DateAdministered" : "2011-08-24T00:00:00",
					"EvaluationReason" : "Interval: Too Short",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : null,
					"VaccineName" : "HPV Unspecified"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0447",
		"TestCaseName" : "#3 with interval of 4 mo from #2",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-11-01T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "Interval: At Recommended",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: series complete",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "HPV"
		},
		"PatientProfile" : {
			"Dob" : "2000-05-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "137",
					"DateAdministered" : "2011-05-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "HPV Unspecified"
				}, {
					"Cvx" : "137",
					"DateAdministered" : "2011-07-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "HPV Unspecified"
				}, {
					"Cvx" : "137",
					"DateAdministered" : "2011-11-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "HPV Unspecified"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0448",
		"TestCaseName" : "#3 with interval of 24 weeks from #1 ",
		"ExpectedForecast" : {
			"AssessmentDate" : "2010-10-16T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "Interval: At Minimum",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: series complete",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "HPV"
		},
		"PatientProfile" : {
			"Dob" : "2000-05-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "137",
					"DateAdministered" : "2010-05-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "HPV Unspecified"
				}, {
					"Cvx" : "137",
					"DateAdministered" : "2010-05-29T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "HPV Unspecified"
				}, {
					"Cvx" : "137",
					"DateAdministered" : "2010-10-16T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "HPV Unspecified"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0450",
		"TestCaseName" : "#3 with interval of 16 weeks from #1 ",
		"ExpectedForecast" : {
			"AssessmentDate" : "2010-08-21T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "Interval: At Minimum",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: series complete",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "HPV"
		},
		"PatientProfile" : {
			"Dob" : "2000-05-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "137",
					"DateAdministered" : "2010-05-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "HPV Unspecified"
				}, {
					"Cvx" : "137",
					"DateAdministered" : "2010-05-29T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "HPV Unspecified"
				}, {
					"Cvx" : "137",
					"DateAdministered" : "2010-08-21T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "HPV Unspecified"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0451",
		"TestCaseName" : "#1 @ 8 yrs - 5 days, #2 @ 9 yrs - 5 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-04-26T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2011-05-01T00:00:00",
			"EvaluationTestType" : "Age: Below Absolute Minimum",
			"ForecastNumber" : 1,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2015-05-28T00:00:00",
			"RecommendedDate" : "2013-05-01T00:00:00",
			"VaccineGroup" : "HPV"
		},
		"PatientProfile" : {
			"Dob" : "2002-05-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "137",
					"DateAdministered" : "2010-04-26T00:00:00",
					"EvaluationReason" : "Age: Too Young",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : null,
					"VaccineName" : "HPV Unspecified"
				}, {
					"Cvx" : "137",
					"DateAdministered" : "2011-04-26T00:00:00",
					"EvaluationReason" : "Age: Too Young",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : null,
					"VaccineName" : "HPV Unspecified"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0452",
		"TestCaseName" : "#1 @ 9 yrs - 5 days, #2 @ 9 yrs - 4 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-04-27T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2011-05-25T00:00:00",
			"EvaluationTestType" : "Age: Below Absolute Minimum",
			"ForecastNumber" : 2,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2015-07-28T00:00:00",
			"RecommendedDate" : "2013-07-01T00:00:00",
			"VaccineGroup" : "HPV"
		},
		"PatientProfile" : {
			"Dob" : "2002-05-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "137",
					"DateAdministered" : "2011-04-26T00:00:00",
					"EvaluationReason" : "Age: Too Young",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : null,
					"VaccineName" : "HPV Unspecified"
				}, {
					"Cvx" : "137",
					"DateAdministered" : "2011-04-27T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "HPV Unspecified"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0453",
		"TestCaseName" : "#1 @ 9 yrs, #2 @ 9 yrs + 2 weeks",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-05-15T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2011-06-12T00:00:00",
			"EvaluationTestType" : "Interval: Below Absolute Minimum",
			"ForecastNumber" : 2,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2015-07-28T00:00:00",
			"RecommendedDate" : "2013-07-01T00:00:00",
			"VaccineGroup" : "HPV"
		},
		"PatientProfile" : {
			"Dob" : "2002-05-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "137",
					"DateAdministered" : "2011-05-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "HPV Unspecified"
				}, {
					"Cvx" : "137",
					"DateAdministered" : "2011-05-15T00:00:00",
					"EvaluationReason" : "Age: Too Young",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : null,
					"VaccineName" : "HPV Unspecified"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0454",
		"TestCaseName" : "#1 @ 9 yrs, #2 @ 12 yrs, 2 mo, 3 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2010-07-04T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2010-09-26T00:00:00",
			"EvaluationTestType" : "All Valid: Forecast Test",
			"ForecastNumber" : 3,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2011-11-28T00:00:00",
			"RecommendedDate" : "2010-09-26T00:00:00",
			"VaccineGroup" : "HPV"
		},
		"PatientProfile" : {
			"Dob" : "1998-05-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "137",
					"DateAdministered" : "2007-05-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "HPV Unspecified"
				}, {
					"Cvx" : "137",
					"DateAdministered" : "2010-07-04T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "HPV Unspecified"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0455",
		"TestCaseName" : "#1 @ 9 yrs, #2 @ 11 yr, 6 mo",
		"ExpectedForecast" : {
			"AssessmentDate" : "2009-11-01T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2010-01-24T00:00:00",
			"EvaluationTestType" : "All Valid: Forecast Test",
			"ForecastNumber" : 3,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2011-11-28T00:00:00",
			"RecommendedDate" : "2010-01-24T00:00:00",
			"VaccineGroup" : "HPV"
		},
		"PatientProfile" : {
			"Dob" : "1998-05-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "137",
					"DateAdministered" : "2007-05-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "HPV Unspecified"
				}, {
					"Cvx" : "137",
					"DateAdministered" : "2009-11-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "HPV Unspecified"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0456",
		"TestCaseName" : "#1 @ 8 yrs - 5 days, #2 @ 9 yrs - 6 days, #3 @ 9 yrs - 5 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-04-26T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2011-05-01T00:00:00",
			"EvaluationTestType" : "Age: Below Absolute Minimum",
			"ForecastNumber" : 1,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2015-05-28T00:00:00",
			"RecommendedDate" : "2013-05-01T00:00:00",
			"VaccineGroup" : "HPV"
		},
		"PatientProfile" : {
			"Dob" : "2002-05-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "137",
					"DateAdministered" : "2010-04-26T00:00:00",
					"EvaluationReason" : "Age: Too Young",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : null,
					"VaccineName" : "HPV Unspecified"
				}, {
					"Cvx" : "137",
					"DateAdministered" : "2011-04-25T00:00:00",
					"EvaluationReason" : "Age: Too Young",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : null,
					"VaccineName" : "HPV Unspecified"
				}, {
					"Cvx" : "137",
					"DateAdministered" : "2011-04-26T00:00:00",
					"EvaluationReason" : "Age: Too Young",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : null,
					"VaccineName" : "HPV Unspecified"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0457",
		"TestCaseName" : "#1 @ 8 yrs - 5 days, #2 @ 9 yrs - 6 days, #3 @ 9 yrs - 0 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-05-01T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2011-05-29T00:00:00",
			"EvaluationTestType" : "Age: Below Absolute Minimum",
			"ForecastNumber" : 2,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2015-07-28T00:00:00",
			"RecommendedDate" : "2013-07-01T00:00:00",
			"VaccineGroup" : "HPV"
		},
		"PatientProfile" : {
			"Dob" : "2002-05-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "137",
					"DateAdministered" : "2010-04-26T00:00:00",
					"EvaluationReason" : "Age: Too Young",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : null,
					"VaccineName" : "HPV Unspecified"
				}, {
					"Cvx" : "137",
					"DateAdministered" : "2011-04-25T00:00:00",
					"EvaluationReason" : "Age: Too Young",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : null,
					"VaccineName" : "HPV Unspecified"
				}, {
					"Cvx" : "137",
					"DateAdministered" : "2011-05-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "HPV Unspecified"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0458",
		"TestCaseName" : "#1 @ 9 yrs - 5 days, #2 @ 9 yrs + 4 weeks, #3 @ 9 yrs, 8 weeks",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-06-26T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2011-11-13T00:00:00",
			"EvaluationTestType" : "Age: Below Absolute Minimum",
			"ForecastNumber" : 3,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2015-11-28T00:00:00",
			"RecommendedDate" : "2013-11-01T00:00:00",
			"VaccineGroup" : "HPV"
		},
		"PatientProfile" : {
			"Dob" : "2002-05-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "137",
					"DateAdministered" : "2011-04-26T00:00:00",
					"EvaluationReason" : "Age: Too Young",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : null,
					"VaccineName" : "HPV Unspecified"
				}, {
					"Cvx" : "137",
					"DateAdministered" : "2011-05-29T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "HPV Unspecified"
				}, {
					"Cvx" : "137",
					"DateAdministered" : "2011-06-26T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "HPV Unspecified"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0459",
		"TestCaseName" : "#1 @ 9 yrs - 5 days, #2 @ 9 yrs + 4 weeks, #3 @ 9 yrs, 8 weeks, #4 @ 9 yrs, 24 weeks",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-10-19T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "Age: Below Absolute Minimum",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: series complete",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "HPV"
		},
		"PatientProfile" : {
			"Dob" : "2002-05-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "137",
					"DateAdministered" : "2011-04-26T00:00:00",
					"EvaluationReason" : "Age: Too Young",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : null,
					"VaccineName" : "HPV Unspecified"
				}, {
					"Cvx" : "137",
					"DateAdministered" : "2011-05-29T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "HPV Unspecified"
				}, {
					"Cvx" : "137",
					"DateAdministered" : "2011-06-26T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "HPV Unspecified"
				}, {
					"Cvx" : "137",
					"DateAdministered" : "2011-10-19T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "HPV Unspecified"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0460",
		"TestCaseName" : "Adolescent male, no HPV yet given.",
		"ExpectedForecast" : {
			"AssessmentDate" : "2008-03-01T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2008-04-04T00:00:00",
			"EvaluationTestType" : "No Doses Administered",
			"ForecastNumber" : 1,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2012-05-01T00:00:00",
			"RecommendedDate" : "2010-04-04T00:00:00",
			"VaccineGroup" : "HPV"
		},
		"PatientProfile" : {
			"Dob" : "1999-04-04T00:00:00",
			"Gender" : "M",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : []
		}
	}, {
		"CdcTestId" : "2013-0461",
		"TestCaseName" : "# 2 at age 9 years 4 weeks-5 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2010-12-24T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2011-01-21T00:00:00",
			"EvaluationTestType" : "Age: Below Absolute Minimum",
			"ForecastNumber" : 2,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2015-02-28T00:00:00",
			"RecommendedDate" : "2013-02-01T00:00:00",
			"VaccineGroup" : "HPV"
		},
		"PatientProfile" : {
			"Dob" : "2001-12-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "137",
					"DateAdministered" : "2010-11-30T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "HPV Unspecified"
				}, {
					"Cvx" : "137",
					"DateAdministered" : "2010-12-24T00:00:00",
					"EvaluationReason" : "Age: Too Young",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : null,
					"VaccineName" : "HPV Unspecified"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0462",
		"TestCaseName" : "# 2 at age 9 years 4 weeks-4 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2010-12-25T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2011-05-18T00:00:00",
			"EvaluationTestType" : "Age: At Absolute Minimum",
			"ForecastNumber" : 3,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2015-06-28T00:00:00",
			"RecommendedDate" : "2013-06-01T00:00:00",
			"VaccineGroup" : "HPV"
		},
		"PatientProfile" : {
			"Dob" : "2001-12-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "137",
					"DateAdministered" : "2010-11-30T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "HPV Unspecified"
				}, {
					"Cvx" : "137",
					"DateAdministered" : "2010-12-25T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "HPV Unspecified"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0463",
		"TestCaseName" : "# 2 at age 9 years 4 weeks",
		"ExpectedForecast" : {
			"AssessmentDate" : "2010-12-25T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2011-05-18T00:00:00",
			"EvaluationTestType" : "Age: At Minimum",
			"ForecastNumber" : 3,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2015-06-28T00:00:00",
			"RecommendedDate" : "2013-06-01T00:00:00",
			"VaccineGroup" : "HPV"
		},
		"PatientProfile" : {
			"Dob" : "2001-12-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "137",
					"DateAdministered" : "2010-12-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "HPV Unspecified"
				}, {
					"Cvx" : "137",
					"DateAdministered" : "2010-12-25T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "HPV Unspecified"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0465",
		"TestCaseName" : "# 3 at age 9 years 16 weeks-1 days. ",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-03-22T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2011-06-14T00:00:00",
			"EvaluationTestType" : "Age: Below Absolute Minimum",
			"ForecastNumber" : 3,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2015-06-28T00:00:00",
			"RecommendedDate" : "2013-06-01T00:00:00",
			"VaccineGroup" : "HPV"
		},
		"PatientProfile" : {
			"Dob" : "2001-12-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "137",
					"DateAdministered" : "2010-11-30T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "HPV Unspecified"
				}, {
					"Cvx" : "137",
					"DateAdministered" : "2010-12-28T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "HPV Unspecified"
				}, {
					"Cvx" : "137",
					"DateAdministered" : "2011-03-22T00:00:00",
					"EvaluationReason" : "Age: Too Young",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : null,
					"VaccineName" : "HPV Unspecified"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0466",
		"TestCaseName" : "# 3 at age 9 years 16 weeks",
		"ExpectedForecast" : {
			"AssessmentDate" : "2012-03-22T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "Age: At Absolute Minimum",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: series complete",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "HPV"
		},
		"PatientProfile" : {
			"Dob" : "2002-12-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "137",
					"DateAdministered" : "2011-12-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "HPV Unspecified"
				}, {
					"Cvx" : "137",
					"DateAdministered" : "2011-12-29T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "HPV Unspecified"
				}, {
					"Cvx" : "137",
					"DateAdministered" : "2012-03-22T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "HPV Unspecified"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0467",
		"TestCaseName" : "# 2 at age 26 yrs 11 months 15 days; forecast # 3; female",
		"ExpectedForecast" : {
			"AssessmentDate" : "2012-03-19T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2012-06-11T00:00:00",
			"EvaluationTestType" : "All Valid: Forecast Test",
			"ForecastNumber" : 3,
			"ForecastTestType" : "Recommended based on minimum interval from previous dose (catch-up)",
			"PastDueDate" : "2012-06-11T00:00:00",
			"RecommendedDate" : "2012-06-11T00:00:00",
			"VaccineGroup" : "HPV"
		},
		"PatientProfile" : {
			"Dob" : "1985-04-04T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "137",
					"DateAdministered" : "2010-04-04T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "HPV Unspecified"
				}, {
					"Cvx" : "137",
					"DateAdministered" : "2012-03-19T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "HPV Unspecified"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0468",
		"TestCaseName" : "Dose 1 to dose 2 interval 28-5 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-07-24T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2011-08-21T00:00:00",
			"EvaluationTestType" : "Interval: Below Absolute Minimum",
			"ForecastNumber" : 2,
			"ForecastTestType" : "Recommended based on minimum interval from previous dose (catch-up)",
			"PastDueDate" : "2012-07-01T00:00:00",
			"RecommendedDate" : "2011-08-21T00:00:00",
			"VaccineGroup" : "HPV"
		},
		"PatientProfile" : {
			"Dob" : "1999-04-04T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "137",
					"DateAdministered" : "2011-07-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "HPV Unspecified"
				}, {
					"Cvx" : "137",
					"DateAdministered" : "2011-07-24T00:00:00",
					"EvaluationReason" : "Interval: Too Short",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : null,
					"VaccineName" : "HPV Unspecified"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0469",
		"TestCaseName" : "Dose 1 to dose 2 interval 28 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-07-29T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2011-12-16T00:00:00",
			"EvaluationTestType" : "Interval: At Minimum",
			"ForecastNumber" : 3,
			"ForecastTestType" : "Recommended based on minimum interval from previous dose (catch-up)",
			"PastDueDate" : "2012-10-31T00:00:00",
			"RecommendedDate" : "2011-12-16T00:00:00",
			"VaccineGroup" : "HPV"
		},
		"PatientProfile" : {
			"Dob" : "1999-04-04T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "137",
					"DateAdministered" : "2011-07-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "HPV Unspecified"
				}, {
					"Cvx" : "137",
					"DateAdministered" : "2011-07-29T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "HPV Unspecified"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0470",
		"TestCaseName" : "Adolescent female, no HPV yet  given.",
		"ExpectedForecast" : {
			"AssessmentDate" : "2008-06-01T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2008-12-25T00:00:00",
			"EvaluationTestType" : "No Doses Administered",
			"ForecastNumber" : 1,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2013-01-21T00:00:00",
			"RecommendedDate" : "2010-12-25T00:00:00",
			"VaccineGroup" : "HPV"
		},
		"PatientProfile" : {
			"Dob" : "1999-12-25T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : []
		}
	}, {
		"CdcTestId" : "2013-0471",
		"TestCaseName" : "Dose 2 to dose 3 interval 12 weeks-5 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-02-07T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2011-05-02T00:00:00",
			"EvaluationTestType" : "Interval: Below Absolute Minimum",
			"ForecastNumber" : 3,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2014-04-12T00:00:00",
			"RecommendedDate" : "2012-03-16T00:00:00",
			"VaccineGroup" : "HPV"
		},
		"PatientProfile" : {
			"Dob" : "2000-09-16T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "137",
					"DateAdministered" : "2010-09-20T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "HPV Unspecified"
				}, {
					"Cvx" : "137",
					"DateAdministered" : "2010-11-20T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "HPV Unspecified"
				}, {
					"Cvx" : "137",
					"DateAdministered" : "2011-02-07T00:00:00",
					"EvaluationReason" : "Interval: Too Short",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : null,
					"VaccineName" : "HPV Unspecified"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0472",
		"TestCaseName" : "Dose 2 to dose 3 interval 12 weeks-4 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-02-08T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "Interval: At Absolute Minimum",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: series complete",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "HPV"
		},
		"PatientProfile" : {
			"Dob" : "2000-09-16T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "137",
					"DateAdministered" : "2010-09-20T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "HPV Unspecified"
				}, {
					"Cvx" : "137",
					"DateAdministered" : "2010-11-20T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "HPV Unspecified"
				}, {
					"Cvx" : "137",
					"DateAdministered" : "2011-02-08T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "HPV Unspecified"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0473",
		"TestCaseName" : "Dose 2 to dose 3 interval 12 weeks",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-02-12T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "Interval: At Minimum",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: series complete",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "HPV"
		},
		"PatientProfile" : {
			"Dob" : "2000-09-16T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "137",
					"DateAdministered" : "2010-09-20T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "HPV Unspecified"
				}, {
					"Cvx" : "137",
					"DateAdministered" : "2010-11-20T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "HPV Unspecified"
				}, {
					"Cvx" : "137",
					"DateAdministered" : "2011-02-12T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "HPV Unspecified"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0474",
		"TestCaseName" : "Dose 1 to dose 3 interval 16 weeks -1 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2008-08-07T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2008-10-30T00:00:00",
			"EvaluationTestType" : "Interval: Below Absolute Minimum",
			"ForecastNumber" : 3,
			"ForecastTestType" : "Recommended based on minimum interval from invalid dose",
			"PastDueDate" : "2009-10-18T00:00:00",
			"RecommendedDate" : "2008-10-30T00:00:00",
			"VaccineGroup" : "HPV"
		},
		"PatientProfile" : {
			"Dob" : "1996-03-21T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "137",
					"DateAdministered" : "2008-04-18T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "HPV Unspecified"
				}, {
					"Cvx" : "137",
					"DateAdministered" : "2008-05-16T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "HPV Unspecified"
				}, {
					"Cvx" : "137",
					"DateAdministered" : "2008-08-07T00:00:00",
					"EvaluationReason" : "Interval: Too Short",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : null,
					"VaccineName" : "HPV Unspecified"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0475",
		"TestCaseName" : "Dose 1 to dose 3 interval 16 weeks=valid",
		"ExpectedForecast" : {
			"AssessmentDate" : "2008-08-08T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "Interval: At Minimum",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: series complete",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "HPV"
		},
		"PatientProfile" : {
			"Dob" : "1996-03-21T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "137",
					"DateAdministered" : "2008-04-18T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "HPV Unspecified"
				}, {
					"Cvx" : "137",
					"DateAdministered" : "2008-05-16T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "HPV Unspecified"
				}, {
					"Cvx" : "137",
					"DateAdministered" : "2008-08-08T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "HPV Unspecified"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0476",
		"TestCaseName" : "# 2 to # 3 interval 12 wks-4 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2010-12-12T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "Interval: At Absolute Minimum",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: series complete",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "HPV"
		},
		"PatientProfile" : {
			"Dob" : "1997-01-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "137",
					"DateAdministered" : "2010-07-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "HPV Unspecified"
				}, {
					"Cvx" : "137",
					"DateAdministered" : "2010-09-23T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "HPV Unspecified"
				}, {
					"Cvx" : "137",
					"DateAdministered" : "2010-12-12T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "HPV Unspecified"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0477",
		"TestCaseName" : "Invalid dose 1 of three doses given",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-05-05T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2011-07-28T00:00:00",
			"EvaluationTestType" : "Age: Below Absolute Minimum",
			"ForecastNumber" : 3,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2015-02-17T00:00:00",
			"RecommendedDate" : "2013-01-21T00:00:00",
			"VaccineGroup" : "HPV"
		},
		"PatientProfile" : {
			"Dob" : "2001-07-21T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "137",
					"DateAdministered" : "2010-07-01T00:00:00",
					"EvaluationReason" : "Age: Too Young",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : null,
					"VaccineName" : "HPV Unspecified"
				}, {
					"Cvx" : "137",
					"DateAdministered" : "2010-10-21T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "HPV Unspecified"
				}, {
					"Cvx" : "137",
					"DateAdministered" : "2011-05-05T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "HPV Unspecified"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0478",
		"TestCaseName" : "Invalid dose 2 in midst of others",
		"ExpectedForecast" : {
			"AssessmentDate" : "2010-08-25T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2010-11-17T00:00:00",
			"EvaluationTestType" : "Interval: Below Absolute Minimum",
			"ForecastNumber" : 3,
			"ForecastTestType" : "Recommended based on minimum interval from previous dose (catch-up)",
			"PastDueDate" : "2012-07-22T00:00:00",
			"RecommendedDate" : "2010-11-17T00:00:00",
			"VaccineGroup" : "HPV"
		},
		"PatientProfile" : {
			"Dob" : "1998-12-25T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "137",
					"DateAdministered" : "2010-02-25T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "HPV Unspecified"
				}, {
					"Cvx" : "137",
					"DateAdministered" : "2010-03-18T00:00:00",
					"EvaluationReason" : "Interval: Too Short",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : null,
					"VaccineName" : "HPV Unspecified"
				}, {
					"Cvx" : "137",
					"DateAdministered" : "2010-08-25T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "HPV Unspecified"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0479",
		"TestCaseName" : "Anaphylaxis to previous dose",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-06-19T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "All Valid: Forecast Test",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: contraindication",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "HPV"
		},
		"PatientProfile" : {
			"Dob" : "2000-05-19T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : "VXC20",
			"MedHistoryCodeSys" : "CDCPHINVS",
			"MedHistoryText" : "allergy to previous dose of this vaccine or to any of its unlisted vaccine components (anaphylactic)",
			"Series" : [{
					"Cvx" : "137",
					"DateAdministered" : "2011-06-19T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "HPV Unspecified"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0480",
		"TestCaseName" : "Adult female age 27 years, No Doses",
		"ExpectedForecast" : {
			"AssessmentDate" : "2012-03-30T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "No Doses Administered",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: too old",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "HPV"
		},
		"PatientProfile" : {
			"Dob" : "1985-03-30T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : []
		}
	}, {
		"CdcTestId" : "2013-0481",
		"TestCaseName" : "Male age 23. HPV not recommended.",
		"ExpectedForecast" : {
			"AssessmentDate" : "2012-04-01T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "No Doses Administered",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: too old",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "HPV"
		},
		"PatientProfile" : {
			"Dob" : "1989-04-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : []
		}
	}, {
		"CdcTestId" : "2013-0482",
		"TestCaseName" : "Female, age 14.  HPV recommended",
		"ExpectedForecast" : {
			"AssessmentDate" : "2012-04-01T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2007-04-01T00:00:00",
			"EvaluationTestType" : "No Doses Administered",
			"ForecastNumber" : 1,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2011-04-28T00:00:00",
			"RecommendedDate" : "2009-04-01T00:00:00",
			"VaccineGroup" : "HPV"
		},
		"PatientProfile" : {
			"Dob" : "1998-04-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : []
		}
	}, {
		"CdcTestId" : "2013-0483",
		"TestCaseName" : "HPV bivalent to male adolescent. Not valid. Forecast quadrivalent",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-06-20T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2009-06-18T00:00:00",
			"EvaluationTestType" : "Gender: Invalid Administration",
			"ForecastNumber" : 1,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2013-07-15T00:00:00",
			"RecommendedDate" : "2011-06-18T00:00:00",
			"VaccineGroup" : "HPV"
		},
		"PatientProfile" : {
			"Dob" : "2000-06-18T00:00:00",
			"Gender" : "M",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "118",
					"DateAdministered" : "2011-06-20T00:00:00",
					"EvaluationReason" : "Gender: Invalid Administration",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : "SKB",
					"VaccineName" : "CERVARIX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0484",
		"TestCaseName" : "# 1 at age 9 years-5 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2010-12-03T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2010-12-08T00:00:00",
			"EvaluationTestType" : "Age: Below Absolute Minimum",
			"ForecastNumber" : 1,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2015-01-04T00:00:00",
			"RecommendedDate" : "2012-12-08T00:00:00",
			"VaccineGroup" : "HPV"
		},
		"PatientProfile" : {
			"Dob" : "2001-12-08T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "137",
					"DateAdministered" : "2010-12-03T00:00:00",
					"EvaluationReason" : "Age: Too Young",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : null,
					"VaccineName" : "HPV Unspecified"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0485",
		"TestCaseName" : "# 1 at age  9 years-4 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2010-12-04T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2011-01-05T00:00:00",
			"EvaluationTestType" : "Age: At Absolute Minimum",
			"ForecastNumber" : 2,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2015-03-07T00:00:00",
			"RecommendedDate" : "2013-02-08T00:00:00",
			"VaccineGroup" : "HPV"
		},
		"PatientProfile" : {
			"Dob" : "2001-12-08T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "137",
					"DateAdministered" : "2010-12-04T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "HPV Unspecified"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0486",
		"TestCaseName" : "# 1 at age 9 years",
		"ExpectedForecast" : {
			"AssessmentDate" : "2010-12-08T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2011-01-05T00:00:00",
			"EvaluationTestType" : "Age: At Minimum",
			"ForecastNumber" : 2,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2015-03-07T00:00:00",
			"RecommendedDate" : "2013-02-08T00:00:00",
			"VaccineGroup" : "HPV"
		},
		"PatientProfile" : {
			"Dob" : "2001-12-08T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "137",
					"DateAdministered" : "2010-12-08T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "HPV Unspecified"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0487",
		"TestCaseName" : "#1 @ 11 yrs, 0 days, MCV4",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-05-01T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2011-06-26T00:00:00",
			"EvaluationTestType" : "Age: At Minimum",
			"ForecastNumber" : 2,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2017-05-28T00:00:00",
			"RecommendedDate" : "2016-05-01T00:00:00",
			"VaccineGroup" : "MCV"
		},
		"PatientProfile" : {
			"Dob" : "2000-05-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "114",
					"DateAdministered" : "2011-05-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "MENACTRA"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0488",
		"TestCaseName" : "#2 @ 11 yr, 8 weeks - 4 days, MCV4",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-06-22T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "Age: At Absolute Minimum",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: series complete",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "MCV"
		},
		"PatientProfile" : {
			"Dob" : "2000-05-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "114",
					"DateAdministered" : "2011-05-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "MENACTRA"
				}, {
					"Cvx" : "114",
					"DateAdministered" : "2011-06-22T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "valid",
					"Mvx" : "PMC",
					"VaccineName" : "MENACTRA"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0489",
		"TestCaseName" : "#2 @ 11 yr, 8 weeks - 5 days, MCV4",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-06-21T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2011-08-16T00:00:00",
			"EvaluationTestType" : "Age: Below Absolute Minimum",
			"ForecastNumber" : 2,
			"ForecastTestType" : "Recommended based on minimum interval from invalid dose",
			"PastDueDate" : "2022-05-01T00:00:00",
			"RecommendedDate" : "2016-05-01T00:00:00",
			"VaccineGroup" : "MCV"
		},
		"PatientProfile" : {
			"Dob" : "2000-05-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "114",
					"DateAdministered" : "2011-05-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "MENACTRA"
				}, {
					"Cvx" : "114",
					"DateAdministered" : "2011-06-21T00:00:00",
					"EvaluationReason" : "Age: Too Young",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : "PMC",
					"VaccineName" : "MENACTRA"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0490",
		"TestCaseName" : "#2 @ 11 yr, 8 weeks, MCV4",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-06-26T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "Age: At Minimum",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: series complete",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "MCV"
		},
		"PatientProfile" : {
			"Dob" : "2000-05-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "114",
					"DateAdministered" : "2011-05-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "MENACTRA"
				}, {
					"Cvx" : "114",
					"DateAdministered" : "2011-06-26T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "valid",
					"Mvx" : "PMC",
					"VaccineName" : "MENACTRA"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0491",
		"TestCaseName" : "#2 @ 16 years, MCV4",
		"ExpectedForecast" : {
			"AssessmentDate" : "2006-05-01T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "Age: At Recommended",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: series complete",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "MCV"
		},
		"PatientProfile" : {
			"Dob" : "1990-05-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "114",
					"DateAdministered" : "2001-05-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "MENACTRA"
				}, {
					"Cvx" : "114",
					"DateAdministered" : "2006-05-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "MENACTRA"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0492",
		"TestCaseName" : "#2 with interval of 8 weeks - 4 days of #1",
		"ExpectedForecast" : {
			"AssessmentDate" : "2012-06-22T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "Interval: At Absolute Minimum",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: series complete",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "MCV"
		},
		"PatientProfile" : {
			"Dob" : "2000-05-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "114",
					"DateAdministered" : "2012-05-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "MENACTRA"
				}, {
					"Cvx" : "114",
					"DateAdministered" : "2012-06-22T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "valid",
					"Mvx" : "PMC",
					"VaccineName" : "MENACTRA"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0493",
		"TestCaseName" : "#2 with interval of 8 weeks - 5 days of #1",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-06-21T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2011-08-16T00:00:00",
			"EvaluationTestType" : "Interval: Below Absolute Minimum",
			"ForecastNumber" : 2,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2017-05-28T00:00:00",
			"RecommendedDate" : "2016-05-01T00:00:00",
			"VaccineGroup" : "MCV"
		},
		"PatientProfile" : {
			"Dob" : "2000-05-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "114",
					"DateAdministered" : "2011-05-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "MENACTRA"
				}, {
					"Cvx" : "114",
					"DateAdministered" : "2011-06-21T00:00:00",
					"EvaluationReason" : "Interval: Too Short",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : "PMC",
					"VaccineName" : "MENACTRA"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0494",
		"TestCaseName" : "#2 with interval of 8 weeks of #1",
		"ExpectedForecast" : {
			"AssessmentDate" : "2006-07-01T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "All Valid: Forecast Test",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: series complete",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "MCV"
		},
		"PatientProfile" : {
			"Dob" : "1990-05-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "114",
					"DateAdministered" : "2006-05-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "MENACTRA"
				}, {
					"Cvx" : "114",
					"DateAdministered" : "2006-07-01T00:00:00",
					"EvaluationReason" : "Series Already Complete",
					"EvaluationStatus" : "Extraneous",
					"Mvx" : "PMC",
					"VaccineName" : "MENACTRA"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0495",
		"TestCaseName" : "#2 with interval of 5 years of #1",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-05-01T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "Interval: At Recommended",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: series complete",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "MCV"
		},
		"PatientProfile" : {
			"Dob" : "1990-05-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "114",
					"DateAdministered" : "2006-05-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "MENACTRA"
				}, {
					"Cvx" : "114",
					"DateAdministered" : "2011-05-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "MENACTRA"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0497",
		"TestCaseName" : "#1 @ 11 yrs - 5 days, #2 @ 11 yrs, 8 weeks - 5 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-06-21T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2011-08-16T00:00:00",
			"EvaluationTestType" : "Age: Below Absolute Minimum",
			"ForecastNumber" : 2,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2017-05-28T00:00:00",
			"RecommendedDate" : "2016-05-01T00:00:00",
			"VaccineGroup" : "MCV"
		},
		"PatientProfile" : {
			"Dob" : "2000-05-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "114",
					"DateAdministered" : "2011-04-26T00:00:00",
					"EvaluationReason" : "Age: Too Young",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : "PMC",
					"VaccineName" : "MENACTRA"
				}, {
					"Cvx" : "114",
					"DateAdministered" : "2011-06-21T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "MENACTRA"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0498",
		"TestCaseName" : "#1 @ 11 yrs - 5 days, #2 @ 11 yrs, 8 weeks",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-06-21T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2011-08-16T00:00:00",
			"EvaluationTestType" : "Age: Below Absolute Minimum",
			"ForecastNumber" : 2,
			"ForecastTestType" : "Recommended based on minimum interval from invalid dose",
			"PastDueDate" : "2022-05-01T00:00:00",
			"RecommendedDate" : "2016-05-01T00:00:00",
			"VaccineGroup" : "MCV"
		},
		"PatientProfile" : {
			"Dob" : "2000-05-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "114",
					"DateAdministered" : "2011-04-25T00:00:00",
					"EvaluationReason" : "Age: Too Young",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : "PMC",
					"VaccineName" : "MENACTRA"
				}, {
					"Cvx" : "114",
					"DateAdministered" : "2011-06-21T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "valid",
					"Mvx" : "PMC",
					"VaccineName" : "MENACTRA"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0499",
		"TestCaseName" : "#1 @ 11 yrs - 4 days, MCV4",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-04-27T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2011-06-26T00:00:00",
			"EvaluationTestType" : "Age: At Absolute Minimum",
			"ForecastNumber" : 2,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2017-05-28T00:00:00",
			"RecommendedDate" : "2016-05-01T00:00:00",
			"VaccineGroup" : "MCV"
		},
		"PatientProfile" : {
			"Dob" : "2000-05-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "114",
					"DateAdministered" : "2011-04-27T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "MENACTRA"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0500",
		"TestCaseName" : "#1 @ 11 yrs - 5 days, MCV4",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-04-26T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2011-05-01T00:00:00",
			"EvaluationTestType" : "Age: Below Absolute Minimum",
			"ForecastNumber" : 1,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2013-05-28T00:00:00",
			"RecommendedDate" : "2011-05-01T00:00:00",
			"VaccineGroup" : "MCV"
		},
		"PatientProfile" : {
			"Dob" : "2000-05-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "114",
					"DateAdministered" : "2011-04-26T00:00:00",
					"EvaluationReason" : "Age: Too Young",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : "PMC",
					"VaccineName" : "MENACTRA"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0501",
		"TestCaseName" : "#1 @ 11 yrs - 5 days, #2 @ 11 yrs, 8 weeks - 4 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-06-22T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2011-08-17T00:00:00",
			"EvaluationTestType" : "Age: Below Absolute Minimum",
			"ForecastNumber" : 2,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2017-05-28T00:00:00",
			"RecommendedDate" : "2016-05-01T00:00:00",
			"VaccineGroup" : "MCV"
		},
		"PatientProfile" : {
			"Dob" : "2000-05-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "114",
					"DateAdministered" : "2011-04-26T00:00:00",
					"EvaluationReason" : "Age: Too Young",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : "PMC",
					"VaccineName" : "MENACTRA"
				}, {
					"Cvx" : "114",
					"DateAdministered" : "2011-06-22T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "valid",
					"Mvx" : "PMC",
					"VaccineName" : "MENACTRA"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0502",
		"TestCaseName" : "Newborn",
		"ExpectedForecast" : {
			"AssessmentDate" : "2012-02-01T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2023-02-01T00:00:00",
			"EvaluationTestType" : "No Doses Administered",
			"ForecastNumber" : 1,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2025-02-28T00:00:00",
			"RecommendedDate" : "2023-02-01T00:00:00",
			"VaccineGroup" : "MCV"
		},
		"PatientProfile" : {
			"Dob" : "2012-02-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : []
		}
	}, {
		"CdcTestId" : "2013-0503",
		"TestCaseName" : "Dose 1 to dose 2 interval 8 wks-5 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2006-05-17T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2006-07-12T00:00:00",
			"EvaluationTestType" : "Interval: Below Absolute Minimum",
			"ForecastNumber" : 2,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2012-02-02T00:00:00",
			"RecommendedDate" : "2011-01-06T00:00:00",
			"VaccineGroup" : "MCV"
		},
		"PatientProfile" : {
			"Dob" : "1995-01-06T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "147",
					"DateAdministered" : "2006-03-27T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "Meningococcal MCV4 Unspecified"
				}, {
					"Cvx" : "147",
					"DateAdministered" : "2006-05-17T00:00:00",
					"EvaluationReason" : "Interval: Too Short",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : null,
					"VaccineName" : "Meningococcal MCV4 Unspecified"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0504",
		"TestCaseName" : "Dose 1 to dose 2 interval 8 wks-4 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-05-09T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "Interval: At Absolute Minimum",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: series complete",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "MCV"
		},
		"PatientProfile" : {
			"Dob" : "2000-03-18T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "147",
					"DateAdministered" : "2011-03-18T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "Meningococcal MCV4 Unspecified"
				}, {
					"Cvx" : "147",
					"DateAdministered" : "2011-05-09T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "Meningococcal MCV4 Unspecified"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0505",
		"TestCaseName" : "Dose 1 to dose 2 interval 8 weeks",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-07-15T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "Interval: At Minimum",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: series complete",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "MCV"
		},
		"PatientProfile" : {
			"Dob" : "2000-03-18T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "147",
					"DateAdministered" : "2011-05-20T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "Meningococcal MCV4 Unspecified"
				}, {
					"Cvx" : "147",
					"DateAdministered" : "2011-07-15T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "Meningococcal MCV4 Unspecified"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0506",
		"TestCaseName" : "Anaphylaxis to previous dose of MCV",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-03-15T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "All Valid: Forecast Test",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: contraindication",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "MCV"
		},
		"PatientProfile" : {
			"Dob" : "2000-02-26T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : "VXC20",
			"MedHistoryCodeSys" : "CDCPHINVS",
			"MedHistoryText" : "allergy to previous dose of this vaccine or to any of its unlisted vaccine components (anaphylactic)",
			"Series" : [{
					"Cvx" : "147",
					"DateAdministered" : "2011-03-15T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "Meningococcal MCV4 Unspecified"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0507",
		"TestCaseName" : "# 1 at age 11 years",
		"ExpectedForecast" : {
			"AssessmentDate" : "2007-09-06T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2007-11-01T00:00:00",
			"EvaluationTestType" : "Age: At Minimum",
			"ForecastNumber" : 2,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2013-10-03T00:00:00",
			"RecommendedDate" : "2012-09-06T00:00:00",
			"VaccineGroup" : "MCV"
		},
		"PatientProfile" : {
			"Dob" : "1996-09-06T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "147",
					"DateAdministered" : "2007-09-06T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "Meningococcal MCV4 Unspecified"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0508",
		"TestCaseName" : "age 22.  No doses; No forecast",
		"ExpectedForecast" : {
			"AssessmentDate" : "2012-01-07T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "No Doses Administered",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: too old",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "MCV"
		},
		"PatientProfile" : {
			"Dob" : "1990-01-07T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : []
		}
	}, {
		"CdcTestId" : "2013-0509",
		"TestCaseName" : "# 1 at age 15 years",
		"ExpectedForecast" : {
			"AssessmentDate" : "2010-04-29T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2010-06-24T00:00:00",
			"EvaluationTestType" : "All Valid: Forecast Test",
			"ForecastNumber" : 2,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2012-05-18T00:00:00",
			"RecommendedDate" : "2011-04-21T00:00:00",
			"VaccineGroup" : "MCV"
		},
		"PatientProfile" : {
			"Dob" : "1995-04-21T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "147",
					"DateAdministered" : "2010-04-29T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "Meningococcal MCV4 Unspecified"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0510",
		"TestCaseName" : "# 1 at age 16 years -5 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2010-08-17T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2010-10-12T00:00:00",
			"EvaluationTestType" : "All Valid: Forecast Test",
			"ForecastNumber" : 2,
			"ForecastTestType" : "Recommended based on minimum interval from previous dose (catch-up)",
			"PastDueDate" : "2011-09-18T00:00:00",
			"RecommendedDate" : "2010-10-12T00:00:00",
			"VaccineGroup" : "MCV"
		},
		"PatientProfile" : {
			"Dob" : "1994-08-22T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "147",
					"DateAdministered" : "2010-08-17T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "Meningococcal MCV4 Unspecified"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0511",
		"TestCaseName" : "# 1 at age 16 years -4 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2010-08-18T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "All Valid: Forecast Test",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: series complete",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "MCV"
		},
		"PatientProfile" : {
			"Dob" : "1994-08-22T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "147",
					"DateAdministered" : "2010-08-18T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "Meningococcal MCV4 Unspecified"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0512",
		"TestCaseName" : "# 1 at age 16 years",
		"ExpectedForecast" : {
			"AssessmentDate" : "2010-08-22T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "All Valid: Forecast Test",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: series complete",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "MCV"
		},
		"PatientProfile" : {
			"Dob" : "1994-08-22T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "147",
					"DateAdministered" : "2010-08-22T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "Meningococcal MCV4 Unspecified"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0513",
		"TestCaseName" : "# 2 at age 11 years +  8 weeks -5 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-05-08T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2011-07-03T00:00:00",
			"EvaluationTestType" : "Interval: Below Absolute Minimum",
			"ForecastNumber" : 2,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2017-04-14T00:00:00",
			"RecommendedDate" : "2016-03-18T00:00:00",
			"VaccineGroup" : "MCV"
		},
		"PatientProfile" : {
			"Dob" : "2000-03-18T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "147",
					"DateAdministered" : "2011-03-18T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "Meningococcal MCV4 Unspecified"
				}, {
					"Cvx" : "147",
					"DateAdministered" : "2011-05-08T00:00:00",
					"EvaluationReason" : "Interval: Too Short",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : null,
					"VaccineName" : "Meningococcal MCV4 Unspecified"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0514",
		"TestCaseName" : "# 2 at age 11 years +  8 weeks",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-05-13T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "Age: At Minimum",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: series complete",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "MCV"
		},
		"PatientProfile" : {
			"Dob" : "2000-03-18T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "147",
					"DateAdministered" : "2011-03-18T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "Meningococcal MCV4 Unspecified"
				}, {
					"Cvx" : "147",
					"DateAdministered" : "2011-05-13T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "Meningococcal MCV4 Unspecified"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0515",
		"TestCaseName" : "# 2 at age 16 years",
		"ExpectedForecast" : {
			"AssessmentDate" : "2010-04-09T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "Age: At Recommended",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: series complete",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "MCV"
		},
		"PatientProfile" : {
			"Dob" : "1994-04-09T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "147",
					"DateAdministered" : "2005-05-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "Meningococcal MCV4 Unspecified"
				}, {
					"Cvx" : "147",
					"DateAdministered" : "2010-04-09T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "Meningococcal MCV4 Unspecified"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0523",
		"TestCaseName" : "1 at 4Y -1D: MMR @4Y -1D <br /> w/ MMR(x1) <br /> (F.K.A. CDC #047)",
		"ExpectedForecast" : {
			"AssessmentDate" : "2001-06-14T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2001-07-12T00:00:00",
			"EvaluationTestType" : "All Valid: Forecast Test",
			"ForecastNumber" : 2,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2007-04-10T00:00:00",
			"RecommendedDate" : "2004-03-14T00:00:00",
			"VaccineGroup" : "MMR"
		},
		"PatientProfile" : {
			"Dob" : "2000-03-14T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "03",
					"DateAdministered" : "2001-06-14T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "M-M-R II"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0524",
		"TestCaseName" : "2 at 4Y: MMR @4Y <br /> w/ MMR(x2) <br /> (CDC #049)",
		"ExpectedForecast" : {
			"AssessmentDate" : "2004-03-14T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "Age: At Recommended",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: series complete",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "MMR"
		},
		"PatientProfile" : {
			"Dob" : "2000-03-14T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "03",
					"DateAdministered" : "2001-06-14T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "M-M-R II"
				}, {
					"Cvx" : "03",
					"DateAdministered" : "2004-03-14T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "M-M-R II"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0525",
		"TestCaseName" : "1 at 7Y 2M -6D: MMR @7Y 2M -6D <br /> w/ MMR(x1) <br /> (CDC #051)",
		"ExpectedForecast" : {
			"AssessmentDate" : "2007-03-14T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2007-04-11T00:00:00",
			"EvaluationTestType" : "All Valid: Forecast Test",
			"ForecastNumber" : 2,
			"ForecastTestType" : "Recommended based on minimum interval from previous dose (catch-up)",
			"PastDueDate" : "2007-04-11T00:00:00",
			"RecommendedDate" : "2007-04-11T00:00:00",
			"VaccineGroup" : "MMR"
		},
		"PatientProfile" : {
			"Dob" : "2000-03-14T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "03",
					"DateAdministered" : "2007-03-14T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "M-M-R II"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0527",
		"TestCaseName" : "1 at 2Y: ISLIVE: MMR",
		"ExpectedForecast" : {
			"AssessmentDate" : "2001-03-05T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2001-04-02T00:00:00",
			"EvaluationTestType" : "All Valid: Forecast Test",
			"ForecastNumber" : 2,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2006-04-01T00:00:00",
			"RecommendedDate" : "2003-03-05T00:00:00",
			"VaccineGroup" : "MMR"
		},
		"PatientProfile" : {
			"Dob" : "1999-03-05T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "03",
					"DateAdministered" : "2001-03-05T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "M-M-R II"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0528",
		"TestCaseName" : "5 single antigen doses: MMRSERIES: FIVESINGLEANTIGENS",
		"ExpectedForecast" : {
			"AssessmentDate" : "2004-05-02T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2004-05-30T00:00:00",
			"EvaluationTestType" : "Single Antigen Administration",
			"ForecastNumber" : 2,
			"ForecastTestType" : "Recommended based on minimum interval from live virus vaccine",
			"PastDueDate" : "2006-04-01T00:00:00",
			"RecommendedDate" : "2004-05-30T00:00:00",
			"VaccineGroup" : "MMR"
		},
		"PatientProfile" : {
			"Dob" : "1999-03-05T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "07",
					"DateAdministered" : "2000-03-05T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "MUMPSVAX"
				}, {
					"Cvx" : "06",
					"DateAdministered" : "2000-04-02T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "MERUVAX II"
				}, {
					"Cvx" : "05",
					"DateAdministered" : "2000-04-30T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "ATTENUVAX"
				}, {
					"Cvx" : "06",
					"DateAdministered" : "2004-04-02T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "MERUVAX II"
				}, {
					"Cvx" : "07",
					"DateAdministered" : "2004-05-02T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "MUMPSVAX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0530",
		"TestCaseName" : "4 single antigen doses: MMRSERIES: FOURSINGLEANTIGENT",
		"ExpectedForecast" : {
			"AssessmentDate" : "2004-03-05T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2004-04-02T00:00:00",
			"EvaluationTestType" : "Single Antigen Administration",
			"ForecastNumber" : 2,
			"ForecastTestType" : "Recommended based on minimum interval from live virus vaccine",
			"PastDueDate" : "2006-04-01T00:00:00",
			"RecommendedDate" : "2004-04-02T00:00:00",
			"VaccineGroup" : "MMR"
		},
		"PatientProfile" : {
			"Dob" : "1999-03-05T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "07",
					"DateAdministered" : "2000-03-05T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "MUMPSVAX"
				}, {
					"Cvx" : "06",
					"DateAdministered" : "2000-04-02T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "MERUVAX II"
				}, {
					"Cvx" : "05",
					"DateAdministered" : "2000-04-30T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "ATTENUVAX"
				}, {
					"Cvx" : "07",
					"DateAdministered" : "2004-03-05T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "MUMPSVAX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0531",
		"TestCaseName" : "1 at 12M: MMRSERIES: MEASLESONLY",
		"ExpectedForecast" : {
			"AssessmentDate" : "2001-03-05T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2001-04-02T00:00:00",
			"EvaluationTestType" : "Single Antigen Administration",
			"ForecastNumber" : 1,
			"ForecastTestType" : "Recommended based on minimum interval from live virus vaccine",
			"PastDueDate" : "2001-08-01T00:00:00",
			"RecommendedDate" : "2001-04-02T00:00:00",
			"VaccineGroup" : "MMR"
		},
		"PatientProfile" : {
			"Dob" : "2000-03-05T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "05",
					"DateAdministered" : "2001-03-05T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "ATTENUVAX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0532",
		"TestCaseName" : "1 at 14M: MMRSERIES: MMR1",
		"ExpectedForecast" : {
			"AssessmentDate" : "2001-05-05T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2001-06-02T00:00:00",
			"EvaluationTestType" : "All Valid: Forecast Test",
			"ForecastNumber" : 2,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2007-04-01T00:00:00",
			"RecommendedDate" : "2004-03-05T00:00:00",
			"VaccineGroup" : "MMR"
		},
		"PatientProfile" : {
			"Dob" : "2000-03-05T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "03",
					"DateAdministered" : "2001-05-05T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "M-M-R II"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0534",
		"TestCaseName" : "2 single antigen doses: MMRSERIES: RUBELLA+MEASLES",
		"ExpectedForecast" : {
			"AssessmentDate" : "2001-04-13T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2001-05-11T00:00:00",
			"EvaluationTestType" : "Single Antigen Administration",
			"ForecastNumber" : 1,
			"ForecastTestType" : "Recommended based on minimum interval from live virus vaccine",
			"PastDueDate" : "2001-08-01T00:00:00",
			"RecommendedDate" : "2001-05-11T00:00:00",
			"VaccineGroup" : "MMR"
		},
		"PatientProfile" : {
			"Dob" : "2000-03-05T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "05",
					"DateAdministered" : "2001-03-05T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "ATTENUVAX"
				}, {
					"Cvx" : "07",
					"DateAdministered" : "2001-04-13T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "MUMPSVAX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0535",
		"TestCaseName" : "7 single antigen doses: MMRSERIES: SEVENSINGLEANTIGEN",
		"ExpectedForecast" : {
			"AssessmentDate" : "2004-06-04T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "Single Antigen Administration",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: series complete",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "MMR"
		},
		"PatientProfile" : {
			"Dob" : "1999-03-05T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "07",
					"DateAdministered" : "2000-03-05T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "MUMPSVAX"
				}, {
					"Cvx" : "06",
					"DateAdministered" : "2000-04-02T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "MERUVAX II"
				}, {
					"Cvx" : "05",
					"DateAdministered" : "2000-04-30T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "ATTENUVAX"
				}, {
					"Cvx" : "07",
					"DateAdministered" : "2004-03-05T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "MUMPSVAX"
				}, {
					"Cvx" : "06",
					"DateAdministered" : "2004-04-02T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "MERUVAX II"
				}, {
					"Cvx" : "07",
					"DateAdministered" : "2004-04-30T00:00:00",
					"EvaluationReason" : "Series Already Complete",
					"EvaluationStatus" : "Extraneous",
					"Mvx" : "MSD",
					"VaccineName" : "MUMPSVAX"
				}, {
					"Cvx" : "05",
					"DateAdministered" : "2004-06-04T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "ATTENUVAX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0536",
		"TestCaseName" : "3 single antigen doses: MMRSERIES: SINGLEANTIGEN",
		"ExpectedForecast" : {
			"AssessmentDate" : "2001-06-28T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2001-07-26T00:00:00",
			"EvaluationTestType" : "Single Antigen Administration",
			"ForecastNumber" : 2,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2007-04-01T00:00:00",
			"RecommendedDate" : "2004-03-05T00:00:00",
			"VaccineGroup" : "MMR"
		},
		"PatientProfile" : {
			"Dob" : "2000-03-05T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "07",
					"DateAdministered" : "2001-03-05T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "MUMPSVAX"
				}, {
					"Cvx" : "06",
					"DateAdministered" : "2001-04-05T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "MERUVAX II"
				}, {
					"Cvx" : "05",
					"DateAdministered" : "2001-06-28T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "ATTENUVAX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0537",
		"TestCaseName" : "3 single antigen doses: MMRSERIES: SINGLEANTIGENSAMEDAY",
		"ExpectedForecast" : {
			"AssessmentDate" : "2000-03-05T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2000-04-02T00:00:00",
			"EvaluationTestType" : "Single Antigen Administration",
			"ForecastNumber" : 2,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2006-04-01T00:00:00",
			"RecommendedDate" : "2003-03-05T00:00:00",
			"VaccineGroup" : "MMR"
		},
		"PatientProfile" : {
			"Dob" : "1999-03-05T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "07",
					"DateAdministered" : "2000-03-05T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "MUMPSVAX"
				}, {
					"Cvx" : "06",
					"DateAdministered" : "2000-03-05T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "MERUVAX II"
				}, {
					"Cvx" : "05",
					"DateAdministered" : "2000-03-05T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "ATTENUVAX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0538",
		"TestCaseName" : "6 single antigen doses: MMRSERIES: SIXSINGLEANTIGEN",
		"ExpectedForecast" : {
			"AssessmentDate" : "2004-04-30T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "Single Antigen Administration",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: series complete",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "MMR"
		},
		"PatientProfile" : {
			"Dob" : "1999-03-05T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "07",
					"DateAdministered" : "2000-03-05T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "MUMPSVAX"
				}, {
					"Cvx" : "06",
					"DateAdministered" : "2000-04-02T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "MERUVAX II"
				}, {
					"Cvx" : "05",
					"DateAdministered" : "2000-04-30T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "ATTENUVAX"
				}, {
					"Cvx" : "07",
					"DateAdministered" : "2004-03-05T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "MUMPSVAX"
				}, {
					"Cvx" : "06",
					"DateAdministered" : "2004-04-02T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "MERUVAX II"
				}, {
					"Cvx" : "05",
					"DateAdministered" : "2004-04-30T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "ATTENUVAX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0539",
		"TestCaseName" : "3 single antigen doses: MMRSERIES: TWOMEASLES; ONERUBELLA",
		"ExpectedForecast" : {
			"AssessmentDate" : "2002-02-17T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2002-03-17T00:00:00",
			"EvaluationTestType" : "Single Antigen Administration",
			"ForecastNumber" : 1,
			"ForecastTestType" : "Recommended based on minimum interval from live virus vaccine",
			"PastDueDate" : "2002-03-17T00:00:00",
			"RecommendedDate" : "2002-03-17T00:00:00",
			"VaccineGroup" : "MMR"
		},
		"PatientProfile" : {
			"Dob" : "2000-03-05T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "05",
					"DateAdministered" : "2001-04-13T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "ATTENUVAX"
				}, {
					"Cvx" : "06",
					"DateAdministered" : "2001-09-30T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "MERUVAX II"
				}, {
					"Cvx" : "05",
					"DateAdministered" : "2002-02-17T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "ATTENUVAX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0540",
		"TestCaseName" : "MMR # 1 at 12 months-5 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2001-03-09T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2001-04-06T00:00:00",
			"EvaluationTestType" : "Age: Below Absolute Minimum",
			"ForecastNumber" : 1,
			"ForecastTestType" : "Recommended based on minimum interval from live virus vaccine",
			"PastDueDate" : "2001-08-10T00:00:00",
			"RecommendedDate" : "2001-04-06T00:00:00",
			"VaccineGroup" : "MMR"
		},
		"PatientProfile" : {
			"Dob" : "2000-03-14T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "03",
					"DateAdministered" : "2001-03-09T00:00:00",
					"EvaluationReason" : "Age: Too Young",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : "MSD",
					"VaccineName" : "M-M-R II"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0541",
		"TestCaseName" : "MMR # 1 at 12 months-4 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2001-03-10T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2001-04-14T00:00:00",
			"EvaluationTestType" : "Age: At Absolute Minimum",
			"ForecastNumber" : 2,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2007-04-10T00:00:00",
			"RecommendedDate" : "2004-03-14T00:00:00",
			"VaccineGroup" : "MMR"
		},
		"PatientProfile" : {
			"Dob" : "2000-03-14T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "03",
					"DateAdministered" : "2001-03-10T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "M-M-R II"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0542",
		"TestCaseName" : "MMR # 1 at 12 months",
		"ExpectedForecast" : {
			"AssessmentDate" : "2001-03-14T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2001-04-14T00:00:00",
			"EvaluationTestType" : "Age: At Minimum",
			"ForecastNumber" : 2,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2007-04-10T00:00:00",
			"RecommendedDate" : "2004-03-14T00:00:00",
			"VaccineGroup" : "MMR"
		},
		"PatientProfile" : {
			"Dob" : "2000-03-14T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "03",
					"DateAdministered" : "2001-03-14T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "M-M-R II"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0543",
		"TestCaseName" : "Newborn forecasting",
		"ExpectedForecast" : {
			"AssessmentDate" : "2012-02-01T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2013-02-01T00:00:00",
			"EvaluationTestType" : "No Doses Administered",
			"ForecastNumber" : 1,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2013-06-28T00:00:00",
			"RecommendedDate" : "2013-02-01T00:00:00",
			"VaccineGroup" : "MMR"
		},
		"PatientProfile" : {
			"Dob" : "2012-02-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : []
		}
	}, {
		"CdcTestId" : "2013-0544",
		"TestCaseName" : "Dose 1 to dose 2 interval 28 days ",
		"ExpectedForecast" : {
			"AssessmentDate" : "2006-05-29T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "Interval: At Minimum",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: series complete",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "MMR"
		},
		"PatientProfile" : {
			"Dob" : "2004-05-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "03",
					"DateAdministered" : "2006-05-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "M-M-R II"
				}, {
					"Cvx" : "03",
					"DateAdministered" : "2006-05-29T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "M-M-R II"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0545",
		"TestCaseName" : "MMR and VZ given at age 12 months",
		"ExpectedForecast" : {
			"AssessmentDate" : "2005-08-08T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2005-09-08T00:00:00",
			"EvaluationTestType" : "Age: At Minimum",
			"ForecastNumber" : 2,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2011-09-04T00:00:00",
			"RecommendedDate" : "2008-08-08T00:00:00",
			"VaccineGroup" : "MMR"
		},
		"PatientProfile" : {
			"Dob" : "2004-08-08T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "03",
					"DateAdministered" : "2005-08-08T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "M-M-R II"
				}, {
					"Cvx" : "21",
					"DateAdministered" : "2005-08-08T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "VARIVAX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0546",
		"TestCaseName" : "Doses 1 and 2 of MMR and VZ at ages 12 and 13 months",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-07-14T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "Age: At Minimum",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: series complete",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "MMR"
		},
		"PatientProfile" : {
			"Dob" : "2010-06-14T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "03",
					"DateAdministered" : "2011-06-14T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "M-M-R II"
				}, {
					"Cvx" : "21",
					"DateAdministered" : "2011-06-14T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "VARIVAX"
				}, {
					"Cvx" : "03",
					"DateAdministered" : "2011-07-14T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "M-M-R II"
				}, {
					"Cvx" : "21",
					"DateAdministered" : "2011-07-14T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "VARIVAX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0547",
		"TestCaseName" : "VZ to MMR interval 28-1 day = invalid MMR",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-12-30T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2012-01-27T00:00:00",
			"EvaluationTestType" : "Live Virus: Below Minimum",
			"ForecastNumber" : 1,
			"ForecastTestType" : "Recommended based on minimum interval from live virus vaccine",
			"PastDueDate" : "2012-04-28T00:00:00",
			"RecommendedDate" : "2012-01-27T00:00:00",
			"VaccineGroup" : "MMR"
		},
		"PatientProfile" : {
			"Dob" : "2010-12-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "21",
					"DateAdministered" : "2011-12-03T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "VARIVAX"
				}, {
					"Cvx" : "03",
					"DateAdministered" : "2011-12-30T00:00:00",
					"EvaluationReason" : "Live Virus Conflict",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : "MSD",
					"VaccineName" : "M-M-R II"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0548",
		"TestCaseName" : "VZ given at age 12 mo; MMR at age 12 mo+28 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2010-11-10T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2010-12-08T00:00:00",
			"EvaluationTestType" : "Live Virus: At Minimum",
			"ForecastNumber" : 2,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2016-11-09T00:00:00",
			"RecommendedDate" : "2013-10-13T00:00:00",
			"VaccineGroup" : "MMR"
		},
		"PatientProfile" : {
			"Dob" : "2009-10-13T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "21",
					"DateAdministered" : "2010-10-13T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "VARIVAX"
				}, {
					"Cvx" : "03",
					"DateAdministered" : "2010-11-10T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "M-M-R II"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0549",
		"TestCaseName" : "Dose 1 MMRV at 12 m-5 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2010-11-05T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2010-12-03T00:00:00",
			"EvaluationTestType" : "Age: Below Absolute Minimum",
			"ForecastNumber" : 1,
			"ForecastTestType" : "Recommended based on minimum interval from live virus vaccine",
			"PastDueDate" : "2011-04-06T00:00:00",
			"RecommendedDate" : "2010-12-03T00:00:00",
			"VaccineGroup" : "MMR"
		},
		"PatientProfile" : {
			"Dob" : "2009-11-10T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "94",
					"DateAdministered" : "2010-11-05T00:00:00",
					"EvaluationReason" : "Age: Too Young",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : "MSD",
					"VaccineName" : "PROQUAD"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0550",
		"TestCaseName" : "Dose 1 MMRV at 12 m-4 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2006-06-27T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2006-08-01T00:00:00",
			"EvaluationTestType" : "Age: At Absolute Minimum",
			"ForecastNumber" : 2,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2012-07-28T00:00:00",
			"RecommendedDate" : "2009-07-01T00:00:00",
			"VaccineGroup" : "MMR"
		},
		"PatientProfile" : {
			"Dob" : "2005-07-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "94",
					"DateAdministered" : "2006-06-27T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "PROQUAD"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0551",
		"TestCaseName" : "Dose 1 to dose 2 MMRV interval 28 days age < 15 months old= valid MMR",
		"ExpectedForecast" : {
			"AssessmentDate" : "2005-05-29T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "Interval: At Minimum",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: series complete",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "MMR"
		},
		"PatientProfile" : {
			"Dob" : "2004-05-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "94",
					"DateAdministered" : "2005-05-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "PROQUAD"
				}, {
					"Cvx" : "94",
					"DateAdministered" : "2005-05-29T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "PROQUAD"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0552",
		"TestCaseName" : "Dose 1 to 2 MMRV interval 28 days in child ≥ 15 months old=valid MMR",
		"ExpectedForecast" : {
			"AssessmentDate" : "2007-05-29T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "Interval: At Minimum",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: series complete",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "MMR"
		},
		"PatientProfile" : {
			"Dob" : "2004-05-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "94",
					"DateAdministered" : "2007-05-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "PROQUAD"
				}, {
					"Cvx" : "94",
					"DateAdministered" : "2007-05-29T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "PROQUAD"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0553",
		"TestCaseName" : "Dose 1 at age 12 mo-5 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2009-11-05T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2009-12-03T00:00:00",
			"EvaluationTestType" : "Age: Below Absolute Minimum",
			"ForecastNumber" : 1,
			"ForecastTestType" : "Recommended based on minimum interval from live virus vaccine",
			"PastDueDate" : "2010-04-06T00:00:00",
			"RecommendedDate" : "2009-12-03T00:00:00",
			"VaccineGroup" : "MMR"
		},
		"PatientProfile" : {
			"Dob" : "2008-11-10T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "03",
					"DateAdministered" : "2009-11-05T00:00:00",
					"EvaluationReason" : "Age: Too Young",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : "MSD",
					"VaccineName" : "M-M-R II"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0554",
		"TestCaseName" : "Dose 1 to 2 MMRV interval 28-4 days=neither MMR nor VZ valid as second dose",
		"ExpectedForecast" : {
			"AssessmentDate" : "2005-09-30T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2005-10-28T00:00:00",
			"EvaluationTestType" : "Interval: Below Absolute Minimum",
			"ForecastNumber" : 2,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2011-10-03T00:00:00",
			"RecommendedDate" : "2008-09-06T00:00:00",
			"VaccineGroup" : "MMR"
		},
		"PatientProfile" : {
			"Dob" : "2004-09-06T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "94",
					"DateAdministered" : "2005-09-06T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "PROQUAD"
				}, {
					"Cvx" : "94",
					"DateAdministered" : "2005-09-30T00:00:00",
					"EvaluationReason" : "Interval: Too Short",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : "MSD",
					"VaccineName" : "PROQUAD"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0555",
		"TestCaseName" : "MMR to MMRV interval 28 days=valid MMR # 2 ",
		"ExpectedForecast" : {
			"AssessmentDate" : "2006-03-02T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "Interval: At Minimum",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: series complete",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "MMR"
		},
		"PatientProfile" : {
			"Dob" : "2005-02-02T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "03",
					"DateAdministered" : "2006-02-02T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "M-M-R II"
				}, {
					"Cvx" : "94",
					"DateAdministered" : "2006-03-02T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "PROQUAD"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0556",
		"TestCaseName" : "MMR to MMRV interval 24 days=valid MMR # 2",
		"ExpectedForecast" : {
			"AssessmentDate" : "2006-02-26T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "Interval: At Absolute Minimum",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: series complete",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "MMR"
		},
		"PatientProfile" : {
			"Dob" : "2005-01-02T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "03",
					"DateAdministered" : "2006-02-02T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "M-M-R II"
				}, {
					"Cvx" : "94",
					"DateAdministered" : "2006-02-26T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "PROQUAD"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0557",
		"TestCaseName" : "MMRV to MMR interval 28 days=valid MMR dose 2",
		"ExpectedForecast" : {
			"AssessmentDate" : "2006-03-30T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "Interval: At Minimum",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: series complete",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "MMR"
		},
		"PatientProfile" : {
			"Dob" : "2005-02-02T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "94",
					"DateAdministered" : "2006-03-02T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "PROQUAD"
				}, {
					"Cvx" : "03",
					"DateAdministered" : "2006-03-30T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "M-M-R II"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0558",
		"TestCaseName" : "Dose 1 to dose 2 interval 4 wks between VZ and MMRV in any age child=valid MMR",
		"ExpectedForecast" : {
			"AssessmentDate" : "2006-06-29T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2006-07-27T00:00:00",
			"EvaluationTestType" : "Interval: At Minimum",
			"ForecastNumber" : 2,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2012-06-18T00:00:00",
			"RecommendedDate" : "2009-05-22T00:00:00",
			"VaccineGroup" : "MMR"
		},
		"PatientProfile" : {
			"Dob" : "2005-05-22T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "21",
					"DateAdministered" : "2006-06-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "VARIVAX"
				}, {
					"Cvx" : "94",
					"DateAdministered" : "2006-06-29T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "PROQUAD"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0559",
		"TestCaseName" : "28 day interval between invalid VZ and subsequent MMRV=valid MMR and VZ",
		"ExpectedForecast" : {
			"AssessmentDate" : "2006-06-14T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2006-07-12T00:00:00",
			"EvaluationTestType" : "Live Virus: At Minimum",
			"ForecastNumber" : 2,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2012-06-18T00:00:00",
			"RecommendedDate" : "2009-05-22T00:00:00",
			"VaccineGroup" : "MMR"
		},
		"PatientProfile" : {
			"Dob" : "2005-05-22T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "21",
					"DateAdministered" : "2006-05-17T00:00:00",
					"EvaluationReason" : "Age: Too Young",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : "MSD",
					"VaccineName" : "VARIVAX"
				}, {
					"Cvx" : "94",
					"DateAdministered" : "2006-06-14T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "PROQUAD"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0562",
		"TestCaseName" : "Interval of < 24 days between an invalid MMR and a subsequent MMRV=no valid MMR's",
		"ExpectedForecast" : {
			"AssessmentDate" : "2006-08-03T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2006-08-31T00:00:00",
			"EvaluationTestType" : "Live Virus: Below Minimum",
			"ForecastNumber" : 1,
			"ForecastTestType" : "Recommended based on minimum interval from live virus vaccine",
			"PastDueDate" : "2006-12-13T00:00:00",
			"RecommendedDate" : "2006-08-31T00:00:00",
			"VaccineGroup" : "MMR"
		},
		"PatientProfile" : {
			"Dob" : "2005-07-16T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "03",
					"DateAdministered" : "2006-07-11T00:00:00",
					"EvaluationReason" : "Age: Too Young",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : "MSD",
					"VaccineName" : "M-M-R II"
				}, {
					"Cvx" : "94",
					"DateAdministered" : "2006-08-03T00:00:00",
					"EvaluationReason" : "Live Virus Conflict",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : "MSD",
					"VaccineName" : "PROQUAD"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0563",
		"TestCaseName" : "Interval of < 24 days between an invalid VZ and a subsequent MMRV=no valid MMR or VZ",
		"ExpectedForecast" : {
			"AssessmentDate" : "2006-08-03T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2006-08-31T00:00:00",
			"EvaluationTestType" : "Live Virus: Below Minimum",
			"ForecastNumber" : 1,
			"ForecastTestType" : "Recommended based on minimum interval from live virus vaccine",
			"PastDueDate" : "2006-12-13T00:00:00",
			"RecommendedDate" : "2006-08-31T00:00:00",
			"VaccineGroup" : "MMR"
		},
		"PatientProfile" : {
			"Dob" : "2005-07-16T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "21",
					"DateAdministered" : "2006-07-11T00:00:00",
					"EvaluationReason" : "Age: Too Young",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : "MSD",
					"VaccineName" : "VARIVAX"
				}, {
					"Cvx" : "94",
					"DateAdministered" : "2006-08-03T00:00:00",
					"EvaluationReason" : "Live Virus Conflict",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : "MSD",
					"VaccineName" : "PROQUAD"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0564",
		"TestCaseName" : "Dose 1 at age 12 mo-4 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2005-06-27T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2005-08-01T00:00:00",
			"EvaluationTestType" : "Age: At Absolute Minimum",
			"ForecastNumber" : 2,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2011-07-28T00:00:00",
			"RecommendedDate" : "2008-07-01T00:00:00",
			"VaccineGroup" : "MMR"
		},
		"PatientProfile" : {
			"Dob" : "2004-07-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "03",
					"DateAdministered" : "2005-06-27T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "M-M-R II"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0565",
		"TestCaseName" : "Correctly administered single antigen M, M and R followed by MMR=series complete",
		"ExpectedForecast" : {
			"AssessmentDate" : "2007-09-15T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "Single Antigen Administration",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: series complete",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "MMR"
		},
		"PatientProfile" : {
			"Dob" : "2004-09-09T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "07",
					"DateAdministered" : "2005-11-15T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "MUMPSVAX"
				}, {
					"Cvx" : "06",
					"DateAdministered" : "2006-01-15T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "MERUVAX II"
				}, {
					"Cvx" : "05",
					"DateAdministered" : "2006-09-15T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "ATTENUVAX"
				}, {
					"Cvx" : "03",
					"DateAdministered" : "2007-09-15T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "M-M-R II"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0566",
		"TestCaseName" : "Hx of measles. Child  still needs MMR",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-01-01T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2011-04-07T00:00:00",
			"EvaluationTestType" : "No Doses Administered",
			"ForecastNumber" : 1,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2011-09-03T00:00:00",
			"RecommendedDate" : "2011-04-07T00:00:00",
			"VaccineGroup" : "MMR"
		},
		"PatientProfile" : {
			"Dob" : "2010-04-07T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : "14189004",
			"MedHistoryCodeSys" : "SCT",
			"MedHistoryText" : "History of measles infection",
			"Series" : []
		}
	}, {
		"CdcTestId" : "2013-0567",
		"TestCaseName" : "Anaphylactic reaction to dose 1 of MMR.  No forecast for additional dose. ",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-09-02T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "All Valid: Forecast Test",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: contraindication",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "MMR"
		},
		"PatientProfile" : {
			"Dob" : "2010-08-13T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : "VXC20",
			"MedHistoryCodeSys" : "CDCPHINVS",
			"MedHistoryText" : "allergy to previous dose of this vaccine or to any of its unlisted vaccine components (anaphylactic)",
			"Series" : [{
					"Cvx" : "03",
					"DateAdministered" : "2011-09-02T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "M-M-R II"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0568",
		"TestCaseName" : "Diagnosis of severe immunodeficiency.  No forecast for MMR. ",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-09-10T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "No Doses Administered",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: contraindication",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "MMR"
		},
		"PatientProfile" : {
			"Dob" : "2011-09-10T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : "VXC27",
			"MedHistoryCodeSys" : "CDCPHINVS",
			"MedHistoryText" : "immunodeficiency due to any cause, including HIV (hematologic and solid tumors, congenital immunodeficiency, long-term immunosuppressive therapy, including steroids)",
			"Series" : []
		}
	}, {
		"CdcTestId" : "2013-0569",
		"TestCaseName" : "Dose 1 at age 12 mo",
		"ExpectedForecast" : {
			"AssessmentDate" : "2008-07-07T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2008-08-07T00:00:00",
			"EvaluationTestType" : "Age: At Minimum",
			"ForecastNumber" : 2,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2014-08-03T00:00:00",
			"RecommendedDate" : "2011-07-07T00:00:00",
			"VaccineGroup" : "MMR"
		},
		"PatientProfile" : {
			"Dob" : "2007-07-07T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "03",
					"DateAdministered" : "2008-07-07T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "M-M-R II"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0570",
		"TestCaseName" : "Dose 2 at age 13 mo -5 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2008-08-27T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2008-09-24T00:00:00",
			"EvaluationTestType" : "Age: Below Absolute Minimum",
			"ForecastNumber" : 2,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2014-08-28T00:00:00",
			"RecommendedDate" : "2011-08-01T00:00:00",
			"VaccineGroup" : "MMR"
		},
		"PatientProfile" : {
			"Dob" : "2007-08-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "03",
					"DateAdministered" : "2008-07-29T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "M-M-R II"
				}, {
					"Cvx" : "03",
					"DateAdministered" : "2008-08-27T00:00:00",
					"EvaluationReason" : "Age: Too Young",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : "MSD",
					"VaccineName" : "M-M-R II"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0571",
		"TestCaseName" : "Dose 2 at age 13 mo - 4 days ",
		"ExpectedForecast" : {
			"AssessmentDate" : "2008-08-28T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "Age: At Absolute Minimum",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: series complete",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "MMR"
		},
		"PatientProfile" : {
			"Dob" : "2007-08-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "03",
					"DateAdministered" : "2008-08-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "M-M-R II"
				}, {
					"Cvx" : "03",
					"DateAdministered" : "2008-08-28T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "M-M-R II"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0572",
		"TestCaseName" : "Dose 2 at age 13 mo ",
		"ExpectedForecast" : {
			"AssessmentDate" : "2008-09-01T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "Age: At Minimum",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: series complete",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "MMR"
		},
		"PatientProfile" : {
			"Dob" : "2007-08-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "03",
					"DateAdministered" : "2008-08-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "M-M-R II"
				}, {
					"Cvx" : "03",
					"DateAdministered" : "2008-09-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "M-M-R II"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0573",
		"TestCaseName" : "Dose 1 to dose 2 interval 28 days-5 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2006-07-28T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2006-08-25T00:00:00",
			"EvaluationTestType" : "Interval: Below Absolute Minimum",
			"ForecastNumber" : 2,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2011-05-10T00:00:00",
			"RecommendedDate" : "2008-04-13T00:00:00",
			"VaccineGroup" : "MMR"
		},
		"PatientProfile" : {
			"Dob" : "2004-04-13T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "03",
					"DateAdministered" : "2006-07-05T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "M-M-R II"
				}, {
					"Cvx" : "03",
					"DateAdministered" : "2006-07-28T00:00:00",
					"EvaluationReason" : "Interval: Too Short",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : "MSD",
					"VaccineName" : "M-M-R II"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0574",
		"TestCaseName" : "Dose 1 to dose 2 interval 28-4 days ",
		"ExpectedForecast" : {
			"AssessmentDate" : "2005-05-25T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "Interval: At Absolute Minimum",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: series complete",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "MMR"
		},
		"PatientProfile" : {
			"Dob" : "2004-04-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "03",
					"DateAdministered" : "2005-05-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "M-M-R II"
				}, {
					"Cvx" : "03",
					"DateAdministered" : "2005-05-25T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "M-M-R II"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0575",
		"TestCaseName" : "Newborn Testing",
		"ExpectedForecast" : {
			"AssessmentDate" : "2012-02-01T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2012-03-14T00:00:00",
			"EvaluationTestType" : "No Doses Administered",
			"ForecastNumber" : 1,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2012-05-28T00:00:00",
			"RecommendedDate" : "2012-04-01T00:00:00",
			"VaccineGroup" : "PCV"
		},
		"PatientProfile" : {
			"Dob" : "2012-02-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : []
		}
	}, {
		"CdcTestId" : "2013-0576",
		"TestCaseName" : "Dose # 1 PCV 13 at age 18 months",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-04-10T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2011-06-05T00:00:00",
			"EvaluationTestType" : "All Valid: Forecast Test",
			"ForecastNumber" : 2,
			"ForecastTestType" : "Recommended based on minimum interval from previous dose (catch-up)",
			"PastDueDate" : "2011-06-05T00:00:00",
			"RecommendedDate" : "2011-06-05T00:00:00",
			"VaccineGroup" : "PCV"
		},
		"PatientProfile" : {
			"Dob" : "2009-10-10T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "133",
					"DateAdministered" : "2011-04-10T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PFR",
					"VaccineName" : "PREVNAR 13"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0577",
		"TestCaseName" : "Dose # 1 of PCV 7 at age 24 months.  Need one dose PCV 13. ",
		"ExpectedForecast" : {
			"AssessmentDate" : "2010-03-01T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2010-04-26T00:00:00",
			"EvaluationTestType" : "All Valid: Forecast Test",
			"ForecastNumber" : 1,
			"ForecastTestType" : "Recommended based on minimum interval from invalid dose",
			"PastDueDate" : "2010-04-26T00:00:00",
			"RecommendedDate" : "2010-04-26T00:00:00",
			"VaccineGroup" : "PCV"
		},
		"PatientProfile" : {
			"Dob" : "2008-03-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "100",
					"DateAdministered" : "2010-03-01T00:00:00",
					"EvaluationReason" : "Vaccine: Invalid Usage",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : "WAL",
					"VaccineName" : "PREVNAR 7"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0578",
		"TestCaseName" : "Dose # 1 of PCV 13 at age 24 months.  Series complete.",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-07-10T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "All Valid: Forecast Test",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: series complete",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "PCV"
		},
		"PatientProfile" : {
			"Dob" : "2009-07-10T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "133",
					"DateAdministered" : "2011-07-10T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PFR",
					"VaccineName" : "PREVNAR 13"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0579",
		"TestCaseName" : "Dose # 2 PCV 13 at age 10 weeks-5 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2010-11-14T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2010-12-12T00:00:00",
			"EvaluationTestType" : "Age: Below Absolute Minimum",
			"ForecastNumber" : 2,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2011-03-09T00:00:00",
			"RecommendedDate" : "2011-01-10T00:00:00",
			"VaccineGroup" : "PCV"
		},
		"PatientProfile" : {
			"Dob" : "2010-09-10T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "133",
					"DateAdministered" : "2010-10-18T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PFR",
					"VaccineName" : "PREVNAR 13"
				}, {
					"Cvx" : "133",
					"DateAdministered" : "2010-11-14T00:00:00",
					"EvaluationReason" : "Age: Too Young",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : "PFR",
					"VaccineName" : "PREVNAR 13"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0580",
		"TestCaseName" : "Dose # 2 PCV 13 at age 10 weeks-4 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-05-03T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2011-06-04T00:00:00",
			"EvaluationTestType" : "Age: At Absolute Minimum",
			"ForecastNumber" : 3,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2011-10-23T00:00:00",
			"RecommendedDate" : "2011-08-26T00:00:00",
			"VaccineGroup" : "PCV"
		},
		"PatientProfile" : {
			"Dob" : "2011-02-26T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "133",
					"DateAdministered" : "2011-04-06T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PFR",
					"VaccineName" : "PREVNAR 13"
				}, {
					"Cvx" : "133",
					"DateAdministered" : "2011-05-03T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PFR",
					"VaccineName" : "PREVNAR 13"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0581",
		"TestCaseName" : "Dose PCV 13 # 2 at age 10 weeks",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-05-07T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2011-06-04T00:00:00",
			"EvaluationTestType" : "Age: At Minimum",
			"ForecastNumber" : 3,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2011-10-23T00:00:00",
			"RecommendedDate" : "2011-08-26T00:00:00",
			"VaccineGroup" : "PCV"
		},
		"PatientProfile" : {
			"Dob" : "2011-02-26T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "133",
					"DateAdministered" : "2011-04-09T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PFR",
					"VaccineName" : "PREVNAR 13"
				}, {
					"Cvx" : "133",
					"DateAdministered" : "2011-05-07T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PFR",
					"VaccineName" : "PREVNAR 13"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0582",
		"TestCaseName" : "Dose # 2 PCV 13 at age 4 months",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-12-01T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2011-12-29T00:00:00",
			"EvaluationTestType" : "Age: At Recommended",
			"ForecastNumber" : 3,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2012-03-28T00:00:00",
			"RecommendedDate" : "2012-02-01T00:00:00",
			"VaccineGroup" : "PCV"
		},
		"PatientProfile" : {
			"Dob" : "2011-08-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "133",
					"DateAdministered" : "2011-10-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PFR",
					"VaccineName" : "PREVNAR 13"
				}, {
					"Cvx" : "133",
					"DateAdministered" : "2011-12-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PFR",
					"VaccineName" : "PREVNAR 13"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0583",
		"TestCaseName" : "Dose # 1 PCV 13 at  age7 months, dose # 2 at age 8 mos and current age ≥ 12 mos.",
		"ExpectedForecast" : {
			"AssessmentDate" : "2012-02-01T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2012-02-01T00:00:00",
			"EvaluationTestType" : "All Valid: Forecast Test",
			"ForecastNumber" : 3,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2012-06-28T00:00:00",
			"RecommendedDate" : "2012-02-01T00:00:00",
			"VaccineGroup" : "PCV"
		},
		"PatientProfile" : {
			"Dob" : "2011-02-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "133",
					"DateAdministered" : "2011-09-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PFR",
					"VaccineName" : "PREVNAR 13"
				}, {
					"Cvx" : "133",
					"DateAdministered" : "2011-10-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PFR",
					"VaccineName" : "PREVNAR 13"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0584",
		"TestCaseName" : "Dose # 1 PCV 13 at 12 mo; dose # 2 at 1 yr 8 wks-5 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-03-24T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2011-05-19T00:00:00",
			"EvaluationTestType" : "Interval: Below Absolute Minimum",
			"ForecastNumber" : 2,
			"ForecastTestType" : "Recommended based on minimum interval from invalid dose",
			"PastDueDate" : "2011-06-28T00:00:00",
			"RecommendedDate" : "2011-05-19T00:00:00",
			"VaccineGroup" : "PCV"
		},
		"PatientProfile" : {
			"Dob" : "2010-02-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "133",
					"DateAdministered" : "2011-02-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PFR",
					"VaccineName" : "PREVNAR 13"
				}, {
					"Cvx" : "133",
					"DateAdministered" : "2011-03-24T00:00:00",
					"EvaluationReason" : "Interval: Too Short",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : "PFR",
					"VaccineName" : "PREVNAR 13"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0585",
		"TestCaseName" : "Dose # 1 PCV 13 at age 12 mos; # 2 at 1 yr 8 wks-4 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-03-25T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "Interval: At Absolute Minimum",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: series complete",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "PCV"
		},
		"PatientProfile" : {
			"Dob" : "2010-02-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "133",
					"DateAdministered" : "2011-02-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PFR",
					"VaccineName" : "PREVNAR 13"
				}, {
					"Cvx" : "133",
					"DateAdministered" : "2011-03-25T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PFR",
					"VaccineName" : "PREVNAR 13"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0586",
		"TestCaseName" : "Healthy child, age ≥ 5 years.  No forecast",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-05-05T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "No Doses Administered",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: too old",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "PCV"
		},
		"PatientProfile" : {
			"Dob" : "2006-05-05T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : []
		}
	}, {
		"CdcTestId" : "2013-0587",
		"TestCaseName" : "Dose # 1 PCV 13 at age 12 months; # 2 at age 14 mos.  Series complete. ",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-03-01T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "All Valid: Forecast Test",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: series complete",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "PCV"
		},
		"PatientProfile" : {
			"Dob" : "2010-01-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "133",
					"DateAdministered" : "2011-01-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PFR",
					"VaccineName" : "PREVNAR 13"
				}, {
					"Cvx" : "133",
					"DateAdministered" : "2011-03-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PFR",
					"VaccineName" : "PREVNAR 13"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0588",
		"TestCaseName" : "Dose # 1 PCV 13 at 24 mo-5 days.  Valid but child needs another. ",
		"ExpectedForecast" : {
			"AssessmentDate" : "2012-03-13T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2012-05-08T00:00:00",
			"EvaluationTestType" : "All Valid: Forecast Test",
			"ForecastNumber" : 2,
			"ForecastTestType" : "Recommended based on minimum interval from previous dose (catch-up)",
			"PastDueDate" : "2012-05-08T00:00:00",
			"RecommendedDate" : "2012-05-08T00:00:00",
			"VaccineGroup" : "PCV"
		},
		"PatientProfile" : {
			"Dob" : "2010-03-18T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "133",
					"DateAdministered" : "2012-03-13T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PFR",
					"VaccineName" : "PREVNAR 13"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0589",
		"TestCaseName" : "Dose 1 PCV 13 at 24 m-4 days.  Series complete. ",
		"ExpectedForecast" : {
			"AssessmentDate" : "2012-03-14T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "All Valid: Forecast Test",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: series complete",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "PCV"
		},
		"PatientProfile" : {
			"Dob" : "2010-03-18T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "133",
					"DateAdministered" : "2012-03-14T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PFR",
					"VaccineName" : "PREVNAR 13"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0590",
		"TestCaseName" : "Dose # 3 PCV 13 at age 14 weeks-5 days.",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-10-07T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2011-11-04T00:00:00",
			"EvaluationTestType" : "Age: Below Absolute Minimum",
			"ForecastNumber" : 3,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2012-03-04T00:00:00",
			"RecommendedDate" : "2012-01-06T00:00:00",
			"VaccineGroup" : "PCV"
		},
		"PatientProfile" : {
			"Dob" : "2011-07-06T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "133",
					"DateAdministered" : "2011-08-14T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PFR",
					"VaccineName" : "PREVNAR 13"
				}, {
					"Cvx" : "133",
					"DateAdministered" : "2011-09-11T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PFR",
					"VaccineName" : "PREVNAR 13"
				}, {
					"Cvx" : "133",
					"DateAdministered" : "2011-10-07T00:00:00",
					"EvaluationReason" : "Age: Too Young",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : "PFR",
					"VaccineName" : "PREVNAR 13"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0591",
		"TestCaseName" : "Dose # 3 PCV 13 at age 14 weeks-4 days.",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-10-08T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2012-07-06T00:00:00",
			"EvaluationTestType" : "Age: At Absolute Minimum",
			"ForecastNumber" : 4,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2012-12-03T00:00:00",
			"RecommendedDate" : "2012-07-06T00:00:00",
			"VaccineGroup" : "PCV"
		},
		"PatientProfile" : {
			"Dob" : "2011-07-06T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "133",
					"DateAdministered" : "2011-08-14T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PFR",
					"VaccineName" : "PREVNAR 13"
				}, {
					"Cvx" : "133",
					"DateAdministered" : "2011-09-11T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PFR",
					"VaccineName" : "PREVNAR 13"
				}, {
					"Cvx" : "133",
					"DateAdministered" : "2011-10-08T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PFR",
					"VaccineName" : "PREVNAR 13"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0592",
		"TestCaseName" : "Dose # 3 PCV 13 at age 14 weeks",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-10-12T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2012-07-06T00:00:00",
			"EvaluationTestType" : "Age: At Minimum",
			"ForecastNumber" : 4,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2012-12-03T00:00:00",
			"RecommendedDate" : "2012-07-06T00:00:00",
			"VaccineGroup" : "PCV"
		},
		"PatientProfile" : {
			"Dob" : "2011-07-06T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "133",
					"DateAdministered" : "2011-08-17T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PFR",
					"VaccineName" : "PREVNAR 13"
				}, {
					"Cvx" : "133",
					"DateAdministered" : "2011-09-14T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PFR",
					"VaccineName" : "PREVNAR 13"
				}, {
					"Cvx" : "133",
					"DateAdministered" : "2011-10-12T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PFR",
					"VaccineName" : "PREVNAR 13"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0593",
		"TestCaseName" : "Dose # 3 PCV 13 at 6 mo.",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-08-01T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2012-02-01T00:00:00",
			"EvaluationTestType" : "Age: At Recommended",
			"ForecastNumber" : 4,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2012-06-28T00:00:00",
			"RecommendedDate" : "2012-02-01T00:00:00",
			"VaccineGroup" : "PCV"
		},
		"PatientProfile" : {
			"Dob" : "2011-02-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "133",
					"DateAdministered" : "2011-04-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PFR",
					"VaccineName" : "PREVNAR 13"
				}, {
					"Cvx" : "133",
					"DateAdministered" : "2011-06-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PFR",
					"VaccineName" : "PREVNAR 13"
				}, {
					"Cvx" : "133",
					"DateAdministered" : "2011-08-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PFR",
					"VaccineName" : "PREVNAR 13"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0594",
		"TestCaseName" : "Mixed vaccines: dose # 1 PCV 7 at 6 mo; # 2 PCV 13 at 8 mo; # 3 PCV 13 at 12 months.  Series complete. ",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-03-04T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "All Valid: Forecast Test",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: series complete",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "PCV"
		},
		"PatientProfile" : {
			"Dob" : "2010-03-04T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "100",
					"DateAdministered" : "2010-09-04T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "WAL",
					"VaccineName" : "PREVNAR 7"
				}, {
					"Cvx" : "133",
					"DateAdministered" : "2010-11-04T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PFR",
					"VaccineName" : "PREVNAR 13"
				}, {
					"Cvx" : "133",
					"DateAdministered" : "2011-03-04T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PFR",
					"VaccineName" : "PREVNAR 13"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0595",
		"TestCaseName" : "Mixed vaccines: dose # 1 PCV 7 at 7 mo; # 3 PCV 7 at 8 mo; #3 PCV 13 at 12 months.  Series complete. ",
		"ExpectedForecast" : {
			"AssessmentDate" : "2010-06-01T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "All Valid: Forecast Test",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: series complete",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "PCV"
		},
		"PatientProfile" : {
			"Dob" : "2009-06-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "100",
					"DateAdministered" : "2010-01-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "WAL",
					"VaccineName" : "PREVNAR 7"
				}, {
					"Cvx" : "100",
					"DateAdministered" : "2010-02-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "WAL",
					"VaccineName" : "PREVNAR 7"
				}, {
					"Cvx" : "133",
					"DateAdministered" : "2010-06-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PFR",
					"VaccineName" : "PREVNAR 13"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0596",
		"TestCaseName" : "Dose # 1 PCV 13 at age 6 weeks-5 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2010-12-17T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2010-12-22T00:00:00",
			"EvaluationTestType" : "Age: Below Absolute Minimum",
			"ForecastNumber" : 1,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2011-03-09T00:00:00",
			"RecommendedDate" : "2011-01-10T00:00:00",
			"VaccineGroup" : "PCV"
		},
		"PatientProfile" : {
			"Dob" : "2010-11-10T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "133",
					"DateAdministered" : "2010-12-17T00:00:00",
					"EvaluationReason" : "Age: Too Young",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : "PFR",
					"VaccineName" : "PREVNAR 13"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0597",
		"TestCaseName" : "Dose # 1 PCV 13 at 6 mo; # 2 at 11 mo, # 3 at 12 mo",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-08-01T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2011-09-26T00:00:00",
			"EvaluationTestType" : "All Valid: Forecast Test",
			"ForecastNumber" : 4,
			"ForecastTestType" : "Recommended based on minimum interval from previous dose (catch-up)",
			"PastDueDate" : "2011-12-28T00:00:00",
			"RecommendedDate" : "2011-09-26T00:00:00",
			"VaccineGroup" : "PCV"
		},
		"PatientProfile" : {
			"Dob" : "2010-08-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "133",
					"DateAdministered" : "2011-02-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PFR",
					"VaccineName" : "PREVNAR 13"
				}, {
					"Cvx" : "133",
					"DateAdministered" : "2011-07-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PFR",
					"VaccineName" : "PREVNAR 13"
				}, {
					"Cvx" : "133",
					"DateAdministered" : "2011-08-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PFR",
					"VaccineName" : "PREVNAR 13"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0598",
		"TestCaseName" : "Dose # 4 PCV 13 at age 12 mo-5 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-05-27T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2011-07-22T00:00:00",
			"EvaluationTestType" : "Age: Below Absolute Minimum",
			"ForecastNumber" : 4,
			"ForecastTestType" : "Recommended based on minimum interval from inValid dose",
			"PastDueDate" : "2011-10-28T00:00:00",
			"RecommendedDate" : "2011-07-22T00:00:00",
			"VaccineGroup" : "PCV"
		},
		"PatientProfile" : {
			"Dob" : "2010-06-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "133",
					"DateAdministered" : "2010-08-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PFR",
					"VaccineName" : "PREVNAR 13"
				}, {
					"Cvx" : "133",
					"DateAdministered" : "2010-10-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PFR",
					"VaccineName" : "PREVNAR 13"
				}, {
					"Cvx" : "133",
					"DateAdministered" : "2010-12-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PFR",
					"VaccineName" : "PREVNAR 13"
				}, {
					"Cvx" : "133",
					"DateAdministered" : "2011-05-27T00:00:00",
					"EvaluationReason" : "Age: Too Young",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : "PFR",
					"VaccineName" : "PREVNAR 13"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0599",
		"TestCaseName" : "Dose # 4 PCV 13 at age 1 year-4 days.  Series complete. ",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-05-28T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "Age: At Absolute Minimum",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: series complete",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "PCV"
		},
		"PatientProfile" : {
			"Dob" : "2010-06-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "133",
					"DateAdministered" : "2010-08-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PFR",
					"VaccineName" : "PREVNAR 13"
				}, {
					"Cvx" : "133",
					"DateAdministered" : "2010-10-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PFR",
					"VaccineName" : "PREVNAR 13"
				}, {
					"Cvx" : "133",
					"DateAdministered" : "2010-12-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PFR",
					"VaccineName" : "PREVNAR 13"
				}, {
					"Cvx" : "133",
					"DateAdministered" : "2011-05-28T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PFR",
					"VaccineName" : "PREVNAR 13"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0600",
		"TestCaseName" : "Dose # 4 PCV 13 at 1 year.  Series complete. ",
		"ExpectedForecast" : {
			"AssessmentDate" : "2010-06-01T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "Age: At Minimum",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: series complete",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "PCV"
		},
		"PatientProfile" : {
			"Dob" : "2009-06-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "133",
					"DateAdministered" : "2009-08-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PFR",
					"VaccineName" : "PREVNAR 13"
				}, {
					"Cvx" : "133",
					"DateAdministered" : "2009-10-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PFR",
					"VaccineName" : "PREVNAR 13"
				}, {
					"Cvx" : "133",
					"DateAdministered" : "2009-12-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PFR",
					"VaccineName" : "PREVNAR 13"
				}, {
					"Cvx" : "133",
					"DateAdministered" : "2010-06-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PFR",
					"VaccineName" : "PREVNAR 13"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0601",
		"TestCaseName" : "4 doses of PCV 7, no PCV 13.  Needs one PCV 13. ",
		"ExpectedForecast" : {
			"AssessmentDate" : "2010-07-01T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2010-08-26T00:00:00",
			"EvaluationTestType" : "Vaccine: InValid Usage",
			"ForecastNumber" : 4,
			"ForecastTestType" : "Recommended based on minimum interval from inValid dose",
			"PastDueDate" : "2010-10-28T00:00:00",
			"RecommendedDate" : "2010-08-26T00:00:00",
			"VaccineGroup" : "PCV"
		},
		"PatientProfile" : {
			"Dob" : "2009-06-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "100",
					"DateAdministered" : "2009-08-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "WAL",
					"VaccineName" : "PREVNAR 7"
				}, {
					"Cvx" : "100",
					"DateAdministered" : "2009-10-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "WAL",
					"VaccineName" : "PREVNAR 7"
				}, {
					"Cvx" : "100",
					"DateAdministered" : "2009-12-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "WAL",
					"VaccineName" : "PREVNAR 7"
				}, {
					"Cvx" : "100",
					"DateAdministered" : "2010-07-01T00:00:00",
					"EvaluationReason" : "Vaccine: InValid Usage",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : "WAL",
					"VaccineName" : "PREVNAR 7"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0602",
		"TestCaseName" : "Dose 1 invalid (age) as first of others",
		"ExpectedForecast" : {
			"AssessmentDate" : "2012-02-01T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2012-02-29T00:00:00",
			"EvaluationTestType" : "Age: Below Absolute Minimum",
			"ForecastNumber" : 3,
			"ForecastTestType" : "Recommended based on minimum interval from previous dose (catch-up)",
			"PastDueDate" : "2012-03-28T00:00:00",
			"RecommendedDate" : "2012-02-29T00:00:00",
			"VaccineGroup" : "PCV"
		},
		"PatientProfile" : {
			"Dob" : "2011-08-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "133",
					"DateAdministered" : "2011-09-01T00:00:00",
					"EvaluationReason" : "Age: Too Young",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : "PFR",
					"VaccineName" : "PREVNAR 13"
				}, {
					"Cvx" : "133",
					"DateAdministered" : "2011-11-15T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PFR",
					"VaccineName" : "PREVNAR 13"
				}, {
					"Cvx" : "133",
					"DateAdministered" : "2012-02-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PFR",
					"VaccineName" : "PREVNAR 13"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0603",
		"TestCaseName" : "Dose 2 invalid (age) in midst of others.   ",
		"ExpectedForecast" : {
			"AssessmentDate" : "2012-02-01T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2012-02-29T00:00:00",
			"EvaluationTestType" : "Age: Below Absolute Minimum",
			"ForecastNumber" : 3,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2012-04-28T00:00:00",
			"RecommendedDate" : "2012-03-01T00:00:00",
			"VaccineGroup" : "PCV"
		},
		"PatientProfile" : {
			"Dob" : "2011-09-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "133",
					"DateAdministered" : "2011-10-11T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PFR",
					"VaccineName" : "PREVNAR 13"
				}, {
					"Cvx" : "133",
					"DateAdministered" : "2011-11-05T00:00:00",
					"EvaluationReason" : "Age: Too Young",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : "PFR",
					"VaccineName" : "PREVNAR 13"
				}, {
					"Cvx" : "133",
					"DateAdministered" : "2012-02-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PFR",
					"VaccineName" : "PREVNAR 13"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0604",
		"TestCaseName" : "Dose # 3 invalid (age) in midst of others.   Four valid doses not required in this scenario.",
		"ExpectedForecast" : {
			"AssessmentDate" : "2010-12-24T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "Age: Below Absolute Minimum",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: series complete",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "PCV"
		},
		"PatientProfile" : {
			"Dob" : "2009-12-12T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "133",
					"DateAdministered" : "2010-01-22T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PFR",
					"VaccineName" : "PREVNAR 13"
				}, {
					"Cvx" : "133",
					"DateAdministered" : "2010-02-18T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PFR",
					"VaccineName" : "PREVNAR 13"
				}, {
					"Cvx" : "133",
					"DateAdministered" : "2010-03-01T00:00:00",
					"EvaluationReason" : "Age: Too Young",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : "PFR",
					"VaccineName" : "PREVNAR 13"
				}, {
					"Cvx" : "133",
					"DateAdministered" : "2010-12-24T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PFR",
					"VaccineName" : "PREVNAR 13"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0605",
		"TestCaseName" : "Dose 1 to dose 2 interval 28-5 days.",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-10-24T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2011-11-21T00:00:00",
			"EvaluationTestType" : "Interval: Below Absolute Minimum",
			"ForecastNumber" : 2,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2012-01-28T00:00:00",
			"RecommendedDate" : "2011-12-01T00:00:00",
			"VaccineGroup" : "PCV"
		},
		"PatientProfile" : {
			"Dob" : "2011-08-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "133",
					"DateAdministered" : "2011-10-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PFR",
					"VaccineName" : "PREVNAR 13"
				}, {
					"Cvx" : "133",
					"DateAdministered" : "2011-10-24T00:00:00",
					"EvaluationReason" : "Interval: Too Short",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : "PFR",
					"VaccineName" : "PREVNAR 13"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0606",
		"TestCaseName" : "Dose 1 to dose 2 interval 28-4 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-10-25T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2011-11-22T00:00:00",
			"EvaluationTestType" : "Interval: At Absolute Minimum",
			"ForecastNumber" : 3,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2012-03-28T00:00:00",
			"RecommendedDate" : "2012-02-01T00:00:00",
			"VaccineGroup" : "PCV"
		},
		"PatientProfile" : {
			"Dob" : "2011-08-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "133",
					"DateAdministered" : "2011-10-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PFR",
					"VaccineName" : "PREVNAR 13"
				}, {
					"Cvx" : "133",
					"DateAdministered" : "2011-10-25T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PFR",
					"VaccineName" : "PREVNAR 13"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0607",
		"TestCaseName" : "Dose # 1 PCV 13 at age 6 weeks-4 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-05-09T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2011-06-10T00:00:00",
			"EvaluationTestType" : "Age: At Absolute Minimum",
			"ForecastNumber" : 2,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2011-09-28T00:00:00",
			"RecommendedDate" : "2011-08-01T00:00:00",
			"VaccineGroup" : "PCV"
		},
		"PatientProfile" : {
			"Dob" : "2011-04-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "133",
					"DateAdministered" : "2011-05-09T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PFR",
					"VaccineName" : "PREVNAR 13"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0608",
		"TestCaseName" : "Dose 1 PCV 13 to dose 2 interval 28 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-10-29T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2011-11-26T00:00:00",
			"EvaluationTestType" : "Interval: At Minimum",
			"ForecastNumber" : 3,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2012-03-28T00:00:00",
			"RecommendedDate" : "2012-02-01T00:00:00",
			"VaccineGroup" : "PCV"
		},
		"PatientProfile" : {
			"Dob" : "2011-08-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "133",
					"DateAdministered" : "2011-10-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PFR",
					"VaccineName" : "PREVNAR 13"
				}, {
					"Cvx" : "133",
					"DateAdministered" : "2011-10-29T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PFR",
					"VaccineName" : "PREVNAR 13"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0609",
		"TestCaseName" : "Dose 2 to dose 3  interval  28-5 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-09-05T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2011-10-03T00:00:00",
			"EvaluationTestType" : "Interval: Below Absolute Minimum",
			"ForecastNumber" : 3,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2011-12-10T00:00:00",
			"RecommendedDate" : "2011-10-13T00:00:00",
			"VaccineGroup" : "PCV"
		},
		"PatientProfile" : {
			"Dob" : "2011-04-13T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "133",
					"DateAdministered" : "2011-06-13T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PFR",
					"VaccineName" : "PREVNAR 13"
				}, {
					"Cvx" : "133",
					"DateAdministered" : "2011-08-13T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PFR",
					"VaccineName" : "PREVNAR 13"
				}, {
					"Cvx" : "133",
					"DateAdministered" : "2011-09-05T00:00:00",
					"EvaluationReason" : "Interval: Too Short",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : "PFR",
					"VaccineName" : "PREVNAR 13"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0610",
		"TestCaseName" : "Dose 2 to dose 3 PCV 13 interval 28-4 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-05-11T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2011-12-01T00:00:00",
			"EvaluationTestType" : "Interval: At Absolute Minimum",
			"ForecastNumber" : 4,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2012-04-28T00:00:00",
			"RecommendedDate" : "2011-12-01T00:00:00",
			"VaccineGroup" : "PCV"
		},
		"PatientProfile" : {
			"Dob" : "2010-12-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "133",
					"DateAdministered" : "2011-02-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PFR",
					"VaccineName" : "PREVNAR 13"
				}, {
					"Cvx" : "133",
					"DateAdministered" : "2011-04-17T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PFR",
					"VaccineName" : "PREVNAR 13"
				}, {
					"Cvx" : "133",
					"DateAdministered" : "2011-05-11T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PFR",
					"VaccineName" : "PREVNAR 13"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0611",
		"TestCaseName" : "Dose 2 to dose 3 PCV 13 interval 28 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-05-15T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2011-12-01T00:00:00",
			"EvaluationTestType" : "Interval: At Minimum",
			"ForecastNumber" : 4,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2012-04-28T00:00:00",
			"RecommendedDate" : "2011-12-01T00:00:00",
			"VaccineGroup" : "PCV"
		},
		"PatientProfile" : {
			"Dob" : "2010-12-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "133",
					"DateAdministered" : "2011-02-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PFR",
					"VaccineName" : "PREVNAR 13"
				}, {
					"Cvx" : "133",
					"DateAdministered" : "2011-04-17T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PFR",
					"VaccineName" : "PREVNAR 13"
				}, {
					"Cvx" : "133",
					"DateAdministered" : "2011-05-15T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PFR",
					"VaccineName" : "PREVNAR 13"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0612",
		"TestCaseName" : "Dose 3 PCV 13 to dose 4 interval 8 weeks-5 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-04-21T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2011-06-16T00:00:00",
			"EvaluationTestType" : "Interval: Below Absolute Minimum",
			"ForecastNumber" : 4,
			"ForecastTestType" : "Recommended based on minimum interval from inValid dose",
			"PastDueDate" : "2011-08-28T00:00:00",
			"RecommendedDate" : "2011-06-16T00:00:00",
			"VaccineGroup" : "PCV"
		},
		"PatientProfile" : {
			"Dob" : "2010-04-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "133",
					"DateAdministered" : "2010-10-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PFR",
					"VaccineName" : "PREVNAR 13"
				}, {
					"Cvx" : "133",
					"DateAdministered" : "2011-02-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PFR",
					"VaccineName" : "PREVNAR 13"
				}, {
					"Cvx" : "133",
					"DateAdministered" : "2011-03-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PFR",
					"VaccineName" : "PREVNAR 13"
				}, {
					"Cvx" : "133",
					"DateAdministered" : "2011-04-21T00:00:00",
					"EvaluationReason" : "Interval: Too Short",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : "PFR",
					"VaccineName" : "PREVNAR 13"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0613",
		"TestCaseName" : "Dose 3 PCV 13 to dose 4 interval 8 wks-4 days.  Series complete.",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-04-22T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "Interval: At Absolute Minimum",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: series complete",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "PCV"
		},
		"PatientProfile" : {
			"Dob" : "2010-04-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "133",
					"DateAdministered" : "2010-10-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PFR",
					"VaccineName" : "PREVNAR 13"
				}, {
					"Cvx" : "133",
					"DateAdministered" : "2011-02-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PFR",
					"VaccineName" : "PREVNAR 13"
				}, {
					"Cvx" : "133",
					"DateAdministered" : "2011-03-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PFR",
					"VaccineName" : "PREVNAR 13"
				}, {
					"Cvx" : "133",
					"DateAdministered" : "2011-04-22T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PFR",
					"VaccineName" : "PREVNAR 13"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0614",
		"TestCaseName" : "Dose 3 PCV 13 to dose 4 interval 8 weeks.  Series complete.",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-04-26T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "Interval: At Minimum",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: series complete",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "PCV"
		},
		"PatientProfile" : {
			"Dob" : "2010-04-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "133",
					"DateAdministered" : "2010-10-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PFR",
					"VaccineName" : "PREVNAR 13"
				}, {
					"Cvx" : "133",
					"DateAdministered" : "2011-02-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PFR",
					"VaccineName" : "PREVNAR 13"
				}, {
					"Cvx" : "133",
					"DateAdministered" : "2011-03-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PFR",
					"VaccineName" : "PREVNAR 13"
				}, {
					"Cvx" : "133",
					"DateAdministered" : "2011-04-26T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PFR",
					"VaccineName" : "PREVNAR 13"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0615",
		"TestCaseName" : "Invalid dose 2 (interval) in midst of others",
		"ExpectedForecast" : {
			"AssessmentDate" : "2010-02-11T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "Interval: Below Absolute Minimum",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: series complete",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "PCV"
		},
		"PatientProfile" : {
			"Dob" : "2009-02-11T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "133",
					"DateAdministered" : "2009-03-31T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PFR",
					"VaccineName" : "PREVNAR 13"
				}, {
					"Cvx" : "133",
					"DateAdministered" : "2009-04-23T00:00:00",
					"EvaluationReason" : "Interval: Too Short",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : "PFR",
					"VaccineName" : "PREVNAR 13"
				}, {
					"Cvx" : "133",
					"DateAdministered" : "2009-08-11T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PFR",
					"VaccineName" : "PREVNAR 13"
				}, {
					"Cvx" : "133",
					"DateAdministered" : "2010-02-11T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PFR",
					"VaccineName" : "PREVNAR 13"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0616",
		"TestCaseName" : "Invalid dose 3 (interval) in midst of others",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-03-02T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "Interval: Below Absolute Minimum",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: series complete",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "PCV"
		},
		"PatientProfile" : {
			"Dob" : "2010-02-02T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "133",
					"DateAdministered" : "2010-06-02T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PFR",
					"VaccineName" : "PREVNAR 13"
				}, {
					"Cvx" : "133",
					"DateAdministered" : "2010-09-10T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PFR",
					"VaccineName" : "PREVNAR 13"
				}, {
					"Cvx" : "133",
					"DateAdministered" : "2010-10-02T00:00:00",
					"EvaluationReason" : "Interval: Too Short",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : "PFR",
					"VaccineName" : "PREVNAR 13"
				}, {
					"Cvx" : "133",
					"DateAdministered" : "2011-03-02T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PFR",
					"VaccineName" : "PREVNAR 13"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0617",
		"TestCaseName" : "InValid dose 4 (interval) in midst of others",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-06-05T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "Interval: Below Absolute Minimum",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: series complete",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "PCV"
		},
		"PatientProfile" : {
			"Dob" : "2010-03-18T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "133",
					"DateAdministered" : "2010-05-18T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PFR",
					"VaccineName" : "PREVNAR 13"
				}, {
					"Cvx" : "133",
					"DateAdministered" : "2010-09-18T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PFR",
					"VaccineName" : "PREVNAR 13"
				}, {
					"Cvx" : "133",
					"DateAdministered" : "2011-03-10T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PFR",
					"VaccineName" : "PREVNAR 13"
				}, {
					"Cvx" : "133",
					"DateAdministered" : "2011-04-10T00:00:00",
					"EvaluationReason" : "Interval: Too Short",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : "PFR",
					"VaccineName" : "PREVNAR 13"
				}, {
					"Cvx" : "133",
					"DateAdministered" : "2011-06-05T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PFR",
					"VaccineName" : "PREVNAR 13"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0618",
		"TestCaseName" : "Dose # 1 PCV 13 at age 6 weeks",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-12-13T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2012-01-10T00:00:00",
			"EvaluationTestType" : "Age: At Minimum",
			"ForecastNumber" : 2,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2012-04-28T00:00:00",
			"RecommendedDate" : "2012-03-01T00:00:00",
			"VaccineGroup" : "PCV"
		},
		"PatientProfile" : {
			"Dob" : "2011-11-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "133",
					"DateAdministered" : "2011-12-13T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PFR",
					"VaccineName" : "PREVNAR 13"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0619",
		"TestCaseName" : "4 doses of PCV 7 and 1 dose of PCV 13=series complete",
		"ExpectedForecast" : {
			"AssessmentDate" : "2012-03-05T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "Vaccine: InValid Usage",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: series complete",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "PCV"
		},
		"PatientProfile" : {
			"Dob" : "2008-06-06T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "100",
					"DateAdministered" : "2008-08-06T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "WAL",
					"VaccineName" : "PREVNAR 7"
				}, {
					"Cvx" : "100",
					"DateAdministered" : "2008-10-06T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "WAL",
					"VaccineName" : "PREVNAR 7"
				}, {
					"Cvx" : "100",
					"DateAdministered" : "2008-12-06T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "WAL",
					"VaccineName" : "PREVNAR 7"
				}, {
					"Cvx" : "100",
					"DateAdministered" : "2009-12-06T00:00:00",
					"EvaluationReason" : "Vaccine: InValid Usage",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : "WAL",
					"VaccineName" : "PREVNAR 7"
				}, {
					"Cvx" : "133",
					"DateAdministered" : "2012-03-05T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PFR",
					"VaccineName" : "PREVNAR 13"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0620",
		"TestCaseName" : "Four doses PCV 7, no PCV 13 child ≥ 5 years old.  No forecast.",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-06-06T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "Vaccine: InValid Usage",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: too old",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "PCV"
		},
		"PatientProfile" : {
			"Dob" : "2006-06-06T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "100",
					"DateAdministered" : "2006-08-08T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "WAL",
					"VaccineName" : "PREVNAR 7"
				}, {
					"Cvx" : "100",
					"DateAdministered" : "2006-10-10T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "WAL",
					"VaccineName" : "PREVNAR 7"
				}, {
					"Cvx" : "100",
					"DateAdministered" : "2006-12-12T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "WAL",
					"VaccineName" : "PREVNAR 7"
				}, {
					"Cvx" : "100",
					"DateAdministered" : "2007-09-06T00:00:00",
					"EvaluationReason" : "Vaccine: InValid Usage",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : "WAL",
					"VaccineName" : "PREVNAR 7"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0621",
		"TestCaseName" : "Anaphylaxis to previous dose of PCV.  No forecast. ",
		"ExpectedForecast" : {
			"AssessmentDate" : "2007-09-11T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "All Valid: Forecast Test",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: contraindication",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "PCV"
		},
		"PatientProfile" : {
			"Dob" : "2007-07-11T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : "VXC20",
			"MedHistoryCodeSys" : "CDCPHINVS",
			"MedHistoryText" : "allergy to previous dose of this vaccine or to any of its unlisted vaccine components (anaphylactic)",
			"Series" : [{
					"Cvx" : "100",
					"DateAdministered" : "2007-09-11T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "WAL",
					"VaccineName" : "PREVNAR 7"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0622",
		"TestCaseName" : "Dose # 1 PCV 13 at age 2 months",
		"ExpectedForecast" : {
			"AssessmentDate" : "2012-01-01T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2012-01-29T00:00:00",
			"EvaluationTestType" : "Age: At Recommended",
			"ForecastNumber" : 2,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2012-04-28T00:00:00",
			"RecommendedDate" : "2012-03-01T00:00:00",
			"VaccineGroup" : "PCV"
		},
		"PatientProfile" : {
			"Dob" : "2011-11-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "133",
					"DateAdministered" : "2012-01-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PFR",
					"VaccineName" : "PREVNAR 13"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0624",
		"TestCaseName" : "Dose # 1 PCV 13 at age 11 months",
		"ExpectedForecast" : {
			"AssessmentDate" : "2012-01-03T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2012-01-31T00:00:00",
			"EvaluationTestType" : "All Valid: Forecast Test",
			"ForecastNumber" : 2,
			"ForecastTestType" : "Recommended based on minimum interval from previous dose (catch-up)",
			"PastDueDate" : "2012-01-31T00:00:00",
			"RecommendedDate" : "2012-01-31T00:00:00",
			"VaccineGroup" : "PCV"
		},
		"PatientProfile" : {
			"Dob" : "2011-02-03T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "133",
					"DateAdministered" : "2012-01-03T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PFR",
					"VaccineName" : "PREVNAR 13"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0625",
		"TestCaseName" : "Dose # 1 PCV 13 at age 12 months",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-12-12T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2012-02-06T00:00:00",
			"EvaluationTestType" : "All Valid: Forecast Test",
			"ForecastNumber" : 2,
			"ForecastTestType" : "Recommended based on minimum interval from previous dose (catch-up)",
			"PastDueDate" : "2012-08-08T00:00:00",
			"RecommendedDate" : "2012-02-06T00:00:00",
			"VaccineGroup" : "PCV"
		},
		"PatientProfile" : {
			"Dob" : "2010-12-12T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "133",
					"DateAdministered" : "2011-12-12T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PFR",
					"VaccineName" : "PREVNAR 13"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0626",
		"TestCaseName" : "Newborn Testing",
		"ExpectedForecast" : {
			"AssessmentDate" : "2012-02-01T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2012-03-14T00:00:00",
			"EvaluationTestType" : "No Doses Administered",
			"ForecastNumber" : 1,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2012-05-28T00:00:00",
			"RecommendedDate" : "2012-04-01T00:00:00",
			"VaccineGroup" : "POL"
		},
		"PatientProfile" : {
			"Dob" : "2012-02-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : []
		}
	}, {
		"CdcTestId" : "2013-0627",
		"TestCaseName" : "Dose # 2 at age 10 weeks",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-05-07T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2011-06-04T00:00:00",
			"EvaluationTestType" : "Age: At Minimum",
			"ForecastNumber" : 3,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2011-10-23T00:00:00",
			"RecommendedDate" : "2011-08-26T00:00:00",
			"VaccineGroup" : "POL"
		},
		"PatientProfile" : {
			"Dob" : "2011-02-26T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "10",
					"DateAdministered" : "2011-04-09T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "IPOL"
				}, {
					"Cvx" : "10",
					"DateAdministered" : "2011-05-07T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "IPOL"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0628",
		"TestCaseName" : "Dose # 2 at age 4 months",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-12-01T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2011-12-29T00:00:00",
			"EvaluationTestType" : "Age: At Recommended",
			"ForecastNumber" : 3,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2012-03-28T00:00:00",
			"RecommendedDate" : "2012-02-01T00:00:00",
			"VaccineGroup" : "POL"
		},
		"PatientProfile" : {
			"Dob" : "2011-08-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "10",
					"DateAdministered" : "2011-10-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "IPOL"
				}, {
					"Cvx" : "10",
					"DateAdministered" : "2011-12-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "IPOL"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0629",
		"TestCaseName" : "Dose # 2 at age 3 years 9 months",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-04-08T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2011-05-06T00:00:00",
			"EvaluationTestType" : "All Valid: Forecast Test",
			"ForecastNumber" : 3,
			"ForecastTestType" : "Recommended based on minimum interval from previous dose (catch-up)",
			"PastDueDate" : "2011-05-06T00:00:00",
			"RecommendedDate" : "2011-05-06T00:00:00",
			"VaccineGroup" : "POL"
		},
		"PatientProfile" : {
			"Dob" : "2007-07-08T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "10",
					"DateAdministered" : "2007-09-08T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "IPOL"
				}, {
					"Cvx" : "10",
					"DateAdministered" : "2011-04-08T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "IPOL"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0630",
		"TestCaseName" : "Dose # 2 at age 4 years 0 months",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-12-12T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2012-06-12T00:00:00",
			"EvaluationTestType" : "All Valid: Forecast Test",
			"ForecastNumber" : 3,
			"ForecastTestType" : "Recommended based on minimum interval from previous dose (catch-up)",
			"PastDueDate" : "2015-01-08T00:00:00",
			"RecommendedDate" : "2012-06-12T00:00:00",
			"VaccineGroup" : "POL"
		},
		"PatientProfile" : {
			"Dob" : "2007-12-12T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "10",
					"DateAdministered" : "2009-12-12T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "IPOL"
				}, {
					"Cvx" : "10",
					"DateAdministered" : "2011-12-12T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "IPOL"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0631",
		"TestCaseName" : "Dose # 3 at age 14 weeks-5 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2010-09-02T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2010-09-30T00:00:00",
			"EvaluationTestType" : "Age: Below Absolute Minimum",
			"ForecastNumber" : 3,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2011-01-28T00:00:00",
			"RecommendedDate" : "2010-12-01T00:00:00",
			"VaccineGroup" : "POL"
		},
		"PatientProfile" : {
			"Dob" : "2010-06-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "10",
					"DateAdministered" : "2010-07-09T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "IPOL"
				}, {
					"Cvx" : "10",
					"DateAdministered" : "2010-08-06T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "IPOL"
				}, {
					"Cvx" : "10",
					"DateAdministered" : "2010-09-02T00:00:00",
					"EvaluationReason" : "Age: Too Young",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : "PMC",
					"VaccineName" : "IPOL"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0632",
		"TestCaseName" : "Dose # 3 at age 14 weeks -4 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2006-04-10T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2010-01-06T00:00:00",
			"EvaluationTestType" : "Age: At Absolute Minimum",
			"ForecastNumber" : 4,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2013-02-02T00:00:00",
			"RecommendedDate" : "2010-01-06T00:00:00",
			"VaccineGroup" : "POL"
		},
		"PatientProfile" : {
			"Dob" : "2006-01-06T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "10",
					"DateAdministered" : "2006-02-17T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "IPOL"
				}, {
					"Cvx" : "10",
					"DateAdministered" : "2006-03-17T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "IPOL"
				}, {
					"Cvx" : "10",
					"DateAdministered" : "2006-04-10T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "IPOL"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0633",
		"TestCaseName" : "Dose # 3 at age 14 weeks",
		"ExpectedForecast" : {
			"AssessmentDate" : "2006-04-14T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2010-01-06T00:00:00",
			"EvaluationTestType" : "Age: At Minimum",
			"ForecastNumber" : 4,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2013-02-02T00:00:00",
			"RecommendedDate" : "2010-01-06T00:00:00",
			"VaccineGroup" : "POL"
		},
		"PatientProfile" : {
			"Dob" : "2006-01-06T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "10",
					"DateAdministered" : "2006-02-17T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "IPOL"
				}, {
					"Cvx" : "10",
					"DateAdministered" : "2006-03-17T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "IPOL"
				}, {
					"Cvx" : "10",
					"DateAdministered" : "2006-04-14T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "IPOL"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0634",
		"TestCaseName" : "Dose # 3 at age 6 months",
		"ExpectedForecast" : {
			"AssessmentDate" : "2006-08-01T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2010-02-01T00:00:00",
			"EvaluationTestType" : "Age: At Recommended",
			"ForecastNumber" : 4,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2013-02-28T00:00:00",
			"RecommendedDate" : "2010-02-01T00:00:00",
			"VaccineGroup" : "POL"
		},
		"PatientProfile" : {
			"Dob" : "2006-02-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "10",
					"DateAdministered" : "2006-04-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "IPOL"
				}, {
					"Cvx" : "10",
					"DateAdministered" : "2006-06-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "IPOL"
				}, {
					"Cvx" : "10",
					"DateAdministered" : "2006-08-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "IPOL"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0635",
		"TestCaseName" : "Dose # 3 at age 3 yrs 11.5 years old.",
		"ExpectedForecast" : {
			"AssessmentDate" : "2003-06-07T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2003-12-07T00:00:00",
			"EvaluationTestType" : "All Valid: Forecast Test",
			"ForecastNumber" : 4,
			"ForecastTestType" : "Recommended based on minimum interval from previous dose (catch-up)",
			"PastDueDate" : "2006-07-20T00:00:00",
			"RecommendedDate" : "2003-12-07T00:00:00",
			"VaccineGroup" : "POL"
		},
		"PatientProfile" : {
			"Dob" : "1999-06-23T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "10",
					"DateAdministered" : "1999-08-23T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "IPOL"
				}, {
					"Cvx" : "10",
					"DateAdministered" : "1999-10-23T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "IPOL"
				}, {
					"Cvx" : "10",
					"DateAdministered" : "2003-06-07T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "IPOL"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0636",
		"TestCaseName" : "Dose # 3 at age 4 years-5 days.   Is valid as a dose but child will need another. ",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-08-17T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2012-02-17T00:00:00",
			"EvaluationTestType" : "All Valid: Forecast Test",
			"ForecastNumber" : 4,
			"ForecastTestType" : "Recommended based on minimum interval from previous dose (catch-up)",
			"PastDueDate" : "2014-09-18T00:00:00",
			"RecommendedDate" : "2012-02-17T00:00:00",
			"VaccineGroup" : "POL"
		},
		"PatientProfile" : {
			"Dob" : "2007-08-22T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "10",
					"DateAdministered" : "2007-10-22T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "IPOL"
				}, {
					"Cvx" : "10",
					"DateAdministered" : "2007-12-22T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "IPOL"
				}, {
					"Cvx" : "10",
					"DateAdministered" : "2011-08-17T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "IPOL"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0637",
		"TestCaseName" : "# 1 and # 2 at ≥ 4 years.",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-03-11T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2011-09-11T00:00:00",
			"EvaluationTestType" : "All Valid: Forecast Test",
			"ForecastNumber" : 3,
			"ForecastTestType" : "Recommended based on minimum interval from previous dose (catch-up)",
			"PastDueDate" : "2014-03-10T00:00:00",
			"RecommendedDate" : "2011-09-11T00:00:00",
			"VaccineGroup" : "POL"
		},
		"PatientProfile" : {
			"Dob" : "2007-02-11T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "10",
					"DateAdministered" : "2011-02-11T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "IPOL"
				}, {
					"Cvx" : "10",
					"DateAdministered" : "2011-03-11T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "IPOL"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0638",
		"TestCaseName" : "Dose # 3 at 4 years-4 days but not six months after dose 2.  Child will need another. ",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-08-18T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2012-02-18T00:00:00",
			"EvaluationTestType" : "All Valid: Forecast Test",
			"ForecastNumber" : 4,
			"ForecastTestType" : "Recommended based on minimum interval from previous dose (catch-up)",
			"PastDueDate" : "2014-09-18T00:00:00",
			"RecommendedDate" : "2012-02-18T00:00:00",
			"VaccineGroup" : "POL"
		},
		"PatientProfile" : {
			"Dob" : "2007-08-22T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "10",
					"DateAdministered" : "2008-08-22T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "IPOL"
				}, {
					"Cvx" : "10",
					"DateAdministered" : "2011-03-22T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "IPOL"
				}, {
					"Cvx" : "10",
					"DateAdministered" : "2011-08-18T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "IPOL"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0639",
		"TestCaseName" : "Dose # 3 at 4 years-4 days and ≥ 6 months since dose 2.  Series complete.",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-08-18T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "All Valid: Forecast Test",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: series complete",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "POL"
		},
		"PatientProfile" : {
			"Dob" : "2007-08-22T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "10",
					"DateAdministered" : "2008-08-22T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "IPOL"
				}, {
					"Cvx" : "10",
					"DateAdministered" : "2011-01-22T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "IPOL"
				}, {
					"Cvx" : "10",
					"DateAdministered" : "2011-08-18T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "IPOL"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0640",
		"TestCaseName" : "Dose # 3 at age 4 years but < 6 months after dose 2.  Valid but child will need a dose # 4. ",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-02-11T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2011-08-11T00:00:00",
			"EvaluationTestType" : "All Valid: Forecast Test",
			"ForecastNumber" : 4,
			"ForecastTestType" : "Recommended based on minimum interval from previous dose (catch-up)",
			"PastDueDate" : "2014-03-10T00:00:00",
			"RecommendedDate" : "2011-08-11T00:00:00",
			"VaccineGroup" : "POL"
		},
		"PatientProfile" : {
			"Dob" : "2007-02-11T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "10",
					"DateAdministered" : "2008-02-11T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "IPOL"
				}, {
					"Cvx" : "10",
					"DateAdministered" : "2010-10-11T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "IPOL"
				}, {
					"Cvx" : "10",
					"DateAdministered" : "2011-02-11T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "IPOL"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0641",
		"TestCaseName" : "Dose # 3 at 4 years 0 months and ≥ 6 mo since dose 2.   Series complete. ",
		"ExpectedForecast" : {
			"AssessmentDate" : "2001-03-18T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "All Valid: Forecast Test",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: series complete",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "POL"
		},
		"PatientProfile" : {
			"Dob" : "1997-03-18T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "10",
					"DateAdministered" : "1997-05-18T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "IPOL"
				}, {
					"Cvx" : "10",
					"DateAdministered" : "1997-07-18T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "IPOL"
				}, {
					"Cvx" : "10",
					"DateAdministered" : "2001-03-18T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "IPOL"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0642",
		"TestCaseName" : "Dose # 4 at age 18 months.   InValid as dose 4. ",
		"ExpectedForecast" : {
			"AssessmentDate" : "2006-12-01T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2009-06-01T00:00:00",
			"EvaluationTestType" : "Age: Below Absolute Minimum",
			"ForecastNumber" : 4,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2012-06-28T00:00:00",
			"RecommendedDate" : "2009-06-01T00:00:00",
			"VaccineGroup" : "POL"
		},
		"PatientProfile" : {
			"Dob" : "2005-06-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "10",
					"DateAdministered" : "2005-08-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "IPOL"
				}, {
					"Cvx" : "10",
					"DateAdministered" : "2005-10-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "IPOL"
				}, {
					"Cvx" : "10",
					"DateAdministered" : "2005-12-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "IPOL"
				}, {
					"Cvx" : "10",
					"DateAdministered" : "2006-12-01T00:00:00",
					"EvaluationReason" : "Age: Too Young",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : "PMC",
					"VaccineName" : "IPOL"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0643",
		"TestCaseName" : "Dose # 4 at age 4 yrs-5 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-12-20T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2012-06-20T00:00:00",
			"EvaluationTestType" : "Age: Below Absolute Minimum",
			"ForecastNumber" : 4,
			"ForecastTestType" : "Recommended based on minimum interval from previous dose (catch-up)",
			"PastDueDate" : "2015-01-21T00:00:00",
			"RecommendedDate" : "2012-06-20T00:00:00",
			"VaccineGroup" : "POL"
		},
		"PatientProfile" : {
			"Dob" : "2007-12-25T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "10",
					"DateAdministered" : "2008-03-25T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "IPOL"
				}, {
					"Cvx" : "10",
					"DateAdministered" : "2008-07-25T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "IPOL"
				}, {
					"Cvx" : "10",
					"DateAdministered" : "2010-12-26T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "IPOL"
				}, {
					"Cvx" : "10",
					"DateAdministered" : "2011-12-20T00:00:00",
					"EvaluationReason" : "Age: Too Young",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : "PMC",
					"VaccineName" : "IPOL"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0644",
		"TestCaseName" : "Dose # 4 at age 4 years-4 days.  Series complete.",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-12-21T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "Age: At Absolute Minimum",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: series complete",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "POL"
		},
		"PatientProfile" : {
			"Dob" : "2007-12-25T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "10",
					"DateAdministered" : "2008-03-25T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "IPOL"
				}, {
					"Cvx" : "10",
					"DateAdministered" : "2008-07-25T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "IPOL"
				}, {
					"Cvx" : "10",
					"DateAdministered" : "2010-12-26T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "IPOL"
				}, {
					"Cvx" : "10",
					"DateAdministered" : "2011-12-21T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "IPOL"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0645",
		"TestCaseName" : "Dose # 4 at age 4 years 0 days.  Series complete. ",
		"ExpectedForecast" : {
			"AssessmentDate" : "2005-06-01T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "Age: At Minimum",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: series complete",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "POL"
		},
		"PatientProfile" : {
			"Dob" : "2001-06-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "10",
					"DateAdministered" : "2001-08-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "IPOL"
				}, {
					"Cvx" : "10",
					"DateAdministered" : "2001-10-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "IPOL"
				}, {
					"Cvx" : "10",
					"DateAdministered" : "2002-02-02T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "IPOL"
				}, {
					"Cvx" : "10",
					"DateAdministered" : "2005-06-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "IPOL"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0646",
		"TestCaseName" : "Invalid dose 1 (age) as first of others",
		"ExpectedForecast" : {
			"AssessmentDate" : "2012-02-01T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2012-02-29T00:00:00",
			"EvaluationTestType" : "Age: Below Absolute Minimum",
			"ForecastNumber" : 3,
			"ForecastTestType" : "Recommended based on minimum interval from previous dose (catch-up)",
			"PastDueDate" : "2013-03-28T00:00:00",
			"RecommendedDate" : "2012-02-29T00:00:00",
			"VaccineGroup" : "POL"
		},
		"PatientProfile" : {
			"Dob" : "2011-08-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "10",
					"DateAdministered" : "2011-09-01T00:00:00",
					"EvaluationReason" : "Age: Too Young",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : "PMC",
					"VaccineName" : "IPOL"
				}, {
					"Cvx" : "10",
					"DateAdministered" : "2011-12-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "IPOL"
				}, {
					"Cvx" : "10",
					"DateAdministered" : "2012-02-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "IPOL"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0647",
		"TestCaseName" : "Invalid dose # 2 (age) in midst of others",
		"ExpectedForecast" : {
			"AssessmentDate" : "2012-02-01T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2012-02-29T00:00:00",
			"EvaluationTestType" : "Age: Below Absolute Minimum",
			"ForecastNumber" : 3,
			"ForecastTestType" : "Recommended based on minimum interval from previous dose (catch-up)",
			"PastDueDate" : "2013-03-28T00:00:00",
			"RecommendedDate" : "2012-02-29T00:00:00",
			"VaccineGroup" : "POL"
		},
		"PatientProfile" : {
			"Dob" : "2011-08-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "10",
					"DateAdministered" : "2011-09-08T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "IPOL"
				}, {
					"Cvx" : "10",
					"DateAdministered" : "2011-10-05T00:00:00",
					"EvaluationReason" : "Age: Too Young",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : "PMC",
					"VaccineName" : "IPOL"
				}, {
					"Cvx" : "10",
					"DateAdministered" : "2012-02-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "IPOL"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0648",
		"TestCaseName" : "Invalid dose 3 (age) in midst of others.  No additional dose required. The next dose  was at age 4 and ≥ 6 months since previous dose.  Series complete.",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-06-01T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "Age: Below Absolute Minimum",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: series complete",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "POL"
		},
		"PatientProfile" : {
			"Dob" : "2007-06-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "10",
					"DateAdministered" : "2007-07-13T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "IPOL"
				}, {
					"Cvx" : "10",
					"DateAdministered" : "2007-08-07T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "IPOL"
				}, {
					"Cvx" : "10",
					"DateAdministered" : "2007-09-02T00:00:00",
					"EvaluationReason" : "Age: Too Young",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : "PMC",
					"VaccineName" : "IPOL"
				}, {
					"Cvx" : "10",
					"DateAdministered" : "2011-06-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "IPOL"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0649",
		"TestCaseName" : "Dose 1 to dose 2 interval 28-5 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2009-08-24T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2009-09-21T00:00:00",
			"EvaluationTestType" : "Interval: Below Absolute Minimum",
			"ForecastNumber" : 2,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2009-11-28T00:00:00",
			"RecommendedDate" : "2009-10-01T00:00:00",
			"VaccineGroup" : "POL"
		},
		"PatientProfile" : {
			"Dob" : "2009-06-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "10",
					"DateAdministered" : "2009-08-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "IPOL"
				}, {
					"Cvx" : "10",
					"DateAdministered" : "2009-08-24T00:00:00",
					"EvaluationReason" : "Interval: Too Short",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : "PMC",
					"VaccineName" : "IPOL"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0650",
		"TestCaseName" : "Dose 1 to dose2  interval 28-4 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2006-04-25T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2006-05-23T00:00:00",
			"EvaluationTestType" : "Interval: At Absolute Minimum",
			"ForecastNumber" : 3,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2007-09-28T00:00:00",
			"RecommendedDate" : "2006-08-01T00:00:00",
			"VaccineGroup" : "POL"
		},
		"PatientProfile" : {
			"Dob" : "2006-02-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "10",
					"DateAdministered" : "2006-04-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "IPOL"
				}, {
					"Cvx" : "10",
					"DateAdministered" : "2006-04-25T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "IPOL"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0651",
		"TestCaseName" : "Dose 1 to dose 2 interval 28 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2006-04-29T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2006-05-27T00:00:00",
			"EvaluationTestType" : "Interval: At Minimum",
			"ForecastNumber" : 3,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2007-09-28T00:00:00",
			"RecommendedDate" : "2006-08-01T00:00:00",
			"VaccineGroup" : "POL"
		},
		"PatientProfile" : {
			"Dob" : "2006-02-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "10",
					"DateAdministered" : "2006-04-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "IPOL"
				}, {
					"Cvx" : "10",
					"DateAdministered" : "2006-04-29T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "IPOL"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0652",
		"TestCaseName" : "Dose 2 to dose 3 interval 28-5 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2010-08-24T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2010-09-21T00:00:00",
			"EvaluationTestType" : "Interval: Below Absolute Minimum",
			"ForecastNumber" : 3,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2011-11-28T00:00:00",
			"RecommendedDate" : "2010-10-01T00:00:00",
			"VaccineGroup" : "POL"
		},
		"PatientProfile" : {
			"Dob" : "2010-04-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "10",
					"DateAdministered" : "2010-06-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "IPOL"
				}, {
					"Cvx" : "10",
					"DateAdministered" : "2010-08-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "IPOL"
				}, {
					"Cvx" : "10",
					"DateAdministered" : "2010-08-24T00:00:00",
					"EvaluationReason" : "Interval: Too Short",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : "PMC",
					"VaccineName" : "IPOL"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0653",
		"TestCaseName" : "Dose 2 to dose 3 interval 28-4 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2006-03-09T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2009-12-01T00:00:00",
			"EvaluationTestType" : "Interval: At Absolute Minimum",
			"ForecastNumber" : 4,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2012-12-28T00:00:00",
			"RecommendedDate" : "2009-12-01T00:00:00",
			"VaccineGroup" : "POL"
		},
		"PatientProfile" : {
			"Dob" : "2005-12-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "10",
					"DateAdministered" : "2006-01-10T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "IPOL"
				}, {
					"Cvx" : "10",
					"DateAdministered" : "2006-02-13T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "IPOL"
				}, {
					"Cvx" : "10",
					"DateAdministered" : "2006-03-09T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "IPOL"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0654",
		"TestCaseName" : "Dose 2 to dose 3 interval 28 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2006-04-29T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2009-12-01T00:00:00",
			"EvaluationTestType" : "Interval: At Minimum",
			"ForecastNumber" : 4,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2012-12-28T00:00:00",
			"RecommendedDate" : "2009-12-01T00:00:00",
			"VaccineGroup" : "POL"
		},
		"PatientProfile" : {
			"Dob" : "2005-12-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "10",
					"DateAdministered" : "2006-02-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "IPOL"
				}, {
					"Cvx" : "10",
					"DateAdministered" : "2006-04-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "IPOL"
				}, {
					"Cvx" : "10",
					"DateAdministered" : "2006-04-29T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "IPOL"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0655",
		"TestCaseName" : "Dose 3 to dose 4 interval 6 m-5 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2010-11-15T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2011-05-15T00:00:00",
			"EvaluationTestType" : "Interval: Below Absolute Minimum",
			"ForecastNumber" : 4,
			"ForecastTestType" : "Recommended based on minimum interval from inValid dose",
			"PastDueDate" : "2013-12-12T00:00:00",
			"RecommendedDate" : "2011-05-15T00:00:00",
			"VaccineGroup" : "POL"
		},
		"PatientProfile" : {
			"Dob" : "2006-11-15T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "10",
					"DateAdministered" : "2007-11-15T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "IPOL"
				}, {
					"Cvx" : "10",
					"DateAdministered" : "2008-11-15T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "IPOL"
				}, {
					"Cvx" : "10",
					"DateAdministered" : "2010-05-20T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "IPOL"
				}, {
					"Cvx" : "10",
					"DateAdministered" : "2010-11-15T00:00:00",
					"EvaluationReason" : "Interval: Too Short",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : "PMC",
					"VaccineName" : "IPOL"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0656",
		"TestCaseName" : "Dose 3 to dose 4 interval 6 months-4 days.  Series complete.",
		"ExpectedForecast" : {
			"AssessmentDate" : "2010-11-15T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "Interval: At Absolute Minimum",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: series complete",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "POL"
		},
		"PatientProfile" : {
			"Dob" : "2006-11-15T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "10",
					"DateAdministered" : "2007-11-15T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "IPOL"
				}, {
					"Cvx" : "10",
					"DateAdministered" : "2008-11-15T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "IPOL"
				}, {
					"Cvx" : "10",
					"DateAdministered" : "2010-05-19T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "IPOL"
				}, {
					"Cvx" : "10",
					"DateAdministered" : "2010-11-15T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "IPOL"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0657",
		"TestCaseName" : "Dose 3 to dose 4 interval 6 months.  Series complete. ",
		"ExpectedForecast" : {
			"AssessmentDate" : "2010-11-19T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "Interval: At Minimum",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: series complete",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "POL"
		},
		"PatientProfile" : {
			"Dob" : "2006-11-15T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "10",
					"DateAdministered" : "2007-11-15T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "IPOL"
				}, {
					"Cvx" : "10",
					"DateAdministered" : "2008-11-15T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "IPOL"
				}, {
					"Cvx" : "10",
					"DateAdministered" : "2010-05-19T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "IPOL"
				}, {
					"Cvx" : "10",
					"DateAdministered" : "2010-11-19T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "IPOL"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0658",
		"TestCaseName" : "Dose # 1 at age 6 weeks-5 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2010-12-17T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2010-12-22T00:00:00",
			"EvaluationTestType" : "Age: Below Absolute Minimum",
			"ForecastNumber" : 1,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2011-03-09T00:00:00",
			"RecommendedDate" : "2011-01-10T00:00:00",
			"VaccineGroup" : "POL"
		},
		"PatientProfile" : {
			"Dob" : "2010-11-10T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "10",
					"DateAdministered" : "2010-12-17T00:00:00",
					"EvaluationReason" : "Age: Too Young",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : "PMC",
					"VaccineName" : "IPOL"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0659",
		"TestCaseName" : "Invalid dose 1 to dose 2 interval in midst of others. ",
		"ExpectedForecast" : {
			"AssessmentDate" : "2009-08-11T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2009-09-08T00:00:00",
			"EvaluationTestType" : "Interval: Below Absolute Minimum",
			"ForecastNumber" : 3,
			"ForecastTestType" : "Recommended based on minimum interval from previous dose (catch-up)",
			"PastDueDate" : "2010-10-08T00:00:00",
			"RecommendedDate" : "2009-09-08T00:00:00",
			"VaccineGroup" : "POL"
		},
		"PatientProfile" : {
			"Dob" : "2009-02-11T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "10",
					"DateAdministered" : "2009-04-11T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "IPOL"
				}, {
					"Cvx" : "10",
					"DateAdministered" : "2009-05-03T00:00:00",
					"EvaluationReason" : "Interval: Too Short",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : "PMC",
					"VaccineName" : "IPOL"
				}, {
					"Cvx" : "10",
					"DateAdministered" : "2009-08-11T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "IPOL"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0660",
		"TestCaseName" : "Invalid dose 3 (interval) in midst of others makes no difference in forecasting if # 4 is ≥ 4 years old and ≥ 6 months after previous dose.  Series complete.",
		"ExpectedForecast" : {
			"AssessmentDate" : "2012-02-04T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "Interval: Below Absolute Minimum",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: series complete",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "POL"
		},
		"PatientProfile" : {
			"Dob" : "2008-02-02T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "10",
					"DateAdministered" : "2008-04-02T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "IPOL"
				}, {
					"Cvx" : "10",
					"DateAdministered" : "2008-06-02T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "IPOL"
				}, {
					"Cvx" : "10",
					"DateAdministered" : "2008-06-25T00:00:00",
					"EvaluationReason" : "Interval: Too Short",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : "PMC",
					"VaccineName" : "IPOL"
				}, {
					"Cvx" : "10",
					"DateAdministered" : "2012-02-04T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "IPOL"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0661",
		"TestCaseName" : "Mixed OPV/IPV require 4 doses even if # 3 is after age 4 and ≥ 6 months after previous dose. ",
		"ExpectedForecast" : {
			"AssessmentDate" : "2009-10-16T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2010-04-16T00:00:00",
			"EvaluationTestType" : "All Valid: Forecast Test",
			"ForecastNumber" : 4,
			"ForecastTestType" : "Recommended based on minimum interval from previous dose (catch-up)",
			"PastDueDate" : "2011-11-12T00:00:00",
			"RecommendedDate" : "2010-04-16T00:00:00",
			"VaccineGroup" : "POL"
		},
		"PatientProfile" : {
			"Dob" : "2004-10-16T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "02",
					"DateAdministered" : "2004-12-16T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "WAL",
					"VaccineName" : "ORIMUNE"
				}, {
					"Cvx" : "02",
					"DateAdministered" : "2005-02-16T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "WAL",
					"VaccineName" : "ORIMUNE"
				}, {
					"Cvx" : "10",
					"DateAdministered" : "2009-10-16T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "IPOL"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0662",
		"TestCaseName" : "4 doses of mixed OPV/IPV with one after age 4=polio series complete",
		"ExpectedForecast" : {
			"AssessmentDate" : "2004-04-17T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "All Valid: Forecast Test",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: series complete",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "POL"
		},
		"PatientProfile" : {
			"Dob" : "1999-04-13T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "02",
					"DateAdministered" : "1999-06-13T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "WAL",
					"VaccineName" : "ORIMUNE"
				}, {
					"Cvx" : "02",
					"DateAdministered" : "1999-08-13T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "WAL",
					"VaccineName" : "ORIMUNE"
				}, {
					"Cvx" : "10",
					"DateAdministered" : "2002-04-13T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "IPOL"
				}, {
					"Cvx" : "10",
					"DateAdministered" : "2004-04-17T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "IPOL"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0663",
		"TestCaseName" : "Anaphylaxis to previous dose.  No forecast. ",
		"ExpectedForecast" : {
			"AssessmentDate" : "2010-09-24T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "All Valid: Forecast Test",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: contraindication",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "POL"
		},
		"PatientProfile" : {
			"Dob" : "2010-07-24T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : "VXC20",
			"MedHistoryCodeSys" : "CDCPHINVS",
			"MedHistoryText" : "allergy to previous dose of this vaccine or to any of its unlisted vaccine components (anaphylactic)",
			"Series" : [{
					"Cvx" : "10",
					"DateAdministered" : "2010-09-24T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "IPOL"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0664",
		"TestCaseName" : "Dose 1 given as Kinrix at age 2 mos.  Off-label but valid as IPV # 1. ",
		"ExpectedForecast" : {
			"AssessmentDate" : "2012-01-11T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2012-02-08T00:00:00",
			"EvaluationTestType" : "Vaccine: Off Label",
			"ForecastNumber" : 2,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2012-05-08T00:00:00",
			"RecommendedDate" : "2012-03-11T00:00:00",
			"VaccineGroup" : "POL"
		},
		"PatientProfile" : {
			"Dob" : "2011-11-11T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "130",
					"DateAdministered" : "2012-01-11T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "KINRIX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0665",
		"TestCaseName" : "Dose 2 given as Kinrix at age 4 mo.  Off label but valid as IPV 2. ",
		"ExpectedForecast" : {
			"AssessmentDate" : "2012-01-09T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2012-02-06T00:00:00",
			"EvaluationTestType" : "Vaccine: Off Label",
			"ForecastNumber" : 3,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2013-05-06T00:00:00",
			"RecommendedDate" : "2012-03-09T00:00:00",
			"VaccineGroup" : "POL"
		},
		"PatientProfile" : {
			"Dob" : "2011-09-09T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "10",
					"DateAdministered" : "2011-11-15T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "IPOL"
				}, {
					"Cvx" : "130",
					"DateAdministered" : "2012-01-09T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "KINRIX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0666",
		"TestCaseName" : "Dose 3 given as Kinrix at age 6 mos.  Off label but valid.",
		"ExpectedForecast" : {
			"AssessmentDate" : "2012-01-07T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2015-07-07T00:00:00",
			"EvaluationTestType" : "Vaccine: Off Label",
			"ForecastNumber" : 4,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2018-08-03T00:00:00",
			"RecommendedDate" : "2015-07-07T00:00:00",
			"VaccineGroup" : "POL"
		},
		"PatientProfile" : {
			"Dob" : "2011-07-07T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "10",
					"DateAdministered" : "2011-09-09T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "IPOL"
				}, {
					"Cvx" : "10",
					"DateAdministered" : "2011-11-11T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "IPOL"
				}, {
					"Cvx" : "130",
					"DateAdministered" : "2012-01-07T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "KINRIX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0667",
		"TestCaseName" : "Kinrix at 12 months old.  Not Valid as dose 4 of IPV",
		"ExpectedForecast" : {
			"AssessmentDate" : "2007-08-01T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2010-07-07T00:00:00",
			"EvaluationTestType" : "Age: Below Absolute Minimum",
			"ForecastNumber" : 4,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2013-08-03T00:00:00",
			"RecommendedDate" : "2010-07-07T00:00:00",
			"VaccineGroup" : "POL"
		},
		"PatientProfile" : {
			"Dob" : "2006-07-07T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "10",
					"DateAdministered" : "2006-09-09T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "IPOL"
				}, {
					"Cvx" : "10",
					"DateAdministered" : "2006-11-11T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "IPOL"
				}, {
					"Cvx" : "10",
					"DateAdministered" : "2006-12-30T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "IPOL"
				}, {
					"Cvx" : "130",
					"DateAdministered" : "2007-08-01T00:00:00",
					"EvaluationReason" : "Age: Too Young",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : "SKB",
					"VaccineName" : "KINRIX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0668",
		"TestCaseName" : "Kinrix at age 4 years as dose 4=polio series complete",
		"ExpectedForecast" : {
			"AssessmentDate" : "2010-10-04T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "Age: At Minimum",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: series complete",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "POL"
		},
		"PatientProfile" : {
			"Dob" : "2006-10-04T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "110",
					"DateAdministered" : "2006-12-06T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2007-02-04T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2007-04-06T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "130",
					"DateAdministered" : "2010-10-04T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "KINRIX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0669",
		"TestCaseName" : "Dose # 1 at age 6 weeks-4 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2006-05-09T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2006-06-10T00:00:00",
			"EvaluationTestType" : "Age: At Absolute Minimum",
			"ForecastNumber" : 2,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2006-09-28T00:00:00",
			"RecommendedDate" : "2006-08-01T00:00:00",
			"VaccineGroup" : "POL"
		},
		"PatientProfile" : {
			"Dob" : "2006-04-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "10",
					"DateAdministered" : "2006-05-09T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "IPOL"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0670",
		"TestCaseName" : "Kinrix as dose 4 at age 4 years-5 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-07-02T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2012-01-02T00:00:00",
			"EvaluationTestType" : "Age: Below Absolute Minimum",
			"ForecastNumber" : 4,
			"ForecastTestType" : "Recommended based on minimum interval from inValid dose",
			"PastDueDate" : "2014-08-03T00:00:00",
			"RecommendedDate" : "2012-01-02T00:00:00",
			"VaccineGroup" : "POL"
		},
		"PatientProfile" : {
			"Dob" : "2007-07-07T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "110",
					"DateAdministered" : "2007-08-30T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2007-10-24T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2008-03-05T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "130",
					"DateAdministered" : "2011-07-02T00:00:00",
					"EvaluationReason" : "Age: Too Young",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : "SKB",
					"VaccineName" : "KINRIX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0671",
		"TestCaseName" : "Kinrix as dose 4 at age 4 years-4 days= polio series complete",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-10-14T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "Age: At Absolute Minimum",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: series complete",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "POL"
		},
		"PatientProfile" : {
			"Dob" : "2007-10-18T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "110",
					"DateAdministered" : "2007-12-07T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2008-02-04T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2008-04-04T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "130",
					"DateAdministered" : "2011-10-14T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "KINRIX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0672",
		"TestCaseName" : "Dose # 1 at age 6 weeks",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-12-13T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2012-01-10T00:00:00",
			"EvaluationTestType" : "Age: At Minimum",
			"ForecastNumber" : 2,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2012-04-28T00:00:00",
			"RecommendedDate" : "2012-03-01T00:00:00",
			"VaccineGroup" : "POL"
		},
		"PatientProfile" : {
			"Dob" : "2011-11-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "10",
					"DateAdministered" : "2011-12-13T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "IPOL"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0673",
		"TestCaseName" : "Dose # 1 at age 2 months",
		"ExpectedForecast" : {
			"AssessmentDate" : "2012-01-01T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2012-01-29T00:00:00",
			"EvaluationTestType" : "Age: At Recommended",
			"ForecastNumber" : 2,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2012-04-28T00:00:00",
			"RecommendedDate" : "2012-03-01T00:00:00",
			"VaccineGroup" : "POL"
		},
		"PatientProfile" : {
			"Dob" : "2011-11-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "10",
					"DateAdministered" : "2012-01-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "IPOL"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0674",
		"TestCaseName" : "Dose # 2 at age 10 weeks-5 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2005-11-14T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2005-12-12T00:00:00",
			"EvaluationTestType" : "Age: Below Absolute Minimum",
			"ForecastNumber" : 2,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2006-03-09T00:00:00",
			"RecommendedDate" : "2006-01-10T00:00:00",
			"VaccineGroup" : "POL"
		},
		"PatientProfile" : {
			"Dob" : "2005-09-10T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "10",
					"DateAdministered" : "2005-10-18T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "IPOL"
				}, {
					"Cvx" : "10",
					"DateAdministered" : "2005-11-14T00:00:00",
					"EvaluationReason" : "Age: Too Young",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : "PMC",
					"VaccineName" : "IPOL"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0675",
		"TestCaseName" : "Dose # 2 at age 10 weeks-4 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-05-03T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2011-06-04T00:00:00",
			"EvaluationTestType" : "Age: At Absolute Minimum",
			"ForecastNumber" : 3,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2011-10-23T00:00:00",
			"RecommendedDate" : "2011-08-26T00:00:00",
			"VaccineGroup" : "POL"
		},
		"PatientProfile" : {
			"Dob" : "2011-02-26T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "10",
					"DateAdministered" : "2011-04-09T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "IPOL"
				}, {
					"Cvx" : "10",
					"DateAdministered" : "2011-05-03T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "IPOL"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0676",
		"TestCaseName" : "Newborn forecasting",
		"ExpectedForecast" : {
			"AssessmentDate" : "2012-04-01T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2012-05-13T00:00:00",
			"EvaluationTestType" : "No Doses Administered",
			"ForecastNumber" : 1,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2012-07-28T00:00:00",
			"RecommendedDate" : "2012-06-01T00:00:00",
			"VaccineGroup" : "POL"
		},
		"PatientProfile" : {
			"Dob" : "2012-04-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : []
		}
	}, {
		"CdcTestId" : "2013-0677",
		"TestCaseName" : "# 2 Pediarix at 6 yrs 11.5 mo",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-12-15T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2012-06-15T00:00:00",
			"EvaluationTestType" : "All Valid: Forecast Test",
			"ForecastNumber" : 3,
			"ForecastTestType" : "Recommended based on minimum interval from previous dose (catch-up)",
			"PastDueDate" : "2012-06-15T00:00:00",
			"RecommendedDate" : "2012-06-15T00:00:00",
			"VaccineGroup" : "POL"
		},
		"PatientProfile" : {
			"Dob" : "2005-01-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "110",
					"DateAdministered" : "2007-12-16T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2011-12-15T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0678",
		"TestCaseName" : "# 2 Pediarix at 7 yrs; # 1 at less than 12 mo. ",
		"ExpectedForecast" : {
			"AssessmentDate" : "2010-09-16T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2011-03-16T00:00:00",
			"EvaluationTestType" : "Vaccine: Off Label",
			"ForecastNumber" : 3,
			"ForecastTestType" : "Recommended based on minimum interval from previous dose (catch-up)",
			"PastDueDate" : "2011-03-16T00:00:00",
			"RecommendedDate" : "2011-03-16T00:00:00",
			"VaccineGroup" : "POL"
		},
		"PatientProfile" : {
			"Dob" : "2003-09-16T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "110",
					"DateAdministered" : "2003-12-16T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2010-09-16T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0679",
		"TestCaseName" : "# 2 Pediarix at 7 yrs; # 1 ≥ 12 mo.",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-09-16T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2012-03-16T00:00:00",
			"EvaluationTestType" : "Vaccine: Off Label",
			"ForecastNumber" : 3,
			"ForecastTestType" : "Recommended based on minimum interval from previous dose (catch-up)",
			"PastDueDate" : "2012-03-16T00:00:00",
			"RecommendedDate" : "2012-03-16T00:00:00",
			"VaccineGroup" : "POL"
		},
		"PatientProfile" : {
			"Dob" : "2004-09-16T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "110",
					"DateAdministered" : "2005-10-16T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2011-09-16T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0680",
		"TestCaseName" : "# 1 and 2 Pediarix at ≥7 yrs  with 28 day interval.  Off label",
		"ExpectedForecast" : {
			"AssessmentDate" : "2009-08-04T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2010-02-04T00:00:00",
			"EvaluationTestType" : "Vaccine: Off Label",
			"ForecastNumber" : 3,
			"ForecastTestType" : "Recommended based on minimum interval from previous dose (catch-up)",
			"PastDueDate" : "2010-02-04T00:00:00",
			"RecommendedDate" : "2010-02-04T00:00:00",
			"VaccineGroup" : "POL"
		},
		"PatientProfile" : {
			"Dob" : "2002-07-07T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "110",
					"DateAdministered" : "2009-07-07T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2009-08-04T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0681",
		"TestCaseName" : "# 3 Pediarix at 14 wks-5 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2005-09-02T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2005-09-30T00:00:00",
			"EvaluationTestType" : "Age: Below Absolute Minimum",
			"ForecastNumber" : 3,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2006-01-28T00:00:00",
			"RecommendedDate" : "2005-12-01T00:00:00",
			"VaccineGroup" : "POL"
		},
		"PatientProfile" : {
			"Dob" : "2005-06-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "110",
					"DateAdministered" : "2005-07-09T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2005-08-06T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2005-09-02T00:00:00",
					"EvaluationReason" : "Age: Too Young",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0682",
		"TestCaseName" : "# 3 Pediarix at 14 wks-4 days.",
		"ExpectedForecast" : {
			"AssessmentDate" : "2006-04-10T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2010-01-06T00:00:00",
			"EvaluationTestType" : "Age: At Absolute Minimum",
			"ForecastNumber" : 4,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2013-02-02T00:00:00",
			"RecommendedDate" : "2010-01-06T00:00:00",
			"VaccineGroup" : "POL"
		},
		"PatientProfile" : {
			"Dob" : "2006-01-06T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "110",
					"DateAdministered" : "2006-02-15T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2006-03-15T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2006-04-10T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0683",
		"TestCaseName" : "# 3 Pediarix at 24 weeks-5 days.",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-10-23T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2015-05-13T00:00:00",
			"EvaluationTestType" : "All Valid: Forecast Test",
			"ForecastNumber" : 4,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2018-06-09T00:00:00",
			"RecommendedDate" : "2015-05-13T00:00:00",
			"VaccineGroup" : "POL"
		},
		"PatientProfile" : {
			"Dob" : "2011-05-13T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "110",
					"DateAdministered" : "2011-06-24T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2011-08-24T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2011-10-23T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0684",
		"TestCaseName" : "# 3 Pediarix at 24 weeks-4 days.",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-10-24T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2015-05-13T00:00:00",
			"EvaluationTestType" : "All Valid: Forecast Test",
			"ForecastNumber" : 4,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2018-06-09T00:00:00",
			"RecommendedDate" : "2015-05-13T00:00:00",
			"VaccineGroup" : "POL"
		},
		"PatientProfile" : {
			"Dob" : "2011-05-13T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "110",
					"DateAdministered" : "2011-06-24T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2011-08-24T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2011-10-24T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0685",
		"TestCaseName" : "# 3 Pediarix at 6 yrs 11.5 mo",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-06-25T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "All Valid: Forecast Test",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: series complete",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "POL"
		},
		"PatientProfile" : {
			"Dob" : "2004-07-07T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "110",
					"DateAdministered" : "2007-05-05T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2008-08-08T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2011-06-25T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0686",
		"TestCaseName" : "# 4 Pediarix at 1 yr -5 days.",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-03-30T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2014-04-04T00:00:00",
			"EvaluationTestType" : "Age: Below Absolute Minimum",
			"ForecastNumber" : 4,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2017-05-01T00:00:00",
			"RecommendedDate" : "2014-04-04T00:00:00",
			"VaccineGroup" : "POL"
		},
		"PatientProfile" : {
			"Dob" : "2010-04-04T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "110",
					"DateAdministered" : "2010-06-04T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2010-08-04T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2010-10-10T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2011-03-30T00:00:00",
					"EvaluationReason" : "Age: Too Young",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0687",
		"TestCaseName" : "# 1 Pediarix at 6 wks-5 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-06-12T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2011-06-17T00:00:00",
			"EvaluationTestType" : "Age: Below Absolute Minimum",
			"ForecastNumber" : 1,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2011-09-02T00:00:00",
			"RecommendedDate" : "2011-07-06T00:00:00",
			"VaccineGroup" : "POL"
		},
		"PatientProfile" : {
			"Dob" : "2011-05-06T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "110",
					"DateAdministered" : "2011-06-12T00:00:00",
					"EvaluationReason" : "Age: Too Young",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0688",
		"TestCaseName" : "# 4 Pediarix at 1 yr -4 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2006-05-28T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2009-06-01T00:00:00",
			"EvaluationTestType" : "Age: Below Absolute Minimum",
			"ForecastNumber" : 4,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2012-06-28T00:00:00",
			"RecommendedDate" : "2009-06-01T00:00:00",
			"VaccineGroup" : "POL"
		},
		"PatientProfile" : {
			"Dob" : "2005-06-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "110",
					"DateAdministered" : "2005-08-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2005-11-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2006-01-15T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2006-05-28T00:00:00",
					"EvaluationReason" : "Age: Too Young",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0689",
		"TestCaseName" : "# 4 Pediarix at 3 yrs 11.5 mo. ",
		"ExpectedForecast" : {
			"AssessmentDate" : "2012-01-15T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2012-07-15T00:00:00",
			"EvaluationTestType" : "Age: Below Absolute Minimum",
			"ForecastNumber" : 4,
			"ForecastTestType" : "Recommended based on minimum interval from invalid dose",
			"PastDueDate" : "2015-02-28T00:00:00",
			"RecommendedDate" : "2012-07-15T00:00:00",
			"VaccineGroup" : "POL"
		},
		"PatientProfile" : {
			"Dob" : "2008-02-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "110",
					"DateAdministered" : "2008-04-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2008-07-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2008-10-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2012-01-15T00:00:00",
					"EvaluationReason" : "Age: Too Young",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0690",
		"TestCaseName" : "# 4 Pediarix at 4 yrs",
		"ExpectedForecast" : {
			"AssessmentDate" : "2010-05-06T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "Age: At Minimum",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: series complete",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "POL"
		},
		"PatientProfile" : {
			"Dob" : "2006-05-06T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "110",
					"DateAdministered" : "2006-09-09T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2007-03-03T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2008-07-10T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2010-05-06T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0691",
		"TestCaseName" : "# 5 Pediarix at 4 yrs -5 days.",
		"ExpectedForecast" : {
			"AssessmentDate" : "2010-06-26T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2010-12-26T00:00:00",
			"EvaluationTestType" : "Age: Below Absolute Minimum",
			"ForecastNumber" : 4,
			"ForecastTestType" : "Recommended based on minimum interval from inValid dose",
			"PastDueDate" : "2013-07-28T00:00:00",
			"RecommendedDate" : "2010-12-26T00:00:00",
			"VaccineGroup" : "POL"
		},
		"PatientProfile" : {
			"Dob" : "2006-07-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "110",
					"DateAdministered" : "2006-09-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2006-10-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2007-02-02T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2007-10-10T00:00:00",
					"EvaluationReason" : "Age: Too Young",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2010-06-26T00:00:00",
					"EvaluationReason" : "Age: Too Young",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0692",
		"TestCaseName" : "# 5 Pediarix at 4 yrs -4 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2010-06-27T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "Age: At Absolute Minimum",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: series complete",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "POL"
		},
		"PatientProfile" : {
			"Dob" : "2006-07-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "110",
					"DateAdministered" : "2006-09-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2006-10-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2007-02-02T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2007-10-10T00:00:00",
					"EvaluationReason" : "Age: Too Young",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2010-06-27T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0693",
		"TestCaseName" : "# 5 Pediarix at 6 yrs 11.5 mo",
		"ExpectedForecast" : {
			"AssessmentDate" : "2012-03-15T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "Age: Below Absolute Minimum",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: series complete",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "POL"
		},
		"PatientProfile" : {
			"Dob" : "2005-04-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "110",
					"DateAdministered" : "2005-06-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2005-08-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2005-10-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2006-05-01T00:00:00",
					"EvaluationReason" : "Age: Too Young",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2012-03-15T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0694",
		"TestCaseName" : "# 5 Pediarix at 7 yrs.  Off label",
		"ExpectedForecast" : {
			"AssessmentDate" : "2012-05-01T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "Vaccine: Off Label",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: series complete",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "POL"
		},
		"PatientProfile" : {
			"Dob" : "2005-05-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "110",
					"DateAdministered" : "2005-08-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2005-11-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2006-02-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2006-11-16T00:00:00",
					"EvaluationReason" : "Age: Too Young",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2012-05-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0695",
		"TestCaseName" : "Invalid age dose 1 as first of others. ",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-11-01T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2011-11-29T00:00:00",
			"EvaluationTestType" : "Age: Below Absolute Minimum",
			"ForecastNumber" : 2,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2012-01-28T00:00:00",
			"RecommendedDate" : "2011-12-01T00:00:00",
			"VaccineGroup" : "POL"
		},
		"PatientProfile" : {
			"Dob" : "2011-08-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "110",
					"DateAdministered" : "2011-09-06T00:00:00",
					"EvaluationReason" : "Age: Too Young",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2011-11-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0696",
		"TestCaseName" : "Invalid age dose 2 in midst of others",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-04-18T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2011-05-16T00:00:00",
			"EvaluationTestType" : "Age: Below Absolute Minimum",
			"ForecastNumber" : 3,
			"ForecastTestType" : "Recommended based on minimum interval from previous dose (catch-up)",
			"PastDueDate" : "2011-06-14T00:00:00",
			"RecommendedDate" : "2011-05-16T00:00:00",
			"VaccineGroup" : "POL"
		},
		"PatientProfile" : {
			"Dob" : "2010-10-18T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "110",
					"DateAdministered" : "2010-11-25T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2010-12-21T00:00:00",
					"EvaluationReason" : "Age: Too Young",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2011-04-18T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0697",
		"TestCaseName" : "invalid age dose 3 in midst of others",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-06-01T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2014-06-01T00:00:00",
			"EvaluationTestType" : "Age: Below Absolute Minimum",
			"ForecastNumber" : 4,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2017-06-28T00:00:00",
			"RecommendedDate" : "2014-06-01T00:00:00",
			"VaccineGroup" : "POL"
		},
		"PatientProfile" : {
			"Dob" : "2010-06-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "110",
					"DateAdministered" : "2010-07-15T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2010-08-10T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2010-09-01T00:00:00",
					"EvaluationReason" : "Age: Too Young",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2011-06-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0698",
		"TestCaseName" : "# 1 Pediarix at 6 wks-4 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2006-05-12T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2006-06-13T00:00:00",
			"EvaluationTestType" : "Age: At Absolute Minimum",
			"ForecastNumber" : 2,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2006-10-01T00:00:00",
			"RecommendedDate" : "2006-08-04T00:00:00",
			"VaccineGroup" : "POL"
		},
		"PatientProfile" : {
			"Dob" : "2006-04-04T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "110",
					"DateAdministered" : "2006-05-12T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0699",
		"TestCaseName" : "dose 1 to 2 Pediarix, interval 28-5 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-01-26T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2011-02-23T00:00:00",
			"EvaluationTestType" : "Interval: Below Absolute Minimum",
			"ForecastNumber" : 2,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2011-04-28T00:00:00",
			"RecommendedDate" : "2011-03-01T00:00:00",
			"VaccineGroup" : "POL"
		},
		"PatientProfile" : {
			"Dob" : "2010-11-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "110",
					"DateAdministered" : "2011-01-03T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2011-01-26T00:00:00",
					"EvaluationReason" : "Interval: Too Short",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0700",
		"TestCaseName" : "dose 1 to 2 Pediarix, interval 28-4 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2006-04-25T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2006-05-23T00:00:00",
			"EvaluationTestType" : "Interval: At Absolute Minimum",
			"ForecastNumber" : 3,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2006-09-28T00:00:00",
			"RecommendedDate" : "2006-08-01T00:00:00",
			"VaccineGroup" : "POL"
		},
		"PatientProfile" : {
			"Dob" : "2006-02-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "110",
					"DateAdministered" : "2006-04-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2006-04-25T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0701",
		"TestCaseName" : "dose 2 to 3 Pediarix, interval 28-5 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-08-24T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2011-09-21T00:00:00",
			"EvaluationTestType" : "Interval: Below Absolute Minimum",
			"ForecastNumber" : 3,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2011-11-28T00:00:00",
			"RecommendedDate" : "2011-10-01T00:00:00",
			"VaccineGroup" : "POL"
		},
		"PatientProfile" : {
			"Dob" : "2011-04-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "110",
					"DateAdministered" : "2011-06-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2011-08-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2011-08-24T00:00:00",
					"EvaluationReason" : "Interval: Too Short",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0702",
		"TestCaseName" : "dose 2 to 3 Pediarix, interval 28-4 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2006-04-25T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2009-12-01T00:00:00",
			"EvaluationTestType" : "Interval: At Absolute Minimum",
			"ForecastNumber" : 4,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2012-12-28T00:00:00",
			"RecommendedDate" : "2009-12-01T00:00:00",
			"VaccineGroup" : "POL"
		},
		"PatientProfile" : {
			"Dob" : "2005-12-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "110",
					"DateAdministered" : "2006-02-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2006-04-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2006-04-25T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0704",
		"TestCaseName" : "dose 3 to 4 Pediarix, interval 6m-4 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2010-10-05T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2013-08-09T00:00:00",
			"EvaluationTestType" : "Age: Below Absolute Minimum",
			"ForecastNumber" : 4,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2016-09-05T00:00:00",
			"RecommendedDate" : "2013-08-09T00:00:00",
			"VaccineGroup" : "POL"
		},
		"PatientProfile" : {
			"Dob" : "2009-08-09T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "110",
					"DateAdministered" : "2009-10-09T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2009-12-09T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2010-04-09T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2010-10-05T00:00:00",
					"EvaluationReason" : "Age: Too Young",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0707",
		"TestCaseName" : "invalid dose 1-2 interval in midst of others",
		"ExpectedForecast" : {
			"AssessmentDate" : "2009-06-11T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2009-07-09T00:00:00",
			"EvaluationTestType" : "Interval: Below Absolute Minimum",
			"ForecastNumber" : 3,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2009-10-08T00:00:00",
			"RecommendedDate" : "2009-08-11T00:00:00",
			"VaccineGroup" : "POL"
		},
		"PatientProfile" : {
			"Dob" : "2009-02-11T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "110",
					"DateAdministered" : "2009-04-11T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2009-04-30T00:00:00",
					"EvaluationReason" : "Interval: Too Short",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2009-06-11T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0708",
		"TestCaseName" : "invalid dose 2-3 interval in midst of others",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-02-02T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2014-02-02T00:00:00",
			"EvaluationTestType" : "Interval: Below Absolute Minimum",
			"ForecastNumber" : 4,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2017-03-01T00:00:00",
			"RecommendedDate" : "2014-02-02T00:00:00",
			"VaccineGroup" : "POL"
		},
		"PatientProfile" : {
			"Dob" : "2010-02-02T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "110",
					"DateAdministered" : "2010-04-02T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2010-06-02T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2010-06-25T00:00:00",
					"EvaluationReason" : "Interval: Too Short",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2011-02-02T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0709",
		"TestCaseName" : "# 1 Pediarix at 6 wks",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-12-13T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2012-01-10T00:00:00",
			"EvaluationTestType" : "Age: At Minimum",
			"ForecastNumber" : 2,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2012-04-28T00:00:00",
			"RecommendedDate" : "2012-03-01T00:00:00",
			"VaccineGroup" : "POL"
		},
		"PatientProfile" : {
			"Dob" : "2011-11-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "110",
					"DateAdministered" : "2011-12-13T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0712",
		"TestCaseName" : "# 1 Pediarix at 6 yrs 11.5 mo",
		"ExpectedForecast" : {
			"AssessmentDate" : "2012-03-16T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2012-04-13T00:00:00",
			"EvaluationTestType" : "All Valid: Forecast Test",
			"ForecastNumber" : 2,
			"ForecastTestType" : "Recommended based on minimum interval from previous dose (catch-up)",
			"PastDueDate" : "2012-04-13T00:00:00",
			"RecommendedDate" : "2012-04-13T00:00:00",
			"VaccineGroup" : "POL"
		},
		"PatientProfile" : {
			"Dob" : "2005-04-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "110",
					"DateAdministered" : "2012-03-16T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0713",
		"TestCaseName" : "# 1 Pediarix at 7 yrs",
		"ExpectedForecast" : {
			"AssessmentDate" : "2012-02-01T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2012-02-29T00:00:00",
			"EvaluationTestType" : "Vaccine: Off Label",
			"ForecastNumber" : 2,
			"ForecastTestType" : "Recommended based on minimum interval from previous dose (catch-up)",
			"PastDueDate" : "2012-02-29T00:00:00",
			"RecommendedDate" : "2012-02-29T00:00:00",
			"VaccineGroup" : "POL"
		},
		"PatientProfile" : {
			"Dob" : "2005-02-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "110",
					"DateAdministered" : "2012-02-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0714",
		"TestCaseName" : "# 2 Pediarix at 10 wks-5 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-12-14T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2012-01-11T00:00:00",
			"EvaluationTestType" : "Age: Below Absolute Minimum",
			"ForecastNumber" : 2,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2012-04-06T00:00:00",
			"RecommendedDate" : "2012-02-10T00:00:00",
			"VaccineGroup" : "POL"
		},
		"PatientProfile" : {
			"Dob" : "2011-10-10T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "110",
					"DateAdministered" : "2011-11-17T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2011-12-14T00:00:00",
					"EvaluationReason" : "Age: Too Young",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0715",
		"TestCaseName" : "# 2 Pediarix at 10 wks-4 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-05-03T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2011-06-04T00:00:00",
			"EvaluationTestType" : "Age: At Absolute Minimum",
			"ForecastNumber" : 3,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2011-10-23T00:00:00",
			"RecommendedDate" : "2011-08-26T00:00:00",
			"VaccineGroup" : "POL"
		},
		"PatientProfile" : {
			"Dob" : "2011-02-26T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "110",
					"DateAdministered" : "2011-04-07T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2011-05-03T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0716",
		"TestCaseName" : "# 2 Pediarix at 10 wks",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-05-07T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2011-06-04T00:00:00",
			"EvaluationTestType" : "Age: At Minimum",
			"ForecastNumber" : 3,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2011-10-23T00:00:00",
			"RecommendedDate" : "2011-08-26T00:00:00",
			"VaccineGroup" : "POL"
		},
		"PatientProfile" : {
			"Dob" : "2011-02-26T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "110",
					"DateAdministered" : "2011-04-07T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}, {
					"Cvx" : "110",
					"DateAdministered" : "2011-05-07T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "PEDIARIX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0717",
		"TestCaseName" : "Newborn",
		"ExpectedForecast" : {
			"AssessmentDate" : "2012-02-01T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2012-03-14T00:00:00",
			"EvaluationTestType" : "No Doses Administered",
			"ForecastNumber" : 1,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2012-05-28T00:00:00",
			"RecommendedDate" : "2012-04-01T00:00:00",
			"VaccineGroup" : "POL"
		},
		"PatientProfile" : {
			"Dob" : "2012-02-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : []
		}
	}, {
		"CdcTestId" : "2013-0718",
		"TestCaseName" : "# 2 Pentacel at 6 yrs 11.5 mo. Off label but counts.",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-12-15T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2012-06-15T00:00:00",
			"EvaluationTestType" : "Vaccine: Off Label",
			"ForecastNumber" : 3,
			"ForecastTestType" : "Recommended based on minimum interval from previous dose (catch-up)",
			"PastDueDate" : "2012-06-15T00:00:00",
			"RecommendedDate" : "2012-06-15T00:00:00",
			"VaccineGroup" : "POL"
		},
		"PatientProfile" : {
			"Dob" : "2005-01-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "120",
					"DateAdministered" : "2007-09-22T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}, {
					"Cvx" : "120",
					"DateAdministered" : "2011-12-15T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0719",
		"TestCaseName" : "Pentacel at 7 yrs; # 1 at age < 12 mo.   Off label use. ",
		"ExpectedForecast" : {
			"AssessmentDate" : "2010-09-16T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2011-03-16T00:00:00",
			"EvaluationTestType" : "Vaccine: Off Label",
			"ForecastNumber" : 3,
			"ForecastTestType" : "Recommended based on minimum interval from previous dose (catch-up)",
			"PastDueDate" : "2011-03-16T00:00:00",
			"RecommendedDate" : "2011-03-16T00:00:00",
			"VaccineGroup" : "POL"
		},
		"PatientProfile" : {
			"Dob" : "2003-09-16T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "10",
					"DateAdministered" : "2004-02-25T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "IPOL"
				}, {
					"Cvx" : "120",
					"DateAdministered" : "2010-09-16T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0720",
		"TestCaseName" : "# 2 Pentacel at 7 yrs; # 1 at age ≥ 12 mo.",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-09-16T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2012-03-16T00:00:00",
			"EvaluationTestType" : "Vaccine: Off Label",
			"ForecastNumber" : 3,
			"ForecastTestType" : "Recommended based on minimum interval from previous dose (catch-up)",
			"PastDueDate" : "2012-03-16T00:00:00",
			"RecommendedDate" : "2012-03-16T00:00:00",
			"VaccineGroup" : "POL"
		},
		"PatientProfile" : {
			"Dob" : "2004-09-16T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "10",
					"DateAdministered" : "2005-11-19T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "IPOL"
				}, {
					"Cvx" : "120",
					"DateAdministered" : "2011-09-16T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0721",
		"TestCaseName" : "# 3 Pentacel at 14 wks-5 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2010-09-02T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2010-09-30T00:00:00",
			"EvaluationTestType" : "Age: Below Absolute Minimum",
			"ForecastNumber" : 3,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2011-01-28T00:00:00",
			"RecommendedDate" : "2010-12-01T00:00:00",
			"VaccineGroup" : "POL"
		},
		"PatientProfile" : {
			"Dob" : "2010-06-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "120",
					"DateAdministered" : "2010-07-09T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}, {
					"Cvx" : "120",
					"DateAdministered" : "2010-08-06T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}, {
					"Cvx" : "120",
					"DateAdministered" : "2010-09-02T00:00:00",
					"EvaluationReason" : "Age: Too Young",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0722",
		"TestCaseName" : "# 3 Pentacel at 14 wks-4 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2010-09-03T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2014-06-01T00:00:00",
			"EvaluationTestType" : "Age: At Absolute Minimum",
			"ForecastNumber" : 4,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2017-06-28T00:00:00",
			"RecommendedDate" : "2014-06-01T00:00:00",
			"VaccineGroup" : "POL"
		},
		"PatientProfile" : {
			"Dob" : "2010-06-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "120",
					"DateAdministered" : "2010-07-09T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}, {
					"Cvx" : "120",
					"DateAdministered" : "2010-08-06T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}, {
					"Cvx" : "120",
					"DateAdministered" : "2010-09-03T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0723",
		"TestCaseName" : "# 3 Pentacel at 6 yrs 11.5 mo",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-12-30T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "Vaccine: Off Label",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: series complete",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "POL"
		},
		"PatientProfile" : {
			"Dob" : "2005-01-15T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "10",
					"DateAdministered" : "2005-03-15T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "IPOL"
				}, {
					"Cvx" : "10",
					"DateAdministered" : "2005-05-15T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "IPOL"
				}, {
					"Cvx" : "120",
					"DateAdministered" : "2011-12-30T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0724",
		"TestCaseName" : "# 4 Pentacel at 1 yr -5 days.  ",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-03-30T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2014-04-04T00:00:00",
			"EvaluationTestType" : "Age: Below Absolute Minimum",
			"ForecastNumber" : 4,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2017-05-01T00:00:00",
			"RecommendedDate" : "2014-04-04T00:00:00",
			"VaccineGroup" : "POL"
		},
		"PatientProfile" : {
			"Dob" : "2010-04-04T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "120",
					"DateAdministered" : "2010-06-04T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}, {
					"Cvx" : "120",
					"DateAdministered" : "2010-08-04T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}, {
					"Cvx" : "120",
					"DateAdministered" : "2010-10-04T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}, {
					"Cvx" : "120",
					"DateAdministered" : "2011-03-30T00:00:00",
					"EvaluationReason" : "Age: Too Young",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0725",
		"TestCaseName" : "# 4 Pentacel at 1 yr -4 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-03-31T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2014-04-04T00:00:00",
			"EvaluationTestType" : "Age: Below Absolute Minimum",
			"ForecastNumber" : 4,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2017-05-01T00:00:00",
			"RecommendedDate" : "2014-04-04T00:00:00",
			"VaccineGroup" : "POL"
		},
		"PatientProfile" : {
			"Dob" : "2010-04-04T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "120",
					"DateAdministered" : "2010-06-04T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}, {
					"Cvx" : "120",
					"DateAdministered" : "2010-08-04T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}, {
					"Cvx" : "120",
					"DateAdministered" : "2010-10-04T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}, {
					"Cvx" : "120",
					"DateAdministered" : "2011-03-31T00:00:00",
					"EvaluationReason" : "Age: Too Young",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0726",
		"TestCaseName" : "# 4 Pentacel ≥ age 12 mo",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-04-04T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2014-04-04T00:00:00",
			"EvaluationTestType" : "Age: Below Absolute Minimum",
			"ForecastNumber" : 4,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2017-05-01T00:00:00",
			"RecommendedDate" : "2014-04-04T00:00:00",
			"VaccineGroup" : "POL"
		},
		"PatientProfile" : {
			"Dob" : "2010-04-04T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "120",
					"DateAdministered" : "2010-06-04T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}, {
					"Cvx" : "120",
					"DateAdministered" : "2010-08-04T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}, {
					"Cvx" : "120",
					"DateAdministered" : "2010-10-04T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}, {
					"Cvx" : "120",
					"DateAdministered" : "2011-04-04T00:00:00",
					"EvaluationReason" : "Age: Too Young",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0727",
		"TestCaseName" : "# 4 Pentacel at 4 yrs",
		"ExpectedForecast" : {
			"AssessmentDate" : "2010-05-06T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "Age: At Minimum",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: series complete",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "POL"
		},
		"PatientProfile" : {
			"Dob" : "2006-05-06T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "120",
					"DateAdministered" : "2006-09-15T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}, {
					"Cvx" : "120",
					"DateAdministered" : "2007-04-28T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}, {
					"Cvx" : "120",
					"DateAdministered" : "2009-11-06T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}, {
					"Cvx" : "120",
					"DateAdministered" : "2010-05-06T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0728",
		"TestCaseName" : "# 1 Pentacel at 6 wks-5 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2010-06-12T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2010-06-17T00:00:00",
			"EvaluationTestType" : "Age: Below Absolute Minimum",
			"ForecastNumber" : 1,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2010-09-02T00:00:00",
			"RecommendedDate" : "2010-07-06T00:00:00",
			"VaccineGroup" : "POL"
		},
		"PatientProfile" : {
			"Dob" : "2010-05-06T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "120",
					"DateAdministered" : "2010-06-12T00:00:00",
					"EvaluationReason" : "Age: Too Young",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0729",
		"TestCaseName" : "# 5 Pentacel at ≥ 4 yrs",
		"ExpectedForecast" : {
			"AssessmentDate" : "2012-03-01T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "Age: Below Absolute Minimum",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: series complete",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "POL"
		},
		"PatientProfile" : {
			"Dob" : "2008-02-08T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "120",
					"DateAdministered" : "2009-01-08T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}, {
					"Cvx" : "120",
					"DateAdministered" : "2009-04-08T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}, {
					"Cvx" : "120",
					"DateAdministered" : "2009-07-08T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}, {
					"Cvx" : "120",
					"DateAdministered" : "2009-12-09T00:00:00",
					"EvaluationReason" : "Age: Too Young",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}, {
					"Cvx" : "120",
					"DateAdministered" : "2012-03-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0730",
		"TestCaseName" : "# 4 Pentacel at 5 yrs=off label ",
		"ExpectedForecast" : {
			"AssessmentDate" : "2012-02-10T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "Vaccine: Off Label",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: series complete",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "POL"
		},
		"PatientProfile" : {
			"Dob" : "2007-02-08T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "120",
					"DateAdministered" : "2007-06-08T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}, {
					"Cvx" : "120",
					"DateAdministered" : "2007-12-05T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}, {
					"Cvx" : "120",
					"DateAdministered" : "2008-02-07T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}, {
					"Cvx" : "120",
					"DateAdministered" : "2012-02-10T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0731",
		"TestCaseName" : "invalid age dose 1 as first of others",
		"ExpectedForecast" : {
			"AssessmentDate" : "2012-02-01T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2012-02-29T00:00:00",
			"EvaluationTestType" : "Age: Below Absolute Minimum",
			"ForecastNumber" : 3,
			"ForecastTestType" : "Recommended based on minimum interval from previous dose (catch-up)",
			"PastDueDate" : "2012-03-28T00:00:00",
			"RecommendedDate" : "2012-02-29T00:00:00",
			"VaccineGroup" : "POL"
		},
		"PatientProfile" : {
			"Dob" : "2011-08-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "120",
					"DateAdministered" : "2011-09-05T00:00:00",
					"EvaluationReason" : "Age: Too Young",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}, {
					"Cvx" : "120",
					"DateAdministered" : "2011-12-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}, {
					"Cvx" : "120",
					"DateAdministered" : "2012-02-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0732",
		"TestCaseName" : "invalid age dose 2 in midst of others",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-10-20T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2014-10-18T00:00:00",
			"EvaluationTestType" : "Age: Below Absolute Minimum",
			"ForecastNumber" : 4,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2017-11-14T00:00:00",
			"RecommendedDate" : "2014-10-18T00:00:00",
			"VaccineGroup" : "POL"
		},
		"PatientProfile" : {
			"Dob" : "2010-10-18T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "120",
					"DateAdministered" : "2010-11-25T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}, {
					"Cvx" : "120",
					"DateAdministered" : "2010-12-22T00:00:00",
					"EvaluationReason" : "Age: Too Young",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}, {
					"Cvx" : "120",
					"DateAdministered" : "2011-03-10T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}, {
					"Cvx" : "120",
					"DateAdministered" : "2011-10-20T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0733",
		"TestCaseName" : "invalid age dose 3 in midst of others",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-07-07T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2014-06-01T00:00:00",
			"EvaluationTestType" : "Age: Below Absolute Minimum",
			"ForecastNumber" : 4,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2017-06-28T00:00:00",
			"RecommendedDate" : "2014-06-01T00:00:00",
			"VaccineGroup" : "POL"
		},
		"PatientProfile" : {
			"Dob" : "2010-06-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "120",
					"DateAdministered" : "2010-07-09T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}, {
					"Cvx" : "120",
					"DateAdministered" : "2010-08-06T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}, {
					"Cvx" : "120",
					"DateAdministered" : "2010-09-02T00:00:00",
					"EvaluationReason" : "Age: Too Young",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}, {
					"Cvx" : "120",
					"DateAdministered" : "2011-07-07T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0734",
		"TestCaseName" : "dose 1 to 2 Pentacel, interval 28-5 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2010-01-26T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2010-02-23T00:00:00",
			"EvaluationTestType" : "Interval: Below Absolute Minimum",
			"ForecastNumber" : 2,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2010-05-06T00:00:00",
			"RecommendedDate" : "2010-03-09T00:00:00",
			"VaccineGroup" : "POL"
		},
		"PatientProfile" : {
			"Dob" : "2009-11-09T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "120",
					"DateAdministered" : "2010-01-03T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}, {
					"Cvx" : "120",
					"DateAdministered" : "2010-01-26T00:00:00",
					"EvaluationReason" : "Interval: Too Short",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0735",
		"TestCaseName" : "dose 1 to 2 Pentacel, interval 28-4 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2010-01-27T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2010-02-24T00:00:00",
			"EvaluationTestType" : "Interval: At Absolute Minimum",
			"ForecastNumber" : 3,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2010-06-28T00:00:00",
			"RecommendedDate" : "2010-05-01T00:00:00",
			"VaccineGroup" : "POL"
		},
		"PatientProfile" : {
			"Dob" : "2009-11-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "120",
					"DateAdministered" : "2010-01-03T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}, {
					"Cvx" : "120",
					"DateAdministered" : "2010-01-27T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0736",
		"TestCaseName" : "dose 2 to 3 Pentacel, interval 28-5 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2008-08-24T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2008-09-21T00:00:00",
			"EvaluationTestType" : "Interval: Below Absolute Minimum",
			"ForecastNumber" : 3,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2008-11-28T00:00:00",
			"RecommendedDate" : "2008-10-01T00:00:00",
			"VaccineGroup" : "POL"
		},
		"PatientProfile" : {
			"Dob" : "2008-04-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "120",
					"DateAdministered" : "2008-06-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}, {
					"Cvx" : "120",
					"DateAdministered" : "2008-08-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}, {
					"Cvx" : "120",
					"DateAdministered" : "2008-08-24T00:00:00",
					"EvaluationReason" : "Interval: Too Short",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0737",
		"TestCaseName" : "dose 2 to 3 Pentacel, interval 28-4 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2008-08-25T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2012-04-01T00:00:00",
			"EvaluationTestType" : "Interval: At Absolute Minimum",
			"ForecastNumber" : 4,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2015-04-28T00:00:00",
			"RecommendedDate" : "2012-04-01T00:00:00",
			"VaccineGroup" : "POL"
		},
		"PatientProfile" : {
			"Dob" : "2008-04-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "120",
					"DateAdministered" : "2008-06-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}, {
					"Cvx" : "120",
					"DateAdministered" : "2008-08-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}, {
					"Cvx" : "120",
					"DateAdministered" : "2008-08-25T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0739",
		"TestCaseName" : "# 1 Pentacel at 6 wks-4 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2008-05-12T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2008-06-13T00:00:00",
			"EvaluationTestType" : "Age: At Absolute Minimum",
			"ForecastNumber" : 2,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2008-10-01T00:00:00",
			"RecommendedDate" : "2008-08-04T00:00:00",
			"VaccineGroup" : "POL"
		},
		"PatientProfile" : {
			"Dob" : "2008-04-04T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "120",
					"DateAdministered" : "2008-05-12T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0740",
		"TestCaseName" : "dose 3 to 4 Pentacel, interval 6m-4 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2010-10-05T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2013-08-09T00:00:00",
			"EvaluationTestType" : "Age: Below Absolute Minimum",
			"ForecastNumber" : 4,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2016-09-05T00:00:00",
			"RecommendedDate" : "2013-08-09T00:00:00",
			"VaccineGroup" : "POL"
		},
		"PatientProfile" : {
			"Dob" : "2009-08-09T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "120",
					"DateAdministered" : "2009-10-09T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}, {
					"Cvx" : "120",
					"DateAdministered" : "2010-02-09T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}, {
					"Cvx" : "120",
					"DateAdministered" : "2010-04-09T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}, {
					"Cvx" : "120",
					"DateAdministered" : "2010-10-05T00:00:00",
					"EvaluationReason" : "Age: Too Young",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0743",
		"TestCaseName" : "invalid dose 1-2 interval in midst of others",
		"ExpectedForecast" : {
			"AssessmentDate" : "2009-08-01T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2009-08-29T00:00:00",
			"EvaluationTestType" : "Interval: Below Absolute Minimum",
			"ForecastNumber" : 3,
			"ForecastTestType" : "Recommended based on minimum interval from previous dose (catch-up)",
			"PastDueDate" : "2009-10-08T00:00:00",
			"RecommendedDate" : "2009-08-29T00:00:00",
			"VaccineGroup" : "POL"
		},
		"PatientProfile" : {
			"Dob" : "2009-02-11T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "120",
					"DateAdministered" : "2009-04-11T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}, {
					"Cvx" : "120",
					"DateAdministered" : "2009-05-04T00:00:00",
					"EvaluationReason" : "Interval: Too Short",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}, {
					"Cvx" : "120",
					"DateAdministered" : "2009-08-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0744",
		"TestCaseName" : "invalid dose 2-3 interval in midst of others",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-02-05T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2014-02-02T00:00:00",
			"EvaluationTestType" : "Interval: Below Absolute Minimum",
			"ForecastNumber" : 4,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2017-03-01T00:00:00",
			"RecommendedDate" : "2014-02-02T00:00:00",
			"VaccineGroup" : "POL"
		},
		"PatientProfile" : {
			"Dob" : "2010-02-02T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "120",
					"DateAdministered" : "2010-04-02T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}, {
					"Cvx" : "120",
					"DateAdministered" : "2010-06-02T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}, {
					"Cvx" : "120",
					"DateAdministered" : "2010-06-23T00:00:00",
					"EvaluationReason" : "Interval: Too Short",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}, {
					"Cvx" : "120",
					"DateAdministered" : "2011-02-05T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0747",
		"TestCaseName" : "# 1 Pentacel at 6 wks",
		"ExpectedForecast" : {
			"AssessmentDate" : "2008-05-16T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2008-06-13T00:00:00",
			"EvaluationTestType" : "Age: At Minimum",
			"ForecastNumber" : 2,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2008-10-01T00:00:00",
			"RecommendedDate" : "2008-08-04T00:00:00",
			"VaccineGroup" : "POL"
		},
		"PatientProfile" : {
			"Dob" : "2008-04-04T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "120",
					"DateAdministered" : "2008-05-16T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0748",
		"TestCaseName" : "# 1 Pentacel at 6 yrs 11.5 mo",
		"ExpectedForecast" : {
			"AssessmentDate" : "2012-01-02T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2012-01-30T00:00:00",
			"EvaluationTestType" : "Vaccine: Off Label",
			"ForecastNumber" : 2,
			"ForecastTestType" : "Recommended based on minimum interval from previous dose (catch-up)",
			"PastDueDate" : "2012-01-30T00:00:00",
			"RecommendedDate" : "2012-01-30T00:00:00",
			"VaccineGroup" : "POL"
		},
		"PatientProfile" : {
			"Dob" : "2005-01-15T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "120",
					"DateAdministered" : "2012-01-02T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0749",
		"TestCaseName" : "# 1 Pentacel at 7 yrs.  Off label",
		"ExpectedForecast" : {
			"AssessmentDate" : "2012-02-01T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2012-02-29T00:00:00",
			"EvaluationTestType" : "Vaccine: Off Label",
			"ForecastNumber" : 2,
			"ForecastTestType" : "Recommended based on minimum interval from previous dose (catch-up)",
			"PastDueDate" : "2012-02-29T00:00:00",
			"RecommendedDate" : "2012-02-29T00:00:00",
			"VaccineGroup" : "POL"
		},
		"PatientProfile" : {
			"Dob" : "2005-02-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "120",
					"DateAdministered" : "2012-02-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0750",
		"TestCaseName" : "# 2 Pentacel at 10 wks-5 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2010-12-14T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2011-01-11T00:00:00",
			"EvaluationTestType" : "Age: Below Absolute Minimum",
			"ForecastNumber" : 2,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2011-04-06T00:00:00",
			"RecommendedDate" : "2011-02-10T00:00:00",
			"VaccineGroup" : "POL"
		},
		"PatientProfile" : {
			"Dob" : "2010-10-10T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "120",
					"DateAdministered" : "2010-11-17T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}, {
					"Cvx" : "120",
					"DateAdministered" : "2010-12-14T00:00:00",
					"EvaluationReason" : "Age: Too Young",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0751",
		"TestCaseName" : "# 2 Pentacel at 10 wks-4 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2010-12-15T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2011-01-16T00:00:00",
			"EvaluationTestType" : "Age: At Absolute Minimum",
			"ForecastNumber" : 3,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2011-06-06T00:00:00",
			"RecommendedDate" : "2011-04-10T00:00:00",
			"VaccineGroup" : "POL"
		},
		"PatientProfile" : {
			"Dob" : "2010-10-10T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "120",
					"DateAdministered" : "2010-11-17T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}, {
					"Cvx" : "120",
					"DateAdministered" : "2010-12-15T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0752",
		"TestCaseName" : "# 2 Pentacel at 6 yrs .  Off label",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-01-15T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2011-07-15T00:00:00",
			"EvaluationTestType" : "Vaccine: Off Label",
			"ForecastNumber" : 3,
			"ForecastTestType" : "Recommended based on minimum interval from previous dose (catch-up)",
			"PastDueDate" : "2012-02-11T00:00:00",
			"RecommendedDate" : "2011-07-15T00:00:00",
			"VaccineGroup" : "POL"
		},
		"PatientProfile" : {
			"Dob" : "2005-01-15T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "120",
					"DateAdministered" : "2006-01-15T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}, {
					"Cvx" : "120",
					"DateAdministered" : "2011-01-15T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "PMC",
					"VaccineName" : "PENTACEL"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0753",
		"TestCaseName" : "Newborn forecast",
		"ExpectedForecast" : {
			"AssessmentDate" : "2012-04-01T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2012-05-13T00:00:00",
			"EvaluationTestType" : "No Doses Administered",
			"ForecastNumber" : 1,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : null,
			"RecommendedDate" : "2012-06-01T00:00:00",
			"VaccineGroup" : "Rota"
		},
		"PatientProfile" : {
			"Dob" : "2012-04-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : []
		}
	}, {
		"CdcTestId" : "2013-0754",
		"TestCaseName" : "Dose # 3 Rotateq at age 14 weeks",
		"ExpectedForecast" : {
			"AssessmentDate" : "2012-02-07T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "Age: At Minimum",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: series complete",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "Rota"
		},
		"PatientProfile" : {
			"Dob" : "2011-11-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "116",
					"DateAdministered" : "2011-12-13T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "ROTATEQ"
				}, {
					"Cvx" : "116",
					"DateAdministered" : "2012-01-10T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "ROTATEQ"
				}, {
					"Cvx" : "116",
					"DateAdministered" : "2012-02-07T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "ROTATEQ"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0755",
		"TestCaseName" : "Dose # 3 Rotateq at age 6 months",
		"ExpectedForecast" : {
			"AssessmentDate" : "2012-05-01T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "Age: At Recommended",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: series complete",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "Rota"
		},
		"PatientProfile" : {
			"Dob" : "2011-11-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "116",
					"DateAdministered" : "2012-01-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "ROTATEQ"
				}, {
					"Cvx" : "116",
					"DateAdministered" : "2012-03-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "ROTATEQ"
				}, {
					"Cvx" : "116",
					"DateAdministered" : "2012-05-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "ROTATEQ"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0756",
		"TestCaseName" : "Dose 1 to dose 2 Rotateq interval 28-5 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2012-04-17T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2012-05-15T00:00:00",
			"EvaluationTestType" : "Interval: Below Absolute Minimum",
			"ForecastNumber" : 2,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2012-08-01T00:00:00",
			"RecommendedDate" : "2012-06-05T00:00:00",
			"VaccineGroup" : "Rota"
		},
		"PatientProfile" : {
			"Dob" : "2012-02-05T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "116",
					"DateAdministered" : "2012-03-25T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "ROTATEQ"
				}, {
					"Cvx" : "116",
					"DateAdministered" : "2012-04-17T00:00:00",
					"EvaluationReason" : "Interval: Too Short",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : "MSD",
					"VaccineName" : "ROTATEQ"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0757",
		"TestCaseName" : "Dose 1 to dose 2 Rotateq interval 28-4 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2012-04-18T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2012-05-16T00:00:00",
			"EvaluationTestType" : "Interval: At Absolute Minimum",
			"ForecastNumber" : 3,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2012-10-02T00:00:00",
			"RecommendedDate" : "2012-08-05T00:00:00",
			"VaccineGroup" : "Rota"
		},
		"PatientProfile" : {
			"Dob" : "2012-02-05T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "116",
					"DateAdministered" : "2012-03-25T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "ROTATEQ"
				}, {
					"Cvx" : "116",
					"DateAdministered" : "2012-04-18T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "ROTATEQ"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0758",
		"TestCaseName" : "Dose 1 to dose 2 Rotateq interval 28 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2012-04-22T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2012-05-20T00:00:00",
			"EvaluationTestType" : "Interval: At Minimum",
			"ForecastNumber" : 3,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2012-10-02T00:00:00",
			"RecommendedDate" : "2012-08-05T00:00:00",
			"VaccineGroup" : "Rota"
		},
		"PatientProfile" : {
			"Dob" : "2012-02-05T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "116",
					"DateAdministered" : "2012-03-25T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "ROTATEQ"
				}, {
					"Cvx" : "116",
					"DateAdministered" : "2012-04-22T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "ROTATEQ"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0759",
		"TestCaseName" : "Dose 2 to dose 3 Rotateq  interval 28-5 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2012-02-25T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2012-03-24T00:00:00",
			"EvaluationTestType" : "Interval: Below Absolute Minimum",
			"ForecastNumber" : 3,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2012-06-28T00:00:00",
			"RecommendedDate" : "2012-05-01T00:00:00",
			"VaccineGroup" : "Rota"
		},
		"PatientProfile" : {
			"Dob" : "2011-11-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "116",
					"DateAdministered" : "2011-12-28T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "ROTATEQ"
				}, {
					"Cvx" : "116",
					"DateAdministered" : "2012-02-02T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "ROTATEQ"
				}, {
					"Cvx" : "116",
					"DateAdministered" : "2012-02-25T00:00:00",
					"EvaluationReason" : "Interval: Too Short",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : "MSD",
					"VaccineName" : "ROTATEQ"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0760",
		"TestCaseName" : "Dose 2 to dose 3 Rotateq interval  28-4 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2012-02-26T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "Interval: At Absolute Minimum",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: series complete",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "Rota"
		},
		"PatientProfile" : {
			"Dob" : "2011-11-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "116",
					"DateAdministered" : "2011-12-28T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "ROTATEQ"
				}, {
					"Cvx" : "116",
					"DateAdministered" : "2012-02-02T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "ROTATEQ"
				}, {
					"Cvx" : "116",
					"DateAdministered" : "2012-02-26T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "ROTATEQ"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0761",
		"TestCaseName" : "Dose 2 to dose 3 Rotateq interval 28 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2012-03-01T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "Interval: At Minimum",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: series complete",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "Rota"
		},
		"PatientProfile" : {
			"Dob" : "2011-11-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "116",
					"DateAdministered" : "2011-12-28T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "ROTATEQ"
				}, {
					"Cvx" : "116",
					"DateAdministered" : "2012-02-02T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "ROTATEQ"
				}, {
					"Cvx" : "116",
					"DateAdministered" : "2012-03-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "ROTATEQ"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0762",
		"TestCaseName" : "Dose # 1 Rotarix at age 6 weeks-5 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2012-02-08T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2012-02-13T00:00:00",
			"EvaluationTestType" : "Age: Below Absolute Minimum",
			"ForecastNumber" : 1,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : null,
			"RecommendedDate" : "2012-03-02T00:00:00",
			"VaccineGroup" : "Rota"
		},
		"PatientProfile" : {
			"Dob" : "2012-01-02T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "119",
					"DateAdministered" : "2012-02-08T00:00:00",
					"EvaluationReason" : "Age: Too Young",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : "SKB",
					"VaccineName" : "ROTARIX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0763",
		"TestCaseName" : "Dose # 1 Rotarix at age 6 weeks-4 days ",
		"ExpectedForecast" : {
			"AssessmentDate" : "2012-02-09T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2012-03-12T00:00:00",
			"EvaluationTestType" : "Age: At Absolute Minimum",
			"ForecastNumber" : 2,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2012-06-29T00:00:00",
			"RecommendedDate" : "2012-05-02T00:00:00",
			"VaccineGroup" : "Rota"
		},
		"PatientProfile" : {
			"Dob" : "2012-01-02T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "119",
					"DateAdministered" : "2012-02-09T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "ROTARIX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0764",
		"TestCaseName" : "Dose # 1 Rotateq at age 6 weeks-5 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2012-02-07T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2012-02-12T00:00:00",
			"EvaluationTestType" : "Age: Below Absolute Minimum",
			"ForecastNumber" : 1,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : null,
			"RecommendedDate" : "2012-03-01T00:00:00",
			"VaccineGroup" : "Rota"
		},
		"PatientProfile" : {
			"Dob" : "2012-01-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "116",
					"DateAdministered" : "2012-02-07T00:00:00",
					"EvaluationReason" : "Age: Too Young",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : "MSD",
					"VaccineName" : "ROTATEQ"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0765",
		"TestCaseName" : "Dose # 1 Rotarix at age 6 weeks",
		"ExpectedForecast" : {
			"AssessmentDate" : "2012-02-13T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2012-03-12T00:00:00",
			"EvaluationTestType" : "Age: At Minimum",
			"ForecastNumber" : 2,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2012-06-29T00:00:00",
			"RecommendedDate" : "2012-05-02T00:00:00",
			"VaccineGroup" : "Rota"
		},
		"PatientProfile" : {
			"Dob" : "2012-01-02T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "119",
					"DateAdministered" : "2012-02-13T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "ROTARIX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0766",
		"TestCaseName" : "Dose # 2 Rotarix at age 10 weeks-5 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2012-02-04T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2012-03-03T00:00:00",
			"EvaluationTestType" : "Age: Below Absolute Minimum",
			"ForecastNumber" : 2,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2012-05-28T00:00:00",
			"RecommendedDate" : "2012-04-01T00:00:00",
			"VaccineGroup" : "Rota"
		},
		"PatientProfile" : {
			"Dob" : "2011-12-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "119",
					"DateAdministered" : "2012-01-10T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "ROTARIX"
				}, {
					"Cvx" : "119",
					"DateAdministered" : "2012-02-04T00:00:00",
					"EvaluationReason" : "Age: Too Young",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : "SKB",
					"VaccineName" : "ROTARIX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0767",
		"TestCaseName" : "Dose # 2 Rotarix at age 10 weeks-4 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2012-02-05T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "Age: At Absolute Minimum",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: series complete",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "Rota"
		},
		"PatientProfile" : {
			"Dob" : "2011-12-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "119",
					"DateAdministered" : "2012-01-12T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "ROTARIX"
				}, {
					"Cvx" : "119",
					"DateAdministered" : "2012-02-05T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "ROTARIX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0768",
		"TestCaseName" : "Dose # 2 Rotarix at age 10 weeks",
		"ExpectedForecast" : {
			"AssessmentDate" : "2012-02-09T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "Age: At Minimum",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: series complete",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "Rota"
		},
		"PatientProfile" : {
			"Dob" : "2011-12-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "119",
					"DateAdministered" : "2012-01-12T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "ROTARIX"
				}, {
					"Cvx" : "119",
					"DateAdministered" : "2012-02-09T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "ROTARIX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0769",
		"TestCaseName" : "Dose 1 to dose 2 Rotarix interval 28-5 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2012-02-24T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2012-03-23T00:00:00",
			"EvaluationTestType" : "Interval: Below Absolute Minimum",
			"ForecastNumber" : 2,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2012-05-28T00:00:00",
			"RecommendedDate" : "2012-04-01T00:00:00",
			"VaccineGroup" : "Rota"
		},
		"PatientProfile" : {
			"Dob" : "2011-12-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "119",
					"DateAdministered" : "2012-02-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "ROTARIX"
				}, {
					"Cvx" : "119",
					"DateAdministered" : "2012-02-24T00:00:00",
					"EvaluationReason" : "Interval: Too Short",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : "SKB",
					"VaccineName" : "ROTARIX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0770",
		"TestCaseName" : "Dose 1 to dose 2 Rotarix interval 28-4 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2012-02-25T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "Interval: At Absolute Minimum",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: series complete",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "Rota"
		},
		"PatientProfile" : {
			"Dob" : "2011-12-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "119",
					"DateAdministered" : "2012-02-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "ROTARIX"
				}, {
					"Cvx" : "119",
					"DateAdministered" : "2012-02-25T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "ROTARIX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0771",
		"TestCaseName" : "Dose 1 to dose 2 Rotarix interval 28 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2012-02-29T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "Interval: At Minimum",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: series complete",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "Rota"
		},
		"PatientProfile" : {
			"Dob" : "2011-12-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "119",
					"DateAdministered" : "2012-02-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "ROTARIX"
				}, {
					"Cvx" : "119",
					"DateAdministered" : "2012-02-29T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "ROTARIX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0772",
		"TestCaseName" : "≥15 weeks old with no rota vax:  no forecast for rotavirus",
		"ExpectedForecast" : {
			"AssessmentDate" : "2012-04-15T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "No Doses Administered",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: too old",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "Rota"
		},
		"PatientProfile" : {
			"Dob" : "2012-01-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : []
		}
	}, {
		"CdcTestId" : "2013-0773",
		"TestCaseName" : "Dose # 1 ≥ 15 weeks old ",
		"ExpectedForecast" : {
			"AssessmentDate" : "2012-04-15T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2012-05-13T00:00:00",
			"EvaluationTestType" : "All Valid: Forecast Test",
			"ForecastNumber" : 2,
			"ForecastTestType" : "Recommended based on minimum interval from previous dose (catch-up)",
			"PastDueDate" : "2012-06-24T00:00:00",
			"RecommendedDate" : "2012-05-13T00:00:00",
			"VaccineGroup" : "Rota"
		},
		"PatientProfile" : {
			"Dob" : "2011-12-28T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "119",
					"DateAdministered" : "2012-04-15T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "ROTARIX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0774",
		"TestCaseName" : "8 months old with only one rota vax",
		"ExpectedForecast" : {
			"AssessmentDate" : "2012-04-17T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "All Valid: Forecast Test",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: too old",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "Rota"
		},
		"PatientProfile" : {
			"Dob" : "2011-08-17T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "119",
					"DateAdministered" : "2011-11-17T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "ROTARIX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0775",
		"TestCaseName" : "Dose # 1 Rotateq at age 6 weeks-4 days ",
		"ExpectedForecast" : {
			"AssessmentDate" : "2012-02-08T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2012-03-11T00:00:00",
			"EvaluationTestType" : "Age: At Absolute Minimum",
			"ForecastNumber" : 2,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2012-06-28T00:00:00",
			"RecommendedDate" : "2012-05-01T00:00:00",
			"VaccineGroup" : "Rota"
		},
		"PatientProfile" : {
			"Dob" : "2012-01-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "116",
					"DateAdministered" : "2012-02-08T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "ROTATEQ"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0776",
		"TestCaseName" : "Rotateq at 2 months; rotarix at 4 mo",
		"ExpectedForecast" : {
			"AssessmentDate" : "2012-05-06T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2012-06-03T00:00:00",
			"EvaluationTestType" : "Age: At Recommended",
			"ForecastNumber" : 3,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2012-09-02T00:00:00",
			"RecommendedDate" : "2012-07-06T00:00:00",
			"VaccineGroup" : "Rota"
		},
		"PatientProfile" : {
			"Dob" : "2012-01-06T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "116",
					"DateAdministered" : "2012-03-06T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "ROTATEQ"
				}, {
					"Cvx" : "119",
					"DateAdministered" : "2012-05-06T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "ROTARIX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0777",
		"TestCaseName" : "Rotatrix at 2 mo; rotateq at 4 mo",
		"ExpectedForecast" : {
			"AssessmentDate" : "2012-05-06T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2012-06-03T00:00:00",
			"EvaluationTestType" : "Age: At Recommended",
			"ForecastNumber" : 3,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2012-09-02T00:00:00",
			"RecommendedDate" : "2012-07-06T00:00:00",
			"VaccineGroup" : "Rota"
		},
		"PatientProfile" : {
			"Dob" : "2012-01-06T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "119",
					"DateAdministered" : "2012-03-06T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "ROTARIX"
				}, {
					"Cvx" : "116",
					"DateAdministered" : "2012-05-06T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "ROTATEQ"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0778",
		"TestCaseName" : "Unspecified rotavirus at 2 and 4 mo",
		"ExpectedForecast" : {
			"AssessmentDate" : "2012-04-06T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2012-05-04T00:00:00",
			"EvaluationTestType" : "Age: At Recommended",
			"ForecastNumber" : 3,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2012-08-02T00:00:00",
			"RecommendedDate" : "2012-06-06T00:00:00",
			"VaccineGroup" : "Rota"
		},
		"PatientProfile" : {
			"Dob" : "2011-12-06T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "122",
					"DateAdministered" : "2012-02-06T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "Rotavirus Unspecified"
				}, {
					"Cvx" : "122",
					"DateAdministered" : "2012-04-06T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : null,
					"VaccineName" : "Rotavirus Unspecified"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0779",
		"TestCaseName" : "Severe combined immunodeficiency (SCID)=no rotavirus vaccine",
		"ExpectedForecast" : {
			"AssessmentDate" : "2012-03-01T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "No Doses Administered",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: contraindication",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "Rota"
		},
		"PatientProfile" : {
			"Dob" : "2012-02-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : "VXC27",
			"MedHistoryCodeSys" : "CDCPHINVS",
			"MedHistoryText" : "immunodeficiency due to any cause, including HIV (hematologic and solid tumors, congenital immunodeficiency, long-term immunosuppressive therapy, including steroids)",
			"Series" : []
		}
	}, {
		"CdcTestId" : "2013-0780",
		"TestCaseName" : "Anaphylaxis following previous dose",
		"ExpectedForecast" : {
			"AssessmentDate" : "2012-04-01T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "All Valid: Forecast Test",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: contraindication",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "Rota"
		},
		"PatientProfile" : {
			"Dob" : "2012-02-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : "VXC20",
			"MedHistoryCodeSys" : "CDCPHINVS",
			"MedHistoryText" : "allergy to previous dose of this vaccine or to any of its unlisted vaccine components (anaphylactic)",
			"Series" : [{
					"Cvx" : "119",
					"DateAdministered" : "2012-04-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "ROTARIX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0781",
		"TestCaseName" : "Dose # 1 Rotateq at age 6 weeks",
		"ExpectedForecast" : {
			"AssessmentDate" : "2012-02-12T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2012-03-11T00:00:00",
			"EvaluationTestType" : "Age: At Minimum",
			"ForecastNumber" : 2,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2012-06-28T00:00:00",
			"RecommendedDate" : "2012-05-01T00:00:00",
			"VaccineGroup" : "Rota"
		},
		"PatientProfile" : {
			"Dob" : "2012-01-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "116",
					"DateAdministered" : "2012-02-12T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "ROTATEQ"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0782",
		"TestCaseName" : "Dose # 2 Rotateq at age 10 weeks-5 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2012-02-04T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2012-03-03T00:00:00",
			"EvaluationTestType" : "Age: Below Absolute Minimum",
			"ForecastNumber" : 2,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2012-05-28T00:00:00",
			"RecommendedDate" : "2012-04-01T00:00:00",
			"VaccineGroup" : "Rota"
		},
		"PatientProfile" : {
			"Dob" : "2011-12-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "116",
					"DateAdministered" : "2012-01-10T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "ROTATEQ"
				}, {
					"Cvx" : "116",
					"DateAdministered" : "2012-02-04T00:00:00",
					"EvaluationReason" : "Age: Too Young",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : "MSD",
					"VaccineName" : "ROTATEQ"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0783",
		"TestCaseName" : "Dose # 2 Rotateq at age 10 weeks-4 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2012-02-05T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2012-03-08T00:00:00",
			"EvaluationTestType" : "Age: At Absolute Minimum",
			"ForecastNumber" : 3,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2012-07-28T00:00:00",
			"RecommendedDate" : "2012-06-01T00:00:00",
			"VaccineGroup" : "Rota"
		},
		"PatientProfile" : {
			"Dob" : "2011-12-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "116",
					"DateAdministered" : "2012-01-12T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "ROTATEQ"
				}, {
					"Cvx" : "116",
					"DateAdministered" : "2012-02-05T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "ROTATEQ"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0784",
		"TestCaseName" : "Dose # 2 Rotateq at age 10 weeks",
		"ExpectedForecast" : {
			"AssessmentDate" : "2012-02-09T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2012-03-08T00:00:00",
			"EvaluationTestType" : "Age: At Minimum",
			"ForecastNumber" : 3,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2012-07-28T00:00:00",
			"RecommendedDate" : "2012-06-01T00:00:00",
			"VaccineGroup" : "Rota"
		},
		"PatientProfile" : {
			"Dob" : "2011-12-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "116",
					"DateAdministered" : "2012-01-12T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "ROTATEQ"
				}, {
					"Cvx" : "116",
					"DateAdministered" : "2012-02-09T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "ROTATEQ"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0785",
		"TestCaseName" : "Dose # 3 Rotateq at age 14 weeks-5 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2012-02-02T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2012-03-01T00:00:00",
			"EvaluationTestType" : "Age: Below Absolute Minimum",
			"ForecastNumber" : 3,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2012-06-28T00:00:00",
			"RecommendedDate" : "2012-05-01T00:00:00",
			"VaccineGroup" : "Rota"
		},
		"PatientProfile" : {
			"Dob" : "2011-11-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "116",
					"DateAdministered" : "2011-12-10T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "ROTATEQ"
				}, {
					"Cvx" : "116",
					"DateAdministered" : "2012-01-07T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "ROTATEQ"
				}, {
					"Cvx" : "116",
					"DateAdministered" : "2012-02-02T00:00:00",
					"EvaluationReason" : "Age: Too Young",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : "MSD",
					"VaccineName" : "ROTATEQ"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0786",
		"TestCaseName" : "Dose # 3 Rotateq at age 14 weeks-4 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2012-02-03T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "Age: At Absolute Minimum",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: series complete",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "Rota"
		},
		"PatientProfile" : {
			"Dob" : "2011-11-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "116",
					"DateAdministered" : "2011-12-13T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "ROTATEQ"
				}, {
					"Cvx" : "116",
					"DateAdministered" : "2012-01-10T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "ROTATEQ"
				}, {
					"Cvx" : "116",
					"DateAdministered" : "2012-02-03T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "ROTATEQ"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0787",
		"TestCaseName" : "Anaphylaxis following previous dose",
		"ExpectedForecast" : {
			"AssessmentDate" : "2012-05-01T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "All Valid: Forecast Test",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: contraindication",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "Rota"
		},
		"PatientProfile" : {
			"Dob" : "2012-02-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : "VXC20",
			"MedHistoryCodeSys" : "CDCPHINVS",
			"MedHistoryText" : "allergy to previous dose of this vaccine or to any of its unlisted vaccine components (anaphylactic)",
			"Series" : [{
					"Cvx" : "116",
					"DateAdministered" : "2012-04-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "ROTATEQ"
				}, {
					"Cvx" : "119",
					"DateAdministered" : "2012-05-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "SKB",
					"VaccineName" : "ROTARIX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0788",
		"TestCaseName" : "0 at 1Y 3M -1D: VAR @1Y 3M -1D w/ no doses",
		"ExpectedForecast" : {
			"AssessmentDate" : "2000-03-14T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2001-03-14T00:00:00",
			"EvaluationTestType" : "No Doses Administered",
			"ForecastNumber" : 1,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2001-08-10T00:00:00",
			"RecommendedDate" : "2001-03-14T00:00:00",
			"VaccineGroup" : "Var"
		},
		"PatientProfile" : {
			"Dob" : "2000-03-14T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : []
		}
	}, {
		"CdcTestId" : "2013-0789",
		"TestCaseName" : "1 at 1Y 3M: VAR @1Y 3M w/ Varicella(x1)",
		"ExpectedForecast" : {
			"AssessmentDate" : "2001-06-14T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2001-09-06T00:00:00",
			"EvaluationTestType" : "All Valid: Forecast Test",
			"ForecastNumber" : 2,
			"ForecastTestType" : "Recommended based on minimum interval from previous dose (catch-up)",
			"PastDueDate" : "2007-04-10T00:00:00",
			"RecommendedDate" : "2004-03-14T00:00:00",
			"VaccineGroup" : "Var"
		},
		"PatientProfile" : {
			"Dob" : "2000-03-14T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "21",
					"DateAdministered" : "2001-06-14T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "VARIVAX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0794",
		"TestCaseName" : "1 at 13Y: VARICELLA: THIRTEEN",
		"ExpectedForecast" : {
			"AssessmentDate" : "2004-06-01T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2004-06-29T00:00:00",
			"EvaluationTestType" : "Age: At Minimum",
			"ForecastNumber" : 2,
			"ForecastTestType" : "Recommended based on minimum interval from previous dose (catch-up)",
			"PastDueDate" : "2004-06-29T00:00:00",
			"RecommendedDate" : "2004-06-29T00:00:00",
			"VaccineGroup" : "Var"
		},
		"PatientProfile" : {
			"Dob" : "1991-06-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "21",
					"DateAdministered" : "2004-06-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "VARIVAX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0795",
		"TestCaseName" : "No doses of Varicella: current age 13Y -1D",
		"ExpectedForecast" : {
			"AssessmentDate" : "2004-06-01T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "1992-06-02T00:00:00",
			"EvaluationTestType" : "No Doses Administered",
			"ForecastNumber" : 1,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "1992-10-29T00:00:00",
			"RecommendedDate" : "1992-06-02T00:00:00",
			"VaccineGroup" : "Var"
		},
		"PatientProfile" : {
			"Dob" : "1991-06-02T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : []
		}
	}, {
		"CdcTestId" : "2013-0798",
		"TestCaseName" : "#1 at 1 year",
		"ExpectedForecast" : {
			"AssessmentDate" : "2006-01-01T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2006-04-01T00:00:00",
			"EvaluationTestType" : "Age: At Minimum",
			"ForecastNumber" : 2,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2012-01-28T00:00:00",
			"RecommendedDate" : "2009-01-01T00:00:00",
			"VaccineGroup" : "Var"
		},
		"PatientProfile" : {
			"Dob" : "2005-01-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "21",
					"DateAdministered" : "2006-01-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "VARIVAX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0802",
		"TestCaseName" : "1 at 5Y 5M 2W 6D: Varicella: PediDoseTwoOverDue",
		"ExpectedForecast" : {
			"AssessmentDate" : "2008-01-01T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "All Valid: Forecast Test",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: immune",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "Var"
		},
		"PatientProfile" : {
			"Dob" : "2005-01-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : "38907003",
			"MedHistoryCodeSys" : "SCT",
			"MedHistoryText" : "History of varicella infection",
			"Series" : [{
					"Cvx" : "21",
					"DateAdministered" : "2006-01-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "VARIVAX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0803",
		"TestCaseName" : "# 1 at 12 months-5 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2005-12-27T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2006-01-24T00:00:00",
			"EvaluationTestType" : "Age: Below Absolute Minimum",
			"ForecastNumber" : 1,
			"ForecastTestType" : "Recommended based on minimum interval from live virus vaccine",
			"PastDueDate" : "2006-05-28T00:00:00",
			"RecommendedDate" : "2006-01-24T00:00:00",
			"VaccineGroup" : "Var"
		},
		"PatientProfile" : {
			"Dob" : "2005-01-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "21",
					"DateAdministered" : "2005-12-27T00:00:00",
					"EvaluationReason" : "Age: Too Young",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : "MSD",
					"VaccineName" : "VARIVAX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0804",
		"TestCaseName" : "VAR # 1 at 12 months-4 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2005-12-28T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2006-04-01T00:00:00",
			"EvaluationTestType" : "Age: At Absolute Minimum",
			"ForecastNumber" : 2,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2012-01-28T00:00:00",
			"RecommendedDate" : "2009-01-01T00:00:00",
			"VaccineGroup" : "Var"
		},
		"PatientProfile" : {
			"Dob" : "2005-01-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "21",
					"DateAdministered" : "2005-12-28T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "VARIVAX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0805",
		"TestCaseName" : "Var # 1 at 12 months",
		"ExpectedForecast" : {
			"AssessmentDate" : "2006-01-01T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2006-04-01T00:00:00",
			"EvaluationTestType" : "Age: At Minimum",
			"ForecastNumber" : 2,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2012-01-28T00:00:00",
			"RecommendedDate" : "2009-01-01T00:00:00",
			"VaccineGroup" : "Var"
		},
		"PatientProfile" : {
			"Dob" : "2005-01-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "21",
					"DateAdministered" : "2006-01-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "VARIVAX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0806",
		"TestCaseName" : "Newborn forecasting",
		"ExpectedForecast" : {
			"AssessmentDate" : "2012-04-01T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2013-04-01T00:00:00",
			"EvaluationTestType" : "No Doses Administered",
			"ForecastNumber" : 1,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2013-08-28T00:00:00",
			"RecommendedDate" : "2013-04-01T00:00:00",
			"VaccineGroup" : "Var"
		},
		"PatientProfile" : {
			"Dob" : "2012-04-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : []
		}
	}, {
		"CdcTestId" : "2013-0807",
		"TestCaseName" : "# 2 at age 13 years + 28 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-11-15T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "Age: At Minimum",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: series complete",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "Var"
		},
		"PatientProfile" : {
			"Dob" : "1998-10-18T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "21",
					"DateAdministered" : "2011-10-18T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "VARIVAX"
				}, {
					"Cvx" : "21",
					"DateAdministered" : "2011-11-15T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "VARIVAX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0808",
		"TestCaseName" : "Dose 1 to dose 2 interval 28-1 days  in child < 13 years",
		"ExpectedForecast" : {
			"AssessmentDate" : "2010-12-09T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2011-03-03T00:00:00",
			"EvaluationTestType" : "Interval: Below Absolute Minimum",
			"ForecastNumber" : 2,
			"ForecastTestType" : "Recommended based on minimum interval from invalid dose",
			"PastDueDate" : "2016-12-08T00:00:00",
			"RecommendedDate" : "2013-11-11T00:00:00",
			"VaccineGroup" : "Var"
		},
		"PatientProfile" : {
			"Dob" : "2009-11-11T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "21",
					"DateAdministered" : "2010-11-12T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "VARIVAX"
				}, {
					"Cvx" : "21",
					"DateAdministered" : "2010-12-09T00:00:00",
					"EvaluationReason" : "Interval: Too Short",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : "MSD",
					"VaccineName" : "VARIVAX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0809",
		"TestCaseName" : "Dose 1 to dose 2 interval 28 days  in child < 13 yrs old",
		"ExpectedForecast" : {
			"AssessmentDate" : "2006-03-29T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "Interval: At Absolute Minimum",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: series complete",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "Var"
		},
		"PatientProfile" : {
			"Dob" : "1997-01-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "21",
					"DateAdministered" : "2006-03-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "VARIVAX"
				}, {
					"Cvx" : "21",
					"DateAdministered" : "2006-03-29T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "VARIVAX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0810",
		"TestCaseName" : "Dose 1 to dose 2 interval 28-5 days  in child ≥ 13 yrs old",
		"ExpectedForecast" : {
			"AssessmentDate" : "2010-04-24T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2010-05-22T00:00:00",
			"EvaluationTestType" : "Interval: Below Absolute Minimum",
			"ForecastNumber" : 2,
			"ForecastTestType" : "Recommended based on minimum interval from invalid dose",
			"PastDueDate" : "2010-05-22T00:00:00",
			"RecommendedDate" : "2010-05-22T00:00:00",
			"VaccineGroup" : "Var"
		},
		"PatientProfile" : {
			"Dob" : "1997-01-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "21",
					"DateAdministered" : "2010-04-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "VARIVAX"
				}, {
					"Cvx" : "21",
					"DateAdministered" : "2010-04-24T00:00:00",
					"EvaluationReason" : "Interval: Too Short",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : "MSD",
					"VaccineName" : "VARIVAX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0811",
		"TestCaseName" : "Dose 1 to dose 2 interval 28-4 days  in child ≥ 13 years old",
		"ExpectedForecast" : {
			"AssessmentDate" : "2010-04-25T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "Interval: At Absolute Minimum",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: series complete",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "Var"
		},
		"PatientProfile" : {
			"Dob" : "1997-01-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "21",
					"DateAdministered" : "2010-04-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "VARIVAX"
				}, {
					"Cvx" : "21",
					"DateAdministered" : "2010-04-25T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "VARIVAX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0812",
		"TestCaseName" : "Dose 1 to dose 2 interval 28 days in child ≥ 13 years old",
		"ExpectedForecast" : {
			"AssessmentDate" : "2010-06-29T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "Interval: At Absolute Minimum",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: series complete",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "Var"
		},
		"PatientProfile" : {
			"Dob" : "1997-01-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "21",
					"DateAdministered" : "2010-06-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "VARIVAX"
				}, {
					"Cvx" : "21",
					"DateAdministered" : "2010-06-29T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "VARIVAX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0813",
		"TestCaseName" : "VZ and MMR given on same day at age 12 months",
		"ExpectedForecast" : {
			"AssessmentDate" : "2009-08-08T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2009-11-08T00:00:00",
			"EvaluationTestType" : "Age: At Minimum",
			"ForecastNumber" : 2,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2015-09-04T00:00:00",
			"RecommendedDate" : "2012-08-08T00:00:00",
			"VaccineGroup" : "Var"
		},
		"PatientProfile" : {
			"Dob" : "2008-08-08T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "03",
					"DateAdministered" : "2009-08-08T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "M-M-R II"
				}, {
					"Cvx" : "21",
					"DateAdministered" : "2009-08-08T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "VARIVAX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0814",
		"TestCaseName" : "Doses 1 and 2 of VZ and MMR given at ages 12 and 13 months",
		"ExpectedForecast" : {
			"AssessmentDate" : "2010-10-07T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "Age: At Absolute Minimum",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: series complete",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "Var"
		},
		"PatientProfile" : {
			"Dob" : "2009-09-09T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "03",
					"DateAdministered" : "2010-09-09T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "M-M-R II"
				}, {
					"Cvx" : "21",
					"DateAdministered" : "2010-09-09T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "VARIVAX"
				}, {
					"Cvx" : "03",
					"DateAdministered" : "2010-10-07T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "M-M-R II"
				}, {
					"Cvx" : "21",
					"DateAdministered" : "2010-10-07T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "VARIVAX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0815",
		"TestCaseName" : "MMR to VZ interval 28-1 day = invalid VZ.",
		"ExpectedForecast" : {
			"AssessmentDate" : "2006-08-03T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2006-08-31T00:00:00",
			"EvaluationTestType" : "Live Virus: Below Minimum",
			"ForecastNumber" : 1,
			"ForecastTestType" : "Recommended based on minimum interval from live virus vaccine",
			"PastDueDate" : "2006-12-04T00:00:00",
			"RecommendedDate" : "2006-08-31T00:00:00",
			"VaccineGroup" : "Var"
		},
		"PatientProfile" : {
			"Dob" : "2005-07-07T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "03",
					"DateAdministered" : "2006-07-07T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "M-M-R II"
				}, {
					"Cvx" : "21",
					"DateAdministered" : "2006-08-03T00:00:00",
					"EvaluationReason" : "Live Virus Conflict",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : "MSD",
					"VaccineName" : "VARIVAX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0816",
		"TestCaseName" : "MMR given at age 12 mo; VZ at age 12 mo+28 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-11-07T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2012-01-30T00:00:00",
			"EvaluationTestType" : "Live Virus: At Minimum",
			"ForecastNumber" : 2,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2017-11-06T00:00:00",
			"RecommendedDate" : "2014-10-10T00:00:00",
			"VaccineGroup" : "Var"
		},
		"PatientProfile" : {
			"Dob" : "2010-10-10T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "03",
					"DateAdministered" : "2011-10-10T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "M-M-R II"
				}, {
					"Cvx" : "21",
					"DateAdministered" : "2011-11-07T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "VARIVAX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0817",
		"TestCaseName" : "# 1 at age 12 mo-5 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2010-11-05T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2010-12-03T00:00:00",
			"EvaluationTestType" : "Age: Below Absolute Minimum",
			"ForecastNumber" : 1,
			"ForecastTestType" : "Recommended based on minimum interval from live virus vaccine",
			"PastDueDate" : "2011-04-06T00:00:00",
			"RecommendedDate" : "2010-12-03T00:00:00",
			"VaccineGroup" : "Var"
		},
		"PatientProfile" : {
			"Dob" : "2009-11-10T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "21",
					"DateAdministered" : "2010-11-05T00:00:00",
					"EvaluationReason" : "Age: Too Young",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : "MSD",
					"VaccineName" : "VARIVAX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0818",
		"TestCaseName" : "# 1 MMRV at 12 m-5 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2010-11-05T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2010-12-03T00:00:00",
			"EvaluationTestType" : "Age: Below Absolute Minimum",
			"ForecastNumber" : 1,
			"ForecastTestType" : "Recommended based on minimum interval from live virus vaccine",
			"PastDueDate" : "2011-04-06T00:00:00",
			"RecommendedDate" : "2010-12-03T00:00:00",
			"VaccineGroup" : "Var"
		},
		"PatientProfile" : {
			"Dob" : "2009-11-10T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "94",
					"DateAdministered" : "2010-11-05T00:00:00",
					"EvaluationReason" : "Age: Too Young",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : "MSD",
					"VaccineName" : "PROQUAD"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0819",
		"TestCaseName" : "# 1 MMRV at 12 m-4 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2006-06-27T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2006-10-01T00:00:00",
			"EvaluationTestType" : "Age: At Absolute Minimum",
			"ForecastNumber" : 2,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2012-07-28T00:00:00",
			"RecommendedDate" : "2009-07-01T00:00:00",
			"VaccineGroup" : "Var"
		},
		"PatientProfile" : {
			"Dob" : "2005-07-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "94",
					"DateAdministered" : "2006-06-27T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "PROQUAD"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0820",
		"TestCaseName" : "# 1 MMRV at 12 months ",
		"ExpectedForecast" : {
			"AssessmentDate" : "2010-07-01T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2010-10-01T00:00:00",
			"EvaluationTestType" : "Age: At Minimum",
			"ForecastNumber" : 2,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2016-07-28T00:00:00",
			"RecommendedDate" : "2013-07-01T00:00:00",
			"VaccineGroup" : "Var"
		},
		"PatientProfile" : {
			"Dob" : "2009-07-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "94",
					"DateAdministered" : "2010-07-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "PROQUAD"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0821",
		"TestCaseName" : "Dose 1 to dose 2 MMRV interval 28 days in child < 15 months",
		"ExpectedForecast" : {
			"AssessmentDate" : "2009-06-29T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "Interval: At Absolute Minimum",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: series complete",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "Var"
		},
		"PatientProfile" : {
			"Dob" : "2008-05-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "94",
					"DateAdministered" : "2009-06-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "PROQUAD"
				}, {
					"Cvx" : "94",
					"DateAdministered" : "2009-06-29T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "PROQUAD"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0822",
		"TestCaseName" : "Dose 1 to dose 2 MMRV interval 28 days in child ≥ 15 months old=valid VZ",
		"ExpectedForecast" : {
			"AssessmentDate" : "2005-08-12T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "Interval: At Minimum",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: series complete",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "Var"
		},
		"PatientProfile" : {
			"Dob" : "2004-05-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "94",
					"DateAdministered" : "2005-07-15T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "PROQUAD"
				}, {
					"Cvx" : "94",
					"DateAdministered" : "2005-08-12T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "PROQUAD"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0823",
		"TestCaseName" : "Dose 1 to dose 2 MMRV interval 28-1 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2008-10-28T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2009-01-20T00:00:00",
			"EvaluationTestType" : "Interval: Below Absolute Minimum",
			"ForecastNumber" : 2,
			"ForecastTestType" : "Recommended based on minimum interval from invalid dose",
			"PastDueDate" : "2011-10-03T00:00:00",
			"RecommendedDate" : "2009-01-20T00:00:00",
			"VaccineGroup" : "Var"
		},
		"PatientProfile" : {
			"Dob" : "2004-09-06T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "94",
					"DateAdministered" : "2008-10-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "PROQUAD"
				}, {
					"Cvx" : "94",
					"DateAdministered" : "2008-10-28T00:00:00",
					"EvaluationReason" : "Live Virus Conflict",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : "MSD",
					"VaccineName" : "PROQUAD"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0824",
		"TestCaseName" : "MMR to MMRV interval 28 days=valid VZ # 1",
		"ExpectedForecast" : {
			"AssessmentDate" : "2006-03-02T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2006-05-25T00:00:00",
			"EvaluationTestType" : "Live Virus: At Minimum",
			"ForecastNumber" : 2,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2012-02-29T00:00:00",
			"RecommendedDate" : "2009-02-02T00:00:00",
			"VaccineGroup" : "Var"
		},
		"PatientProfile" : {
			"Dob" : "2005-02-02T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "03",
					"DateAdministered" : "2006-02-02T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "M-M-R II"
				}, {
					"Cvx" : "94",
					"DateAdministered" : "2006-03-02T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "PROQUAD"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0825",
		"TestCaseName" : "MMR to MMRV interval 27 days=invalid as VZ # 1",
		"ExpectedForecast" : {
			"AssessmentDate" : "2012-02-29T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2012-03-28T00:00:00",
			"EvaluationTestType" : "Live Virus: Below Minimum",
			"ForecastNumber" : 1,
			"ForecastTestType" : "Recommended based on minimum interval from live virus vaccine",
			"PastDueDate" : "2012-06-28T00:00:00",
			"RecommendedDate" : "2012-03-28T00:00:00",
			"VaccineGroup" : "Var"
		},
		"PatientProfile" : {
			"Dob" : "2011-02-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "03",
					"DateAdministered" : "2012-02-02T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "M-M-R II"
				}, {
					"Cvx" : "94",
					"DateAdministered" : "2012-02-29T00:00:00",
					"EvaluationReason" : "Live Virus Conflict",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : "MSD",
					"VaccineName" : "PROQUAD"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0826",
		"TestCaseName" : "Dose 1 to dose 2  MMRV interval 12 weeks in child < 13 years old  ",
		"ExpectedForecast" : {
			"AssessmentDate" : "2008-11-05T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "Interval: At Minimum",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: series complete",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "Var"
		},
		"PatientProfile" : {
			"Dob" : "2005-02-02T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "94",
					"DateAdministered" : "2008-08-13T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "PROQUAD"
				}, {
					"Cvx" : "94",
					"DateAdministered" : "2008-11-05T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "PROQUAD"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0827",
		"TestCaseName" : "Dose 1 to dose 2 interval of 4 wks between VZ and MMRV in any age child=both valid",
		"ExpectedForecast" : {
			"AssessmentDate" : "2006-06-29T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "Interval: At Minimum",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: series complete",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "Var"
		},
		"PatientProfile" : {
			"Dob" : "2005-05-22T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "21",
					"DateAdministered" : "2006-06-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "VARIVAX"
				}, {
					"Cvx" : "94",
					"DateAdministered" : "2006-06-29T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "PROQUAD"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0828",
		"TestCaseName" : "# 1 at age 12 mo-4 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2010-06-27T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2010-10-01T00:00:00",
			"EvaluationTestType" : "Age: At Absolute Minimum",
			"ForecastNumber" : 2,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2016-07-28T00:00:00",
			"RecommendedDate" : "2013-07-01T00:00:00",
			"VaccineGroup" : "Var"
		},
		"PatientProfile" : {
			"Dob" : "2009-07-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "21",
					"DateAdministered" : "2010-06-27T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "VARIVAX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0829",
		"TestCaseName" : "28 day interval between invalid VZ and subsequent MMRV=valid VZ",
		"ExpectedForecast" : {
			"AssessmentDate" : "2006-06-14T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2006-09-06T00:00:00",
			"EvaluationTestType" : "Live Virus: At Minimum",
			"ForecastNumber" : 2,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2012-06-18T00:00:00",
			"RecommendedDate" : "2009-05-22T00:00:00",
			"VaccineGroup" : "Var"
		},
		"PatientProfile" : {
			"Dob" : "2005-05-22T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "21",
					"DateAdministered" : "2006-05-17T00:00:00",
					"EvaluationReason" : "Age: Too Young",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : "MSD",
					"VaccineName" : "VARIVAX"
				}, {
					"Cvx" : "94",
					"DateAdministered" : "2006-06-14T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "PROQUAD"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0831",
		"TestCaseName" : "Interval of < 24 days between an invalid VZ and a subsequent MMRV=not VZ",
		"ExpectedForecast" : {
			"AssessmentDate" : "2006-08-04T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2006-10-27T00:00:00",
			"EvaluationTestType" : "Live Virus: Below Minimum",
			"ForecastNumber" : 1,
			"ForecastTestType" : "Recommended based on minimum interval from live virus vaccine",
			"PastDueDate" : "2012-08-12T00:00:00",
			"RecommendedDate" : "2009-07-16T00:00:00",
			"VaccineGroup" : "Var"
		},
		"PatientProfile" : {
			"Dob" : "2005-07-16T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "21",
					"DateAdministered" : "2006-07-11T00:00:00",
					"EvaluationReason" : "Age: Too Young",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : "MSD",
					"VaccineName" : "VARIVAX"
				}, {
					"Cvx" : "94",
					"DateAdministered" : "2006-08-04T00:00:00",
					"EvaluationReason" : "Live Virus Conflict",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : "MSD",
					"VaccineName" : "PROQUAD"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0832",
		"TestCaseName" : "LAIV given at age 3 years; VZ at age 3 years + 27 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-11-10T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2011-12-08T00:00:00",
			"EvaluationTestType" : "Live Virus: Below Minimum",
			"ForecastNumber" : 1,
			"ForecastTestType" : "Recommended based on minimum interval from live virus vaccine",
			"PastDueDate" : "2011-12-08T00:00:00",
			"RecommendedDate" : "2011-12-08T00:00:00",
			"VaccineGroup" : "Var"
		},
		"PatientProfile" : {
			"Dob" : "2008-10-14T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "111",
					"DateAdministered" : "2011-10-14T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MED",
					"VaccineName" : "FLUMIST"
				}, {
					"Cvx" : "21",
					"DateAdministered" : "2011-11-10T00:00:00",
					"EvaluationReason" : "Live Virus Conflict",
					"EvaluationStatus" : "Not Valid",
					"Mvx" : "MSD",
					"VaccineName" : "VARIVAX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0833",
		"TestCaseName" : "LAIV given at age 3 years; VZ at age 3 years + 28 days",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-11-11T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2012-02-03T00:00:00",
			"EvaluationTestType" : "Live Virus: At Minimum",
			"ForecastNumber" : 2,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2015-11-10T00:00:00",
			"RecommendedDate" : "2012-10-14T00:00:00",
			"VaccineGroup" : "Var"
		},
		"PatientProfile" : {
			"Dob" : "2008-10-14T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "111",
					"DateAdministered" : "2011-10-14T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MED",
					"VaccineName" : "FLUMIST"
				}, {
					"Cvx" : "21",
					"DateAdministered" : "2011-11-11T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "VARIVAX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0834",
		"TestCaseName" : "History of VZ=series complete or exempt by hx of disease",
		"ExpectedForecast" : {
			"AssessmentDate" : "2005-04-01T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "No Doses Administered",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: immune",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "Var"
		},
		"PatientProfile" : {
			"Dob" : "2004-05-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : "38907003",
			"MedHistoryCodeSys" : "SCT",
			"MedHistoryText" : "History of varicella infection",
			"Series" : []
		}
	}, {
		"CdcTestId" : "2013-0835",
		"TestCaseName" : "Titer of immunity to VZ=series complete or exempt",
		"ExpectedForecast" : {
			"AssessmentDate" : "2006-06-01T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "No Doses Administered",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: immune",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "Var"
		},
		"PatientProfile" : {
			"Dob" : "2005-06-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : "38907003",
			"MedHistoryCodeSys" : "SCT",
			"MedHistoryText" : "History of varicella infection",
			"Series" : []
		}
	}, {
		"CdcTestId" : "2013-0836",
		"TestCaseName" : "Anaphylactic reaction to dose 1 of VZ",
		"ExpectedForecast" : {
			"AssessmentDate" : "2012-03-15T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "All Valid: Forecast Test",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: contraindication",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "Var"
		},
		"PatientProfile" : {
			"Dob" : "2010-12-12T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : "VXC20",
			"MedHistoryCodeSys" : "CDCPHINVS",
			"MedHistoryText" : "allergy to previous dose of this vaccine or to any of its unlisted vaccine components (anaphylactic)",
			"Series" : [{
					"Cvx" : "21",
					"DateAdministered" : "2012-03-15T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "VARIVAX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0837",
		"TestCaseName" : "Diagnosis of severe immunodeficiency.  No second dose. ",
		"ExpectedForecast" : {
			"AssessmentDate" : "2010-12-20T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "All Valid: Forecast Test",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: contraindication",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "Var"
		},
		"PatientProfile" : {
			"Dob" : "2009-12-12T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : "VXC27",
			"MedHistoryCodeSys" : "CDCPHINVS",
			"MedHistoryText" : "immunodeficiency due to any cause, including HIV (hematologic and solid tumors, congenital immunodeficiency, long-term immunosuppressive therapy, including steroids)",
			"Series" : [{
					"Cvx" : "21",
					"DateAdministered" : "2010-12-20T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "VARIVAX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0838",
		"TestCaseName" : "# 1 at age 12 mo",
		"ExpectedForecast" : {
			"AssessmentDate" : "2010-07-01T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2010-10-01T00:00:00",
			"EvaluationTestType" : "Age: At Minimum",
			"ForecastNumber" : 2,
			"ForecastTestType" : "Recommended based on age",
			"PastDueDate" : "2016-07-28T00:00:00",
			"RecommendedDate" : "2013-07-01T00:00:00",
			"VaccineGroup" : "Var"
		},
		"PatientProfile" : {
			"Dob" : "2009-07-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "21",
					"DateAdministered" : "2010-07-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "VARIVAX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0839",
		"TestCaseName" : "Diagnosis of severe immunodeficiency before administration of any VZ. No VZ to be given. ",
		"ExpectedForecast" : {
			"AssessmentDate" : "2011-10-18T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "No Doses Administered",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: contraindication",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "Var"
		},
		"PatientProfile" : {
			"Dob" : "2010-11-18T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : "VXC27",
			"MedHistoryCodeSys" : "CDCPHINVS",
			"MedHistoryText" : "immunodeficiency due to any cause, including HIV (hematologic and solid tumors, congenital immunodeficiency, long-term immunosuppressive therapy, including steroids)",
			"Series" : []
		}
	}, {
		"CdcTestId" : "2013-0840",
		"TestCaseName" : "# 1 MMR at 12.5 mo; VZ not given=need 28 day interval for VZ",
		"ExpectedForecast" : {
			"AssessmentDate" : "2012-04-01T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2012-04-29T00:00:00",
			"EvaluationTestType" : "All Valid: Forecast Test",
			"ForecastNumber" : 1,
			"ForecastTestType" : "Recommended based on minimum interval from live virus vaccine",
			"PastDueDate" : "2012-08-13T00:00:00",
			"RecommendedDate" : "2012-04-29T00:00:00",
			"VaccineGroup" : "Var"
		},
		"PatientProfile" : {
			"Dob" : "2011-03-17T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "03",
					"DateAdministered" : "2012-04-01T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "M-M-R II"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0842",
		"TestCaseName" : "# 2 at age 12 mo+ 4 Weeks",
		"ExpectedForecast" : {
			"AssessmentDate" : "2008-12-26T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "Age: At Absolute Minimum",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: series complete",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "Var"
		},
		"PatientProfile" : {
			"Dob" : "2007-11-28T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "21",
					"DateAdministered" : "2008-11-28T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "VARIVAX"
				}, {
					"Cvx" : "21",
					"DateAdministered" : "2008-12-26T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "VARIVAX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0843",
		"TestCaseName" : "# 2 at age 15 mo.",
		"ExpectedForecast" : {
			"AssessmentDate" : "2009-02-28T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : null,
			"EvaluationTestType" : "Age: At Minimum",
			"ForecastNumber" : null,
			"ForecastTestType" : "Not recommended: series complete",
			"PastDueDate" : null,
			"RecommendedDate" : null,
			"VaccineGroup" : "Var"
		},
		"PatientProfile" : {
			"Dob" : "2007-11-28T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "21",
					"DateAdministered" : "2008-11-28T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "VARIVAX"
				}, {
					"Cvx" : "21",
					"DateAdministered" : "2009-02-28T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "VARIVAX"
				}
			]
		}
	}, {
		"CdcTestId" : "2013-0844",
		"TestCaseName" : "# 1 at age ≥ 13 years old",
		"ExpectedForecast" : {
			"AssessmentDate" : "2010-01-04T00:00:00",
			"DateAdded" : "2013-01-01T00:00:00",
			"DateUpdated" : "2013-01-01T00:00:00",
			"EarliestDate" : "2010-02-01T00:00:00",
			"EvaluationTestType" : "All Valid: Forecast Test",
			"ForecastNumber" : 2,
			"ForecastTestType" : "Recommended based on minimum interval from previous dose (catch-up)",
			"PastDueDate" : "2010-03-08T00:00:00",
			"RecommendedDate" : "2010-02-01T00:00:00",
			"VaccineGroup" : "Var"
		},
		"PatientProfile" : {
			"Dob" : "1997-01-01T00:00:00",
			"Gender" : "F",
			"MedHistoryCode" : null,
			"MedHistoryCodeSys" : null,
			"MedHistoryText" : null,
			"Series" : [{
					"Cvx" : "21",
					"DateAdministered" : "2010-01-04T00:00:00",
					"EvaluationReason" : null,
					"EvaluationStatus" : "Valid",
					"Mvx" : "MSD",
					"VaccineName" : "VARIVAX"
				}
			]
		}
	}
];
