
var selection = []
var answer = function(numbers) {
	for (var i = 0; i < numbers.length; i++) {
		num = numbers[i] ** 0.5  
		if (num % 1 === 0) {
		selection.push(num);
		}
	}
};
selection;
var numbers = [4, 1, 16, 1, 10, 35, 22];
answer(numbers);

selection.sort(function(a, b) {
	return a - b;
});