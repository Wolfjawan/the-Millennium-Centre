import React, { Component } from "react";

import craft1 from "../../images/Craft/1.JPG";
import craft2 from "../../images/Craft/2.JPG";
import craft3 from "../../images/Craft/3.JPG";
import craft4 from "../../images/Craft/4.JPG";
import craft5 from "../../images/Craft/5.JPG";
import craft6 from "../../images/Craft/6.JPG";
import craft7 from "../../images/Craft/7.JPG";
import ImageComponent from "../ImageComponent";
const images = [
  {
    id: "98765",
    name: "Bug boxes",
    image: craft1,
    price: "£10",
    text: ""
  },
  {
    id: "oiu9876",
    name: "Bird boxes",
    image: craft2,
    price: "£10",
    text: ""
  },
  {
    id: "lj3oj4oj",
    name: "Hand made cards",
    image: craft7,
    price: "50p",
    text: ""
  },
  {
    id: "nkj3h4rhiwe",
    name: "Sweet Treats",
    image: craft3,
    price: "50p",
    text: ""
  },
  {
    id: "ljn2jk3h4j",
    name: "Bird treats",
    image: craft4,
    price: "50p",
    text: ""
  },
  {
    id: "lkh434hui",
    name: "Dog treats",
    image: craft5,
    price: "£1",
    text: ""
  },
  {
    id: "jo3j4oij",
    name: "Hand made cards",
    image: craft6,
    price: "50p",
    text: ""
  },
  {
    id: "lj3oj4oj",
    name: "Hand made cards",
    image: craft7,
    price: "50p",
    text: ""
  }
];

class Crafts extends Component {
  render() {
    return (
      <div className="craft-images">
        {images.map((image, i) => {
          return (
            <div className="craft-image" key={i}>
              <ImageComponent
                id={image.id}
                image={image.image}
                alt={image.name}
              />
              <div className="mt-1">
                <h2>{image.name}</h2>
                <h4>Price: {image.price}</h4>
                <p>{image.text}</p>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Crafts;
