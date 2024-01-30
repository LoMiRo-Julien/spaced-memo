import React from "react";
import Highlight from "react-highlight";

const LeJsx = () => {
  return (
    <div className="information_content">
      <h1>Le JSX au coeur de React</h1>
      <p>
        Le jsx est un "language" de structure, il ne permet pas de programmer
        mais de baliser le rendu dans une structure comprise par le navigateur.
      </p>
      <p>
        Il est très similaire dans la forme au html mais avec quelques
        modifications et ajout .
      </p>
      <div
        style={{ display: "grid", gridTemplateColumns: "50% 50%", gap: "15px" }}
      >
        <Highlight className="html">{`
       <!--  l'attribut class en html--> 
        <div class="ma_classe">content</div>
       <!--  Les evenements passe une string--> 
        <button onclick="ma_fonction()">click</button>
        `}</Highlight>
        <Highlight className="jsx">{`
    //le code jsx est toujours dans le "return" d'une fonction
    return(
        // l'attribut deviens className
        <div className="ma_classe">content</div>
        // ils passent en camelCase evec une variable comme parametre
        <button onClick={mafonction}>click</button>

        // pour utiliser Array.map()
        // il suffit d'ouvrir { pour ajouter ici du code javascript et de maper directement le jsx}
        // ex : 
        {monTableauDeFruit.map((fruit) => (
            <div key={fruit.id}>{fruit.name}</div>
        ))}
    )


        `}</Highlight>
      </div>
    </div>
  );
};

export default LeJsx;
