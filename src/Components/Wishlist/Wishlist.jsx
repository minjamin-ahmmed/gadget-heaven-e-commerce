import WishlistData from "../WishlistData/WishlistData";


const Wishlist = ({wishlistedProducts}) => {
    return (
        <div className="lg:w-11/12 mx-auto">

        <h1 className="text-2xl font-bold">WishList</h1>

            <div className="">
            {
                wishlistedProducts.map(wishlistedProduct => 
                
                <WishlistData 

                    key={wishlistedProduct.product_id} 
                    wishlistedProduct={wishlistedProduct}>

                    </WishlistData>)
            }
            </div>
        </div>
    );
};

export default Wishlist;