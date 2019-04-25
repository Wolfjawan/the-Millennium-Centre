import React, { Component } from "react";
import Slider from "react-slick";

class slideshowImage extends Component {
  state = {
    hash: "",
    fullImage: ""
  };
  render() {
    const mq = window.matchMedia("(max-width: 700px)");
    var settings = {
      dots: true,
      infinite: true,
      speed: 4000,
      slidesToShow: mq.matches ? 1 : 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
      arrows: !mq.matches
    };
    const { images } = this.props;
    return (
      <div className="image-slider">
        <Slider {...settings}>
          {images.map((image, i) => {
            return (
              <a href={image} key={i} target="_blank" rel="noopener noreferrer">
                <img
                  src={image}
                  alt={"Students"}
                  className="image-slider-image"
                />
              </a>
            );
          })}
        </Slider>
      </div>
    );
  }
}

export default slideshowImage;
