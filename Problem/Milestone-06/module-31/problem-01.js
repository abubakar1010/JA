// task --- 01 sophia secondary school location 

let data = {
    sophia:{
        id: 33,
        study: [
            {
                primary:[
                    {
                        school_name: "ABC primary School"},
                        { location: "Peters burg"}
                ]
            },
            {
                secondary:
                [
                    {school_name: "Abc Secondary School"},
                    { location: "St Lorence"}
                ]
            }
        ]
    }
}

console.log(data.sophia.study[1].secondary[1].location);