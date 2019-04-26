import React, { Component } from "react";
import Location from "../location";

class ContactDetails extends Component {
  render() {
    return (
      <div className="content-details-container">
        <div className="content-details">
          <h2>Millennium Centre</h2>
          <a
            target="_blanc"
            href="https://www.google.co.uk/maps/place/Eastbrookend+Country+Park+Millennium+Visitor+Centre/@51.5528668,0.1747286,17.68z/data=!4m5!3m4!1s0x0:0xfbd0965e9b74b82c!8m2!3d51.5527702!4d0.1760743?hl=en&authuser=0"
          >
            The Chase, Dagenham, Romford RM7 0SS
          </a>
          <hr />
          <ul>
            <li>teresa.byrne@bdc.ac.uk</li>
            <li>07402120069</li>
            <li>Facebook</li>
            <li>
              <a target="_blanc" href="http://Facebook.com">
                Facebook
              </a>
            </li>
            <li>
              <a target="_blanc" href="http://instagram.com">
                Instagram
              </a>
            </li>
          </ul>
        </div>
        <div className="content-details">
          <Location />
        </div>
      </div>
    );
  }
}
export default ContactDetails;
