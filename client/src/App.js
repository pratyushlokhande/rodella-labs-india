import React, { useEffect } from "react";
import styled from "styled-components";

// Components
import Map from "./components/Map";
import VideoScreen from "./components/VideoScreen";
import Toolbar from "./components/Toolbar";
import Nav from "./components/Nav";
import io from "socket.io-client";
import BottomNav from "./components/BottomNav";
import ModeList from "./ModeList";
import Modal from "./components/Modal";
import Missions from "./components/Missions";
import AltitudeControl from "./components/AltitudeControl";

const socket = io.connect("http://localhost:8080");

function App() {
  const [attitude, setAttitude] = React.useState({});
  // const [baseStatus, setBaseStatus] = React.useState({});
  // const [gpsRawInt, setGpsRawInt] = React.useState({});
  // const [sysStatus, setSysStatus] = React.useState({});
  // const [globalPosition, setGlobalPosition] = React.useState({});

  // useEffect(() => {
  //   socket.on("attitude", (data) => {
  //     setAttitude(data);
  //     // console.log(attitude);
  //   });

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
  // }, []);

  const sendMsg = () => {
    // console.log("sendMsg");
    socket.emit("sendMsg", "Hello from client");
  };

  // socket.on("messageResponse", (data) => {
  //   console.log(data);
  // });

  const [open, setOpen] = React.useState(false);
  const [modalState, setModalState] = React.useState(false);
  const [drawMode, setDrawMode] = React.useState(false);
  const [screenMode, setScreenMode] = React.useState(false);

  return (
    <AppContainer>
      <Map drawMode={drawMode} screenMode={screenMode} />
      <VideoScreen screenMode={screenMode} />
      {/* <Toolbar attitude={attitude} /> */}
      <BottomNav />
      <Nav
        open={open}
        setOpen={setOpen}
        modalState={modalState}
        setModalState={setModalState}
        sendMsg={sendMsg}
        screenMode={screenMode}
        setScreenMode={setScreenMode}
      />
      {/* <Stats /> */}
      <ModeList open={open} />
      {modalState && (
        <Modal modalState={modalState} setModalState={setModalState} />
      )}
      <Missions drawMode={drawMode} setDrawMode={setDrawMode} />
      <AltitudeControl />
    </AppContainer>
  );
}

const AppContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
`;

export default App;
