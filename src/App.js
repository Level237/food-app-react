import logo from './logo.svg';

import Header from './components/Header';
import Search from './components/Search';
import Food from "./components/Food/Food"
import { FoodContextProvider } from './context/food-context';
import Cart from './components/Cart/Cart';
import { RouterProvider } from 'react-router-dom';
import { routes } from './routes/route';


function App() {
   
   
  return <RouterProvider router={routes}/>
}

export default App;
