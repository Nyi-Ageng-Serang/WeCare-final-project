import { Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard/Dashboard";
import DashboardProfile from './Dashboard/DashboardProfile';  
import DashboardPelatihan from './Dashboard/DashboardPelatihan'; 
import DashboardCVGenerator from "./Dashboard/DashboardCVGenerator";
import DashboardLowongan from "./Dashboard/DashboardLowongan";

function App() {
  return (
    <div className="bg-background">
      <Routes>
        {/* Route ke Homepage dan page lainnya */}
        {/* <Route path="/" element={<Homepage />} /> */}

        <Route path="/dashboard" element={<Dashboard />}>
          {/* Rute anak untuk Dashboard */}
          <Route path="profile" element={<DashboardProfile />} />
          <Route path="pelatihan" element={<DashboardPelatihan />} />
          {/* Rute Dashboard lainnya */}
          <Route path="cvgenerator" element={<DashboardCVGenerator />} />
          <Route path="lowongan" element={<DashboardLowongan />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
