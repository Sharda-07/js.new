const marvel_heros=["thor", "ironman", "spiderman"]
const dc=["supreman", "flash", "batman"]

// marvel_heros.push(dc)
// // console.log(marvel_heros);
// // console.log(marvel_heros[3][1]);

// marvel_heros.concat(dc)
// // console.log(marvel_heros);

// const allHeros = marvel_heros.concat(dc)
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc]
// console.log(all_new_heros);

const another_array = [1,2,3, [4,5,6],7,[6,7,[4,5]]]
console.log(another_array.flat(Infinity));


console.log(Array.isArray("Sharda"))
console.log(Array.from("Sharda"))
console.log(Array.from({name: "Sharda"})) //interesting

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2, score3));
