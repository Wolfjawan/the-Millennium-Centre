import React, { Component } from "react";
import BackGroundImage from "../components/backGroundImage";
import LakeView from "../images/General/29.jpg";
import Header from "../components/aboutUs/header";
import ContentForm from "../components/aboutUs/contactForm";
class AboutUs extends Component {
  render() {
    return (
      <div>
        <BackGroundImage
          image={LakeView}
          Header={Header}
          style={{ height: "730px" }}
        />
        <ContentForm />
        <section className="about-page-section-two" />
      </div>
    );
  }
}

export default AboutUs;
