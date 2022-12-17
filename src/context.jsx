import React, { useState } from "react";
import { useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [dataBase, setDataBase] = useState(false);
  const [cockDetail, setCockDetail] = useState(false);
  return (
    <AppContext.Provider
      value={{ dataBase, setDataBase, cockDetail, setCockDetail }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { useGlobalContext, AppProvider };
