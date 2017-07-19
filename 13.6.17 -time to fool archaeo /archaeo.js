//https://gist.github.com/kasun-maldeni/404835df2ef00e13085f6a95d2787d6c/

// Time to fool some archaeologists

// You are a villain trying to trap an adventuring archaeologist. Write a function 'makeFakeMap' that takes two numbers as arguments and returns an array of arrays to represent a map. It should be filled with the 'A' character, except for one, which should be an uppercase X(as below). The position of X should be determined randomly.

// makeFakeMap(5, 5);

// // Sample outputs:

// [
// ["A","A","A","A","A"],
// ["A","A","A","A","A"],
// ["A","A","X","A","A"],
// ["A","A","A","A","A"],
// ["A","A","A","A","A"]
// ];

// makeFakeMap(5, 5);

// [
// ["A","A","A","A","A"],
// ["A","A","A","A","A"],
// ["A","A","A","A","A"],
// ["A","A","A","A","X"],
// ["A","A","A","A","A"]
// ];

// makeFakeMap(5, 5);

// [
// ["A","A","A","A","A"],
// ["A","A","A","X","A"],
// ["A","A","A","A","A"],
// ["A","A","A","A","A"],
// ["A","A","A","A","A"]
// ];

// var mainArray = [];
// var rows = [];
// var columns = [];
// // var columns = x;
// // var rows = y;
// var makeFakeMap = function(num1, num2) {

// var a = Math.floor(Math.random() * num1);
// var b = Math.floor(Math.random() * num2);

//   for (var r = 0; r < num1; r++) {
  
//     for (var c = 0; c < num2; c++) {
//        if(r == a && c == b) {
//         columns[c] = "X";
//        } else {
//         columns[c] = "A";
//        }
//       }

//     rows.push(columns);
//     columns = [];
//        // columns.push(rows);
//     }
//   var mainArray = [(rows.join("],\n["))];
//   mainArray.push("]\n]");
//   mainArray.unshift("[\n[");

// console.log(mainArray.join(""));

// };

// makeFakeMap(5, 6);

// var mainArray = [];
// var rows = ["A", "A", "A", "A", "A"];
// var columns = [];


// var output = "[\n[";
// for (var i = 0; i < 5; i++)
// output += arr[i] + ","

//2nd part
//https://gist.github.com/kasun-maldeni/f0aaae72a93520c7ecabf2c9ea6faefe
//You are an adventuring archaeologist, and have found some treasure maps! There are too many to check individually, so write a function 'treasureFinder' that takes an array of arrays as an argument (see sample inputs below) and returns an array with the location of the treasure (X) as an array representing the X and Y coordinates, for example:
//treasureFinder(map1) // should return [2, 2]; - for above solved example
// var map1 = [
// ["A","A","A","A","A"],
// ["A","A","A","A","A"],
// ["A","A","X","A","A"],
// ["A","A","A","A","A"],
// ["A","A","A","A","A"]
// ];


// var treasureFinder = function(map) {
//   for (var r = 0; r < map.length; r++) {
//       if (map[r].includes("X")) {
//         console.log(map[r]);
//         console.log([r]);
//         console.log([map[r].indexOf("X")]);
//         console.log('[' + [r] + ", " + [map[r].indexOf("X")] + ']');
//       } 
//   }
// }

// var map1 = [
// ["A","A","A","A","A"],
// ["A","A","A","A","A"],
// ["A","A","A","A","A"],
// ["A","X","A","A","A"],
// ["A","A","A","A","A"],
// ["A","A","A","A","A"],
// ["A","A","A","A","A"]
// ];

// var map2 = [
// ["A","A","A","A","A"],
// ["A","A","A","A","A"],
// ["A","A","A","A","A"],
// ["A","A","A","A","A"],
// ["A","X","A","A","A"]
// ];

// var map3 = [
// ["A","A","A","A","A"],
// ["A","A","V","A","A"],
// ["A","A","A","V","A"],
// ["v","v","V","v","X"],
// ["A","V","A","A","A"]
// ];

// var map4 = [
// ["A","A","A","A","A"],
// ["A","A","V","A","A"],
// ["A","A","A","V","A"],
// ["v","v","V","v","A"],
// ["X","V","A","A","A"]
// ];

// treasureFinder(map3);

// var treasureFinder = function(map, key) {
//   for (var r = 0; r < map.length; r++) {
//     if (map[r].includes(key)) {
//       console.log(map[r]);
//       console.log([r]);
//       console.log([map[r].indexOf(key)]);
//       console.log('[' + [r] + ", " + [map[r].indexOf(key)] + ']');
//     // } else {
//     //  console.log("Key doesn't belong in a museum");
//     }
//   }

// }

// var holyGrailMap = [
// ["v","v","V","v","S","S"],
// ["v","v","V","v","S","S"],
// ["v","v","V","v","S","S"],
// ["v","v","V","v","S","S"],
// ["v","v","G","v","S","S"],
// ["v","v","H","v","S","S"],
// ["v","v","V","v","S","S"],
// ["A","V","A","A","A","S"]
// ];

// treasureFinder(holyGrailMap, "G");
// treasureFinder(holyGrailMap, "H"); 

counter = 0;
var treasureFinder = function(map, key) {
  for (var r = 0; r < map.length; r++) {
    if (map[r].includes(key)) {
      console.log('[' + [r] + ", " + [map[r].indexOf(key)] + ']');
    }
    if (map[r].indexOf(key) == -1) {
      counter ++;
    }
  }

  if (counter == map.length) {
    console.log("Key doesn't belong in a museum");
  }
  counter = 0;

}
  


var holyGrailMap = [
["v","v","V","v","S","S"], 
["v","v","V","v","S","S"],
["v","v","V","v","S","S"],
["v","v","V","v","S","S"],
["v","v","G","v","S","S"],
["v","v","H","v","S","S"],
["v","v","V","v","S","S"],
["A","V","A","A","A","S"]
];

treasureFinder(holyGrailMap, "G");
treasureFinder(holyGrailMap, "H");
treasureFinder(holyGrailMap, "b");







