import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import GadgetCategories from "../GadgetCategories/GadgetCategories";



const Home = () => {

    const categories = useLoaderData()
 
    

    return (
        <div className="bg-[#09080f11] pb-14">

             <Banner></Banner>

             <div className="mt-64 lg:mt-96">

             <h1 className="text-center font-bold text-3xl text-[#09080F] mb-12">Explore Cutting-Edge Gadgetst</h1>

             </div>

             <div className="lg:grid lg:grid-cols-5">

                    <GadgetCategories categories={categories}></GadgetCategories>
                    <Outlet></Outlet>


             </div>
             
        </div>
    );
};

export default Home;