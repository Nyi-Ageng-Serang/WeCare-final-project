import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { setCookie } from "./Cookies";
import axios from "axios";

function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    // Logic match password and comfirm password
    if (formData.password !== formData.confirmPassword) {
      alert("Password dan confirm password tidak sesuai");
      return;
    }
    try {
      const response = await axios.post(
        "https://66fb57208583ac93b40b758c.mockapi.io/users",
        { ...formData, token: "random_token_value" }
      );
      setCookie("token", response.data.token, 7); // simpan token di cookies selama 7 hari
      navigate("/login");
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#fefdfd] font-poppins">
      <div className="w-full max-w-sm bg-white bg-opacity-90 mx-2 p-10 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-6 text-[#230710]">
          Register
        </h2>
        <form onSubmit={handleRegister}>
          <div className="mb-4">
            <label className="block text-[#230710] font-semibold mb-2">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-2 bg-[#ececec] bg-opacity-90 border border-transparent rounded-md focus:outline-none focus:bg-opacity-100 focus:border-[#921a40] transition duration-300"
            />
          </div>

          <div className="mb-4">
            <label className="block text-[#230710] font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-2 bg-[#ececec] bg-opacity-90 border border-transparent rounded-md focus:outline-none focus:bg-opacity-100 focus:border-[#921a40] transition duration-300"
            />
          </div>

          <div className="mb-4">
            <label className="block text-[#230710] font-semibold mb-2">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-2 bg-[#ececec] bg-opacity-90 border border-transparent rounded-md focus:outline-none focus:bg-opacity-100 focus:border-[#921a40] transition duration-300"
            />
          </div>

          <div className="mb-6">
            <label className="block text-[#230710] font-semibold mb-2">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-2 bg-[#ececec] bg-opacity-90 border border-transparent rounded-md focus:outline-none focus:bg-opacity-100 focus:border-[#921a40] transition duration-300"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-[#921a40] text-[#fcfcfb] font-semibold rounded-md hover:bg-[#eb5584] transition duration-300"
          >
            Register
          </button>
        </form>

        <div className="text-center mt-4">
          <p className="text-[#230710]">
            Sudah punya akun?
            <Link to="/login" className="text-[#921a40] ml-1 hover:underline">
              Login di sini
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
