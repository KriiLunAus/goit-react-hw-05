import { useEffect, useState } from "react";
import {fetchMoviesById} from "../fetch-api.js"
import { useParams } from "react-router-dom";

export function MovieDetailsPage () {


    const movieId = useParams();


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
            <img src={movieData.poster_path} alt={movieData.title} />
            <h2>{movieData.original_title}</h2>
            <div>Overview{movieData.overview}</div>
            <ul> 
                <li>Budget:{movieData.budget}</li>
                <li>Revenue: {movieData.revenue}</li>
            </ul>
               <div> Genres{movieData.genres.map((genre) => { return <li key={genre.id}>{genre.name}</li>})}</div>
        </>
    )
}

