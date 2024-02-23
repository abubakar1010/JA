//Find the second largest.

function secondLargest ( numbers ) {
    //Write your code here
    
     let largest = 0;

     let secondLargest = 0;
    
      for ( let i = 0; i< numbers.length; i++){
        if ( numbers[i] > largest){
          largest = numbers[i]
        }
      }

      for ( let i = 0; i< numbers.length; i++){
        if ( numbers[i] > secondLargest && numbers[i]  !== largest){
          secondLargest = numbers[i]
        }
      }

      
      
    //Don't forget to return
    return secondLargest
    }
    
    console.log(secondLargest( [10,33,5,99,6] ))