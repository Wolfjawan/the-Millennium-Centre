import React, { Component } from "react";
import Section1 from "../components/theMillenniumCafe/sectionOne";
import WhatWeDo from "../components/theMillenniumCafe/whatWeDo";
import Menu from "../components/theMillenniumCafe/menu";
import "./index.css";
class TheMillenniumCafe extends Component {
  render() {
    return (
      <div className="w-100">
        <section className="millennium-cafe-section1">
          <Section1 />
        </section>
        <section>
          <WhatWeDo />
        </section>
        <section>
          <Menu />
        </section>
      </div>
    );
  }
}

export default TheMillenniumCafe;
