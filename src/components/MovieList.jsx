import { Link } from "react-router-dom"
import css from "./MovieList.module.css"
const MovieList = ({movies}) => {
    console.log(movies)
    return (
        <>
            <ul className={css.movieList}>
                
            {movies.map(({ id, original_title, poster_path }) => {
                const state = { id };
                
                return (
                    
                    <li className={css.movieListElement} key={id}>
                        <Link to={`/movies/${id}`} state={state}>
                            <img src={poster_path} alt={original_title} />
                            <p className={css.title}>{original_title }</p>
                        </Link>    
                    </li>
                )
            })} 
            </ul>
            </>
)
}

export default MovieList;