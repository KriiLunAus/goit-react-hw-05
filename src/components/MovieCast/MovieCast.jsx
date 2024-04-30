import {  useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import { fetchMovieCast } from "../../fetch-api";
import css from "./MovieCast.module.css"

export default function  MovieCast  () {
    const [cast, setCast] = useState(null); 
    const [loader, setLoader] = useState(false);
    const [error, setError] = useState(false);

    const movieId = useParams();    
useEffect(() => {
        
        
        async function fetchCast() {
            try {

                setError(false);
                setLoader(true);
                const cast = await fetchMovieCast(movieId.movieId) 
                setCast(cast);
            } catch (error){
                setError(true)
            }
            finally{
                setLoader(false)
            }
        }
        fetchCast()
    
},[movieId.movieId])


if (cast ) {
        return (
            <>
             <ul className={css.castList}>
                {cast.map(castMember => {
                    return (
                        
                                <li  key={castMember.id}>
                                    <img src={`https://image.tmdb.org/t/p/w200/${castMember.profile_path}`} alt={castMember.name} />
                                    <p>Name: {castMember.original_name}</p>
                                    <p>Role: {castMember.character}</p>
                                </li>
                    )
                })}
                </ul>
             
            </>
        )
} else {
    return (
        <>
        {loader && <p>Loading data, please wait .... </p>}
        {error && <p>Oops, something went wrong!!!</p>}
        </>
    )
    }
}
