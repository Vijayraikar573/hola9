import {createSlice} from "@reduxjs/toolkit";

const wishlistSlice=createSlice({
    name:'wishlist',
    initialState:{
        products:[],
    },
    reducers:{
        addToWishlist:(state,action)=>{
            state.products.push(action.payload);
        },
        removeFromWishlist:(state,action)=>{
            console.log('remove',action.payload);
            state.products=state.products.filter(product=>product.id !== action.paylaod);
        },
        addProduct:(state,action)=>{
            state.products.push(action.payload);
        },
    },
});

export const {addToWishlist,removeFromWishlist,addProduct}=wishlistSlice.actions;
export default wishlistSlice.reducer;