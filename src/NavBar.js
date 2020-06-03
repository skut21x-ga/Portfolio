import React from "react";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
  render() {
    return (
      <div className="NavBar">
        <div className="navbar-component-container">
          <div className="navbar-component-links nav-home">
            <a href="/#Home">
              <a className="navbar-component-links">Home</a>
            </a>
          </div>{" "}
          <div className="navbar-component-links nav-exp">
            <a href="/#Experience">
              <a className="navbar-component-links">Experience</a>
            </a>{" "}
          </div>{" "}
          <div className="navbar-component-links nav-skills">
            <a href="/#Skills">
              <a className="navbar-component-links">Skills</a>
            </a>{" "}
          </div>{" "}
          <div className="navbar-component-links nav-portfolio">
            <a href="/#Portfolio">
              <a className="navbar-component-links">Portfolio</a>
            </a>
          </div>{" "}
          <div className="navbar-component-links nav-contact">
            <a href="/#Contact">
              <a className="navbar-component-links">Contact</a>
            </a>{" "}
          </div>
        </div>
      </div>
    );
  }
}
export default NavBar;
