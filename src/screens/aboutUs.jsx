import React, { Component } from "react";
import BackGroundImage from "../components/backGroundImage";
import LakeView from "../images/General/29.jpg";
import Header from "../components/aboutUs/header";
import ContentForm from "../components/aboutUs/contactForm";
import ContactDetails from "../components/aboutUs/contactDetails";
class AboutUs extends Component {
  render() {
    return (
      <div>
        <BackGroundImage
          image={LakeView}
          Header={Header}
          style={{ height: "730px" }}
        />
        <div className="about-us-section">
        <ContactDetails />
        <ContentForm />
        </div>
      </div>
    );
  }
}

export default AboutUs;
