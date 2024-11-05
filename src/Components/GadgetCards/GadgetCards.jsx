import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Card from "../Card/Card";
import AllProductsCard from "../AllProductsCard/AllProductsCard";


const GadgetCards = () => {

    const {category} = useParams()
    console.log(category);
    
 

    const allProductsData = useLoaderData()


    const [products, setProducts] = useState([])
    const [allProducts, setAllProducts] = useState([])

    useEffect(() => {

        if(category === 'All-Products'){
            setProducts(allProductsData)
            setAllProducts([])

        }
        

       else if(category){
            const filteredByCategories = [...allProductsData].filter(product => product.category === category)
            setProducts(filteredByCategories)
            setAllProducts([])
        }

        else{
            setProducts(allProductsData.slice(0, 9))
            setAllProducts([])
        }
        

    }, [category, allProductsData])
    


    return (
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 w-11/12 mx-auto col-span-4 mt-5 lg:mt-0">
            {
               products.map(item => <Card key={item.id} item={item}></Card>)
               
            }

            {
                allProducts.map(item => <AllProductsCard key={item.id} item={item}></AllProductsCard>)
            }
        </div>
    );
};

export default GadgetCards;
