import { Outlet } from "react-router-dom";
import Nav from "../Pages/Nav/Nav";
import Footer from "../Pages/Footer/Footer";



const MainLayouts = () => {
    return (
        <div>
            <Nav></Nav>
           <div className="min-h-screen">
           <Outlet></Outlet>
           </div>
      <Footer></Footer>
        </div>
    );
};

export default MainLayouts;