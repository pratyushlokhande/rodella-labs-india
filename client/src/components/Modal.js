import React from "react";
import styled from "styled-components";
const Modal = ({ modalState, setModalState }) => {
  const toggleModal = () => {
    setModalState(!modalState);
  };

  return (
    <ModalContainer>
      <ModalContent>
        <h1>
          Enter initial height
          <br /> for take-off..
        </h1>
        <ModalHeader placeholder="Enter altitude..." />
        <Button onClick={toggleModal}>OK</Button>
      </ModalContent>
    </ModalContainer>
  );
};

const ModalContainer = styled.div`
  position: fixed;
  z-index: 10000;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  text-align: center;
`;

const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  height: 300px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const ModalHeader = styled.input`
  width: 80%;
  height: 50px;
  border: none;
  border: 1px solid #ccc;
  padding: 0.5rem;
  font-size: 1.2rem;
  font-weight: bold;
  color: #333;
  background-color: #fff;
  text-align: center;
`;

const Button = styled.button`
  height: 50px;
  padding: 0 1rem;
  border: none;
  border-radius: 5px;
  background-color: #333;
  color: #fff;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  margin-top: 0.5rem;
`;

export default Modal;
