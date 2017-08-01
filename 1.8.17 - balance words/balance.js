// https://gist.github.com/kasun-maldeni/bfc2d2caee02ace657fbd2b795f54c9e/
// Word Balance

// We're going to balance words on one of the letters in them.

// We'll use the position and letter itself to calculate the weight around the balance point. A word can be balanced if the weight on either side of the balance point is equal. Not all words can be balanced, but those that can are interesting for this challenge.

// The formula to calculate the weight of the word is to look at the letter position in the English alphabet (so A=1, B=2, C=3 ... Z=26) as the letter weight, then multiply that by the distance from the balance point, so the first letter away is multiplied by 1, the second away by 2, etc.

// As an example:

// STEAD balances at T: 1 * S(19) = 1 * E(5) + 2 * A(1) + 3 * D(4))
// Input Description - You'll be given a series of English words.

// Example: STEAD

// Output Description - Your program or function should emit the words split by their balance point and the weight on either side of the balance point.

// Example: S T EAD - 19

// This indicates that the T is the balance point and that the weight on either side is 19.

// Try these words...

// CONSUBSTANTIATION
// WRONGHEADED
// UNINTELLIGIBILITY
// SUPERGLUE
// Challenge Output```

// #### Output should be...
// CONSUBST A NTIATION - 456 WRO N GHEADED - 120 UNINTELL I GIBILITY - 521 SUPERGLUE DOES NOT BALANCE```


var alphabets = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 
				'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

// var word = "CONSUBSTANTIATION";
var word = "WRONGHEADED";
var arr = word.split('');

var balance = function(word) {
	var arr = word.split('');
	for (var i = 1; i < arr.length; i++) {
		var leftarr = arr.slice(0, i);
		// console.log(leftarr);
		var rightarr = arr.slice(i+1, word.length);
		// console.log(rightarr);

		var leftWeight = 0;
		for (l = 0; l < leftarr.length; l++){
			leftWeight += (i-l)* (alphabets.indexOf(leftarr[l]) + 1)
			// console.log(leftWeight);
		}

		var rightWeight = 0;
		for (var r = 0; r < rightarr.length; r++) {
			rightWeight += (r+1) * (alphabets.indexOf(rightarr[r]) + 1)
			// console.log(rightWeight);
		}

		if (leftWeight === rightWeight) {
			console.log(arr[i]);
			console.log(leftarr.join("") + " " + arr[i] + " " + rightarr.join("") + " - " + leftWeight);
			break;
		} else if (leftWeight !== rightWeight && i === arr.length-1) {
				console.log("Does not find any balance point");
		}
	}

}

balance(word);

























