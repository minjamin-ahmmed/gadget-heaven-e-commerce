/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";


const GadgetCategories = ({categories}) => {

    return (
        <div className="">
           

            <div className="">

               <div className="bg-[#09080f17] p-8 rounded-2xl flex flex-wrap items-center gap-8 lg:flex-col ">
               {
                    categories.map(category => 
                    
                    <NavLink 
                    key={category.id}
                    to={`/category/${category.category}`}
                    className={({isActive}) => isActive ? 'font-bold text-white bg-[#9538E2] px-6 py-3 rounded-3xl' : ''}
                    
                    
                     >  {category.category}

                    </NavLink>)
                }

               </div>

               
            </div>

        </div>
    );
};

export default GadgetCategories;