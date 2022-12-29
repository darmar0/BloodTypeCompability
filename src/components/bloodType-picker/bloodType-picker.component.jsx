import "./bloodType-picker.style.scss";
import { useContext } from "react";
import { BloodTypeContext } from "../../context/blood_types.context";

const BloodTypePicker = ({ options }) => {
  const { chosenGroup, setChosenGroup } = useContext(BloodTypeContext);
  const onOptionClicked = (type) => () => {
    console.log("Chosen Group", chosenGroup);
    console.log("OnClick", type);
    setChosenGroup(type);
  };
  console.log("Chosen Group", chosenGroup);
  return (
    <div className="typePickerWrapper">
      {options.map((type) => (
        <div
          className={chosenGroup === type ? "typePadActive" : "typePad"}
          tabIndex={"1"}
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
