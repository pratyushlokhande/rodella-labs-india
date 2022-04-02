const express = require("express");
const app = express();
const http = require("http");
const cors = require("cors");

// MAVLINK
var { SerialPort } = require("serialport");
var mavlink = require("mavlink");
var mavheader = require("./mavheader.js");

// SERVER
const { Server } = require("socket.io");

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

// Mavlink
var myMAV = new mavlink(1, 1);

const port = new SerialPort({
  path: "/dev/ttyACM0",
  baudRate: 57600,
});

// BASE STATUS
var base_status = {
  system_is_armed: false,
  armed: 0,
  custom_mode: 0,
  base_mode: 0,
  frame_type: 0,
  autopilot_type: 0,
  system_status: 0,
};

// io.use(cors);

myMAV.on("ready", function () {
  console.log("MAVLink ready");

  io.on("connection", (socket) => {
    // USER CONNECTED
    console.log(`user connected: ${socket.id}`);

    //parse incoming serial data
    port.on("data", function (data) {
      myMAV.parse(data);
    });

    // HEARTBEAT message
    myMAV.on("HEARTBEAT", function (message, fields) {
      gcsDate = new Date();
      last_heartbeat = gcsDate.getTime();
      curently_armed = Boolean(
        fields.base_mode & mavheader.MAV_MODE_FLAG_DECODE_POSITION_SAFETY
      );
      if (curently_armed != base_status.system_is_armed) {
        // here emit arming changed message
        //base_status.armed = curently_armed;
        base_status.system_is_armed = curently_armed;
      }
      if (base_status.custom_mode != fields.custom_mode) {
        // emit custom mode changed message
        base_status.custom_mode = fields.custom_mode;
      }
      received_mode = true;
      base_status.base_mode = fields.base_mode;
      base_status.frame_type = fields.type;
      base_status.autopilot_type = fields.autopilot;
      base_status.system_status = fields.system_status;

      io.sockets.emit("heartbeat", base_status);
    });

    // SYSTEM_STATUS message
    myMAV.on("SYS_STATUS", function (message, fields) {
      io.sockets.emit("sys_status", fields);
    });

    // ATTITUDE message
    myMAV.on("ATTITUDE", function (message, fields) {
      // here emit attitude changed message
      io.sockets.emit("attitude", fields);
    });

    // GLOBAL POSITION
    myMAV.on("GLOBAL_POSITION_INT", function (message, fields) {
      // console.log(fields);
      io.sockets.emit("global_position", fields);
    });

    // GPS_RAW_INT message
    myMAV.on("GPS_RAW_INT", function (message, fields) {
      //   gps_raw_int = fields;
      io.sockets.emit("gps_raw_int", fields);
    });

    // Send Message
    socket.on("sendMsg", function (msg) {
      console.log(msg);
      myMAV.createMessage(
        "GPS_STATUS",
        {
          satellites_visible: 5,
          satellite_prn: [1, 2, 3, 4, 5],
          satellite_used: [2, 3, 4, 5, 6],
          satellite_elevation: [3, 4, 5, 6, 7],
          satellite_azimuth: [4, 5, 6, 7, 8],
          satellite_snr: [5, 6, 7, 8, 9],
        },
        function (message) {
          port.write(message.buffer);
          io.sockets.emit("messageResponse", message);
        }
      );
    }),
      // USER DISCONNECTED
      socket.on("disconnect", () => {
        console.log("user disconnected");
      });
  });
});

server.listen(8080, () => {
  console.log("server is running");
});
