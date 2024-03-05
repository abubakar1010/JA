const product = document.getElementById('product')
const quantity = document.getElementById('quantity')
const addBtn = document.getElementById('addBtn')
const productContainer = document.getElementById('product-details')

const getShoppingItems = () => {

    const productName = product.value
    const numberOfQuantity = quantity.value
    console.log(productName,numberOfQuantity);
    displayItem(productName,numberOfQuantity)
    saveOnLocalStorage(productName,numberOfQuantity)
    product.value = ''
    quantity.value = ''

}

const displayItem = (products,quantities) => {
    const li = document.createElement('li')
    li.innerText = `${products}: ${quantities}`
    productContainer.appendChild(li)
}
addBtn.addEventListener('click',function(){
    getShoppingItems()
})

function getLocalStorageData (){

    let cart = {}
    // console.log(cart);
    const isLocalStorageHaveCart = localStorage.getItem('cart')
    if(isLocalStorageHaveCart){
        cart = JSON.parse(isLocalStorageHaveCart);
        // console.log(cart);
    }
    // console.log(cart);
    return cart
}

const saveOnLocalStorage = (product,quantity) => {

    cart = getLocalStorageData()

    cart[product] = quantity

    // console.log(cart);

    const dataInString = JSON.stringify(cart)

    localStorage.setItem("cart", dataInString)
}

const displayLocalStorageData = () => {

    const cart = getLocalStorageData()
    // console.log(cart);
    for (const values in cart) {
        // console.log(values);
        const data = cart[values]
        displayItem(values,data)
    }
}

displayLocalStorageData()