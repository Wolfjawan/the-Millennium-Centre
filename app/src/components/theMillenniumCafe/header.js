import React, { Component } from "react";
class Header extends Component {
  render() {
    return (
      <div className="millennium-cafe-s1">
        <div className="millennium-cafe-s1-text">
          <h1 className="millennium-cafe-s1-text-h1">THE MILLENNIUM CAFE</h1>
          <div className="millennium-cafe-s1-text-p">
            <a
              style={{ color: "#306B46" }}
              className="font-italic"
              href="https://www.google.co.uk/maps/search/The+Millennium+Centre,+The+Chase,+Dagenham+Road,+Rush+Green,++Romford+RM7+0SS/@51.554071,0.1761473,16z/data=!3m1!4b1?hl=en"
            >
              The Millennium Centre, The Chase, Dagenham Road, Rush Green,
              Romford RM7 0SS
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
