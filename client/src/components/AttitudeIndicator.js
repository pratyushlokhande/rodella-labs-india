import React from "react";
import Ring from "./Indicators/HorizonRing";
import Back from "./Indicators/HorizonBack";
import Mechanics from "./Indicators/HorizonMechanics";
import BRing from "./Indicators/BaseRing";
import styled from "styled-components";

const AttitudeIndicator = () => {
  const [attitude, setAttitude] = React.useState(90);
  var increment = 0;
  setInterval(function () {
    // Attitude update
    setAttitude(30 * Math.sin(increment / 10));

    increment++;
  }, 50);

  const style = {
    transform: `rotate(${attitude}deg)`,
  };

  return (
    <AttitudeContainer>
      <Back style={style} />
      <Ring style={style} />
      <Mechanics />
      <BRing style={style} />
    </AttitudeContainer>
  );
};

const AttitudeContainer = styled.div`
  position: absolute;
  width: 150px;
  height: 150px;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);

  transition: all 0.5s ease-in-out;

  svg {
    position: absolute;
    top: 0;
    left: 0;

    &:nth-child(1),
    &:nth-child(2),
    &:nth-child(4) {
      transform-origin: 50% 50%;
      /* transform: rotate(90deg); */
    }
  }

  &:hover {
    cursor: pointer;
    transform: translateX(-50%) scale(1.1);
  }
`;

export default AttitudeIndicator;
