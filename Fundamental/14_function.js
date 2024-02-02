


    function names() {

  // console.log("O");
  // console.log("S");
  // console.log("M");
  // console.log("A");
  // console.log("N");

}

// names()


// function additions( num1, num2){

//   console.log(num1 + num2);

// }

// additions( 5, 9 )



function additions( num1, num2){


  // let result = num1 + num2

  // return result

  //note: execute in deferent way


  return num1 + num2

}

const total = additions(5, 9)

// console.log(total);


function user(name){

  if( name === undefined){
    // console.log('please enter a valid name');
    return
  }
  return `${name} is logged in`
}

// console.log(user());

// note: ... [rest] method provide all value in a array

function calculatePrices(...price){
return price
}

// console.log(calculatePrices(500, 300, 100));


let customer = {
  name: "abdullah",
  price: 999
}


function shoppingDetails(anyObject){
  // console.log( ` user name is ${anyObject.name} and total price is ${anyObject.price}`);
}

// shoppingDetails(customer)

shoppingDetails({
  name: "muhammad",
  price: 888
})


const myArray = [ 888, 999, 777]

function getValueOfArray(findOutValue){
  return findOutValue[1]
}

// console.log(getValueOfArray(myArray));
console.log(getValueOfArray([ 111, 222]));