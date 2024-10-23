import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-grow p-4">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
