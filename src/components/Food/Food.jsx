import { useContext, useState } from "react";
import foods from "../../data/foods";
import food1 from "../../img/food1.jpeg"
import FoodDetails from "./Food-details";
import FoodContext from "../../context/food-context";
import ShoWFood from "./Show-Food";


const Food=()=>{
    const fdCtx=useContext(FoodContext)
    console.log(fdCtx)
    return (
        <>
            <div className="grid grid-cols-4 gap-5">
                {fdCtx.foodList.map((food)=>{
                    return <FoodDetails 
                    onClick={()=>fdCtx.selectFood(food.id)}
                     key={food.id} 
                     name={food.name} 
                     price={food.price} 
                     img={food.img}/>
                })}
            </div>
            {fdCtx.onShowModal && <ShoWFood onClose={fdCtx.onClose} selectedFood={fdCtx.showFood}/>}
        </>
    )
}

export default Food;