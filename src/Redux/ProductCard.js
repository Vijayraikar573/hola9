import React from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {addToWishlist} from './wishlistSlice';
import {useNavigate} from "react-router-dom";
import "../styles/ProductCard.css";

const ProductCard=({products})=>{
    const dispatch=useDispatch();
    const navigate=useNavigate();

    const wishlistProducts = useSelector((state) => state.wishlist.products);

    const isProductInWishlist = products && products.id && wishlistProducts.some((wishlistProduct) => wishlistProduct.id === products.id);

    const handleAddToWishlist=(product)=>{
        if (product && product.id && !isProductInWishlist) {
            dispatch(addToWishlist(product));
            navigate('/wishlist');
          } else {
            console.log(`Product with ID ${product.id} is already in the wishlist.`);
          }
        
    };
    const key = products.id || products.name;
    return (
        <div className="product">
         {products.map((product)=>(
            <div key={key} className="productlist">
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