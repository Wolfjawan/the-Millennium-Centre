import React, { Component } from "react";
import DogFriendly from "../../images/General/28.JPG";
import FullScreenImage from "../fullScreenImage";

class dogFriendly extends Component {
  render() {
    return (
      <div className="dog-friendly" id="dog-friendly">
        <FullScreenImage
          id="DogFriendly"
          image={DogFriendly}
          alt="Dog Friendly"
          style={{
            borderRadius: "0 20px",
            margin: "1%",
            width: "50%",
          }}
        />
        <div className="dog-friendly-text">
          <h2>Dog friendly</h2>
          <p>
            All four legged friends are welcome but must remain on a lead
          </p>
        </div>
      </div>
    );
  }
}

export default dogFriendly;
