import React from "react";

function Ring() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="150"
      height="150"
      x="0"
      y="0"
      enableBackground="new 0 0 400.667 400.666"
      viewBox="0 0 400.667 400.666"
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
      <g>
        <linearGradient
          id="SVGID_2_"
          x1="200.667"
          x2="200.667"
          y1="349.933"
          y2="50.4"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.5" stopColor="#503723"></stop>
          <stop offset="0.5" stopColor="#558EBB"></stop>
        </linearGradient>
        <path
          fill="url(#SVGID_2_)"
          d="M200.667 50.4C117.953 50.4 50.9 117.453 50.9 200.167s67.053 149.767 149.767 149.767 149.767-67.053 149.767-149.767S283.38 50.4 200.667 50.4zm0 250.1c-55.413 0-100.334-44.921-100.334-100.334 0-55.412 44.921-100.333 100.334-100.333 55.412 0 100.333 44.92 100.333 100.333S256.079 300.5 200.667 300.5z"
          filter="url(#AI_Shadow_1)"
        ></path>
        <path
          fill="none"
          stroke="#FFF"
          strokeMiterlimit="10"
          strokeWidth="4"
          d="M50.667 200.333L100.333 200.333"
        ></path>
        <path
          fill="none"
          stroke="#FFF"
          strokeMiterlimit="10"
          strokeWidth="4"
          d="M300.749 200.333L350.433 200.333"
        ></path>
        <path
          fill="none"
          stroke="#FFF"
          strokeMiterlimit="10"
          strokeWidth="4"
          d="M78.415 131.582L112.082 151.915"
        ></path>
        <path
          fill="none"
          stroke="#FFF"
          strokeMiterlimit="10"
          strokeWidth="4"
          d="M288.751 151.915L323.585 131.582"
        ></path>
        <path
          fill="none"
          stroke="#FFF"
          strokeMiterlimit="10"
          strokeWidth="4"
          d="M149.418 113.75L129.418 79.25"
        ></path>
        <path
          fill="none"
          stroke="#FFF"
          strokeMiterlimit="10"
          strokeWidth="4"
          d="M252.084 113.75L272.751 79.25"
        ></path>
        <path
          fill="#FFF"
          d="M185.918 60.085L215.251 60.085 200.585 98.918z"
        ></path>
        <path
          fill="#FFF"
          d="M119.084 117.417L112.082 124.251 126.584 131.582z"
        ></path>
        <path
          fill="#FFF"
          d="M274.084 131.582L281.251 117.417 288.751 124.5z"
        ></path>
      </g>
    </svg>
  );
}

export default Ring;
