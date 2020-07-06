import React from "react";
import airbnb from "./PortfolioGifs/airbnb.gif";
import Beatles from "./PortfolioGifs/Beatles.gif";
import BeatlesBackend from "./PortfolioGifs/Beatles-Backend.png";
import Cocktails from "./PortfolioGifs/Cocktails.gif";
import ComponentLibrary from "./PortfolioGifs/ComponentLibrary.gif";
import CoTripper from "./PortfolioGifs/CoTripper.png";
import GuessNumber from "./PortfolioGifs/GuessNumber.gif";
import HarryPoter from "./PortfolioGifs/HarryPotter.gif";
import MCU from "./PortfolioGifs/MCU.gif";
import NationalParks from "./PortfolioGifs/NationalParksPNG.png";
import Python from "./PortfolioGifs/Python.gif";
import SIMON from "./PortfolioGifs/SIMON.gif";
import SnowMount from "./PortfolioGifs/SnowMount.gif";
import StateCapital from "./PortfolioGifs/StateCapital.gif";
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
              <a href="https://skut21x-ga.github.io/Mockup/index.html">
                {" "}
                <img
                  alt="snowmount"
                  className="portfolio-image"
                  src={SnowMount}
                ></img>
              </a>
            </div>
            <div className="portfolio-text">
              <a
                className="portfolio-headline"
                href="https://skut21x-ga.github.io/Mockup/index.html"
              >
                SnowMount Homepage
              </a>
              <a className="portfolio-description">
                <br></br>HTML, CSS
              </a>
              <a
                className="portfolio-gitlink"
                href="https://github.com/skut21x-ga/WebsiteMockup"
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
          <div className="portfolio-card portfolio-container non-mobile">
            <a href="https://skut21x-ga.github.io/airbnb/lib/index.html">
              <img alt="airbnb" className="portfolio-image" src={airbnb}></img>
            </a>
            <div className="portfolio-text">
              <a
                className="portfolio-headline"
                href="https://skut21x-ga.github.io/airbnb/lib/index.html"
              >
                Travel Website Mockup
              </a>
              <a className="portfolio-description">
                <br></br>HTML, CSS
              </a>
              <a
                className="portfolio-gitlink"
                href="https://git.generalassemb.ly/skut21x/css-airbnb"
              >
                <br></br>- GIT Repo -
              </a>
            </div>
          </div>{" "}
          <div className="portfolio-card portfolio-container">
            <div className="portfolio-image-container">
              <a href="https://beverage-database.netlify.app">
                <img
                  alt="cocktails-thumbnail"
                  className="portfolio-image"
                  src={Cocktails}
                ></img>
              </a>
            </div>
            <div className="portfolio-text">
              <a
                className="portfolio-headline"
                href="https://beverage-DB.netlify.app/"
              >
                Beverage DB
              </a>
              <a className="portfolio-description">
                <br></br>HTML, CSS, React, API
              </a>
              <a
                className="portfolio-gitlink"
                href="https://github.com/skut21x-ga/react-ui-pattern-lab"
              >
                <br></br>- GIT Repo -
              </a>
            </div>
          </div>
          <div className="portfolio-card portfolio-container ">
            <div className="portfolio-image-container">
              <a href="https://skut21x-ga.github.io/UI-Pattern/index.html">
                <img
                  alt="HarryPotter-thumbnail"
                  className="portfolio-image"
                  src={HarryPoter}
                ></img>
              </a>
            </div>
            <div className="portfolio-text">
              <a
                className="portfolio-headline"
                href="https://skut21x-ga.github.io/UI-Pattern/index.html"
              >
                Harry Potter Character DB
              </a>
              <a className="portfolio-description">
                <br></br>HTML, CSS, API
              </a>
              <a
                className="portfolio-gitlink"
                href="https://github.com/skut21x-ga/react-ui-pattern-lab"
              >
                <br></br>- GIT Repo -
              </a>
            </div>
          </div>
          <div className="portfolio-card portfolio-container">
            <div className="portfolio-image-container">
              {" "}
              <a href="https://beatlesapi.netlify.app/">
                <img
                  alt="beatles-thumbnail"
                  className="portfolio-image"
                  src={Beatles}
                ></img>
              </a>
            </div>
            <div className="portfolio-text">
              <a
                className="portfolio-headline"
                href="https://beatlesapi.netlify.app/"
              >
                The Beatles Lyrics DB (Front-End)
              </a>
              <a className="portfolio-description">
                <br></br>HTML, CSS, React, Material-UI, Storybook, Axios
              </a>
              <a
                className="portfolio-gitlink"
                href="https://github.com/skut21x-ga/beatles-mern-project"
              >
                <br></br>- GIT Repo -
              </a>{" "}
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
          <div className="portfolio-card portfolio-container non-mobile">
            <div className="portfolio-image-container">
              {" "}
              <a href="https://mcuDB.netlify.app/">
                <img
                  alt="mcu-thumbnail"
                  className="portfolio-image"
                  src={MCU}
                ></img>
              </a>
            </div>
            <div className="portfolio-text">
              <a
                className="portfolio-headline"
                href="https://mcuDB.netlify.app/"
              >
                MCU Character DB
              </a>
              <a className="portfolio-description">
                <br></br>HTML, CSS, Mongoose, React, Express, MaterialUI
              </a>
              <a
                className="portfolio-gitlink"
                href="https://github.com/skut21x-ga/mcu-mern-project"
              >
                <br></br>- GIT Repo (Front-End) /{" "}
              </a>
              <a
                className="portfolio-gitlink"
                href="https://github.com/skut21x-ga/mcu-api"
              >
                GIT Repo (Back-End) -
              </a>
            </div>
          </div>{" "}
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
              <a href="https://github.com/skut21x-ga/state-capitals-game">
                <img
                  alt="state-capital-thumbnail"
                  className="portfolio-image"
                  src={StateCapital}
                ></img>
              </a>
            </div>
            <div className="portfolio-text">
              <a
                className="portfolio-headline"
                href="https://github.com/skut21x-ga/state-capitals-game"
              >
                Python: State Capitals Game
              </a>
              <a className="portfolio-description">
                <br></br>Python
              </a>
              <a
                className="portfolio-gitlink"
                href="https://github.com/skut21x-ga/state-capitals-game"
              >
                <br></br>- GIT Repo -
              </a>
            </div>
          </div>{" "}
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
