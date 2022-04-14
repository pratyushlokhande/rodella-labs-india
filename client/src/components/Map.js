import React, { Component } from "react";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  FeatureGroup,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import styled from "styled-components";
import { EditControl } from "react-leaflet-draw";
import "leaflet-draw/dist/leaflet.draw.css";
const markerIcon = new L.Icon({
  iconUrl: require("../assets/drone.png"),
  iconSize: [40, 40],
});

const Map = ({ drawMode, screenMode }) => {
  const [position, setPosition] = React.useState([23.259933, 77.412613]);
  const [zoom, setZoom] = React.useState(12);
  const [maxZoom, setMaxZoom] = React.useState(18);

  const onDrawCreated = (e) => {
    console.log(e);
  };

  return (
    <MapWindow drawMode={drawMode} screenMode={screenMode}>
      <MapContainer center={position} zoom={zoom} maxZoom={maxZoom}>
        <FeatureGroup>
          <EditControl position="bottomright" onCreated={onDrawCreated} />
        </FeatureGroup>
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
};

export default Map;

const MapWindow = styled.div`
  /* position: relative; */
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  .leaflet-container {
    width: 100%;
    height: 100vh;
  }

  ${({ screenMode }) =>
    screenMode &&
    `
    top: 4rem;
    left: 1rem;
    width: 360px;
    height: 240px;
    .leaflet-container {
      width: 100%;
      height: 240px;
    }
    `}

  .leaflet-control-zoom {
    display: none;
  }

  ${({ drawMode }) =>
    !drawMode &&
    `.leaflet-draw-section {
        display: none;
      }`};

  /* .leaflet-draw-section {
    display: none;
  } */
`;
