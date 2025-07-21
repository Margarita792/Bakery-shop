import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  productsHomePage: [
    {
      id: 1,
      name: "Whole Grain Bread",
      img: "https://iili.io/FNd17Xn.png",
      price: 100,
    },
    {
      id: 2,
      name: "Whole Grain Bread",
      img: "https://iili.io/F0zeFyl.png",
      price: 40,
    },
    {
      id: 3,
      name: "Whole Grain Bread",
      img: "https://iili.io/FNdsE3G.png",
      price: 60,
    },
    {
      id: 4,
      name: "Whole Grain Bread",
      img: "https://iili.io/F0zeFyl.png",
      price: 50,
    },
    {
      id: 5,
      name: "Whole Grain Bread",
      img: "https://iili.io/F0zUQvs.png",
      price: 70,
    },
    {
      id: 6,
      name: "Whole Grain Bread",
      img: "https://iili.io/FNd17Xn.png",
      price: 10,
    },
    { id: 7, name: "Brownies", img: "https://iili.io/F0RUsmF.png", price: 90 },
    { id: 8, name: "Doughnuts", img: "https://iili.io/F05le0x.png", price: 40 },
    {
      id: 9,
      name: "Puff Pastry ",
      img: "https://iili.io/F050m3x.png",
      price: 80,
    },
  ],
  allProducts: [
    { id: 1, name: "Cake", img: "https://iili.io/F0wKRFs.jpg", price: 10 },
    { id: 2, name: "Cake", img: "https://iili.io/F0wlrQt.jpg", price: 3 },
    { id: 3, name: "Cake", img: "https://iili.io/F0eEmsp.jpg", price: 5 },
    { id: 4, name: "Cake", img: "https://iili.io/F0eMgcP.jpg", price: 8 },
    { id: 5, name: "Cake", img: "https://iili.io/F0eW7hG.jpg", price: 4 },
    { id: 6, name: "Cake", img: "https://iili.io/F0ejFp9.jpg", price: 6 },
    { id: 7, name: "Cake", img: "https://iili.io/F0ewsDX.jpg", price: 2 },
    { id: 8, name: "Cake", img: "https://iili.io/F0eNyBa.jpg", price: 8 },
    { id: 10, name: "Muffins", img: "https://iili.io/F0eyFfa.jpg", price: 13 },
    { id: 11, name: "Muffins", img: "https://iili.io/F0ey6dv.jpg", price: 22 },
    { id: 12, name: "Muffins", img: "https://iili.io/F0eyFfa.jpg", price: 27 },
    { id: 13, name: "Muffins", img: "https://iili.io/F0kfces.jpg", price: 24 },
    { id: 14, name: "Muffins", img: "https://iili.io/F0kBvfV.jpg", price: 16 },
    { id: 15, name: "Muffins", img: "https://iili.io/F0kCmEQ.jpg", price: 21 },
    { id: 16, name: "Muffins", img: "https://iili.io/F0knt9t.jpg", price: 2 },
    { id: 17, name: "Muffins", img: "https://iili.io/F0kxp44.jpg", price: 18 },
    {id: 18, name: "Croissant", img: "https://iili.io/F0ktJA7.jpg", price: 14},
    { id: 19, name: "Croissant", img: "https://iili.io/F0kDLEG.jpg", price: 9 },
    { id: 20, name: "Croissant", img: "https://iili.io/F0kmcUx.jpg", price: 5 },
    { id: 21, name: "Croissant", img: "https://iili.io/FNcLka2.jpg", price: 9 },
    { id: 22, name: "Croissant", img: "https://iili.io/FNcQMcQ.jpg", price: 5 },
    { id: 23,name: "Croissant",img: "https://iili.io/F0kpgpV.jpg",price: 9},
    { id: 24, name: "Croissant", img: "https://iili.io/FNcMtWJ.jpg", price: 5 },
    { id: 25,name: "Croissant",img: "https://iili.io/FNcObSf.jpg",price: 7},
    { id: 26, name: "Bread", img: "https://iili.io/F0v5a1e.jpg", price: 12 },
    { id: 27, name: "Bread", img: "https://iili.io/F0v7GFn.jpg", price: 34 },
    { id: 28, name: "Bread", img: "https://iili.io/FNcxIN1.jpg", price: 17 },
     { id: 29, name: "Bread", img: "https://iili.io/F0vYCHG.jpg", price: 32 },
     { id: 30, name: "Bread", img: "https://iili.io/F0vaFzQ.jpg", price: 7 },
    { id: 31, name: "Bread", img: "https://iili.io/FNcnoqx.jpg", price: 22 },
  ],
  copyAllProducts: [
    { id: 1, name: "Cake", img: "https://iili.io/F0wKRFs.jpg", price: 10 },
    { id: 2, name: "Cake", img: "https://iili.io/F0wlrQt.jpg", price: 3 },
    { id: 3, name: "Cake", img: "https://iili.io/F0eEmsp.jpg", price: 5 },
    { id: 4, name: "Cake", img: "https://iili.io/F0eMgcP.jpg", price: 8 },
    { id: 5, name: "Cake", img: "https://iili.io/F0eW7hG.jpg", price: 4 },
    { id: 6, name: "Cake", img: "https://iili.io/F0ejFp9.jpg", price: 6 },
    { id: 7, name: "Cake", img: "https://iili.io/F0ewsDX.jpg", price: 2 },
    { id: 8, name: "Cake", img: "https://iili.io/F0eNyBa.jpg", price: 8 },
    { id: 10, name: "Muffins", img: "https://iili.io/F0eyFfa.jpg", price: 13 },
    { id: 11, name: "Muffins", img: "https://iili.io/F0ey6dv.jpg", price: 30 },
    { id: 12, name: "Muffins", img: "https://iili.io/F0eyFfa.jpg", price: 27 },
    { id: 13, name: "Muffins", img: "https://iili.io/F0kfces.jpg", price: 24 },
    { id: 14, name: "Muffins", img: "https://iili.io/F0kBvfV.jpg", price: 16 },
    { id: 15, name: "Muffins", img: "https://iili.io/F0kCmEQ.jpg", price: 24 },
    { id: 16, name: "Muffins", img: "https://iili.io/F0knt9t.jpg", price: 2 },
    { id: 17, name: "Muffins", img: "https://iili.io/F0kxp44.jpg", price: 18 },
   {id: 18, name: "Croissant", img: "https://iili.io/F0ktJA7.jpg", price: 14},
    { id: 19, name: "Croissant", img: "https://iili.io/F0kDLEG.jpg", price: 9 },
    { id: 20, name: "Croissant", img: "https://iili.io/F0kmcUx.jpg", price: 5 },
    { id: 21, name: "Croissant", img: "https://iili.io/FNcLka2.jpg", price: 9 },
    { id: 22, name: "Croissant", img: "https://iili.io/FNcQMcQ.jpg", price: 5 },
    { id: 21,name: "Croissant",img: "https://iili.io/F0kpgpV.jpg",price: 9},
    { id: 20, name: "Croissant", img: "https://iili.io/FNcMtWJ.jpg", price: 5 },
    { id: 21,name: "Croissant",img: "https://iili.io/FNcObSf.jpg",price: 7},
    { id: 22, name: "Bread", img: "https://iili.io/F0v5a1e.jpg", price: 12 },
    { id: 23, name: "Bread", img: "https://iili.io/F0v7GFn.jpg", price: 34 },
    
    
    { id: 24, name: "Bread", img: "https://iili.io/FNcxIN1.jpg", price: 17 },
    { id: 25, name: "Bread", img: "https://iili.io/F0vYCHG.jpg", price: 82 },
    { id: 26, name: "Bread", img: "https://iili.io/F0vaFzQ.jpg", price: 7 },
    { id: 27, name: "Bread", img: "https://iili.io/FNcnoqx.jpg", price: 22 },
  ],
  search: "",
};
const sliceProducts = createSlice({
  name: "storageProducts",
  initialState,
  reducers: {
    searchTitle: (state, action) => {
      state.search = action.payload.value;
    },
    sortPrice: (state, action) => {
      if (action.payload.value == "cheap") {
        state.allProducts = state.allProducts.sort((a, b) => a.price - b.price);
      }
      if (action.payload.value == "expensive") {
        state.allProducts = state.allProducts.sort((a, b) => b.price - a.price);
      }
      if (action.payload.value == "az") {
        state.allProducts = state.allProducts.sort((a, b) =>
          a.name.localeCompare(b.name)
        );
      }
      if (action.payload.value == "za") {
        state.allProducts = state.allProducts.sort((a, b) =>
          b.name.localeCompare(a.name)
        );
      }
      if (action.payload.value == "byDefault") {
        state.allProducts = state.copyAllProducts;
      }
    },
    sortCategoryProducts: (state, action) => {
      const selectedCategory = action.payload.value;
      state.allProducts = state.copyAllProducts.filter(
        (item) => item.name == selectedCategory
      );
    },
  },
});
export const { searchTitle, sortPrice, sortCategoryProducts } =
  sliceProducts.actions;
export const selectProductsHomePage = (state) =>
  state.storageProducts.productsHomePage;
export const selectallProducts = (state) => state.storageProducts.allProducts;
export const selectSearch = (state) => state.storageProducts.search;
export default sliceProducts.reducer;
