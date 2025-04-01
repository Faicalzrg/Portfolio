import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css"; // (optionnel) pour les styles globaux
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store } from "./state/store.js"; // Assure-toi d'avoir ce fichier ou adapte le chemin

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
