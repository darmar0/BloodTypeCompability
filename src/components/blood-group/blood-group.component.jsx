import { BloodGroupContainer, BloodGroupDiv } from "./blood-group.style";
import Person from "../../utilities/person-outline.png";
const BloodGroup = ({ group, groups }) => {
  return (
    <BloodGroupDiv>
      <img src={Person} />
      <h1>{group}</h1>
    </BloodGroupDiv>
  );
};

export default BloodGroup;
