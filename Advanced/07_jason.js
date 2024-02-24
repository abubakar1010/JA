/**
 * note: this is a example of jason data
 * {
    "employees":[
      {"firstName":"John", "lastName":"Doe"},
      {"firstName":"Anna", "lastName":"Smith"},
      {"firstName":"Peter", "lastName":"Jones"}
    ]
    }
 */


    const jasonData = '{ "employees" : [' +
    '{ "firstName":"John" , "lastName":"Doe" },' +
    '{ "firstName":"Anna" , "lastName":"Smith" },' +
    '{ "firstName":"Peter" , "lastName":"Jones" } ]}';

    const obj = JSON.parse(jasonData)


    // note: JSON.parse method convert jason format to pure javascript Object 

    console.log(obj);
    console.log(obj.employees[2].firstName);


    const car = {
        name: "Tesla",
        Author: "Elon",
        version: [
            {  
                name: "ES5",
                year: 2012
            },
            {  
                name: "ES6",
                year: 2015
            },
        ]
    }

    let inJason = JSON.stringify(car)

    // note: JSON.stringify method return a data in jason format from javascript Object

    console.log(inJason);