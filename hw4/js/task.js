'use  strict'

// 1

numbers = [2, -44, 52, 88, -489, -87, 7];
let negative = [];

for (let element of numbers) {
	if (element < 0) negative.push(element);
}

console.log(negative);


// 2

// не получилось поменять максимальное и 
// минимальное значения местами, смогла только
// выделить их в отдельные переменные

let nums = [];
const MIN = 5; MAX = 300;

for (let i = 0; i < 7; i++) {	
	nums.push(parseInt(Math.random() * (MAX - MIN) + MIN));
}

console.log(nums);

let min = nums[0];
let max = min;

for (let i = 0; i < 7; i++) {
	if (nums[i] > max) max = nums[i];
	if (nums[i] < min) min = nums[i];
}

console.log(max, min);


// 3

fruits = ['apple', 'orange', 'banana', 'peach'];
let fruit = prompt('name a fruit or "0" to escape');

while (fruit !== '0') {
		if (!fruits.includes(fruit)) fruits.unshift(fruit);
		alert(fruits);
		fruit = prompt('name a fruit or "0" to escape');
}
