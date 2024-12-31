import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white fixed top-0 left-0 w-full z-10 shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold">My Portfolio</h1>
        <ul className="flex space-x-6">
          <li>
            <a href="#home" className="hover:text-blue-400">
              Home
            </a>
          </li>
          <li>
            <a href="#introduction" className="hover:text-blue-400">
              Introduction
            </a>
          </li>
          <li>
            <a href="#about-me" className="hover:text-blue-400">
              About Me
            </a>
          </li>
          <li>
            <a href="#my-skills" className="hover:text-blue-400">
              Skills
            </a>
          </li>
          {/* <li>
            <a href="contacy-us" className="hover:text-blue-400">
              Contact Me
            </a>
          </li> */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
