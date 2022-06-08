const groceries = {
    "Orange Juice": {
        price : 1.5,
        discount: 10,
    },
    "Chocolate": {
        price : 2,
        discount : 0,
    },
    // more items...
 }

const shoppingBag = [
   { product: 'Chocolate', quantity: 3 },
   { product: 'Orange Juice', quantity: 23 },
]

const countDiscount = (price, item) => {
    return item.discount === 0 
        ? price 
        : price - price * item.discount / 100
}

const getTotalPriceOfShoppingBag = (shoppingBag) => {
    const groceriesKeys = Object.keys(groceries)

    let totalPrice = 0
    shoppingBag.forEach(element => {
        if (groceriesKeys.includes(element.product)) {
            let price = element.quantity * groceries[element.product].price
            totalPrice += countDiscount(price, groceries[element.product])
        }
    })

    return totalPrice.toFixed(2)
}

console.log('Total price with discount: ' ,getTotalPriceOfShoppingBag(shoppingBag))