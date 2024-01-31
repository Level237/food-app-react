import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../pages/layouts/RootLayout";
import Homepage from "../pages/Homepage";
import FoodPage from "../pages/FoodPage";
import NewFoodPage from "../pages/NewFoodPage";
import { addFoodAction } from "./actions/addFoodAction";
import ErrorPage from "../pages/Error";

export const routes=createBrowserRouter([
    {
        path:'/',
        element:<RootLayout/>,
        errorElement:<ErrorPage/>,
        children:[
            {
                path:"",
                element:<Homepage/>,
                index:true,
            },{
                path:"foods",
                element:<FoodPage/>
            },{
                path:"food/new",
                element:<NewFoodPage/>,
                action:addFoodAction
            }
        ]
    }
])