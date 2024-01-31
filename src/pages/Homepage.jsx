import Food from "../components/Food/Food"
import Search from "../components/Search";

const Homepage=()=>{

    return(
        <>
        <section>
            <Search/>
        </section>
        <section className='mx-auto container mt-20'>
        <Food/>
        </section>
       
        </>
        
    )
}

export default Homepage;