import React, { Component } from "react";
import NavBar from "../navbar";
class Index extends Component {
  state = {
    image: ""
  };
  UNSAFE_componentWillMount() {
    const { images } = this.props;
    if (images) {
      var imageNum = 0;
      this.setState({
        image: images[imageNum].image
      });
      setInterval(() => {
        if (imageNum <= images.length) {
          imageNum += 1;
        }
        if (imageNum === images.length) {
          imageNum = 0;
        }
      }, 3000);
    }
  }
  render() {
    const { style } = this.props;
    return (
      <div style={style}>
        <span
          style={{
            backgroundImage: `url(${this.state.image})`,
            position: "absolute",
            width: "100%",
            height: "650px",
            transform: "translate3d(0px, 1px, 0px)",
            top: 0,
            bottom: 0,
            backgroundPosition: "50% 50%",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat"
          }}
        />
        <NavBar />
        {this.props.TextComponent && <this.props.TextComponent />}
      </div>
    );
  }
}

export default Index;
