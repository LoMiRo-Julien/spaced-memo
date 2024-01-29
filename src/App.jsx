import { useContext, useEffect, useRef, useState } from "react";
import "./App.css";
import CustomCard from "./components/card/CustomCard";
import CustomDialog from "./components/dialog/CustomDialog";
import CardForm from "./components/form/CardForm";
import dayjs from "dayjs";
import ForcedViewSelector from "./components/forcedView/ForcedViewSelector";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import spacedLogo from "./assets/spaced-memo.png";
import first_Data from "./mock_data.json";
import HelperTooltip from "./components/helper-tooltip/HelperTooltip";
import CustomToast from "./components/toast/CustomToast";
import CustomStats from "./components/stats/CustomStats";
import { PrimeReactContext } from "primereact/api";
import { InputSwitch } from "primereact/inputswitch";
import { ScrollTop } from "primereact/scrolltop";

//The App function return Jsx.ELEMENT => return after compilation html and javascript vanilla only
function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { changeTheme } = useContext(PrimeReactContext);
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

  return (
    <>
      <div className="header">
        <img id="logo-app" src={spacedLogo} alt="Spaced-logo" />
        <div className="switch">
          <InputSwitch
            id="dark_switch"
            checked={isDarkMode}
            onChange={(e) => switch_theme(e)}
          />
        </div>
      </div>
      <div className="app_container">
        <div className="header_container">
          <h1>Your Title</h1>
          <div className="header_toolbar"></div>
        </div>
        <div className="app_content">
          <div className="card_and_stats_container">
            <div className="cards_container">
              <h3>Mes cartes à mémorisé</h3>
              <div className="cards_content"></div>
            </div>
            <div className="stats_container">
              <h3>Stats</h3>
              <span>Nombre de cartes terminés</span>
              <div className="stats_content"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
