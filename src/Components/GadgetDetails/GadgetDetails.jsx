import { useLoaderData, useOutletContext, useParams } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { addStoredCartList, addStoredWishList, getStoredWishList } from "../../Utilities/addToDb";
import { useState } from "react";

import ReactStars from "react-rating-stars-component";



const GadgetDetails = () => {

    const { handleAddToCart, handleWishlist } = useOutletContext()
    

    const {productId} = useParams()

    const allProducts = useLoaderData()
    const productIdInt = parseInt(productId)
    
    const loadedData = getStoredWishList()

    const loadedProduct = loadedData.find(product => parseInt(product) === productIdInt)

    const [isActive, setIsActive] = useState(!!loadedProduct)

    const products = allProducts.find(product => product.product_id === productIdInt)
    
 

    const {product_title, price, availability, description, specification, rating, product_image } = products;
    

    const handleCartButton = (id) => {

      addStoredCartList(id)
      handleAddToCart(productId)

}

    const handleWishListButton = (id) => {
        addStoredWishList(id)
        handleWishlist(productId)
    }

  
    const secondExample = {
        size: 20,
        count: 5,
        color: "black",
        activeColor: "#F9C004",
        value: 4.5,
        a11y: true,
        isHalf: true,
        emptyIcon: <i className="far fa-star" />,
        halfIcon: <i className="fa fa-star-half-alt" />,
        filledIcon: <i className="fa fa-star" />,
        onChange: (newValue) => {
          console.log(`Example 2: new value is ${newValue}`);
        }
      };
      
  
    

    return (
        <div className="relative">
           <div className="bg-[#9538E2] pt-8 pb-64 ">
                <h1 className="text-center font-bold text-3xl text-white mb-4">Product Details</h1>
                <p className="text-center lg:w-7/12 mx-auto text-white/80">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
           </div>

           <div className="flex flex-col lg:flex-row gap-6 w-9/12 mx-auto p-6 rounded-3xl shadow-lg absolute top-[20%] left-[12%] bg-white">
                <div>
                    <img className="rounded-2xl h-[200px] lg:h-[420px] w-[400px] object-cover " src={product_image} alt="" />
                </div>

                <div>
                    <h2 className="text-2xl font-bold text-[#09080F] mb-3"> {product_title} </h2>
                    <h3 className="text-lg text-[#09080fad] mb-3"> Price: $ {price} </h3>

                    <p className={`text-sm font-bold  mb-4 ${availability ? 'text-[#309C08] w-[87px] border border-[#309C08] bg-[#2f9c0846] rounded-3xl px-2' : 'border border-red-600 w-[110px] px-2 py-2 rounded-3xl bg-[#f826268e] text-red-600'}`}> {availability ? 'In Stock' : 'Out of Stock'} </p>

                    <h3 className="text-xl font-medium text-[#09080f98] mb-4"> {description} </h3>
                    <p className="font-bold text-[#09080F]">Specifications: </p>
                    <ol className="list-decimal pl-5 mb-4">
                        
                    {
                            specification.map((item, index) => <li className="text-[#09080f98]"  key={index}> {item} </li> )
                            
                     } 
                        </ol>   

                    <p className="font-bold text-[#09080F] mb-4">Rating: </p>

                    <div className="flex items-center gap-5 mb-2">
                    <div className="flex items-center gap-5 mb-2">

  <ReactStars {...secondExample} />
  <p className="px-2 text-sm bg-slate-300 rounded-full"> {rating} </p>
</div>

                        
                        </div> 
                
                <div className="flex items-center gap-5">
                    <button onClick={() => handleCartButton(productId)} className="bg-[#9538E2] text-white font-bold text-sm px-4 py-2 rounded-3xl">Add to Cart <i className="fa-solid fa-cart-shopping"></i> </button>
                    <button disabled={isActive} onClick={() => {
                        handleWishListButton(productId)
                        setIsActive(true)
                    }} className={`bg-gray-300 p-2 rounded-full ${isActive ? 'bg-gray-500 text-white' : ''}`}> <FaRegHeart /> </button>
                </div>
                </div>

           </div>

           <div className="h-[500px] bg-[#ECECEC]">

           </div>
        </div>
    );
};

export default GadgetDetails;