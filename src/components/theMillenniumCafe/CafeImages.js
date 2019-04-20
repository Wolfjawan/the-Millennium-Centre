import React, { Component } from "react";
import Cakes from "../../images/General/12.JPG";
import ToastedCheeseAndHam from "../../images/General/17.JPG";
import SettingChairs from "../../images/General/19.JPG";
import InsideView from "../../images/General/7.JPG";
import ImageComponent from "../ImageComponent";

class CafeImages extends Component {
  render() {
    return (
      <div className="cafe-images">
        <div className="cafe-image-box-cake">
          <ImageComponent id="Cakes" image={Cakes} alt="Cakes" />
          <h4 className="p-2">
            Genoa Cake, Angel layer cake and Lemon iced Madeira cake
          </h4>
        </div>
        <div className="cafe-image-box">
          <ImageComponent
            id="SettingChairs"
            image={SettingChairs}
            alt="SettingChairs"
          />
          <h4 className="p-2">Inside view of The Millennium Cafe</h4>
        </div>
        <div className="cafe-image-box">
          <ImageComponent
            id="ToastedCheeseAndHam"
            image={ToastedCheeseAndHam}
            alt="Toasted Cheese AndHam"
          />
          <h4 className="p-2">Toasted Cheese And Ham</h4>
        </div>
        <div className="cafe-image-box">
          <ImageComponent id="InsideView" image={InsideView} alt="Inside View" />
          <h4 className="p-2">Inside View</h4>
        </div>
      </div>
    );
  }
}

export default CafeImages;
