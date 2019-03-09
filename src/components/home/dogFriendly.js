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
        />
        <div className="dog-friendly-text">
          <h2>Dog friendly</h2>
          <p>
            All four legged friends are welcome but must remain on a lead
          </p>
          <p>
          There are no conventional foundations under the centre. There are a
          number of large helical screws that anchor the building to the
          ground. The anchors can be taken out leaving the earth unspoilt
          should the building be removed at any time in the future.
          </p>
        </div>
      </div>
    );
  }
}

export default dogFriendly;
