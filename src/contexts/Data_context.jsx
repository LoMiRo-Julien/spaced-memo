//here localStorage gestion and méthods

import { createContext, useState } from "react";

export const Data_Context = createContext();
export const Data_Provider = (props) => {
  const [data, setData] = useState(
    localStorage.getItem("data") ? JSON.parse(localStorage.getItem("data")) : []
  );
  //   dataObject sample
  //   {
  //     "title": string,
  //     "ask": string,
  //     "response": string,
  //     "position": number,
  //     "id": uid.string,
  //     "lastView": date.string,
  // }
  return (
    <Data_Context.Provider value={{ data, setData }}>
      {props.children}
    </Data_Context.Provider>
  );
};
