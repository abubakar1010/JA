// Is it Isosceles??
// You are given a triangle with three sides as input. Write a function checkTriangle to check whether a triangle is Isosceles or not.



// Isosceles means two sides are equal



// Sample Input-1:



// 9,8,9



// Sample output:



// Yes



// Sample Input-2:



// 8,8,8



// Sample output:



// No


// ;

// fixme: solution

function checkTriangle(side1, side2, side3){
    //write your code here
      if( side1 == side2 && side1 !== side3 || side1 == side3 && side1 !== side2 || side3 == side2 && side1 !== side3  ){
        return "Yes"
      } 
      else{
        return "No"
      }
    //don't forget to write return
    }
    
    console.log(checkTriangle(8, 8, 8))