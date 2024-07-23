import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link as ScrollLink } from "react-scroll";

const Nav = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 70);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [isNavOpen, setIsNavOpen] = useState(true);

  return (
    <div
      className={`sticky top-0 z-10 backdrop-filter ${
        scrolling && isNavOpen
          ? "backdrop-blur-md drop-shadow-lg shadow-lg"
          : ""
      } bg-opacity-10 w-full`}
    >
      <nav className="flex justify-between items-center h-[60px] max-w-[1240px] mx-auto px-4 text-[#edf2f4]">
        <h1 className="text-xl font-bold animate-fade-down animate-delay-0">
          <ScrollLink
            to="about"
            smooth={true}
            duration={1200}
            onClick={() => setIsNavOpen(false)}
            className="navbar-link text-[#edf2f4] tracking-widest cursor-pointer"
          >
            Aaron<span className="text-red-500">.</span>
          </ScrollLink>
        </h1>

        <ul className="DESKTOP-MENU space-x-4 hidden lg:flex">
          {[
            "home",
            "about",
            "skills",
            "projects",
            "certificates",
            "contact",
          ].map((section, index) => (
            <li key={section} className={`nav-item p-4 animate-fade-down`}>
              <ScrollLink
                to={section}
                spy={true}
                smooth={true}
                offset={-90}
                duration={1000}
                onClick={() => setIsNavOpen(false)}
                className="navbar-link tracking-widest relative group cursor-pointer text-[#edf2f4]"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
                <div className="absolute w-full h-0.5 bg-red-400 scale-x-0 group-hover:scale-x-100 transition-transform ease-in-out duration-500" />
              </ScrollLink>
            </li>
          ))}
          <li className="nav-item p-4 animate-fade-down">
          <a
              href={process.env.PUBLIC_URL + "/media/Resume.pdf"}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent hover:bg-red-500 text-white-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded"
            >
              Resume
            </a>
            {/* <a
              href="https://green-doloritas-62.tiiny.site/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent hover:bg-red-500 text-white-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded"
            >
              Resume
            </a> */}
          </li>
        </ul>
        <div className="DESKTOP-MENU space-x-4 hidden lg:flex">
          {[
            {
              link: "https://www.instagram.com/sagitace/",
              icon: <FaInstagram className="h-6 w-6 text-red-500" />,
            },
            {
              link: "https://www.linkedin.com/in/aaron-labini-101164241/",
              icon: <FaLinkedin className="h-6 w-6 text-blue-600" />,
            },
            {
              link: "https://github.com/sagitace",
              icon: <FaGithub className="h-6 w-6" />,
            },
          ].map((social, index) => (
            <div key={index} className={`animate-fade-down`}>
              <a href={social.link} target="_blank" rel="noopener noreferrer">
                {social.icon}
              </a>
            </div>
          ))}
        </div>

        <section className="MOBILE-MENU flex lg:hidden">
          <div
            className="HAMBURGER-ICON space-y-2 z-50"
            onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
          >
            {isNavOpen ? (
              <AiOutlineMenu size={24} />
            ) : (
              <AiOutlineClose size={24} />
            )}
          </div>

          <div className={`{isNavOpen ? "showMenuNav z-[50]" : "hideMenuNav"}`}>
            <div
              className={`fixed left-0 top-0 w-[100%] h-[78%]  border-r-gray-900 bg-[#2b2d42] ease-in-out duration-500 block lg:hidden overflow-hidden shadow-lg ${
                !isNavOpen ? "" : "left-[-100%]"
              }`}
            >
              <h1 className="text-xl font-bold w-full m-6 "> Aaron. </h1>
              <ul className="uppercase p-4">
                {[
                  "home",
                  "about",
                  "skills",
                  "projects",
                  "certificates",
                  "contact",
                ].map((section, index) => (
                  <li
                    key={section}
                    className={`nav-item p-4 animate-fade-down`}
                  >
                    <ScrollLink
                      to={section}
                      spy={true}
                      smooth={true}
                      offset={-90}
                      duration={1000}
                      onClick={() => setIsNavOpen(true)}
                      className="navbar-link tracking-widest relative group cursor-pointer text-[#edf2f4]"
                    >
                      {section.charAt(0).toUpperCase() + section.slice(1)}
                      <div className="absolute w-full h-0.5 bg-red-400 scale-x-0 group-hover:scale-x-100 transition-transform ease-in-out duration-500" />
                    </ScrollLink>
                  </li>
                ))}
                <li className="nav-item p-4 animate-fade-down">
                  <a
                    href={process.env.PUBLIC_URL + "/media/Resume.pdf"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-transparent hover:bg-red-500 text-white-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded"
                  >
                    Resume
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </nav>
    </div>
  );
};

export default Nav;
