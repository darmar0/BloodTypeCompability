import styled from "styled-components";
import { devices } from "./utilities/breakPoints";

export const MainContainer = styled("div")`
  padding: 3rem;
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-direction: column;
  align-items: center;
  z-index: 0;

  h1 {
    color: white;
    text-align: center;
    padding-top: 0rem;
  }
  @media only screen and ${devices.xs} {
    h1 {
      font-size: 18px;
    }
    padding: 1rem;
  }
`;

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

export const Wrapper = styled("div")``;
export const BloodGroupContainer = styled("div")`
  display: grid;

  justify-content: center;
  align-content: center;
  z-index: 100;
  @media only screen and ${devices.xs} {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 0px;
    row-gap: 10px;
    padding-left: 6rem;
  }
  @media only screen and ${devices.sm} {
    grid-template-columns: repeat(4, 1fr);
    column-gap: 0px;
    row-gap: 20px;
    padding-left: 6rem;
  }
  @media only screen and ${devices.md} {
    grid-template-columns: repeat(4, 1fr);
    column-gap: 0px;
    row-gap: 20px;
    padding-left: 8rem;
  }
  @media only screen and ${devices.lg} {
    grid-template-columns: repeat(4, 1fr);
    column-gap: 0px;
    row-gap: 20px;
    padding-left: 8rem;
  }
  @media only screen and ${devices.xl} {
    grid-template-columns: repeat(4, 1fr);
    column-gap: 80px;
    row-gap: 80px;
  }
`;
