import React, { Component } from "react";
import BackgroundSlideShow from "../components/backGroundImage";
import StudentImage from "../images/Student/2.JPG";
import Header from "../components/students/header";
import Slider from "../components/slider";

import Students1 from "../images/Student/1.JPG";
import Students3 from "../images/Student/3.JPG";
import Students4 from "../images/Student/4.JPG";
import Students5 from "../images/Student/5.JPG";
import Students6 from "../images/Student/6.jpeg";
import Students7 from "../images/Student/7.jpeg";
import Students8 from "../images/Student/8.jpeg";
import Students9 from "../images/Student/9.jpeg";

const images = [
  Students1,
  Students3,
  Students4,
  Students5,
  Students6,
  Students7,
  Students8,
  Students9
];

class Students extends Component {
  render() {
    return (
      <div className="w-100">
        <BackgroundSlideShow
          image={StudentImage}
          TextComponent={Header}
          style={{ height: "650px" }}
        />
        <Slider images={images} />
      </div>
    );
  }
}

export default Students;
