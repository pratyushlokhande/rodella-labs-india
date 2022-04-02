import React from "react";
import styled from "styled-components";

const Toolbar = ({ attitude }) => {
  return (
    <ToolWindow>
      <ToolItem>Pitch: {attitude.pitch.toFixed(4)}</ToolItem>
      <ToolItem>Roll: {attitude.rollspeed.toFixed(4)}</ToolItem>
      <ToolItem>Yaw: {attitude.yaw.toFixed(4)}</ToolItem>
      <ToolItem>Boot: {attitude.timeBootMs}</ToolItem>
      <ToolItem>Current Mission</ToolItem>
      <ToolItem>Set Mission</ToolItem>
    </ToolWindow>
  );
};

const ToolWindow = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  width: calc(100% - 4rem);
  height: 4rem;
  /* background-color: #fff;
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
    rgba(14, 30, 37, 0.32) 0px 2px 16px 0px; */
  z-index: 1000;
  border-radius: 0.5rem;
  background: rgba(0, 0, 0, 0.75);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  /* border-radius: 10px; */
  border: 1px solid rgba(0, 0, 0, 0.18);
  display: flex;
  padding: 0.5rem;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
  color: #fff;
`;

const ToolItem = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fff;
  border-radius: 0.5rem;
  background: rgba(255, 255, 255, 0.75);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000;
  font-size: 1.5rem;

  &:last-child {
    background-color: #284b63;
    color: #fff;
    border: 1px solid #284b63;
  }
`;

export default Toolbar;
