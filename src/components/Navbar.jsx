import React, { useState } from "react";
import Logo from "../assets/logoWecare.png";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

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

            <div className="relative">
              <button onClick={toggleDropdown}>Comunity</button>
              {isDropdownOpen && (
                <div className="absolute w-64 mt-4 bg-backgroud rounded-md shadow-lg z-10">
                  <ul className="py-1">
                    <li className="block px-4 py-2 text-gray-800 hover:bg-softPink">
                      <a
                        href="https://bit.ly/FormAnggota-PI"
                        className=" hover:text-red"
                      >
                        Perempuan Inovasi
                      </a>
                    </li>
                    <li className="block px-4 py-2 text-gray-800 hover:bg-softPink hover:text-red">
                      <Link to="/forum">Forum</Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            <li className=" hover:text-red">
              <Link to="/Blog">Blog</Link>
            </li>
          </div>

          {/* Regis & Login */}
          <div>
            <li className="hidden lg:inline-block font-semibold border-2 border-red text-red py-1 px-6 rounded-full hover:bg-pink hover:border-pink hover:text-red mr-3">
              <Link to="/register"> Masuk</Link>
            </li>

            <li className="hidden lg:inline-block font-semibold border-2 border-red bg-red text-white py-1 px-6 rounded-full hover:bg-pink hover:border-pink hover:text-red">
              <Link to="/login">Log In</Link>
            </li>
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
          <a
            href="https://bit.ly/FormAnggota-PI"
            target="_blank"
            className="block py-2 font-semibold text-gray-800 hover:text-red"
          >
            Comunity
          </a>
          <a className="block py-2 font-semibold text-gray-800 hover:text-red">
            <Link to="/blog">Blog</Link>
          </a>
          <li className="block py-2 font-semibold border-2 border-red text-red rounded-full text-center mt-4 hover:bg-pink hover:border-pink hover:text-red">
            <Link to="/register"> Masuk</Link>
          </li>
          <li className="block py-2 font-semibold border-2 border-red bg-red text-white rounded-full text-center mt-4 hover:bg-pink hover:border-pink hover:text-red">
            <Link to="/login">Log In</Link>
          </li>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
