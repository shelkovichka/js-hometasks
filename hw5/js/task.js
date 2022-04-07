'use strict'

// 1

function range(start, end, step = 1) {
	let nums = [];
	for (start; start <= end; start += step) nums.push(start);
	return nums;
}

console.log(range(3, 9, 2));
console.log(range(2, 9));

