// NUMS****************

const score = 100
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 23.405867
console.log(otherNumber.toPrecision(4));

const hundreds = 100000
console.log(hundreds.toLocaleString('en-BD'))


// MATHS ********************

console.log(Math);
console.log(Math.abs(4));
console.log(Math.round(4.33));
console.log(Math.ceil(4.33));
console.log(Math.floor(4.33));
console.log(Math.min(4,5,7,8));
console.log(Math.max(4,5,7,8));
console.log(Math.random());
console.log(Math.floor(Math.random()*10)+1);


const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max-min+1) )+min)