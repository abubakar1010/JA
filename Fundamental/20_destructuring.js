/**
 * destructuring on Array
 */

let arr = [4, 6, 8 ,3]

let [a, b, c,d, f] = arr

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e); // js throw an error like e is not defined

// console.log(f); // the value of f by default assign undefined

/**
 * destructure on nested array
 */

let [p, q, r] = [2, 8, [7, 9, 4]]

console.log(p);
console.log(q);
console.log(r); // the value of r is [7, 9, 4]

/**
 * object destructuring
 */

let myObj = {
    name: "abu bakar",
    age: 19,
    city: "dhaka",
    country: "Bangladesh",
    classmates: {
        classmatesOnSchool: ["abdullah", "emon", "mehady"],
        classmatesOnCollege: ["shawon", "sohel", "bijoy"]
    }
}

let {name, age, region, classmates: {classmatesOnCollege, classmatesOnSchool}} = myObj

console.log(name);
console.log(age);
console.log(region); // region is undefined because the region key is not in myObj

// note: the name of variable must be match with key name. either the value assign on undefined key is undefined

// console.log(classmates);

console.log(classmatesOnCollege);
console.log(classmatesOnSchool);