import { Suspense, useEffect } from "react";
import Food from "../components/Food/Food"
import Search from "../components/Search";
import {useLoaderData,Await} from "react-router-dom"
const Homepage=()=>{
    
    const {foods}=useLoaderData()
    
    //console.log(data)
    useEffect(()=>{

        
    async function fetchData(){
        const response=await fetch("https://food-15762-default-rtdb.firebaseio.com/foods.json");
        const resData= await response.json();
        const data=[];
        for(let key in resData){
            data.push({
                name:resData[key].name
            })
        }
       return resData;
        
    }
    fetchData()
   
    })
    return(
        <>
        <section>
            <Search/>
        </section>
        <section className='mx-auto container mt-20'>
        <Suspense fallback={<p style={{ textAlign:'center',color:'white' }}>Loading...</p>}>
            <Await resolve={foods}>
                {(loadedFoods)=><Food foods={loadedFoods}/>}
                
            </Await>
            
        </Suspense>
        
        </section>
       
        </>
        
    )
}

export default Homepage;