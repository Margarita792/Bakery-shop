import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cart: [],
};
const sliceCart = createSlice({
  name: "storageCart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      for (let i = 0; i < state.cart.length; i++) {
        if (state.cart[i].id == action.payload.id) {
          state.cart[i].quantity++;
          return;
        }
      }
      state.cart.push({ ...action.payload, quantity: 1 });
    },
    changeQtyItemProduct: (state, action) => {
      for (let i = 0; i < state.cart.length; i++) {
        if (state.cart[i].id == action.payload.id) {
          state.cart[i].quantity = action.payload.value;
        }
      }
    },
    decrementQtyProductItem: (state, action) => {
      for (let i = 0; i < state.cart.length; i++) {
        if (state.cart[i].id == action.payload.id) {
          state.cart[i].quantity--;
        }
      }
    },
    incrementQtyProductItem: (state, action) => {
      for (let i = 0; i < state.cart.length; i++) {
        if (state.cart[i].id == action.payload.id) {
          state.cart[i].quantity++;
        }
      }
    },
    deleteProductItem: (state, action) => {
      state.cart = state.cart.filter((item) => {
        return item.id !== action.payload.id;
      });
    },
  },
});
export const {
  addProduct,
  changeQtyItemProduct,
  decrementQtyProductItem,
  incrementQtyProductItem,
  deleteProductItem,
} = sliceCart.actions;
export const selectCart = (state) => state.storageCart.cart;
export default sliceCart.reducer;
