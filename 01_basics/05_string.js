const name = " sifat "
const repositories = 10

console.log(`hello my name is ${name} and my repositories are ${repositories}`);
const gameName  = new String("gurujiTripleX")
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('X'));


const newString = gameName.substring(0,9)
console.log(newString);

const anotherString = gameName.slice(-8,4)
console.log(anotherString);

const newStringOne = "  sifat      "
console.log(newStringOne)
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20 sifat"
console.log(url.replace('%20','-'))
console.log(url.includes('swapnil'))
console.log(gameName.split('-'));