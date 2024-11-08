import React, { useState, useEffect } from "react";
import Logo from "../assets/logoWecare.png";
import { Link, useNavigate } from "react-router-dom";
import { getCookie, deleteCookie } from "./Cookies";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [Auth, setAuth] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = getCookie("token");
    setAuth(!!token);
  }, []);

  const handleLogout = () => {
    deleteCookie("token");
    setAuth(false);
    navigate("/");
  };

  return (
    <div className="w-full shadow-sm py-5">
      <div className="container mx-auto px-10 tracking-normal">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img src={Logo} alt="Logo WeCare" className="w-12" />
            <a href="/" className="ml-2 text-3xl font-bold text-red">
              WeCare
            </a>
          </div>

          {/* Navigation desktop */}
          <div className="hidden text-lg list-none font-semibold lg:flex lg:items-center lg:space-x-10 tracking-wide">
            <li className="hover:text-red">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-red">
              <Link to="/About">About</Link>
            </li>
            <li className="hover:text-red">
              <Link to="/forum">Forum</Link>
            </li>
            <li className="hover:text-red">
              <Link to="/Blog">Blog</Link>
            </li>
            <li className="hover:text-red">
              <a
                href="https://bit.ly/FormAnggota-PI"
                target="_blank"
                rel="noopener noreferrer"
              >
                Community
              </a>
            </li>
          </div>

          {/* Auth Dashboard Dropdown */}
          {Auth ? (
            <div className="relative hidden lg:inline-block">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="font-semibold border-2 border-red bg-red text-white py-1 px-6 rounded-full hover:bg-softPink hover:border-softPink hover:text-red"
              >
                Dashboard
              </button>

              {/* Dropdown Menu */}
              {dropdownOpen && (
                <div className="absolute right-0 mt-3 w-48 font-semibold bg-white border border-gray-100 rounded-md shadow-lg z-20">
                  <Link
                    to="/dashboard/profile"
                    className="block px-4 py-2 hover:bg-softPink hover:text-red"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Profile
                  </Link>
                  <Link
                    to="/dashboard/pelatihan"
                    className="block px-4 py-2 hover:bg-softPink hover:text-red"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Pelatihan
                  </Link>
                  <Link
                    to="/dashboard/cvgenerator"
                    className="block px-4 py-2 hover:bg-softPink hover:text-red"
                    onClick={() => setDropdownOpen(false)}
                  >
                    CV Generator
                  </Link>
                  <Link
                    to="/dashboard/lowongan"
                    className="block px-4 py-2 hover:bg-softPink hover:text-red"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Lowongan
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 text-red-600 hover:text-white hover:bg-red border-t border-gray-300 rounded-md"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="hidden lg:flex space-x-4">
              <Link
                to="/register"
                className=" font-semibold border-2 border-red text-red py-1 px-6 rounded-full hover:bg-softPink hover:border-softPink hover:text-red"
              >
                Masuk
              </Link>
              <Link
                to="/login"
                className="font-semibold border-2 border-red bg-red text-white py-1 px-6 rounded-full hover:bg-softPink hover:border-softPink hover:text-red"
              >
                Log In
              </Link>
            </div>
          )}

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-gray-800 font-bold"
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="text-2xl">&#9776;</span>
          </button>
        </nav>

        <div className={`${menuOpen ? "block" : "hidden"} lg:hidden`}>
          <li className="block pb-2 pt-6 font-semibold text-gray-800 hover:text-red">
            <Link to="/">Home</Link>
          </li>
          <li className="block py-2 font-semibold text-gray-800 hover:text-red">
            <Link to="/About">About</Link>
          </li>
          <li className="block py-2 font-semibold text-gray-800 hover:text-red">
            <Link to="/forum">Forum</Link>
          </li>
          <li className="block py-2 font-semibold text-gray-800 hover:text-red">
            <Link to="/Blog">Blog</Link>
          </li>
          <li className="block py-2 font-semibold text-gray-800 hover:text-red">
            <a
              href="https://bit.ly/FormAnggota-PI"
              target="_blank"
              rel="noopener noreferrer"
            >
              Community
            </a>
          </li>

          {/* Auth Dropdown or Login/Register */}
          {!Auth ? (
            <div className="text-center font-semibold">
              <li className="block py-2 text-gray-800 hover:text-red">
                <Link
                  to="/register"
                  className="block border-2 border-red text-red py-1 px-6 rounded-full hover:bg-softPink hover:border-softPink hover:text-red"
                >
                  Masuk
                </Link>
              </li>
              <li className="block py-2 text-gray-800 hover:text-red">
                <Link
                  to="/login"
                  className="block border-2 border-red bg-red text-white py-1 px-6 rounded-full hover:bg-softPink hover:border-softPink hover:text-red"
                >
                  Log In
                </Link>
              </li>
            </div>
          ) : (
            <div className="relative">
              {/* Dashboard Button */}
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="block w-full font-semibold border-2 border-red bg-red text-white py-1 px-6 rounded-full hover:bg-softPink hover:border-softPink hover:text-red"
              >
                Dashboard
              </button>

              {/* Dropdown Menu */}
              {dropdownOpen && (
                <div className="absolute right-0 mt-3 w-full font-semibold bg-white border border-gray-100 rounded-md shadow-lg">
                  <Link
                    to="/dashboard/profile"
                    className="block px-4 py-2 hover:bg-softPink hover:text-red"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Profile
                  </Link>
                  <Link
                    to="/dashboard/pelatihan"
                    className="block px-4 py-2 hover:bg-softPink hover:text-red"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Pelatihan
                  </Link>
                  <Link
                    to="/dashboard/cvgenerator"
                    className="block px-4 py-2 hover:bg-softPink hover:text-red"
                    onClick={() => setDropdownOpen(false)}
                  >
                    CV Generator
                  </Link>
                  <Link
                    to="/dashboard/lowongan"
                    className="block px-4 py-2 hover:bg-softPink hover:text-red"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Lowongan
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 text-red-600 hover:text-white hover:bg-red border-t border-gray-300 rounded-md"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
