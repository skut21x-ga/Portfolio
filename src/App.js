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
  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }
  render() {
    return (
      <div>
        <div className="portfolio-header">
          <NavBar></NavBar>
        </div>
        <a name="Home">
          <Route path="/" exact component={Home} />
        </a>
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
