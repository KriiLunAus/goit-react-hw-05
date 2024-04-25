import { Link } from "react-router-dom";

export default function BackLink(to) {
    return (
        <Link to={to} >
            Return
        </Link>
    )
}