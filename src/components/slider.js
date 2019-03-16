import React, { Component } from "react";
import Slider from "react-slick";

class slideshowImage extends Component {
  state = {
    hash: "",
    fullImage: ""
  };
  render() {
    const mq = window.matchMedia("(max-width: 1000px)");
    var settings = {
      dots: true,
      infinite: true,
      speed: 2000,
      slidesToShow: mq.matches ? 1 : 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
      arrows: !mq.matches
    };
    const { images } = this.props;
    const { hash, fullImage } = this.state;
    return (
      <div className="image-slider">
        <Slider {...settings}>
          {images.map((image, i) => {
            return (
              <div>
                <img
                  key={i}
                  src={image}
                  alt={"Students"}
                  className="image-slider-image"
                  onClick={() => this.setState({ hash: i, fullImage: image })}
                  data-toggle="modal"
                  data-target={`#id${hash}`}
                />
              </div>
            );
          })}
        </Slider>
        <div id={hash} className={hash}>
          <div className="modal fade" id={`id${hash}`} role="dialog">
            <div className="modal-dialog">
              <div className="modal-content">
                <button type="button" className="close" data-dismiss="modal">
                  x
                </button>
                <img src={fullImage} width="100%" alt="student" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default slideshowImage;
