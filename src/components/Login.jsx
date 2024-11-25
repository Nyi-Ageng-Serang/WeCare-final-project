import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { setCookie } from "./Cookies";
import axios from "axios";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://substantial-starla-ardhilla-fa22d60a.koyeb.app/auth/login",
        { email, password }
      );

      if (response.data.token) {
        setCookie("token", response.data.token, 7); // Save token in cookies for 7 days
        navigate("/");
      } else {
        alert("Login failed. Please check your credentials.");
      }
    } catch (error) {
      console.error("Login failed:", error);
      alert("An error occurred during login.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#fefdfd] font-poppins">
      <div className="w-full max-w-sm bg-white bg-opacity-90 mx-2 p-10 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-6 text-[#230710]">
          Login
        </h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-[#230710] font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 bg-[#ececec] bg-opacity-90 border border-transparent rounded-md focus:outline-none focus:bg-opacity-100 focus:border-[#921a40] transition duration-300"
            />
          </div>

          <div className="mb-6">
            <label className="block text-[#230710] font-semibold mb-2">
              Password
            </label>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 bg-[#ececec] bg-opacity-90 border border-transparent rounded-md focus:outline-none focus:bg-opacity-100 focus:border-[#921a40] transition duration-300"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-[#921a40] text-[#fcfcfb] font-semibold rounded-md hover:bg-[#eb5584] transition duration-200 active:scale-95 transform"
          >
            Login
          </button>
        </form>
        <div className="text-center mt-4">
          <p className="text-[#230710]">
            Belum punya akun?
            <Link
              to="/register"
              className="text-[#921a40] ml-1 hover:underline"
            >
              Daftar di sini
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
