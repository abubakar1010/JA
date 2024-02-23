
// Find the average
// Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics, and Bangla of a student.

// Input:
// The input parameter will be an array of integers, where each integer represents the mark of a subject given above.

// Output:
// Print the result in 2 decimal places. If you get a fraction rounded up to 2 decimal places. The output must have to be in number format.

// Hints: First check if your output is in number format or string format by typeof operator.




//   Sample Input:

//   [75.25, 65, 80, 35.45, 99.50]

//   Output:

//   71.04

//   Sample Input:

//   [100, 100, 100, 100, 100]

//   Output:

//   100


// fixme: solution

let total = 0

function average (arrOfMarks){
    //write your code here

    for ( i = 0; i < arrOfMarks.length; i++){

        if( typeof arrOfMarks[i] === "number"){

            total += arrOfMarks[i]  
        }
    }

    total = total / arrOfMarks.length

    if(!Number.isInteger(total)){
        total = Math.round(total * 100) / 100
    }
    
    return total

   }

   console.log(average([75.25, 65, 80, 35.45, 99.50]));