import styled from "styled-components";

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
`;

export const Container = styled("div")`
  background-color: #89dee2;
  min-height: 100vh;
  min-width: 100wh;
  z-index: 100;
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  gap: 100px;
`;

export const Wrapper = styled("div")``;
export const BloodGroupContainer = styled("div")`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 80px;
  z-index: 100;
  row-gap: 80px;
`;

// .main-container {
//   background-color: #89dee2;
//   min-height: 100vh;
//   h1 {
//     color: white;
//     text-align: center;
//     padding-top: 3rem;
//   }
// }
