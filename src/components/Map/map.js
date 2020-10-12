import React, { Component } from "react"
import { Map, GoogleApiWrapper } from "google-maps-react"

const mapStyles = {
  //   width: "70%",
  height: "400px",
  margin: "100px",
  position: "relative",
}

const containerStyle = {
  position: "relative",
}
export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={8}
        containerStyle={containerStyle}
        style={mapStyles}
        initialCenter={{ lat: 47.444, lng: -122.176 }}
      />
    )
  }
}

export default GoogleApiWrapper({
  apiKey: `${process.env.REACT_APP_API_KEY}`,
})(MapContainer)
