// note: if ... else statement 

// if (condition) {
    
// } else {
    
// }

const falsyValue = ""

if (!falsyValue){
    // console.log("Print empty string is falsy");
}

const truthyValue = "false"

if(truthyValue){
    // console.log("print if false into string then this is a truthy value");
}
// t-i-q: truthy value Vs falsy value 

// falsy value

// note: false, 0, "", null, undefined, BigInt- 0n, -0, NaN

// truthy value 

// note: "0", "false", " ", [], {}, function (){}


// note: detect empty array 

const emptyArray = []

if(emptyArray.length === 0){
    console.log("this array is empty");
}

// note: detect empty Object


const emptyObject = {}

if(Object.keys(emptyObject).length === 0){

    console.log("this array is empty");

}