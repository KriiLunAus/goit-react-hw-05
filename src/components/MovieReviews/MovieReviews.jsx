import {  useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import { fetchMovieReviews } from "../../fetch-api";
import css from "./MovieReviews.module.css"
// import { IoPersonCircle } from "react-icons/io5";


export default function MovieReviews() {

    const [reviews, setReviews] = useState(null); 
    const [loader, setLoader] = useState(false);
    const [error, setError] = useState(false);
    const movieId = useParams();    

useEffect(() => {
        
        
        async function fetchReviews() {
            try {

                setError(false);
                setLoader(true);
                const reviewsData = await fetchMovieReviews(movieId.movieId);
                setReviews(reviewsData);
            } catch (error){
                setError(true)
            }
            finally{
                setLoader(false)
            }
        }
        fetchReviews()

    
}, [movieId.movieId])
    

if (reviews) {
        return ( 
            <>
            {reviews.length <=0 && <p>There is no available reviews for this movie.</p>}
            <ul className={css.reviewList}>
                {reviews.map(review => {
                    return ( 
                        <>
                            <li key={review.id}>
                                <p style={{fontSize: "30px"}}>{review.author}</p>
                                <h4>Review:</h4>
                                <p>{review.content }</p>
                            </li>
                        </>
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