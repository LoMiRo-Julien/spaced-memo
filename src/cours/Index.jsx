import CreateComponent from "./composant/CreateComponent";
import Props from "./composant/Props";
import Hooks from "./hooks/Hooks";
import State from "./hooks/State";
import UseRef from "./hooks/UseRef";

const Index = () => {
  return (
    <>
      <h1>Informations</h1>
      <CreateComponent />
      <Props />
      <State />
      <Hooks />
      <UseRef />
    </>
  );
};

export default Index;
