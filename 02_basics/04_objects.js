// singleton aur constructor ki tarh kaise declare kar sakate hai 

const tinderUser = new Object()
const tinder = {}
// both are same the only difference is that the above one is singletone object while the below one is not a singletone object
// console.log(tinderUser);
// console.log(tinder);

tinderUser.id="123abc"
tinderUser.name="sam"
tinderUser.isLoggedIn=false

console.log(tinderUser);

const regularuser={
    email: "sam@gmail.com",
    fullname: {
        userfullname: {
            firstname:"sharda",
            lastname:"meghwal"
        }
    }
}
console.log(regularuser.fullname.userfullname.firstname);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}
//const obj3 ={obj1,obj2}
// const obj3 = Object.assign({},obj1,obj2)
const obj3 = {...obj1, ...obj2}
console.log(obj3);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));

// const course={
//     coursename: "javascript",
//     price: "1099",
//     courseInstructor: "ABC"
// }
const {courseInstructor: instructor} = course
console.log(instructor);


//JSON 
{
    "name": "sharda",
    "coursename": "json",
    "price":"free"
}