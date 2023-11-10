import {configureStore} from '@reduxjs/toolkit';
import wishlistReducer,{addProduct}from './wishlistSlice';

const store=configureStore({
    reducer:{
        wishlist:wishlistReducer,
    },
});

const initialProducts=[
    {
        id:1,
        name:'nokia',
        price:10000,
        rating:4.7,
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5da_Z3MUVN_7yJEcEZruyHKANj6J_XQW91A&usqp=CAU',
    },
    {
        id:2,
        name:'samsung',
        price:20000,
        rating:4.6,
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQGrYfkn7fhSECB-arzNNc4R-WEiWOzQ18IwwHLrpybhzyEi8sDMqC2SkiC5s8ZJ-RoM8&usqp=CAU',
    },
    {
        id:3,
        name:'iphone',
        price:900000,
        rating:4.9,
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-oXf2GnJxK3G2LqfHrjhH1-HjtfBPddQATceYL5lxucAWR1W6kak09GxOAozKmA6KxFo&usqp=CAU'
    },
    {
        id:4,
        name:'mi',
        price:30000,
        rating:4.5,
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuZnjfNyQbXNNGPGSmkcFh_pWRueQ42JWFEg&usqp=CAU'
    },
    {
        id:5,
        name:'poco',
        price:40000,
        rating:4.6,
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn60AYz4EK_metvof-IFXfhOixuxfl3XAdGg&usqp=CAU'
    },
]

initialProducts.forEach((product)=>{
    store.dispatch(addProduct(product));
});

export default store;
