import logo from './logo.svg';
import classes from './App.module.css';
import Header from './components/Header';
import Search from './components/Search';
import Food from "./components/Food/Food"

function App() {
   const sectionClasses=` mx-auto mt-40 ${classes.width}`
  return (
   
   <>
   <Header/>
   <section className={sectionClasses}>
   <Search/>
   
   </section>
   <section className='mx-auto container mt-20'>
   <Food/>
   </section>
  
   </>
  )
}

export default App;
