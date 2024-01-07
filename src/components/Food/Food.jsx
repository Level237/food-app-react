import { useState } from "react";
import foods from "../../data/foods";
import food1 from "../../img/food1.jpeg"
import FoodDetails from "./Food-details";


const Food=()=>{


    const [foodList,setFoodList]=useState(foods)

    return (
        <>
            <div className="grid grid-cols-4 gap-5">
                {foodList.map((food)=>{
                    return <FoodDetails name={food.name} price={food.price} img={food.img}/>
                })}
            </div>
        </>
    )
}

export default Food;