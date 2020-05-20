import React from "react";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
  render() {
    return (
      <div>
        <Link to="/">
          <a>Home Link</a>
        </Link>
        <Link to="/About">
          <a>About Link</a>
        </Link>{" "}
        <Link to="/MyWork">
          <a>My Work Link</a>
        </Link>{" "}
        <Link to="/Contact">
          <a>Contact</a>
        </Link>
      </div>
    );
  }
}
export default NavBar;
