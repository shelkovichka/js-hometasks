'use strict'

// 1

let numbers = [
    [0, 89, 444, 512, 0, -33, 200, 15],
    [4, 89, 12, 0, -33],
    [14, 170, -330],
    [44, 2, 56, -88],
    [4, 89, 45, 12, 0, -33, 90],
    [5, -12, 87, 67, -22, 111]
];

let rise = (a, b) => {
	if (a === b) return 0;
	if (a < b) return -1;
	return 1;
};

for(let each of numbers) {
	for(let number of each) {
		each.sort(rise);
	}
}
console.log(numbers);


// 2

let presents = ["книга", "ручка", "блокнот", "дождевик", 
"скрепки", "брелок"];

let shuffle = presents.sort(elem => Math.random() - 0.5);
console.log(presents);


// 3

let first = ["Апрель", "Июль", "Октябрь", "Май"],
	second = ["Май", "Январь", "Декабрь", "Октябрь"];
let third = [];

third = first.filter(month => second.includes(month));
console.log(third);


// 4

let temperatures = [
    [344, 241, 521, 344, 121],
    [111, 313, 351, 314],
    [134, 111, 452],
];

let hgtemp = temps => {
	for (let temp of temperatures) {
		for (let t of temp) {
			if (t > 500) return true;
		}
	}
};

if (temperatures.some(hgtemp)) {
	console.log('температура поднималась выше 500');
} else {
	console.log('температура не поднималась выше 500');
}




