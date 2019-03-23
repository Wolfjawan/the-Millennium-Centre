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
                color: "red",
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
                  <Link to="/">Home</Link>
                </h6>
              </div>
              <div className="col-md-2 mb-3">
                <h6 className="text-uppercase font-weight-bold">
                  <Link to="/students">Our Students</Link>
                </h6>
              </div>
              <div className="col-md-2 mb-3">
                <h6 className="text-uppercase font-weight-bold">
                  <Link to="/crafts">Crafts</Link>
                </h6>
              </div>
              <div className="col-md-2 mb-3">
                <h6 className="text-uppercase font-weight-bold">
                  <Link to="/the-millennium-cafe">The Millennium Cafe</Link>
                </h6>
              </div>
              <div className="col-md-2 mb-3">
                <h6 className="text-uppercase font-weight-bold">
                  <Link to="/about">About Us</Link>
                </h6>
              </div>
            </div>
            <div className="footer-icons row">
              <p className="white-text mr-4">
                The Millennium Centre © 2019. All rights reserved.
              </p>
              <a href="/" className="fb-ic">
                <i className="fa fa-facebook-f fa-lg white-text mr-4"> </i>
              </a>
              <a href="/" className="tw-ic">
                <i className="fa fa-twitter fa-lg white-text mr-4"> </i>
              </a>
              <a href="/" className="ins-ic">
                <i className="fa fa-instagram fa-lg white-text mr-4"> </i>
              </a>
              <a href="/" className="pin-ic">
                <i className="fa fa-pinterest fa-lg white-text"> </i>
              </a>
            </div>
          </div>
          <img className="footer-bdc-logo" src={BDCLogo} alt="BDC logo" />
        </div>
      </footer>
    );
  }
}

export default Footer;
