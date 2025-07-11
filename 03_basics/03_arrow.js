const user ={
    username: "sharda",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        
    }

}
// user.welcomeMessage()
// user.username ="anand"
// user.welcomeMessage()

// console.log(this);

// const addTwo = (num1,num2) => {
//     return num1 + num2
// }
// console.log(addTwo(6,4))

// OR

const addTwo = (num1,num2) => (num1 + num2)
console.log(addTwo(6,4))