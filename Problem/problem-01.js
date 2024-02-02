

const value = "I WaNt to lEarn English for eduCation purpose"

let reversed = value.toLowerCase().split(" ")
for ( i = 0; i < reversed.length; i++){
    
    
    reversed[i] = reversed[i][0].toUpperCase() + reversed[i].slice(1)
    // target[i] = target[i].charAt(0).toUpperCase() + target[i].slice(1);
    
}

// reversed.join(" ")
console.log(reversed.join(" "));
