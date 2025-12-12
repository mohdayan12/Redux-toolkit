import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './slice.js'
import productReducer from './productSlice.js'
export const store = configureStore({
  reducer: {
   cart:cartReducer,
   productSlice:productReducer
  },
});
