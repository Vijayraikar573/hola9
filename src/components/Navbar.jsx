import React from 'react'
import {Link} from 'react-router-dom';
import "../styles/Navbar.css";
import {useState} from "react";
import {useSelector} from "react-redux";


const Navbar = () => {
  const [isMenuOpen,setMenuOpen]=useState(false);

    const wishlistProducts=useSelector((state)=> state.wishlist.products);

    const wishlistTotal=wishlistProducts.length;

  
    const toggleMenu=()=>{
      setMenuOpen(!isMenuOpen);
    }

  return (
    <div className="navbar">
      <div className="menu-btn" onClick={toggleMenu}>&#9776;</div>
      <h1 style={{color:"maroon",marginLeft:"10px"}} className="logo">hola9</h1>
      <nav className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
       <a href=""><Link  to={"/"}>LogOut</Link></a>
       <a href=""><Link  to={"/productcard"}>Products</Link></a>
       <a href=""><Link  to={"/wishlist"}>wishlist</Link></a>
       {/* <a href="#">home</a>
       <a href="#">home</a>
       <a href="#">home</a>
       <a href="#">home</a> */}
        <span>list:{wishlistTotal} items</span>
      </nav>
    </div>
  )
}

export default Navbar
