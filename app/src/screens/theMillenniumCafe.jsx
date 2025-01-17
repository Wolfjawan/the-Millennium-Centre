import React, { Component } from "react";
import Header from "../components/theMillenniumCafe/header";
import WhatWeDo from "../components/theMillenniumCafe/whatWeDo";
import Menu from "../components/theMillenniumCafe/menu";
import BackGroundImage from "../components/backGroundImage";
import MillenniumCentre from "../images/Millennium-Centre.jpg";

class TheMillenniumCafe extends Component {
  render() {
    return (
      <div className="w-100">
        <BackGroundImage
          image={MillenniumCentre}
          Header={Header}
          style={{ height: "650px" }}
        />
        <div className="main-container">
          <div className="main">
            <WhatWeDo />
            <Menu />
          </div>
        </div>
      </div>
    );
  }
}

export default TheMillenniumCafe;
