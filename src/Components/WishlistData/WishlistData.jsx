

const WishlistData = ({wishlistedProduct}) => {

    const{product_title, price, availability, description, specification, rating, product_image} = wishlistedProduct
    
    console.log(wishlistedProduct);
    
    return (
        <div className="flex  gap-5 p-4 bg-white border border-gray-200 shadow-xl rounded-2xl my-5">
           <div>
            <img className="w-[100px] lg:w-[200px] lg:h-[150px] object-cover border border-gray-200 rounded-2xl p-2" src={product_image} alt="" />
           </div>

          <div className="space-y-3">
          <h1 className="font-bold"> {product_title} </h1>
           <p className="text-[#09080f8c]"> {description} </p>
           <p className="font-semibold">Price: $ {price} </p>

           <button className="bg-[#9538E2] text-white font-bold rounded-3xl px-8 py-2">Add To Cart</button>
          </div>

          

        </div>
    );
};

export default WishlistData;