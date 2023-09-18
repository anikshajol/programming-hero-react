import { useState } from "react";
import Link from "../Link/Link";

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const routes = [
    { path: "/", name: "Home", id: 1 },
    { path: "/about", name: "About", id: 2 },
    { path: "/services", name: "Services", id: 3 },
    { path: "/contact", name: "Contact", id: 4 },
    { path: "/dashboard", name: "Dashboard", id: 5 },
  ];

  return (
    <nav className="">
      <div onClick={() => setOpen(!open)} className="text-3xl md:hidden">
        {open ? (
          <AiOutlineClose></AiOutlineClose>
        ) : (
          <AiOutlineMenu></AiOutlineMenu>
        )}
      </div>
      <ul
        className={` md:flex md:justify-end absolute md:static duration-1000  ${
          open ? "top-8 mb-10" : "-top-60"
        } bg-red-800 text-white font-semibold p-2 rounded-md`}
      >
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
