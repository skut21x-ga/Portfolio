import React from "react";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
  render() {
    return (
      <div className="navbar-component-container">
        <div className="navbar-component-links">
          <Link to="/">
            <a>Home</a>
          </Link>
        </div>{" "}
        <div className="navbar-component-links">
          <Link to="/About">
            <a>About Me</a>
          </Link>{" "}
        </div>{" "}
        <div className="navbar-component-links">
          <Link to="/MyWork">
            <a>My Work</a>
          </Link>{" "}
        </div>{" "}
        <div className="navbar-component-links">
          <Link to="/Contact">
            <a>Contact</a>
          </Link>
        </div>
        <div className="faceboook-button">
          <img className="facebook-graphic"></img>
        </div>
      </div>
    );
  }
}
export default NavBar;
