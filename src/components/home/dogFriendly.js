import React, { Component } from "react";
import DogFriendly from "../../images/General/28.JPG";

class dogFriendly extends Component {
  render() {
    return (
      <div>
        <div className="image-box">
          <img className="dog-friendly-image" src={DogFriendly} alt="Dog Friendly" width="100%" />
          <div>
            <h2>Dog friendly</h2>
            <p>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default dogFriendly;
