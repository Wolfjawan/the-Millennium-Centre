import React, { Component } from "react";
import "./index.css";
class HomeMainText extends Component {
  render() {
    return (
      <div>
        <div className="home-main-text-container">
          <h1 className="welcome">
            WELCOME TO <br /> THE MILLENNIUM CENTER
          </h1>
          <div className="home-main-text">
            <div className="home-main-text-box">
              <h3 className="bold">The Millennium Centre</h3>
              <p>
                The Millennium Centre is a visitor centre which is open to the
                public throughout the year.
              </p>
              <a href="#home-about">Read more</a>
            </div>
            <div className="home-main-text-box">
              <h3 className="bold">Dog Friendly</h3>
              <p>
                All four legged friends are welcome but must remain on a lead
              </p>
              <a href="#dog-friendly">Read more</a>
            </div>
            <div className="home-main-text-box">
              <h3 className="bold">Location</h3>
              <p>
                The Millennium Centre, The Chase, Dagenham Road, Rush Green,
                Romford RM7 0SS.
              </p>
              <a href="#home-about">Read more</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeMainText;
