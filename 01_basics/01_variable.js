const accountId = 10000
let accountEmail = "sifta123@gmail.com"
var accountPassword = "12345"
accountCity = "Dhaka"

//accountId = 2
console.log(accountId);


/* prefer not to use var bcz of issue in block scope and functional scope */

accountEmail = "urmi123@gmail.com"
accountPassword = "888888888"
accountCity = "Rangpur"
console.table([accountId,accountEmail,accountPassword, accountCity])