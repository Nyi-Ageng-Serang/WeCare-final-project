import React from 'react';
import Header from './headerComponent';

function DashboardCVGenerator() {
  return (
    <div className="flex">
      <div className="flex-grow py-5 ml-72 mr-10">
        <Header title="CV Generator" />
        <hr className="border-0 h-px bg-[#921A40] "/>
      </div>
    </div>
  );
}

export default DashboardCVGenerator;
