import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Navbar({ userFullName }) {
  return (
    <nav className="container flex justify-between mx-auto">
      <Link to="/portfolio/">{userFullName}</Link>
      <ul className="flex">
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
