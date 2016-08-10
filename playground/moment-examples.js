var moment = require('moment');

console.log(moment().format());

var now = moment();

console.log('Current timestamp', now.unix());

var timestamp = 1470806935;

var currentMoment = moment.unix(timestamp);
console.log('currentMoment', currentMoment.format('MMMM Do, YYYY @ h:mm A'));

// January 3rd, 2016 @ 12:13 AM
