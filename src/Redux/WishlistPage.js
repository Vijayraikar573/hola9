import React from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {removeFromWishlist} from './wishlistSlice';
import "../styles/ProductCard.css";

const WishlistPage=()=>{
    const dispatch=useDispatch();
    const wishlistProducts=useSelector((state)=>state.wishlist.products);

    const handleRemoveFromWishlist=(productId)=>{
        dispatch(removeFromWishlist(productId));
    };

    return(
        <div>
            <h1 style={{color:"red"}}>wishlist</h1>
            <div className="product">
                {wishlistProducts.map((product)=>(
                    <div key={product.id} className="productlist">
                    <div className="pic">
                        <img src={product.image} alt={product.name} height="200px" width="200px" />
                    </div>
                    <div  className="productdetails">
                        <h3>Name : {product.name}</h3>
                        <h3>Price : {product.price}</h3>
                        <h3>Rating : {product.rating}</h3>
                        <button onClick={()=>handleRemoveFromWishlist(product.id)}>Remove</button>
                    </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default WishlistPage;