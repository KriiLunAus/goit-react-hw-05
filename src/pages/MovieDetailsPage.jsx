import { useParams } from "react-router-dom";
const MovieDetailsPage = ({ id }) => {

    const params = useParams();

console.log(params)
    return (
    <>
        <p>Something</p>

    </>
    )
}

export default MovieDetailsPage;