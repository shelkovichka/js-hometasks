'use strict'

let count = 34;

if (count >= 90 && count <= 100) {
	console.log ('отлично');
} else if (count >= 60 && count <= 89) {
	console.log ('хорошо');
} else if (count >= 40 && count <= 59){
	console.log ('удовлетворительно');
} else {
	console.log ('попробуйте еще раз');
}


let sum = 7000;
let code = 6922;

switch (code) {
	case 4653:
		console.log (sum * 0.7);
		break;
	case 5698:
	case 5111:
		console.log (sum * 0.8);
		break;
	case 6922:
	case 6113:
	case 6099:
		console.log (sum * 0.9);
		break;
}


let plates = 10, fairy = 4;

while (fairy > 0 && plates > 0) {
	fairy = fairy - 0.5;
	plates = plates - 1;
		console.log(fairy);
}

console.log(plates);

/*
const MIN = 1, MAX = 9;
let num = parseInt(Math.random() * (MAX - MIN) + MIN);
let userNum = +prompt('угадайте число от 1 до 9');

while (userNum !== num) {
	if (userNum < num && userNum !== 0) {
		alert('загаданное число больше');
		userNum = +prompt('попробуйте еще раз');
	} else if (userNum > num) {
		alert('загаданное число меньше');
		userNum = +prompt('попробуйте еще раз');
	} if (userNum === 0) {
		alert('выход из программы');
		break;
	} if (userNum === num) {
		alert('вы угадали!');
		break;
	} 
} 
*/

const START = 10, END = 500;
let n500 = parseInt(Math.random() * (END - START) + START);

if (n500 >= 25 && n500 <= 200) {
	console.log('число ' + (n500) + ' содержится в интервале (25;200)');
} else {
	console.log('число ' + (n500) + ' не содержится в интервале (25;200)');
} 


 
