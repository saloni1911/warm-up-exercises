// https://gist.github.com/kasun-maldeni/f48f934957760a581f32ae9fe5507bd9/
// Learning Objectives

// Practice using jQuery to manipulate the DOM
// Practice using JavaScript Timers
// Practice using internal JavaScript Objects
// Clocks!!!!

// cue Coldplay

// Today you are going to build a clock!

// Start by planning! Draw a clock, break down the problem,

// Step 1

// Define 3 variables and grab the associated element from the DOM using jQuery:

// minuteHand
// secondHand
// hourHand
// Step 2

// Using setInterval and jQuery make the second hand make a full rotation in 60 seconds.
// You will have to utilize the css attribute transform - rotate.
// Step 3

// Make the minute hand make a full rotation in 1 hour
// Step 3

// Make the hour hand make a full rotation in 24 hours
// BONUS

// Sync up your clock with the current time.
// Take a look at the JavaScript Date object

var $hourHand = $('.hour');
var $minuteHand = $(".minute");
var $secondHand = $(".second");
var $sec = $("#sec");

var hours = 0;
var minutes = 0;
var seconds = 0;

var updateHour = function() {
	hour = hours += 1;
	$hourHand.html(hours)

}

var updateMinute = function() {
	minute = minutes += 1;
	$minuteHand.html(minute)
}

var updateSecond = function() {
	seconds = seconds += 1;
	// $secondHand[0].textContent = seconds;	
	$secondHand.html(seconds)
	$sec.style.transform = "rotate";
}


setInterval(updateSecond, 1000);

setInterval(updateMinute, 60000);

setInterval(updateHour, 3600000);


var today = new Date();
var hour = today.getHours();
var min = today.getMinutes();
var seconds = today.getSeconds();






















