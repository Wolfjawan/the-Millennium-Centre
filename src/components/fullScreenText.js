import React, { Component } from "react";
import "./index.css";
class FullScreenImage extends Component {
  state = {
    IsImage: ""
  };
  onClick = IsImage => {
    this.setState({ IsImage });
  };
  render() {
    const { text, id, textBtn } = this.props;
    return (
      <div id={id} className={id}>
        <h5
          style={{ cursor: "pointer" }}
          data-toggle="modal"
          data-target={`#id${id}`}
        >
          {textBtn}
        </h5>
        <div className="modal fade" id={`id${id}`} role="dialog">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-body">
                <div>{text}</div>
              </div>
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FullScreenImage;
