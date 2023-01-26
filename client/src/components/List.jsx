import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';

function List() {
    const [authors, setAuthors] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const controller = new AbortController();
        axios
            .get("http://127.0.0.1:8000/api/authors", { signal: controller.signal })
            .then((res) => {
                setAuthors(res.data);
                setLoaded(true)
            })
            .catch((err) => console.log(err));
        return () => controller.abort();
    }, [loaded]);

    const reversedAuthors = [...authors].reverse();

    return (
        authors.length > 0 ?
            <div>
                <h2>
                    We have quotes by:
                </h2>
                
            </div> :
            <div>
                <h2>
                    There are no authors! Add a new one now!
                </h2>
            </div>
    )
}

export default List