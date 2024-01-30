//here localStorage gestion and méthods
import first_Data from "../mock_data.json";
import { createContext, useEffect, useState } from "react";

export const Data_Context = createContext();
export const Data_Provider = (props) => {
  const [data, setData] = useState(
    localStorage.getItem("data") ? JSON.parse(localStorage.getItem("data")) : []
  );

  useEffect(() => {
    const isFirstVisit = localStorage.getItem("firstOpened");
    if (data.length === 0 && !isFirstVisit) {
      //Si pas de donnés intégration de la maquette de donnée dans le local storage
      localStorage.setItem("data", JSON.stringify(first_Data));
      localStorage.setItem("firstOpened", "true");
      //Ajout de ces données par le hook useState
      setData(first_Data);
    } else {
      //sinon Enregistrement des données par écrasement des données précédentes
      localStorage.setItem("data", JSON.stringify(data));
    }
    //pas de return car pas de nettoyage à faire
    //fonction executé  à chaques modification de data
  }, [data]);

  return (
    <Data_Context.Provider value={{ data, setData }}>
      {props.children}
    </Data_Context.Provider>
  );
};
