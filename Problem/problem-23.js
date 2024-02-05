// Task-3:
// Your task is to calculate the total budget required to buy electronics:

//     laptop = 35000 tk
//     tablet = 15000 tk
//     mobile = 20000 tk
// Write a JavaScript function named calculateElectronicsBudget that takes in the number of laptop, tablets, and mobile and returns the total money required.

function calculateBudget( quantityOfLaptop, quantityOfTablet, quantityOfMobile){

    const laptopPerPice = 35000 

    const tabletPerPice = 15000

    const mobilePerPice = 20000

    const laptopTotalPrice = laptopPerPice * quantityOfLaptop

    const tabletTotalPrice = tabletPerPice * quantityOfTablet

    const mobileTotalPrice = mobilePerPice * quantityOfMobile

    const totalBudgetNeeded = laptopTotalPrice + tabletTotalPrice + mobileTotalPrice

    return totalBudgetNeeded
}

console.log(calculateBudget( 35, 913, 1443));