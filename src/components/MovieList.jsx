import { Link } from "react-router-dom"

const MovieList = ({movies}) => {
    

    return (
    <>
  
            {movies.map(({ id, original_title }) => {
                return (
                    
                    <li key={id}>
                        <Link to={`/movies/:${id}`}>
                        { original_title }
                        </Link>    
                    </li>
                )
            })} 
            </>
)
}

export default MovieList;