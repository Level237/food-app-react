import {useRouteError} from "react-router-dom"
import Header from "../components/Header";
const ErrorPage=()=>{
    const error=useRouteError();

    let message="Alert error"

    if(error.status===500){
        message=error.data.message;
    }
    return (
        <>
        <Header/>
        <section className="mt-10">
            <p className="text-white text-center text-3xl">{message}</p>
        </section>
       
        </>
    )
}

export default ErrorPage