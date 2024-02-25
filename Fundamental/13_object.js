

let mySym = Symbol("key");
let mySym2 = Symbol("key");


// console.log(mySym === mySym2);

const myObj = {
    name : "Muhammad",
    [mySym]: "typical Symbol",
    [mySym2]: "typical Symbol",

    //note : this is a way to use a symbol as object key. syntax is ----> [symbol name]: " value ",

    age: 19,
    role: "developer",
    email: "muhammad@isc.com",
    "company name": "XYZ Ltd",
    isLoggedIn: false,
    LoggedInDay: ["friday", "monday", "thursday"]


}

// note: for in loop for object 

for ( key in myObj){
    console.log(key)

    console.log(myObj[key]);
}

// note for of loop for a array element of object

const arrays = Object.keys(myObj)

console.log(arrays);

for ( value of arrays){
    console.log(value, ":", myObj[value]);
}


delete myObj[mySym2]

// note: for delete a element of object

// console.log(myObj);

const devAge = "age"

myObj[devAge] = 19

// note: set Object value by using another variable

// console.log(myObj);


// console.log(myObj[devAge]);

// note: get Object value by using another variable


// console.log(myObj[mySym] === myObj[mySym2]);

// note: go terminal and see deference

// console.log(typeof myObj[mySym]);
// console.log(myObj.age);

// console.log(myObj["age"]);

// note: this way to access value using key

// console.log(myObj["company name"]);

// note: there are no way to access value in this situation without []

myObj["company name"] = "abc ltd"

// console.log(myObj);

Object.freeze(myObj)

// note: .freeze() method don't allow to make any change in object

myObj["company name"] = " nst ltd"

// console.log(myObj);


const user = new Object()

// note: this is a singleton object

// console.log(user);

const anotherUser = {}

// notes: this is a object literals

// console.log(anotherUser);

anotherUser.name = "omar"

anotherUser.id = 239782

anotherUser.isLoggedOut = true

anotherUser.LoggedInDate = [ 21, 31, 12, 14]

anotherUser.details = {

    age : 22,

    isMarried : true,

    isHaveChildren : true,

    isBusinessman: {
        businessman:{
            name: "Abdullah",
            age: 17,

            isMarried: true
        }
    }


}

// console.log(anotherUser.details.isBusinessman.businessman.name);


let a1 =[ 1, 2, 3]
let a2 =[ 11, 22, 33]

let y = a1.push(a2)

// console.log(y);

const objOne = { 1: "a", 2: "b", 3: "c"}
const objTwo = { 4: "d", 5: "e", 6: "f"}
const objThree = { 7: "g", 8: "g", 9: "h"}

// let assignObj = Object.assign( {}, objOne, objTwo, objThree)

// note: Copy the values of all of the enumerable own properties from one or more source objects to a target object. Returns the target object.

let assignObjects = {...objOne, ...objTwo, ...objThree}

// note: ...[call spread method] combine two or more object and provide a new object


// console.log(assignObjects);


// console.log(Object.keys(assignObjects[1]));

// note: Returns the names of the enumerable string properties and methods of an object.

// console.log(Object.values(assignObjects[2]));

// note: Returns an array of values of the enumerable properties of an object

// console.log(Object.entries(assignObjects[3]));

// note: Returns an array of key/values of the enumerable properties of an object

// console.log(assignObjects.hasOwnProperty("1"));

// note: .hasOwnProperty() check existence of property

// basic structure of JASON


// {
//     "name": "osman"

//     "age": 23
// }

// [
//     {

//     }
//     {

//     }
// ]


// note: getter (get) and setter (set) in Object

const Person ={

    
    name: "omar",
    age: 19,

    get concat(){

        return `his name ${this.name} and his age ${this.age}`
    }

}

// note: javaScript getter syntax 

// console.log(Person.concat);


const anotherPerson ={

    
    name: "osman",
    age: 19,

    set work(param){

        this.name = param
    }

}

anotherPerson.work = "omar"

console.log(anotherPerson);

// this is simple syntax of setter 