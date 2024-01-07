import classes from '../../App.module.css';
const Card=(props)=>{
    const clas=`bg-blend-multiply overflow-y-auto overflow-x-hidden fixed flex items-center justify-center h-screen left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full ${classes.overlay}`
    return (
        <div  tabIndex="-1" aria-hidden="true" className={clas}>
            <div className="relative p-4 w-full max-w-2xl max-h-full">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            {props.children}
                </div>
            </div>
           
        </div>
    )
}

export default Card