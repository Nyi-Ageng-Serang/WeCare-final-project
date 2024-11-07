import { Route, Routes } from "react-router-dom";
import PageTemplate from "./PageTemplate";
import Homepage from "./components/Homepage/HomePage";
import AboutPage from "./components/About/AboutPage";
import Login from "./components/Login";
import Register from "./components/Register";
import Tes from "./components/Tes/Tes";
import Soal from "./components/Tes/Soal";
import Result from "./components/Tes/Result";
import BlogPage from "./components/Blog/BlogPage";
import Forum from "./components/Forum/Forum";
import DiscussionDetail from "./components/Forum/DiscussionDetail";

import Dashboard from "./Dashboard/Dashboard";
import DashboardProfile from "./Dashboard/DashboardProfile";
import DashboardPelatihan from "./Dashboard/DashboardPelatihan";
import DashboardCVGenerator from "./Dashboard/DashboardCVGenerator";
import DashboardLowongan from "./Dashboard/DashboardLowongan";
import StoryPage from "./components/Homepage/StoryPage";
import PartnerPage from "./components/Partner/PartnerPage";
import BlogDetail from "./components/Homepage/BlogDetail";

function App() {
  return (
    <div className="bg-backgroud">
      <Routes>
        <Route path="/" element={<PageTemplate />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/sukma" element={<StoryPage />} />
          <Route path="/About" element={<AboutPage />} />
          <Route path="/partner" element={<PartnerPage />} />
          <Route path="/Blog" element={<BlogPage />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="/discussions/:id" element={<DiscussionDetail />} />
          <Route path="/discussions/:id" element={<DiscussionDetail />} />
        </Route>

        {/* Rute ke Dashboard dan rute anaknya */}
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="profile" element={<DashboardProfile />} />
          <Route path="pelatihan" element={<DashboardPelatihan />} />
          <Route path="cvgenerator" element={<DashboardCVGenerator />} />
          <Route path="lowongan" element={<DashboardLowongan />} />
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
