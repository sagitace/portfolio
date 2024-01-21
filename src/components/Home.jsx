import React, {useState, useEffect} from "react";
import { IoIosArrowDropright  } from "react-icons/io";
import { Link as ScrollLink } from 'react-scroll';

const Home = () => {

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
                    <li className="square-up"></li>
                    <li className="square-up"></li>
                    <li className="square-up"></li>
                </ul>
            </div>
            <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-[90vh]">
                <p className="text-red-500 text-2xl animate-fade-up animate-once animate-delay-0 animate-ease-in-out">Hi there, I am</p>
                <h1 className="text-4xl sm:text-5xl font-bold text-[#edf2f4] animate-fade-up animate-once animate-delay-100 animate-ease-in-out">Aaron Labini</h1>
                <h2 className="text-4xl sm:text-5xl font-bold text-[#8d99ae] animate-fade-up animate-once animate-delay-200 animate-ease-in-out">I'm a Full-Stack Web Developer.</h2>
                <p className="text-[#8d99ae] py-4 max-w-[700px] animate-fade-up animate-once animate-delay-300 animate-ease-in-out">I specialize in building responsive web applications and aims to be an asset to your company.</p>
                <div className="animate-fade-up animate-once animate-delay-[600ms] animate-ease-in-out">
                    <div className="animate-bounce animate-infinite animate-duration-[2000ms] animate-delay-200 animate-ease-in-out mt-4">
                        <ScrollLink to='about'
                    spy={true}
                    smooth={true}
                    offset={-90}
                    duration={1000} className={`btn text-white pointer-events-auto border-2 border-red-500 px-6 py-3 my-2 flex items-center hover:bg-red-500 hover-border-red-500 rounded z-1000 cursor-pointer max-w-[20%] min-w-[190px] `} 
                            >Discover More <IoIosArrowDropright className="ml-3 h-5 w-5 hover:rotate-90 duration-300" />
                        </ScrollLink>
                    </div>
                </div>
                
               
            </div>
        </div>
    )
}

export default Home;
