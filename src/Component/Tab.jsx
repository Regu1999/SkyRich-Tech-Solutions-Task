import { Link } from "react-router"
import { AnimatePresence, motion } from "motion/react"
import "../assets/styles/tab.css"
const Tab = ({ children, count = 0, isActive, path }) => {
    return <Link to={path} className="tab-list" type="button">
        <div style={{display:'flex', alignItems:'end'}}>
            {children}
            <motion.div
                className="tab-count"
                key={count}
                initial={{ scale: 1 }}
                animate={{ scale: 1.5 }}
            >
                {count}
            </motion.div>
        </div>
        <div className="tab-line">
            <AnimatePresence>
                {isActive && <motion.div
                    layoutId="chalengeStatus"
                    className="h-full bg-blue-500 mt-2 rounded"></motion.div>}
            </AnimatePresence>
        </div>
    </Link>
}
export default Tab