import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './features/cartSlice'

export const store = configureStore({
    reducer: { //por aquí paso todas las funciones reducers que tenga
        cart: cartReducer
    },
    devTools: process.env.NODE_ENV !== 'production'
})