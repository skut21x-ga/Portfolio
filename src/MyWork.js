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
      <div>
        <div className="portfolio-container">
          <div className="portfolio-card">
            <div className="portfolio-thumbnail">
              <img src="airbnb"></img>
            </div>
            <div className="portfolio-headline"></div>
            <div className="portfolio-description"></div>
            <div className="portfolio-gitlink"></div>
          </div>
          {/* 
          <div className="portfolio-card"></div>
          <div className="portfolio-card"></div>{" "}
          <div className="portfolio-card"></div> */}
        </div>
      </div>
    );
  }
}
export default MyWork;
