import React from 'react';
import Sidebar from '../components/Sidebar'; 

function DashboardCVGenerator() {
  return (
    <div className="flex">
      <Sidebar /> {/* Memanggil Sidebar */}
      <div className="flex-grow p-8">
        <h1 className="text-3xl font-bold">CV Generator</h1>
      </div>
    </div>
  );
}

export default DashboardCVGenerator;
