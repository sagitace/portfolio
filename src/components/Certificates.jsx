import React from "react";

const Projects = () => {
  return (
    <div className="mx-auto">
      <header className="flex flex-col items-center text-center">
        <h1 className="font-bold text-4xl text-transform: uppercase after:mx-auto after:mb-0 after:block after:mt-5 after:rounded-full after:h-1 after:w-24 after:-translate-y-1 after:bg-red-600 text-[#edf2f4]">
          Certificates
        </h1>
      </header>

      <div class="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
        <div class="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
          <div class="bg-gray-800 flex flex-col justify-between leading-normal rounded-lg drop-shadow-xl shadow-white">
            <img
              src={process.env.PUBLIC_URL + "/assets/cert1.png"}
              class="w-full mb-3 rounded-t-lg"
              alt="Certificate"
            />
            <div class="p-4 pt-2">
              <div class="mb-8">
                <a
                  href={
                    process.env.PUBLIC_URL +
                    "/assets/certificates/figma101-part1.pdf"
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-[#edf2f4] font-bold text-lg mb-2 inline-block"
                >
                  Figma 101 Part 1 - Introductory Workshop on UX Design
                </a>
                <p class="text-[#d5d7d8] text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus quia, nulla! Maiores et perferendis eaque,
                  exercitationem praesentium nihil.
                </p>
              </div>
              <div class="flex items-center">
                <img
                  class="w-10 h-10 rounded-full mr-4"
                  src={process.env.PUBLIC_URL + "/assets/dict.png"}
                  alt="DICT Logo"
                />

                <div class="text-sm ">
                  <p class="text-[#edf2f4] font-semibold leading-none hover:text-indigo-600">
                    DICT
                  </p>
                  <p class="text-[#edf2f4]">March 14, 2024</p>
                </div>
              </div>
            </div>
          </div>

          <div class=" bg-gray-800 flex flex-col justify-between leading-normal rounded-lg">
            <img
              src={process.env.PUBLIC_URL + "/assets/cert2.png"}
              class="w-full mb-3 rounded-t-lg"
              alt="Certificate"
            />
            <div class="p-4 pt-2">
              <div class="mb-8">
                <a
                  href={
                    process.env.PUBLIC_URL +
                    "/assets/certificates/figma101-part2.pdf"
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-[#edf2f4] font-bold text-lg mb-2 inline-block"
                >
                  Figma 101 Part 1 - Introductory Workshop on UX Design
                </a>
                <p class="text-[#d5d7d8] text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus quia, nulla! Maiores et perferendis eaque,
                  exercitationem praesentium nihil.
                </p>
              </div>
              <div class="flex items-center">
                <img
                  class="w-10 h-10 rounded-full mr-4"
                  src={process.env.PUBLIC_URL + "/assets/dict.png"}
                  alt="DICT Logo"
                />

                <div class="text-sm ">
                  <p class="text-[#edf2f4] font-semibold leading-none hover:text-indigo-600">
                    DICT
                  </p>
                  <p class="text-[#edf2f4]">March 21, 2024</p>
                </div>
              </div>
            </div>
          </div>

          <div class=" bg-gray-800 flex flex-col justify-between leading-normal rounded-lg ">
            <img
              src={process.env.PUBLIC_URL + "/assets/cert3.png"}
              class="w-full mb-3 rounded-t-lg"
              alt="Certificate"
            />
            <div class="p-4 pt-2">
              <div class="mb-8">
                <a
                  href={
                    process.env.PUBLIC_URL +
                    "/assets/certificates/mastering-digital-commerce.pdf"
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-[#edf2f4] font-bold text-lg mb-2 inline-block"
                >
                  Figma 101 Part 1 - Introductory Workshop on UX Design
                </a>
                <p class="text-[#d5d7d8] text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus quia, nulla! Maiores et perferendis eaque,
                  exercitationem praesentium nihil.
                </p>
              </div>
              <div class="flex items-center">
                <img
                  class="w-10 h-10 rounded-full mr-4"
                  src={process.env.PUBLIC_URL + "/assets/dict.png"}
                  alt="DICT Logo"
                />

                <div class="text-sm ">
                  <p class="text-[#edf2f4] font-semibold leading-none hover:text-indigo-600">
                    DICT
                  </p>
                  <p class="text-[#edf2f4]">March 25, 2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
