const priceOfShirt = 500 

const priceOfShoe = 1200

const priceOfPant = 800

function quantity( quantityOfShirt, quantityOfPant, quantityOfShoe){

    const totalPriceOfShirt = priceOfShirt * quantityOfShirt

    const totalPriceOfShoe = priceOfShoe * quantityOfShoe

    const totalPriceOfPant = priceOfPant * quantityOfPant

    const totalPrice = totalPriceOfShirt + totalPriceOfShoe + totalPriceOfPant

    return totalPrice
}

console.log(quantity( 5, 9, 7));