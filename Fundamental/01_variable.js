
// note: we won't change the value that assign in const 


const doNotChange = "Fixed"


// note: Maybe we will change the value that assign in let


let probablyChange = "Unfixed"



// note: javaScript have some reserve keyword like: const, let, var, function,array etc


const userId = 153691

let userEmail = "abdullah@mtec.com" 

var userCity = "Islamabad"

userPassword = 76765 //waring: in js you declare a variable without using key word but don't use it

console.table([userId, userCity, userEmail, userPassword])

// userId = 832787 // waring: assign new value in constant is not allowed 

console.log(userId);

userEmail = "abdullah@stec.com"

userCity = "istanbul"

userPassword = 87675

//note: .table a method of js, the syntax is "console.table( [] )" 


console.table([userId, userCity, userEmail, userPassword])



// note: The characters {} are called "curly braces" or "braces" it's use js as a "scope". var have block scope and functional scope problem, so we don't use var rather use let.


let userLink;

// Note: if we declare a variable without assign a value it's call "undefined". undefined a types of data