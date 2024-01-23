import React, { useState, useEffect } from "react";
import { FaGithub, FaFacebookSquare, FaInstagram, FaLinkedin } from "react-icons/fa";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link as ScrollLink } from 'react-scroll';


const Nav = () => {
  
  // Download my resume
  const downloadResume = () => {
    const pdfUrl = process.env.PUBLIC_URL + "/Resume.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Aaron Labini Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const [nav, setNav] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 70);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = () => {
    const newNavState = !nav;
    setNav(newNavState);

    // Save the new state to localStorage
    localStorage.setItem('nav', newNavState.toString());
  };

  useEffect(() => {
    // Retrieve the state from localStorage
    const storedNav = localStorage.getItem('nav');
    if (storedNav !== null) {
      setNav(storedNav === 'true');
    }
  }, []);

  return (
    <div className={`sticky top-0 z-10 backdrop-filter ${scrolling ? 'backdrop-blur-md drop-shadow-lg shadow-lg' : '0'} bg-opacity-10  w-full`}>
      <nav className="flex justify-between items-center h-[60px] max-w-[1240px] mx-auto px-4 text-[#edf2f4]">
        <h1 className="text-xl font-bold animate-fade-down animate-delay-0">
          <ScrollLink to="about" smooth={true} duration={1200} onClick={() => setNav(false)} className="navbar-link text-[#edf2f4] tracking-widest cursor-pointer">
            Aaron<span className="text-red-500">.</span>
          </ScrollLink>
        </h1>
        <ul className="space-x-4 hidden md:flex">
          {["home", "about", "skills", "projects", "contact"].map((section, index) => (
            <li key={section} className={`nav-item p-4 animate-fade-down`}>
              <ScrollLink
                to={section}
                spy={true}
                smooth={true}
                offset={-90}
                duration={1000}
                onClick={() => setNav(false)}
                className="navbar-link tracking-widest relative group cursor-pointer text-[#edf2f4]"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
                <div className="absolute w-full h-0.5 bg-red-400 scale-x-0 group-hover:scale-x-100 transition-transform ease-in-out duration-500" />
              </ScrollLink>
            </li>
          ))}
          <li className="nav-item p-4 animate-fade-down">
            <a
                href="#download"
                onClick={(e) => {
                    e.preventDefault();
                    downloadResume();
                }}
                className="bg-transparent hover:bg-red-500 text-white-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded"
            >
                Resume
            </a>
          </li>
        </ul>
        <div className="space-x-4 hidden lg:flex">
          {[
            { link: "https://www.facebook.com/aaronSagittaire/", icon: <FaFacebookSquare className="text-blue-600 h-6 w-6" /> },
            { link: "https://www.instagram.com/sagitace/", icon: <FaInstagram className="h-6 w-6 text-red-500" /> },
            { link: "https://www.linkedin.com/in/aaron-labini-101164241/", icon: <FaLinkedin className="h-6 w-6 text-blue-500" /> },
            { link: "https://github.com/sagitace", icon: <FaGithub className="h-6 w-6" /> },
          ].map((social, index) => (
            <div key={index} className={`animate-fade-down`}>
              <a href={social.link} target="_blank" rel="noopener noreferrer">
                {social.icon}
              </a>
            </div>
          ))}
        </div>
        <div onClick={handleNav} className="block md:hidden z-[50]">
          {!nav ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
        </div>
        <div className={`fixed left-0 top-0 w-[100%] h-full border-r-gray-900 bg-[#2b2d42] ease-in-out duration-500 block md:hidden overflow-hidden z-[10] ${!nav ? '' : 'left-[-100%]'}`}>
          <h1 className="text-xl font-bold w-full m-6 "> Aaron. </h1>
          <ul className="uppercase p-4">
            {["home", "about", "skills", "projects", "contact"].map((section) => (
              <li key={section} className="p-4 border-b border-gray-600">
                <a href={`#${section}`} onClick={() => setNav(false)}>
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              </li>
            ))}
            <li className="p-4">
              <a
                  href="#download"
                  onClick={(e) => {
                      e.preventDefault();
                      downloadResume();
                  }}
                  className="bg-transparent hover:bg-red-500 text-white-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded"
              >
                  Resume
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
