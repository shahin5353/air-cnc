import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class Map extends Component {
  static defaultProps = {
    center: {
      lat: 23.8103,
      lng: 90.4125
    },
    zoom: 12
  };
 
  render() {
    return (
        <GoogleMapReact
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={23.8103}
            lng={90.4125}
          />
        </GoogleMapReact>
    );
  }
}
 
export default Map;