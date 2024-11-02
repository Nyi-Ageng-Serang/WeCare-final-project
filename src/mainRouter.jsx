// src/mainRouter.js
import { createBrowserRouter } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import DashboardProfile from './pages/DashboardProfile';
import DashboardPelatihan from './pages/DashboardPelatihan';
import DashboardCVGenerator from './pages/DashboardCVGenerator';
import DashboardPortfolio from './pages/DashboardPortfolio';
import DashboardLowongan from './pages/DashboardLowongan';
// `import HomePage from './pages/HomePage';`

const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <HomePage />,
//   },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      { path: "profile", element: <DashboardProfile /> },
      { path: "pelatihan", element: <DashboardPelatihan /> },
      { path: "portfolio", element: <DashboardPortfolio /> },
      { path: "cv-generator", element: <DashboardCVGenerator /> },
      { path: "lowongan", element: <DashboardLowongan /> },
    ],
  },
]);

export default router;
