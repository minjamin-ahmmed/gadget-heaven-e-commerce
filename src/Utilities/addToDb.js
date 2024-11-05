import toast from "react-hot-toast"


const getStoredCartList = () => {

    const storedListStr = localStorage.getItem('product-list')

    if(storedListStr){
        const storedList = JSON.parse(storedListStr)
        return storedList
    }
    else{
        return []
    }

}


const addStoredCartList = (id) => {

    const storedList = getStoredCartList()

    if(storedList.includes(id)){
       
        toast.error('Already in Your Cart!')
        
    }
    else{
        storedList.push(id)
        const storedListStr = JSON.stringify(storedList)
        localStorage.setItem('product-list', storedListStr)
        toast.success('Added to Cart!')
    
        
    }
}




const getStoredWishList = () => {

    const storedListStr = localStorage.getItem('wish-list')

    if(storedListStr){
        const storedList = JSON.parse(storedListStr)
        return storedList
    }
    else{
        return []
    }

}


const addStoredWishList = (id) => {

    const storedList = getStoredWishList()

    if(storedList.includes(id)){
        toast.error('Already in Your Wishlist!');
    }
    else{
        storedList.push(id)
        const storedListStr = JSON.stringify(storedList)
        localStorage.setItem('wish-list', storedListStr)
        toast.success('Added to Wishlist!');
    }
}



export {addStoredCartList, addStoredWishList, getStoredWishList, getStoredCartList}