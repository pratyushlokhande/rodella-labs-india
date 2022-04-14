import React from "react";

function Mechanics() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="150"
      height="150"
      enableBackground="new 0 0 400.667 400.666"
      version="1.1"
      viewBox="0 0 400.667 400.666"
      xmlSpace="preserve"
    >
      <filter id="AI_Shadow_1" filterUnits="objectBoundingBox">
        <feGaussianBlur
          in="SourceAlpha"
          result="blur"
          stdDeviation="5"
        ></feGaussianBlur>
        <feOffset in="blur" result="offsetBlurredAlpha"></feOffset>
        <feMerge>
          <feMergeNode in="offsetBlurredAlpha"></feMergeNode>
          <feMergeNode in="SourceGraphic"></feMergeNode>
        </feMerge>
      </filter>
      <path
        fill="none"
        stroke="#FF7F00"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="5"
        d="M130 200.457L176 200.457"
      ></path>
      <path
        fill="none"
        stroke="#FF7F00"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="5"
        d="M225 200.457L271 200.457"
      ></path>
      <path
        fill="none"
        stroke="#FF7F00"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="5"
        d="M200.534 200.457L200.534 200.457"
      ></path>
      <path
        fill="none"
        stroke="#FF7F00"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="5"
        d="M200.399 103.417L190.483 130.583"
      ></path>
      <path
        fill="none"
        stroke="#FF7F00"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="5"
        d="M190.483 130.583L210.316 130.583"
      ></path>
      <path
        fill="none"
        stroke="#FF7F00"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="5"
        d="M210.316 130.583L200.399 103.417"
      ></path>
      <g filter="url(#AI_Shadow_1)">
        <path
          fill="#232323"
          d="M82.663 298.167c28.157 33.81 70.564 55.333 118.004 55.333s89.847-21.524 118.004-55.333H82.663z"
        ></path>
        <path
          fill="none"
          stroke="#353535"
          strokeMiterlimit="10"
          strokeWidth="1.3"
          d="M82.663 298.167c28.157 33.81 70.564 55.333 118.004 55.333s89.847-21.524 118.004-55.333H82.663z"
        ></path>
      </g>
      <path
        fill="none"
        stroke="#FFF"
        strokeMiterlimit="10"
        strokeWidth="4"
        d="M200.667 298.667L200.667 329.167"
      ></path>
      <path
        fill="none"
        stroke="#FFF"
        strokeMiterlimit="10"
        strokeWidth="4"
        d="M254.667 298.667L254.667 308.917"
      ></path>
      <path
        fill="none"
        stroke="#FFF"
        strokeMiterlimit="10"
        strokeWidth="4"
        d="M146.667 298.667L146.667 308.917"
      ></path>
    </svg>
  );
}

export default Mechanics;
