// Task-3:
// Write a function to count the number of vowels in a string.



function strings( value ){

    let totalCount = 0;


    for ( let i =0 ; i < value.length; i++){

        if( value[i] === "a" || value[i] === "e" || value[i] === "i" || value[i] === "o" || value[i] === "u"){

            totalCount++

        }
    }

    return totalCount
}

console.log( strings("Here we count the number if vowel in this string"));
