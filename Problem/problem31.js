

function canPay(arr, num){

    if ( arr.length === 0){
        return "please earn more money before buy"
    }

    let sum = 0

    for ( value of arr){

        sum += value
    }
    
    if ( sum >= num){
        return true
    }

    else if ( sum < num){
        return false
    }
}

console.log(canPay([1, 2,  5], 10));
console.log(canPay([1, 5,  5], 10));
console.log(canPay([], 10));
console.log(canPay("sr", 10));


// function finMax(value){
//     const max = Math.max(...value)

//     return max
// }

// console.log(finMax([44, 55, 66, 88, 99]));

// let value = [44, 55, 66, 88, 99]

// console.log(...value);