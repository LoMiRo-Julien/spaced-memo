import Highlight from "react-highlight";
const CreateComponent = () => {
  return (
    <div style={{ textAlign: "left", margin: "50px" }}>
      <h2>Creer un composant</h2>
      <p>
        Avec react pour crée des composants il faut savoir que REACT depuis la
        version 14 privilegie la programmation fonctionnel. <br />
        Donc chaques "composant" est en fait une fonction qui retourne du JSX.
      </p>
      <p>
        la syntaxe de cette fonction respecte 1 chose pour être reconnu en tant
        que Composant par react:
      </p>
      <ul>
        <li>Son nom commence obligatoirement par une majuscule.</li>
      </ul>
      <div style={{ width: "100%", display: "block" }}>
        <Highlight className="jsx">
          {`
          // sous forme de fonction fléchée
          const Component = (props) => {
            // La logique d'interaction
            return (
                <>
                <div>Votre rendu ICI</div>
                </>
                );
        };
        export default Component;
////////////////////////////////////////////

        // sous forme de fonction standard JS
        export default function Component () {
            // La logique d'interaction
            return (
                <>
                <div>Votre rendu ICI</div>
                </>
                );
        };
////////////////////////////////////////////`}
        </Highlight>
        <p>
          Le composant si il est crée dans un autre fichier doit être importer
          sous forme de module comme ceci
        </p>
        <Highlight className="jsx">
          {`import Component from "./path_to_my_component/Component";
//Ou si dans le meme fichier il y à plusieurs export nommé plutot qu'un seul import par default
import { Component } from "./path_to_my_component/Component";
          `}
        </Highlight>
        <p>
          Vous trouverez dans vos recherche l'ancienne syntaxe de déclaration de
          composants :{" "}
        </p>
        <p>
          Cette syntaxe étendais le constructeur natif de React.Component avec
          votre nouvelle class en lui ajoutant la methode render() qui est
          similaire au return de la syntaxe fonctionnelle.
        </p>
        <p>
          Cette syntaxe est déprécié même si elle fonctionne toujours il faut
          privilégier les nouvelles formes plus simples et plus lisibles.
        </p>
        <Highlight className="jsx">
          {`
            //Declaration sous forme de class 
            class Car extends React.Component {
                render() {
                  return <h2>Hi, I am a Car!</h2>;
                }
              }
            `}
        </Highlight>
      </div>
    </div>
  );
};

export default CreateComponent;
