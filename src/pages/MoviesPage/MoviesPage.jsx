import { useEffect, useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar.jsx"
import MovieList from "../../components/MovieList/MovieList.jsx"
import {fetchMoviesWithQuery} from "../../fetch-api.js"
import { useSearchParams } from "react-router-dom";
const MoviesPage = () => {
    
    
    const [movies, setMovies] = useState([]);
    const [loader, setLoader] = useState(false);
    const [error, setError] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();
    const movieParam = searchParams.get("movie") ?? "";

    useEffect(() => {
      
            
        async function fetchMovies() {
            try {
                    
                setLoader(true);
                setError(false);
                    
                const data = await fetchMoviesWithQuery(movieParam);
                setMovies(data.data.results);
            }
            catch {
                setError(true)
            }
            finally {
                setLoader(false)
            }
        }
        if (movieParam !== "") {
            fetchMovies()
        }
    }, [movieParam]);
    

    const changeQueryAndParam = (inputValue) => {

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