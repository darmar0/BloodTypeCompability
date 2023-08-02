import { MainContainer, Container, BloodGroupContainer } from "./App.jsx";
import BLOOD_TYPES from "./utilities/BLOOD_TYPES";
import BloodTypePicker from "./components/bloodType-picker/bloodType-picker.component";
import BloodGroup from "./components/blood-group/blood-group.component.jsx";

function App() {
  return (
    <Container>
      <MainContainer>
        <h1>WHO THE BLOOD IS FOR?</h1>
        <BloodTypePicker options={Object.keys(BLOOD_TYPES)} />
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
