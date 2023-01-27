import { useLocation, Link, useNavigate } from "react-router-dom";
import LinkTo from "../components/LinkTo";
import { useState, useEffect } from "react";
import axios from "axios";

function Form() {
  const location  = useLocation().pathname;
  const id  = location.slice(9);
  const navigate = useNavigate();
  const [formState, setFormState] = useState({ "name": '' })
  const [pageData, setPageData] = useState({
    header: "Add a new author:",
    submit: "Add"
  })
  
  const handleSubmit = (e) => {
    e.preventDefault();

    if (location === '/new') {
      axios
        .post("http://localhost:8000/api/authors", formState)
        .then(() => navigate('/'))
        .catch((err) => console.log(err));
    }
    else {
      axios
        .put(`http://localhost:8000/api/authors/${id}`, formState)
        .then(() => navigate('/'))
        .catch((err) => console.log(err));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value
    });
  };

  useEffect(() => {
    if (location !== '/new') {
      setPageData({
        header: "Edit this author:",
        submit: "Edit"
      })
      const controller = new AbortController();
      axios
        .get(`http://localhost:8000/api/authors/${id}`, { signal: controller.signal })
        .then(res => setFormState(res.data))
        .catch(err => console.log(err));
      return () => controller.abort();
    }
  }, [location, id]);

  return (
    <div>
      {formState &&
        <>
          <LinkTo />
          <div className="card mb-3 form-group">
            <h2 className="card-header">{pageData.header}</h2>
            <form onSubmit={handleSubmit}>
              <div className="card-body">
                <h5 htmlFor="name" className="card-title">Name:</h5>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="form-control"
                  value={formState.name}
                  onChange={handleChange}
                />
              </div>
              <div className="card-footer text-muted d-flex justify-content-end">
                <button
                  type="submit"
                  className="btn btn-primary mr-3"
                >
                  {pageData.submit}
                </button>
                <Link to='/'>
                  <button className="btn btn-info">
                    Cancel
                  </button>
                </Link>
              </div>
            </form>
          </div>
        </>}
    </div>
  )
}

export default Form