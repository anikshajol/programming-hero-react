import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";

const Home = () => {
    return (
        <div>
            <NavBar/>
          
            <Outlet></Outlet>
           <Footer></Footer>
        </div>
    );
};

export default Home;