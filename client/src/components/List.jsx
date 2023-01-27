import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

function List() {
    const [authors, setAuthors] = useState([]);
    const [loaded, setLoaded] = useState(false);

    const handleDelete = (id) => {
        axios
            .delete(`http://localhost:8000/api/authors/${id}`)
            .then((res) => {
                console.log(res.data);
                setLoaded(!loaded)
            })
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        const controller = new AbortController();
        axios
            .get("http://localhost:8000/api/authors", { signal: controller.signal })
            .then((res) => {
                setAuthors(res.data);
                setLoaded(!loaded);
            })
            .catch((err) => console.log(err));
        return () => controller.abort();
    }, [loaded]);

    return (
        authors.length > 0 ?
            <div>
                <h2>
                    We have quotes by:
                </h2>
                <table className="table table-striped table-bordered mt-5">
                    <thead>
                        <tr>
                            <th scope="col">Author</th>
                            <th scope="col">Actions Available</th>
                        </tr>
                    </thead>
                    <tbody>
                        {authors && authors.map(author => {
                            return (
                                <tr key={author._id}>
                                    <td className='mt-6'>{author.name}</td>
                                    <td>
                                        <Link to={`/authors/${author._id}`}>
                                            <button className='btn btn-sm btn-warning mr-2'>
                                                Edit
                                            </button>
                                        </Link>|
                                        <button className='btn btn-sm btn-danger ml-2' onClick={() => handleDelete(author._id)}>
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div> :
            <div>
                <h2>
                    There are no authors! Add a new one now!
                </h2>
            </div>
    )
}

export default List