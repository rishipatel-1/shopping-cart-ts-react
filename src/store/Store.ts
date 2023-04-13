import { configureStore } from "@reduxjs/toolkit";
import products from "../slice/ProductSlice"

const store = configureStore({
    reducer:{
        products
    }
})
export type RootState = ReturnType<typeof store.getState>
export default store;