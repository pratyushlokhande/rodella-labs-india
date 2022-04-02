import React, { useEffect } from "react";
import styled from "styled-components";

// Components
import Map from "./components/Map";
import VideoScreen from "./components/VideoScreen";
import Toolbar from "./components/Toolbar";
import Nav from "./components/Nav";
import Stats from "./components/Stats";
import Slider from "./components/Slider";
import io from "socket.io-client";

const socket = io.connect("http://localhost:8080");

function App() {
  const [attitude, setAttitude] = React.useState({});
  // const [baseStatus, setBaseStatus] = React.useState({});
  // const [gpsRawInt, setGpsRawInt] = React.useState({});
  // const [sysStatus, setSysStatus] = React.useState({});
  // const [globalPosition, setGlobalPosition] = React.useState({});

  useEffect(() => {
    socket.on("attitude", (data) => {
      setAttitude(data);
      // console.log(attitude);
    });

    // socket.on("battery_status", (data) => {
    //   setBaseStatus(data);
    //   // console.log(baseStatus);
    // });

    // socket.on("gps_raw_int", (data) => {
    //   setGpsRawInt(data);
    //   // console.log(gpsRawInt);
    // });

    // socket.on("system_status", (data) => {
    //   setSysStatus(data);
    //   // console.log(sysStatus);
    // });

    // socket.on("global_position", (data) => {
    //   setGlobalPosition(data);
    //   // console.log(globalPosition);
    // });
  }, []);

  // const sendMsg = () => {
  //   // console.log("sendMsg");
  //   socket.emit("sendMsg", "Hello from client");
  // };

  // socket.on("messageResponse", (data) => {
  //   console.log(data);
  // });

  return (
    <AppContainer>
      <Map />
      <VideoScreen />
      <Toolbar attitude={attitude} />
      <Nav />
      <Stats />
      <Slider />
    </AppContainer>
  );
}

const AppContainer = styled.div`
  position: relative;
  width: 100%;
`;

export default App;
