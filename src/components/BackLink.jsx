import { Link } from "react-router-dom";

export default function BackLink(to, location) {
    return (
        <Link to={to} state={location}>
            Return
        </Link>
    )
}