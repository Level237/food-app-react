import React, { useState } from "react";
import foods from "../data/foods";

const FoodContext=React.createContext({
    foodList:foods,
    selectFood:(id)=>{},
    onShowModal:false,
    onClose:()=>{},
    showFood:null
})

export const FoodContextProvider=(props)=>{
    const [foodList,setFoodList]=useState(foods)
    const [selectedFood,setSelectedFood]=useState(null)
    const [showModal,setShowModal]=useState(false)

    const selectFood=(id)=>{
        const selectFood=foodList.find((food)=>food.id===id)
        setShowModal(true)
        setSelectedFood(selectFood)
    }
    const onClose=()=>{
        setShowModal(false)
    }
    return <FoodContext.Provider value={{ 
        onShowModal:showModal, 
        foodList:foodList,
        selectFood:selectFood,
        showFood:selectedFood,
    onClose:onClose }}>{props.children}</FoodContext.Provider>
}

export default FoodContext