import React from "react";
import Contact from "./Contact";
import About from "./About";
import Intro from "./Intro";
import "./App.css";
import MyWork from "./MyWork";

class Home extends React.Component {
  render() {
    return (
      <div>
        <Intro></Intro>
        <h3></h3>
        <h3>
          <About></About>
        </h3>
        <h3>
          <MyWork></MyWork>
        </h3>
        <h3>
          <Contact></Contact>
        </h3>
      </div>
    );
  }
}
export default Home;
