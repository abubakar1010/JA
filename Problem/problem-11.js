/**
 * Delete duplicate item from array
 */

function mainArr(value){
    let uniqueArray = []
    for( let item of value){
        
        if(uniqueArray.includes(item) === false){
            uniqueArray.push(item)
        }
    }

    return uniqueArray
}

console.log(mainArr(["abul", "babul", "kabul", "abul", "chabul","nabul", "babul", "kabul"]));
console.log(mainArr([ 1, 2, 3, 4, 1, 5, 3, 6, 7, 3, 4, 6]));