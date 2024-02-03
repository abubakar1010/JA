// average of odd number in array

function inputArray( values){
    let numberOfElement= 0
    let total = 0
    for( value of values){
        if( value % 2 !== 0){
            
            numberOfElement++

            total += value
        }
    }

    average = total / numberOfElement

    return average
}

console.log(inputArray([42, 13, 58, 65, 81]));