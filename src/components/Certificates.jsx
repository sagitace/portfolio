import React from "react";
import Slide from "react-reveal/Slide";

const Projects = () => {
  return (
    <div className="mx-auto">
      <Slide up>
        <header className="flex flex-col items-center text-center">
          <h1 className="font-bold text-4xl text-transform: uppercase after:mx-auto after:mb-0 after:block after:mt-5 after:rounded-full after:h-1 after:w-24 after:-translate-y-1 after:bg-red-600 text-[#edf2f4]">
            Certificates
          </h1>
        </header>
      </Slide>
      <div class="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
        <div class="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
          <Slide up>
            <div>
              <div class="bg-gray-800 flex flex-col justify-between leading-normal rounded-lg drop-shadow-xl shadow-white">
                <img
                  src={process.env.PUBLIC_URL + "/assets/cert4.jpg"}
                  class="w-full mb-3 rounded-t-lg h-60"
                  alt="Certificate"
                />
                <div class="p-4 pt-2">
                  <div class="mb-8">
                    <a
                      href={process.env.PUBLIC_URL + "/assets/cert4.jpg"}
                      target="_blank"
                      rel="noopener noreferrer"
                      class="text-[#edf2f4] font-bold text-lg mb-2 inline-block"
                    >
                      A Patent Searching and Drafting Training
                    </a>
                    <p class="text-[#d5d7d8] text-sm">
                      A 3-day training that aims to capacitate Bicol University
                      Student on Patent Searching and Drafting. Also aims to
                      protect students' intellectual property though IP
                      assignments and applications.
                    </p>
                  </div>
                  <div class="flex items-center">
                    <img
                      class="w-10 h-10 rounded-full mr-4"
                      src={process.env.PUBLIC_URL + "/assets/BU-logo.png"}
                      alt="DICT Logo"
                    />

                    <div class="text-sm ">
                      <p class="text-[#edf2f4] font-semibold leading-none ">
                        Bicol University
                      </p>
                      <p class="text-[#edf2f4]">November 28-30, 2023</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slide>
          <Slide up>
            <div>
              <div class="bg-gray-800 flex flex-col justify-between leading-normal rounded-lg drop-shadow-xl shadow-white">
                <img
                  src={process.env.PUBLIC_URL + "/assets/cert1.png"}
                  class="w-full mb-3 rounded-t-lg h-60"
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
                      A 2-hour workshop on UX Design of the DICT Region V -
                      Camarines Sur through the ILCDB as part of the Tech4ED DTC
                      Initiative - TechTalks, via Zoom Platform and FB Live.
                    </p>
                  </div>
                  <div class="flex items-center">
                    <img
                      class="w-10 h-10 rounded-full mr-4"
                      src={process.env.PUBLIC_URL + "/assets/dict.png"}
                      alt="DICT Logo"
                    />

                    <div class="text-sm ">
                      <p class="text-[#edf2f4] font-semibold leading-none ">
                        DICT
                      </p>
                      <p class="text-[#edf2f4]">March 14, 2024</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slide>
          <Slide up>
            <div>
              <div class=" bg-gray-800 flex flex-col justify-between leading-normal rounded-lg drop-shadow-xl shadow-white">
                <img
                  src={process.env.PUBLIC_URL + "/assets/cert2.png"}
                  class="w-full mb-3 rounded-t-lg h-60"
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
                      Figma 101 Part 2 - Introductory Workshop on UX Design
                    </a>
                    <p class="text-[#d5d7d8] text-sm">
                      A 2-hour workshop on UX Design of the DICT Region V -
                      Camarines Sur through the ILCDB as part of the Tech4ED DTC
                      Initiative - TechTalks, via Zoom Platform and FB Live.
                    </p>
                  </div>
                  <div class="flex items-center">
                    <img
                      class="w-10 h-10 rounded-full mr-4"
                      src={process.env.PUBLIC_URL + "/assets/dict.png"}
                      alt="DICT Logo"
                    />

                    <div class="text-sm ">
                      <p class="text-[#edf2f4] font-semibold leading-none ">
                        DICT
                      </p>
                      <p class="text-[#edf2f4]">March 21, 2024</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slide>

          <Slide up>
            <div>
              <div class=" bg-gray-800 flex flex-col justify-between leading-normal rounded-lg drop-shadow-xl shadow-white">
                <img
                  src={process.env.PUBLIC_URL + "/assets/cert3.png"}
                  class="w-full mb-3 rounded-t-lg h-60"
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
                      Canva Edition - Mastering Digital Commerce
                    </a>
                    <p class="text-[#d5d7d8] text-sm">
                      A webinar for unleashing the power to sell products online
                      with creative finesse of the DICT Region V - Albay through
                      the ILCDB as part of the Tech4ED DTC Initiative -
                      TechTalks, via Zoom Platform and FB Live.
                    </p>
                  </div>
                  <div class="flex items-center">
                    <img
                      class="w-10 h-10 rounded-full mr-4"
                      src={process.env.PUBLIC_URL + "/assets/dict.png"}
                      alt="DICT Logo"
                    />

                    <div class="text-sm ">
                      <p class="text-[#edf2f4] font-semibold leading-none ">
                        DICT
                      </p>
                      <p class="text-[#edf2f4]">March 25, 2024</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slide>
          <Slide up>
            <div>
              <div class=" bg-gray-800 flex flex-col justify-between leading-normal rounded-lg drop-shadow-xl shadow-white">
                <img
                  src={process.env.PUBLIC_URL + "/assets/cert5.png"}
                  class="w-full mb-3 rounded-t-lg h-60"
                  alt="Certificate"
                />
                <div class="p-4 pt-2">
                  <div class="mb-8">
                    <a
                      href={
                        process.env.PUBLIC_URL + "/assets/certificates/gict.pdf"
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      class="text-[#edf2f4] font-bold text-lg mb-2 inline-block"
                    >
                      Participant in International Girls in ICT Day 2024
                    </a>
                    <p class="text-[#d5d7d8] text-sm">
                      Participated in this event organized by the International
                      Telecommunication Union (ITU) and DICT. Gained more
                      knowledge about tech industries and what opportunities are
                      ahead of us.
                    </p>
                  </div>
                  <div class="flex items-center">
                    <img
                      class="w-10 h-10 rounded-full mr-4"
                      src={process.env.PUBLIC_URL + "/assets/dict.png"}
                      alt="DICT Logo"
                    />

                    <div class="text-sm ">
                      <p class="text-[#edf2f4] font-semibold leading-none ">
                        DICT
                      </p>
                      <p class="text-[#edf2f4]">April 25, 2024</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slide>
        </div>
      </div>
    </div>
  );
};

export default Projects;
