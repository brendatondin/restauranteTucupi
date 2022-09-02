import React, { createContext } from "react";

export const TucupiContext = createContext();

const TucupiProvider = ({ children }) => {
  const context = {};
  return (
    <TucupiContext.Provider value={context}>{children}</TucupiContext.Provider>
  );
};

export default TucupiProvider;
