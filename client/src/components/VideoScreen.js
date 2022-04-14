import React, { Component } from "react";
import styled from "styled-components";

const VideoScreen = ({ screenMode }) => {
  return (
    <Screen
      screenMode={screenMode}
      dangerouslySetInnerHTML={{
        __html:
          "<iframe src='https://www.youtube.com/embed/4WxPYqveZ-c?autoplay=1' title='@pratsfolio' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>",
      }}
    />
  );
};

const Screen = styled.div`
  position: absolute;
  top: 4rem;
  left: 1rem;
  width: 360px;
  height: 240px;
  background-color: #fff;
  border: 1px solid #000;
  z-index: 1000;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  border-radius: 0.5rem;
  iframe {
    width: 100%;
    height: 100%;
  }

  ${({ screenMode }) =>
    screenMode &&
    `
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: -1;
    `}
`;

export default VideoScreen;
