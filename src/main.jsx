import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import TesProvider from "./context/TesProvider.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <TesProvider>
      <App />
    </TesProvider>
  </BrowserRouter>
);
