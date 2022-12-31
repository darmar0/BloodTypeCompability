import { createContext, useState, useEffect } from "react";

export const BloodTypeContext = createContext({
  chosenGroup: null,
  setChosenGroup: () => null,
});

export const BloodTypeProvider = ({ children }) => {
  const [chosenGroup, setChosenGroup] = useState("A+");
  const value = { chosenGroup, setChosenGroup };
  return (
    <BloodTypeContext.Provider value={value}>
      {children}
    </BloodTypeContext.Provider>
  );
};
