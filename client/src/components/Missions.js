import React from "react";
import styled from "styled-components";

const Missions = ({ drawMode, setDrawMode }) => {
  const toggleDrawMode = () => {
    setDrawMode(!drawMode);
  };
  return (
    <MissionContainer>
      <h3>ALL MISSIONS</h3>
      <AllMissions>
        <MissionList>
          <Mission>Mission 1</Mission>
          <Mission>Mission 2</Mission>
          <Mission>Mission 3</Mission>
          <Mission>Mission 4</Mission>
        </MissionList>
        <Button onClick={toggleDrawMode}>&#43; Mission</Button>
      </AllMissions>
    </MissionContainer>
  );
};

const MissionContainer = styled.div`
  position: absolute;
  z-index: 1000;
  top: calc(5rem + 240px);
  left: 1rem;
  width: 360px;
  height: 240px;
  border-radius: 0.5rem;
  background: rgba(0, 0, 0, 0.75);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  /* border-radius: 10px; */
  border: 1px solid rgba(0, 0, 0, 0.18);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  color: #fff;
  padding: 2rem 0;

  h3 {
    width: 100%;
    border-bottom: 2px solid #fff;
    text-align: center;
    padding-bottom: 1rem;
  }
`;

const AllMissions = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  text-align: center;
`;

const Mission = styled.div`
  position: relative;
  width: 100%;
  height: 30px;
  font-size: 1.2rem;

  &::before {
    content: "";
    position: absolute;
    bottom: -0.5rem;
    left: 50%;
    transform: translateX(-50%);
    width: 50%;
    height: 1px;
    background-color: #000;
  }
`;

const Button = styled.button`
  height: 30px;
  font-size: 1.2rem;
  border: none;
  background-color: green;
  color: #fff;
  cursor: pointer;
  padding: 0 1rem;
`;

const MissionList = styled.div`
  width: 100%;
  height: calc(1rem + 2 * 30px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 0.5em;
  }

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }

  ::-webkit-scrollbar-thumb {
    background-color: darkgrey;
    border-radius: 10px;
    outline: 1px solid slategrey;
  }
`;

export default Missions;
