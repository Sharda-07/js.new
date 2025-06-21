// singleton (constrcuctor se banega to singleton hoga)

// object literals

const mysymbol = Symbol("key1")
const jsuser = {
    name: "sharda",
    "full name": "Sharda Meghwal",
    [mysymbol]: "mykey1",
    age: 20,
    location: "Delhi",
    email: "smgehlot@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}
console.log(jsuser.email);
console.log(jsuser["email"]);
console.log(jsuser["full name"]);
console.log(jsuser[mysymbol]);

jsuser.name = "anand"    //to chnage value
// Object.freeze(jsuser)
jsuser.name = "darshan"
console.log(jsuser);

//function in js are treated as a variables 
jsuser.greetings=function(){
    console.log("Hello JS user");
}
jsuser.greetingstwo=function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(jsuser.greetings());
console.log(jsuser.greetingstwo());




