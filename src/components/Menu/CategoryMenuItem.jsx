import { Link } from "react-router-dom";

const CategoryMenuItem = ({ path, body }) => {
  return <li>
    <Link to={`/${path}`} className="category-item">{body}</Link>
  </li>
}

export default CategoryMenuItem;