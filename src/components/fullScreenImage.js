import React, { Component } from "react";
class FullScreenImage extends Component {
  render() {
    const { image, alt, id, style } = this.props;
    return (
      <div id={id} className={id} style={style}>
        <img
          id={id}
          src={image}
          width="100%"
          alt={alt}
          data-toggle="modal"
          data-target={`#id${id}`}
          style={{ borderRadius: "5px", cursor: "zoom-in" }}
        />
        <div className="modal fade" id={`id${id}`} role="dialog">
          <div className="modal-dialog modal-content">
              <button className="close" data-dismiss="modal">
                x
              </button>
              <img src={image} width="100%" height="100%" alt={alt} />
          </div>
        </div>
      </div>
    );
  }
}

export default FullScreenImage;
