//here localStorage gestion and méthods
import first_Data from "../mock_data.json";
import { createContext, useEffect, useState } from "react";

export const Data_Context = createContext();
export const Data_Provider = (props) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  function switch_theme(e) {
    setIsDarkMode(e.value);

    // Obtenez le thème actuel de l'élément de lien
    const currentTheme = document
      .getElementById("theme-link")
      .getAttribute("href");

    // Choisissez le nouveau thème en fonction du thème actuel

    const newTheme = e.value
      ? import.meta.env.BASE_URL + "themes/lara-dark-indigo/theme.css"
      : import.meta.env.BASE_URL + "themes/lara-light-indigo/theme.css";

    // Utilisez la fonction changeTheme pour changer le thème dynamiquement
    changeTheme(currentTheme, newTheme, "theme-link");
  }
  // Fin gestion du theme
  ///////////////////////////////////////////////////////////////////////////////

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
    <Data_Context.Provider value={{ data, setData, isDarkMode, switch_theme }}>
      {props.children}
    </Data_Context.Provider>
  );
};
