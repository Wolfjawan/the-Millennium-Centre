import React, { Component } from "react";
import Header from "../components/theMillenniumCafe/header";
import WhatWeDo from "../components/theMillenniumCafe/whatWeDo";
import Menu from "../components/theMillenniumCafe/menu";
import BackgroundSlideShow from "../components/BackgroundSlideShow/index";
import MillenniumCentre from "../images/Millennium-Centre.jpg";
const images = [{ image: MillenniumCentre }];

class TheMillenniumCafe extends Component {
  render() {
    return (
      <div className="w-100">
        <BackgroundSlideShow
          images={images}
          TextComponent={Header}
          style={{ height: "650px" }}
        />
        <WhatWeDo />
        <Menu />
      </div>
    );
  }
}

export default TheMillenniumCafe;
