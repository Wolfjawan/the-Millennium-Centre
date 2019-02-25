import React, { Component } from "react";
import HomeMainText from "../components/home/homeMainText";
import DogFriendly from "../components/home/dogFriendly.js";
import BackgroundSlideShow from "../components/BackgroundSlideShow/index";
import Student2 from "../images/Student/2.JPG";
import Craft3 from "../images/Craft/3.JPG";
import GeneralPhoto3 from "../images/General/3.JPG";
import "./index.css";
import About from '../components/home/about'
import ArrowDown from "../images/arrow-down.png";
const images = [
  { image: GeneralPhoto3 },
  { image: Craft3 },
  { image: Student2 }
];

class Home extends Component {
  render() {
    return (
      <div className="home">
        <BackgroundSlideShow
          images={images}
          TextComponent={HomeMainText}
          style={{ hight: "700px" }}
        />
        <div className="home-arrow-down">
          <a href="#home-about">
            <img
              src={ArrowDown}
              className="arrow-down"
              alt="Arrow Down"
            />
          </a>
        </div>
        <div>
          <About />
          <div className="home-arrow-down">
            <a href="#dog-friendly">
              <img
                src={ArrowDown}
                className="arrow-down"
                alt="Arrow Down"
                style={{ top: "-25px" }}
              />
            </a>
          </div>
          <DogFriendly />
        </div>
      </div>
    );
  }
}

export default Home;
