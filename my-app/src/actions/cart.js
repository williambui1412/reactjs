
export const addCart = (cart, Quantity) => {
    return {
        type: 'ADD_CART',
        payload: cart,
        quantity: Quantity,
    }
}
export const IncreaseCart = (cart, Quantity) => {
    return {
        type: 'INCREASE_CART',
        payload: cart,
        quantity: Quantity,
    }
}

export const DecreaseCart = (cart, Quantity) => {
    return {
        type: 'DECREASE_CART',
        payload: cart,
        quantity: Quantity,
    }
}

export const RemoveItemCart = (cart) => {
    return {
        type: 'REMOVE_CART',
        payload: cart,  
    }
}