import React, { Component } from "react";
import styled from "styled-components";
export default class VideoScreen extends Component {
  render() {
    return (
      <Screen
        dangerouslySetInnerHTML={{
          __html:
            "<iframe src='https://www.youtube.com/embed/4WxPYqveZ-c?autoplay=1' title='@pratsfolio' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>",
        }}
      />
    );
  }
}

const Screen = styled.div`
  position: absolute;
  top: 4rem;
  left: 2rem;
  width: 480px;
  aspect-ratio: 4/3;
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
`;
