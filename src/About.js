import React from "react";
import cloud from "./assets/Wordcloud.png";
import scottkutler from "./assets/scottkutler.png";
// import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import WorkPanel from "./WorkPanel";

class About extends React.Component {
  render() {
    return (
      <div className="about-page">
        <div class="aboutme-content">
          <div className="aboutme-box">
            <img
              alt="scottkutler-photo"
              className="scottkutler"
              src={scottkutler}
            />
            <h4 className="resume-aboutme">
              <div className="c23">
                Scott Kutler<br></br>
              </div>
              <div className="c24">
                {" "}
                Full-Stack Software Develper & Product Manager
              </div>
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
              <a href="https://drive.google.com/file/d/1kAJIuuJM0q1IBeobAwm_6E3_CyDHqrlq/view?usp=sharing">
                <div className="FullResume">
                  <h5 className="resume-button">View Full Resume</h5>{" "}
                </div>
              </a>
              <p></p>
              <a name="Skills"> </a>
              <br></br> <br></br>
            </div>
          </div>
          <div className="skills-spacer"></div>
        </a>{" "}
        <h1 className="skill-header">Skills</h1>
        <div class="about-flex-grid">
          <div class="col1">
            <h4 className="about-h4-left">Front-End</h4>
            <h5 className="about-h5-left">
              <span className="skills-bullet">• </span> HTML <br />
              <span className="skills-bullet">• </span> CSS <br />
              <span className="skills-bullet">• </span> Javascript <br />
              <span className="skills-bullet">• </span> React <br />
              <span className="skills-bullet">• </span> Responsive Design <br />{" "}
              <span className="skills-bullet">• </span> Storybook
            </h5>
            <h4 className="about-h4-left">Deployment</h4>
            <h5 className="about-h5-left">
              <span className="skills-bullet">• </span> Git / Github <br />
              <span className="skills-bullet">• </span> Heroku <br />
              <span className="skills-bullet">• </span> Bitbucket <br />
              <span className="skills-bullet">• </span> Netlify <br />
              <span className="skills-bullet">• </span> Amazon AWS <br />
              <span className="skills-bullet">• </span> Firebase <br />
            </h5>
            <h4 className="about-h4-left">Design</h4>
            <h5 className="about-h5-left">
              <span className="skills-bullet">• </span> Final Cut Pro
              (Certified)
              <br />
              <span className="skills-bullet">• </span> Adobe Photoshop <br />
              <span className="skills-bullet">• </span> Adobe InDesign
              <br />
              <span className="skills-bullet">• </span> Adobe XD
              <br />
              <span className="skills-bullet">• </span> Adobe Premiere
              <br />
              <span className="skills-bullet">• </span> Adobe Muse
              <br />
              <span className="skills-bullet">• </span> Adobe AfterEffects
              <br />
            </h5>
          </div>
          <div class="col2 about-wordcloud">
            <img alt="wordcloud" className="about-wordcloud" src={cloud} />
          </div>
          <div class="col3">
            <h4 className="about-h4-right">Backend</h4>
            <h5 className="about-h5-right">
              <span className="skills-bullet">• </span> Express.js
              <br />
              <span className="skills-bullet">• </span> Node.js
              <br />
              <span className="skills-bullet">• </span> MongoDB
              <br />
              <span className="skills-bullet">• </span> Python
              <br />
              <span className="skills-bullet">• </span> RESTful API
              <br />
              <span className="skills-bullet">• </span> Django
              <br />
              <span className="skills-bullet">• </span> SQL
              <br />
              <span className="skills-bullet">• </span> PostgreSQL
              <br />
            </h5>{" "}
            <h4 className="about-h4-right">Project Management</h4>
            <h5 className="about-h5-right">
              <span className="skills-bullet">• </span> Rapid Prototyping
              <br />
              <span className="skills-bullet">• </span> Google Analytics <br />
              <span className="skills-bullet">• </span> Google Play
              <br />
              <span className="skills-bullet">• </span> App Store Connect
              <br /> <span className="skills-bullet">• </span> Jira & Trello
            </h5>
            <h4 className="about-h4-right">Misc. Skills</h4>
            <h5 className="about-h5-right">
              <span className="skills-bullet">• </span> Unix
              <br />
              <span className="skills-bullet">• </span> VS Code <br />
              <span className="skills-bullet">• </span> MS Office (Certified)
              <br />
              <span className="skills-bullet">• </span> Wordpress CMS
              <br />
              <span className="skills-bullet">• </span> Webflow CMS <br />
              <span className="skills-bullet">• </span> Social Media
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
