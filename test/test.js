require('should');
require('mocha');

var moment = require('moment');
require('../moment-period.js');

describe('>>>> moment period tests', function() {
    this.timeout(10000);
    it('Should check month', function(done) {


		// We get the month in two months from now
		var period = moment.period('month+2');
        console.log('start is %j and end is %j', period.startDate, period.endDate);

		// We get the two months after now
		var now = moment().add(2, 'months');

		// We check that the period is in two months
		period.startDate.month().should.be.equal(now.month());
		period.endDate.month().should.be.equal(now.month());

		// We check start and end of month
		period.startDate.date().should.be.equal(1);
		period.endDate.date().should.be.equal(period.startDate.add(1, 'months').date(0).date());
		done();

    });

});
