import React, { Component } from "react";
class footer extends Component {
  render() {
    return (
      <footer className="footer-dev">
        <a href="#navbar">
          <i
            class="fa fa-angle-double-up"
            style={{ fontSize: "80px", fontWidth: "bold", color: "red" }}
          />
        </a>
        <p className="text-center footer mb-0">
          The Millennium Centre © 2019. All rights reserved.
        </p>
      </footer>
    );
  }
}

export default footer;
