// array
const myArr = [ 0,4,6,8,9,10]
const myHeros  = ["superman","batman","aquamen"]

//shallow copy = share the same reference

//deep copy = share not the same reference

const myArr1 = [0,1,2,3,4]
console.log(myArr[1]);
//array methods

myArr.push(100)
console.log(myArr);

myArr.push(300)
console.log(myArr);

myArr.pop(100)
console.log(myArr);

myArr.pop(300)
console.log(myArr);

myArr.unshift(7)
console.log(myArr);

myArr.shift()
console.log(myArr);

console.log(myArr.includes(400));

console.log(myArr.indexOf(600));

const newArr = myArr.join()
console.log(myArr);
console.log(typeof newArr);

//slice,splice

console.log("A",myArr);
const myarr2 = myArr.slice(1,3)
console.log(myarr2);
console.log("B",myArr)



const myarr3 = myArr.splice(1,3)
console.log(myarr3);
console.log("c",myArr)