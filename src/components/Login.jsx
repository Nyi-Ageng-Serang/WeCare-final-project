import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const user = JSON.parse(localStorage.getItem("user"));

    if (user && user.email === email && user.password === password) {
      alert("login berhasil");
      navigate("/");
    } else {
      alert("email atau password salah");
    }
  };

  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-[#fefdfd] font-poppins">
        <div className="w-full max-w-md bg-white bg-opacity-90 border-2 border-white p-10 rounded-lg shadow-lg">
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
              className="w-full py-2 bg-[#921a40] text-[#fcfcfb] font-semibold rounded-md hover:bg-[#eb5584] transition duration-300"
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
    </>
  );
}

export default Login;
