import React from "react";

const Projects = () => {
   

    return (
        <div className="mx-auto">
           <header className='flex flex-col items-center text-center'>
                <h1 className='font-bold text-4xl mb-[50px] text-transform: uppercase after:mx-auto after:mb-0 after:block after:mt-5 after:rounded-full after:h-1 after:w-24 after:-translate-y-1 after:bg-red-600 text-[#edf2f4]'>Projects
                </h1>
           </header>
           <div className="grid grid-cols-0 md:grid-cols-1 lg:grid-cols-2 gap-x-10 md:gap-y-4 w-full mb-24">

           <div className="overflow-hidden shadow-lg rounded-lg h-[400px] w-[325px] mb-6 sm:w-96 md:w-[550px] m-auto drop-shadow-xl shadow-stone-500 bg-[url('../public/assets/project1-bg.png')] bg-cover">
                        <div className="relative w-full flex flex-col justify-between  h-full">
                            <div className="absolute inset-x-0 bottom-4 left-4 right-4">
                                <p className="text-white text-3xl font-medium">
                                    Portfolio Website Version 1.0
                                </p>
                                <p className="text-white font-light text-md">
                                    My old portfolio website built with HTML, JavaScript, CSS, and Bootstrap.
                                </p>
                                <div className="flex flex-wrap justify-starts items-center py-3 border-b-2 text-xs text-white font-medium">
                                    <span className="m-1 px-2 py-1 rounded bg-red-500">
                                        HTML 5
                                    </span>
                                    <span className="m-1 px-2 py-1 rounded bg-red-500">
                                        CSS 3
                                    </span>
                                    <span className="m-1 px-2 py-1 rounded bg-red-500">
                                        Bootstrap
                                    </span>
                                    <span className="m-1 px-2 py-1 rounded bg-red-500">
                                        JavaScript
                                    </span>
                                </div>
                            
                                <div className="flex items-center mt-2 gap-3">
                                    <div className="animate-delay-200 animate-ease-in-out mt-4">
                                        <a href="https://github.com/sagitace/portfolio-v1"
                                            className="btn font-bold text-white pointer-events-auto border-2 border-red-500 px-6 py-2 flex items-center hover:bg-red-500 hover-border-red-500 rounded z-1000 cursor-pointer w-auto tracking-widest" 
                                            > {/* <FaGithub className="h-6 w-6 text-white"/> */} REPO
                                        </a>
                                    </div>
                                    <div className="animate-delay-200 animate-ease-in-out mt-4">
                                        <a href="https://sagitace.github.io/portfolio-v1" target="_blank" rel="noopener noreferrer"
                                            className="btn font-bold text-white pointer-events-auto border-2 border-red-500 px-6 py-2 flex items-center hover:bg-red-500 hover-border-red-500 rounded z-1000 cursor-pointer w-auto tracking-widest" 
                                            > LIVE
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>

                <div className="overflow-hidden shadow-lg rounded-lg h-[400px] w-[325px] mb-6 sm:w-96 md:w-[550px]  m-auto drop-shadow-xl shadow-stone-500 bg-[url('../public/assets/project2-bg.png')] bg-cover">
                        <div className="relative w-full flex flex-col justify-between  h-full">
                            <div className="absolute inset-x-0 bottom-4 left-4 right-4">
                                <p className="text-white text-3xl font-medium">
                                    Portfolio Website Version 2.0
                                </p>
                                <p className="text-white font-light text-md">
                                    My new portfolio website built with React and Tailwind CSS.
                                </p>
                                <div className="flex flex-wrap justify-starts items-center py-3 border-b-2 text-xs text-white font-medium">
                                    <span className="m-1 px-2 py-1 rounded bg-red-500">
                                        HTML 5
                                    </span>
                                    <span className="m-1 px-2 py-1 rounded bg-red-500">
                                        Tailwind CSS
                                    </span>
                                    <span className="m-1 px-2 py-1 rounded bg-red-500">
                                        React
                                    </span>
                                </div>
                            
                                <div className="flex items-center mt-2 gap-3">
                                    <div className="animate-delay-200 animate-ease-in-out mt-4">
                                        <a href="#wala pa"
                                            className="btn font-bold text-white pointer-events-auto border-2 border-red-500 px-6 py-2 flex items-center hover:bg-red-500 hover-border-red-500 rounded z-1000 cursor-pointer w-auto tracking-widest" 
                                            >  {/* <FaGithub className="h-6 w-6 text-white"/> */} REPO
                                        </a>
                                    </div>
                                    <div className="animate-delay-200 animate-ease-in-out mt-4">
                                        <a href="https://sagitace.github.io/portfolio/" target="_blank" rel="noopener noreferrer"
                                            className="btn font-bold text-white pointer-events-auto border-2 border-red-500 px-6 py-2 flex items-center hover:bg-red-500 hover-border-red-500 rounded z-1000 cursor-pointer w-auto tracking-widest" 
                                            > LIVE
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>

                <div className="overflow-hidden shadow-lg rounded-lg h-[400px] w-[325px] mb-6 sm:w-96 md:w-[550px] m-auto drop-shadow-xl shadow-stone-500" >
                        <div className="relative w-full flex flex-col justify-between h-full bg-[url('../public/assets/tapbox-bg.png')] bg-cover">
                            <div className="absolute inset-x-0 bottom-4 left-4 right-4">
                                <p className="text-white text-3xl font-medium">
                                    Tapbox
                                </p>
                                <p className="text-white font-light text-md">
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut consequatur vel 
                                </p>
                                <div className="flex flex-wrap justify-starts items-center py-3 border-b-2 text-xs text-white font-medium">
                                    <span className="m-1 px-2 py-1 rounded bg-red-500">
                                        HTML 5
                                    </span>
                                    <span className="m-1 px-2 py-1 rounded bg-red-500">
                                        Bootstrap
                                    </span>
                                    <span className="m-1 px-2 py-1 rounded bg-red-500">
                                        Laravel
                                    </span>
                                </div>
                            
                                <div className="flex items-center mt-2">
                                <div className="animate-delay-200 animate-ease-in-out mt-4">
                                        <a href="#wala pa"
                                            className="btn text-white pointer-events-auto border-2 border-red-500 px-6 py-2 flex items-center hover:bg-red-500 hover-border-red-500 rounded z-1000 cursor-pointer w-auto tracking-widest font-bold" 
                                            >  REPO
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>

                <div className="overflow-hidden shadow-lg rounded-lg h-[400px] w-[325px] mb-6 sm:w-96 md:w-[550px] m-auto drop-shadow-xl shadow-stone-500">
                        <div className="relative w-full flex flex-col justify-between h-full bg-[url('../public/assets/project3-bg.png')] bg-cover">
                            <div className="absolute inset-x-0 bottom-4 left-4 right-4">
                                <p className="text-white text-3xl font-medium">
                                    eBicol University Provident Fund
                                </p>
                                <p className="text-white font-light text-md">
                                    Capstone Project Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod quidem 
                                </p>
                                <div className="flex flex-wrap justify-starts items-center py-3 border-b-2 text-xs text-white font-medium">
                                    <span className="m-1 px-2 py-1 rounded bg-red-500">
                                        HTML 5
                                    </span>
                                    <span className="m-1 px-2 py-1 rounded bg-red-500">
                                        Bootstrap
                                    </span>
                                    <span className="m-1 px-2 py-1 rounded bg-red-500">
                                        Laravel
                                    </span>
                                    <span className="m-1 px-2 py-1 rounded bg-red-500">
                                        PortgreSQL
                                    </span>
                                </div>
                            
                                <div className="flex items-center mt-2">
                                <div className="animate-delay-200 animate-ease-in-out mt-4">
                                        <a href="#wala pa"
                                            className="btn text-white pointer-events-auto border-2 border-red-500 px-6 py-2 flex items-center hover:bg-red-500 hover-border-red-500 rounded z-1000 cursor-pointer w-auto tracking-widest font-bold" 
                                            >  REPO 
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>

           </div>
        </div>
    )
};

export default Projects;