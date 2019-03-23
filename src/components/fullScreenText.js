import React, { Component } from "react";
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
        <a
          className="read-more"
          data-toggle="modal"
          data-target={`#id${id}`}
        >
          {textBtn}
        </a>
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
