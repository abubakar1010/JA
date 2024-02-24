const say = [ 33, 50, 79, 78, 90, 101, 30];

let nm = say.filter( (a) => a % 10 === 0)
let nm2 = say.find( (a) => a % 10 === 0)

console.log(nm);
console.log(nm2);