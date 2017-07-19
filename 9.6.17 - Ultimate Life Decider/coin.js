// https://gist.github.com/kasun-maldeni/c337852cb0bf5072d6e91cb5ba78500e/

// Part One - The Coin of Inevitability

// Create a file called decider.js
// Write a function called coinFlip that 'console.logs' HEADS or TAILS when called
// Add a counter that declares WINNER in the console when either HEADS or TAILS is flipped 5 times.

// Part Two - The Coin App
// Create a file called decider.html
// Find any coin image online
// Link the .js file, while you're there you may also decide to add a .css file for some styling
// Now add the necessary components to the decider.html file so that when the coin image is clicked the coinFlip function result and tally are returned somewhere on the page.

var tallyHeads = 0;
var tallyTails = 0;

//find image and print location <h3>
var clickInput = document.getElementById("clickImage");
var tally = document.getElementById("tallyTotal");

//flipped
var coinFlip = function () {
  return (Math.floor(Math.random() * 2) === 0) ? "heads" : "tails";
};

console.log(coinFlip());

//specifying task
var task = function () {
  if (coinFlip() === "heads") {
    tallyHeads++;
  } else {
    tallyTails++;
  };
  if (tallyHeads % 5 == 0) {
    console.log('WINNER!');
  };
  return tally.innerHTML = "You have flipped " + tallyHeads +
  " heads and " + tallyTails + " tails."
};


//listen to click
clickInput.addEventListener("click", task);

console.log(tallyHeads);