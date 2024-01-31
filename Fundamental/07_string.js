let name = "Muhammad "

let repoCount = 25

//console.log( name + repoCount + " great"); //waring: not-recommended its outdated


// note: string interpolation is recommended syntax 

// console.log(`My name is ${name} and my repo count is ${repoCount}`)


let discName = new String("Muhammad")

// console.log(discName);
// console.log(typeof discName);
// console.log(discName.__proto__);

// console.log(discName.length);

// console.log(discName[4]);

// console.log(discName.toUpperCase());

// console.log(discName);

//note: charat check a value of index

// console.log(discName.charAt(7)); 

//note: indexOf check index of value

// console.log(discName.indexOf("d"))


// note: variableNAme.substring( starting index, end index). count immediate before index of end number


let newDiscName = discName.substring( 2, 4)

// console.log(newDiscName);


const user = "   osman    "

// console.log(user);

// note : .trim() method use to avoid spaces after and before string

// console.log(user.trim());


const url = "https://github.com.io/masmak%20house.com"

// note: .replace( "replace thing", "new key") method use for replacing unexpectable thing that added by browser

// console.log(url.replace( '%20', '-'));

// console.log(url.includes('masmak'));

// note: use .includes method check existence elements on your variable

// console.log(url.includes('bike'));

// t-i-q:  spent time on mdn and read about string method


// console.log(name[7]);
// console.log(name);


name[7] = "e"

// console.log(name);

//note: string is immutable (mens not changeable) but array is mutable means we can change array's elements

let sentence  = "I want to lead a team"

// note: slice provide part of string, syntax ---> .slice( starting index, end index[end before this])

let part = sentence.slice( 2, 14)


// console.log(part);

let newPart = sentence.split(" ") 

// note: divide according to white space

// console.log(newPart);

let pars = sentence.split("a")

// note: divide according to a

// console.log(pars);


// let friend = [ "kajk", "kskdj", "dkajf", "ksajndfj"]

// note: .join method added element according to value

// console.log(friend.join("_"));

let first = "abu"

let last = "abdullah"

let fullName = first.concat(" ").concat(last)
let fullNames = first.concat(" ", last)

// note: concat add string. syntax ------> ,concat("value")

// console.log(fullName);
// console.log(fullNames);



// -------------------------reverse string------------------------------


let comments = " I want to be a well expert engineer"

let reverse = ""

for (const comment of comments){
    // console.log(comment);

    reverse = comment + reverse
}

// console.log(reverse);

let rev = ""
for ( let i = 0; i < comments.length; i++){
    // console.log(i);

    let letters = comments[i];

    rev = letters + rev
}

// console.log(rev);

// shortcut


let reversed = comments.split("").reverse().join("")

// console.log(reversed);


let array = [ 3, 4, 6,]

array.push(99)

console.log(array);