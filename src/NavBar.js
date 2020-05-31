import React from "react";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
  render() {
    return (
      <div className="navbar-component-container">
        <div className="navbar-component-links">
          <Link to="/">
            <a className="navbar-component-links">Home</a>
          </Link>
        </div>{" "}
        <div className="navbar-component-links">
          <Link to="/About">
            <a className="navbar-component-links">About Me</a>
          </Link>{" "}
        </div>{" "}
        <div className="navbar-component-links">
          <Link to="/MyWork">
            <a className="navbar-component-links">My Work</a>
          </Link>{" "}
        </div>{" "}
        <div className="navbar-component-links">
          <Link to="/Contact">
            <a className="navbar-component-links">Contact Me</a>
          </Link>
        </div>
      </div>
    );
  }
}
export default NavBar;
