import { useEffect, useState } from "react";
import {fetchMoviesById} from "../fetch-api.js"
import { useParams, useLocation } from "react-router-dom";
import BackLink from "../components/BackLink.jsx";

export function MovieDetailsPage () {


    const movieId = useParams();
    const location = useLocation();
    const backLinkHref = location.state ?? "/movies";
console.log(location.state)

    const [movieData, setMovieData] = useState([]);
    const [loader, setLoader] = useState(false);
    const [error, setError] = useState(false);
    useEffect(() => {
        
        
        async function fetchMovie() {
            try {

                setError(false);
                setLoader(true);

                const movie = await fetchMoviesById(movieId.movieId)
                setMovieData(movie.data.data)
            } catch {
                setError(true)
            }
            finally{
                setLoader(false)
            }
        }
        fetchMovie()
    
},[movieId])

console.log(movieData)

    
    if (movieData.length >= 0) {
        return (
            <>
                {loader && <p>Loading data, please wait .... </p>}
                {error && <p>Oops, something went wrong.</p>}
            </>
        )
    }
    

    return (
        <>
            <BackLink location={location} to={backLinkHref}>Back to movies</BackLink>
        <img src={movieData.poster_path} alt={movieData.title} />
        </>
    )
}

