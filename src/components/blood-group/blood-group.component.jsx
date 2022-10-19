import { Liquid, BloodGroupDiv, Background } from "./blood-group.style";
import { BloodTypeContext } from "../../context/blood_types.context";
import Person from "../../utilities/person-outline.png";
import { useContext, useEffect, useState } from "react";
import BLOOD_TYPES from "../../utilities/BLOOD_TYPES";

const BloodGroup = ({ group, groups }) => {
  const [isActive, setGroup] = useState(false);
  const { chosenGroup } = useContext(BloodTypeContext);
  useEffect(() => {
    console.log(BLOOD_TYPES[chosenGroup], groups);
    if (BLOOD_TYPES[chosenGroup] === groups) {
      console.log("TRUE");
      setGroup(true);
    }
  });
  return (
    <>
      <BloodGroupDiv>
        <img src={Person} />
        <h1>{group}</h1>
        {isActive ? <Liquid></Liquid> : <Background></Background>}
      </BloodGroupDiv>
    </>
  );
};

export default BloodGroup;
