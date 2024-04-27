import { useEffect, useState } from "react";
import {fetchMoviesById}  from "../fetch-api.js"
import { fetchMovieCast } from "../fetch-api.js";
import { useParams} from "react-router-dom";
import MovieDetails from "../components/MovieDetails.jsx";

export function MovieDetailsPage () {


    const movieId = useParams();


    const [movieData, setMovieData] = useState(null);
    const [loader, setLoader] = useState(false);
    const [error, setError] = useState(false);
    useEffect(() => {
        
        
        async function fetchMovie() {
            try {

                setError(false);
                setLoader(true);
                const movie = await fetchMoviesById(movieId.movieId)
                setMovieData(movie.data.data);
            } catch {
                setError(true)
            }
            finally{
                setLoader(false)
            }
        }
        fetchMovie()
    
},[movieId])

    
  return (
      <>
        {movieData && <MovieDetails movieData={movieData} />}
        {loader && <p>Loading data, please wait .... </p>}
        {error && <p>Oops, something went wrong.</p>}
        </>
    )
}

