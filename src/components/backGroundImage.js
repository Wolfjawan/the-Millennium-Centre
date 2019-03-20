import React, { Component } from "react";
import NavBar from "./navbar";
class Index extends Component {
  render() {
    const { style, image } = this.props;
    return (
      <div style={style}>
        <span
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url(${image})`,
            position: "absolute",
            width: "100%",
            height: "650px",
            transform: "translate3d(0px, 1px, 0px)",
            top: 0,
            bottom: 0,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat"
          }}
        />
        <NavBar />
        {this.props.Header && <this.props.Header />}
      </div>
    );
  }
}

export default Index;
