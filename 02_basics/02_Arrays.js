const Dc_heroes = ["Batman","Superman","Flash"]
const Marvel_heroes = ["Ironman","Spiderman","Thor"]

console.log(Dc_heroes);
console.log(Marvel_heroes);


Marvel_heroes.push(Dc_heroes);
console.log(Marvel_heroes);

const allHeroes = Marvel_heroes.concat(Dc_heroes)
console.log(allHeroes);

const all_new_heroes = [...Marvel_heroes,...Dc_heroes]
console.log(all_new_heroes);

const another_array = [ 1,2,3,[4,5,6],7, [8,9,10,[4,5]] ]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);


console.log(Array.isArray("sifat"))
console.log(Array.from("sifat"));
console.log(Array.from({name :"sifat"})); //interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));