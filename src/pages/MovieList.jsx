import { motion } from "motion/react";
import ListCard from "../Component/ListCard";


const MovieList = () => {
    return <div className='list-container'>
        <h1>Movies</h1>

        <motion.ul
            variants={{
                hidden: {
                    opacity: 0
                },
                visible: {
                    opacity: 1
                }
            }}
            transition={{
                staggerChildren: 0.05
            }}
            initial="hidden"
            animate="visible"
        >
           <ListCard />
           <ListCard />
           <ListCard />
           <ListCard />
           <ListCard />
           <ListCard />
           <ListCard />
           <ListCard />
           <ListCard />
           <ListCard />
           <ListCard />

        </motion.ul>
    </div>
}

export default MovieList