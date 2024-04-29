import Navigation from "../Navigation/Navigation.jsx";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage.jsx";
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const HomePage = lazy(() => import('../../pages/HomePage/HomePage.jsx'));
const MoviesPage = lazy(() => import('../../pages/MoviesPage/MoviesPage.jsx'));
const MovieDetailsPage  = lazy(() => import('../../pages/MovieDetailsPage/MovieDetailsPage.jsx'));
const MovieCast = lazy(() => import('../MovieCast/MovieCast.jsx'));
const MovieReviews = lazy(() => import('../MovieReviews/MovieReviews.jsx'));



function App() {


    return (
        <>
    <Navigation />
        <Suspense fallback={null}>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/movies" element={<MoviesPage />} />
                <Route path="/movies/:movieId" element={<MovieDetailsPage />}>   
                    <Route path="cast" element={<MovieCast />} />
                    <Route path="reviews" element={<MovieReviews/>} />
                </Route>
                <Route path="*" element={ <NotFoundPage />} />    
            </Routes>   
        </Suspense>   

        </>

    )
}

export default App;