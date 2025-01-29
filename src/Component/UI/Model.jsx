import { motion } from "motion/react"
import { useContext,useRef } from "react"

import AddChallengeContext from "../context/AddChallengeContext"


const Model = ({ children, title }) => {
    const { showModel } = useContext(AddChallengeContext);
    const model=useRef()
    function handleClose(e) {
        // if (e.target!==model.current) {
        //     showModel(false)
        // }
    }
    return <div
        onClick={handleClose} className="h-screen w-screen bg-black bg-opacity-50 
    absolute z-10 flex justify-center items-center">
        <motion.dialog open ref={model} className="rounded p-2 sm:p-8 w-full max-w-xl"
            variants={{
                visible: {
                    y: 0,
                    opacity: 1,
                }, hidden: {
                    y: -20,
                    opacity: 0
                }
            }}
            initial="hidden"
            animate="visible"
            exit="hidden"
        >
            <h2 className="text-3xl font-bold mb-4">{title}</h2>
            {children}
            
        </motion.dialog>
    </div>
}

export default Model