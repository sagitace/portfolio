import React, { useState } from "react";
import {
  FaGithub,
  FaFacebookSquare,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Nav = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <nav className="flex justify-between items-center h-20 max-w-[1240px] mx-auto px-4 text-white">
      {" "}
      <h1 className="text-xl font-bold"> Aaron. </h1>{" "}
      <ul className="space-x-4 hidden md:flex">
        <li className="p-4">
          <a href="#Home"> Home </a>{" "}
        </li>{" "}
        <li className="p-4">
          <a href="#About"> About </a>{" "}
        </li>{" "}
        <li className="p-4">
          <a href="#Skills"> Skills </a>{" "}
        </li>{" "}
        <li className="p-4">
          <a href="#Projects"> Projects </a>{" "}
        </li>{" "}
        <li className="p-4">
          <a href="#Projects"> Contact </a>{" "}
        </li>{" "}
        <li className="p-4">
          <a
            href="#Resume"
            className="bg-transparent hover:bg-red-500 text-white-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded"
          >
            {" "}
            Resume{" "}
          </a>{" "}
        </li>{" "}
      </ul>{" "}
      <div className="space-x-4 hidden lg:flex">
        <a href="#social-media-link-1">
          {" "}
          <FaFacebookSquare className="text-blue-600 h-6 w-6" />
        </a>{" "}
        <a href="#social-media-link-1">
          {" "}
          <FaInstagram className="h-6 w-6 text-red-500" />
        </a>{" "}
        <a href="#social-media-link-2">
          {" "}
          <FaLinkedin className="h-6 w-6 text-blue-500" />
        </a>{" "}
        <a href="#social-media-link-2">
          {" "}
          <FaGithub className="h-6 w-6" />
        </a>{" "}
      </div>{" "}
      <div onClick={handleNav} className="block md:hidden">
        {" "}
        {!nav ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}{" "}
      </div>{" "}
      <div
        className={
          !nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r-gray-900 bg-[#2b2d42] ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="text-xl font-bold w-full m-6"> Aaron. </h1>{" "}
        <ul className="uppercase p-4">
          <li className="p-4 border-b border-gray-600">
            <a href="#Home"> Home </a>{" "}
          </li>{" "}
          <li className="p-4 border-b border-gray-600">
            <a href="#About"> About </a>{" "}
          </li>{" "}
          <li className="p-4 border-b border-gray-600">
            <a href="#Skills"> Skills </a>{" "}
          </li>{" "}
          <li className="p-4 border-b border-gray-600">
            <a href="#Projects"> Projects </a>{" "}
          </li>{" "}
          <li className="p-4 border-b border-gray-600">
            <a href="#Projects"> Contact </a>{" "}
          </li>{" "}
          <li className="p-4">
            <a
              href="#Resume"
              className="bg-transparent hover:bg-red-500 text-white-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded"
            >
              {" "}
              Resume{" "}
            </a>{" "}
          </li>{" "}
        </ul>{" "}
      </div>{" "}
    </nav>
  );
};

export default Nav;
