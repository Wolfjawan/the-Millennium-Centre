import React, { Component } from 'react';
import Location from '../location';
import FullScreenText from '../fullScreenText';
import OpeningHours from '../OpeningHours';
class Header extends Component {
    openingHours = () => {
        return <OpeningHours/>
    }
    render() {
        return (
            <section className="about-page-section-one">
               <Location/>
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

export default Header;