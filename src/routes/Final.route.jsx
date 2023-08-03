import { MainContainer, BloodGroupContainer } from "./finalRoute.style";
import { BLOOD_TYPES_DONATE } from "../utilities/BLOOD_TYPES";
import BloodTypePicker from "../components/bloodType-picker/bloodType-picker.component";
import BloodGroup from "../components/blood-group/blood-group.component";

const FinalRoute = () => {
  return (
    <>
      <MainContainer>
        <BloodTypePicker options={Object.keys(BLOOD_TYPES_DONATE)} />
      </MainContainer>
      <BloodGroupContainer>
        {Object.keys(BLOOD_TYPES_DONATE).map((group) => (
          <BloodGroup key={group} group={group} />
        ))}
      </BloodGroupContainer>
    </>
  );
};

export default FinalRoute;
