import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div className="students-header-main">
        <div className="students-header-qualifications">
          <h2>Qualifications</h2>
          <p>
            The students at the Millennium Centre have learning difficulties or
            disabilities. We give them the opportunity to develop their skills
            and help plan for their futures.
            <br />
            <br />
            The students are currently studying for:
          </p>
          <ul>
            <li>
              Edexcel BTEC Entry Level & Level 1 Qualifications in Hospitality
            </li>
            <li>Edexcel Entry Level Skills for Independence and Work</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;
