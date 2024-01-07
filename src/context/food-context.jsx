import React, { useState } from "react";
import foods from "../data/foods";

const FoodContext=React.createContext({
    foodList:foods,
    selectFood:(id)=>{},
    onShowModal:false,
    onClose:()=>{},
    addToCart:(food)=>{},
    cart:[],
    showFood:null
})

export const FoodContextProvider=(props)=>{
    const [foodList,setFoodList]=useState(foods)
    const [selectedFood,setSelectedFood]=useState(null)
    const [showModal,setShowModal]=useState(false)
    const [cart,setCart]=useState([])

    const selectFood=(id)=>{
        const selectFood=foodList.find((food)=>food.id===id)
        setShowModal(true)
        setSelectedFood(selectFood)
    }
    const onClose=()=>{
        setShowModal(false)
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
        console.log(cart)
    }
    return <FoodContext.Provider value={{ 
        onShowModal:showModal, 
        foodList:foodList,
        selectFood:selectFood,
        showFood:selectedFood,
        addToCart:addToCart,
        cart:cart,
    onClose:onClose }}>{props.children}</FoodContext.Provider>
}

export default FoodContext