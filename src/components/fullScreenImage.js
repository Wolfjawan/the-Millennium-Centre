import React, { Component } from "react";
import './index.css'
class FullScreenImage extends Component {
  state = {
    IsImage: ""
  };
  onClick = IsImage => {
    this.setState({ IsImage });
  };
  render() {
    const { image, alt, id } = this.props;
    return (
      <div id={id} className={id}>
        <div>
          <img
            onClick={() => this.onClick(image)}
            id={id}
            src={image}
            width="100%"
            className="cafe-image"
            alt={alt}
            data-toggle="modal"
            data-target={`#id${id}`}
          />
          <div className="modal fade" id={`id${id}`} role="dialog">
            <div className="modal-dialog">
              <div className="modal-content">
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                >
                  x
                 </button>
                <img
                  src={this.state.IsImage}
                  width="100%"
                  className="cafe-image"
                  alt={alt}
                />
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default FullScreenImage;
