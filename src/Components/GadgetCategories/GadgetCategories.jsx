/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";


const GadgetCategories = ({categories}) => {

    return (
        <div className="lg:ml-10">
           

            <div>

               <div className="bg-white shadow-lg p-8 rounded-2xl flex gap-8 flex-col ">

               

               {
                    categories.map(category => 
                    
                    <NavLink 
                    key={category.id}
                    to={`/category/${category.category}`}
                    className={({isActive}) => isActive ? 'font-bold text-white bg-[#9538E2] px-6 py-3 rounded-3xl' : 'bg-[#09080f1b] px-6 py-3 rounded-3xl'}
                    
                    
                     >  {category.category}

                    </NavLink>)
                }

               </div>

               
            </div>

        </div>
    );
};

export default GadgetCategories;