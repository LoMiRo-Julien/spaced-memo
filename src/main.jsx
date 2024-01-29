import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "primeicons/primeicons.css";
import { PrimeReactProvider } from "primereact/api";
import { Data_Provider } from "./contexts/Data_context.jsx";
import Hooks from "./cours/hooks/Hooks.jsx";
import UseRef from "./cours/hooks/UseRef.jsx";
import CreateComponent from "./cours/composant/CreateComponent.jsx";
import Index from "./cours/Index.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PrimeReactProvider>
      <Data_Provider>
        <App />
        <Index />
      </Data_Provider>
    </PrimeReactProvider>
  </StrictMode>
);
