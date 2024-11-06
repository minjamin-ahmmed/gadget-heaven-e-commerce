import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { clearStoredCartList, getStoredCartList, getStoredWishList } from "../../Utilities/addToDb";
import Cart from "../Cart/Cart";
import Wishlist from "../Wishlist/Wishlist";


const Dashboard = () => {


    const [wishlistedProducts, setWishListedProducts] = useState([])
    const [activeBtn, setActiveBtn] = useState('cart')

    const allProducts = useLoaderData()
  
    const [productList, setProductList] = useState([])

    useEffect(() => {

        const storedProductList = getStoredCartList()
        const storedCartListInt = storedProductList.map(id => parseInt(id))

        const addToCartList = allProducts.filter(product => storedCartListInt.includes(product.product_id))
        
        setProductList(addToCartList)


        const storedWishList = getStoredWishList()
        const storedWishListInt = storedWishList.map(id => parseInt(id))

        const wishList = allProducts.filter(product => storedWishListInt.includes(product.product_id))
        setWishListedProducts(wishList)
        


    }, [allProducts])

 const clearCart = () => {
        setProductList([]);
        clearStoredCartList() 
    
    };




    return (
        <div>
             <div className="bg-[#9538E2] py-8">
                <h1 className="text-center font-bold text-3xl text-white mb-4">DashBoard</h1>
                <p className="text-center lg:w-7/12 mx-auto text-white/80">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>

                <div className="flex justify-center items-center gap-5 mt-8">
                    <button  onClick={()=> setActiveBtn('cart')} className={` px-12 py-2 rounded-3xl font-bold text-[#9538E2] ${activeBtn === 'cart'? 'bg-white': 'text-white border border-white'}`}>Cart</button>

                    <button onClick={()=> setActiveBtn('wishList')} className={` px-12 py-2 rounded-3xl font-bold text-[#9538E2] ${activeBtn === 'wishList'? 'bg-white': 'text-white border border-white'}`}>WishList</button>

                   
                </div>
           </div>

                  <div className="bg-[#ECECEC] py-10">
                  {
                        activeBtn === 'cart' && <Cart productList={productList} clearCart={clearCart}></Cart>
                    }

                    {
                        activeBtn === 'wishList' && <Wishlist wishlistedProducts={wishlistedProducts}></Wishlist>
                    }
                  </div>
        </div>
    );
};

export default Dashboard;