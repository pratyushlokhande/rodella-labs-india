import React from "react";
import styled from "styled-components";

const Nav = ({
  open,
  setOpen,
  modalState,
  setModalState,
  sendMsg,
  screenMode,
  setScreenMode,
}) => {
  const toggleMode = () => {
    setOpen(!open);
  };

  const toggleModal = () => {
    setModalState(!modalState);
  };
  const toggleScreenMode = () => {
    setScreenMode(!screenMode);
  };

  return (
    <Navbar>
      <NavTitle>Rodella Labs India</NavTitle>
      <NavLinks>
        <NavItem onClick={sendMsg}>ARM</NavItem>
        <NavItem onClick={toggleModal}>TAKE OFF</NavItem>
        <NavItem>LTR</NavItem>
        <NavItem>LAND</NavItem>
        <NavItem
          style={{ backgroundColor: "#457b9d" }}
          onClick={toggleScreenMode}
        >
          SCREEN MODE
        </NavItem>
        <NavItem style={{ backgroundColor: "#fb8500" }} onClick={toggleMode}>
          MODES
        </NavItem>
        <NavItem>EMERGENCY</NavItem>
      </NavLinks>
    </Navbar>
  );
};

const Navbar = styled.div`
  position: absolute;
  z-index: 1000;
  top: 0;
  left: 0;
  width: 100%;
  height: 3rem;
  background-color: #000;
  display: flex;
  padding: 0 2rem;
  align-items: center;
  justify-content: space-between;
`;

const NavTitle = styled.h3`
  color: #fff;
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1rem;
`;

const NavItem = styled.button`
  padding: 0.3rem 0.5rem;
  background: #007200;
  color: #fff;
  border: none;
  font-weight: 700;

  &:last-child {
    background-color: red;
  }

  &:hover {
    background-color: grey;
  }
`;

export default Nav;
