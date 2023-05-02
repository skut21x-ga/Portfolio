import React from "react";
import BeatlesBackend from "./PortfolioGifs/Beatles-Backend.png";
import ComponentLibrary from "./PortfolioGifs/ComponentLibrary.gif";
import CoTripper from "./PortfolioGifs/CoTripper.png";
import GuessNumber from "./PortfolioGifs/GuessNumber.gif";
import NationalParks from "./PortfolioGifs/NationalParksPNG.png";
import Python from "./PortfolioGifs/Python.gif";
import SIMON from "./PortfolioGifs/SIMON.gif";
import Trello from "./PortfolioGifs/Trello.gif";
import War from "./PortfolioGifs/War.gif";
import RightsHub from "./PortfolioGifs/RightsHub.gif";
import BRO from "./PortfolioGifs/BRO.gif";
// import BROMP4 from "./PortfolioGifs/BRO2.mp4";

class MyWork extends React.Component {
  render() {
    return (
      <div className="mywork-section">
        <div className="portfolio-container-main">
          <div className="portfolio-card portfolio-container">
            <div className="portfolio-image-container">
              {" "}
              <a href="https://rightshub.netlify.com">
                <img
                  alt="right-hub-thumbnail"
                  className="portfolio-image"
                  src={RightsHub}
                ></img>
              </a>
            </div>
            <div className="portfolio-text">
              <a
                className="portfolio-headline"
                href="https://rightshub.netlify.com"
              >
                Rights-Hub [NY] Portal
              </a>
              <a className="portfolio-description">
                <br></br>HTML, CSS, Javascript, Leaflet, React, JSON
              </a>
              <a
                className="portfolio-gitlink"
                href="https://github.com/hackforblacklivesmatter-5-1/rightshub"
              >
                <br></br>- GIT Repo -
              </a>
            </div>
          </div>{" "}
          <div className="portfolio-card portfolio-container">
            <div className="portfolio-image-container">
              <a href="https://www.broapp.com">
                {" "}
                <img
                  alt="snowmount"
                  className="portfolio-image"
                  src={BRO}
                ></img>
              </a>
            </div>
            <div className="portfolio-text">
              <a className="portfolio-headline" href="https://www.broapp.com">
                The Bro App Homepage & Blog
              </a>
              <a className="portfolio-description">
                <br></br>HTML, CSS, Webflow CMS
              </a>
            </div>
          </div>{" "}
          <div className="portfolio-card portfolio-container">
            <div className="portfolio-image-container">
              {" "}
              <a href="https://skut21x-ga.github.io/Simon/index.html">
                <img
                  alt="simon-game-thumbnail"
                  className="portfolio-image"
                  src={SIMON}
                ></img>
              </a>
            </div>
            <div className="portfolio-text">
              <a
                className="portfolio-headline"
                href="https://skut21x-ga.github.io/Simon/index.html"
              >
                SIMON Javascript Game{" "}
              </a>
              <a className="portfolio-description">
                <br></br>HTML, CSS, Javascript
              </a>
              <a
                className="portfolio-gitlink"
                href="https://github.com/skut21x-ga/SimonMemory/"
              >
                <br></br>- GIT Repo -
              </a>
            </div>
          </div>{" "}
          <div className="portfolio-card portfolio-container">
            <div className="portfolio-image-container">
              <a href="https://cotripper.netlify.app/">
                <img
                  alt="cotripper-thumbnail"
                  className="portfolio-image"
                  src={CoTripper}
                ></img>
              </a>
            </div>
            <div className="portfolio-text">
              <a
                className="portfolio-headline"
                href="https://cotripper.netlify.app/"
              >
                CoTripper Homepage
              </a>
              <a className="portfolio-description">
                <br></br>HTML, CSS, React, Python, Django, PostgreSQL
              </a>
              <a
                className="portfolio-gitlink"
                href="https://github.com/skut21x-ga/CoTrip"
              >
                <br></br>- GIT Repo -
              </a>
            </div>
          </div>
          <div className="portfolio-card portfolio-container">
            <div className="portfolio-image-container">
              <a href="https://github.com/skut21x-ga/beatles-api-repo">
                <img
                  alt="beatles-api-thumbnail"
                  className="portfolio-image"
                  src={BeatlesBackend}
                ></img>
              </a>
            </div>
            <div className="portfolio-text">
              <a
                className="portfolio-headline"
                href="https://github.com/skut21x-ga/beatles-api-repo"
              >
                The Beatles Lyrics DB (Back-End)
              </a>
              <a className="portfolio-description">
                <br></br>Mongoose, Express, Passport, JWT, Node.JS
              </a>
              <a
                className="portfolio-gitlink"
                href="https://github.com/skut21x-ga/beatles-api-repo"
              >
                <br></br> - GIT Repo -
              </a>
            </div>
          </div>
          <div className="portfolio-card portfolio-container">
            <div className="portfolio-image-container">
              <a href="https://github.com/skut21x-ga/WAR">
                <img
                  alt="war-game-thumbnail"
                  className="portfolio-image"
                  src={War}
                ></img>
              </a>
            </div>
            <div className="portfolio-text">
              <a className="portfolio-headline">Javascript WAR Game</a>
              <a className="portfolio-description">
                <br></br>HTML, Javascript
              </a>
              <a
                className="portfolio-gitlink"
                href="https://github.com/skut21x-ga/WAR"
              >
                <br></br>- GIT Repo -
              </a>
            </div>
          </div>
          <div className="portfolio-card portfolio-container">
            <div className="portfolio-image-container">
              <a href="https://nationalparksdb.netlify.app/">
                <img
                  alt="natl-park-thumbnail"
                  className="portfolio-image"
                  src={NationalParks}
                ></img>
              </a>
            </div>
            <div className="portfolio-text">
              <a
                className="portfolio-headline"
                href="https://nationalparksdb.netlify.app/"
              >
                National Parks DB
              </a>
              <a className="portfolio-description">
                <br></br>HTML, CSS, React, React-Router, API
              </a>
              <a
                className="portfolio-gitlink"
                href="https://github.com/skut21x-ga/react-router-lab"
              >
                <br></br>- GIT Repo -
              </a>
            </div>
          </div>
          <div className="portfolio-card portfolio-container non-mobile">
            <div className="portfolio-image-container">
              <a href="http://skut21x-ga.github.io/Storybook/index.html">
                <img
                  alt="component-library-thumbnail"
                  className="portfolio-image"
                  src={ComponentLibrary}
                ></img>
              </a>
            </div>
            <div className="portfolio-text">
              <a
                className="portfolio-headline"
                href="http://skut21x-ga.github.io/Storybook/index.html"
              >
                UI Component Library
              </a>
              <a className="portfolio-description">
                <br></br>HTML, CSS, Storybook Framework
              </a>
              <a
                className="portfolio-gitlink"
                href="https://github.com/skut21x-ga/component-library-project/"
              >
                <br></br>- GIT Repo -
              </a>
            </div>
          </div>
          <div className="portfolio-card portfolio-container">
            <div className="portfolio-image-container">
              <a href="https://github.com/skut21x-ga/PythonAddressBook">
                <img
                  alt="address-book-thumbnail"
                  className="portfolio-image"
                  src={Python}
                ></img>
              </a>
            </div>
            <div className="portfolio-text">
              {" "}
              <a
                href="https://github.com/skut21x-ga/PythonAddressBook"
                className="portfolio-headline"
              >
                Python: Address Book
              </a>
              <a className="portfolio-description">
                <br></br>Python, SQL, and PeeWee
              </a>
              <a
                className="portfolio-gitlink"
                href="https://github.com/skut21x-ga/PythonAddressBook"
              >
                <br></br>- GIT Repo -
              </a>
            </div>
          </div>
          <div className="portfolio-card portfolio-container">
            <div className="portfolio-image-container">
              <a href="https://github.com/skut21x-ga/guess-the-number">
                <img
                  alt="guess-number-thumbnail"
                  className="portfolio-image"
                  src={GuessNumber}
                ></img>
              </a>
            </div>
            <div className="portfolio-text">
              {" "}
              <a
                href="https://github.com/skut21x-ga/guess-the-number"
                className="portfolio-headline"
              >
                Python: Random Number Game
              </a>
              <a className="portfolio-description">
                <br></br>Python
              </a>
              <a
                className="portfolio-gitlink"
                href="https://github.com/skut21x-ga/guess-the-number"
              >
                <br></br>- GIT Repo -
              </a>
            </div>
          </div>
          <div className="portfolio-card portfolio-container">
            <div className="portfolio-image-container">
              <img
                alt="trello-thumbnail"
                className="portfolio-image"
                src={Trello}
              ></img>
            </div>
            <div className="portfolio-text">
              <a className="portfolio-headline">Project Management</a>
              <a className="portfolio-description"></a>
              <a
                className="portfolio-gitlink"
                href="https://trello.com/b/ntYWVGyf/sei-36-project-8"
              >
                <br></br> - Example Trello Board -
              </a>
            </div>
          </div>{" "}
        </div>{" "}
        <a name="Contact"></a>
      </div>
    );
  }
}
export default MyWork;
