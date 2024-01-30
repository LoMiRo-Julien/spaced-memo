import { Button } from "primereact/button";
import { useEffect, useState } from "react";
import Highlight from "react-highlight";

const Effect = () => {
  const [isStart, setIsStart] = useState(false);
  const [lastTimer, setLastTimer] = useState(null);
  useEffect(() => {
    if (!isStart) {
      console.log("condition non remplis");
      return;
    }
    console.log("effect de bord démarré");
    setLastTimer(null);
    let time = 0;
    const timer = setInterval(() => {
      time = time + 100;
      console.log(time);
    }, 100);
    return function () {
      console.log("effect de bord annulé");
      setLastTimer((time / 1000).toString() + " secondes");
      clearInterval(timer);
    };
  }, [isStart]);

  function handleClick() {
    setIsStart(!isStart);
  }

  return (
    <div className="information_content">
      <h1>Les effets de bord (useEffect)</h1>
      <p>
        Les effets de bord sont à première vue quelque chose que l'on veux
        évité.
      </p>
      <p>
        Mais ils peuvents dans le cas ou ils sont bien controler servir à
        "écouter" les changements pour déclenché des actions.
      </p>
      <p>
        Prenons l'éxemple suivant je souhaite compter le temps qui s'écoule
        entre le moment ou je clique sur le bouton vert et celui ou je reclique
        sur le meme boton mais rouge
      </p>
      <Button onClick={handleClick} severity={isStart ? "danger" : "success"}>
        {isStart ? "stop" : "start"}
      </Button>
      <p>
        Mon dernier timer{" "}
        {lastTimer ? "à compter " + lastTimer : "est en cours ..."}
      </p>
      <Highlight className="jsx">
        {`
const [isStart, setIsStart] = useState(false);
const [lastTimer, setLastTimer] = useState(null);

//useEffect prend deux parametres une fonction vide 
// (un callBack) qui possede une methode return de netoyage de l'effect de bord 
// et un tableau de dépendance qui sert de declencheur au useEffect
useEffect(() => {
  if (!isStart) {
    console.log("condition non remplis");
    return;
  }
  console.log("effect de bord démarré");
  setLastTimer(null);
  let time = 0;
  const timer = setInterval(() => {
    time = time + 100;
    console.log(time);
  }, 100);
  return function () {
    console.log("effect de bord annulé");
    setLastTimer((time / 1000).toString() + " secondes");
    clearInterval(timer);
  };
}, [isStart]);

function handleClick() {
  setIsStart(!isStart);
}
return (
      <Button onClick={handleClick} severity={isStart ? "danger" : "success"}>
        {isStart ? "stop" : "start"}
      </Button>
      <p>
        Mon dernier timer{" "}
        {lastTimer ? "à compter " + lastTimer : "est en cours ..."}
      </p>
)
`}
      </Highlight>
    </div>
  );
};

export default Effect;
