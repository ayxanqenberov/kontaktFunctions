import { createSlice } from "@reduxjs/toolkit"
import { json } from "react-router-dom";

const initialState ={
    fav: JSON.parse(localStorage.getItem('fav')) || []
}
const favSlice = createSlice({
    name:"favories",
    initialState,
    reducers:{
        addTofav: (state,action)=>{
            const favBasket = state.fav.find(item => item.id === action.payload.id);
            localStorage.setItem('fav',JSON.stringify(state.fav))
        },
        removeFromFav:(state,action)=>{
            const uptadeFav = state.fav.find(item => item.id === action.payload.id);
            state.fav = uptadeFav;
            localStorage.setItem('fav', JSON.stringify(state.fav))
        },
        removeAll: (state) =>{
            state.fav = [];
            localStorage.removeItem('fav')
        }
    }
})