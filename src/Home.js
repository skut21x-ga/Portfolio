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
        <h2 className="aboutme-header">About Me</h2>
        <About></About>{" "}
        <a name="Portfolio">
          <br></br>
          <br></br>
          <h2 className="mywork-header">Work Portfolio</h2>
        </a>
        <MyWork></MyWork>{" "}
        <h2 className="contact-header">Contact Information</h2>
        <Contact></Contact>
      </div>
    );
  }
}
export default Home;
