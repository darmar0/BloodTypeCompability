import styled from "styled-components";
import { devices } from "../../utilities/breakPoints";

export const TypePickerWrapper = styled("div")`
  @media only screen and ${devices.xs} {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 5px;
    row-gap: 5px;
    justify-content: center;
  }
  @media only screen and ${devices.sm} {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
  }
  @media only screen and ${devices.md} {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
  }
  @media only screen and ${devices.lg} {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
  }
  @media only screen and ${devices.xl} {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 5px;
    row-gap: 5px;
    justify-content: center;
  }
`;

export const TypePadActive = styled("div")`
  border: 1px solid white;
  cursor: pointer;
  background: #cc1100;
  transition: all 0.5s linear;
  h2 {
    color: white;
    text-align: center;
  }
  @media only screen and ${devices.xs} {
    width: 50px;
    height: 50px;
    font-size: 12px;
    line-height: 20px;
  }
  @media only screen and ${devices.sm} {
    width: 65px;
    height: 65px;
    font-size: 14px;
  }
  @media only screen and ${devices.md} {
    width: 75px;
    height: 75px;
    font-size: 14px;
  }
  @media only screen and ${devices.lg} {
    width: 85px;
    height: 85px;
    font-size: 16px;
  }
  @media only screen and ${devices.xl} {
    width: 85px;
    height: 85px;
    font-size: 16px;
  }
`;
export const TypePad = styled("div")`
  border: 1px solid white;
  cursor: pointer;
  background: #89dee2;
  &:hover {
    background-color: #cc1100;
  }
  h2 {
    color: white;
    text-align: center;
  }
  @media only screen and ${devices.xs} {
    width: 50px;
    height: 50px;
    font-size: 12px;
    line-height: 20px;
  }
  @media only screen and ${devices.sm} {
    width: 65px;
    height: 65px;
    font-size: 14px;
  }
  @media only screen and ${devices.md} {
    width: 75px;
    height: 75px;
    font-size: 14px;
  }
  @media only screen and ${devices.lg} {
    width: 85px;
    height: 85px;
    font-size: 16px;
  }
  @media only screen and ${devices.xl} {
    width: 85px;
    height: 85px;
    font-size: 16px;
  }
`;
