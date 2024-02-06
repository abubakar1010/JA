
function findAddress(values){

    let address = "";

    for ( const value in values){

        address += "," + values[value]
    }

    return address
}

console.log(findAddress({
    street: 10,

    house: "15A",


}));