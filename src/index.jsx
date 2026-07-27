import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ModelPage } from "./pages/ModelPage";
import "./css/index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ModelPage />
  </StrictMode>,
);
