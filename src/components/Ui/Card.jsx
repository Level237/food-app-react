import classes from '../../App.module.css';
import {motion,AnimatePresence} from "framer-motion"

const modalVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    closed: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };
const Card=(props)=>{
    const clas=`bg-blend-multiply overflow-y-auto overflow-x-hidden fixed flex items-center justify-center h-screen left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full ${classes.overlay}`
    return (
        <div 
       
        tabIndex="-1" aria-hidden="true" className={clas}>
            <div className="relative p-4 w-full max-w-2xl max-h-full">
                <AnimatePresence>
            <motion.div 
             initial={{ 
                y:-100,
                x:[0,-100,100,0,90],
                scale:0
             }}
             transition={{ 
                duration:0.3,
                ease:"easeInOut"
              }}
             animate={{ 
                y:20,
                x:[0,0,0,0,0],
                scale:1,
              }}
             exit={{ 
                scale:0,
                y:0,
                x:0,
                rotate:"12deg"
              }}
            className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            {props.children}
                </motion.div>
                </AnimatePresence>
            </div>
           
        </div>
    )
}

export default Card