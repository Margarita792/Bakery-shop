import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  user: [],
  currentUser: null,
};
export const sliceUser = createSlice({
  name: "storageUser",
  initialState,
  reducers: {
    registerUser: (state, action) => {
      state.user.push(action.payload);
    },
    loginUser: (state, action) => {
      for (const item of state.user) {
        if (
          item.userName === action.payload.login &&
          item.password === action.payload.password
        ) {
          state.currentUser = item;
        }
      }
    },
  },
});
export const { registerUser, loginUser } = sliceUser.actions;
export const selectUser = (state) => state.storageUser.user;
export const selectCurrentUser = (state) => state.storageUser.currentUser;
export default sliceUser.reducer;
