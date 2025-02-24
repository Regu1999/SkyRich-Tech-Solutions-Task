import { useQuery } from "@tanstack/react-query";
import { motion } from "motion/react";
import { useContext } from "react";

import { movieSearchResult } from "../http.js"
import ListCard from "./ListCard.jsx";
import MovieContext from "./context/MovieContext.jsx";


const MovieContainer = () => {
    const { movieType, searchResult} = useContext(MovieContext)
    let content;

    const { data: movies, isError, error, isPending } = useQuery({
        queryKey: ['movies', { movieName: searchResult, type:movieType }],
        queryFn: () => movieSearchResult(searchResult, movieType),
        staleTime: 500000
    })

    if (isError) {
        content = <h1>{error.message || "No data found"}</h1>
    }

    if (isPending) {
        content = <h1>Loading....</h1>
    }

    if (movies) {
        content = movies.map(data => {
            return <ListCard key={data.imdbID}
                title={data.Title}
                year={data.Year}
                poster={data.Poster}
                type={data.Type}
                imdbID={data.imdbID}
            />
        })
    }

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
            {content}
        </motion.ul>
    </div>
}

export default MovieContainer