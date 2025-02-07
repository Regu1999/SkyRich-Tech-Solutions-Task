import { Link } from "react-router"
import { motion } from 'motion/react'
const MovieCard = () => {
    return <motion.div
        initial={{
            opacity: 0,
            scale: 0
        }}
        animate={{
            opacity: 1,
            scale: 1
        }}
        className='view-container'>
        <div className="blur-background"
            style={{
                background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), URL(https://m.media-amazon.com/images/M/MV5BYzdjMDAxZGItMjI2My00ODA1LTlkNzItOWFjMDU5ZDJlYWY3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg)`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: '70%',
                backgroundPosition: "center",
            }}
        ></div>
        <div className="movie-details">
            <div>
                <h1>Interstellar</h1>
                <p>
                    When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.
                </p>
                <h3>2014 ‧ Sci-fi/Adventure</h3>
                <h3>2h 49m , IMDb - 8.7</h3>
                <Link to="../" style={{color:'black'}}>Back</Link>
            </div>
            <img className="card-shaddow" src="https://m.media-amazon.com/images/M/MV5BYzdjMDAxZGItMjI2My00ODA1LTlkNzItOWFjMDU5ZDJlYWY3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" alt="interstellar" />
        </div>
    </motion.div>
}

export default MovieCard