import styled from "styled-components";
import { keyframes } from "styled-components";

const LiquidAnimation = keyframes`
spin {
    transform: translateY(100%) rotate(0deg);
  }
  100% {
    transform: translateY(100%) rotate(500deg);
  }
`;

export const Liquid = styled("div")`
  content: "";
  position: absolute;
  height: 250px;
  width: 250px;
  background: #89dee2;
  //   background: blue;
  border-radius: 45%;
  bottom: 86%;
  left: -32%;
  animation-name: ${LiquidAnimation};
  animation-duration: 8s;
  animation-iteration-count: infinite;
  z-index: 100;
`;
export const BloodContainerBox = styled("div")`
  background-color: #cc1100;
  height: 238px;
  overflow: hidden;
  position: relative;
  img {
    width: 150px;
    height: 240px;
    z-index: 100;
    position: relative;
  }
`;
