import { useLocation, Link } from "react-router-dom";
import { useState, useEffect } from "react";

function LinkTo() {
    const location = useLocation().pathname;
    const [link, setLink] = useState('');

    useEffect(() => {
        if (location === '/') setLink(<Link to="/new"><button className="btn btn-info my-4">New Author</button></Link>);
        else setLink(<Link to="/"><button className="btn btn-info my-4">Home</button></Link>);
    }, [location]);

    return (
        <div>{link}</div>
    );
}
export default LinkTo;