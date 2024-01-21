import React from "react";
import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";

export default function App() {
  return (
    <div className="">
      <Nav />
      <Home />
      <div id="about" name="about">
        {" "}
        <About />{" "}
      </div>
      <div id="skills" name="skills">
        {" "}
        <Skills />{" "}
      </div>{" "}
    </div>
  );
}
