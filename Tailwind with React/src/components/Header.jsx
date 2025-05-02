import React, { useState } from "react";
import viteLogo from "/vite.svg";
import { NavLink } from "react-router-dom";
import Model from "./Model";

const Header = () => {
  return (
    <header className="flex justify-between py-4 px-4 md:px-8 shadow-md">
      <img src={viteLogo} alt="ViteLogo" />
      <ul className="flex gap-5">
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "underline text-blue-800 font-bold decoration-sky-500/[.33]"
                : ""
            }
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "underline text-blue-800 font-bold decoration-sky-500/[.33]"
                : ""
            }
            to="/about"
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "underline text-blue-800 font-bold decoration-sky-500/[.33]"
                : ""
            }
            to="/contact"
          >
            Contact
          </NavLink>
        </li>
        <li>
          <Model />
        </li>
      </ul>
    </header>
  );
};

export default Header;
