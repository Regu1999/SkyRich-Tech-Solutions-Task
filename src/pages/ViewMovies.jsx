import MovieCard from "../Component/MovieCard";
import MovieContainer from "../Component/MovieContainer";
import { useLoaderData, Await } from "react-router";
import { Suspense } from "react";
import { viewMovie, queryClient } from '../http.js'

const ViewMovies = () => {
    const { view } = useLoaderData();

    return <>
        <Suspense fallback={<h1 style={{color: 'yellow', textAlign: 'center'}}>Loading....</h1>}>
            <Await resolve={view}>
                {(movieData) => <MovieCard movieData={movieData} />}
            </Await>
        </Suspense>

        <MovieContainer />

    </>
}
export default ViewMovies

export async function loader({ request }) {

    const url = new URL(request.url);
    const searchParam = url.searchParams.get("imdbID");

    const viewPromise = queryClient.fetchQuery({
        queryKey: ['movies', { imdb: searchParam }],
        queryFn: async () => {
            return viewMovie(searchParam);;
        }
    });
    return { view: viewPromise };
}