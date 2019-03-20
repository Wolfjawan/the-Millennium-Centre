import React, { Component } from "react";
import BackGroundImage from "../components/backGroundImage";
import CraftsBackground from "../images/Craft/9.jpeg";
import Header from "../components/crafts/header";
class Crafts extends Component {
  render() {
    return (
      <div>
        <BackGroundImage
          image={CraftsBackground}
          Header={Header}
          style={{ height: "660px" }}
        />
        Crafts
      </div>
    );
  }
}

export default Crafts;
