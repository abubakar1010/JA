
// Problem 06 ________________________________


const findMax = ( input1, input2 ) => {

    const newArray = [ ...input1, ...input2];

    const maximumValue = Math.max(...newArray);

    return maximumValue;

}


const maxOfArray = findMax( [3, 5, 6, 72, 13],[ 36, 87, 39, 58]);

console.log(maxOfArray);