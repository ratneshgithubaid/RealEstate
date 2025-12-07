import React from "react";
import { useDarkMode } from "./DarkModeContext";
import { Link } from "react-scroll";

import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaBuilding,
  FaMobile,
  FaFax,
  FaArrowUp,
  FaMoon,
  FaSun,
} from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import prop7 from "../assets/images/prop7.jpg";
import prop8 from "../assets/images/prop8.jpg";

const Footer = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <>
      <footer
        className={`${
          darkMode ? "dark bg-black" : "light bg-gray-800"
        } w-full m-auto lg:px-20 px-6 py-16 grid lg:grid-cols-3 grid-cols-1 justify-center items-start lg:gap-20 gap-12`}
      >
        {/* About Us */}
        <div className="flex flex-col justify-center items-start gap-5">
          <h1 className="text-white text-2xl font-semibold">About Us</h1>
          <p className="text-slate-300 leading-relaxed text-justify">
            We simplify property buying, selling, and investing with trusted
            listings, expert guidance, and seamless service for your dream home.
          </p>

          {/* Social Icons */}
          <div className="flex justify-start items-center gap-4 mt-6">
            <div className="p-3 rounded-lg bg-white hover:bg-red-600 hover:text-white cursor-pointer transform hover:scale-110 transition duration-300 shadow-md">
              <FaFacebook className="size-5" />
            </div>
            <div className="p-3 rounded-lg bg-white hover:bg-red-600 hover:text-white cursor-pointer transform hover:scale-110 transition duration-300 shadow-md">
              <FaInstagram className="size-5" />
            </div>
            <div className="p-3 rounded-lg bg-white hover:bg-red-600 hover:text-white cursor-pointer transform hover:scale-110 transition duration-300 shadow-md">
              <FaTwitter className="size-5" />
            </div>
            <div className="p-3 rounded-lg bg-white hover:bg-red-600 hover:text-white cursor-pointer transform hover:scale-110 transition duration-300 shadow-md">
              <FaYoutube className="size-5" />
            </div>
          </div>

          <p className="text-slate-400 text-sm mt-6">
            © Real Estate, All Rights Reserved
          </p>
        </div>

        {/* Contact Us */}
        <div className="flex flex-col justify-center items-start gap-6">
          <h1 className="text-white text-2xl font-semibold">Contact Us</h1>

          <div className="flex items-start gap-3">
            <FaBuilding className="text-white text-xl flex-shrink-0" />
            <p className="text-slate-300 leading-relaxed">
              Find your dream property with us — from apartments to villas,
              plots to offices, we make real estate simple.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <FaMobile className="text-white size-5" />
            <p className="text-slate-300">+91 23 8992 7829</p>
          </div>
          <div className="flex items-center gap-3">
            <FaFax className="text-white size-5" />
            <p className="text-slate-300">9241 8629</p>
          </div>
          <div className="flex items-center gap-3">
            <IoMdMail className="text-white size-5" />
            <p className="text-slate-300">ram@gmail.com</p>
          </div>
        </div>

        {/* Latest Property */}
        <div className="flex flex-col justify-center items-start gap-6">
          <h1 className="text-white text-2xl font-semibold">Latest Property</h1>

          <div className="flex justify-center items-center gap-4 hover:bg-gray-700/30 p-2 rounded-lg transition duration-300">
            <img
              src={prop7}
              alt="Villa"
              className="w-[120px] h-[80px] object-cover rounded-lg transform hover:scale-105 cursor-pointer transition duration-300"
            />
            <div>
              <h1 className="text-lg text-white font-medium">
                Villa with amazing view
              </h1>
              <p className="text-slate-400">$350.99</p>
            </div>
          </div>

          <div className="flex justify-center items-center gap-4 hover:bg-gray-700/30 p-2 rounded-lg transition duration-300">
            <img
              src={prop8}
              alt="Beach view"
              className="w-[120px] h-[80px] object-cover rounded-lg transform hover:scale-105 cursor-pointer transition duration-300"
            />
            <div>
              <h1 className="text-lg text-white font-medium">
                Smart view from beach
              </h1>
              <p className="text-slate-400">$520.99</p>
            </div>
          </div>
        </div>
      </footer>

      {/* slided to top button */}
      <div
        id="icon-box"
        className="bg-red-600 p-4 rounded-full hover:bg-black cursor-pointer fixed lg:bottom-12 bottom-6 right-6"
      >
        <Link to="hero" spy={true} offset={-100} smooth={true}>
          <FaArrowUp className="size-6  text-white" />
        </Link>
      </div>

      {/* dark mode toggle button section */}
      <div>
        <button
          onClick={toggleDarkMode}
          className="flex items-center  p-4 rounded-full bg-orange-500 fixed lg:top-52 right-6 top-6"
        >
          {darkMode ? (
            <FaMoon size={25} className="text-black" />
          ) : (
            <FaSun size={25} className="text-black" />
          )}
        </button>
      </div>
    </>
  );
};

export default Footer;
