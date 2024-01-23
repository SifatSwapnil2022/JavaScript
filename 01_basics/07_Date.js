// dates

let myDate = new  Date()
console.log(myDate)
console.log(myDate.getDay());
console.log(myDate.getMonth());
console.log(myDate.getTimezoneOffset());
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleString())
console.log(myDate.toLocaleDateString())
console.log(myDate.toLocaleTimeString())

console.log(typeof myDate);
let myCreateDate = new Date(2023,0,23) //here 0 means january ***
console.log(myCreateDate.toDateString());

let myCreateDate1 = new Date("01-14-2023")
console.log(myCreateDate1.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreateDate1.getTime());
console.log(Math.floor(Date.now()/1000));

myDate.toLocaleString('default',{
    weekday:"long",
    timeZone: ' Dhaka (GMT+6)'
})