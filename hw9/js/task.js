'use strict'


// 1

let articles = [
    {
        id: 1,
        title: "JS",
        text: "About JS",
        author: "Max"
    },
    {
        id: 2,
        title: "PHP",
        text: "About PHP",
        author: "Ivan"
    },
    {
        id: 3,
        title: "DataBase",
        text: "About DB",
        author: "Paul"
    },
    {
        id: 4,
        title: "HTML",
        text: "About HTML",
        author: "Paul"
    }
];

let goods = [
    {
        title: "Piano",
        price: 3000,
        count: 25
    },
    {
        title: "Guitar",
        price: 1200,
        count: 40
    },
    {
        title: "Drum",
        price: 2700,
        count: 12
    },
    {
        title: "Flute",
        price: 900,
        count: 50
    },
    {
        title: "Harp",
        price: 3400,
        count: 5
    }
];



function generateTable(arr) {
	
	let tableArea = document.querySelector('#table');
  	let table = document.createElement('table');

	let row = table.insertRow();

	for (let key in arr[0]) {
		let cell = row.insertCell();
		cell.innerText = key.toUpperCase();
        cell.style = 
        `
        font-weight: bold;
        background-color: #483D8B
        `;
	}

		for (let obj of arr) {
			let row = table.insertRow();
			for (let value in obj) {
				let cell = row.insertCell();
				cell.innerText = obj[value];
				cell.style.backgroundColor = '#D8BFD8';
			}
		}

	tableArea.append(table);
}

generateTable(articles);
generateTable(goods);


// 2

let prises = {
        headphones: "Наушники",
        book: "Книга",
        postcard: "Открытка"
     };


function generateField(n) {
	if (n > 3) {
		let table = document.querySelector('#field');
        for (let i = 0; i < n; i++) {
            let row = document.createElement('tr');
            table.append(row);
			for (let i = 0; i < n; i++) {
                let cell = document.createElement('td');
                row.append(cell);
            }
        } 
        
        let cellsNum = document.querySelectorAll('td');
        for (let i = 0; i < 3; i++) {
            let randomCell = cellsNum[Math.floor(Math.random() * cellsNum.length)];
                for (let p in prises) {
                    randomCell.setAttribute('prise', prises[p]);
                }               
		} 
	} else return false;
}

generateField(4)

// Снала получаете все ячейки, через querySelectorAll, например. 
// Потом делаете цикл на 3 итерации, 
// на каждой итерации: получаете рандомное число от 0 до размера 
// списка с ячейками (ячейки.legth), потом ячейка = всеЯчейки[рандомный индекс];






