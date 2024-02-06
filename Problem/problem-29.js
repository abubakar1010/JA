 function sortMaker(value){
    const [ a, b] = value

    if ( a < 0 || b < 0){
        return "invalid input"
    }

    else if ( a > b){

        return [a, b]
    }
    else if(a < b){
        return [b, a]
    }

    else if (a === b){
        return "equal"
    }
    
 }

 console.log(arr([2, 3]));
 console.log(arr([4, 2]));
 console.log(arr([4, 4]));
 console.log(arr([1, 2]));
 console.log(arr([4, -2]));