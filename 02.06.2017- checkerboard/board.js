// https://gist.github.com/kasun-maldeni/7787ab81d02477be49565381f78412cf/
// Write a program that creates a string that represents an 8×8 grid, using new- line characters to separate lines. At each position of the grid there is either a space or a “#” character. The characters should form a chess board. Passing this string to console.log should show something like this:

// # # # # # # # #
//  # # # # # # # #
// # # # # # # # #
//  # # # # # # # #
// bonus When you have a program that generates this pattern, define a variable size = 8 and change the program so that it works for any size, outputting a grid of the given width and height. Then, define a variable 'symbol' that generates the board using the specified character instead.

var hash = "#";
var space = " ";
var length = 16;
var lines = 8;


var symbol = [];
for (var y = 1; y <= lines; y++) {
	for (var x = 1; x <= length; x++) {
	if ((x + y) % 2 == 0) {
		symbol.push(hash);
	} else if ((x + y) % 2 !== 0) {
		symbol.push(space);
	}
} 
console.log(symbol.join(''));
symbol = [];
}
 

