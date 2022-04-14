import React from "react";
import styled from "styled-components";

const AltitudeControl = () => {
  return (
    <AltitudeControlContainer>
      <Button>&#8593;</Button>
      <Button>&#8595;</Button>
      <Button>Set</Button>
    </AltitudeControlContainer>
  );
};

const AltitudeControlContainer = styled.div`
  position: absolute;
  z-index: 1000;
  top: 4rem;
  right: 1rem;
  width: 5rem;
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  border-radius: 0.5rem;
  background: rgba(0, 0, 0, 0.75);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  /* border-radius: 10px; */
  border: 1px solid rgba(0, 0, 0, 0.18);
`;

const Button = styled.button`
  height: 3rem;
  aspect-ratio: 1;
  border: 2px solid #000;
  background-color: green;
  color: #fff;
  cursor: pointer;
  text-align: center;
  border-radius: 50%;
  font-size: 2rem;
  font-weight: 700;

  &:last-child {
    border-radius: none;
    font-size: 1rem;
    font-weight: 700;
    text-transform: uppercase;
    background-color: darkblue;
  }
`;

export default AltitudeControl;
