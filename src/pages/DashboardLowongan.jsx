import React from 'react';
import Sidebar from '../components/Sidebar'; 

function DashboardLowongan() {
  return (
    <div className="flex">
      <Sidebar /> {/* Memanggil Sidebar */}
      <div className="flex-grow p-8">
        <h1 className="text-3xl font-bold font-sans text-[#921A40]">Lowongan</h1> <br />
        <hr className="border-0 h-px bg-[#921A40] "/>
      </div>
    </div>
  );
}

export default DashboardLowongan;
