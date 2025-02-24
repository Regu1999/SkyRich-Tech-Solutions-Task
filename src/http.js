import { QueryClient } from "@tanstack/react-query";

const api_key = import.meta.env.VITE_OMDB_API_KEY;
let apiUrl = `https://omdbapi.com/?apikey=${api_key}&`;

export const queryClient = new QueryClient();

export const movieSearchResult = async (movieName, type = "all") => {
    
    if (movieName=="" || !movieName) {
        movieName="marvel"
    }
    try {
        let url = apiUrl;
    if (type === "all") {
        url += 's=' + movieName;
    } else {
        url += 's=' + movieName + '&type=' + type;
    }
    const response = await fetch(url);

    if (!response.ok) {
        throw { message: 'Unable to find data, Try again later  ' };
    }
    const movieResult = await response.json();
    if (movieResult.Response === 'False') {
        throw { message: "Movies Not Found" }
    }
    return movieResult.Search
    } catch (error) {
        throw { message: 'Unable to find data, Try again later  ' }
    }
}

export const viewMovie = async (imdb) => {
    try {
        const response = await fetch(apiUrl + 'i=' + imdb);
        if (!response.ok) {
            throw { message: 'Unable to find data ' };
        }
        const movieData = await response.json();

        if (movieData.Response === 'False') {
            throw { message: "Movie Not Found" }
        }

        return movieData
    } catch (error) {
        throw { message: "Movie Not Found" }
    }
}