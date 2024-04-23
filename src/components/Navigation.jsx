
import  Home  from "../pages/Home.jsx"
import  Movies  from "../pages/Movies.jsx"
import { NavLink, Route, Routes } from "react-router-dom";
const Navigation = () => {
    
    return (
    
    <>
    <nav>
        <NavLink to="/">
        Home
        </NavLink>
        <NavLink to="/movies">
        Movies
        </NavLink>
    </nav>
    
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
        </Routes>   


    </>
)

}

export default Navigation;
