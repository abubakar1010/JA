// Task

// Implement a function named factorial that has one parameter: an integer, . It must return the value of  (i.e.,  factorial).

// Input Format

// Locked stub code in the editor reads a single integer, , from stdin and passes it to a function named factorial.


// Output Format

// The function must return the value of n!

// Sample Input 4

// Sample Output 24

// fixme: Solution

function factorial(n){
    
    let sum = 1;
    for ( let i = n; i > 0; i--){
        
        sum = i * sum
    }
    
    return sum
}

console.log(factorial(4));