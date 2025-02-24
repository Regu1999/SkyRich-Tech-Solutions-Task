import { Outlet } from 'react-router';
import { useState } from 'react';

import MovieHeader from '../Component/MovieHeader';
import "../assets/styles/movie.css";
import MovieContext from '../Component/context/MovieContext';

const Movies = () => {
    const [searchResult, setSearchResult] = useState();
    const [movieType, setMovieType] = useState();

    const saveSearchData = (value) => {
        setSearchResult(value)
    }
    const changeType = (value) => { 
        setMovieType(value)
    };

    const movieContextData = {
        movieType,
        searchResult,
        saveSearchData,
        changeType
    }
    return <>
        <div className="flex-container">
            <div className="container">
                <MovieContext.Provider value={movieContextData}>
                    <MovieHeader />
                    <Outlet />
                </MovieContext.Provider>
            </div>
        </div>
    </>
}

export default Movies