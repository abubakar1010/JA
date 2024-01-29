
//note: in js mainly two type of data ---- 1.Primitive Data types, 2.Reference data types or Non-Primitive data types

//note: 7 types of primitive data.

// note: 1. Number 

let dataInNumber = 6

//note: 2. String 

let dataInString = "Muhammad"

//note: 3. Boolean

let dataInBoolean = true 


// note: 4. Null (means empty)

let dataInNull = null

//note: 5. Undefined 

let dataInUndefined;
let anotherDataInUndefined = undefined;

//note: 6. BigINt

let dataInBigInt = 2387785249747n

// note: 7. Symbol

let dataInSymbol = Symbol("99")
let anotherDataInSymbol = Symbol("99")

console.log( dataInSymbol === anotherDataInSymbol);
console.log( dataInSymbol == anotherDataInSymbol);

// t-i-q: symbol means unique. nothing matter is that type and value are same in two variable



//note: 2 type of reference / non-primitive


// note: 1. Array

let dataInArray = ["Abdullah", "Osman", 99, true, undefined, null]

//note: 2. Object

let dataInObject = {
    "name": "osman",
    "age": "19",
    "User Id": "13322"
}

//note: 3. function
let a = 8

let myFunction = function dataInFunc(Abdullah) {
    console.log(a)
}


// i-q: all primitive data is a object type but function is a object function type

console.log(typeof myFunction);