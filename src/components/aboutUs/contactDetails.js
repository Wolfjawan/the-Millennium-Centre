import React, { Component } from "react";
import Location from "../location";

class ContactDetails extends Component {
  render() {
    return (
      <div className="content-details-container">
        <div className="content-details">
          <h2>Contact Details</h2>
          <p>simple text</p>
          <ul>
            <li>Email: </li>
            <li>Tell: </li>
            <li>Address: </li>
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
