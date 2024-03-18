import { configureStore } from '@reduxjs/toolkit'
import cartReducer from "../features/CartSlices"
export const store= configureStore({
  reducer: {
    allcart:cartReducer
  }
})