import Navbar from '../Component/Navbar';
import MovieHeader from '../Component/MovieHeader';
import { Outlet } from 'react-router';
import "../assets/styles/movie.css"
const Movies = () => {
    return <>
        <Navbar />

        <div className="flex-container">
            <div className="container">
                
                <MovieHeader />

                <Outlet />

            </div>
        </div>
    </>

}

export default Movies