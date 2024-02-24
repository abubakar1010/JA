// task- 3: console log: habluder adda and Beginner

let data2 = {
    data:
    [
        {
            bookId: 1,
            bookDetails:{
                name: "habluder adda",
                category: "XYZ",
                price: "200tk"
            },
            bookCategory: "Basic"
        },
        {
            bookId: 2,
            bookDetails:{
                name: "gobluder adda",
                category: "ABC",
                price: "400tk"
            },
            bookCategory: "Beginner"

        }
    ]
}

console.log(data2.data[0].bookDetails.name);
console.log(data2.data[1].bookCategory);