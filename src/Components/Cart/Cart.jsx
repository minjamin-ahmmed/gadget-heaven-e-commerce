import { useState, useEffect } from "react";
import CartData from "../CartData/CartData";
import { SlEqualizer } from "react-icons/sl";
import Modal from "../Modal/Modal";
import modalImg from "../../assets/Group.png"
import { useNavigate } from "react-router-dom";

const Cart = ({ productList, clearCart }) => {


    // const { clearCart} = useOutletContext()
    const [products, setProducts] = useState([]);
    const[isModalOpen, setIsModalOpen] = useState(false)
    
    const navigate = useNavigate()

    //Calculate the Total Cost
    const totalCost = productList.reduce((acc, product) => acc + product.price, 0);

    useEffect(() => {
        setProducts(productList);
    }, [productList]);

    const handleSorting = (sortBy) => {

        if (sortBy === 'price') {
            const sorted = [...products].sort((a, b) => b.price - a.price);
            setProducts(sorted);
        }
    };


 

    const handleConfirmPurchase = () => {
        navigate("/")
        setProducts([]);
        toggleModal();
        clearCart();
    }

    const toggleModal = () => {
        
        setIsModalOpen(!isModalOpen);

    }


    return (
        <div>
            <div className="flex flex-col lg:flex-row justify-between items-center lg:w-11/12 mx-auto">
                <h1 className="text-2xl font-bold">Cart</h1>

                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-normal justify-start gap-5">
                    <h1 className="text-xl font-bold">Total Cost: ${totalCost.toFixed(2)} </h1>

                    <button
                        onClick={() => handleSorting('price')}
                        className="text-[#9538E2] font-bold px-4 py-2 border border-x-[#9538E2] border-t-[#9538E2] border-b-pink-800 rounded-3xl flex items-center justify-between gap-2 hover:bg-[#9538E2] hover:text-white"
                    >
                        Sort By Price <SlEqualizer />
                    </button>

                    <button onClick={toggleModal} className="text-white font-bold px-4 py-2 bg-[#9538E2] rounded-3xl hover:bg-white hover:text-purple-600 hover:border border-purple-600">
                        Purchase
                    </button>
                </div>
            </div>

            <div className="lg:w-11/12 mx-auto">
                {
                    products.map((product) => (
                        <CartData key={product.product_id} product={product}></CartData>
                    ))
                }
            </div>

            <Modal isOpen = {isModalOpen} onClose={toggleModal}>

            <div className="flex justify-center">
              <img src={modalImg} alt="" />
            </div>

            <h2 className="text-2xl text-center font-bold mt-2 mb-4">
                Payment Succeessfull</h2>
               
                <div className="divider"></div>
                
                <p className="text-center font-medium text-[#1c1c1c] mb-2">Thanks For Purchase</p>
                <p className="font-bold text-sm text-center text-black mb-4"> Total: ${totalCost.toFixed(2)} </p>

                
                    {/* <button
                        onClick={toggleModal}
                        className="px-4 py-2 bg-gray-200 text-gray-800 rounded"
                    >
                        Cancel
                    </button> */}

                    <button
                        onClick={handleConfirmPurchase}
                        className="px-4 py-2 w-full bg-[#9538E2] text-white rounded-3xl"
                    >
                        Confirm Purchase
                    </button>
              



            </Modal>


        </div>
    );
};

export default Cart;
