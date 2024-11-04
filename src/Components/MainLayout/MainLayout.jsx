 
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { useState } from "react";

const MainLayout = () => {

    const [cartCount, setCartCount] = useState([])
    const [wishListCount, setWishListCount] = useState([])

 


    const handleAddToCart = (productId) =>  {

       if(!cartCount.includes(productId)){

        setCartCount((prevCount) => [...prevCount, productId])

       }
    }

    const handleWishlist = (productId) => {

        if(!wishListCount.includes(productId)){
            setWishListCount(prevCount => [...prevCount, productId])
        }
    }


   




    return (
        <div>
            <Navbar 
            cartCount={cartCount.length }
            wishListCount={wishListCount.length}

            ></Navbar>

            <Outlet context={{ handleAddToCart, handleWishlist }}></Outlet>
            
            <Footer></Footer>

                                         
        </div>
    );
};

export default MainLayout;