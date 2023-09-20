import { Outlet, useLocation, useNavigation } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";

const Home = () => {
    const navigation = useNavigation()
    const location = useLocation()
    console.log(location);
    return (
        <div>
            <NavBar/>
          {
            navigation.state==='loading'?<p>loading..............</p>:<Outlet></Outlet>
          }
            
           <Footer></Footer>
        </div>
    );
};

export default Home;