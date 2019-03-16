import React, { Component } from "react";
import HomeMainText from "../components/home/header";
import DogFriendly from "../components/home/dogFriendly.js";
import BackGroundImage from "../components/backGroundImage";
// import Student2 from "../images/Student/2.JPG";
// import Craft3 from "../images/Craft/3.JPG";
import GeneralPhoto3 from "../images/General/3.JPG";
import About from "../components/home/about";
import ArrowDown from "../images/arrow-down.png";
import Location from '../components/location';
import OpeningHours from '../components/OpeningHours'


class Home extends Component {
  render() {
    return (
      <div className="w-100" id="home-page">
        <BackGroundImage
          image={GeneralPhoto3}
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
              className="arrow-down arrow-down-home-section-two"
              alt="Arrow Down"
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
              className="arrow-down arrow-down-dog-friendly"
              alt="Arrow Down"
            />
          </a>
        </div>
        <DogFriendly />
      </div>
    );
  }
}

export default Home;
