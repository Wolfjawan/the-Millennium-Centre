import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div className="header-text-container">
        <div className="header-text">
          <h2>QUALIFICATIONS</h2>
          <p>
            The students at the Millennium Centre have learning difficulties or
            disabilities. We give them the opportunity to develop their skills
            and help plan for their futures.
            <br />
            <br />
            <h5>
              <strong>The students are currently studying for:</strong>
            </h5>
          </p>
          <ul>
            <li>
              Edexcel BTEC Entry Level and Level 1 Qualifications in Hospitality
            </li>
            <li>Edexcel Entry Level Skills for Independence and Work</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;
