import React from 'react'
import {Link} from 'react-router-dom';
import "../styles/Navbar.css";
import {useSelector} from "react-redux"

const Navbar = () => {
    const wishlistProducts=useSelector((state)=> state.wishlist.products);

    const wishlistTotal=wishlistProducts.length;
  return (
    <div className="navbar">
      <h1 style={{color:"maroon",marginLeft:"10px"}}>hola9</h1>
      <div className="nav">
       <button><Link className="navlist" to={"/"}>LogOut</Link></button> 
       <button><Link className="navlist" to={"/productcard"}>Products</Link></button> 
       <button><Link className="navlist" to={"/wishlist"}>wishlist</Link></button> 
        <span>list:{wishlistTotal} items</span>
      </div>
    </div>
  )
}

export default Navbar
