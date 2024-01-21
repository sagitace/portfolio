import React, { useState, useEffect } from "react";
import {
  FaGithub,
  FaFacebookSquare,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

const Nav = () => {
  // This is to toggle the nav (hamburger button) the nav is closed by default
  const [nav, setNav] = useState(false);

  // This is to set the active link the active link is set to Home by default
  const [activeLink, setActiveLink] = useState(
    localStorage.getItem("activeLink") || "home"
  );

  // This is to retain the active link when the page is refreshed
  useEffect(() => {
    localStorage.setItem("activeLink", activeLink);
  }, [activeLink]);

  // This is to change the active link when a link is clicked
  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  // This is to close the nav (hamburger button) when a link is clicked
  const handleNav = () => {
    setNav(!nav);
  };

  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolling(scrollTop > 70);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`sticky top-0 z-10 backdrop-filter ${scrolling ? 'backdrop-blur-md drop-shadow-lg shadow-lg' : '0'} bg-opacity-10  w-full`}>
      <nav className="flex justify-between items-center h-19 max-w-[1240px] mx-auto px-4 text-[#edf2f4] ">
        {" "}
        <h1 className="text-xl font-bold animate-fade-down animate-delay-0">
          <ScrollLink to="about" smooth={true} duration={1200}
            onClick={() => handleLinkClick("about")}
            className="navbar-link text-[#edf2f4] tracking-widest cursor-pointer"
          >
            {" "}
            Aaron<span className="text-red-500">.</span>{" "}
          </ScrollLink>{" "}
        </h1>{" "}
        <ul className="space-x-4 hidden md:flex">
          <li className="p-4 animate-fade-down animate-delay-75">
            <ScrollLink to="home" smooth={true} duration={1200}
              onClick={() => handleLinkClick("home")}
              className={`navbar-link tracking-widest relative group cursor-pointer ${
                activeLink === "home" ? "text-red-400" : "text-[#edf2f4]"
              }`}
            >
              {" "}
              Home{" "}
              <div className="absolute w-full h-0.5 bg-red-400 scale-x-0 group-hover:scale-x-100 transition-transform ease-in-out duration-500" />
            </ScrollLink>{" "}
          </li>{" "}
          <li className="p-4 animate-fade-down animate-delay-100">
            <ScrollLink to="about" smooth={true} duration={1200}
              onClick={() => handleLinkClick("about")}
              className={`tracking-widest relative group cursor-pointer ${
                activeLink === "about" ? "text-red-400" : "text-[#edf2f4]"
              }`}
            >
              {" "}
              About{" "}
              <div className="absolute w-full h-0.5 bg-red-400 scale-x-0 group-hover:scale-x-100 transition-transform ease-in-out duration-500" />
            </ScrollLink>{" "}
          </li>{" "}
          <li className="p-4 animate-fade-down animate-delay-150">
            <ScrollLink to="skills" smooth={true} duration={1200}
              onClick={() => handleLinkClick("Skills")}
              className={`tracking-widest relative group cursor-pointer ${
                activeLink === "skills" ? "text-red-400" : "text-[#edf2f4]"
              }`}
            >
              {" "}
              Skills{" "}
              <div className="absolute w-full h-0.5 bg-red-400 scale-x-0 group-hover:scale-x-100 transition-transform ease-in-out duration-500" />
            </ScrollLink>{" "}
          </li>{" "}
          <li className="p-4 animate-fade-down animate-delay-200">
            <ScrollLink to="projects" smooth={true} duration={1200}
              onClick={() => handleLinkClick("projects")}
              className={`tracking-widest relative group cursor-pointer${
                activeLink === "projects" ? "text-red-400" : "text-[#edf2f4]"
              }`}
            >
              {" "}
              Projects{" "}
              <div className="absolute w-full h-0.5 bg-red-400 scale-x-0 group-hover:scale-x-100 transition-transform ease-in-out duration-500" />
            </ScrollLink>{" "}
          </li>{" "}
          <li className="p-4 animate-fade-down animate-delay-300">
            <ScrollLink to="contact" smooth={true} duration={1200}
              onClick={() => handleLinkClick("contact")}
              className={`tracking-widest relative group cursor-pointer ${
                activeLink === "contact" ? "text-red-400" : "text-[#edf2f4]"
              }`}
            >
              {" "}
              Contact{" "}
              <div className="absolute w-full h-0.5 bg-red-400 scale-x-0 group-hover:scale-x-100 transition-transform ease-in-out duration-500" />
            </ScrollLink>{" "}
          </li>{" "}
          <li className="p-4 animate-fade-down animate-delay-500">
            <a
              href="#Resume"
              className="bg-transparent hover:bg-red-500 text-[#edf2f4] font-semibold hover:text-[#edf2f4] py-2 px-4 border border-red-500 hover:border-transparent rounded ease-in-out duration-500"
            >
              {" "}
              Resume{" "}
            </a>{" "}
          </li>{" "}
        </ul>{" "}
        <div className="space-x-4 hidden lg:flex">
          <div className="animate-fade-down animate-delay-700">
            <a href="https://www.facebook.com/aaronSagittaire/" target="_blank" rel="noopener noreferrer">
              {" "}
              <FaFacebookSquare className="text-blue-600 h-6 w-6" />
            </a>{" "}
          </div>

          <div className="animate-fade-down animate-delay-[800ms]">
            <a href="https://www.instagram.com/sagitace/" target="_blank" rel="noopener noreferrer">
              {" "}
              <FaInstagram className="h-6 w-6 text-red-500" />
            </a>{" "}
          </div>
          
          <div className="animate-fade-down animate-delay-[900ms]">
            <a href="https://www.linkedin.com/in/aaron-labini-101164241/" target="_blank" rel="noopener noreferrer">
              {" "}
              <FaLinkedin className="h-6 w-6 text-blue-500" />
            </a>{" "}
          </div>

          <div className="animate-fade-down animate-delay-1000">
            <a href="https://github.com/sagitace" target="_blank" rel="noopener noreferrer">
              {" "}
              <FaGithub className="h-6 w-6" />
            </a>{" "}
          </div>
          
        </div>{" "}
        <div onClick={handleNav} className="block md:hidden z-[50]">
          {" "}
          {!nav ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}{" "}
        </div>{" "}
        <div
          className={
            !nav
              ? "fixed left-0 top-0 w-[100%] h-full border-r-gray-900 bg-[#2b2d42] ease-in-out duration-500 block md:hidden overflow-hidden z-[10]"
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

        {/* <div className="flex fixed flex-col top-[35%] left-0">
          <ul>
            <li>
              <a href="#Facebook"><FaFacebookSquare /></a>
            </li>
            <li>
              <a href="#Instagram"><FaInstagram /></a>
            </li>
            <li>
              <a href="#LinkedIn"><FaLinkedin /></a>
            </li>
            <li>
              <a href="#Github"><FaGithub /></a>
            </li>
          </ul>
        </div> */}
      </nav>
    </div>
  );
};

export default Nav;
