import React, { Component } from "react";
import Header from "../components/home/header";
import DogFriendly from "../components/home/dogFriendly.js";
import BackGroundImage from "../components/backGroundImage";
// import Student2 from "../images/Student/2.JPG";
// import Craft3 from "../images/Craft/3.JPG";
import GeneralPhoto3 from "../images/General/3.JPG";
import About from "../components/home/about";
import ArrowDown from "../images/arrow-down.png";

class Home extends Component {
  render() {
    return (
      <div className="w-100" id="home-page">
        <BackGroundImage
          image={GeneralPhoto3}
          Header={Header}
          style={{ height: "630px" }}
        />
        <div className="home-arrow-down">
          <a href="#home-about">
            <img
              src={ArrowDown}
              className="arrow-down"
              alt="Arrow Down"
              style={{ backgroundColor: "#ffc221" }}
            />
          </a>
        </div>
        <About />
        <DogFriendly />
      </div>
    );
  }
}

export default Home;
