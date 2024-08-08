import React from "react";
import logo from "../../../public/vite.svg";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <nav className="bg-teal-300 min-h-[90px]  ">
      <div className="flex justify-between items-center p-6">
        <div className="m-6 pl-9">
          <img src={logo} />
        </div>
        <div className="flex gap-8 pr-9 text-2xl ">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `hover:bg-orange-300 p-3 rounded-sm ${isActive ? "red" : "blue"}`
            }
          >
            {" "}
            Topics{" "}
          </NavLink>
          <NavLink
            to="/statics"
            className={({ isActive }) =>
              `hover:bg-orange-300 p-3 rounded-sm ${isActive ? "red" : "blue"}`
            }
          >
            Statics
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `hover:bg-orange-300 p-3 rounded-sm ${isActive ? "red" : "blue"}`
            }
          >
            Contact
          </NavLink>
        </div>{" "}
      </div>
    </nav>
  );
}

export default Header;
