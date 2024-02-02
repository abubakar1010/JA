
const user = {
    name: "Osman",

    price: 1111,

    massage: function(){
        console.log(`${this.name}, welcome to our community `);
    }
}

// user.massage()

user.name = "Omar"

// user.massage()

// note: basic arrow function

let arrowFunction = (num1, num2) => {

    return num1 + num2
}

// console.log(arrowFunction( 8, 4))

// note: An implicit return is a way of returning a value from a function without explicitly using the return keyword. 

let implicitReturnFunction = (input1, input2) => ( input1 + input2)

// console.log(implicitReturnFunction(8, 4));

