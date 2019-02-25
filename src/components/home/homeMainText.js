import React, { Component } from "react";
import ArrowDown from "../../images/arrow-down.png";
import "./index.css";
class HomeMainText extends Component {
  render() {
    return (
      <div className="home-main-text-container">
        <h1 className="welcome">WELCOME TO THE MILLENNIUM CENTER</h1>
        <div className="home-main-text">
          <div className="home-main-text-box">
            <h3 className="bold">The Millennium Centre</h3>
            <a href="#home-about">
              <img
                src={ArrowDown}
                className="arrow-down"
                alt="Arrow Down"
              />
            </a>
          </div>
          <div className="home-main-text-box">
            <h3 className="bold">Dog Friendly</h3>
            <p>All four legged friends are welcome but must remain on a lead</p>
            <a href="#dog-friendly">
              <img
                src={ArrowDown}
                className="arrow-down"
                alt="Arrow Down"
              />
            </a>
          </div>
          <div className="home-main-text-box">
            <h3 className="bold">Location</h3>
            <p>
              The Millennium Centre, The Chase, Dagenham Road, Rush Green, Romford RM7 0SS.
            </p>
            <a href="#home-about">
              <img
                src={ArrowDown}
                className="arrow-down"
                alt="Arrow Down"
              />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeMainText;
