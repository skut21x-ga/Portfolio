import React from "react";
import abstract from "./assets/abstract-small.png";

class intro extends React.Component {
  render() {
    return (
      <div>
        <div className="intro-overlay"></div>
        <div
          className="intro-background"
          style={{ backgroundImage: `url(${abstract})` }}
        >
          <a className="intro-name">Scott Kutler</a>
          <a className="intro-subheading">Full Stack Engineer</a>
        </div>
      </div>
    );
  }
}

export default intro;
