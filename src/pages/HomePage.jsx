import MovieList from "../components/MovieList";
import { fetchTrendingMovies } from "../fetch-api.js"
import { useEffect, useState } from "react";



const HomePage = () => {
    const [movies, setMovies] = useState([]);
    const [loader, setLoader] = useState(false);
    const [error, setError] = useState(false);

 useEffect(() => {
        async function fetchMovies() { 
            try {

                setLoader(true);
                setError(false);

                const data = await fetchTrendingMovies();
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
    },[])
console.log(movies)

    return (
        <>
            
            
            <MovieList movies={movies} />
            {loader && <p>Loading, please wait ...</p>}
            {error && <p>Oops, something went wrong. Try another request!!!</p> }
        </>
    )
}

export default HomePage;