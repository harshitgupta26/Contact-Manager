import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Header = (props) => {
  const { branding } = props;
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
        <div className="container">
          <a href="/" className="navbar-brand">
            {branding}
          </a>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <i className="fas fa-home"></i>HOME
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact/add" className="nav-link">
              <i className="fas fa-plus"></i>ADD
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
              <i className="fas fa-question"></i>ABOUT
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

Header.defaultProps = {
  branding: "Contact Manager",
};

//TypeChecking
Header.propTypes = {
  branding: PropTypes.string.isRequired,
};

export default Header;
