// primitive 
// 7 types : string , number , boolean , null(empty), undefined , symbol, BigInt

//Reference (non primitive)
// array , functions ,objects

//JavaScript is a dynamically typed language, 
//which means that data types of variables are determined by
// the value they hold at runtime and can change throughout 
//the program as we assign different values to them.

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id == anotherId) // false

const bigNumber = 333333333333333n


//Reference

const heros = ["superman" , "batman ", "aquaman"]
let myObject = {
    name : "sifat" ,
    age : 23,
}

const myFuction = function() {
    console.log(" hi sifat ");
    
}

console.log(typeof myFuction);
console.log(typeof heros);
