let score = "66"

let scoreInNumber = Number(score)

// console.log(typeof(scoreInNumber));
// console.log(scoreInNumber);


// note: "66" => value(66), type(Number)



let anotherScore = "66abc"

let anotherScoreInNumber = Number(anotherScore)

// console.log(typeof(anotherScoreInNumber));
// console.log(anotherScoreInNumber);

//note: "66abc" => value(NaN --> not an number), type(number)

//waring: if we want to convert in number then the value must be a pure number. else the output is NaN 

let result = null

let resultInScore = Number(result)

// console.log(typeof resultInScore);
// console.log(resultInScore);

// note: null => value(0), type(number)

let age = undefined

let ageInNumber = Number(age)

// console.log(typeof(ageInNumber));
// console.log(ageInNumber);

// note: undefined => value(NaN), type(number)


// i-q: if convert anything in number the value should be a pure number.if anything attached with number like alphabet or anything without pure number the value is "NaN". except null reason is this the output of null "0". But type always change in number.

let isLoggedIn = true

let booleanInNumber = Number(isLoggedIn)

// console.log(booleanInNumber);

// console.log(typeof booleanInNumber);
let isnumberLoggedIn = 1

let numberInBoolean = Boolean(isnumberLoggedIn)

// console.log(numberInBoolean);

// console.log(typeof numberInBoolean);


// note: true <==> 1, false <==> 0. 

//i-q: "" ==> false, "value" ==> true



// ----------------------Operation----------------------------


let value = 6

let neg = -value

// console.log(neg);

// console.log( 2 + 2);
// console.log( 2 - 2);
// console.log( 2 * 2);
// console.log( 24 ** 2);
// console.log( 2 / 2);
// console.log( 2 % 2);


let str1 = "Osman"

let str2 = " gaazi"

// console.log( str1 + str2 );


// console.log( "1" + "5" );
// console.log( 1 + "5" );
// console.log( 9 + "1" + "5" );
// console.log( 9+ 1 + "5" );
// console.log( "1" + 9 + 5 );

// note: if "" coming first all value treat as a string an add all string side by side

// waring: but string just only able to have addition operation. not subtraction or other similar 

let scoreCount = 99

scoreCount++;

// console.log(scoreCount);

// t-i-q: go mdn docs and read prefix and suffix operator




