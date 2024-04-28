import Navigation from "./Navigation.jsx";
import NotFoundPage from "../pages/NotFoundPage.jsx";
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const HomePage = lazy(() => import('../pages/HomePage.jsx'));
const MoviesPage = lazy(() => import('../pages/MoviesPage.jsx'));
const MovieDetailsPage  = lazy(() => import('../pages/MovieDetailsPage.jsx'));
const MovieCast = lazy(() => import('./MovieCast.jsx'));
const MovieReviews = lazy(() => import('./MovieReviews.jsx'));



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