'use strict'


let items = {
     piano: {
         title: 'Пианино',
         price: 3000,
         count: 25
     },
     guitar: {
         title: 'Гитара',
         price: 1200,
         count: 40
     },
     drum: {
         title: 'Барабаны',
         price: 2700,
         count: 12
     },
     flute: {
         title: 'Флейта',
         price: 900,
         count: 50
     },
     harp: {
         title: 'Арфа',
         price: 3400,
         count: 5
     }
 };


// 1

function range(obj, from, to) {
    let priceLimit = {};
	for (let i in obj) {
        if (obj[i].price >= from && obj[i].price < to) {
            priceLimit[i] = obj[i];
        }
    } return priceLimit;
}

console.log(range(items, 500, 2000));


// 2

function buy(obj, itemTitle, countToCart) {
    for(let item in obj) {
 		if (obj[item].title === itemTitle) {
	 		if (obj[item].count >= countToCart) {
	 			obj[item].count = countToCart;
	 			return true;
	 		} else if (obj[item].count <= countToCart) {
	 			console.log('такого количества товаров нет в наличии');
	 			return false;
	 		}
	 	}
 	}
 };

console.log(buy(items, 'Флейта', 60));


// 3

let books = [
    {author: "Толстой", title: "Война и мир"},
    {author: "Пушкин", title: "Пир во время чумы"},
    {author: "Лермонтов", title: "Тамань"},
    {author: "Гончаров", title: "Обломов"},
    {author: "Лермонтов", title: "Герой нашего времени"},
    {author: "Пушкин", title: "Руслан и Людмила"},
    {author: "Лермонтов", title: "И скучно, и грустно"},
];

books.sort((a, b) => {
	if (a.title < b.title) return -1;
	if (a.title > b.title) return 1;
});

console.log(books);