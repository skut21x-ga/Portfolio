import React from "react";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
  render() {
    return (
      <div className="NavBar">
        <div className="navbar-component-container">
          <div className="navbar-component-links">
            <a href="#Home">
              <a className="navbar-component-links">Home</a>
            </a>
          </div>{" "}
          <div className="navbar-component-links">
            <a href="#RecentExperience">
              <a className="navbar-component-links">Experience</a>
            </a>{" "}
          </div>{" "}
          <div className="navbar-component-links">
            <a href="#Skills">
              <a className="navbar-component-links">Skills</a>
            </a>{" "}
          </div>{" "}
          <div className="navbar-component-links">
            <a href="#Portfolio">
              <a className="navbar-component-links">Work Portofolio</a>
            </a>
          </div>{" "}
          <div className="navbar-component-links">
            <a href="#Contact">
              <a className="navbar-component-links">Contact Me</a>
            </a>{" "}
          </div>
        </div>
      </div>
    );
  }
}
export default NavBar;
