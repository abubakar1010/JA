
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



const client = {
    clientName: "Osman",

    profession: "Senior Software Engineer",

    welcomeMassage: function() {

        console.log(`${this.clientName}, Welcome to our team`);

        console.log(this);
    }
}

// client.welcomeMassage()

// client.clientName = "Omar"
// client.welcomeMassage()

// console.log(this);

// function coffee(){
//     console.log(this);
// }

// coffee()


// note: syntax of arrow function

const coffee = () => {
    console.log("this is good or bad");

    let userName = "Abu Bakar"

    console.log(this.userName);
} 

// coffee()

//basic syntax

// const add = (num11 , num12) => {
//     return num11 * num12
// }

// note: implicitReturnFunction 

const add = (num11 , num12) => num11 * num12

//note: another syntax of implicitReturnFunction 

const addtwo = (val1, val2) => (val1 + val2)

// note: if use curly braces then must need to use return keyword but don't need to use if use parentheses. 

// i-q: so tow syntax number1: const variableName = () = {this function need to "return" keyword} number2: const variableName = () = (this function don't need to "return" keyword)

// console.log(add(5, 10));

const implicitObj = () => ({userName: "abu bakar"})

