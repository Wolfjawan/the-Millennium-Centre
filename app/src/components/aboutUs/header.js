import React, { Component } from "react";
import OpeningHours from "../OpeningHours";

class Header extends Component {
  openingHours = () => {
    return;
  };
  render() {
    return (
      <div className="header-text-container">
        <OpeningHours />
      </div>
    );
  }
}

export default Header;
