import React, { Component } from "react";
import HomeMainText from "../components/home/header";
import DogFriendly from "../components/home/dogFriendly.js";
import BackgroundSlideShow from "../components/BackgroundSlideShow/index";
import Student2 from "../images/Student/2.JPG";
import Craft3 from "../images/Craft/3.JPG";
import GeneralPhoto3 from "../images/General/3.JPG";
import About from "../components/home/about";
import ArrowDown from "../images/arrow-down.png";
import Location from '../components/location';
import OpeningHours from '../components/OpeningHours'
const images = [
  { image: GeneralPhoto3 },
  { image: Craft3 },
  { image: Student2 }
];

class Home extends Component {
  render() {
    return (
      <div className="w-100" id="home-page">
        <BackgroundSlideShow
          images={images}
          TextComponent={HomeMainText}
          style={{ height: "630px" }}
        />
        <div className="home-arrow-down">
          <a href="#home-about">
            <img
              src={ArrowDown}
              className="arrow-down"
              alt="Arrow Down"
              style={{ backgroundColor: "#f45d01" }}
            />
          </a>
        </div>
        <About />
        <div className="home-arrow-down">
          <a href="#home-section-two">
            <img
              src={ArrowDown}
              className="arrow-down"
              alt="Arrow Down"
              style={{ top: "-25px", backgroundColor: "#86b405" }}
            />
          </a>
        </div>
        <section className="home-section-two" id="home-section-two">
          <Location />
          <div id="opening-hours" className="opening-hours">
            <OpeningHours />
          </div>
        </section>
        <div className="home-arrow-down">
          <a href="#dog-friendly">
            <img
              src={ArrowDown}
              className="arrow-down"
              alt="Arrow Down"
              style={{ top: "-35px", backgroundColor: "#ffc321" }}
            />
          </a>
        </div>
        <DogFriendly />
      </div>
    );
  }
}

export default Home;
