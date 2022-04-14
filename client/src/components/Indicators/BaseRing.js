import React from "react";

function BRing() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="150"
      height="150"
      x="0"
      y="0"
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
      <g filter="url(#AI_Shadow_1)">
        <path
          fill="#232323"
          d="M200.333 33.5c-91.956 0-166.5 74.544-166.5 166.5s74.544 166.5 166.5 166.5c91.957 0 166.5-74.544 166.5-166.5S292.29 33.5 200.333 33.5zm.334 316.599c-82.714 0-149.767-67.053-149.767-149.767 0-82.713 67.053-149.767 149.767-149.767s149.767 67.053 149.767 149.767c-.001 82.714-67.054 149.767-149.767 149.767z"
        ></path>
        <path
          fill="none"
          stroke="#353535"
          strokeMiterlimit="10"
          strokeWidth="1.3"
          d="M200.333 33.5c-91.956 0-166.5 74.544-166.5 166.5s74.544 166.5 166.5 166.5c91.957 0 166.5-74.544 166.5-166.5S292.29 33.5 200.333 33.5zm.334 316.599c-82.714 0-149.767-67.053-149.767-149.767 0-82.713 67.053-149.767 149.767-149.767s149.767 67.053 149.767 149.767c-.001 82.714-67.054 149.767-149.767 149.767z"
        ></path>
      </g>
    </svg>
  );
}

export default BRing;
