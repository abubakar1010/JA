const reverseMaker = (word)=> {
    //Write Your solution Here
    word = word.split("").reverse().join("")
    return word
  };
  
  console.log(reverseMaker("Hello"))