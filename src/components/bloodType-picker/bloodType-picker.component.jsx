import "./bloodType-picker.style.scss";
import { useState, useContext, useEffect } from "react";
import { BloodTypeContext } from "../../context/blood_types.context";

const BloodTypePicker = ({ options }) => {
  const { chosenGroup, setChosenGroup } = useContext(BloodTypeContext);
  const [isClicked, setClick] = useState(false);
  const onOptionClicked = (type) => () => {
    console.log("OnClick", type);
    console.log("Click", isClicked);
    setChosenGroup(type);
    setClick(true);
  };
  return (
    <div className="typePickerWrapper">
      {options.map((type) => (
        <div
          className="typePad"
          tabIndex={"2"}
          onClick={onOptionClicked(type)}
          key={Math.random()}
        >
          <h2>{type}</h2>
        </div>
      ))}
      {/* {options.map((type) => (
        <div className="typePadLiquid" key={Math.random()}></div>
      ))} */}
    </div>
  );
};

export default BloodTypePicker;
