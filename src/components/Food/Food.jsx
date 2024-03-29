import { useContext, useState } from "react";
import FoodDetails from "./Food-details";
import FoodContext from "../../context/food-context";
import ShoWFood from "./Show-Food";
import {motion} from "framer-motion"
const Food=({foods})=>{

    const fdCtx=useContext(FoodContext)

    fdCtx.setFoodList(foods)
    console.log(fdCtx.foodList);
    return (
        <>
            <div className="grid grid-cols-4 gap-5">
                {foods.map((food)=>{
                    return <FoodDetails 
                    onClick={()=>fdCtx.selectFood(food.id)}
                     key={food.id}
                     id={food.id} 
                     name={food.name} 
                     price={food.price} 
                     addToCard={()=>fdCtx.addToCart(food)}
                     url={food.url}/>
                })}
            </div>
            
            {fdCtx.onShowModal && <ShoWFood onClose={fdCtx.onClose} selectedFood={fdCtx.showFood}/>}
        </>
    )
}

export default Food;