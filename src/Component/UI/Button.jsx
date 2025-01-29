import { Link } from "react-router";
import { motion } from "motion/react";

import "./uiComponent.css";

const Button = ({ children, role = "route", handleClick }) => {
    if (role === "route") {
        return <motion.button
            variants={{ bounce: { scale: 1.1 } }}
            whileHover="bounce"
            className="action-button">
            <Link to="/challenges"

            >{children}</Link>
        </motion.button>
    }
    return <motion.button
        variants={{ bounce: { scale: 1.1 } }}
        whileHover="bounce"
        whileTap={{ scale: 1.2 }}
        transition={{ type: "spring", stiffness: 300 }}
        onClick={handleClick}
        className="action-button"
    >
        {children}
    </motion.button>
}
export default Button