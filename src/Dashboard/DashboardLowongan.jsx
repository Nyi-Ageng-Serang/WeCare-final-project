import React from 'react';
import Header from './headerComponent';

function DashboardLowongan() {
  return (
    <div className="flex">
      <div className="flex-grow py-5 ml-72 mr-10">
        <Header title="LOWONGAN" />
        <hr className="border-0 h-px bg-[#921A40] "/>
      </div>
    </div>
  );
}

export default DashboardLowongan;
