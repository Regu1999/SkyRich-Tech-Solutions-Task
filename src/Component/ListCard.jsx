import { Link } from "react-router";
import { motion } from "motion/react";

const ListCard=({title,year, poster, type,imdbID})=>{
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
        <Link to={`/movies/viewMovie?imdbID=${imdbID}`}>
            <img className="card-shaddow" src={poster} alt={title} />
            <p>{title}</p>
            <p>{year} ‧ {type}</p>
        </Link>
    </motion.li>
}
export default ListCard