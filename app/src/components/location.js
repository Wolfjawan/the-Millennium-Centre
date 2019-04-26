import React, { Component } from "react";
class Location extends Component {
  render() {
    return (
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d866.4213308755735!2d0.17586654703440205!3d51.55277801699413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xfbd0965e9b74b82c!2sEastbrookend+Country+Park+Millennium+Visitor+Centre!5e0!3m2!1sen!2suk!4v1556279285775!5m2!1sen!2suk"
        width="100%"
        height="450"
        style={{ border: "0" }}
        title="minimum centre"
      />
    );
  }
}

export default Location;
