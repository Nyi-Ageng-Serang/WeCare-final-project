import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoWecare from '../assets/image/logoWecare.png';
import { FiUser, FiLogOut } from 'react-icons/fi';
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { BiBriefcase } from "react-icons/bi";
import { MdOutlineStorage } from "react-icons/md";
import { LuFileSignature } from "react-icons/lu";

const MenuItem = ({ icon, label, to, isActive }) => (
  <Link
    to={to}
    className={`flex items-center space-x-6 py-2 px-4 ${isActive ? 'bg-[#921A40] text-white' : 'hover:bg-[#921A40] hover:bg-opacity-80 hover:text-white'} transition duration-300 ease-in-out`}
  >
    {icon}
    <span className="text-base font-semibold">{label}</span>
  </Link>
);

function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const location = useLocation();

  return (
    <aside
      className={`fixed top-0 left-0 w-56 h-full bg-[#FFB1B1] text-[#921A40] flex flex-col rounded-r-[2rem] shadow-[0_10px_20px_rgba(0,0,0,0.3),inset_0_4px_6px_rgba(0,0,0,0.2)] transform transition-transform duration-300 ease-in-out z-50 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}
    >
      <div className="px-4 py-4 flex items-center space-x-3">
        <img src={logoWecare} alt="WeCare Logo" className="h-10 w-10 rounded-full" />
        <h1 className="text-xl font-bold">WeCare</h1>
      </div>

      <nav className="flex-grow mt-8 space-y-2 px-2">
        <MenuItem icon={<FiUser className="w-4 h-4" />} label="Profile" to="/dashboard/profile" isActive={location.pathname === '/dashboard/profile'} />
        <MenuItem icon={<MdOutlineStorage className="w-4 h-4" />} label="Pelatihan" to="/dashboard/pelatihan" isActive={location.pathname === '/dashboard/pelatihan'} />
        <MenuItem icon={<LuFileSignature className="w-4 h-4" />} label="CV Generator" to="/dashboard/cvgenerator" isActive={location.pathname === '/dashboard/cvgenerator'} />
        <MenuItem icon={<BiBriefcase className="w-4 h-4" />} label="Lowongan" to="/dashboard/lowongan" isActive={location.pathname === '/dashboard/lowongan'} />
      </nav>

      <button
        className="flex items-center space-x-4 py-3 px-4 bg-[#921A40] text-white hover:bg-opacity-80 transition duration-300 ease-in-out rounded-br-[2rem] shadow-[0_10px_20px_rgba(0,0,0,0.3)] mt-auto"
        onClick={() => setSidebarOpen(false)}
      >
        <FiLogOut className="w-4 h-4" />
        <span className="text-base font-semibold">Kembali</span>
      </button>

      {/* Media Query */}
      <style jsx>{`
        @media (max-height: 700px) {
          aside {
            padding-top: 0.5rem;
          }
          nav {
            margin-top: 0;
          }
          .text-xl {
            font-size: 1.125rem;
          }
          .text-base {
            font-size: 0.875rem;
          }
          .space-y-2 > :not(:first-child) {
            margin-top: 0.5rem;
          }
        }
      `}</style>
    </aside>
  );
}

export default Sidebar;
