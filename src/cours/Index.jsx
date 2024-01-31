import { TabPanel, TabView } from "primereact/tabview";
import CreateComponent from "./composant/CreateComponent";
import Props from "./composant/Props";
import Effect from "./hooks/Effect";
import Hooks from "./hooks/Hooks";
import State from "./hooks/State";
import UseRef from "./hooks/UseRef";
import Reducer from "./hooks/Reducer";
import LeJsx from "./jsx/LeJsx";
import LesRoutes from "./router/LesRoutes";
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { InputSwitch } from "primereact/inputswitch";
import spacedLogo from "../assets/spaced-memo.png";
import { Data_Context } from "../contexts/Data_context";
const Index = () => {
  const tabs = [
    {
      title: "Creer un composant",
      content: <CreateComponent />,
    },
    {
      title: "Le rendu en JSX",
      content: <LeJsx />,
    },
    {
      title: "Passer de l'information",
      content: <Props />,
    },
    {
      title: "Changer l'état",
      content: <State />,
    },
    {
      title: "Creer des hooks custom",
      content: <Hooks />,
    },
    {
      title: "Creer des réferences au DOM",
      content: <UseRef />,
    },
    {
      title: "Effets de bord",
      content: <Effect />,
    },
    {
      title: "Reducteur d'états",
      content: <Reducer />,
    },
    {
      title: "La gestion des routes coté front",
      content: <LesRoutes />,
    },
  ];
  const { switch_theme, isDarkMode } = useContext(Data_Context);
  const localTabIndex = localStorage.getItem("tabindex");
  const [activeIndex, setActiveIndex] = useState(
    localTabIndex ? parseInt(localTabIndex) : 0
  );
  const navigate = useNavigate();
  function handleTabChange(e) {
    setActiveIndex(e.index);
    localStorage.setItem("tabindex", e.index.toString());
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
        <Button onClick={() => navigate("/spaced-memo/")}>Go to App</Button>
      </div>
      <h1>Informations</h1>
      <TabView
        scrollable
        activeIndex={activeIndex}
        onTabChange={handleTabChange}
      >
        {tabs.map((tab) => {
          return (
            <TabPanel key={tab.title} header={tab.title}>
              {tab.content}
            </TabPanel>
          );
        })}
      </TabView>
    </>
  );
};

export default Index;
