import React from "react";

const About = () => {
  return (
    <div className="h-full md:h-[90vh] mb-20 md:mb-0">
      <header className="flex flex-col items-center text-center">
        <h1 className="font-bold text-4xl mb-[50px] text-transform: uppercase after:mx-auto after:mb-0 after:block after:mt-5 after:rounded-full after:h-1 after:w-24 after:-translate-y-1 after:bg-red-600 text-[#edf2f4]">
          ABOUT ME
        </h1>
      </header>
      <div className="max-w-[1250px] mx-auto px-8 flex-col justify-center grid md:grid-cols-2 gap-4">
        <div className="colspan-1">
          <div class="container">
            <img
              src={process.env.PUBLIC_URL + "/assets/me.png"}
              alt="My profile"
              className="shape"
            />
          </div>
        </div>
        <div className="colspan-1 text-[#8d99ae]">
          <p className="mb-9 tracking-wider text-md text-[18px]">
            I am a programmer who specializes in web design and development. I
            have a passion for creating beautiful and functional websites that
            meet the needs and expectations of my clients. I enjoy spending time
            coding and learning new things about web development and frameworks,
            as this helps me improve my skills and knowledge.
          </p>
          <p className="tracking-wider text-md text-[18px]">
            I am looking for new challenges and opportunities to grow as a
            professional and to showcase my creativity. My goal is to become an
            expert in web development and to build visually appealing websites.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
