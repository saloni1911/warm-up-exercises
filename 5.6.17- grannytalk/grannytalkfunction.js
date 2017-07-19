// https://gist.github.com/kasun-maldeni/370b6193469f0cca3a0fdba135686499/
// Write a function 'grannyTalk' what takes a question as an argument and returns a string as her response.

// If you talk to Granny normally, she'll reply "SPEAK UP SONNY JIM"

// If you talk to her in ALL CAPS, she'll reply "NO, NOT SINCE 1945"

// The year will be a random year between 1930 and 1950.

// If you say "BYE" to her she'll reply "What's that honey, I didn't hear you.."

// bonus: write an additional function 'grandpaTalk' that when called, will call granny for you and interpret her responses incorrectly by swapping vowels randomly in the words of her responses.

// sample output of grandpaTalk:

// NO, NOT SINCE incorrect year // whats that sunny

var grannyanswer;
var grannyTalk = function(question) {

	if (question == question.toUpperCase()) {
		if (question == "BYE") {
   var grannyanswer = "What's that honey, I didn't hear you..";
		} else {
			var year = Math.floor(Math.random() * 21);
		var grannyanswer = "NO, NOT SINCE " + (year+1930);
		}
 } else {
	var grannyanswer = "SPEAK UP SONNY JIM";
	}
	console.log(grannyanswer);
  return grannyanswer;
}
var question = "HOW ARE YOU";
var x = grannyTalk(question);


var grandpaTalk = function(x) {
if (x === "What's that honey, I didn't hear you..") {
var grandparesponse = "What's that sunny, I didn't hear you.."
} else {
var grandparesponse = "do whatever you want"
}
console.log(grandparesponse);
}
grandpaTalk(x);


// var grannyTalk = function(message) {
//   if (message === 'BYE') {
//     return 'Whats that honey, I didnt hear you..';
//   } else if (message === message.toUpperCase()){
//     return 'NO, NOT SINCE' + Number(Math.floor(Math.random() * (1950 - 1930)) + 1930);
//   } else {
//     return 'SPEAK UP SONNY JIM';
//   }
// }

// var grandpaTalk = function(message) {
//   var askGran = grannyTalk(message);
  
//   if (askGran.includes('NO,')) {
//     return 'NO, NOT SINCE' + Number(Math.floor(Math.random() * (1950 - 1930)) + 1930);
//   }

//   var vowels = ['a','e','i','o','u'];

//   return askGran.toLowerCase().split('').map(function(e) {
//     return vowels.indexOf(e) !== -1 ? vowels[Math.floor(Math.random() * vowels.length)] : e;
//   }).join('').toUpperCase();
// }

// console.log(grannyTalk('BYEEE'));




