import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css"
import clsx from "clsx";



const buildLinkClass = ({ isActive }) => {
  return clsx(css.navBtns, isActive && css.active);
};


const Navigation = () => {
    
    return (
    <>
    <nav className={css.linksWrapper}>
        <NavLink className={buildLinkClass}  to="/">
        Home
        </NavLink>
        <NavLink className={buildLinkClass} to="/movies">
        Movies
        </NavLink>
    </nav>
    
        

    </>
)

}

export default Navigation;
