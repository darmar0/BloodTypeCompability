import { Liquid, BloodGroupDiv, Background } from "./blood-group.style";
import { BloodTypeContext } from "../../context/blood_types.context";
import Person from "../../utilities/person-outline.png";
import { useContext, useEffect, useState } from "react";
import BLOOD_TYPES from "../../utilities/BLOOD_TYPES";

const BloodGroup = ({ group }) => {
  const [isActive, setGroup] = useState({});
  const { chosenGroup } = useContext(BloodTypeContext);
  useEffect(() => {
    setGroup({});
    setInterval(() => setGroup(group), 100);
  }, [chosenGroup, group]);

  return (
    <>
      <BloodGroupDiv>
        <img src={Person} alt={group} />
        <h1>{group}</h1>
        {BLOOD_TYPES[chosenGroup].includes(isActive) ? (
          <Liquid></Liquid>
        ) : (
          <Background></Background>
        )}
      </BloodGroupDiv>
    </>
  );
};

export default BloodGroup;
