import { Fragment } from "react"
import AddFood from "../components/addFood"

const NewFoodPage=()=>{

    return(
        <>
        <section className="mt-20">
            <h1 className="text-white text-center text-4xl font-bold">New Food</h1>
            <Fragment>
                <AddFood/>
            </Fragment>
        </section>
        </>
    )
}

export default NewFoodPage