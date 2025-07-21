import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  wishlist: [],
};
export const sliceWishlist = createSlice({
  name: "storageWishlist",
  initialState,
  reducers: {
    addToWishlist: (state, action) => {
      state.wishlist.push(action.payload);
    },
    deleteProductFromWishlist: (state, action) => {
      state.wishlist = state.wishlist.filter((item) => {
        return item.id !== action.payload.id;
      });
    },
  },
});
export const { addToWishlist, deleteProductFromWishlist } =
  sliceWishlist.actions;
export const selectWishlist = (state) => state.storageWishlist.wishlist;
export default sliceWishlist.reducer;
