import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import Home from "../pages/index";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="flex items-center flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white text-sm py-4  h-16">
      <nav
        className="max-w-[85rem] w-11/12 mx-auto px-4 sm:flex flex justify-between sm:items-center sm:justify-between md:w-3/4"
        aria-label="Global"
      >
        <div>
          <a className="flex text-xl font-semibold  justify-start" href="/">
            Brand
          </a>
        </div>
        <div className="block  sm:hidden">
          {isMenuOpen ? (
            <CloseOutlined onClick={toggleMenu} style={{ fontSize: "150%" }} />
          ) : (
            <MenuOutlined style={{ fontSize: "150%" }} onClick={toggleMenu} />
          )}
        </div>
        <div className="sm:flex flex-row hidden items-center gap-5 mt-5 pb-2 overflow-x-auto sm:justify-end sm:mt-0 sm:pl-5 sm:pb-0 sm:overflow-x-visible">
          <ul className="list-none flex gap-8 justify-end">
            <a
              className="font-medium text-gray-600 hover:text-gray-400  "
              href="/"
            >
              Home
            </a>
            <a
              className="font-medium text-gray-600 hover:text-gray-400  "
              href="/"
            >
              About
            </a>
            <a
              className="font-medium text-gray-600 hover:text-gray-400  "
              href="/"
            >
              Pricing
            </a>
          </ul>
        </div>

        {isMenuOpen && (
          <div className="absolute w-5/6 bg-slate-100 flex justify-center items-center top-20 text-center rounded-xl z-20 mt-4">
            <ul className="font-medium flex w-full flex-col p-4 md:p-0   rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0  md:bg-white   ">
              <li>
                <a
                  href="/"
                  className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0    "
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0    "
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0    "
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0    "
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
