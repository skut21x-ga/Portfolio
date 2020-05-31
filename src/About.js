import React from "react";

class About extends React.Component {
  render() {
    return (
      <div className="resume-page">
        <h4 className="resume-aboutme">
          I am a solution-oriented self-starter with a focus on software
          engineering and product management. <br></br>With my upbeat
          personality and ability to problem-solve under pressure, I can serve
          as a great addition to any team.
        </h4>
        <div className="resume-embed">
          <embed
            className="resume-container"
            src="https://docs.google.com/document/d/e/2PACX-1vQ9o2yhey4m_9x1YTb00GIEGoYXLaYmOwmFffO982cbdfpNyJD5am4NP6I0t0VZiqeactdeIlcxqMuD/pub?embedded=true"
          ></embed>
        </div>
      </div>
    );
  }
}
export default About;
