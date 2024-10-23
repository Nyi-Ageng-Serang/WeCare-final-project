import React from 'react';
import logoWecare from '../assets/image/logoWecare.png';
import { FiUser, FiLogOut } from 'react-icons/fi';
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { BiBriefcase } from "react-icons/bi";
import { MdOutlineStorage } from "react-icons/md";
import { LuFileSignature } from "react-icons/lu";

const MenuItem = ({ icon, label }) => {
  return (
    <a
      href="#"
      className="flex items-center space-x-8 py-3 px-6 hover:bg-[#921A40] hover:bg-opacity-80 hover:text-white"
    >
      {icon}
      <span className="text-lg font-semibold">{label}</span>
    </a>
  );
};

function Sidebar() {
  return (
    <aside className="w-56 h-screen bg-[#FFB1B1] text-[#921A40] flex flex-col rounded-r-[2rem] shadow-[0_10px_20px_rgba(0,0,0,0.3)] 
      before:content-[''] before:absolute before:inset-0 before:rounded-r-[2rem] before:shadow-[inset_0_4px_6px_rgba(0,0,0,0.2)] relative">
      <div className="px-4 py-2">
        {/* Logo */}
        <div className="flex items-center space-x-4">
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
        <MenuItem icon={<FiUser className="w-5 h-5 mx-1" />} label="Profile" />
        <MenuItem icon={<MdOutlineStorage className="w-5 h-5 mx-1" />} label="Pelatihan" />
        <MenuItem icon={<HiOutlineClipboardDocumentList className="w-5 h-5 mx-1" />} label="Portfolio" />
        <MenuItem icon={<LuFileSignature className="w-5 h-5 mx-1" />} label="CV Generator" />
        <MenuItem icon={<BiBriefcase className="w-5 h-5 mx-1" />} label="Lowongan" />
      </nav>

      {/* Button Exit */}
      <button className="flex items-center space-x-6 py-3 px-6 mt-auto hover:bg-[#921A40] hover:bg-opacity-80 hover:text-white rounded-br-[2rem] shadow-[0_10px_20px_rgba(0,0,0,0.3)]">
        <FiLogOut className="w-5 h-5 mx-2" />
        <span className="text-lg font-semibold">Kembali</span>
      </button>
    </aside>
  );
}

export default Sidebar;
