import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  return (
    <AppContext.Provider value={{ selectedCharacter, setSelectedCharacter }}>
      {children}
    </AppContext.Provider>
  );
};
