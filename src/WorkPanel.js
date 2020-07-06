import React from "react";
import { withStyles } from "@material-ui/core/styles";
import MuiExpansionPanel from "@material-ui/core/ExpansionPanel";
import MuiExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import MuiExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";

const ExpansionPanel = withStyles({
  root: {
    border: "5px solid black ",
    boxShadow: "none",
    "&:not(:last-child)": {
      borderBottom: "5px solid black",
    },
    "&:before": {
      display: "none",
    },
    "&$expanded": {
      marginBottom: "0px",
      marginTop: "0px",
    },
  },
  expanded: {},
})(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles({
  root: {
    backgroundColor: "rgb(62, 126, 179)",
    borderBottom: "3px solid black",
    marginBottom: -1,
    minHeight: 56,
    "&$expanded": {
      minHeight: 56,
    },
  },
  content: {
    "&$expanded": {
      margin: "0px ",
    },
  },
  expanded: {},
})(MuiExpansionPanelSummary);

const ExpansionPanelDetails = withStyles((theme) => ({
  root: {
    backgroundColor: "#325b84",
    borderBottom: "3px solid black",
    padding: theme.spacing(2),
  },
}))(MuiExpansionPanelDetails);

export default function WorkPanel() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  const clickSummary = (event) => {
    event.stopPropagation();
  };
  return (
    <div className="workcontainer-component">
      <ExpansionPanel
        square
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        TransitionProps={{
          timeout: 100,
        }}
      >
        <ExpansionPanelSummary
          aria-controls="panel1d-content"
          id="panel1d-header"
        >
          <Typography>
            <p class="c4">
              {" "}
              <span class="c20"> </span>
              <span class="c9">Founder & Software Engineer | Brotech LLC</span>
              <span img alt="phone" class="c21">
                📱
              </span>
            </p>
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            {" "}
            <p class="c4">
              <span class="c7">October 2015 &ndash; Present</span>
            </p>
            <p class="c4 c10">
              <span class="c13"></span>
            </p>
            <p class="c6">
              <span class="c1">
                &bull; &nbsp; Created and maintain operation of one of the top
                LGBT+ social networks worldwide with over 1,000,000 downloads
                and a 4.7/5 App Store Rating
              </span>
            </p>
            <p class="c6">
              <span class="c1">
                &bull; &nbsp; Coordinated and validated the development of
                applications on iOS, Android, and a supporting administrative
                web interface throughout multiple versions
              </span>
            </p>
            <p class="c6">
              <span class="c1">
                &bull; &nbsp; Defined requirements and oversaw the operation of
                teams participating in 50+ Kanban and Scrum life cycles via
                JIRA, Github, and Trello
              </span>
            </p>
            <p class="c6">
              <span class="c1">
                &bull; &nbsp; Facilitated 100+ daily meetings with the team’s
                Scrum Master, Developers, Designers, and QA Team
              </span>
            </p>
            <p class="c6">
              <span class="c1">
                &bull; &nbsp; Performed market research (ie. conducting focus
                groups, managing social media, and competitive analysis) to
                generate quarterly metrics reports and leverage findings to
                prioritize product development efforts
              </span>
            </p>
            <p class="c6">
              <span class="c1">
                &bull; &nbsp; Provided traditional help desk support and
                customer outreach via social media engagement to 100,000+
                followers{" "}
              </span>
            </p>
            <p class="c6">
              <span class="c1">
                &bull; &nbsp; Managed development and deployment life-cycles
                using TestFlight, Google Play Dev. Console, Bash, VS Code, and
                other tools.
              </span>
            </p>
            <p class="c6">
              <span class="c1">
                &bull; &nbsp; Monitored and managed production systems in a
                cloud-based deployment environment (AWS: Lambda, S3, EC2, RDS)
              </span>
              <span class="c11">&nbsp;</span>
              <span class="c3">&nbsp;</span>
            </p>
            <p class="c4 c10">
              <span class="c3"></span>
            </p>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <div className="expansion-spacing"></div>
      <ExpansionPanel
        square
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
        TransitionProps={{
          timeout: 100,
        }}
      >
        <ExpansionPanelSummary
          aria-controls="panel2d-content"
          id="panel2d-header"
        >
          <Typography>
            <p class="c4">
              {" "}
              <span class="c20"> </span>
              <span class="c9">
                Software Engineering Fellow | General Assembly
              </span>
              <span class="c22">📚</span>{" "}
            </p>
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            <p class="c4">
              <span class="c7">February 2020 &ndash; April 2020</span>
            </p>
            <p class="c4">
              <span class="c13">&nbsp;</span>
            </p>
            <p class="c6">
              <span class="c1">
                &bull; &nbsp;Graduated top of the class in a Full-Stack Software
                Engineering course with 500+ hours of Computer Science work
                focused
              </span>
            </p>
            <p class="c6">
              <span class="c1">
                &bull; This full-time immersive course focused in-depth on
                multiple coding languages and frameworks including: HTML, CSS,
                Javascript, React.js, Node.js, Django, Python, MongoDB, and
                Express
              </span>
            </p>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <div className="expansion-spacing"></div>{" "}
      <ExpansionPanel
        square
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
        TransitionProps={{
          timeout: 100,
        }}
      >
        <ExpansionPanelSummary
          aria-controls="panel3d-content"
          id="panel3d-header"
        >
          <Typography>
            <p class="c4">
              <span class="c20"> </span>
              <span class="c9">
                General Manager & Web Developer | Tenley Grill LLC{" "}
              </span>
              <span img class="c27">
                💻
              </span>
            </p>
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            <p class="c4">
              <span class="c7">​​February 2015 &ndash; February 2020 </span>
            </p>
            <p class="c5">
              <span class="c13"></span>
            </p>
            <p class="c6">
              <span class="c1">
                &bull; &nbsp; Created and maintained restaurant homepage and a
                responsive web app for customers
              </span>
            </p>
            <p class="c6">
              <span class="c1">
                &bull; &nbsp;Interviewed, hired, and trained over 100 employees
                on operations, menu, service standards, and company policy
              </span>
            </p>
            <p class="c6">
              <span class="c1">
                &bull; &nbsp;Utilized internal pricing strategies and
                operational oversight to control costs via staff management,
                scheduling, and inventory control to reach quarterly sales
                targets.
              </span>
            </p>
            <p class="c6">
              <span class="c1">
                &bull; &nbsp;Coordinated and hosted large group events for 350+
                patrons including fundraisers, parties, and live performances
              </span>
            </p>
            <p class="c5">
              <span class="c3"></span>
            </p>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <div className="expansion-spacing"></div>
      <ExpansionPanel
        square
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
        TransitionProps={{
          timeout: 100,
        }}
      >
        <ExpansionPanelSummary
          aria-controls="panel3d-content"
          id="panel3d-header"
        >
          <Typography>
            <p class="c4">
              <span class="c20"> </span>
              <span class="c9">Certified Apple Technician | Apple Inc. </span>
              <span img class="c21">
                👨‍💻
              </span>
            </p>
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            <p class="c4">
              <span class="c7">August 2008 &ndash; November 2014 </span>
            </p>
            <p class="c5">
              <span class="c13"></span>
            </p>
            <p class="c6">
              <span class="c1">
                &bull; &nbsp; Provided training, service, and hands-on support
                for Apple customers&rsquo; hardware and software
              </span>
            </p>
            <p class="c6">
              <span class="c1">
                &bull; &nbsp; Developed weekly training and mentorship plans to
                support employee growth
              </span>
            </p>
            <p class="c6">
              <span class="c1">
                &bull; &nbsp;Maintained knowledge of Apple&rsquo;s products,
                software, and services to provide guidance and support to
                customers{" "}
              </span>
            </p>
            <p class="c6">
              <span class="c1">
                &bull; &nbsp;Recognized for having one of the highest customer
                satisfaction ratings (NPS) among all technicians in the market
              </span>
            </p>
            <p class="c5">
              <span class="c3"></span>
            </p>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}
