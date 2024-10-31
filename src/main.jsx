import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import TesProvider from "./context/TesProvider.jsx";
import ForumProvider from "./context/ForumProvider.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <TesProvider>
      <ForumProvider>
        <App />
      </ForumProvider>
    </TesProvider>
  </BrowserRouter>
);
