import React from "react";
import { IoIosArrowDropright  } from "react-icons/io";

const Home = () => {
    return(
        <div name="home" className="w-full h-screen">

            <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-[90vh]">
                <p className="text-red-500 text-2xl">Hi there 👋, I am</p>
                <h1 className="text-4xl sm:text-5xl font-bold text-[#edf2f4]">Aaron Labini</h1>
                <h2 className="text-4xl sm:text-5xl font-bold text-[#8d99ae]">I'm a Full-Stack Web Developer.</h2>
                <p className="text-[#8d99ae] py-4 max-w-[700px]">I specialize in building responsive web applications and aims to be an asset to your company.</p>
                <div>
                    <button className="text-white border-2 border-red-500 px-6 py-3 my-2 flex items-center hover:bg-red-500 hover-border-red-500 rounded ease-in-out duration-500 transform transition-transform hover:scale-105">
                        Discover More <IoIosArrowDropright  className="ml-3 h-5 w-5 hover:rotate-90 duration-300"/>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Home;
