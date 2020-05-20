import React from "react";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import NavBar from "./NavBar";
import MyWork from "./MyWork";
import { Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="portfolio-header">
          <NavBar></NavBar>
        </div>
        <div>
          <ul>
            <li>
              Contents
              <Home></Home>
            </li>
            <li>
              <About></About>
            </li>
            <li>
              <Contact></Contact>
            </li>
          </ul>
        </div>
        <Route path="/" exact component={Home} />
        <Route path="/About" component={About} />
        <Route path="/MyWork" component={MyWork} />
        <Route path="/Contact" component={Contact} />

        {this.props.children}
      </div>
    );
  }
}
export default App;
