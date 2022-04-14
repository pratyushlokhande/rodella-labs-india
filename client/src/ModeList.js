import React from "react";
import styled from "styled-components";
const ModeList = ({ open }) => {
  const style = {
    display: open ? "flex" : "none",
  };

  return (
    <ModeListContainer style={style}>
      <ModeListItem>TAKE OFF</ModeListItem>
      <ModeListItem>LTR</ModeListItem>
      <ModeListItem>LAND</ModeListItem>
      <ModeListItem>MODES</ModeListItem>
      <ModeListItem>EMERGENCY</ModeListItem>
    </ModeListContainer>
  );
};

const ModeListContainer = styled.div`
  position: absolute;
  z-index: 1000;
  right: 9rem;
  top: 3.5rem;
  display: flex;
  flex-direction: column;
`;

const ModeListItem = styled.button`
  background-color: #003049;
  width: 200px;
  height: 30px;
  border: 1px solid #fff;
  color: #fff;
  font-weight: 700;

  &:hover {
    background-color: grey;
  }
`;

export default ModeList;
