import React from "react";
import Highlight from "react-highlight";

const LesRoutes = () => {
  return (
    <div className="information_content">
      <h1>Les Routes "/" coté front</h1>
      <p>
        Dans un site web classique on navigue par le biais de l'URL par des
        routes.
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "50% 50%" }}>
        <div>
          <h3>Dans un site classique</h3>
          <ul>
            <li>Les pages en html sont stocker avec leurs js coté serveur</li>
            <li>
              Lors d'un requete à une route monsite.com/home le serveur retourne
              le code correspondant
            </li>
            <li>Le navigateur télécharge et fait un rendu du code reçu.</li>
          </ul>
        </div>
        <div>
          <h3>Dans une single page app</h3>
          <ul>
            <li>
              Toute l'application est rendu pour n'importe quelles routes.
            </li>
            <li>
              C'est l'application côté front qui interprete la "location" et
              rend le contenu en fonction.
            </li>
            <li>
              Le navigateur lors du changement de routes ne fait plus de
              requetes sauf si c'est necessaire et déclenché depuis le code js.
            </li>
          </ul>
        </div>
      </div>
      <p>
        Pour négocier ce comportement avec le navigateur les framework ont ce
        qu'on appel un "router", pour react c'est un package séparer <br /> -
        react-router-dom
      </p>
      <Highlight className="jsx">
        {`
        import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
        // je creer un composant pour imbriquer les <Routes><Route/></Routes> 
        // et utiliser le hook uselocation() qui n'est reconnu que dans un composant React
        const RouterComponent = () => {
          const location = useLocation();
          return (
            <Routes location={location.pathname} key={location.key}>
            // J'associe une route à un composant avec la props "path" et l"element qui doit etre rendu
              <Route path="/spaced-memo/" element={<App />} />
              <Route path="/spaced-memo/cours" element={<Index />} />
            </Routes>
          );
        };
        
        ReactDOM.createRoot(document.getElementById("root")).render(
                <BrowserRouter>
                // Jappel mon composant dans un "BrowserRouter" fournis par react-router-dom
                  <RouterComponent />
                </BrowserRouter>
        );
        `}
      </Highlight>

      <p>
        Ensuite pour naviguer dans mes "routes" ou "pages" simulé j'utilise le
        hook useNavigate() fournis par react-router-dom
      </p>
    </div>
  );
};

export default LesRoutes;
