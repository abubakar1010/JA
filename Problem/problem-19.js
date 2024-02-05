function findGrade(marks){
    //write your code here
      if ( marks >= 80){
        return "A"
      }
    
       else if ( marks >= 60){
        return "B"
      }
    
       else if ( marks >= 50){
        return "C"
      }
    
      else if ( marks >= 40){
        return "D"
      }
    
       else if ( marks <= 39){
        return "F"
      }
    
       
    //don't forget to write return
    }
    
    
    console.log(findGrade(95))
    // 80 or above A grade
    // 60 or above B grade
    // 50 or above C grade
    // 40 or above D grade
    // 39 or less => F grade