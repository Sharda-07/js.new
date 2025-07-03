// var c=300
let a=300
//  {}   //these curly braces are called as scope

if(true){
    let a = 10
    const b = 20    // bracket ke ander vala block scope aur bhar vala global scope
    var c = 30
    console.log("INNER: ",a);
 }

// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "sharda"
    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);
    two()
}
one()

if(true){
    const username ="sharda"
    if(username=== "sharda") {
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);


// ++++++ intersesting
function addone(num){
    return num + 1
}
addone(5)

const addtwo = function(num){
    return num +1
}
addtwo(5)