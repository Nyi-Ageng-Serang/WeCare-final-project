import Logo from "../assets/logoWecare.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      {/* Footer Start */}
      <div className="w-full py-6 mt-6 bg-softPink">
        <div className="container mx-auto px-10">
          <div className="flex flex-col lg:flex-row justify-between items-start tracking-normal">
            {/* Logo & Sosmed */}
            <div>
              <div className="flex items-center mb-4">
                <img src={Logo} alt="Logo WeCare" width="60px" />
                <h1 className="text-4xl font-bold ml-1">WeCare</h1>
              </div>

              <div className="flex space-x-3 m-1 mb-10 text-white">
                <a className="bg-red p-2 px-4 rounded-full" href="#">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a className="bg-red p-2 px-3 rounded-full" href="#">
                  <i className="fab fa-twitter"></i>
                </a>
                <a className="bg-red p-2 px-3 rounded-full" href="#">
                  <i className="fab fa-instagram"></i>
                </a>
                <a className="bg-red p-2 px-3.5 rounded-full" href="#">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>

            {/* WeCare */}
            <div className="mb-10">
              <h4 className="text-lg font-bold mb-4">WeCare</h4>
              <div className="flex flex-col space-y-3 font-semibold list-none text-gray-800">
                <li className="hover:text-red">
                  <Link to="/">Home</Link>
                </li>
                <li className="hover:text-red" href="about.html">
                  <Link to="/About">About</Link>
                </li>
                <li className=" hover:text-red">
                  <a href="https://bit.ly/FormAnggota-PI" target="_blank">
                    Community
                  </a>
                </li>
                <li className=" hover:text-red">
                  <Link to="/forum">Forum</Link>
                </li>
                <li className=" hover:text-red">
                  <Link to="/Blog">Blog</Link>
                </li>
              </div>
            </div>

            {/* Career*/}
            <div className="mb-10">
              <h4 className="text-lg font-bold mb-4 ">Sumber daya karir</h4>
              <div className="flex flex-col space-y-3 font-semibold text-gray-800 ">
                <p>Rekomendasi Pelatihan</p>
                <p>CV Generator</p>
                <p>Lowongan Pekerjaan</p>
                <p>Forum Diskusi</p>
                <p>Blog Edukasi</p>
              </div>
            </div>

            {/* Contact */}
            <div className="mb-10">
              <h4 className="text-lg font-bold mb-4">Contact</h4>
              <div className="space-y-2 font-semibold text-gray-800">
                <p>+6285694573965 (admin1)</p>
                <p>+6285694573965 (admin2)</p>
                <p>Wecare@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer End */}

      {/* Copyright Start */}
      <div className="w-full bg-red py-4">
        <div className="container mx-auto text-center">
          <p className="text-white font-semibold">Copyright WeCare 2024</p>
        </div>
      </div>
      {/* Copyright End */}
    </>
  );
}

export default Footer;
