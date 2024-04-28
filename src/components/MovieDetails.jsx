import { NavLink, Outlet, useLocation } from "react-router-dom"
import css from "./MovieDetails.module.css"
import clsx from "clsx";
export default function MovieDetails({ movieData }) {
   

    const buildLinkClass = ({ isActive }) => {
  return clsx(css.additionalInfoBtn, isActive && css.active);
};
    return (
        <>
  <div className={css.movieDataWrapper}>
    <div>
      <img className={css.poster} src={movieData.poster_path} alt={movieData.title} />
    </div>

    <div className={css.info}>
      <h1>{movieData.original_title}</h1>
        <div className={css.infoInner}>
            
        <p className={css.overview}><span>Overview:</span> {movieData.overview}</p>

      <ul> 
        <li>Budget: {movieData.budget}</li>
        <li>Revenue: {movieData.revenue}</li>
      </ul>

            </div>
      <div>
        <h2>Genres:</h2>
        <ul className={css.genreList}>
          {movieData.genres.map((genre) => (
              <li key={genre.id}>{genre.name}</li>
            ))}
        </ul>
        </div>
    
     <div>
      <h2>Additional information</h2> 
      <ul className={css.buttonList}>
        <li>
          <NavLink className={buildLinkClass} to={{ pathname: "cast" }}>Movie cast</NavLink>
        </li>
        <li>
          <NavLink className={buildLinkClass} to="reviews">Reviews for this movie</NavLink>
        </li>
      </ul>
    </div>
    </div>
  </div>

   

    <Outlet />
            </>
);

}