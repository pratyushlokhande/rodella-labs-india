import React from "react";
import styled from "styled-components";
const Slider = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <SliderContainer>
      <RangeSlider
        type="range"
        min="0"
        max="10"
        value={value}
        onChange={handleChange}
      />
      <SliderInput
        type="number"
        min="0"
        max="10"
        value={value}
        onChange={handleChange}
      />
    </SliderContainer>
  );
};

const SliderContainer = styled.div`
  position: absolute;
  z-index: 1000;
  top: 4rem;
  right: 2rem;
  width: 4rem;
  height: calc(100% - 10rem);
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
  color: #fff;
`;

const RangeSlider = styled.input`
  position: absolute;
  transform: rotate(270deg);
  bottom: calc(50% + 1.5rem);
  -webkit-appearance: none;
  width: calc(100vh - 17rem);
  height: 15px;
  border-radius: 5px;
  background: #d3d3d3;
  outline: none;
  opacity: 0.7;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;

  &:hover {
    opacity: 1; /* Fully shown on mouse-over */
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: #04aa6d;
    cursor: pointer;
  }

  &::-moz-range-thumb {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: #04aa6d;
    cursor: pointer;
  }
`;

const SliderInput = styled.input`
  position: absolute;
  bottom: 1.5rem;
  left: 50%;
  transform: translateX(-50%);
  width: 3rem;
  height: 3rem;
  text-align: center;
  font-size: 1.5rem;
  /* background: #d3d3d3; */
  outline: none;
  background-color: #fff;
  border-radius: 0.5rem;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  color: #fff;
  -moz-appearance: textfield;

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    appearance: none;
  }

  &:hover::-webkit-inner-spin-button,
  &:hover::-webkit-outer-spin-button {
    -webkit-appearance: auto;
    appearance: auto;
  }

  &:hover,
  &:focus {
    -moz-appearance: number-input;
  }
`;

export default Slider;
