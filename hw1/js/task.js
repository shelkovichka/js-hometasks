const MIN = 100000;
let sum = 176000;
let total = sum <= MIN ? sum : sum * 0.9;
console.log(total);

let n = 38;
let a = n / 10;
let b = n % 10;
let c = Math.floor(a + b);
console.log(c);

let n1 = 5;
let n2 = 7;
n1 = n1 + n2;
n2 = n1 - n2;
n1 = n1 - n2;
console.log(n1, n2);
