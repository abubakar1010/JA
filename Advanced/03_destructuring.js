let arr = [ 4, 5, 3, 2]

// console.log(arr);

// its call array destructuring. the first variable refer the first element of arr and then repeat same as it is

let [ a, b, c, d] = arr

let myobj = {

    name: "osman",
    age: 19

}

// console.log(myobj);

// it's call object destructuring, the property name refer the property value of main obj

let { name , age } = myobj

// console.log(age);

let { name: nam, age: boyos} = myobj

// console.log(nam);

let fn = ( a, b) => [ a*4, b * 4]

let [v, e] = fn(2,4)

// console.log(e);