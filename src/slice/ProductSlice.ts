import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import React from "react"
import  { RootState } from "../store/Store"

export interface Product {
    title:string;
    id:number;
    price:number

}

const initialState:Product[] = [
    { title: "National Holiday", id: 34, price: 50 },
    { title: "National anthem", id: 35, price: 60 },
    { title: "National Theme", id: 36, price: 70 }
]

const productslice = createSlice({
    name:"products",
    initialState,
    reducers:{
        addProduct:(state,action:PayloadAction<Product>)=>{
            return [action.payload, ...state ]
        }

    }
})
export const getSelectorProduct = (state:RootState) => state.products;
export const {addProduct} = productslice.actions;
export default productslice.reducer;