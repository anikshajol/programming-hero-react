import { useEffect } from "react";
import { useState } from "react";
import { BsCalendar4 } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import moment from "moment";
import img1 from "../../../assets/1.png";
import img2 from "../../../assets/2.png";
import img3 from "../../../assets/3.png";

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("./categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div className="mb-7">
      <h2 className="text-3xl mb-5">All Categories</h2>
      {categories.map((category) => (
        <ul
          className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          key={category.id}
        >
          <li>
            {" "}
            <NavLink to={""}>{category.name}</NavLink>
          </li>
        </ul>
      ))}

      <section className="my-8">
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img className="rounded-t-lg" src={img1} alt="" />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Bayern Slams Authorities Over Flight Delay to Club World Cup
              </h5>
            </a>

            <section className="flex justify-between items-center">
              <p className="">Sports</p>
              <div className="flex items-center">
                <BsCalendar4 className="mr-2 text-gray-400"></BsCalendar4>
                <span className="text-gray-400">
                  {moment().format("MMM D YYYY")}
                </span>
              </div>
            </section>
          </div>
        </div>
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img className="rounded-t-lg" src={img2} alt="" />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Bayern Slams Authorities Over Flight Delay to Club World Cup
              </h5>
            </a>

            <section className="flex justify-between items-center">
              <p className="">Sports</p>
              <div className="flex items-center">
                <BsCalendar4 className="mr-2 text-gray-400"></BsCalendar4>
                <span className="text-gray-400">
                  {moment().format("MMM D YYYY")}
                </span>
              </div>
            </section>
          </div>
        </div>
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img className="rounded-t-lg" src={img3} alt="" />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Bayern Slams Authorities Over Flight Delay to Club World Cup
              </h5>
            </a>

            <section className="flex justify-between items-center">
              <p className="">Sports</p>
              <div className="flex items-center">
                <BsCalendar4 className="mr-2 text-gray-400"></BsCalendar4>
                <span className="text-gray-400">
                  {moment().format("MMM D YYYY")}
                </span>
              </div>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LeftSideNav;
