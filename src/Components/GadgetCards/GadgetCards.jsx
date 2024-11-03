import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Card from "../Card/Card";


const GadgetCards = () => {

    const {category} = useParams()
 

    const allProductsData = useLoaderData()


    const [products, setProducts] = useState([])

    useEffect(() => {

        if(category){
            const filteredByCategories = [...allProductsData].filter(product => product.category === category)
            setProducts(filteredByCategories)
        }
        

    }, [category, allProductsData])
    


    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 w-11/12 mx-auto col-span-4 mt-5 lg:mt-0">
            {
               products.map(item => <Card key={item.id} item={item}></Card>) 
            }
        </div>
    );
};

export default GadgetCards;
