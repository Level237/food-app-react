import Card from "../Ui/Card"
import food1 from "../../img/food1.jpeg"
import { useContext } from "react"
import FoodContext from "../../context/food-context"
const Cart=()=>{
    const fdCtx=useContext(FoodContext)
    return (
        
        <Card>
            <section className="mt-5 bg-white w-50 p-5 rounded-xl">
            <button onClick={fdCtx.closeCard}  type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal">
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span className="sr-only">Close modal</span>
                </button>
        <h2 className="font-black text-3xl mt-10">Cart</h2>
        
        {fdCtx.cart.map((item)=>{
            return <div className="flex  justify- mt-5">
            <figure class="max-w-lg flex-none">
            <span class="absolute bg-pink-100 text-pink-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-pink-900 dark:text-pink-300">{item.category}</span>
      <img class="flex-none w-50 h-50  rounded-lg" src={item.url} alt="image description"/>
    </figure>
    <div className="flex flex-col flex-initial w-64 mx-4">
        <div>
        <h2 className="font-black text-3xl">{item.name}</h2>
        </div>
        <div>
        <h2 className="font-black  text-3xl mt-3">${item.price}</h2>
        </div>
        <div>
        <button onClick={()=>fdCtx.removeCart(item)} class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Remove</button>
        </div>
    </div>
            </div>
        })}
        {fdCtx.cart.length===0 && <p className="text-center">Empty Card</p>}
            </section>
           
        </Card>
       
    )
}

export default Cart