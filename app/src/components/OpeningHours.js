import React, { Component } from "react";

class OpeningHours extends Component {
  render() {
    return (
      <div className="header-text">
        <h2 className="text-center">Opening hours</h2>
        <h3>April to September</h3>
        <p>10am to 5pm (weekends 1pm to 5pm) Car park will be locked at 7pm.</p>
        <h3>October to March</h3>
        <p>
          10am to 4pm (Weekends 1pm to 4pm) Occasionally the building may be
          closed for staff training or health and safety reasons. Car park will
          be locked at 4pm.
        </p>
      </div>
    );
  }
}

export default OpeningHours;
