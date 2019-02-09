import React, { Component } from "react";
import Section1 from "../components/theMillenniumCafe/sectionOne";
import './index.css'
class TheMillenniumCafe extends Component {
  render() {
    return (
      <div className="w-100">
        <section className="millennium-cafe-section1">
          <Section1 />
        </section>
      </div>
    );
  }
}

export default TheMillenniumCafe;
