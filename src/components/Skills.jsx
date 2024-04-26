import React from "react";
import Slide from "react-reveal/Slide";
const Skills = () => {
  return (
    <div className="bg-gray-800 flex justify-between items-center mx-auto px-6 md:px-6 lg:px-6 w-full lg:py-12 md:10 py-8">
      <div className="container mx-auto w-full animate-fade-left animate-once animate-delay-200 animate-ease-in-out">
        <div className="grid grid-cols-8 md:grid-flow-row lg:grid-flow-row w-full">
          <Slide left duration={2000}>
            <div className="flex items-center justify-center">
              <img
                src={process.env.PUBLIC_URL + "/assets/html.png"}
                alt="html icon"
                className="h-8 md:h-16 lg:h-20"
              />
            </div>

            <div className="flex items-center justify-center">
              <img
                src={process.env.PUBLIC_URL + "/assets/css-3.png"}
                alt="css icon"
                className="h-8 md:h-16 lg:h-20"
              />
            </div>
            <div className="flex items-center justify-center">
              <img
                src={process.env.PUBLIC_URL + "/assets/bootstrap.png"}
                alt="bootstrap icon"
                className="h-8 md:h-16 lg:h-20"
              />
            </div>
            <div className="flex items-center justify-center">
              <img
                src="https://img.icons8.com/color/512/git.png"
                alt="git"
                className="h-10 md:h-20 lg:h-24"
              />
            </div>
            <div className="flex items-center justify-center">
              <img
                src={process.env.PUBLIC_URL + "/assets/js.png"}
                alt="javascript icon"
                className="h-8 md:h-16 lg:h-20"
              />
            </div>
            <div className="flex items-center justify-center">
              <img
                src={process.env.PUBLIC_URL + "/assets/react.png"}
                alt="react icon"
                className="h-8 md:h-16 lg:h-20"
              />
            </div>
            <div className="flex items-center justify-center">
              <img
                src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/512/external-laravel-is-a-free-open-source-php-web-framework-logo-color-tal-revivo.png"
                alt="external-laravel-is-a-free-open-source-php-web-framework-logo-color-tal-revivo"
                className="h-8 md:h-16 lg:h-20"
              />
            </div>
            <div className="flex items-center justify-center">
              <img
                src={process.env.PUBLIC_URL + "/assets/postgre.png"}
                alt="react icon"
                className="h-8 md:h-16 lg:h-20"
              />
            </div>
          </Slide>
        </div>
      </div>
    </div>
  );
};

export default Skills;
