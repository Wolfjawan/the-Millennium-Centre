import React, { Component } from "react";
import BackgroundSlideShow from "../components/BackgroundSlideShow/index";
import LakeView from '../images/General/29.jpg';
import Location from '../components/aboutUs/location'
const images = [
  { image: LakeView }
];
class AboutUs extends Component {
  render() {
    return (
      <div>
        <BackgroundSlideShow
          images={images}
          TextComponent={Location}
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
