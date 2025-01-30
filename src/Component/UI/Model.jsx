import { motion } from "motion/react"
import "./uiComponent.css"

const Model = ({ children, title }) => {

    return <div className="model">
        <motion.div className="model-container"
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
            <h2
            style={{fontSize:'2rem', fontWeight:'bold', marginBottom:'2rem'}}
            >{title}</h2>
            {children}
            
        </motion.div>
    </div>
}

export default Model