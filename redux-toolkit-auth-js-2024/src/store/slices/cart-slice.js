const { createSlice } = require("@reduxjs/toolkit")


const initialState = {
    cartItems : [], // Array to store cart items
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state,action){
            console.log(state,action);
            state.cartItems.push(action.payload);
        },
        removeFromCart(state, action){
            let cpyCartItems = [...state.cartItems];
            cpyCartItems = cpyCartItems.filter((item) => item.id !== action.payload);  
            state.cartItems = cpyCartItems
            return state;
        },
    }
})


export const {addToCart,removeFromCart} = cartSlice.actions;
export default cartSlice.reducer;
