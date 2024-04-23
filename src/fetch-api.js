import axios from "axios";


const apiKey = "184a6349bb564ba27027edaf64380325"; 


const fetchConfiguration = async () => {
    const response = await axios.get(`https://api.themoviedb.org/3/configuration?api_key=${apiKey}`);
    return response.data;
}




const fetchMoviesWithQuery = async (query) => {

    const config = await fetchConfiguration()

    const baseUrl = config.images.base_url;


    const response = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${apiKey}`)

    const responseWithConfig = {
        data: {
            ...response.data,
            results: response.data.results.map(movie => ({
                ...movie,
                poster_path: `${baseUrl}${movie.poster_path}`
            }))
        }

    } 


    return responseWithConfig;
}


export default fetchMoviesWithQuery;



 