
// primitive datatype is passed by value 

let num1 = 7;

let num2 = 9;

function byValue( value1, value2){

    value1 = 6

    console.log( value1 * value2)
}

console.log(num1);

byValue( num1, num2)

console.log(num1);

//note: here num1 is not change because primitive is passed by value


const classed = {
    nine: 16,
    ten: 17

}

function byReference( val ){

    val.nine = 19;

}
console.log(classed);

byReference(classed);

console.log(classed);

// note: the vale of nine is changed here because non-primitive or reference data is passed by reference  