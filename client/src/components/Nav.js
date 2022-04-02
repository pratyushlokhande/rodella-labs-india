import React from "react";
import styled from "styled-components";

const Nav = () => {
  return (
    <Navbar>
      <NavTitle>Rodella Labs India</NavTitle>
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

export default Nav;
