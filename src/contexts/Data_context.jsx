//here localStorage gestion and méthods

import { createContext, useState } from "react";

export const Data_Context = createContext();
export const Data_Provider = (props) => {
  const test = "ceci est un test";
  const [data, setData] = useState(
    localStorage.getItem("data") ? JSON.parse(localStorage.getItem("data")) : []
  );

  return (
    <Data_Context.Provider value={{ data, setData }}>
      {props.children}
    </Data_Context.Provider>
  );
};
