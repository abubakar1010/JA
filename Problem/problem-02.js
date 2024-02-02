
//Convert temperature
// Learn how to create a temperature converter. Your task is to provide a value in Fahrenheit and then convert it into Celsius . Then round it up to two decimal places if you get fraction. And return the rounded value as output.



// Alert: The output must be in a number format.



// The formula below shows how to convert from Fahrenheit to Celsius temperature measurements:



// ℃=(℉-32)/1.8




//   TestCases:
//   Case1:
 
//   Input: temperatureConverter(50)
//   Output: 10
//   TestCases:
//   Case2:
 
//   Input: temperatureConverter(103)
//   Output: 39.44


// fixme: solution


function temperatureConverter(valNum) {
  let celsius = ( valNum - 32 ) / 1.8
 
   if(!Number.isInteger(celsius)){
     return Math.round(celsius * 100) / 100
   }
 
   return celsius
 }
 
 console.log(temperatureConverter(50))

