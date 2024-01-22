import React from "react";

const Projects = () => {
    return (
        <div className="mx-auto">
           <header className='flex flex-col items-center text-center'>
                <h1 className='font-bold text-4xl mb-[50px] text-transform: uppercase after:mx-auto after:mb-0 after:block after:mt-5 after:rounded-full after:h-1 after:w-24 after:-translate-y-1 after:bg-red-600 text-[#edf2f4]'>Projects
                </h1>
           </header>
           <div className="grid grid-cols-0 md:grid-cols-1 lg:grid-cols-2 gap-x-10 md:gap-y-4 w-full mb-24">
                <div class="overflow-hidden shadow-lg rounded-lg h-90 w-72 mb-6 sm:w-80 md:w-[500px] cursor-pointer m-auto drop-shadow-xl shadow-stone-500">
                    <a href="#as" class="w-full block h-full">
                        <img alt="Blog" src="https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80" class="max-h-40 w-full object-cover"/>
                        <div class="bg-white w-full p-4">
                            <p class="text-indigo-500 text-2xl font-medium">
                                Portfolio Website Version 1.0
                            </p>
                            <p class="text-gray-800 text-sm font-medium mb-2">
                                A comprehensive guide about online education.
                            </p>
                            <p class="text-gray-600 font-light text-md">
                                It is difficult to believe that we have become so used to having instant access to information at...
                                <a class="inline-flex text-indigo-500" href="#read">Read More</a>
                            </p>
                            <div class="flex flex-wrap justify-starts items-center py-3 border-b-2 text-xs text-white font-medium">
                                <span class="m-1 px-2 py-1 rounded bg-indigo-500">
                                    #online
                                </span>
                                <span class="m-1 px-2 py-1 rounded bg-indigo-500">
                                    #internet
                                </span>
                                <span class="m-1 px-2 py-1 rounded bg-indigo-500">
                                    #education
                                </span>
                            </div>
                            <div class="flex items-center mt-2">
                                <img class='w-10 h-10 object-cover rounded-full' alt='User avatar' src='https://images.unsplash.com/photo-1477118476589-bff2c5c4cfbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=200' />
                    
                                <div class="pl-3">
                                    <div class="font-medium">
                                        Jean Marc
                                    </div>
                                    <div class="text-gray-600 text-sm">
                                        CTO of Supercars
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>

                <div class="overflow-hidden shadow-lg rounded-lg h-90 w-72 mb-6 sm:w-80 md:w-[500px]  cursor-pointer m-auto drop-shadow-xl shadow-stone-500">
                    <a href="#as" class="w-full block h-full">
                        <img alt="Blog" src={process.env.PUBLIC_URL + '/assets/portfolioV2.png'} class="max-h-40 w-full object-cover"/>
                        <div class="bg-white w-full p-4">
                            <p class="text-indigo-500 text-3xl font-medium">
                                Portfolio Website Version 2.0
                            </p>
                            <p class="text-gray-800 text-sm font-medium mb-2">
                                A comprehensive guide about online education.
                            </p>
                            <p class="text-gray-600 font-light text-md">
                                It is difficult to believe that we have become so used to having instant access to information at...
                                <a class="inline-flex text-indigo-500" href="#read">Read More</a>
                            </p>
                            <div class="flex flex-wrap justify-starts items-center py-3 border-b-2 text-xs text-white font-medium">
                                <span class="m-1 px-2 py-1 rounded bg-indigo-500">
                                    #online
                                </span>
                                <span class="m-1 px-2 py-1 rounded bg-indigo-500">
                                    #internet
                                </span>
                                <span class="m-1 px-2 py-1 rounded bg-indigo-500">
                                    #education
                                </span>
                            </div>
                            <div class="flex items-center mt-2">
                                <img class='w-10 h-10 object-cover rounded-full' alt='User avatar' src='https://images.unsplash.com/photo-1477118476589-bff2c5c4cfbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=200' />
                    
                                <div class="pl-3">
                                    <div class="font-medium">
                                        Jean Marc
                                    </div>
                                    <div class="text-gray-600 text-sm">
                                        CTO of Supercars
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>

                <div class="overflow-hidden shadow-lg rounded-lg h-90 w-72 mb-6 sm:w-80 md:w-[500px] cursor-pointer m-auto drop-shadow-xl shadow-stone-500">
                    <a href="#as" class="w-full block h-full">
                        <img alt="Blog" src="https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80" class="max-h-40 w-full object-cover"/>
                        <div class="bg-white w-full p-4">
                            <p class="text-indigo-500 text-2xl font-medium">
                                Portfolio Website Version 1.0
                            </p>
                            <p class="text-gray-800 text-sm font-medium mb-2">
                                A comprehensive guide about online education.
                            </p>
                            <p class="text-gray-600 font-light text-md">
                                It is difficult to believe that we have become so used to having instant access to information at...
                                <a class="inline-flex text-indigo-500" href="#read">Read More</a>
                            </p>
                            <div class="flex flex-wrap justify-starts items-center py-3 border-b-2 text-xs text-white font-medium">
                                <span class="m-1 px-2 py-1 rounded bg-indigo-500">
                                    #online
                                </span>
                                <span class="m-1 px-2 py-1 rounded bg-indigo-500">
                                    #internet
                                </span>
                                <span class="m-1 px-2 py-1 rounded bg-indigo-500">
                                    #education
                                </span>
                            </div>
                            <div class="flex items-center mt-2">
                                <img class='w-10 h-10 object-cover rounded-full' alt='User avatar' src='https://images.unsplash.com/photo-1477118476589-bff2c5c4cfbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=200' />
                    
                                <div class="pl-3">
                                    <div class="font-medium">
                                        Jean Marc
                                    </div>
                                    <div class="text-gray-600 text-sm">
                                        CTO of Supercars
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>

                <div class="overflow-hidden shadow-lg rounded-lg h-90 w-72 mb-6 sm:w-80 md:w-[500px]  cursor-pointer m-auto drop-shadow-xl shadow-stone-500">
                    <a href="#as" class="w-full block h-full">
                        <img alt="Blog" src="https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80" class="max-h-40 w-full object-cover"/>
                        <div class="bg-white w-full p-4">
                            <p class="text-indigo-500 text-2xl font-medium">
                                Portfolio Website Version 1.0
                            </p>
                            <p class="text-gray-800 text-sm font-medium mb-2">
                                A comprehensive guide about online education.
                            </p>
                            <p class="text-gray-600 font-light text-md">
                                It is difficult to believe that we have become so used to having instant access to information at...
                                <a class="inline-flex text-indigo-500" href="#read">Read More</a>
                            </p>
                            <div class="flex flex-wrap justify-starts items-center py-3 border-b-2 text-xs text-white font-medium">
                                <span class="m-1 px-2 py-1 rounded bg-indigo-500">
                                    #online
                                </span>
                                <span class="m-1 px-2 py-1 rounded bg-indigo-500">
                                    #internet
                                </span>
                                <span class="m-1 px-2 py-1 rounded bg-indigo-500">
                                    #education
                                </span>
                            </div>
                            <div class="flex items-center mt-2">
                                <img class='w-10 h-10 object-cover rounded-full' alt='User avatar' src='https://images.unsplash.com/photo-1477118476589-bff2c5c4cfbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=200' />
                    
                                <div class="pl-3">
                                    <div class="font-medium">
                                        Jean Marc
                                    </div>
                                    <div class="text-gray-600 text-sm">
                                        CTO of Supercars
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>


           </div>
        </div>
    )
};

export default Projects;