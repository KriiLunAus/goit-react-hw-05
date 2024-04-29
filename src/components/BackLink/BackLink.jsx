import { Link } from "react-router-dom";
import { CgArrowLongLeftR } from "react-icons/cg";
import css from "./BackLink.module.css"

export default function BackLink({to}) {
    return (
        <Link className={css.link} to={to} >
          <CgArrowLongLeftR color="teal"  size={50} />  Return to movies
        </Link>
    )
}