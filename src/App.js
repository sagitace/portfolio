import React from "react";
import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div>
      <Nav />
      <Home />
      <div id="about" name="about">
        {" "}
        <About />{" "}
      </div>{" "}
      <div id="skills" name="skills" className="mb-32">
        {" "}
        <Skills />{" "}
      </div>{" "}
      <div
        id="projects"
        name="projects"
        className="text-white mt-40 flex justify-between items-center mx-auto px-6 md:px-6 lg:px-6 w-full"
      >
        {" "}
        <Projects />{" "}
      </div>{" "}
      <div id="contact" name="contact" className="h-[70vh] mb-20 md:mb-0">
        <Contact />
      </div>{" "}
      <div>
        <Footer />
      </div>{" "}
    </div>
  );
}
