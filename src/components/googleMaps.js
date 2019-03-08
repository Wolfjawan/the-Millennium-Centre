import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };
pointer=()=>{
  return "📍"
}
handleApiLoaded = (map, maps) => {
  console.log(map, maps)
 };
 render() {
   return (
     // Important! Always set the container height explicitly
     <div style={{ height: "100%", width: "100%"}}>
       <GoogleMapReact
         bootstrapURLKeys={{
           key: `AIzaSyBEovxf6vs5WfrpFMFvvWrhWWsyYyrHUX8`,
           language: "en",
           region: "GB "
         }}
         yesIWantToUseGoogleMapApiInternals
         onGoogleApiLoaded={({ map, maps }) => this.handleApiLoaded(map, maps)}
         defaultCenter={[51.553465, 0.17439]}
         defaultZoom={15}
       >
          <AnyReactComponent lat={51.553460} lng={0.174390} text={this.pointer()} />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
