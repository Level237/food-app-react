import React, { Fragment } from "react";
import { Form,useNavigation} from "react-router-dom";

const AddFood=()=>{
    const navigation=useNavigation();
    const isSubmitting=navigation.state==="submitting"
    console.log(isSubmitting)
    return (
        <>
        <Form method="POST" className="max-w-sm mx-auto mb-10">
        <section className="mt-10">
                <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Food Name</label>
                <input name="name" type="text" id="base-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
        </section>
        <section className="mt-5">
        <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
            <select name="category" id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option selected>Select one Category of Food</option>
            <option value="American">American</option>
            <option value="European">European</option>
            <option value="African">African</option>
            <option value="Asia">Asia</option>
            </select>
        </section>
        <section className="mt-5">
                <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
                <input type="number" name="price" id="base-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
        </section>
        <section className="mt-5">
                <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Url of Image</label>
                <input type="url" name="url" id="base-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
        </section>
        <section className="mt-5">
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your description</label>
            <textarea id="message" name="description" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment..."></textarea>
        </section>
        <button disabled={isSubmitting} type="submit" className="mt-5 focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">{isSubmitting ? 'Sending...' : "Send"}</button>
        </Form>
        </>
    )
}

export default AddFood;