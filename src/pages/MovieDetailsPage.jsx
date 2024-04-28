import { useEffect, useRef, useState } from "react";
import {fetchMoviesById}  from "../fetch-api.js"
import { useLocation,  useParams} from "react-router-dom";
import MovieDetails from "../components/MovieDetails.jsx";
import BackLink from "../components/BackLink.jsx"
export default function MovieDetailsPage () {


    const movieId = useParams();

    const location = useLocation();
    const backLinkUrlRef = useRef(location.state ?? "/movies");

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
        <BackLink to={backLinkUrlRef.current} />
        {movieData && <MovieDetails movieData={movieData} />}
        {loader && <p>Loading data, please wait .... </p>}
        {error && <p>Oops, something went wrong.</p>}
        </>
    )
}

