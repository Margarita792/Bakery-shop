import { configureStore } from "@reduxjs/toolkit";
import reducerProduct from "./sliceProducts";
import reducerUser from "./sliceUser";
import reducerCart from "./sliceCart";
import reducerWishlist from "./sliceWishlist";
export const store = configureStore({
  reducer: {
    storageProducts: reducerProduct,
    storageUser: reducerUser,
    storageCart: reducerCart,
    storageWishlist: reducerWishlist,
  },
});
