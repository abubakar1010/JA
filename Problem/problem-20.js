function findLeapYear(arrOfYears){
    //write your code here
    
      leapYear = [];
    
      for ( year of arrOfYears){
        
      if ( year % 4 === 0 && arrOfYears % 100 !== 0){
        leapYear.push(year)
      }
    
        else if ( year % 400 === 0){
          leapYear.push(year)
        }
      }
    //don't forget to write return
    
      return leapYear
    }
    
    console.log(findLeapYear([2023,2024,2025,2028,2030]))