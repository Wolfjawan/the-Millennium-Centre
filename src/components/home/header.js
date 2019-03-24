import React, { Component } from "react";
class Header extends Component {
  render() {
    return (
      <div className="" id="navbar">
        <div style={{ maxWidth: "1200px" }}>
          <div className="home-main-text-container">
            <h1 className="welcome">
              WELCOME TO <br /> THE MILLENNIUM CENTRE
            </h1>
            <div className="home-main-text">
              <div className="home-main-text-box">
                <h3 className="bold">The Millennium Centre</h3>
                <p>
                  The Millennium Centre is a visitor centre which is open to the
                  public throughout the year.
                </p>
                <a href="#home-about" className="read-more">
                  Read more
                </a>
              </div>
              <div className="home-main-text-box">
                <h3 className="bold">Dog Friendly</h3>
                <p>
                  All four legged friends are welcome but must remain on a lead
                </p>
                <a href="#dog-friendly" className="read-more">
                  Read more
                </a>
              </div>
              <div className="home-main-text-box">
                <h3 className="bold">Location</h3>
                <div>
                  <a
                    target="_blanc"
                    href="https://www.google.com/maps/place/Dagenham,+Romford+RM7+0SS/@51.5536496,0.1765393,17z/data=!3m1!4b1!4m5!3m4!1s0x47d8a52893f3c2c7:0x68b5f85c5e917a1f!8m2!3d51.5536496!4d0.178728"
                    style={{ color: "#fff" }}
                  >
                    The Millennium Centre, The Chase, Dagenham Road, Rush Green,
                    Romford RM7 0SS.
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
