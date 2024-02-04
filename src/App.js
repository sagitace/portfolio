import React, { useState, useEffect } from "react";
import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import RingLoader from "react-spinners/RingLoader";
import { FaArrowUp } from "react-icons/fa";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisibility);

  return (
    <div className="App">
      {loading ? (
        <div className="loadingEffect">
          <RingLoader
            loading={loading}
            color={"#ffffff"}
            size={120}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
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
          <button
            className={`fixed bottom-0 right-0 p-4 m-4 text-white bg-red-500 rounded-full transition-opacity duration-500 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
            onClick={scrollToTop}
          >
            <FaArrowUp />
          </button>
        </div>
      )}
    </div>
  );
}
