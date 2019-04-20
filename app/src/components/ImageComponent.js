import React, { Component } from "react";
class ImageComponent extends Component {
  render() {
    const { image, alt, id, style } = this.props;
    return (
      <a href={image} id={id} className={id} style={style} target="_blank" rel="noopener noreferrer">
        <img
          id={id}
          src={image}
          width="100%"
          alt={alt}
          data-target={`#id${id}`}
          style={{ borderRadius: "5px", cursor: "zoom-in" }}
        />
      </a>
    );
  }
}

export default ImageComponent;
