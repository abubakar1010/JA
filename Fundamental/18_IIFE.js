// // note: Immediately Invoke Function Expression (IIFE)

// // t-i-q: 2 reason for using iife. 1) if we created a file that connected to database, so we need to immediate execution of this file. 2) to avoid global scope pollution 


// (function right(){
//     console.log(`immediately execution is on the way`);
// })()

// // console.log(right());


// // note: syntax of iife ----- (write function here)()



//named iffe with celling function with argument

(function funcForIffe(value){

    console.log(value);
})(9);

// t-i-q: semicolon (;) must need between two iffe reason is that semicolon defined end pont of iffe

//note: arrow function with parameter and argument (also unnamed function)

(  (values) => {
    console.log(values);
})(15)

