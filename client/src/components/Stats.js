import React from "react";
import styled from "styled-components";

const Stats = () => {
  return (
    <StatsContainer>
      <StatusItem>Compass</StatusItem>
      <StatusItem>Drone Angle</StatusItem>
    </StatsContainer>
  );
};

const StatsContainer = styled.div`
  position: absolute;
  z-index: 1000;
  bottom: 6rem;
  left: 2rem;
  padding: 0.5rem;
  width: 480px;
  height: calc(100% - 15rem - 300px);
  background-color: #fff;
  border-radius: 0.5rem;
  background: rgba(0, 0, 0, 0.75);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border: 1px solid rgba(0, 0, 0, 0.18);
  display: flex;
  gap: 0.5rem;
`;

const StatusItem = styled.div`
  width: 100%;
  /* height: 100%; */
  aspect-ratio: 1;
  background-color: #fff;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.75);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;

  &:first-child {
    background-color: #ee6c4d;
  }

  &:last-child {
    background-color: #ee964b;
  }
`;

export default Stats;
