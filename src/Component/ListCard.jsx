import { Link } from "react-router";
import { motion } from "motion/react";

const ListCard=()=>{
    return <motion.li
        variants={{
            hidden: {
                opacity: 0,
                y: 20
            },
            visible: {
                opacity: 1,
                y: 0
            }
        }}
        transition={{ stiffness: 'spring' }}
    >
        <Link to="viewMovie">
            <img className="card-shaddow" src="https://m.media-amazon.com/images/M/MV5BNzQxNTIyODAxMV5BMl5BanBnXkFtZTgwNzQyMDA3OTE@._V1_QL75_UX190_CR0,0,190,281_.jpg" alt="moon light" />
            <p>Moon light</p>
            <p>2016 ‧ Romance/Drama</p>
        </Link>
    </motion.li>
}
export default ListCard