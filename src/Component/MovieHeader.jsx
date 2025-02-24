import { useContext } from "react";
import { IoSearch } from "react-icons/io5";

import MovieContext from "./context/MovieContext";
const MovieHeader = () => {
    const { saveSearchData, changeType } = useContext(MovieContext);

    const handleSearchResult = (event) => {
        setTimeout(() => {
            saveSearchData(event.target.value);
        }, 1000);
    }
    const handleMovieType =(event)=>{
        changeType(event.target.value);
        
    }
    return <div className='search-container'>
        <div className='filter'>
            <div>
                <input type="radio" id='All' onChange={handleMovieType} name='movie-type' value="all" defaultChecked />
                <label htmlFor="All">All</label>
            </div>
            <div>
                <input type="radio" id='movie' onChange={handleMovieType} name='movie-type' value="movie" />
                <label htmlFor="movie">Movies</label>
            </div>
            <div>
                <input type="radio" id='tv-series' onChange={handleMovieType} name='movie-type' value="series" />
                <label htmlFor="tv-series">Tv Series</label>
            </div>
        </div>
        <div className='search-filter'>
            <IoSearch className="searchIcon" />
            <input type="search" placeholder='Search here' onChange={handleSearchResult} />
        </div>
    </div>
}
export default MovieHeader