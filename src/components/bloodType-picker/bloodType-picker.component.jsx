import { useContext } from "react";
import { BloodTypeContext } from "../../context/blood_types.context";
import {
  TypePad,
  TypePadActive,
  TypePickerWrapper,
} from "./bloodType-picker.style.jsx";

const BloodTypePicker = ({ options }) => {
  const { chosenGroup, setChosenGroup } = useContext(BloodTypeContext);
  const onOptionClicked = (type) => () => {
    setChosenGroup(type);
  };
  return (
    <TypePickerWrapper>
      {options.map((type) =>
        chosenGroup === type ? (
          <TypePadActive onClick={onOptionClicked(type)} key={Math.random()}>
            {" "}
            <h2>{type}</h2>{" "}
          </TypePadActive>
        ) : (
          <TypePad onClick={onOptionClicked(type)} key={Math.random()}>
            {" "}
            <h2>{type}</h2>{" "}
          </TypePad>
        )
      )}
    </TypePickerWrapper>
  );
};

export default BloodTypePicker;
