import Header from "../../components/Header"
import { FoodContextProvider } from "../../context/food-context"
import {Outlet} from "react-router-dom"
const RootLayout=()=>{

    return (
        <FoodContextProvider>
        <Header/>
        
    
        
        <Outlet/>
      
       
        </FoodContextProvider>
    )
}

export default RootLayout