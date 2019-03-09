import React, { Component } from 'react';
import MillinniumCafe from '../../images/cafeLocation.png';
import FullScreenText from '../fullScreenText'
import './index.css';
class location extends Component {
    openingHours = () => {
        return (
            <div>
                <h2 className="text-center">Opening hours</h2>
                <h3>April to September</h3>
                <p>
                    10am to 5pm (weekends 1pm to 5pm) Car park will be locked at 7pm.
                        </p>
                <h3>October to March</h3>
                <p>
                    10am to 4pm (Weekends 1pm to 4pm) Occasionally the building may be
                    closed for staff training or health and safety reasons. Car park
                    will be locked at 4pm.
                        </p>
                <div style={{ color: "#474647" }}>
                    <h6>Phone: 0987654321</h6>
                    <h6>The Chase, Dagenham, Romford RM7 0SS</h6>
                </div>
            </div>
        )
    }
    render() {
        return (
            <section className="about-page-section-one">
                <a className="about-location" target="_blanc" href="https://www.google.co.uk/maps/place/Eastbrookend+Country+Park+Millennium+Visitor+Centre/@51.5528668,0.1747286,17.68z/data=!4m5!3m4!1s0x0:0xfbd0965e9b74b82c!8m2!3d51.5527702!4d0.1760743?hl=en&authuser=0" >
                    <img className="about-locaton-img" src={MillinniumCafe} alt="location" />
                    <span >
                        <div className="about-address">
                            <h6>Phone: 0987654321</h6>
                            <h6>The Chase, Dagenham, Romford RM7 0SS</h6>
                        </div>
                    </span>
                </a>
                <div className="about-opening-hours-media">
                    <FullScreenText
                        textBtn="Opening Hours"
                        id="openingHours"
                        text={this.openingHours()}
                    />
                </div>
                <div className="about-opening-hours">
                    {this.openingHours()}
                </div>
            </section>
        );
    }
}

export default location;