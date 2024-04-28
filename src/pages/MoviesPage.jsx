import { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar"
import MovieList from "../components/MovieList"
import {fetchMoviesWithQuery} from "../fetch-api.js"
import { useSearchParams } from "react-router-dom";
const MoviesPage = () => {
    
    
    const [movies, setMovies] = useState([]);
    const [loader, setLoader] = useState(false);
    const [error, setError] = useState(false);
    const [query, setQuery] = useState("");

    const [searchParams, setSearchParams] = useSearchParams();
    const movieParam = searchParams.get("movie") ?? "";

    useEffect(() => {
      
            
        async function fetchMovies() {
            try {
                    
                setLoader(true);
                setError(false);
                    
                const data = await fetchMoviesWithQuery(query);
                setMovies(data.data.results);
            }
            catch {
                setError(true)
            }
            finally {
                setLoader(false)
            }
        }
        if (query !== "") {
            fetchMovies()
        }
    }, [query]);
    
useEffect(() => {
        if (movieParam) {
            setQuery(movieParam);
        }
    }, [movieParam]);

    const changeQueryAndParam = (inputValue) => {
        setQuery(inputValue.query)

        searchParams.set("movie", inputValue.query);
        setSearchParams(searchParams);
    }
    return (
        <>
        <SearchBar onSubmit={changeQueryAndParam} value={movieParam}/>
            
            {movies.length > 0 && <MovieList movies={movies}   />}

            
            {loader && <p>Loading, please wait ...</p>}
            {error && <p>Oops, something went wrong. Try another request!!!</p> }
        </>
    )
}

export default MoviesPage;