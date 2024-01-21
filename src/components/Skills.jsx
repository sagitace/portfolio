import React from "react";

const Skills = () => {
    return (
        <div className="bg-gray-800 h-[220px] mb-32">
            <div className="grid grid-cols-7">
                <div className="col-span-1">
                    <img src={process.env.PUBLIC_URL + '/assets/html.png'} alt="html icon" className="h-[90%] w-[50%]"/>
                </div>
            </div>
        </div>
    )
};

export default Skills;