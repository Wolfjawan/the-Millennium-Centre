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
        <div className="main-container">
          <div className="main main-contact-us ">
            <ContactDetails />
            <ContentForm />
          </div>
        </div>
      </div>
    );
  }
}

export default AboutUs;
