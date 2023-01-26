import { useLocation, Link } from "react-router-dom";

function LinkTo() {
    const location = useLocation();

    return (
        location.pathname === '/' ?
            <Link to="/new">
                <button className="btn btn-info my-4">
                    New Author
                </button>
            </Link> :
            <Link to="/">
                <button className="btn btn-info my-4">
                    Home
                </button>
            </Link>
    );
}
export default LinkTo;