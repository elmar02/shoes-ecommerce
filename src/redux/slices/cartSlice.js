import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    inCart: [],
    totalPrice: 0,
    first: true,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setCart(state,action){
            const {products,totalPrice} = action.payload;
            return{
                ...state,
                inCart:products||[],
                totalPrice:totalPrice||0
            }
        },
        addToCart(state, action) {
            const newProduct = action.payload
            const existedProduct = state.inCart.find((item) => item.id === newProduct.id)
            if (!existedProduct) {
                state.inCart.push({
                    id: newProduct.id,
                    title: newProduct.title,
                    price: newProduct.price,
                    image: newProduct.image,
                    quantity: 1
                })
                state.totalPrice += newProduct.price
            }
        },
        removeFromCart(state, action) {
            const deletedProduct = action.payload
            state.inCart = state.inCart.filter((item) => item.id !== deletedProduct.id)
            let totalPrice = 0
            state.inCart.forEach((item) => {
                totalPrice += item.price * item.quantity;
            });
            state.totalPrice = totalPrice
        },
        increase(state, action) {
            const product = action.payload
            state.inCart = state.inCart.map((item) => ({
                ...item,
                quantity: item.id === product.id ? item.quantity + 1 : item.quantity,
            }));
            state.totalPrice += product.price
        },
        decrease(state, action) {
            const product = action.payload
            state.inCart = state.inCart.map((item) => ({
                ...item,
                quantity: item.id === product.id ? item.quantity - 1 : item.quantity,
            }));
            state.totalPrice -= product.price
            if (product.quantity - 1 === 0) {
                state.inCart = state.inCart.filter((item) => item.id !== product.id)
            }
        },
        setFalse(state){
            state.first=false;
        }
    },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;