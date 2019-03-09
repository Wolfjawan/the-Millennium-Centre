import React, { Component } from "react";
import HomeMainText from "../components/home/homeMainText";
import DogFriendly from "../components/home/dogFriendly.js";
import BackgroundSlideShow from "../components/BackgroundSlideShow/index";
import Student2 from "../images/Student/2.JPG";
import Craft3 from "../images/Craft/3.JPG";
import GeneralPhoto3 from "../images/General/3.JPG";
import "./index.css";
import About from "../components/home/about";
import ArrowDown from "../images/arrow-down.png";
import GoogleMaps from "../components/googleMaps";
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
          <div className="google-maps">
            <GoogleMaps />
          </div>
          <div id="opening-hours" className="opening-hours">
            <h2 className="text-center">Opening hours</h2>
            <h3>April to September</h3>
            <p>
              10am to 5pm (weekends 1pm to 5pm) Car park will be locked at 7pm.
            </p>
            <h3>October to March</h3>
            <p>
              10am to 4pm (Weekends 1pm to 4pm) Occasionally the building may be
              closed for staff training or health and safety reasons. Car park
              will be locked at 4pm.
            </p>
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
