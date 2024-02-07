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

//create multiplication table

for ( i = 1; i <= 10; i++){
    
    console.log(` this is multiplication table of ${i}`);
    
    for ( a = 1; a <= 10; a++){
        
        
        console.log( ` ${a} * ${i} = ` , a * i);
    }


}