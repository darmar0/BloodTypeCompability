import { Liquid, BloodGroupDiv, Background } from "./blood-group.style";
import { BloodTypeContext } from "../../context/blood_types.context";
import Person from "../../utilities/person-outline.png";
import { useContext, useEffect, useState } from "react";
import { BLOOD_TYPES_DONATE } from "../../utilities/BLOOD_TYPES";
import { BLOOD_TYPES_RESIVE } from "../../utilities/BLOOD_TYPES";
import { useParams } from "react-router";

const BloodGroup = ({ group }) => {
  const [isActive, setGroup] = useState({});
  const { chosenGroup } = useContext(BloodTypeContext);
  let { type } = useParams();
  useEffect(() => {
    setGroup({});
    setInterval(() => setGroup(group), 10);
  }, [chosenGroup, group]);
  return (
    <>
      <BloodGroupDiv>
        <img src={Person} alt={group} />
        <h1>{group}</h1>
        {type === "donate" ? (
          BLOOD_TYPES_DONATE[chosenGroup].includes(isActive) ? (
            <Liquid></Liquid>
          ) : (
            <Background></Background>
          )
        ) : BLOOD_TYPES_RESIVE[chosenGroup].includes(isActive) ? (
          <Liquid></Liquid>
        ) : (
          <Background></Background>
        )}
      </BloodGroupDiv>
    </>
  );
};

export default BloodGroup;
