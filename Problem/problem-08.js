// Inch to Feet

function toFeet(inch){

    const feet = inch / 12

    const feetInRound = Math.round(feet)

    const inchInNum = inch % feetInRound


    const result = feetInRound + " Feet " + inchInNum + " Inch"

    return result


}

console.log(toFeet(75));