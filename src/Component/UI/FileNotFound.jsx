import { motion } from "motion/react"

import notFoundImg from "/images/taskEmpty.webp";

const FileNotFound = () => {
    return <motion.div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    }}
        variants={{ visible: { y: 0, opacity: 1 }, hidden: { y: -20, opacity: 0 } }}
        initial="hidden"
        animate="visible"
        exit="hidden"
    >
        <img src={notFoundImg} alt="not found" width="100px" />
        <h3 style={{ color: '#2d96f7' }}>list empty</h3>
    </motion.div>
}
export default FileNotFound