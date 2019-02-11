import React, { Component } from "react";
import Section1 from "../components/theMillenniumCafe/sectionOne";
import WhatWeDo from "../components/theMillenniumCafe/whatWeDo";
import Menu from "../components/theMillenniumCafe/menu";
import BackgroundSlideShow from "../components/BackgroundSlideShow/index";
import MillenniumCentre from "../images/Millennium-Centre.jpg";
import "./index.css";
const images = [{ image: MillenniumCentre }];

class TheMillenniumCafe extends Component {
  render() {
    return (
      <div className="w-100">
        <BackgroundSlideShow
          images={images}
          TextComponent={Section1}
          style={{ height: "700px" }}
        />
        <section>
          <WhatWeDo />
        </section>
        <section>
          <Menu />
        </section>
      </div>
    );
  }
}

export default TheMillenniumCafe;
