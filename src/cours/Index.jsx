import { TabPanel, TabView } from "primereact/tabview";
import CreateComponent from "./composant/CreateComponent";
import Props from "./composant/Props";
import Effect from "./hooks/Effect";
import Hooks from "./hooks/Hooks";
import State from "./hooks/State";
import UseRef from "./hooks/UseRef";

const Index = () => {
  const tabs = [
    {
      title: "Creer un composant",
      content: <CreateComponent />,
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
  ];
  return (
    <>
      <h1>Informations</h1>
      <TabView>
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
