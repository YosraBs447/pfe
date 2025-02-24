import { StrictMode } from "react"; // Importation de StrictMode pour activer des vérifications supplémentaires en développement
import { createRoot } from "react-dom/client"; // Création du point d'ancrage dans le DOM
import "./App.css"; // Importation du fichier CSS pour appliquer les styles
import App from "./App.jsx"; // Importation du composant principal App

// Créer et rendre l'application dans l'élément avec id "root"
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App /> {/* Le composant App sera rendu ici */}
  </StrictMode>
);
