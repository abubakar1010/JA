
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

//console.log( dataInSymbol === anotherDataInSymbol);
//console.log( dataInSymbol == anotherDataInSymbol);

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
    //console.log(a)
}


// i-q: all primitive data is a object type but function is a object function type

//console.log(typeof myFunction);


// ____________________________________Memory_______________________________________


// note: stack memory and heap memory

// note: All primitive type count on stack memory and all reference data count on heap memory

let score = 99

let newScore = score

newScore = 101

// console.log(score);
// console.log(newScore);

let value = [ 6, 8, 10]

let newValue = value

newValue[2] = 15

// console.log(value);
// console.log(newValue);

// i-q: in stack memory-- if we assign a existing value in variable, then provided a copy of this existing value not this value

//t-i-q: in heap memory-- if we assign a existing value in variable, then provided a reference of this existing value not copy. because this reason if we have change in new value it makes change previous value