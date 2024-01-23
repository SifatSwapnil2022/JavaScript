//singleton

//object literals

const mySymbol = Symbol("key1")
const user = {
  name : "SIFAT",
  age: 24,
[mySymbol] : "key1",
  location: "dhaka",
  email : "sifat123@gmail.com",
  isLoggedIn :false,
  lastLogInDays : ["Monday","Saturday"]
}

console.log(user["email"])
console.log(user.location)
console.log(user.name)
console.log(user[mySymbol])

user.email = "swapnil121@gmail.com"
Object.freeze(user)
console.log(user);

user.greeting = function(){
    console.log("hi sir, how are you .");
}
console.log(user.greeting);

user.greeting2 = function(){
    console.log(`hi sir, how are you ,${this.name}`);
}

console.log(user.greeting2);