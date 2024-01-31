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
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Route404 from "./Route404.jsx";
const RouterComponent = () => {
  const location = useLocation();
  return (
    <Routes location={location.pathname} key={location.key}>
      <Route path="/spaced-memo/" element={<App />} />
      <Route path="/spaced-memo/cours" element={<Index />} />
      <Route path="/*" element={<Route404 />} />
    </Routes>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PrimeReactProvider>
      <Data_Provider>
        <BrowserRouter>
          <RouterComponent />
        </BrowserRouter>
      </Data_Provider>
    </PrimeReactProvider>
  </StrictMode>
);
