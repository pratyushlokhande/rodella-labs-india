import React, { Component } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import styled from "styled-components";

const markerIcon = new L.Icon({
  iconUrl: require("../assets/drone.png"),
  iconSize: [40, 40],
});

export default class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: 23.259933,
      lng: 77.412613,
      zoom: 12,
      maxZoom: 18,
    };
  }

  render() {
    const position = [this.state.lat, this.state.lng];
    return (
      <MapWindow>
        <MapContainer
          center={position}
          zoom={this.state.zoom}
          maxZoom={this.state.maxZoom}
        >
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position} icon={markerIcon}>
            <Popup>Rodella Labs India</Popup>
          </Marker>
        </MapContainer>
      </MapWindow>
    );
  }
}

const MapWindow = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;

  .leaflet-container {
    width: 100%;
    height: 100vh;
  }
  .leaflet-control {
    display: none;
  }
`;
