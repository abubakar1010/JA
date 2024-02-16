// note: function depends on what kind of parameter and arguments set by we. if we have right only pass primitive or object as a parameter or return then this type of function call normal or first order function

function names(strings , object){
    return strings
}

// t-i-q: if we right to pass primitive, object and also function as a parameter or return then this type of function call higher order function

function higherOrder(operationFn, a, b){

    return operationFn(a, b)
}

function add(d, e){
    return d + e
}

const result = higherOrder(add, 5, 7)

// console.log(result);

//note: second type of higher order function.in this type function we call a function in a function

function myFn(){
    return function(){
        // console.log("function ok");
    }
}

const getFn = myFn()

// console.log(typeof getFn);

getFn()



// *forEach method a example of hire order function. because it's take function as argument


const arr = ["osman", "omar", "abdullah"]

    arr.forEach((names) => {

        // console.log(names);
    
});



// *map method a example of hire order function. because it's also take function as argument


const number = [1,2,3]

const mapOnarr = number.map( (num) => num*3)

// console.log(mapOnarr);



// *filter method a example of hire order function. because it's also take function as argument


const newarr = number.filter( num => num % 2 === 0)

// console.log(newarr);



// *reduce method a example of hire order function. because it's also take function as argument


const red = number.reduce( (acc, curr) => acc + curr)

// console.log(red);
