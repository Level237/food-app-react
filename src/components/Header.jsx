import { useContext } from "react";
import { FaCartArrowDown } from "react-icons/fa";
import FoodContext from "../context/food-context";
import Cart from "./Cart/Cart";
import {motion,AnimatePresence} from "framer-motion"
import { Link, NavLink } from "react-router-dom";
const Header=()=>{

    const fdCtx=useContext(FoodContext)

    const activeCss='block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white'
    const notActiveCss='block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700'
    return (
        <>
        <header>
    <nav className="bg-white border-gray-200 px-4 lg:px-9 py-2.5 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <Link to="" className="flex items-center">
                <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
                <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
            </Link>
            <div className="flex items-center lg:order-2">
               
                <motion.button 
                whileHover={{ 
                    scale:1.05,
                    background:"black"
                 }}
                 whileTap={{ 
                    rotate:"2.5deg"
                  }}
                  transition={{ 
                    duration:0.5,
                    ease:"easeInOut"
                   }}
                onClick={fdCtx.openCart}  class="text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 me-2 mb-2">
                {fdCtx.cart.length >0 && <span class="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">{fdCtx.cart.length}</span>}
                <FaCartArrowDown/>
                
Cart
</motion.button>
                <button data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                    <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </button>
            </div>
            <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                    <li>
                        <NavLink to="" className={({isActive})=>(isActive ? activeCss :notActiveCss)}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="foods"  className={({isActive})=>(isActive ? activeCss :notActiveCss)}>Foods</NavLink>
                    </li>
                    <li>
                        <NavLink to="food/new"  className={({isActive})=>(isActive ? activeCss :notActiveCss)}>New Food</NavLink>
                    </li>
                    <li>
                        <NavLink to="animate-test"  className={({isActive})=>(isActive ? activeCss :notActiveCss)}>Animate</NavLink>
                    </li>
                    

                    
                </ul>
            </div>
        </div>
    </nav>
</header>
<AnimatePresence>
{fdCtx.showModalCart && <Cart onClose={fdCtx.onClose} />}
</AnimatePresence>
        </>
    )
}

export default Header;