import React from "react";

import Hero from "../components/home/Hero.jsx";
import About from "../components/home/About.jsx";
import Skills from "../components/home/Skills.jsx";
import Projects from "../components/home/Projects.jsx";
import Vision from "../components/home/Vision.jsx";
import Timeline from "../components/home/Timeline.jsx";
import Contact from "../components/home/Contact.jsx";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Vision />
      <Timeline />
      <Contact />
    </>
  );
};

export default Home;