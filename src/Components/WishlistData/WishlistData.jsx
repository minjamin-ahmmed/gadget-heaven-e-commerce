import { NavLink, useOutletContext } from "react-router-dom";


const WishlistData = ({wishlistedProduct}) => {

    const {handleAddToCart, handleWishlist} = useOutletContext()
    
    const{product_title,product_id, price, description, product_image} = wishlistedProduct


    const addToCart = () => {
        handleAddToCart(product_id)
    }

    
    
    
    return (
        <div className="flex  gap-5 p-4 bg-white border border-gray-200 shadow-xl rounded-2xl my-5">
           <div>
            <img className="w-[100px] lg:w-[200px] lg:h-[150px] object-cover border border-gray-200 rounded-2xl p-2" src={product_image} alt="" />
           </div>

          <div className="space-y-3">
          <h1 className="font-bold"> {product_title} </h1>
           <p className="text-[#09080f8c]"> {description} </p>
           <p className="font-semibold">Price: $ {price} </p>

          <NavLink to="/"> 
          <button onClick={addToCart} className="bg-[#9538E2] text-white font-bold rounded-3xl px-8 py-2">Add To Cart</button>
          </NavLink>
          </div>

          

        </div>
    );
};

export default WishlistData;