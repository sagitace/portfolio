import React from 'react';

const About = () => {
    return (
        <div id="about" className='h-[90vh]'>
            <h1 className='text-center text-[#edf2f4] font-bold text-4xl mt-3'>
                About Me
            </h1>
            <div className='max-w-[1000px] mx-auto px-8 flex-col justify-center grid grid-cols-2 gap-4'>
                
                <div className="colspan-1">
                    Left
                </div>
                <div className="colspan-1 border border-white">
                    Right
                </div>
            </div>
        </div>
    );
}

export default About;