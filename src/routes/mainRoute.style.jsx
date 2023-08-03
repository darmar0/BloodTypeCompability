import styled from "styled-components";
import { devices } from "../utilities/breakPoints";

export const MainRouteContainer = styled("div")`
  display: flex;
  justify-content: center;
  gap: 4rem;
`;
export const BloodGroupDiv = styled("div")`
  background-color: #89dee2;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  img {
    position: relative;
    z-index: 2;
  }
  h1 {
    color: white;
    position: absolute;
    z-index: 2;
  }
  &:hover {
    background-color: #cc1100;
  }
  &:focus {
    background-color: #cc1100;
  }
  @media only screen and ${devices.xs} {
    width: 80px;
    img {
      width: 80px;
    }
    h1 {
      font-size: 15px;
      padding-bottom: 1.5rem;
    }
  }
  @media only screen and ${devices.sm} {
    width: 100px;
    img {
      width: 100px;
    }
    h1 {
      font-size: 20px;
      padding-bottom: 2.5rem;
    }
  }
  @media only screen and ${devices.md} {
    width: 100px;
    img {
      width: 100px;
    }
    h1 {
      font-size: 20px;
      padding-bottom: 2.5rem;
    }
  }
  @media only screen and ${devices.lg} {
    width: 100px;
    img {
      width: 100px;
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
      font-size: 20px;
      padding-bottom: 2.5rem;
    }
  }
`;
