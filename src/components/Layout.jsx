import PropTypes from "prop-types";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function Layout({ userFullName }) {
  return (
    <>
      <Navbar userFullName={userFullName} />
      <Outlet />
    </>
  );
}

Layout.propTypes = {
  userFullName: PropTypes.string.isRequired,
};

export default Layout;
