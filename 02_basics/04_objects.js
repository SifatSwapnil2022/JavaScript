const facebookUser = new Object()
console.log(facebookUser);

const facebookUser1 = {}
console.log(facebookUser1);
facebookUser1.id = "2233"
facebookUser1.name = "sifat"
facebookUser1.isLoggedIn = false
console.log(facebookUser1);

const regularUser = {
    email: "sp121@gmail.com",

    fullName :{
        userFullName : {
    firstName : "sifat",
    lastName :  "swapnil"
  }
 }
}
console.log(regularUser.fullName.userFullName);

const obj1 = {
    1 : "a",
    2 : "b"
}
const obj2 = {
    3 : "c",
    4 : "d"
}
const obj3 = Object.assign({},obj1,obj2)
console.log(obj3);

//database
const users =[ 
    {
    id :1,
    email : "sifat@gamil.com"
},
{
id :1,
email : "sifat@gamil.com"
}
]
users[1].email
console.log(facebookUser1);
console.log(Object.keys(facebookUser1));
console.log(Object.values(facebookUser1));
console.log(Object.entries(facebookUser1));


console.log(facebookUser1.hasOwnProperty('isLoggedIn'));