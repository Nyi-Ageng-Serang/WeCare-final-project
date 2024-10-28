import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex relative">
      {/* Button untuk toggle Sidebar di mobile */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 text-[#921A40] font-bold text-3xl"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        &#9776;
      </button>

      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Konten utama */}
      <div
        className={`flex-grow ${sidebarOpen ? 'opacity-50 lg:opacity-100' : ''}`}
        onClick={() => sidebarOpen && setSidebarOpen(false)}
      >
        <Outlet />
      </div>
    </div>
  );
}

export default Dashboard;
