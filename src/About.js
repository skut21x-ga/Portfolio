import React from "react";
import cloud from "./assets/wordcloud-small.png";

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
        <div class="about-flex-grid">
          <div class="col1">
            <h4 className="about-h4-left">Front-End</h4>
            <h5 className="about-h5-left">
              HTML <br />
              CSS <br />
              Javascript <br />
              React <br />
              Responsive Design <br />
              Storybook
            </h5>
            <h4 className="about-h4-left">Deployment</h4>
            <h5 className="about-h5-left">
              Git / Github <br />
              Heroku <br />
              Bitbucket <br />
              Netlify <br />
              Amazon AWS <br />
              Firebase <br />
            </h5>
            <h4 className="about-h4-left">Design</h4>
            <h5 className="about-h5-left">
              Final Cut Pro (Certified)
              <br />
              Adobe Photoshop <br />
              Adobe InDesign
              <br />
              Adobe XD
              <br />
              Adobe Premiere
              <br />
              Adobe Muse
              <br />
            </h5>
          </div>
          <div class="col2 about-wordcloud">
            <img className="about-wordcloud" src={cloud} />
          </div>
          <div class="col3">
            <h4 className="about-h4-right">Backend</h4>
            <h5 className="about-h5-right">
              Express.js
              <br />
              Node.js
              <br />
              MongoDB
              <br />
              Python
              <br />
              RESTful API
              <br />
              Django
              <br />
              SQL
              <br />
              PostgreSQL
              <br />
              Peewee
              <br />
            </h5>
            <h4 className="about-h4-right">Project Management</h4>
            <h5 className="about-h5-right">
              Rapid Prototyping
              <br />
              Google Analytics <br />
              Google Play Console
              <br />
              App Store Connect
              <br /> Jira
              <br />
              Trello <br />
            </h5>{" "}
            <h4 className="about-h4-right">Misc. Skills</h4>
            <h5 className="about-h5-right">
              Unix
              <br />
              VS Code <br />
              MS Office (Certified)
              <br />
              Wordpress
              <br />
              Webflow CMS
              <br />
              Socia Media / Branding
              <br />
            </h5>{" "}
          </div>
        </div>
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
