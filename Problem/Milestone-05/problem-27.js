function cubeNumber(values){

    if (typeof values === "number"){
         return Math.pow(values, 3) 
    }

    return `you enter value type is ${typeof values}, but the type of value should be number`
}

console.log(cubeNumber( 3));