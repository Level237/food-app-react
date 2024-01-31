import Header from "../../components/Header"
import Search from "../../components/Search"
import { FoodContextProvider } from "../../context/food-context"
import {Outlet} from "react-router-dom"
const RootLayout=()=>{

    return (
        <FoodContextProvider>
        <Header/>
        <Search/>
    
        <section className='mx-auto container mt-20'>
        <Outlet/>
        </section>
       
        </FoodContextProvider>
    )
}

export default RootLayout