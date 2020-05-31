import React from "react";
import Home from "./Home";
import Contact from "./Contact";
import ContactConfirm from "./ContactConfirm";
import About from "./About";
import Resume from "./Resume";
import NavBar from "./NavBar";
import MyWork from "./MyWork";
import Intro from "./Intro";
import { Route } from "react-router-dom";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="portfolio-header">
          <NavBar></NavBar>
        </div>
        <Route path="/" exact component={Home} />
        <Route path="/Intro" exact component={Intro} />
        <Route path="/About" component={About} />{" "}
        <Route path="/MyWork" component={MyWork} />
        <Route path="/Contact" component={Contact} />
        <Route path="/ContactConfirm" component={ContactConfirm} />
        <Route path="/ContactConfirm?" component={ContactConfirm} />
        <Route path="/Resume" component={Resume} />
        {/* 
        {this.props.children} */}
      </div>
    );
  }
}
export default App;
