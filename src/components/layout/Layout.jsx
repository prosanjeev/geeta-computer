import { Link, Outlet } from "react-router-dom";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";

/* eslint-disable react/prop-types */
const Layout = () => {
  return (
    <div>
      <Navbar />
    
        <Outlet />
     

      <div className="fixed bottom-10 right-10 z-10">
        <Link to="https://wa.me/917352473717?text=Hello Support?">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/WhatsApp_icon.png/598px-WhatsApp_icon.png"
            height="50px"
            width="50px"
            alt="WhatsApp"
          />
        </Link>
      </div>

      <Footer />
    </div>
  );
};

export default Layout;
