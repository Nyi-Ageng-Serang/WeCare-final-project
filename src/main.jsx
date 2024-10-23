import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { 
    createBrowserRouter, 
    RouterProvider 
  } from 'react-router-dom';

import App from './App.jsx';
import './index.css';

import DashboardProfile from './pages/DashboardProfile.jsx';
import DashboardPelatihan from './pages/DashboardPelatihan.jsx';
import DashboardCVGenerator from './pages/DashboardCVGenerator.jsx';
import DashboardPortfolio from './pages/DashboardPortfolio.jsx';
import DashboardLowongan from './pages/DashboardLowongan.jsx';

// Mengatur routing
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "profile",
    element: <DashboardProfile />,
  },
  {
    path: "pelatihan",
    element: <DashboardPelatihan />,
  },
  {
    path: "portfolio",
    element: <DashboardPortfolio/>,
  },
  {
    path: "cv-generator",
    element: <DashboardCVGenerator />,
  },
  {
    path: "lowongan",
    element: <DashboardLowongan/>,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
