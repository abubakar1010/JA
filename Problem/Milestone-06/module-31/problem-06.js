const instructor = [

    {
        name: "Omar",

        age: 24,

        position: "senior"

    },
    {
        name: "Osman",

        age: 26,

        position: "Junior"

    },
    {
        name: "Abdullah",

        age: 18,

        position: "senior"

    }
]

 const result = instructor.filter( (ins) => ins.position === "senior" )

console.log(result);


const instructorName = result.map( (item) => {

    return item.name
})

console.log(instructorName);