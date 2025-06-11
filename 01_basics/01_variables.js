const accountId = 144553
let accountEmail = "sharda@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"

// accountId = 2
accountEmail = "ab@cv.com"
accountPassword = "4445637"
accountCity = "Delhi"

console.log(accountId);

/*
prefer not to use var
because of issue in block scope and functional scope
*/
console.table([accountId, accountEmail, accountPassword, accountCity])
