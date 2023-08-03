import styled from "styled-components";
import { devices } from "./utilities/breakPoints";

export const Container = styled("div")`
  background-color: #89dee2;
  min-height: 100vh;
  min-width: 100wh;
  z-index: 100;
  @media only screen and ${devices.xs} {
    display: flex;
    justify-content: center;
    flex-direction: column-reverse;
    padding-top: 0rem;
  }
  @media only screen and ${devices.sm} {
    display: flex;
    justify-content: center;
    flex-direction: column-reverse;
    padding-top: 2rem;
  }
  @media only screen and ${devices.sm} {
    display: flex;
    justify-content: center;
    flex-direction: column-reverse;
    padding-top: 2rem;
  }
  @media only screen and ${devices.md} {
    display: flex;
    justify-content: center;
    flex-direction: column-reverse;
    padding-top: 2rem;
  }
  @media only screen and ${devices.lg} {
    display: flex;
    justify-content: center;
    flex-direction: column-reverse;
    padding-top: 2rem;
  }
  @media only screen and ${devices.xl} {
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    gap: 100px;
  }
`;
