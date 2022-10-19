import styled from "styled-components";
import { keyframes } from "styled-components";

const LiquidAnimation = keyframes`
spin {
    transform: translateY(0) rotate(0deg);
  }
  100% {
    transform: translateY(-105%) rotate(500deg);
  }
`;

export const BloodGroupDiv = styled("div")`
  width: 100px;
  //   min-height: 200px;
  background-color: #cc1100;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  overflow: hidden;
  position: relative;
  img {
    width: 100px;
    position: relative;
    z-index: 2;
  }
  h1 {
    color: black;
    font-size: 35px;
    position: absolute;
    z-index: 2;
  }
`;
export const Liquid = styled("div")`
  content: "";
  position: absolute;
  height: 255px;
  width: 255px;
  background: #89dee2;
  //   background: blue;
  border-radius: 45%;
  //   bottom: 86%;
  //   left: -32%;
  animation-name: ${LiquidAnimation};
  animation-duration: 8s;
  animation-iteration-count: infinite;
  z-index: 1;
`;
export const Background = styled("div")`
  content: "";
  position: absolute;
  height: 255px;
  width: 255px;
  background: #89dee2;
  border-radius: 45%;
  z-index: 1;
`;
