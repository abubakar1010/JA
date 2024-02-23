// Task -2:
// Find the friend with the smallest name.
// const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

function findSmallestName(values){

    let smallestName = values[0]

    for ( const value of values){
        if( smallestName.length > value.length){

            smallestName = value

        }
    }

    return smallestName
}

console.log(findSmallestName(['Abdullah', 'Osman', 'Omar', 'Muhammad', 'Abu Abdullah']));