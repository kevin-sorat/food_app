const MAX_NUM_ITEMS = 10;

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

export function isMaxAllowedNumItems(shoppingBag, itemId) {
    for (let i in shoppingBag) {
        if (shoppingBag[i].id === itemId &&
            shoppingBag[i].quantity >= MAX_NUM_ITEMS) {
            return true;
        }
    }
    return false;
}