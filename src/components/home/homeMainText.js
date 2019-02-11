import React, { Component } from "react";
import './index.css'
class HomeMainText extends Component {
  render() {
    return (
      <div className="home-main-text-container">
        <h1 className="welcome">Welcome to The Millennium Centre</h1>
        <div className="home-main-text">
          <p className="home-main-text-p">
            The Millennium Centre is a visitor centre which is open to the
            public throughout the year. The building is a permanent exhibition
            of ecological principles as well as housing educational displays in
            its public spaces.
            <br /> It includes:
          </p>
          <ul className="home-main-text-p">
            <li>An introduction to the history of the site</li>
            <li>Information on the design and construction of the building</li>
            <li>Environmentally themed educational displays</li>
          </ul>
          <p className="home-main-text-p">
            The building forms a natural gateway into the wide-open spaces of
            Eastbrookend Country Park and the Dagenham Chase Local Nature
            Reserve. The centre acts as the focal point for visitors and
            provides a comfortable venue for walkers, school groups and anyone
            wanting to learn more about the local countryside or environment.
            There are toilets and baby-changing facilities on site.
          </p>
        </div>
      </div>
    );
  }
}

export default HomeMainText;
