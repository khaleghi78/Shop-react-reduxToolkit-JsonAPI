import { createSlice } from "@reduxjs/toolkit";

const fetchFormLocalStorage = () => {
    let cart = localStorage.getItem('cart');
    if(cart) {
        return JSON.parse(localStorage.getItem('cart'));
    }else {
        return [];
    }
}

const storeInLocalStorage = (data) => {
    localStorage.setItem('cart', JSON.stringify(data));
}

const initialState = {
    carts: fetchFormLocalStorage(),
    itemsCount: 0,
    totalAmount: 0,
    isCartMessageOn: false
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const isItemInCart = state.carts.find(item => 
                item.id === action.payload.id)


                if(isItemInCart) {
                    const tempCart = state.carts.map(item => {
                        if(item.id === action.payload.id) {
                            let tempQty = item.quantity + action.payload.quantity;
                            let tempTotalPrice = tempQty * item.price;

                            return {
                                ...item, quantity: tempQty,
                                totalPrice: tempTotalPrice
                            }
                        } else {
                            return item
                        }
                    })
                    state.carts = tempCart;
                    storeInLocalStorage(state.carts)
                } else {
                    state.carts.push(action.payload)
                    storeInLocalStorage(state.carts)
                }
            },
            setCartMessageOn: (state) => {
                state.isCartMessageOn = true;
            },
            setCartMessageOff: (state) => {
                state.isCartMessageOn = false;
            }
    }
})
export const {addToCart, setCartMessageOn, setCartMessageOff} = cartSlice.actions;
export const getCartMessageStatus = (state) => state.cart 
export default cartSlice.reducer