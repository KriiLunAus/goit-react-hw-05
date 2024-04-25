import { Link } from "react-router-dom"

const MovieList = ({movies}) => {
    
    return (
        <>
  
            {movies.map(({ id, original_title }) => {
                const state = { id };
                console.log(state)
                return (
                    
                    <li key={id}>
                        <Link to={`/movies/${id}` } state={state}>
                        { original_title }
                        </Link>    
                    </li>
                )
            })} 
            </>
)
}

export default MovieList;