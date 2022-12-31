import styled from "styled-components";

export const TypePickerWrapper = styled("div")`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 5px;
  row-gap: 5px;
  justify-content: center;
`;

export const TypePadActive = styled("div")`
  width: 85px;
  height: 85px;
  border: 1px solid white;
  cursor: pointer;
  background: #cc1100;
  transition: all 0.5s linear;
  h2 {
    color: white;
    text-align: center;
  }
`;
export const TypePad = styled("div")`
  width: 85px;
  height: 85px;
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
`;
