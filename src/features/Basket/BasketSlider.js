import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    basket: JSON.parse(localStorage.getItem('basket')) || [], 
};

const basketSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
        addToBasket: (state, action) => {
            const itemBasket = state.basket.find(item => item.id === action.payload.id);
            if (itemBasket) {
                itemBasket.count += 1;
            } else {
                state.basket.push({ ...action.payload, count: 1 }); 
            }
            localStorage.setItem('basket', JSON.stringify(state.basket));
        },
        removeFromBasket: (state, action) => {
            const updatedBasket = state.basket.filter(item => item.id !== action.payload.id);
            state.basket = updatedBasket;
            localStorage.setItem('basket', JSON.stringify(state.basket));
        },
        increment: (state, action) => {
            const item = state.basket.find(item => item.id === action.payload.id);
            if (item) {
                item.count += 1; 
            }
            localStorage.setItem('basket', JSON.stringify(state.basket));
        },
        decrement: (state, action) => {
            const item = state.basket.find(item => item.id === action.payload.id);
            if (item && item.count > 1) {
                item.count -= 1; 
            }
            localStorage.setItem('basket', JSON.stringify(state.basket));
        },
        removeAll: (state) => {
            state.basket = [];
            localStorage.removeItem("basket");
        }
    }
});

export const { addToBasket, removeFromBasket, increment, decrement, removeAll } = basketSlice.actions;
export default basketSlice.reducer;