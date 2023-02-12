
export function calculateNumItemsAndPrice(shoppingBag) {
    let result = {
        numItems: 0,
        totalPrice: 0
    };
    for (let i in shoppingBag) {
        result.numItems = result.numItems + shoppingBag[i].quantity;
        result.totalPrice = result.totalPrice + (shoppingBag[i].quantity * shoppingBag[i].price);
    }
    return result;
}