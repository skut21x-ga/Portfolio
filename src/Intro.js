import React from "react";
import abstract from "./assets/abstract-small-wide.png";
import SocialButtons from "./SocialButtons";

class intro extends React.Component {
  render() {
    return (
      <div className="intro-background-color fade-in-fast">
        <div className="intro-overlay"></div>
        <div className="intro-background fade-in-fast">
          <a className="intro-name">Scott Kutler</a>
          <a className="intro-subheading fade-in-fast">Full Stack Engineer</a>
        </div>{" "}
      </div>
    );
  }
}

export default intro;
