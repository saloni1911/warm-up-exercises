// https://gist.github.com/kasun-maldeni/d483dd67a058cda4d18473735b200925/
// Convert a date range consisting of two dates formatted as YYYY-MM-DD into a more readable format.

// The friendly display should use month names instead of numbers and ordinal dates instead of cardinal (1st instead of 1).

// Do not display information that is redundant or that can be inferred by the user: if the date range ends in less than a year from when it begins, do not display the ending year.

// Additionally, if the date range begins in the current year (i.e. it is currently the year 2016) and ends within one year, the year should not be displayed at the beginning of the friendly range.

// If the range ends in the same month that it begins, do not display the ending year or month.

// Examples:

// makeFriendlyDates(["2016-07-01", "2016-07-04"]) should return ["July 1st","4th"]

// makeFriendlyDates(["2016-07-01", "2018-07-04"]) should return ["July 1st, 2016", "July 4th, 2018"].

var dates = ["2017-07-01", "2018-07-04"];

var date1 = dates[0].split('-').join(',');
var date2 = dates[1].split('-').join(',');

var diffDays;

var monthsArr = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var suffix = ['st', 'nd', 'rd', 'th'];

var currentTime = new Date();
var currentMonth = (currentTime.getMonth() + 1);
var currentYear = currentTime.getFullYear();
 
function numberOfDays(date1,date2) {
	// The number of milliseconds in one day
	var oneDay = 24 * 60 * 60 * 1000;
	// Convert both dates to milliseconds
	var firstDate = new Date(date1);
	var secondDate = new Date(date2);
	// Calculate the difference in milliseconds and convert back in number of days
	diffDays = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime()) / (oneDay)))  
};

var dateFormat = function(date) {
	if (['1', '21', '31'].includes(date)) {
		return suffix[0];
	} else if (['2', '22'].includes(date)) {
		return suffix[1];
	} else if (['3', '23'].includes(date)) {
		return suffix[2];
	} else {
		return suffix[3];
	}
};

var printDate = function(date) {
	if (date[0] == '0') {
		return date[1];
	} else {
		return date;
	}
}

var makeFriendlyDates = function(dates) {
	var d1 = dates[0].split('-');
	var d2 = dates[1].split('-');

	
	var years = [d1[0], d2[0]];
	var months = [d1[1], d2[1]];
	var dayArrs = [d1[2], d2[2]];
	
	var day1 = printDate(dayArrs[0]);
	var day2 = printDate(dayArrs[1]);
	var date = [day1, day2];

	var suffixone = dateFormat(date[0]);
	var suffixtwo = dateFormat(date[1]);

	numberOfDays(date1,date2);

		if (Number(years[0]) === currentYear && diffDays < 365 && months[0] === months[1]) {
			console.log([monthsArr[months[0]-1] + " " + date[0] + suffixone, date[1] + suffixtwo]);
		} else if (Number(years[0]) === currentYear && diffDays < 365 && months[0] != months[1]) {
				console.log([monthsArr[months[0]-1] + " " + date[0] + suffixone, monthsArr[months[1]-1] + ", " + date[1] + suffixtwo]);
		}else if (diffDays < 365) {
			console.log([monthsArr[months[0]-1] + " " + date[0] + suffixone + ", " + years[0], [monthsArr[months[1]-1]] + " " + date[1] + suffixtwo]);
		} else {
			console.log([monthsArr[months[0]-1] + " " + date[0] + suffixone + ", " + years[0], [monthsArr[months[1]-1]] + " " + date[1] + suffixtwo + ", " + years[1]]);
		}	
}

makeFriendlyDates(dates);















