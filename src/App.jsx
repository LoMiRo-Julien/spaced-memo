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
import HelperTooltip from "./components/helper-tooltip/HelperTooltip";
import CustomToast from "./components/toast/CustomToast";
import CustomStats from "./components/stats/CustomStats";
import { PrimeReactContext } from "primereact/api";
import { InputSwitch } from "primereact/inputswitch";
import { ScrollTop } from "primereact/scrolltop";
import { Data_Context } from "./contexts/Data_context";
import { useNavigate } from "react-router-dom";

//The App function return Jsx.ELEMENT => return after compilation html and javascript vanilla only
function App() {
  //gestion du theme
  const { changeTheme } = useContext(PrimeReactContext);

  // recuperation de la donnée et modification de celle-ci
  const navigate = useNavigate();
  const { data, setData, switch_theme, isDarkMode } = useContext(Data_Context);

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
        <Button onClick={() => navigate("/spaced-memo/cours")}>
          Go to learn
        </Button>
      </div>
      <div className="app_container">
        <div className="header_container">
          <h1>Choose Your Title</h1>
          <div className="header_toolbar">
            <div>Ajouter ici un composant qui permet d'ajouter un carte</div>
          </div>
        </div>
        <div className="app_content">
          <div className="card_and_stats_container">
            <div className="cards_container">
              <h3>Mes cartes à mémorisé</h3>
              <div className="cards_content">
                <div>
                  Ajouter ici un composant qui permet d'afficher les cartes (
                  les cartes sont disponible dans la variable data) le composant
                  doit rendre une carte qui est afficher ici sous forme de
                  grille. (vous pouvez imaginez d'autres rendu )
                </div>
                <div>
                  Ajouter ici un composant qui permet d'afficher les cartes (
                  les cartes sont disponible dans la variable data) le composant
                  doit rendre une carte qui est afficher ici sous forme de
                  grille. (vous pouvez imaginez d'autres rendu )
                </div>
              </div>
            </div>
            <div className="stats_container">
              <h3>Stats</h3>
              <span>Nombre de cartes terminés</span>
              <div className="stats_content">
                <div>Ajouter ici un composant capable d'afficher des stats</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
