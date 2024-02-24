const names = [
    { name: "abdullah", age: 20},
    { name: "Osman", age: 15},
    { name: "Omar", age: 22}
]

sum = 0;

for (const name of names) {
    
    sum += name.age
}

console.log(sum);


 const result = names.reduce( ( acc, curr) => {

    return acc + curr.age

},0)

console.log(result);