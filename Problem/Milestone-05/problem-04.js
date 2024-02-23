// Detect vowel and consonant
// Start editing to see some magic happen :)

// Write a function solution that takes an alphabet as a function parameter and return whether it is VOWEL or CONSONANT.

// Vowels and consonants
// Words are built from vowels (a, e, i, o, u) and consonants (the rest of the alphabet).

// The letter 'y' is a bit different because sometimes it acts as a consonant and sometimes it acts as a vowel.

// Knowing how vowels and consonants work together to make words and sounds will help you with your spelling.


// fixme: solution

const solution = (letter)=> {
    //Write Your solution Here
    if( letter == "a" || letter == "e" || letter == "i" || letter == "o" || letter == "u" ){
      return "VOWEL"
    }
    else{
      return "CONSONANT"
    }
   //don't forget to return
  };
  
  console.log(solution("b"))