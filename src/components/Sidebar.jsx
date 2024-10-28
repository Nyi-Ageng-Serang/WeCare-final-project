import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoWecare from '../assets/image/logoWecare.png';
import { FiUser, FiLogOut } from 'react-icons/fi';
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { BiBriefcase } from "react-icons/bi";
import { MdOutlineStorage } from "react-icons/md";
import { LuFileSignature } from "react-icons/lu";

const MenuItem = ({ icon, label, to, isActive }) => {
  return (
    <Link
      to={to}
      className={`flex items-center space-x-8 py-3 px-6 ${isActive ? 'bg-[#921A40] text-white' : 'hover:bg-[#921A40] hover:bg-opacity-80 hover:text-white'} transition duration-300 ease-in-out`}
    >
      {icon}
      <span className="text-lg font-semibold">{label}</span>
    </Link>
  );
};

function Sidebar() {
  const location = useLocation(); // Mengambil lokasi saat ini

  return (
    <aside className="fixed w-56 min-w-56 h-screen bg-[#FFB1B1] text-[#921A40] flex flex-col rounded-r-[2rem] shadow-[0_10px_20px_rgba(0,0,0,0.3),inset_0_4px_6px_rgba(0,0,0,0.2)]">
      <div className="px-4 py-2">
        {/* Logo */}
        <div className="flex items-center space-x-4 mt-8">
          <img
            src={logoWecare}
            alt="WeCare Logo"
            className="h-12 w-12 rounded-full"
          />
          <h1 className="text-2xl font-bold">WeCare</h1>
        </div>
      </div>

      {/* Menu */}
      <nav className="flex-grow mt-10 space-y-4">
        <MenuItem icon={<FiUser className="w-5 h-5 mx-1" />} label="Profile" to="/dashboard/profile" isActive={location.pathname === '/dashboard/profile'} />
        <MenuItem icon={<MdOutlineStorage className="w-5 h-5 mx-1" />} label="Pelatihan" to="/dashboard/pelatihan" isActive={location.pathname === '/dashboard/pelatihan'} />
        <MenuItem icon={<HiOutlineClipboardDocumentList className="w-5 h-5 mx-1" />} label="Portfolio" to="/dashboard/portfolio" isActive={location.pathname === '/dashboard/portfolio'} />
        <MenuItem icon={<LuFileSignature className="w-5 h-5 mx-1" />} label="CV Generator" to="/dashboard/cvgenerator" isActive={location.pathname === '/dashboard/cvgenerator'} />
        <MenuItem icon={<BiBriefcase className="w-5 h-5 mx-1" />} label="Lowongan" to="/dashboard/lowongan" isActive={location.pathname === '/dashboard/lowongan'} />
      </nav>

      {/* Button Exit */}
      <button className="flex items-center space-x-6 py-3 px-6 mt-auto hover:bg-[#921A40] hover:bg-opacity-80 hover:text-white transition duration-300 ease-in-out rounded-br-[2rem] shadow-[0_10px_20px_rgba(0,0,0,0.3)]">
        <FiLogOut className="w-5 h-5 mx-2" />
        <span className="text-lg font-semibold">Kembali</span>
      </button>
    </aside>
  );
}

export default Sidebar;
