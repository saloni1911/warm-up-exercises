// Take 2 strings s1 and s2 including only letters from `a` to `z`. Return a new sorted string, the longest possible, containing distinct letters, - each taken only once - coming from s1 or s2.

// We recommend using `underscore.js` to help with solving the problem: http://underscorejs.org/

// Examples:

// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

var a = "xyaabbbccccdefww";
var b = "xxxxyyyyabklmopq";

var sorting = function(string1, string2) {
	var array1 = string1.split('');
	var array2 = string2.split('');
	var combined = _.union(array1, array2);
	var sorted = combined.sort();
	console.log(sorted);
	console.log(sorted.join(''));
	
	// var combined = string1 + string2;
	// var a = combined.split('')
	// var b = _.uniq(a);
	// console.log(_.sortBy(b));
	// _.sortBy(_.uniq(string1.concat(string2).split(''))).join('');

}
sorting(a, b);