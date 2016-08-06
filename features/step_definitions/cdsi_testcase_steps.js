var testSteps = function() { 
    this.Given(/^a(?:\s*(female|male)?)?\s+Patient born on (\d+\-\d+\-\d+)$/,
        function (gender, birthDate, callback) {
            console.log("Gender [" + gender + "]");
            gender = gender || 'female';

            // callback w/ no parameters signals success and does not require the
            // default timeout to expire.
            callback();
            
            // Write code here that turns the phrase above into concrete actions
            //callback(null, 'pending');
        });

    this.Given(/^no immunizations have been given$/,
        function (callback) {
            console.log('Patient has no immunizations')

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

            // callback w/ no parameters signals success and does not require the
            // default timeout to expire.
            callback();
            
            // Write code here that turns the phrase above into concrete actions
            //callback(null, 'pending');
        });
    
    this.Given(/^the following medical history is reported$/,
        function (table, callback) {
            console.log('Here is the medical history in a table object...');
            console.dir(table.rows);

            // callback w/ no parameters signals success and does not require the
            // default timeout to expire.
            callback();
            
            // Write code here that turns the phrase above into concrete actions
            //callback(null, 'pending');
        });

    this.When(/^the Patient is assessed for (.+) on (\d+-\d+-\d+)$/,
        function (vaccineGroup, assessmentDateText, callback) {
            var assessmentDate = new Date(assessmentDateText);
            console.log('Patient assessed - vaccine group is [' + vaccineGroup + '] and assessment date is [' + assessmentDate + ']');
            // callback w/ no parameters signals success and does not require the
            // default timeout to expire.
            callback();
            
            // Write code here that turns the phrase above into concrete actions
            //callback(null, 'pending');
        });

    this.Then(/^the assessment should recommend a dose for (.+) on (\d+\-\d+\-\d+)$/,
        function (vaccineGroup, recommendedDate, callback) {
            // callback w/ no parameters signals success and does not require the
            // default timeout to expire.
            callback();
            
            // Write code here that turns the phrase above into concrete actions
            //callback(null, 'pending');
        });

    this.Then(/^the assessment should not recommend a dose for (.+)$/,
        function (vaccineGroup, callback) {
            // callback w/ no parameters signals success and does not require the
            // default timeout to expire.
            callback();
            
            // Write code here that turns the phrase above into concrete actions
            //callback(null, 'pending');
        });
    this.Then(/^the series status should be (.+)$/,
        function (status, callback) {
            // callback w/ no parameters signals success and does not require the
            // default timeout to expire.
            callback();
            
            // Write code here that turns the phrase above into concrete actions
            //callback(null, 'pending');
        });
};

module.exports = testSteps;
