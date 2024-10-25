import React, { useState } from "react";
import Logo from "../assets/logoWecare.png";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full shadow-sm py-5">
      <div className="container mx-auto px-10 tracking-normal">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img src={Logo} alt="Logo WeCare" className="w-12" />
            <a href="" className="ml-2 text-3xl font-bold text-red">
              WeCare
            </a>
          </div>

          {/* Navigation desktop */}
          <div className="hidden list-none text-lg font-bold lg:flex lg:items-center lg:space-x-10 text-gray-800">
            <li className=" hover:text-red">
              <Link to="/">Home</Link>
            </li>
            <li className=" hover:text-red">
              <Link to="/About">About</Link>
            </li>

            <li className=" hover:text-red">Comunity</li>

            <li className=" hover:text-red">Blog</li>
          </div>

          {/* Regis & Login */}
          <div>
            <a className="hidden lg:inline-block font-semibold border-2 border-red text-red py-1 px-6 rounded-full hover:bg-pink hover:border-pink hover:text-red mr-3">
              Masuk
            </a>

            <a className="hidden lg:inline-block font-semibold border-2 border-red bg-red text-white py-1 px-6 rounded-full hover:bg-pink hover:border-pink hover:text-red">
              Log In
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-gray-800 font-bold"
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="text-2xl">&#9776;</span>
          </button>
        </nav>

        {/* Mobile menu */}
        <div className={`${menuOpen ? "block" : "hidden"} lg:hidden`}>
          <li className="block pb-2 pt-6 font-semibold text-gray-800 hover:text-red">
            <Link to="/">Home</Link>
          </li>
          <li className="block py-2 font-semibold text-gray-800 hover:text-red">
            <Link to="/About">About</Link>
          </li>
          <a className="block py-2 font-semibold text-gray-800 hover:text-red">
            Comunity
          </a>
          <a className="block py-2 font-semibold text-gray-800 hover:text-red">
            Blog
          </a>
          <a className="block py-2 font-semibold border-2 border-red text-red rounded-full text-center mt-4 hover:bg-pink hover:border-pink hover:text-red">
            Masuk
          </a>
          <a className="block py-2 font-semibold border-2 border-red bg-red text-white rounded-full text-center mt-4 hover:bg-pink hover:border-pink hover:text-red">
            Log In
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
