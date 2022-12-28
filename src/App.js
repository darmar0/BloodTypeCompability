import {
  MainContainer,
  Container,
  Wrapper,
  BloodGroupContainer,
} from "./App.jsx";
import BLOOD_TYPES from "./utilities/BLOOD_TYPES";
import Dropdown from "./components/dropdown/dropdown.component";
import BloodTypePicker from "./components/bloodType-picker/bloodType-picker.component";
import BloodContainer from "./components/blood-container/blood.container.component.jsx";
import BloodGroup from "./components/blood-group/blood-group.component.jsx";

function App() {
  // console.log(BLOOD_TYPES);
  // console.log(Object.keys(BLOOD_TYPES).map((i) => BLOOD_TYPES[i]));
  return (
    <Container>
      <MainContainer>
        <h1>WHO THE BLOOD IS FOR</h1>
        {/* <Dropdown options={Object.keys(BLOOD_TYPES)} /> */}
        <BloodTypePicker options={Object.keys(BLOOD_TYPES)} />
        <Wrapper>
          <BloodContainer />
        </Wrapper>
      </MainContainer>
      <BloodGroupContainer>
        {Object.keys(BLOOD_TYPES).map((group) => (
          <BloodGroup key={group} group={group} />
        ))}
      </BloodGroupContainer>
    </Container>
  );
}

export default App;
