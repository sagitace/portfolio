import React, {useState, useEffect} from "react";
import { IoIosArrowDropright  } from "react-icons/io";
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

const Home = () => {

  // This is to set the active link the active link is set to Home by default
  const [activeLink, setActiveLink] = useState(
    localStorage.getItem("activeLink") || "Home"
  );

  // This is to retain the active link when the page is refreshed
  useEffect(() => {
    localStorage.setItem("activeLink", activeLink);
  }, [activeLink]);

  // This is to change the active link when a link is clicked
  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

    return(
        
        <div name="home" className="w-full h-screen">
            <div class="area" >
                <ul class="circles">
                    <li className="square-up"></li>
                    <li className="square-up"></li>
                    <li className="square-up"></li>
                    <li className="square-up"></li>
                    <li className="square-up"></li>
                    <li className="square-up"></li>
                    <li className="square-up"></li>
                    <li className="square-up"></li>
                    <li className="square-up"></li>
                    <li className="square-up"></li>
                </ul>
            </div>
            <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-[90vh]">
                <p className="text-red-500 text-2xl">Hi there, I am</p>
                <h1 className="text-4xl sm:text-5xl font-bold text-[#edf2f4]">Aaron Labini</h1>
                <h2 className="text-4xl sm:text-5xl font-bold text-[#8d99ae]">I'm a Full-Stack Web Developer.</h2>
                <p className="text-[#8d99ae] py-4 max-w-[700px]">I specialize in building responsive web applications and aims to be an asset to your company.</p>
               
                <div className="animate-bounce animate-infinite animate-duration-[2000ms] animate-delay-0 animate-ease-in-out mt-4">
                    <ScrollLink to="about" smooth={true} duration={1500} className={`btn text-white pointer-events-auto border-2 border-red-500 px-6 py-3 my-2 flex items-center hover:bg-red-500 hover-border-red-500 rounded z-1000 cursor-pointer max-w-[20%] min-w-[190px] ${
                activeLink === "about" ? "text-red-400" : "text-[#edf2f4]"
              }`} onClick={() => handleLinkClick("about") 
                         }>Discover More <IoIosArrowDropright className="ml-3 h-5 w-5 hover:rotate-90 duration-300" />
                    </ScrollLink>
                </div>
               
            </div>
        </div>
    )
}

export default Home;
