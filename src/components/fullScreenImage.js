import React, { Component } from "react";

class FullScreenImage extends Component {
  state = {
    IsImage: ""
  };
  onClick = IsImage => {
    this.setState({ IsImage });
    console.log(IsImage);
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
            data-target="#ModalAddCity"
          />
          <div className="modal fade" id="ModalAddCity" role="dialog">
            <div className="modal-dialog">
              <img
                src={this.state.IsImage}
                width="100%"
                className="cafe-image"
                alt={alt}
              />
              <button
                type="button"
                className="btn "
                data-dismiss="modal"
                refresh="true"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FullScreenImage;
