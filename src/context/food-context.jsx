import React, { useState } from "react";
import foods from "../data/foods";



const FoodContext=React.createContext({
    foodList:null,
    setFoodList:[],
    selectFood:(id)=>{},
    onShowModal:false,
    onClose:()=>{},
    addToCart:(food)=>{},
    cart:[],
    showFood:null,
    openCart:null,
    closeCard:null,
    showModalCart:false,
    removeCart:(food)=>{}
})

export const FoodContextProvider=(props)=>{
    const [foodList,setFoodList]=useState(null)
    const [selectedFood,setSelectedFood]=useState(null)
    const [showModal,setShowModal]=useState(false)
    const [showModalCart,setShowModalCart]=useState(false)
    const [cart,setCart]=useState([])

    const removeCart=(food)=>{
        const notExistingFood=cart.filter((item)=>{
            return item.id!==food.id
        })
        setCart(notExistingFood)
    }
    const selectFood=(id)=>{
        const selectFood=foodList.find((food)=>food.id===id)
        setShowModal(true)
        
        setSelectedFood(selectFood)
    }
    const onClose=()=>{
        setShowModal(false)
    }

    const openCart=()=>{
        setShowModalCart(true)
        console.log('ddf')
    }

    const closeCart=()=>{
        setShowModalCart(false)
    }
    const addToCart=(food)=>{
        const existingFood=cart.findIndex((item)=>{
            return item.id===food.id
        })
        let cartArray=[]
        const existingFoodItem=foodList[existingFood]
        if(existingFoodItem){
            return;
        }else{
            cartArray=[food,...cart]
            setCart(cartArray)
           
            
        }
        //console.log(cart)
    }
    return <FoodContext.Provider value={{ 
        onShowModal:showModal, 
        showModalCart:showModalCart,
        foodList:foodList,
        setFoodList,
        selectFood:selectFood,
        showFood:selectedFood,
        addToCart:addToCart,
        openCart:openCart,
        closeCard:closeCart,
        cart:cart,
        removeCart,
    onClose:onClose }}>{props.children}</FoodContext.Provider>
}

export default FoodContext