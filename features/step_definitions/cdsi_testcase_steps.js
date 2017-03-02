// Note (JM, 09/10/2016): I don't like the way this must be referenced (in "dist/lib").
var core = require('vaxplan.core/dist/lib/evaluator');
var refData = require('vaxplan.refdata');
console.log('----');
console.dir(refData);
console.log('----');

var testSteps = function() {
    // shared state
    var patient, assessmentDate, seriesDose;

    this.Before(function() {
        patient = {
            birthDate : new Date(1900, 0, 1),
            immunizations : []
        };
        seriesDose = refData.AntigenSeriesByName.Diphtheria.series[0].seriesDose[0];
    })

    this.Given(/^a(?:\s*(female|male)?)?\s+Patient born on (\d+\-\d+\-\d+)$/,
        function (gender, birthDate, callback) {
            console.log("Gender [" + gender + "]");
            gender = gender || 'female';

            patient.gender = gender;
            patient.birthDate = new Date(Date.parse(birthDate));

            //console.log(patient.birthDate);

            // callback w/ no parameters signals success and does not require the
            // default timeout to expire.
            callback();
            
            // Write code here that turns the phrase above into concrete actions
            //callback(null, 'pending');
        });

    this.Given(/^no immunizations have been given$/,
        function (callback) {
            console.log('Patient has no immunizations')

            patient.immunizations = [];

            // callback w/ no parameters signals success and does not require the
            // default timeout to expire.
            callback();
            
            // Write code here that turns the phrase above into concrete actions
            //callback(null, 'pending');
        });

    this.Given(/^the following immunizations have been given$/,
        function (table, callback) {
            console.log('Here are the immunizations in a table object...');
            console.dir(table.rows());

            patient.immunizations = [];
            // callback w/ no parameters signals success and does not require the
            // default timeout to expire.
            //callback();
            
            // Write code here that turns the phrase above into concrete actions
            callback(null, 'pending');
        });
    
    this.Given(/^the following medical history is reported$/,
        function (table, callback) {
            console.log('Here is the medical history in a table object...');
            console.dir(table.rows);

            // callback w/ no parameters signals success and does not require the
            // default timeout to expire.
            //callback();
            
            // Write code here that turns the phrase above into concrete actions
            callback(null, 'pending');
        });

    this.When(/^the Patient is assessed for (.+) on (\d+-\d+-\d+)$/,
        function (vaccineGroup, assessmentDateText, callback) {
            assessmentDate = new Date(Date.parse(assessmentDateText));
            console.log('Patient assessed - vaccine group is [' + vaccineGroup + '] and assessment date is [' + assessmentDate + ']');

            //var evaluator = new core.AdministeredDoseEvaluator();
            //evaluator.
            // var evaluator = new core.AdministeredDoseEvaluator();
            // evaluator.allowableVaccineAdministered({
            //     administeredDate: Date.parse('2000-01-01'),

            // })


            // callback w/ no parameters signals success and does not require the
            // default timeout to expire.
            //callback();
            
            // Write code here that turns the phrase above into concrete actions
            callback(null, 'pending');
        });

    this.Then(/^the assessment should recommend a dose for (.+) on (\d+\-\d+\-\d+)$/,
        function (vaccineGroup, recommendedDate, callback) {
            // callback w/ no parameters signals success and does not require the
            // default timeout to expire.
            //callback();
            
            // Write code here that turns the phrase above into concrete actions
            callback(null, 'pending');
        });

    this.Then(/^the assessment should not recommend a dose for (.+)$/,
        function (vaccineGroup, callback) {
            // callback w/ no parameters signals success and does not require the
            // default timeout to expire.
            //callback();
            
            // Write code here that turns the phrase above into concrete actions
            callback(null, 'pending');
        });
    this.Then(/^the series status should be (.+)$/,
        function (status, callback) {
            // callback w/ no parameters signals success and does not require the
            // default timeout to expire.
            //callback();
            
            // Write code here that turns the phrase above into concrete actions
            callback(null, 'pending');
        });
};

module.exports = testSteps;
