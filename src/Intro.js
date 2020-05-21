import React from "react";
import abstract from "./assets/abstract-small.png";

class Intro extends React.Component {
  render() {
    return (
      <div>
        <div className="Intro-Overlay"></div>
        <div
          className="Intro-Background"
          style={{ backgroundImage: `url(${abstract})` }}
        >
          <a className="Intro-Name">Scott Kutler</a>
          <a className="Intro-Subheading">Full Stack Software Engineer</a>
        </div>
      </div>
    );
  }
}

export default Intro;
