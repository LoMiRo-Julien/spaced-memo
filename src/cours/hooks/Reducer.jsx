import { Button } from "primereact/button";
import { useReducer } from "react";
import Highlight from "react-highlight";

const Reducer = () => {
  function reducer(state, action) {
    if (action.type === "incremented_age") {
      return {
        ...state,
        age: state.age + action.value,
      };
    } else if (action.type === "incremented_taille") {
      return {
        ...state,
        taille: state.taille + action.value,
      };
    } else if (action.type === "addChild") {
      return {
        ...state,
        children: [...state.children, action.data],
      };
    }
    throw Error("Unknown action.");
  }
  const [state, dispatch] = useReducer(reducer, {
    taille: 160,
    age: 42,
    children: [],
  });

  function ageAction() {
    const action = { type: "incremented_age", value: 1 };
    dispatch(action);
  }
  function tailleAction() {
    const action = { type: "incremented_taille", value: 5 };
    dispatch(action);
  }
  function addChildAction() {
    const action = {
      type: "addChild",
      data: {
        age: Math.round(Math.random() * 10),
        poid: Math.round(Math.random() * 10),
      },
    };
    dispatch(action);
  }

  return (
    <div className="information_content">
      <h1>Le hook useReducer</h1>
      <p>
        Les réducteurs sont de methodes permettant de reduire plusieurs states
        en 1 seul fonction dispatch qui utilisera une fonction "reducer" pour
        modifier l'état des donnée.
      </p>

      <Highlight className="jsx">
        {`
        // la fonction qui sera appeler lors des dispatch

        function reducer(state, action) {
          if (action.type === "incremented_age") {
            return {
              ...state,
              age: state.age + action.value,
            };
          } else if (action.type === "incremented_taille") {
            return {
              ...state,
              taille: state.taille + action.value,
            };
          } else if (action.type === "addChild") {
            return {
              ...state,
              children: [...state.children, action.data],
            };
          }
          throw Error("Unknown action.");
        }



                // le hook useReducer(reducer, initialArg, init?)

                const [state, dispatch] = useReducer(reducer, {
                  taille: 160,
                  age: 42,
                  children: [],
                });



                                  // Les fonctions d'appels

                                  function ageAction() {
                                    const action = { type: "incremented_age", value: 1 };
                                    dispatch(action);
                                  }
                                  function tailleAction() {
                                    const action = { type: "incremented_taille", value: 5 };
                                    dispatch(action);
                                  }
                                  function addChildAction() {
                                    const action = {
                                      type: "addChild",
                                      data: {
                                        age: Math.round(Math.random() * 10),
                                        poid: Math.round(Math.random() * 10),
                                      },
                                    };
                                    dispatch(action);
                                  }
        `}
      </Highlight>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <Button onClick={ageAction}>Incrémenter l’âge</Button>
        <Button onClick={tailleAction}>Incrémenter la taille</Button>
        <Button onClick={addChildAction}>Ajouter un enfant</Button>
      </div>
      <p>
        Bonjour ! Vous avez {state.age} ans et mesure {state.taille} cm
      </p>
      {console.log(state.children)}
      <ul>
        {state.children.map((child, index) => (
          <li key={index}>
            enfant num : {index + 1}, age: {child.age} ans, pese: {child.poid}{" "}
            kg
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reducer;
