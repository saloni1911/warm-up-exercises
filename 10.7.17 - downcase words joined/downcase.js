// Finish Him!

// In JavaScript, write a function 'spiner' that takes a string as an argument and returns the string as all lowercase words joined by dashes. Your function should account for upper/lower case inputs, as well as sentences not seperated by spaces.

// spiner("All Lowercase Words Joined By Dashes") --> // "all-lowercase-words-joined-by-dashes"

// spiner("The_Andy_Griffith_Show") --> // "the-andy-griffith-show"


var spiner = function(sentence) {
	var unwanted = /[\W_0-9]/g;
	var selected = (/[^A-Za-z]/);
	return sentence.split(selected).join('-').toLowerCase();
};

console.log(spiner("All_GOOD??"));