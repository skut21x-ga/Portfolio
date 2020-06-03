import React from "react";
import cloud from "./assets/TranspCloud.png";
import scottkutler from "./assets/scottkutler.png";
import { Link } from "react-router-dom";
// import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import WorkPanel from "./WorkPanel";

class About extends React.Component {
  render() {
    return (
      <div className="about-page">
        <div class="aboutme-content">
          <div className="aboutme-box">
            <img className="scottkutler" src={scottkutler} />
            <h4 className="resume-aboutme">
              <div className="c23">
                Scott Kutler<br></br>
              </div>
              <div className="c24"> Full-Stack Engineer & Product Manager</div>
              <br></br>I am a solution-oriented self-starter with a focus on
              software engineering and product management. With my upbeat
              personality and ability to problem-solve under pressure, I can
              serve as a great addition to any team. I'm looking for a
              collaborative and supportive environment with employees that care
              about and actively work towards positive social impact.
            </h4>{" "}
          </div>
        </div>
        <a name="Experience">
          <br></br>{" "}
          <div className="WorkPanel-container">
            {" "}
            <h1 className="experience-header">Experience</h1>
            <WorkPanel></WorkPanel>{" "}
            <div class="resume-flex-grid">
              <Link to="/Resume">
                <h5 className="resume-button">View Full Resume</h5>{" "}
              </Link>
              <p></p>
              <br></br>
              <a href="https://github.com/skut21x-ga/portfolio/raw/master/src/assets/ScottKutler-SoftwareEngineerResume.pdf">
                <h5 className="resume-button">Download Resume (.PDF)</h5>
              </a>{" "}
              <br></br> <br></br>
            </div>
          </div>{" "}
          <a name="Skills"> </a>
          <div className="skills-spacer"></div>
          <br></br>
        </a>{" "}
        <h1 className="skill-header">Skills</h1>
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
              Social Media / Branding
              <br />
            </h5>{" "}
          </div>
        </div>
        <a name="Portfolio"> </a>
      </div>
    );
  }
}
export default About;
