import React, { Component } from "react";
import BackgroundSlideShow from "../components/BackgroundSlideShow/index";
import LakeView from "../images/General/29.jpg";
import Header from "../components/aboutUs/header";
import ContentForm from "../components/aboutUs/contactForm";
const images = [{ image: LakeView }];
class AboutUs extends Component {
  render() {
    return (
      <div>
        <BackgroundSlideShow
          images={images}
          TextComponent={Header}
          style={{ height: "730px" }}
        />
        <ContentForm />
        <section className="about-page-section-two" />
      </div>
    );
  }
}

export default AboutUs;
