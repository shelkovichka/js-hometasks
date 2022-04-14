'use strict'

// 1

function range(start, end, step = 1) {
	let nums = [];
	if (start > end) {
		return ('введите меньшее значение для начала диапозона');
	} if (step > start + end) {
		return ('введите меньшее значение для шага');
	} if (step < 0) {
		return ('введите положительное значение для шага');
	} else {
		for (start; start <= end; start += step) nums.push(start);
		return nums;
	}
}


// 2

function checkSpam(text, ...spamWords) {
	text = text.split(' ');
	let i = 0; 

	for (let wrd of text) {
		for (let spm of spamWords) {
			if (spm === wrd) i++;
		} 
	}

	if (i > 10) {
		return('очень сильно заспамлен');
	} else if (i > 8) {
		return ('сильно заспамлен');
	} else if (i > 6) {
		return ('средне заспамлен');
	} else if (i >= 3) {
		return ('слабо заспамлен');
	} else if (i < 3) {
		return ('очень слабо заспамлен');
	}
}





