import React, { Component } from "react";
import FullScreenImage from "../fullScreenImage";
import Slider from "../slider";
class Students extends Component {
  render() {
    const { images } = this.props;
    return (
      <div className="students-images">
        <Slider images={images} />
        {/* {images.map((image, i) => {
          return (
            <div className="students-image" key={i}>
              <FullScreenImage
                id={`Students${i}`}
                image={image}
                alt={`Students${i}`}
              />
              
            </div>
          );
        })} */}
      </div>
    );
  }
}

export default Students;
