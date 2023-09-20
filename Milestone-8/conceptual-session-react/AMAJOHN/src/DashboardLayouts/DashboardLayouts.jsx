import { NavLink, Outlet } from "react-router-dom";

const DashboardLayouts = () => {
  return (
    <div className="flex">
      <nav className="px-2 py-6 flex mb-8 justify-between shadow-lg ">
        <ul className="flex justify-start flex-col gap-5">
          <li>
            <NavLink to={"/dashboard/profile"}>Profile</NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/edit-profile"}>Edit Profile</NavLink>
          </li>
        </ul>
      </nav>

      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashboardLayouts;
