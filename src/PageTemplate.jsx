import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function PageTemplate() {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <div>
        <Outlet />
      </div>

      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default PageTemplate;
