
const initialCart = {
    list: [],
    cartTotal: 0,
};
const cartReducer = (state = initialCart, action) => {
    switch (action.type) {
        case 'ADD_CART': {
            const newCart = [...state.list];
            const productIndex = newCart.findIndex(x => x.product.id === action.payload.id);

            if (productIndex < 0) {
                const product = action.payload;
                const quantity = action.quantity;
                const cartItem = {
                    product,
                    quantity: quantity,
                };
                newCart.push(cartItem);

            } else {
                // Just increase quantity
                // newCart[productIndex].quantity++;
                const quantity = action.quantity;

                //console.log(action);
                if (quantity > 0) {
                    newCart[productIndex] = {
                        ...newCart[productIndex],
                        quantity: newCart[productIndex].quantity + quantity,
                    };
                }
                else {
                    newCart[productIndex] = {
                        ...newCart[productIndex],
                        quantity: newCart[productIndex].quantity + 1,
                    };
                }
            }

            const newcarttotal = state.cartTotal + action.payload.salePrice * action.quantity;

            return {
                ...state,
                list: newCart,
                cartTotal: newcarttotal,

            };
        }

        case 'INCREASE_CART' : {
            const newCart = [...state.list];
            
            const productIndex = newCart.findIndex(x => x.product.id === action.payload.id);
            

            newCart[productIndex] = {
                ...newCart[productIndex],
                quantity: newCart[productIndex].quantity + 1,
            };

            const newcarttotal = state.cartTotal + action.payload.salePrice;
            //console.log(newcarttotal);
            return{
                ...state,
                list: newCart,
                cartTotal: newcarttotal,
            }
        }

        case 'DECREASE_CART' : {
            
            const quantity = action.quantity;
            let newCart = [...state.list];
            var newcarttotal2 = null;
            const productIndex = newCart.findIndex(x => x.product.id === action.payload.id);
            
            
            
            if(quantity >= 1){
                newCart[productIndex] = {
                    ...newCart[productIndex],
                    quantity: newCart[productIndex].quantity - 1,
                }
                newcarttotal2 = state.cartTotal - action.payload.salePrice;
            }
            else{
                newCart = newCart.filter(cart => cart.product.id !== action.payload.id);
                newcarttotal2 = state.cartTotal - action.payload.salePrice;
                console.log(newcarttotal2);
            }

            console.log(newcarttotal2);
            
            return{
                ...state,
                list: newCart,
                cartTotal: newcarttotal2,
            }
        }
        case 'REMOVE_CART' : {
            const quantity = action.payload.quantity;
            const newCart = [...state.list];
            const productIndex = newCart.filter(x => x.product.id !== action.payload.product.id);

            const newcarttotal =  state.cartTotal - (action.payload.quantity * action.payload.product.salePrice)

            //console.log(action.payload.product.salePrice);
            console.log(newcarttotal); 
            return{
                ...state,
                list: productIndex,
                cartTotal: newcarttotal,
            }
        }

        default:
            return state;
    }
};

export default cartReducer; 