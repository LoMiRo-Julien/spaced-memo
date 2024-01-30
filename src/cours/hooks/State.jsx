import { Button } from "primereact/button";
import { useState } from "react";
import Highlight from "react-highlight";

const State = () => {
  // const state = useState(10);
  // console.log(Array.isArray(state)); // true
  // console.log(state[0]); // 10 <- la valeur initial du state
  // console.log(state[1]);
  const [whatInSetState, setWhatInSetState] = useState(
    "Il y a quoi dans un setState ???"
  );

  const func_setState = `{
    /* function dispatchSetState(fiber, queue, action) {
          {
            if (typeof arguments[3] === "function") {
              error("State updates from the useState() and useReducer()
               Hooks don't support the second callback argument. 
               To execute a side effect after rendering, declare it in the component body with 
               useEffect().");
            }
          }
          var lane = requestUpdateLane(fiber);
          var update = {
            lane,
            action,
            hasEagerState: false,
            eagerState: null,
            next: null
          };
          if (isRenderPhaseUpdate(fiber)) {
            enqueueRenderPhaseUpdate(queue, update);
          } else {
            var alternate = fiber.alternate;
            if (fiber.lanes === NoLanes && (alternate === null || alternate.lanes === NoLanes)) {
              var lastRenderedReducer = queue.lastRenderedReducer;
              if (lastRenderedReducer !== null) {
                var prevDispatcher;
                {
                  prevDispatcher = ReactCurrentDispatcher$1.current;
                  ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnUpdateInDEV;
                }
                try {
                  var currentState = queue.lastRenderedState;
                  var eagerState = lastRenderedReducer(currentState, action);
                  update.hasEagerState = true;
                  update.eagerState = eagerState;
                  if (objectIs(eagerState, currentState)) {
                    enqueueConcurrentHookUpdateAndEagerlyBailout(fiber, queue, update, lane);
                    return;
                  }
                } catch (error2) {
                } finally {
                  {
                    ReactCurrentDispatcher$1.current = prevDispatcher;
                  }
                }
              }
            }
            var root2 = enqueueConcurrentHookUpdate(fiber, queue, update, lane);
            if (root2 !== null) {
              var eventTime = requestEventTime();
              scheduleUpdateOnFiber(root2, fiber, lane, eventTime);
              entangleTransitionUpdate(root2, queue, lane);
            }
          }
          markUpdateInDevTools(fiber, lane);
        }*/
  }`;
  const base_text = "Il y a quoi dans un setState ???";
  function handleState() {
    if (whatInSetState.length < 100) {
      setWhatInSetState(func_setState);
    } else {
      setWhatInSetState("Il y a quoi dans un setState ???");
    }
  }

  const [boolVal, setBoolVal] = useState(false);
  function handleBoolState() {
    setBoolVal((current_value) => {
      if (boolVal) {
        setWhatInSetState(base_text);
      } else {
        setWhatInSetState(func_setState);
      }
      return !current_value;
    });
  }

  const [count1, setCount1] = useState(0);

  function incrementWithState() {
    setCount1((current_value) => {
      return ++current_value;
    });
    console.log("Ici mon premier compteur", count1);
  }
  let count2 = 0;
  function incrementWithoutState() {
    count2 = ++count2;
    console.log("Ici mon deuxieme compteur", count2);
  }

  return (
    <div className="information_content">
      <h1>Le state et le hook useState</h1>
      <p>Dans react la pierre angulaires est la gestion d'état.</p>
      <p>
        Le but est de pouvoir modifier du contenu en fonction d'état sans
        actualisé la page et en continu.
      </p>
      <p>C'est le State qui ce charge de ça.</p>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Button onClick={handleState}>Clique pour modifier le state</Button>
        <Button onClick={handleBoolState}>Une autre maniere de le faire</Button>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "50% 50%" }}>
        <Highlight className="jsx" style={{ maxWidth: "50%" }}>{`
      const state = useState(10);
      console.log(Array.isArray(state)); // true
      console.log(state[0]); //la veleur  10 <- la valeur initial du state
      console.log(state[1]); // le seter ${whatInSetState}
      
      
      `}</Highlight>
        <Highlight className="jsx">{`
      
      const [whatInSetState, setWhatInSetState] = useState(
        "Il y a quoi dans un setState ???"
      );
    
      const func_setState = {
        /* function dispatchSetState(fiber, queue, action) {
             ///////
             ///////
             ///////
             ///////
              markUpdateInDevTools(fiber, lane);
            }*/
      };
      const base_text = "Il y a quoi dans un setState ???";
      function handleState() {
        if (whatInSetState.length < 100) {
          setWhatInSetState(func_setState);
        } else {
          setWhatInSetState("Il y a quoi dans un setState ???");
        }
      }
    
      const [boolVal, setBoolVal] = useState(false);
      function handleBoolState() {
        setBoolVal((current_value) => {
          if (current_value) {
            setWhatInSetState(base_text);
          } else {
            setWhatInSetState(func_setState);
          }
          return !current_value;
        });
      }
     <Button onClick={handleState}>Clique pour modifier le state</Button>
          <Button onClick={handleBoolState}>Une autre maniere de le faire</Button>
      
      `}</Highlight>
      </div>
      <p>
        A chaque déclenchement d'un setState, je déclenche des re-rendu du front
        et des composants.
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "50% 50%" }}>
        <div>
          <p>
            Ci-dessous un bouton qui incremente une valeur avec le hook
            useState.
          </p>
          <Button onClick={incrementWithState}>{count1}</Button>
        </div>
        <div>
          <p>Ci-dessous un bouton qui incremente une valeur sans le hook.</p>
          <Button onClick={incrementWithoutState}>{count2}</Button>
        </div>
        <Highlight className="jsx">
          {" "}
          {`
      const [count1, setCount1] = useState(0);

      function incrementWithState() {
        setCount1((current_value) => {
          return ++current_value;
        });
        console.log("Ici mon premier compteur", count1);
      }
     return(
       <Button onClick={incrementWithState}>{count1}</Button>
       )

      `}
        </Highlight>
        <Highlight className="jsx">
          {" "}
          {`
      let count2 = 0;
      function incrementWithoutState() {
        count2 = ++count2;
        console.log("Ici mon deuxieme compteur", count2);
      }

      return (
        <Button onClick={incrementWithoutState}>{count2}</Button>
        )


        
      `}
        </Highlight>
      </div>
    </div>
  );
};

export default State;
