import { Route, Routes } from "react-router-dom";
import PageTemplate from "./PageTemplate";
import Homepage from "./components/Homepage/HomePage";
import AboutPage from "./components/About/AboutPage";
import Login from "./components/Login";
import Register from "./components/Register";
import Tes from "./components/Tes/Tes";
import Soal from "./components/Tes/Soal";
import Result from "./components/Tes/Result";
import Blog from "./components/Homepage/Blog";

function App() {
  return (
    <div className="bg-backgroud">
      <Routes>
        <Route path="/" element={<PageTemplate />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/About" element={<AboutPage />} />
          <Route path="/blog" element={<Blog/>} />
          
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/tes" element={<Tes />} />
        <Route path="/soal" element={<Soal />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </div>
  );
}

export default App;
