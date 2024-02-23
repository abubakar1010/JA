
// Problem 04 ________________________________


const classmate = [ 'Abdullah', "Shown", 'Emon', "Mehady", "Rohan"]


// using normal for of loop 

const fn = (input) => {


    const result = []

    for ( let element of input ){

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
