import { IoSearch } from "react-icons/io5";

const MovieHeader = () => {
    return <div className='search-container'>
        <div className='filter'>
            <div>
                <input type="radio" id='All' name='moviesList' value="All" defaultChecked />
                <label htmlFor="All">All</label>
            </div>
            <div>
                <input type="radio" id='movie' name='moviesList' value="movies" />
                <label htmlFor="movie">Movies</label>
            </div>
            <div>
                <input type="radio" id='tv-series' name='moviesList' value="series" />
                <label htmlFor="tv-series">Tv Series</label>
            </div>
        </div>
        <div className='search-filter'>
            <IoSearch className="searchIcon" />
            <input type="search" placeholder='Search here' />
        </div>
    </div>
}
export default MovieHeader