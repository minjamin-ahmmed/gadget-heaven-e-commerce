import { NavLink } from "react-router-dom";


const AllProductsCard = ({item}) => {
    console.log(item)
    const {product_image,product_title, price, product_id } = item

    return (
        <div>
            <div className="rounded-xl p-4 border-2 border-[#09080f21] shadow-2xl space-y-6">
            <div className="border border-gray-200 p-4 rounded-xl bg-[#09080f0f]">
                 <img className="h-[300px] object-cover w-full rounded-2xl" src={product_image} alt="" />
            </div>
        
                <h2 className="text-xl font-bold text-[#09080F]">{product_title} </h2>
            
            <p>Price: {price} $ </p>

            <NavLink to={`/details/${product_id}`}  >  <button className="text-[#9538E2] mt-4 font-bold px-4 py-2 border border-x-[#9538E2] border-t-[#9538E2] border-b-pink-800 rounded-3xl"> View Details </button> </NavLink>

           
        </div>
            
        </div>
    );
};

export default AllProductsCard;