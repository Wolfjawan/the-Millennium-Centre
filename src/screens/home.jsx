import React, { Component } from "react";
import HomeMainText from "../components/home/homeMainText";
import EnergyEfficientDesign from "../components/home/EnergyEfficientDesign";
import BackgroundSlideShow from "../components/BackgroundSlideShow/index";
import Student2 from "../images/Student/2.JPG";
import Craft3 from "../images/Craft/3.JPG";
import GeneralPhoto3 from "../images/General/3.JPG";
import "./index.css";

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
        <div>
          <hr className="home-hr" />
          <section>
            <EnergyEfficientDesign />
          </section>
        </div>
      </div>
    );
  }
}

export default Home;
