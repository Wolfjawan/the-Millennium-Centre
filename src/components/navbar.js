import React, { Component } from "react";
import { Link } from "react-router-dom";
import MillenniumCentre from "../images/Logo.png";
import './index.css'
class navbar extends Component {
  render() {
    return (
      <nav
        className="navbar navbar-expand-lg navbar-light"
      >
      <div></div>
        <img
          className="navbar-brand"
          src={MillenniumCentre}
          alt="Millennium Centre"
          height="150px"
        />
        <button
          className="navbar-toggler btn btn-outline-success nav-btn mr-4 float-right"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon m-1" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav w-100">
            <Link className="btn btn-outline-success nav-btn m-1" to="/">
              Home <span className="sr-only">(current)</span>
            </Link>
            <Link className="btn btn-outline-success nav-btn m-1" to="/students">
              Our Students
            </Link>
            <Link className="btn btn-outline-success nav-btn m-1" to="/crafts">
              Crafts
            </Link>
            <Link className="btn btn-outline-success nav-btn m-1" to="/the-millennium-cafe">
              The Millennium Cafe
            </Link>
            <div className="w-100">
              <Link
                className="btn btn-outline-success nav-btn to-right float-right"
                to="/about"
              >
                About Us
              </Link>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default navbar;
