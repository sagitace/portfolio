import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div class="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
      <header class="flex flex-wrap justify-center -mx-5 -my-2">
        <div className="text-gray-400">
          <p>Built with React and Tailwind CSS</p>
        </div>
      </header>
      <div class="flex justify-center mt-8 space-x-6">
        {[
          /*  { link: "https://www.facebook.com/aaronSagittaire/", icon: <FaFacebookSquare className="text-blue-600 h-6 w-6" /> },
            { link: "https://www.instagram.com/sagitace/", icon: <FaInstagram className="h-6 w-6 text-red-500" /> }, */
          {
            link: "https://www.linkedin.com/in/aaron-labini-101164241/",
            icon: <FaLinkedin className="h-6 w-6 text-blue-500" />,
          },
          {
            link: "https://github.com/sagitace",
            icon: <FaGithub className="h-6 w-6 text-white" />,
          },
        ].map((social, index) => (
          <div key={index} className={`animate-fade-down`}>
            <a href={social.link} target="_blank" rel="noopener noreferrer">
              {social.icon}
            </a>
          </div>
        ))}
      </div>
      <p class="mt-8 text-base leading-6 text-center text-gray-400">
        Copyright © 2024 Aaron Labini All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
