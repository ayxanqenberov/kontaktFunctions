import { configureStore } from "@reduxjs/toolkit";
import alldataReducer from '../../features/Api/ApiSlice'
import addBasketReducer from '../../features/Basket/BasketSlider'

export const store = configureStore({
    reducer:{
        data: alldataReducer,
        basket:addBasketReducer,
    }
})

export default store;
