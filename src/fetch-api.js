import axios from "axios";


const apiKey = "184a6349bb564ba27027edaf64380325"; 
axios.defaults.baseURL = "https://api.themoviedb.org/3"

const fetchConfiguration = async () => {
    const response = await axios.get(`/configuration?api_key=${apiKey}`);
    return response.data;
}




export const fetchMoviesWithQuery = async (query) => {

    const config = await fetchConfiguration()

    const baseUrl = config.images.base_url;


    const response = await axios.get(`/search/movie?query=${query}&api_key=${apiKey}`)

    const responseWithConfig = {
        data: {
            ...response.data,
            results: response.data.results.map(movie => ({
                ...movie,
                poster_path: `${baseUrl}w300${movie.poster_path}`
            }))
        }

    } 


    return responseWithConfig;
}


export const fetchMoviesById = async (id) => {
    
    const config = await fetchConfiguration()

    const baseUrl = config.images.base_url;


    const response = await axios.get(`/movie/${id}`, {
        
        headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxODRhNjM0OWJiNTY0YmEyNzAyN2VkYWY2NDM4MDMyNSIsInN1YiI6IjY2MjdjZDU3Y2I2ZGI1MDE4NmIyMjMxZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FtYNA8ZRc7FYj_CYiqINWrLQPnv0Fnyu2aKCqCe5S10'
            }
        
    })

    const responseWithConfig = {
        data: {
            ...response,
            data: {
                ...response.data,
                poster_path: `${baseUrl}w500${response.data.poster_path}`
            }
        }} 



    

    return responseWithConfig;
}


export const fetchTrendingMovies = async () => {
     const config = await fetchConfiguration()

    const baseUrl = config.images.base_url;


    const response = await axios.get(`/trending/movie/day?api_key=${apiKey}`)

    const responseWithConfig = {
        data: {
            ...response.data,
            results: response.data.results.map(movie => ({
                ...movie,
                poster_path: `${baseUrl}w500${movie.poster_path}`
            }))
        }

    } 


    return responseWithConfig;
}


export const fetchMovieCast = async (id) => {
    
    const response = await axios.get(`/movie/${id}/credits`, {
         headers: {
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxODRhNjM0OWJiNTY0YmEyNzAyN2VkYWY2NDM4MDMyNSIsInN1YiI6IjY2MjdjZDU3Y2I2ZGI1MDE4NmIyMjMxZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FtYNA8ZRc7FYj_CYiqINWrLQPnv0Fnyu2aKCqCe5S10'
            }
    })

    return response.data.cast;
}


export const fetchMovieReviews = async (id) => {
     const response = await axios.get(`/movie/${id}/reviews`, {
         headers: {
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxODRhNjM0OWJiNTY0YmEyNzAyN2VkYWY2NDM4MDMyNSIsInN1YiI6IjY2MjdjZDU3Y2I2ZGI1MDE4NmIyMjMxZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FtYNA8ZRc7FYj_CYiqINWrLQPnv0Fnyu2aKCqCe5S10'
            }
    })

    return response.data.results;
}

 