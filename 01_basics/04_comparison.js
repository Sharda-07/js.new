console.log(2>1);

console.log("2" > 1);
console.log("02" > 1);

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

//****** Stack("primitive") and Heap("Non primitive")

let myYoutubename = "shardamdotcom"

let anothername = myYoutubename
anothername = "sanudotcom"

console.log(myYoutubename);
console.log(anothername);

let userone={
    email: "user@google.com",
    upi: "user@ybl"
}
let userTwo = userone

userTwo.email = "anand@google.com"

console.log(userone.email);
console.log(userTwo.email);





