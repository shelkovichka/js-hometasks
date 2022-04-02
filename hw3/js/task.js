'use strict'

let count = '2278634521';
let last = count.length - 1;
let penult = count.length - 2;

if (count[penult] + count[last] === '11' 
	|| count[penult] + count[last] === '12' 
	|| count[penult] + count[last] === '13' 
	|| count[penult] + count[last] === '14') {
	console.log((count) + ' товаров');
} else if (count[last] === '1') {
	console.log((count) + ' товар');
} else if (count[last] === '2' 
	|| count[last] === '3' 
	|| count[last] === '4') {
	console.log((count) + ' товара');
} else {		
	console.log((count) + ' товаров');
} 

