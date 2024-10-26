import { Route, Routes } from "react-router-dom";
import PageTemplate from "./PageTemplate";
import Homepage from "./components/Homepage/HomePage";
import AboutPage from "./components/About/AboutPage";
import BlogPage from "./components/Blog/BlogPage";

function App() {
  return (
    <div className="bg-backgroud">
      <Routes>
        <Route path="/" element={<PageTemplate />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/About" element={<AboutPage />} />
          <Route path="/Blog" element={<BlogPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
