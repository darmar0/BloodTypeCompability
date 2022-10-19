import { useState, useContext } from "react";
import {
  Header,
  DropDownContainer,
  DropDownHeader,
  DropDownListContainer,
  DropDownList,
  ListItem,
} from "./dropdown.style";
import { BloodTypeContext } from "../../context/blood_types.context";

const Dropdown = ({ options }) => {
  const { chosenGroup, setChosenGroup } = useContext(BloodTypeContext);
  const [isOpen, setIsOpen] = useState(false);
  // const [selectedOption, setSelectedOption] = useState(options[0]);
  const toggling = () => setIsOpen(!isOpen);
  const onOptionClicked = (value) => () => {
    // setSelectedOption(value);
    setChosenGroup(value);
    setIsOpen(false);
  };
  return (
    <DropDownContainer>
      <DropDownHeader onClick={toggling}>
        <Header>
          <span>{chosenGroup}</span>
          <span>&#9663;</span>
        </Header>
      </DropDownHeader>
      {isOpen && (
        <DropDownListContainer>
          <DropDownList>
            {options.map((option) => (
              <ListItem onClick={onOptionClicked(option)} key={Math.random()}>
                {option}
              </ListItem>
            ))}
          </DropDownList>
        </DropDownListContainer>
      )}
    </DropDownContainer>
  );
};

export default Dropdown;
