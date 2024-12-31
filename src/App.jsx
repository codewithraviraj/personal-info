import React from "react";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import MySkills from "./components/Skills";
import Intro from "./components/Introduction";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Contact from "./components/ContactUs";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Home />
          <div id="introduction">
            <Intro />
          </div>
          <div id="about-me">
            <AboutMe />
          </div>
          <div id="my-skills">
            <MySkills />
          </div>
          <div id="contact-us">
            <Contact />
          </div>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
