import React from "react";
import airbnb from "./PortfolioGifs/airbnb.gif";
import airbnbBIG from "./PortfolioGifs/airbnb-BIG.gif";
import Beatles from "./PortfolioGifs/Beatles.gif";
import BeatlesBackend from "./PortfolioGifs/Beatles-Backend.png";
import BeatlesBIG from "./PortfolioGifs/Beatles-BIG.gif";
import BRO from "./PortfolioGifs/BRO.gif";
import BROBIG from "./PortfolioGifs/BRO-BIG.gif";
import Cocktails from "./PortfolioGifs/Cocktails.gif";
import CocktailsBIG from "./PortfolioGifs/Cocktails-BIG.gif";
import ComponentLibrary from "./PortfolioGifs/ComponentLibrary.gif";
import ComponentLibraryBIG from "./PortfolioGifs/ComponentLibrary-BIG.gif";
import CoTripper from "./PortfolioGifs/CoTripper.gif";
import CoTripperBIG from "./PortfolioGifs/CoTripper-BIG.gif";
import GuessNumber from "./PortfolioGifs/GuessNumber.gif";
import GuessNumberBIG from "./PortfolioGifs/GuessNumber-BIG.gif";
import HarryPoter from "./PortfolioGifs/HarryPotter.gif";
import HarryPotterBIG from "./PortfolioGifs/HarryPotter-BIG.gif";
import MCU from "./PortfolioGifs/MCU.gif";
import MCUBIG from "./PortfolioGifs/MCU-BIG.gif";
import NationalParks from "./PortfolioGifs/NationalParks.gif";
import NationalParksBIG from "./PortfolioGifs/NationalParks-BIG.gif";
import Python from "./PortfolioGifs/Python.gif";
import PythonBIG from "./PortfolioGifs/Python-BIG.gif";
import SIMON from "./PortfolioGifs/SIMON.gif";
import SIMONBIG from "./PortfolioGifs/SIMON-BIG.gif";
import SnowMount from "./PortfolioGifs/SnowMount.gif";
import SnowMountBig from "./PortfolioGifs/SnowMount-BIG.gif";
import StateCapital from "./PortfolioGifs/StateCapital.gif";
import StateCapitalBig from "./PortfolioGifs/StateCapital-BIG.gif";
import Trello from "./PortfolioGifs/Trello.gif";
import TrelloBig from "./PortfolioGifs/Trello-BIG.gif";
import War from "./PortfolioGifs/War.gif";
import WarBig from "./PortfolioGifs/War-BIG.gif";

class MyWork extends React.Component {
  render() {
    return (
      <div className="mywork-section">
        <div className="portfolio-container-main">
          <div className="portfolio-card portfolio-container">
            <div className="portfolio-image-container">
              <a href="https://www.broapp.com">
                <img className="portfolio-image" src={BRO}></img>
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
                <img className="portfolio-image" src={SIMON}></img>
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
                <img className="portfolio-image" src={SnowMount}></img>
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
          </div>
          <div className="portfolio-card portfolio-container non-mobile">
            <a href="https://skut21x-ga.github.io/airbnb/lib/index.html">
              <img className="portfolio-image" src={airbnb}></img>
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
          <div className="portfolio-card portfolio-container ">
            <div className="portfolio-image-container">
              <a href="https://skut21x-ga.github.io/UI-Pattern/index.html">
                <img className="portfolio-image" src={HarryPoter}></img>
              </a>
            </div>
            <div className="portfolio-text">
              <a
                className="portfolio-headline"
                href="https://skut21x-ga.github.io/UI-Pattern/index.html"
              >
                Harry Potter Character Database
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
          <div className="portfolio-card portfolio-container non-mobile">
            <div className="portfolio-image-container">
              <a href="https://beverage-database.netlify.app/">
                <img className="portfolio-image" src={Cocktails}></img>
              </a>
            </div>
            <div className="portfolio-text">
              <a
                className="portfolio-headline"
                href="https://beverage-database.netlify.app/"
              >
                Beverage Database
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
          <div className="portfolio-card portfolio-container">
            <div className="portfolio-image-container">
              <a href="https://github.com/skut21x-ga/WAR">
                <img className="portfolio-image" src={War}></img>
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
                <img className="portfolio-image" src={NationalParks}></img>
              </a>
            </div>
            <div className="portfolio-text">
              <a
                className="portfolio-headline"
                href="https://nationalparksdb.netlify.app/"
              >
                National Parks Database
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
          <div className="portfolio-card portfolio-container">
            <div className="portfolio-image-container">
              <a href="http://skut21x-ga.github.io/Storybook/index.html">
                <img className="portfolio-image" src={ComponentLibrary}></img>
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
              <a href="https://mcudatabase.netlify.app/">
                <img className="portfolio-image" src={MCU}></img>
              </a>
            </div>
            <div className="portfolio-text">
              <a
                className="portfolio-headline"
                href="https://mcudatabase.netlify.app/"
              >
                MCU Character Database
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
              <a href="https://cotripper.netlify.app/">
                <img className="portfolio-image" src={CoTripper}></img>
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
              <a href="https://github.com/skut21x-ga/PythonAddressBook">
                <img className="portfolio-image" src={Python}></img>
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
                <img className="portfolio-image" src={GuessNumber}></img>
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
                <img className="portfolio-image" src={StateCapital}></img>
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
          <div className="portfolio-card portfolio-container non-mobile">
            <div className="portfolio-image-container">
              {" "}
              <a href="https://beatlesapi.netlify.app/">
                <img className="portfolio-image" src={Beatles}></img>
              </a>
            </div>
            <div className="portfolio-text">
              <a
                className="portfolio-headline"
                href="https://beatlesapi.netlify.app/"
              >
                The Beatles Lyrics Database (Front-End)
              </a>
              <a className="portfolio-description">
                <br></br>HTML, CSS, React, Material-UI, Storybook, Axios
              </a>
              <a
                className="portfolio-gitlink"
                href="https://github.com/skut21x-ga/beatles-mern-project"
              >
                <br></br>- GIT Repo
              </a>{" "}
              /<a> </a>
              <a
                className="portfolio-gitlink"
                href="https://skut21x-ga.github.io/Beatles%20Storybook/index.html"
              >
                Component Library -
              </a>
            </div>
          </div>
          <div className="portfolio-card portfolio-container">
            <div className="portfolio-image-container">
              <a href="https://github.com/skut21x-ga/beatles-api-repo">
                <img className="portfolio-image" src={BeatlesBackend}></img>
              </a>
            </div>
            <div className="portfolio-text">
              <a
                className="portfolio-headline"
                href="https://github.com/skut21x-ga/beatles-api-repo"
              >
                The Beatles Lyrics Database (Back-End)
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
              <img className="portfolio-image" src={Trello}></img>
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
