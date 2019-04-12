import React, { Component } from "react";
import BackGroundImage from "../components/backGroundImage";
import CraftsBackground from "../images/Craft/9.jpeg";
import Header from "../components/crafts/header";
import CraftImages from "../components/crafts/crafts";

class Crafts extends Component {
  render() {
    return (
      <div>
        <BackGroundImage
          image={CraftsBackground}
          Header={Header}
          style={{ height: "660px" }}
        />
        <div className="main-container">
          <div className="main">
            <CraftImages />
          </div>
        </div>
      </div>
    );
  }
}

export default Crafts;
