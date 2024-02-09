import {defer} from "react-router-dom"
async function loadFood(){
    const response=await fetch("https://food-15762-default-rtdb.firebaseio.com/foods.json");
    const resData= await response.json();
    const data=[];
    for(let key in resData){
        data.push({
            name:resData[key].name,
            category:resData[key].category,
            description:resData[key].description,
            url:resData[key].url,
            price:resData[key].price
        })
    }
   return data;
}
export const loader=()=>{

    return defer({
        foods:loadFood()
      })
}