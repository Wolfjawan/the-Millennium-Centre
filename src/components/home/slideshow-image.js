import React, { Component } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "./index.css";
import Student1 from "../../images/Student/1.JPG";
import Student2 from "../../images/Student/2.JPG";
import Student3 from "../../images/Student/3.JPG";
import Craft1 from "../../images/Craft/1.JPG";
import Craft2 from "../../images/Craft/2.JPG";
import GeneralPhoto1 from "../../images/General/1.JPG";
import GeneralPhoto2 from "../../images/General/2.JPG";
class slideshowImage extends Component {
  render() {
    var isShow = 0;
    var settings = {
      dots: true,
      infinite: true,
      speed: 2000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
      arrows: false,
      customPaging: i => (
        <div
          style={{
            width: "20px",
            height: "20px",
            color: "green",
            border: "1px green solid",
            borderRadius: "50%",
            fontSize: "12px",
            backgroundColor: i === isShow && "#FFCF56"
          }}
        />
      ),
      beforeChange: (i, index) => {
        isShow = index;
      }
    };
    return (
      <div className="slideshow-image">
        <Slider {...settings}>
          <Link to="/" className="slideshow-image-box">
            {/* <h1 className="slideshow-image-text">Students</h1> */}
            <img
              src={Student1}
              alt={"Students"}
              height="100%"
              className="slideshow-image-image"
            />
          </Link>
          <Link to="/students" className="slideshow-image-box">
            {/* <h1 className="slideshow-image-text">Students</h1> */}
            <img
              src={Student2}
              alt={"Students"}
              height="100%"
              className="slideshow-image-image"
            />
          </Link>
          <Link to="/" className="slideshow-image-box">
            {/* <h1 className="slideshow-image-text">Students</h1> */}
            <img
              src={Student3}
              alt={"Students"}
              height="100%"
              className="slideshow-image-image"
            />
          </Link>
          <Link to="/" className="slideshow-image-box">
            {/* <h1 className="slideshow-image-text">Craft</h1> */}
            <img
              src={Craft1}
              alt={"Craft"}
              height="100%"
              className="slideshow-image-image"
            />
          </Link>
          <Link to="/" className="slideshow-image-box">
            {/* <h1 className="slideshow-image-text">Craft</h1> */}
            <img
              src={Craft2}
              alt={"Craft"}
              height="100%"
              className="slideshow-image-image"
            />
          </Link>
          <Link to="/" className="slideshow-image-box">
            {/* <h1 className="slideshow-image-text">Millennium Centre</h1> */}
            <img
              src={GeneralPhoto1}
              alt={"Millennium Centre"}
              height="100%"
              className="slideshow-image-image"
            />
          </Link>
          <Link to="/" className="slideshow-image-box">
            {/* <h1 className="slideshow-image-text">Millennium Centre</h1> */}
            <img
              src={GeneralPhoto2}
              alt={"Millennium Centre"}
              height="100%"
              className="slideshow-image-image"
            />
          </Link>
        </Slider>
      </div>
    );
  }
}

export default slideshowImage;
