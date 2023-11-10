import './App.css';
import {Routes,Route} from "react-router-dom";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import Home from "./components/Home.jsx";
import ProductCard from "./Redux/ProductCard";

import WishlistPage from "./Redux/WishlistPage";
import store from "./Redux/store"

function App() {
  const initialProducts=store.getState().wishlist.products;
  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<LogIn/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/productcard" element={<ProductCard products={initialProducts}/>}/>
        <Route path="/wishlist" element={<WishlistPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
