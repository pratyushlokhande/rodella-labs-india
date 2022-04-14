const express = require("express");
const app = express();
const http = require("http");
const cors = require("cors");

// MAVLINK
var { SerialPort } = require("serialport");

// SERVER
const { Server } = require("socket.io");

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

// Mavlink
var {
  MavLinkPacketSplitter,
  MavLinkPacketParser,
  MavLinkProtocolV2,
  minimal,
  common,
  ardupilotmega,
  uavionix,
  icarous,
  asluav,
  ualberta,
  send,
} = require("node-mavlink");

// substitute /dev/ttyACM0 with your serial port!
const port = new SerialPort({
  path: "/dev/ttyACM0",
  baudRate: 57600,
});

// constructing a reader that will emit each packet separately
const reader = port
  .pipe(new MavLinkPacketSplitter())
  .pipe(new MavLinkPacketParser());

// reader.on("data", (packet) => {
//   console.log(packet);
// });

// create a registry of mappings between a message id and a data class
const REGISTRY = {
  ...minimal.REGISTRY,
  ...common.REGISTRY,
  ...ardupilotmega.REGISTRY,
  ...uavionix.REGISTRY,
  ...icarous.REGISTRY,
  ...asluav.REGISTRY,
  ...ualberta.REGISTRY,
};

// io.use(cors);

io.on("connection", (socket) => {
  // USER CONNECTED
  console.log(`user connected: ${socket.id}`);

  //parse incoming serial data
  reader.on("data", (packet) => {
    const clazz = REGISTRY[packet.header.msgid];

    if (clazz.name === "Attitude") {
      const data = packet.protocol.data(packet.payload, clazz);
      // console.log(data);
      socket.emit("attitude", data);
    }

    if (clazz.name === "SysStatus") {
      const data = packet.protocol.data(packet.payload, clazz);
      // console.log(data["yawspeed"]);
      socket.emit("system_status", data);
    }

    if (clazz.name === "PowerStatus") {
      const data = packet.protocol.data(packet.payload, clazz);
      // console.log(data["yawspeed"]);
      socket.emit("battery_status", data);
    }

    if (clazz.name === "MemInfo") {
      const data = packet.protocol.data(packet.payload, clazz);
      // console.log(data["yawspeed"]);
      socket.emit("gps_raw_int", data);
    }

    if (clazz.name === "PositionTargetGlobalInt") {
      const data = packet.protocol.data(packet.payload, clazz);
      // console.log(data);
      socket.emit("global_position", data);
    }
  });

  socket.on("sendMsg", (message) => {
    port.open(async () => {
      const msg = new common.CommandInt();
      // msg.command = common.MavCmd.REQUEST_PROTOCOL_VERSION;
      msg.command = common.MavCmd.COMPONENT_ARM_DISARM;
      msg.param1 = 5;
      // the port is open - we're ready to send data
      const res = await send(port, msg);
      console.log(res);
    });

    // console.log(message);
    // console.log(msg);
  });

  // USER DISCONNECTED
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

server.listen(8080, () => {
  console.log("server is running");
});
