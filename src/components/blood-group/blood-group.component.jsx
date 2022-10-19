import { Liquid, BloodGroupDiv, Background } from "./blood-group.style";
import { BloodTypeContext } from "../../context/blood_types.context";
import Person from "../../utilities/person-outline.png";
import { useContext, useEffect, useState } from "react";
import BLOOD_TYPES from "../../utilities/BLOOD_TYPES";

const BloodGroup = ({ group }) => {
  const [isActive, setGroup] = useState(false);
  const { chosenGroup } = useContext(BloodTypeContext);
  console.log(BLOOD_TYPES[chosenGroup]);
  //   useEffect(() => {
  //     if (BLOOD_TYPES[chosenGroup].includes(group)) {
  //       console.log("TRUE");
  //       setGroup(true);
  //     }
  //   }, [chosenGroup]);
  return (
    <>
      <BloodGroupDiv>
        <img src={Person} />
        <h1>{group}</h1>
        {BLOOD_TYPES[chosenGroup].includes(group) ? (
          <Liquid></Liquid>
        ) : (
          <Background></Background>
        )}
      </BloodGroupDiv>
    </>
  );
};

export default BloodGroup;
