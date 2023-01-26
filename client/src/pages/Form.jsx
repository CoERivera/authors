import { useLocation } from "react-router-dom";
import LinkTo from "../components/LinkTo";

function Form() {
  const location = useLocation();

  return (
    <div>
      <LinkTo />
      {location.pathname === "/new"?
      <h2>Add a new author:</h2>:
      <h2>Edit this author:</h2>}
    </div>
  )
}

export default Form