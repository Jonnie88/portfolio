import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Navbar({ userFullName }) {
  return (
    <nav className="container flex justify-between mx-auto py-11">
      <Link className="font-Comfortaa font-bold font-lg" to="/portfolio/">
        {userFullName}
      </Link>
      <ul className="flex gap-7 font-Raleway font-medium font-lg">
        <li>
          <Link to="/portfolio/about">About</Link>
        </li>
        <li>
          <Link to="/portfolio/projects">Projects</Link>
        </li>
        <li>
          <Link to="/portfolio/contacts">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

Navbar.propTypes = {
  userFullName: PropTypes.string.isRequired,
};
export default Navbar;
