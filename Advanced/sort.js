const fruits = ["Mango", "Banana", "Orange", "Apple"]

fruits.sort()

console.log(fruits);

const numbers = [ 44, 37, 88, 97, 23, 88]

numbers.sort( (a ,b) => a - b )

console.log(numbers);

const values = [ 33, 44, 1, 98, 343, 48, 23, 32, 35]

values.sort( (a, b) => {
    return 0.5 - Math.random()} )

console.log(values);

let max = Math.max(...values)

console.log(max);


//sort object array 

const myObject = [
    {
        name: "volvo",
        year: 2022
    },
    {
        name: "Odi",
        year: 2002
    },
    {
        name: "BMW",
        year: 2012
    },
]

myObject.sort( ( a, b) => b.year - a.year)

console.log(myObject);

// sort object according to string means alphabetically

const sortAccString = [
    {
        name: "volvo",
        year: 2022
    },
    {
        name: "Odi",
        year: 2002
    },
    {
        name: "BMW",
        year: 2012
    },
]

sortAccString.sort( ( a, b) => {

    let x = a.name.toLowerCase()
    let y = b.name.toLowerCase()

    if( x > y){
        return  1
    }
    else if( x < y){
        return  -1
    }
    return 0
})

console.log(sortAccString);