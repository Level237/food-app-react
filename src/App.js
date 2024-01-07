import logo from './logo.svg';
import classes from './App.module.css';
import Header from './components/Header';
import Search from './components/Search';

function App() {
   const sectionClasses=` mx-auto mt-40 ${classes.width}`
  return (
   
   <>
   <section className={sectionClasses}>
   <Search/>
   </section>
  
   </>
  )
}

export default App;
