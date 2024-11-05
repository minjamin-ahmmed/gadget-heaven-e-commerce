

const CartData = ({product}) => {

    const{product_title, price, availability, description, specification, rating, product_image} = product

    console.log(product);
    
    return (
        <div className="flex items-center  gap-5 p-4 bg-white border border-gray-200 shadow-xl rounded-2xl my-5">
           <div>
            <img className="w-[150px] lg:w-[200px] lg:h-[124px] object-cover border border-gray-200 rounded-2xl p-2" src={product_image} alt="" />
           </div>

          <div className="space-y-3">
          <h1 className="font-bold"> {product_title} </h1>
           <p className="text-[#09080f8c]"> {description} </p>
           <p className="font-semibold">Price: $ {price} </p>
          </div>

        </div>
    );
};

export default CartData;