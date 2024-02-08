let langName = [ "javaScript", "Python", "C", "CPP", "Ruby"]

// note: forEach loop in normal function

langName.forEach( function greeting(value){
    // console.log(value);
})

// note: forEach loop in arrow function

langName.forEach( (result) => {
    // console.log(result);
})

// note: forEach also print index and full array


langName.forEach( (tin, ton, ting) => {
    // console.log(tin, ton, ting);
})


let myProgLang = [
    {

    langName: "javaScript",

    fileExtension: "js"
},
    {

        langName: "python",

    fileExtension: "py"
},
    {
    langName: "java",

    fileExtension: "java"
}
]

myProgLang.forEach( (item) => {
    // console.log(item.langName);
} )


//uses of filter

let myNumbers = [1, 2, 3, 4, 5, 6, 7]

const filters = myNumbers.filter( ( value ) => ( 4 > value))

// console.log(filters);


const myTeammates = [ 

    {
        "name": 'osman',

        "Position" : "Head Of Execution",

        "Id" : 1977
    },
    {
        "name": 'omar',

        "Position" : "Head Of Command",

        "Id" : 3589
    },
    {
        "name": 'omar',

        "Position" : "Head Of Team",

        "Id" : 3589
    },
    {
        "name": 'omar',

        "Position" : "Head Of Command",

        "Id" : 3589
    },
    {
        "name": 'Abdullah',

        "Position" : "Chef of Department",

        "Id" : 1977
    }
]

const query = myTeammates.filter( (solder) => (solder["Id"] === 1977))

// console.log(query);



const fixedNum = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const useChaining = fixedNum.map( (value) => value * 5000).map( (value) => (value / 100) * 40).filter( (value) => value >= 15000)

// console.log(useChaining);

const sumOfArr = [ 1, 2, 3, 4, 5 ]

// note: reduce method with basic function

// let total =sumOfArr.reduce(function (initialValue, CurrentValue){
    
//     console.log(`acc: ${initialValue}, currentValue: ${CurrentValue}`);

//     console.log(initialValue + CurrentValue
//     );
    
//     return initialValue + CurrentValue
// },0)

// note:  reduce method with arrow function

let total =sumOfArr.reduce( (acc, crrVal) => acc + crrVal, 0)

// console.log(total);


let Shopping = [
    {
        productName: "MERN Stack Course",

        price: 5000,
    },
    {
        productName: "Py & Django Course",

        price: 2000,
    },
    {
        productName: "PHP & Larval",

        price: 2000,
    },
]

let totalPrice = Shopping.reduce( (acc, crrVal) => acc + crrVal.price, 0)

console.log(totalPrice);