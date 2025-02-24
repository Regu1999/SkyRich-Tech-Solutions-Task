import { Link } from "react-router";
import { motion } from 'motion/react';

import { viewMovie, queryClient,movieSearchResult } from "../http.js";

const MovieCard = ({movieData}) => {
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
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), URL(${movieData.Poster})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: '70%',
                backgroundPosition: "center",
            }}
        ></div>
        <div className="movie-details">
            <div>
                <h1>{movieData.Title}</h1>
                <p>
                    {movieData.Plot}
                </p>
                <h3>{movieData.Year} ‧ {movieData.Genre&&movieData.Genre}</h3>
                <h3>{movieData.Runtime} , IMDb - {movieData.imdbRating}</h3>
                <Link to="../" style={{ color: 'black' }}>Back</Link>
            </div>
            <img className="card-shaddow" src={movieData.Poster} alt={movieData.Title} />
        </div>
    </motion.div>
}

export default MovieCard

