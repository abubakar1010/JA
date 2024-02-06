

function matchFinder(value1, value2){

    

    if ( value1.includes(value2) && typeof value1 === "string" && typeof value2 === "string"){

        return true

    }

    return false
}


console.log( matchFinder("javaScript","java") );
console.log( matchFinder("javaScript","python") );
console.log( matchFinder("c++","c") );