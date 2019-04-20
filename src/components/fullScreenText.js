import React, { Component } from "react";
class FullScreenText extends Component {
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
        <span
          className="read-more"
          data-toggle="modal"
          data-target={`#id${id}`}
        >
          {textBtn}
        </span>
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

export default FullScreenText;
