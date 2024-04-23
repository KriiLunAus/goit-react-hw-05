import { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar"
import MovieList from "../components/MovieList"
import fetchMoviesWithQuery from "../fetch-api";

const MoviesPage = () => {
    
    
    const [movies, setMovies] = useState([]);
    const [loader, setLoader] = useState(false);
    const [error, setError] = useState(false);
    const [query, setQuery] = useState("");

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
        fetchMovies()
    },[query])

    const handleSubmit = (inputValue) => {
        setQuery(inputValue.query)
    }
    return (
        <>
        <SearchBar onSubmit={handleSubmit} />
            
            <MovieList movies={ movies } />

            
            {loader && <p>Loading, please wait ...</p>}
            {error && <p>Oops, something went wrong. Try another request!!!</p> }
        </>
    )
}

export default MoviesPage;