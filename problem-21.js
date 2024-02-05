// Find the lowest number in the array below.
// const heights2 = [167, 190, 120, 165, 137];

function findLowestNumber(values){

    let lowestNumber = values[0]
    for (const value of values){

        if(lowestNumber > value){

            lowestNumber = value
        }
    }

    return lowestNumber
}

console.log(findLowestNumber([167, 190, 120, 165, 137]));