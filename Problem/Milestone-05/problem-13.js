// Task-2:
// You are given an array of numbers. Count how many times the a number is repeated in the array.

// sample-input: numbers = [5,6,11,12,98, 5]

// find: 5

// output: 2


// sample-input:

// numbers = [5,6,11,12,98, 5]

// find: 25

// output: 0

function inputArray(values, num){

    total = 0

    for ( let i = 0; i < values.length; i++){

        if(values[i] === num){
            total++
        }
    }

    return total
}

console.log(inputArray([5,6,11,12,98, 5, 5, 5], 5));

/**
 * execute different way
 */

function myArray2( inputs, value){

    let sum = 0

    for( let input of inputs){

        if( input === value ){
            sum++
        }
    }
    return sum
}

console.log(myArray2([5,6,11,12,98, 5], 25));