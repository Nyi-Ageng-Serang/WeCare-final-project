import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import DashboardProfile from './pages/DashboardProfile';  
import DashboardPelatihan from './pages/DashboardPelatihan'; 

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
        </Route>
      </Routes>
    </div>
  );
}

export default App;
