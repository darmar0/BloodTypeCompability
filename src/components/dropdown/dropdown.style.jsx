import styled from "styled-components";

export const DropDownContainer = styled("div")`
  width: 10.5em;
  cursor: pointer;
  position: absolute;
  z-index: 100;
`;

export const Header = styled("div")`
  min-width: 100%;
  display: flex;
  justify-content: space-between;
`;
export const DropDownHeader = styled("div")`
  margin-bottom: 0.8em;
  padding: 0.4em 1rem 0.4em 1rem;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  font-weight: 500;
  font-size: 1.3rem;
  color: #3faffa;
  background: #ffffff;
`;

export const DropDownListContainer = styled("div")``;

export const DropDownList = styled("ul")`
  padding: 0;
  margin: 0;
  background: #ffffff;
  border: 2px solid #e5e5e5;
  box-sizing: border-box;
  color: #3faffa;
  font-size: 1.3rem;
  font-weight: 500;
  &:first-child {
    padding-top: 0.8em;
  }
`;

export const ListItem = styled("li")`
  list-style: none;
  margin-bottom: 0.8em;
  cursor: pointer;
  padding-left: 1em;
  &:hover {
    color: #89dee2;
  }
`;
