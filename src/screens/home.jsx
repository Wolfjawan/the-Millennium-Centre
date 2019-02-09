import React, { Component } from "react";
import SlideshowImage from "../components/home/slideshow-image";
import HomeMainText from "../components/home/homeMainText";
import EnergyEfficientDesign from "../components/home/EnergyEfficientDesign";

import "./index.css";
class Home extends Component {
  render() {
    return (
      <div className="home">
        <div>
          <h1 className="welcome">Welcome to The Millennium Centre</h1>
          <section className="home-main-section">
            <div className="home-main-section-item">
              <HomeMainText />
            </div>
            <div className="home-main-section-item">
              <SlideshowImage />
            </div>
          </section>
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
