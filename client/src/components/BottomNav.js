import React from "react";
import AttitudeIndicator from "./AttitudeIndicator";
import styled from "styled-components";
const BottomNav = () => {
  //   var attitude = $.flightIndicator("#attitude", "attitude", {
  //     roll: 50,
  //     pitch: -20,
  //     size: 200,
  //     showBox: true,
  //   });
  // console.log($.flightIndicator(ref, "attitude", {}));
  // console.log(ref);
  // Update at 20Hz
  // var increment = 0;
  // setInterval(function () {
  //   // Attitude update
  //   attitude.setRoll(30 * Math.sin(increment / 10));
  //   attitude.setPitch(50 * Math.sin(increment / 20));

  //   increment++;
  // }, 50);

  return (
    <BTNav>
      <AttitudeIndicator />
      <PanelStatsLeft>
        <DataPanel>LON</DataPanel>
        <DataPanel>LAT</DataPanel>
        <DataPanel>DGCS</DataPanel>
        <DataPanel>HS</DataPanel>
      </PanelStatsLeft>
      <PanelStatsRight>
        <DataPanel>
          AMSL
          <hr />
          BMSL
        </DataPanel>
        <DataPanel>VS</DataPanel>
        <DataPanel>BAT</DataPanel>
        <DataPanel>FT</DataPanel>
      </PanelStatsRight>
    </BTNav>
  );
};

const BTNav = styled.div`
  position: absolute;
  z-index: 1200;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const PanelStatsLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 2rem;
  width: calc(50% - 100px);
`;
const PanelStatsRight = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: calc(50% - 100px);
  gap: 2rem;
`;
const DataPanel = styled.div`
  position: relative;
  width: 75px;
  height: 75px;
  bottom: 1rem;
  background: rgba(0, 0, 0, 0.75);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  /* border-radius: 10px; */
  border: 1px solid rgba(0, 0, 0, 0.18);
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  border: 5px solid #000;
  overflow: hidden;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  hr {
    width: 100%;
    color: #000;
    background-color: #000;
  }

  &:after {
    content: "";
    position: absolute;
    top: 50px;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: #000;
  }

  &:hover {
    transform: translateY(-10px);
  }
`;

export default BottomNav;
