 
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { useEffect, useState } from "react";
import {  getStoredCartList, getStoredWishList } from "../../Utilities/addToDb";
import { Helmet } from "react-helmet";


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


    const location = useLocation()

    const titles = {
        "/": "Home",
        "/dashboard": "Dashboard",
        "/statistics": "Statistics",
        "/details": "Gadget Details",
        
      };
      
      const pageTitle = titles[location.pathname] || "Details";



      useEffect(() => {
        document.title = `Gadget Heaven | ${pageTitle}`;
      }, [location.pathname]);


    return (
        <div>

    <Helmet>
        <title>{`Gadget Heaven | ${pageTitle}`}</title>
      </Helmet>

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