// Build a function mergeSort that takes in an array and returns a sorted array, using a recursive merge sort methodology. An input of [3, 2, 1, 13, 8, 5, 0, 1] should return [0, 1, 1, 2, 3, 5, 8, 13], and an input of [105, 79, 100, 110] should return [79, 100, 105, 110].

function mergeSort(array) {
	// Check if array.length > 1?
	if (array.length > 1) {
		const middle = array.length / 2;

		// split array
		const leftArr = array.slice(0, middle);
		const rightArr = array.slice(middle);

		// recursive 
		let lArr = mergeSort(leftArr);
		let rArr = mergeSort(rightArr);

		// merge
		return merge(lArr, rArr);
	}
	return array;
}

function merge(left, right) {
	let sorted = [];

	// while array not empty
	while (left.length != 0 && right.length != 0) {

		if (left[0] <= right[0]) {
			sorted.push(left.shift());
		} else {
			sorted.push(right.shift());
		}
	}

	for (let i = 0; i < left.length; i++) {
		sorted.push(left[i]);
	}
	for (let j = 0; j < right.length; j++) {
		sorted.push(right[j]);
	}

	return sorted;
}

console.log([3, 2, 1, 13, 8, 5, 2]);
console.log(mergeSort([3, 2, 1, 13, 8, 5, 2]));
