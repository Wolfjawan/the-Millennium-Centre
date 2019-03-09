import React, { Component } from "react";
import BackgroundSlideShow from "../components/BackgroundSlideShow/index";
import LakeView from '../images/General/29.jpg';
import Header from '../components/aboutUs/header'
const images = [
  { image: LakeView }
];
class AboutUs extends Component {
  render() {
    return (
      <div>
        <BackgroundSlideShow
          images={images}
          TextComponent={Header}
          style={{ height: "730px" }}
        />
        <section className="about-page-section-one">

        </section>
        <section className="about-page-section-two">

        </section>

      </div>
    );
  }
}

export default AboutUs;
