// is leap year

function year(value){

    if( value % 100 !== 0 && value % 4 === 0){
        return true
    }

    else if ( value % 400 === 0){
        return true
    }

    return false

}

console.log("Is leap Year: ", year(2100));
console.log("Is leap Year: ", year(2400));
console.log("Is leap Year: ", year(1900));
console.log("Is leap Year: ", year(2052));