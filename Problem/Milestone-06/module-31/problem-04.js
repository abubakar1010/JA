const oddArray = [ 1, 3, 5, 7, 9];

// solve with for loop

let newArr = []

for ( let num of oddArray){
    
    num += 1

    newArr.push(num)
}

for ( let num of newArr){

    oddArray[(newArr.indexOf(num))] = num
    
}

// console.log(oddArray);

oddArray.map( (n) => n += 1)

console.log(oddArray);