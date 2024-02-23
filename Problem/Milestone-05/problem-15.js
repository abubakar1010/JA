// // Task-4:
// // Write a function to find the longest word in a given string.

// // sample-input: I am learning Programming to become a programmer

// // sample-output: Programming

// /** 
//  * step 00: convert a array and separate by white space
//  * step-01: pass each word
//  * step-02: count each word length
//  * step-03: ant push in a new array 
//  * step-04: if the word length === new array ar max number then print the word
// */

// function longestWord(value){

//     let separate = value.split(" ")
//     // console.log(separate);

//     let lengthContainer = []
//     for ( word of separate){

//         lengthContainer.push(word.length)
//     }
//     console.log(Math.max(lengthContainer[]));
// }

// console.log(longestWord("I am learning Programming to become a programmer"));


function longestWord(sentence) {
    const words = sentence.split(' '); // Split the sentence into words
    let longest = ''; // Initialize the longest word to an empty string
    
    for (let word of words) {
        if (word.length > longest.length) {
            longest = word; // Update longest if current word is longer
        }
    }
    
    return longest;
}

// Example usage:
const sentence = "This is a sample sentence to test the function.";
console.log("Longest word:", longestWord(sentence));
