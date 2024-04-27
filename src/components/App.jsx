import Navigation from "./Navigation.jsx";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage.jsx";
import MoviesPage from "../pages/MoviesPage.jsx";
import { MovieDetailsPage } from "../pages/MovieDetailsPage.jsx"
import NotFoundPage from "../pages/NotFoundPage.jsx";
import {MovieCast} from "./MovieCast.jsx";
import MovieReviews from "./MovieReviews.jsx";

function App() {


    return (
        <>
            <Navigation />

        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/movies" element={<MoviesPage />} />
            <Route path="/movies/:movieId" element={<MovieDetailsPage />}>   
                <Route path="cast" element={<MovieCast />} />
                <Route path="reviews" element={<MovieReviews/>} />
            </Route>
            <Route path="*" element={ <NotFoundPage />} />    
        </Routes>   

        </>

    )
}

export default App;