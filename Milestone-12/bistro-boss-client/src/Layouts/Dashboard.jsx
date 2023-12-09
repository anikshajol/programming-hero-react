import {
  FaCalendar,
  FaCalendarCheck,
  FaCartShopping,
  FaHouse,
  FaStreetView,
  FaUtensils,
} from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../Hooks/useCart";
import { MdEmail } from "react-icons/md";
import { FaBook, FaList, FaUser } from "react-icons/fa";
// import useUsers from "../Hooks/useUsers";
import useAdmin from "../Hooks/useAdmin";
import useAuth from "../Hooks/useAuth";
// import Spinners from "../Spinners/Spinners";

const Dashboard = () => {
  const [cart] = useCart();
  // todo: get admin value from the database
  // const isAdmin = true;

  const { loading } = useAuth();

  const [isAdmin, isAdminLoading] = useAdmin();

  if (loading || isAdminLoading) {
    return (
      <p className="text-center">
        Loading <span className="animate-ping">....</span>{" "}
      </p>
    );
  }
  console.log("isAdmin", isAdmin);

  return (
    <div className="flex">
      {/* sidebar */}
      <div className="w-64 min-h-screen bg-orange-400">
        <ul className="menu space-y-4">
          {/* user or admin */}
          {isAdmin ? (
            <>
              <li>
                <NavLink to={"/dashboard/adminHome"}>
                  <FaHouse></FaHouse>
                  Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/addItems"}>
                  <FaUtensils></FaUtensils>
                  Add Items
                </NavLink>
              </li>

              <li>
                <NavLink to={"/dashboard/manageItems"}>
                  <FaList></FaList>
                  Manage Items
                </NavLink>
              </li>

              <li>
                <NavLink to={"/dashboard/manage-bookings"}>
                  <FaBook></FaBook>
                  Manage Bookings
                </NavLink>
              </li>

              <li>
                <NavLink to={"/dashboard/users"}>
                  <FaUser></FaUser>
                  All Users
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to={"/dashboard/userHome"}>
                  <FaHouse></FaHouse>
                  User Home
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/reservation"}>
                  <FaCalendar></FaCalendar>
                  Reservation
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/cart"}>
                  <FaCartShopping></FaCartShopping>
                  My Cart ({cart.length})
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/review"}>
                  <FaStreetView></FaStreetView>
                  Add Review
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/bookings"}>
                  <FaCalendarCheck></FaCalendarCheck>
                  My bookings
                </NavLink>
              </li>
            </>
          )}

          <div className="divider"></div>

          {/* shared or common */}
          <li>
            <NavLink to={"/"}>
              <FaHouse></FaHouse>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"/order/Salad"}>
              <GiHamburgerMenu />
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/contact"}>
              <MdEmail />
              Contacts
            </NavLink>
          </li>
        </ul>
      </div>

      {/* navigation */}
      <div className="flex-1 p-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
