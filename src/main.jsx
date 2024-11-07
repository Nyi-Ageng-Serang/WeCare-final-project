import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import TesProvider from "./context/TesProvider.jsx";
import ForumProvider from "./context/ForumProvider.jsx";
import BlogProvider from "./context/BlogProvider.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <TesProvider>
      <ForumProvider>
        <BlogProvider>
          <App />
        </BlogProvider>
      </ForumProvider>
    </TesProvider>
  </BrowserRouter>
);
