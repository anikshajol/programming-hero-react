import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

const MainLayout = () => {
  return (
    <div>
      <div className="max-w-6xl mx-auto">
        <Navbar></Navbar>
      </div>
      <div className="min-h-screen max-w-6xl mx-auto">
        <Outlet></Outlet>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default MainLayout;
