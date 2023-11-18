import React from "react";
import { useRef } from "react";
import Highlight from "react-highlight";

const UseRef = () => {
  //formulaire qui focus un élément du DOM sans interatction direct
  function Form() {
    // useRef() transmet dans la props current un référence au noeud du DOM de l'élément ou il à été appeler
    const inputRef = useRef(null);

    function handleClick() {
      inputRef.current.focus();
    }

    return (
      <>
        <input ref={inputRef} />
        <button onClick={handleClick}>Focus the input</button>
      </>
    );
  }

  return (
    <div style={{ textAlign: "left", margin: "50px" }}>
      source:{" "}
      <a
        href="https://react.dev/learn/referencing-values-with-refs"
        target="_BLANK"
      >
        Doc react
      </a>
      <p>
        Manipuler le DOM avec des références React met automatiquement à jour le
        DOM pour qu'il corresponde à votre sortie de rendu, de sorte que vos
        composants n'auront pas souvent besoin de le manipuler.{" "}
      </p>
      <p>
        Cependant, vous pourriez parfois avoir besoin d'accéder aux éléments DOM
        gérés par React, par exemple pour focaliser un nœud, y faire défiler ou
        mesurer sa taille et sa position.{" "}
      </p>
      <p>
        Il n'existe aucun moyen intégré de faire ces choses dans React, vous
        aurez donc besoin d'une référence au nœud DOM. Par exemple, cliquer sur
        le bouton focalisera l'entrée à l'aide d'une référence :
      </p>
      <h3>Exemple d'utilisation de useRef : </h3>
      <Highlight className="jsx">
        {`//formulaire qui focus un élément du DOM sans interatction direct
  function Form() {
    // useRef() transmet dans la props current un référence au noeud du DOM de l'élément ou il à été appeler
    const inputRef = useRef(null);

    function handleClick() {
      inputRef.current.focus();
    }

    return (
      <>
        <input ref={inputRef} />
        <button onClick={handleClick}>Focus the input</button>
      </>
    );
  }`}
      </Highlight>
      <div>
        <Form />
      </div>
    </div>
  );
};

export default UseRef;
