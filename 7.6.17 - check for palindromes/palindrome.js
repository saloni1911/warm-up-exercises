// https://gist.github.com/kasun-maldeni/d567e18549569f399b30f421f8330e49/
// Check for Palindromes

// Return true if the given string is a palindrome. Otherwise, return false.

// A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.


var palindrome = function(word) {
	var newr = word.toLowerCase().split("").reverse().join("");
		if (word === newr) {
			return true;
		} else {
			return false;
		}

	}

var s = palindrome("bob");
console.log(s);

// var word = "Bbobs";
// var newr = word.toLowerCase().split("").reverse().join("");
// console.log(newr);

var palindrome = function(word) {
	var unwanted = /[\W_]/g;
	// (/[^w]|/g) ^means not a word, | is a pipe
	// g means global - that will look for all special characters
	var lowReplace = word.toLowerCase().replace(unwanted, "");
	var reverse = lowReplace.split("").reverse().join("");
	if (reverse === lowReplace) {
     console.log("true");
	} else {
		console.log("false");
	}
}
palindrome("bob !");


var palindrome = function(word) {
	var unwanted = /[\W_]/g;
	var newr = word.toLowerCase().replace(/[\W_]/g, "").split("").reverse().join("");
	if (word === newr) {
		console.log("true");
	} else {
		console.log("false");
	}
}
palindrome("bob !");


// Solution:

function palindrome(str) {
  var stripped = str.replace(/[^\w\s]|_/g, "").replace(/\s+/g, "").toLowerCase();
  var reversed = stripped.split("").reverse().join("");
  return reversed == stripped;
}









