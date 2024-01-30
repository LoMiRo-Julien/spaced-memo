//here localStorage gestion and méthods

import { createContext } from "react";

export const Data_Context = createContext();
export const Data_Provider = (props) => {
  const test = "ceci est un test";

  // functionnal methods
  function getData() {}
  function setData() {}

  return (
    <Data_Context.Provider value={{}}>{props.children}</Data_Context.Provider>
  );
};
