import React, { Component } from "react";
import MillenniumCentre from "../../images/Millennium-Centre.jpg";
import "./index.css";
class sectionOne extends Component {
  render() {
    return (
      <div className="millennium-cafe-s1">
        <div className="millennium-cafe-s1-text">
          <h1 className="millennium-cafe-s1-text-h1">THE MILLENNIUM CAFE</h1>
          <div className="millennium-cafe-s1-text-p">
            <a href="https://www.google.co.uk/maps/search/The+Millennium+Centre,+The+Chase,+Dagenham+Road,+Rush+Green,++Romford+RM7+0SS/@51.554071,0.1761473,16z/data=!3m1!4b1?hl=en    ">
              The Millennium Centre, The Chase, Dagenham Road, Rush Green,
              Romford RM7 0SS
            </a>
          </div>
        </div>
        <img
          src={MillenniumCentre}
          alt="Millennium Centre"
          className="millennium-cafe-s1-image"
        />
      </div>
    );
  }
}

export default sectionOne;
