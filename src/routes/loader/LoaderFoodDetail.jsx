import { useContext } from "react";
import FoodContext from "../../context/food-context";
import {defer} from "react-router-dom";

async function FoodDetail(){
    const fdCtx=useContext(FoodContext);
    const data=fdCtx.showFood;
    return data;
}

export const loaderFoodDetail=()=>{
    return defer({
        foodDetail:FoodDetail()
    })
}