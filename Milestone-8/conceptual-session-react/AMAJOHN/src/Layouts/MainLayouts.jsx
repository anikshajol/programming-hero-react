import { Outlet, useNavigation } from "react-router-dom";
import Nav from "../Pages/Nav/Nav";
import Footer from "../Pages/Footer/Footer";

const MainLayouts = () => {
  const navigation = useNavigation();
  return (
    <div>
      <Nav></Nav>
      <div className="min-h-screen">
        {navigation.state === "loading" ? (
          <div>Loading............</div>
        ) : (
          <Outlet></Outlet>
        )}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayouts;
