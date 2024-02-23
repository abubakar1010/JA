
// Problem 05 ________________________________

const contents = [4, 5, 8, 9, 2];

let sum = 0;

let average = 0

let square

        for( let content of contents){

    square = content * content

    sum += square

    average = sum / contents.length


}

console.log(square, sum, average);

// solved by arrow function 

let averageOfSum = ( inputsForAverage ) => {

    let sum = 0;

    let square = 0;

    let average = 0;

    for (const item of inputsForAverage) {

        square = item * item

        sum += square;

        average = sum / inputsForAverage.length
        
    }

    return average

}

const findAverage = averageOfSum(contents)

console.log(findAverage);
