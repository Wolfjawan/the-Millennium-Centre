import React, { Component } from "react";
import ImageComponent from "../ImageComponent";
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
              <ImageComponent
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
