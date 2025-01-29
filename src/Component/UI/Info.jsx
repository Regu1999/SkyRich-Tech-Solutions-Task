import { motion } from "motion/react"
const Info = ({ children, title }) => {
    return <motion.section
        initial={{ y: '20%', opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", delay: .2 }}
    >
        <h3 style={{textAlign:'center'}}>
            {title}
        </h3>
        <div style={{textAlign:'center'}}>
            {children}
        </div>
    </motion.section>

}
export default Info