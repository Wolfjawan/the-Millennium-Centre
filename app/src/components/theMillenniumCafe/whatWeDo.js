import React, { Component } from "react";
import DogFriendly from "../../images/dog-friendly.png";
import Tea from "../../images/tea.png";
import Toilet from "../../images/toilet.png";
class WhatWeDo extends Component {
  render() {
    return (
      <div>
        <h1 className="what-we-do-h1">WHAT WE DO</h1>
        <h5 className="text-center">9:00am - 3:00pm Weekdays</h5>
        <p className="what-we-do-p">
          The Millennium Center Building, run by special needs students from
          Barking and Dagenham College who are completing their hospitality and
          catering qualifications.
        </p>
        <div className="what-we-do-services">
          <div className="what-we-do-services-item">
            <img
              className="what-we-do-services-image"
              src={DogFriendly}
              alt="Dog Friendly"
            />
            <h3 className="what-we-do-services-header">Dog Friendly</h3>
            <p className="what-we-do-services-text">
              All four legged friends are welcome but must remain on a lead
            </p>
          </div>
          <div className="what-we-do-services-item">
            <img className="what-we-do-services-image" src={Tea} alt="Tea" />
            <h3 className="what-we-do-services-header"> Hot and Cold Snacks</h3>
            <p className="what-we-do-services-text">
              The cafe provides hot and cold snacks and drinks and also operates
              a takeaway service
            </p>
          </div>
          <div className="what-we-do-services-item">
            <img
              className="what-we-do-services-image"
              src={Toilet}
              alt="Toilet"
            />
            <h3 className="what-we-do-services-header">Toilet Facilities</h3>
            <p className="what-we-do-services-text">
              Male/Female and Disabled Toilets all with baby changing facilities
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default WhatWeDo;
