import React from "react";
import { SiMinutemailer } from "react-icons/si";
import { BsFillSendFill } from "react-icons/bs";

const Contact = () => {
    return (
        <div className="mx-auto">
            <header className='flex flex-col items-center text-center'>
                <h1 className='font-bold text-4xl mb-[55px] text-transform: uppercase after:mx-auto after:mb-0 after:block after:mt-5 after:rounded-full after:h-1 after:w-28 after:-translate-y-1 after:bg-red-600 text-[#edf2f4]'>Get in touch
                </h1>

                
           </header>
           <div className="relative flex items-top sm:items-center sm:pt-0">
                    <div className="max-w-full mx-auto px-2 sm:px-6 lg:px-8 w-[1000px]">
                        <div className="mt-8 overflow-hidden w-full">
                            <div className="relative grid grid-cols-1 md:grid-cols-2 p-6 mr-2 bg-gray-800 sm:rounded-xl rounded-xl w-full">
                                <BsFillSendFill className="absolute -right-9 -bottom-20 h-64 w-64 text-gray-700 -z-1" />
                                <div className="z-10">
                                
                                    <p className="text-normal text-xl sm:text-2xl font-medium text-gray-300 dark:text-gray-300 mt-2 mb-1 text-left">
                                        My Contact Information
                                    </p>
                                    <p className="text-sm sm:text-[16px] font-small text-gray-400 dark:text-gray-400 mb-4 text-left">
                                        Do not hesitate to reach me out!
                                    </p>
                                    <div className="flex items-center text-gray-400 dark:text-gray-400">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" className="w-8 h-8 text-gray-500">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                                        </svg>
                                        <div className="ml-4 text-md tracking-wide font-semibold w-full text-left">
                                            Zone 3, Punta Batsan, Cawayan, Masbate
                                        </div>
                                    </div>

                                    <div className="flex items-center mt-4 text-gray-400 dark:text-gray-400">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" className="w-8 h-8 text-gray-500">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                                        </svg>
                                        <div className="ml-4 text-left text-md tracking-wide font-semibold w-56">
                                            <a href="tel:+639318924911">+639318924911</a>
                                        </div>
                                    </div>

                                    <div className="flex items-center mt-4 text-gray-400 dark:text-gray-400">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" className="w-8 h-8 text-gray-500">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                                        </svg>
                                        <div className="ml-4 text-md tracking-wide font-semibold w-56 text-left">
                                            <a href="mailto:aaronbarlas.labini@gmail.com">aaronbarlas.labini@gmail.com</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="animate-fade-up animate-once animate-delay-[600ms] animate-ease-in-out flex justify-center items-center my-3 sm:my-2 md:my-0">
                                    <div className="animate-delay-200 animate-ease-in-out mt-4">
                                        <a to='about' href="mailto:aaronbarlas.labini@gmail.com"
                                            className="btn text-white pointer-events-auto border-2 border-red-500 px-6 py-3 my-2 flex items-center hover:bg-red-500 hover-border-red-500 rounded z-1000 cursor-pointer w-[200px] tracking-widest" 
                                            > <SiMinutemailer className="h-6 w-6 mr-2 animate-jump animate-infinite animate-duration-[3000ms]"/> CONTACT ME
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

export default Contact;