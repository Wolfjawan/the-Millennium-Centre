import React, { Component } from "react";
import { Link } from "react-router-dom";
import MillenniumCentre from "../images/Logo.png";
class navbar extends Component {
  render() {
    return (
      <nav
        className="navbar navbar-expand-lg navbar-light"
        id="navbar"
      >
        <img
          className="navbar-brand"
          src={MillenniumCentre}
          alt="Millennium Centre"
          height="150px"
        />
        <span
          className="navbar-toggler bt nav-btn mr-4 float-right"
          type="span"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon m-1" />
        </span>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav w-100 ">
            <Link className="btn nav-btn m-1" to="/">
              Home <span className="sr-only">(current)</span>
            </Link>
            <Link className="btn nav-btn m-1" to="/students">
              Our Students
            </Link>
            <Link className="btn nav-btn m-1" to="/crafts">
              Crafts
            </Link>
            <Link className="btn nav-btn m-1" to="/the-millennium-cafe">
              The Millennium Cafe
            </Link>
              <Link
                className="btn nav-btn m-1"
                to="/about"
              >
                About Us
              </Link>
          </div>
        </div>
      </nav>
    );
  }
}

export default navbar;
