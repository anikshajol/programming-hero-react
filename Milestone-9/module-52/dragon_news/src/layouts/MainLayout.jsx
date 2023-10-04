import { Outlet } from "react-router-dom";


const MainLayout = () => {
  return (
    <div className="max-w-6xl mx-auto font-poppins">
      
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;
