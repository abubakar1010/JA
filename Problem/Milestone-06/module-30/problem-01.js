
// Problem 01 ________________________________
const multiplication = (num1, num2, num3) => num1 * num2 * num3


console.log(multiplication( 2, 5, 7));

// Problem 02 ________________________________

console.log(`I am a web developer.
I used to write code.
I love eat milk`);

// Problem 03 ________________________________


const arrowFunction = ( x, y = 0) => x + y

console.log(arrowFunction( 9));

// Problem 04 ________________________________


const classmate = [ 'Abdullah', "Shown", 'Emon', "Mehady", "Rohan"]


// using normal for of loop 

const fn = (input) => {


    const result = []

    for ( element of input ){

        // console.log(element);
        if ( element.length % 2 === 0) {
            
            result.push(element)
        }
    }

    return result
}

const evenLength = fn(classmate)

console.log(evenLength);

// solve using arrow function with filter method

const arrowFn = (classmates) =>{

    const evenClassmate = classmate.filter( (ev) => ev.length % 2 === 0)

    return evenClassmate
}

let ans = arrowFn(classmate)

console.log(ans);