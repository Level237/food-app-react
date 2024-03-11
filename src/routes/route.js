import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../pages/layouts/RootLayout";
import Homepage from "../pages/Homepage";
import FoodPage from "../pages/FoodPage";
import NewFoodPage from "../pages/NewFoodPage";
import { addFoodAction } from "./actions/addFoodAction";
import ErrorPage from "../pages/Error";
import { loader as LoaderFoods, loadFoods } from "./loader/LoaderFoods";
import { loaderFoodDetail } from "./loader/LoaderFoodDetail";
import AnimatePage from "../pages/AnimatePage"

export const routes=createBrowserRouter([
    {
        path:'/',
        element:<RootLayout/>,
        errorElement:<ErrorPage/>,
        //loader:loaderFoodDetail,
        children:[
            {
                path:"",
                element:<Homepage/>,
                index:true,
               loader:LoaderFoods
            },{
                path:"foods",
                element:<FoodPage/>,
                loader:LoaderFoods
            },{
                path:"food/new",
                element:<NewFoodPage/>,
                action:addFoodAction
            },{
                path:'animate-test',
                element:<AnimatePage/>
            }
        ]
    }
])