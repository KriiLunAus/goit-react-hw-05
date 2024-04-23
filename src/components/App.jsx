import Navigation from "./Navigation.jsx";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage.jsx";
import MoviesPage from "../pages/MoviesPage.jsx";
import MovieDetailsPage from "../pages/MovieDetailsPage.jsx"
function App() {

  

    return (
        <>
            <Navigation />

        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/movies" element={<MoviesPage />} />
                <Route path="/movies/:movieId" element={<MovieDetailsPage /> } />
        </Routes>   

        </>
    )
}

export default App;