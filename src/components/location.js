import React, { Component } from 'react';
import MillinniumCafe from '../images/cafeLocation.png';
class Location extends Component {
    render() {
        return (
            <a target="_blanc" href="https://www.google.co.uk/maps/place/Eastbrookend+Country+Park+Millennium+Visitor+Centre/@51.5528668,0.1747286,17.68z/data=!4m5!3m4!1s0x0:0xfbd0965e9b74b82c!8m2!3d51.5527702!4d0.1760743?hl=en&authuser=0" >
                <img className="about-location-img" src={MillinniumCafe} alt="location" />
                <span >
                    <div className="about-address">
                        <span>The Chase, Dagenham, Romford RM7 0SS: open on maps</span>
                    </div>
                </span>
            </a>
        );
    }
}

export default Location;