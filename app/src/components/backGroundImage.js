import React, { Component } from "react";
import NavBar from "./navbar";
class Index extends Component {
  constructor(props) {
    super(props);
    this.state = { width: 100, change: true, left: 0 };
  }
  componentWillMount() {
    this.timerID = setInterval(async () => {
      const { width, change, left } = this.state;
      await this.setState({
        width: change ? width + 0.02 : width - 0.02,
        left: change ? left - 0.02 : left + 0.02
      });
      if (width > 110) {
        await this.setState({ change: false });
      }
      if (width < 101) {
        await this.setState({ change: true });
      }
    }, 50);
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  render() {
    const { width, left } = this.state;
    const { style, image } = this.props;
    return (
      <div style={style}>
        <span
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${image})`,
            position: "absolute",
            width: `${width}%`,
            height: "650px",
            transform: "translate3d(0px, 1px, 0px)",
            top: 0,
            bottom: 0,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            left: `${left}%`
          }}
        />
        <NavBar />
        {this.props.Header && <this.props.Header />}
      </div>
    );
  }
}

export default Index;
