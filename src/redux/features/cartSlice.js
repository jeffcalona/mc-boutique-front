import { createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

const initialState = {
    cartItems: [],
};

const addDecimals = (num) => {
  return (
    Math.round(num * 100) / 100
  ).toFixed(2)
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existItem = state.cartItems.find(element => (
        element.id === item.id && element.size === item.size
      ));

      if (existItem) {
        state.cartItems = state.cartItems.map((element) => (
          element.id === existItem.id && element.size === existItem.size ? item : element
        ))
      } else {
          state.cartItems = [...state.cartItems, item]
      }

      state.itemsPrice = addDecimals(
        state.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
      )

      state.totalPrice = addDecimals (
        Number(state.itemsPrice)
      )

      Cookies.set('cart', JSON.stringify(state))
    },

    removeFromCart: (state, action) => {

      const { id, size } = action.payload

      state.cartItems = state.cartItems.filter((element) => (
        element.id !== id || element.size !== size
      ))

      state.itemsPrice = addDecimals(
        state.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
      )

      state.totalPrice = addDecimals (
        Number(state.itemsPrice)
      )

      Cookies.set('cart', JSON.stringify(state))
    },

    removeAllFromCart: (state) => {
      state.cartItems = []
    }
  },
});

export const { addToCart, removeFromCart, removeAllFromCart } = cartSlice.actions;
export default cartSlice.reducer;