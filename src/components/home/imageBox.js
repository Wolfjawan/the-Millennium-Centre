import React, { Component } from "react";

class ImageBox extends Component {
  render() {
    const {
      h3,
      src,
      alt,
      p,
      h3Styles,
      imageStyles,
      pStyles,
      boxStyle
    } = this.props;
    return (
      <div style={boxStyle} className="image-box">
        <h3 style={h3Styles}>{h3}</h3>
        <img style={imageStyles} src={src} alt={alt} />
        <p style={pStyles}>{p}</p>
      </div>
    );
  }
}

export default ImageBox;
