import React from 'react';
import {useDispatch} from 'react-redux';
import {addToWishlist} from './wishlistSlice';
import {useNavigate} from "react-router-dom";
import "../styles/ProductCard.css";

const ProductCard=({products})=>{
    const dispatch=useDispatch();
    const navigate=useNavigate();

    const handleAddToWishlist=(product)=>{
        dispatch(addToWishlist(product));
        navigate('/wishlist');
    };
    return (
        <div className="product">
         {products.map((product)=>(
            <div className="productlist">
                <div className="pic">
                <img src={product.image} alt={product.name} height="200px" width="200px"/>
                </div>
                <div className="productdetails">
                <h3>Name : {product.name}</h3>
                <h3>Price : ${product.price}</h3>
                <h3>Rating : {product.rating}</h3>
                <button onClick={()=>handleAddToWishlist(product)}>Add to wishlist</button>
                </div>
                 
            </div>
         ))}
           
        </div>
    )
}
export default ProductCard;