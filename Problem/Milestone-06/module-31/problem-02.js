// task-2: console .log output: petersburg, abdullah
let student = {
    2222: {
        name: "Omar",
        section: "c",
        class: "IX",
        address: {
            "building no": 12,
            "street": "Dhaka 22",
            "city": "Dhaka",
            "country": "Bangladesh"
        }
    },
    333:{

        name: "Abdullah",
        section: "D",
        class: "X",
        address: {
            "building no": 123,
            "street": "Dhaka 223",
            "city": "khilkhat",
            "country": "Bangladesh"
        }
    }
}

console.log(student["2222"].address.city,student["333"].name);