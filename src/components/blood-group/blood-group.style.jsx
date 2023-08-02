import styled from "styled-components";
import { keyframes } from "styled-components";
import { devices } from "../../utilities/breakPoints";

const LiquidAnimation = keyframes`
spin {
    transform: translateY(0) rotate(0deg);
  }
  100% {
    transform: translateY(-105%) rotate(500deg);
  }
`;

export const BloodGroupDiv = styled("div")`
  background-color: #cc1100;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  overflow: hidden;
  position: relative;
  img {
    position: relative;
    z-index: 2;
  }
  h1 {
    color: white;
    position: absolute;
    z-index: 2;
  }
  @media only screen and ${devices.xs} {
    width: 50px;
    img {
      width: 50px;
    }
    h1 {
      font-size: 18px;
      padding-bottom: 1.5rem;
    }
  }
  @media only screen and ${devices.sm} {
    width: 70px;
    img {
      width: 70px;
    }
    h1 {
      font-size: 20px;
      padding-bottom: 2.5rem;
    }
  }
  @media only screen and ${devices.md} {
    width: 80px;
    img {
      width: 80px;
    }
    h1 {
      font-size: 20px;
      padding-bottom: 2.5rem;
    }
  }
  @media only screen and ${devices.lg} {
    width: 80px;
    img {
      width: 80px;
    }
    h1 {
      font-size: 20px;
      padding-bottom: 2.5rem;
    }
  }
  @media only screen and ${devices.xl} {
    width: 100px;
    img {
      width: 100px;
    }
    h1 {
      font-size: 30px;
      padding-bottom: 2.5rem;
    }
  }
`;
export const Liquid = styled("div")`
  content: "";
  position: absolute;
  height: 255px;
  width: 255px;
  background: #89dee2;
  border-radius: 45%;
  animation-fill-mode: forwards;
  animation-name: ${LiquidAnimation};
  animation-duration: 8s;
  animation-iteration-count: 1;
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
