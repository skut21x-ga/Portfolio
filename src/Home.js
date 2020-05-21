import React from "react";
import Contact from "./Contact";
import About from "./About";
import Intro from "./Intro";
import "./App.css";

class Home extends React.Component {
  render() {
    return (
      <div>
        <Intro></Intro>
        <ul>
          <li>Home Page</li>
          <li>
            <About></About>
          </li>
          <li>
            <Contact></Contact>
          </li>
        </ul>{" "}
      </div>
    );
  }
}
export default Home;
