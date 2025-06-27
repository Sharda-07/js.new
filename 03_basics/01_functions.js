//jo bhi aapne code likha hai 10 line 20 line ka uska 1 package banna, vo package jitni baar chahhe jha chahe run kar sakate hai

function saymyname(){
    console.log("S");
    console.log("H");
    console.log("A");
    console.log("R");
    console.log("D");
    console.log("A");
}
// saymyname()
// function addTwoNumbers(number1, number2){   //yha num1, num2 parameters hai 
//    console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){   //yha num1, num2 parameters hai 
//    const result = number1 + number2
//    return result
      return number1 + number2
}

const result = addTwoNumbers(3,5) //yeh arguments hote hai
console.log("Result: ", result);

function loginUserMessage(username){
    if(username === undefined){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage());


function calculateCartPrice(val1, val2, ...num1){   // ... is rest and spread operator
    return [num1, val1, val2]
}
console.log(calculateCartPrice(200, 400, 500, 100, 700));

//obj ko function meh kaise pass karte hai aur kaise use karte hai
const user ={
    username: "sharda",
    price: 199
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
handleObject(user)