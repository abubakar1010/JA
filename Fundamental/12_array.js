let myArray = [ "osman", "omar", "abdullah"]

// note: arrayName[indexNumber] using for get element of array

// console.log(myArray[2]);

//note: Starting index of array from 0.


myArray.push("Muhammad")

// console.log(myArray)

// note: .push(value) added element in array on after last index  


myArray.pop()

// console.log(myArray);


// note: .pop() remove last element of array




// console.log(myArray.length);

// .length find the number of element of array


myArray[1] = "abu abdullah"


// we add a new value on array using this syntax ---> arrayName[index] = new value


myArray.unshift("muhammad")


// note: .unshift(value) added element on the first index of array 

// console.log(myArray);


myArray.shift()


// console.log(myArray);


// note: .shift() remove element on the first index of array 


// console.log(myArray.includes("robin"));

// note: .include() method check, is a value have given array. and provide result in true or false. and change type on boolean


// console.log(myArray.indexOf("osman"));

// note: .indexOf(value) using to find element's index. if value is not exist provided output is -1

let newArray = myArray.join()

// console.log(myArray);
// console.log(newArray);

// note: .join(value) method bind array's element separate by comma or given value. 

// i-q: .join() also change type in string


let myna1 = [ 1, 2, 3, 4, 5 ]

// console.log("A", myna1);

let sliceOnMyna1 = myna1.slice( 1, 3)

// console.log(sliceOnMyna1);

// console.log("B", myna1);

// i-q: .slice( range) method return a copy of array according to range without include end index of range. and also not make any change on main array 

let spliceOnMyna1 = myna1.splice( 1, 3)

// console.log(spliceOnMyna1);

// console.log("C", myna1);


// t-i-q: .splice( range) method return a copy of array according to range with include end index of range. and also make  change on main array. this method cut the portion of main array according to range. 



let classmatesOnSchool = [ "abdullah", "emon", "rohan", "wasik"]

let classmatesOnCollege = [ "shawon", "sohel", "rayhan", "bijoy"]

let allClassmates = classmatesOnCollege.concat(classmatesOnSchool)

// note: .concat() combine two or more arrays and provide a new array


// console.log(allClassmates);


let spread = [...classmatesOnSchool, ...classmatesOnCollege]

// note: ...[call spread method] combine two or more arrays and provide a new array

// console.log(spread);


const nestedArray = [ 1, 3, 2, 4, [6, 7, 8,], 4, 6, [33, 53, 23, 53,[23533, 32, 234, 225,23542, [43, 43,46, 63],462,5643,534] ,45, 4356, 3456]]


const nested = nestedArray.flat(Infinity)

// note: Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth

// console.log(nested);

let stringInArray = Array.from("OSMAN")


// note: Array.from() convert anything in array


// console.log(Array.isArray(stringInArray));

let score1 = 100
let score2 = 300
let score3 = 500

// console.log(Array.of( score1, score2, score3))

//note: Returns a new array from a set of elements.


// Reverse of array

let mainArray = [1, 2, 3, 4, 5]

//  mainArray.reverse()

//  note: simple way to reverse array using .reverse() method

//  console.log(mainArray);


let loopReversed = []

for( let i = 0; i < mainArray.length; i++){

    // console.log(i);

    loopReversed.unshift(mainArray[i])
}

// console.log(loopReversed);

// note: another way to reverse using .unshift() method


let reversedLoop = []

for ( i = mainArray.length-1; i >= 0; i--){
    reversedLoop.push(mainArray[i])
}

// console.log(reversedLoop);

// note: another way to reverse using reversed loop and .push() method

//sorting method in array

let myArr = [4, 6, 3, 9, 2, 1]

myArr.sort()

//note: by default sort method sorted element on Ascending order

// console.log(myArr);

let anotherArr = [12, 13, 45, 2, 5, 65, 88, 9]

//note: if the value is getter then 9 then we need to pass parameter to sorted arr.

/**
 * the syntax is 
 * 
 * array.sort( (a,b) => a - b )  // Ascending order
 * 
 * array.sort( (a,b) => b - a )  // Descending order
 * 
 * 
 */
anotherArr.sort( (a,b) => a - b)

console.log(anotherArr)