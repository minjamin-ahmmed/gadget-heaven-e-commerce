

const Card = ({item}) => {

    console.log(item);
    

    const {product_image,product_title, price } = item
    return (
        <div className="rounded-xl p-4 border-2 border-[#9538E2] shadow-2xl space-y-6">
            <div className="border border-gray-200 p-4 rounded-xl">
                 <img className="h-[300px] object-cover w-full" src={product_image} alt="" />
            </div>
        
                <h2 className="text-xl font-bold text-[#09080F]">{product_title} </h2>
            
            <p>Price: {price} $ </p>

            <button className="text-[#9538E2] font-bold px-4 py-2 border border-x-[#9538E2] border-t-[#9538E2] border-b-pink-800 rounded-3xl"> View Details </button>
        </div>
    );
};

export default Card;