import {redirect,json} from "react-router-dom"
export async function addFoodAction({request,params}){

    const data=await request.formData();
    //console.log(data.get('name'))
    const foodData={
        name:data.get('name'),
        category:data.get('category'),
        price:data.get('price'),
        url:data.get('url'),
        description:data.get('description')
    }
    const response=await fetch("https://food-15762-default-rtdb.firebaseio.com/foods.json",{
        method:"POST",
        headers:{
            'Content-Type':"application/json"
        },
        body:JSON.stringify(foodData)
   })
   if(!response.ok){
    throw json({message:'Could not save food!'},{status:500})
   }

   return redirect('/foods');
}