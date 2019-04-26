import React, { Component } from "react";
import { Link } from "react-router-dom";
import BDCLogo from "../images/BDCLogo.jpg";

class Footer extends Component {
  render() {
    return (
      <footer>
        <div style={{ textAlign: "center", width: "100%" }}>
          <a href="#navbar">
            <i
              className="fa fa-angle-double-up"
              style={{
                fontSize: "80px",
                fontWidth: "bold",
                color: "#78b94c",
                textAlign: "center"
              }}
            />
          </a>
        </div>
        <div className="footer">
          <div className="footer-content">
            <div className="footer-links">
              <div className="col-md-2 mb-3">
                <h6 className="text-uppercase font-weight-bold">
                  <Link style={{ color: "#306B46" }} to="/">
                    Home
                  </Link>
                </h6>
              </div>
              <div className="col-md-2 mb-3">
                <h6 className="text-uppercase font-weight-bold">
                  <Link style={{ color: "#306B46" }} to="/students">
                    Our Students
                  </Link>
                </h6>
              </div>
              <div className="col-md-2 mb-3">
                <h6 className="text-uppercase font-weight-bold">
                  <Link style={{ color: "#306B46" }} to="/crafts">
                    Crafts
                  </Link>
                </h6>
              </div>
              <div className="col-md-2 mb-3">
                <h6 className="text-uppercase font-weight-bold">
                  <Link style={{ color: "#306B46" }} to="/the-millennium-cafe">
                    Millennium Cafe
                  </Link>
                </h6>
              </div>
              <div className="col-md-2 mb-3">
                <h6 className="text-uppercase font-weight-bold">
                  <Link style={{ color: "#306B46" }} to="/about">
                    About Us
                  </Link>
                </h6>
              </div>
            </div>
            <div className="footer-icons row">
              <h5 className="white-text mr-4">
                The Millennium Centre © 2019. All rights reserved.
              </h5>
              <a href="http://facebook.com" className="fb-ic">
                <i
                  style={{ color: "#306B46" }}
                  className="fa fa-facebook-f fa-lg white-text mr-4"
                >
                  {" "}
                </i>
              </a>
              <a href="http://twitter.com" className="tw-ic">
                <i
                  style={{ color: "#306B46" }}
                  className="fa fa-twitter fa-lg white-text mr-4"
                >
                  {" "}
                </i>
              </a>
              <a href="http://instagram.com" className="ins-ic">
                <i
                  style={{ color: "#306B46" }}
                  className="fa fa-instagram fa-lg white-text mr-4"
                >
                  {" "}
                </i>
              </a>
              <a href="http://pinterest.com" className="pin-ic">
                <i
                  style={{ color: "#306B46" }}
                  className="fa fa-pinterest fa-lg white-text"
                >
                  {" "}
                </i>
              </a>
            </div>
          </div>
          <span className="footer-bdc-logo">
            <img src={BDCLogo} alt="BDC logo" />
          </span>
        </div>
      </footer>
    );
  }
}

export default Footer;
