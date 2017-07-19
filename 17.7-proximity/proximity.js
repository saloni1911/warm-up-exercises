// https://gist.github.com/kasun-maldeni/1a3a65b1a2c8019fb1a4cf367ada4870/
// You and some friends usually play a gathering game (like a scavenger hunt) using geo-coordinates in a park, but it has gotten so popular that many people want to join in. One of your friends created an API. An API is a way us getting data from a service. for people to add items hidden in the park, but now you want to build an App to help people decide what to find in the park.

// You are given the following set of data as a result back from an API request and you want to sort those results in terms of proximity to the user of your site.

// Write a loop that takes some results and a current location, i.e. lat and long and returns the results in order of proximity to the currentLocation. Note: you should choose this current location.

var myResults = [ {name: "six pack of beer", location: {lat: 37.767182, long: -122.5}},
          {name: "whacky glasses", location: {lat: 37.767182, long: -122.51}},
          {name: "whiskey bottle", location: {lat: 37.767282, long: -122.49}},
          {name: "diving goggles", location: {lat: 37.770282, long: -122.503}},
          {name: "running shoes", location: {lat: 37.7669, long: -122.457}},
          {name: "paint brushes", location: {lat: 37.76800, long: -122.4580}}]

var distance = [];

var closest = function(x, y) {
	for (var i = 0; i < myResults.length; i++) {
		var a = (myResults[i].location.lat - x);
		var b = (Math.abs(myResults[i].location.long) - y);
		var difference = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
		distance.push(difference);
		// var object = {name: myResults[i].name, distance: difference};
		// distance.push(object);
		// console.log(object);
	}
}
closest(37.751245, 121.45);
console.log(distance);
var x = distance.indexOf(_.min(distance));
console.log(x);
console.log("The closest thing to your current location is " + myResults[x].name);

// formula used is calculate hypotunuse = sqr root (of (clat- givenlat)2 + (clat- givenlat)2)
//  2 is square









