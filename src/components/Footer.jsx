import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 p-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} My Portfolio. All rights reserved.
        </p>
        <p className="text-sm">
          Made with <span className="text-red-500">♥</span> using React and Tailwind CSS.
        </p>
      </div>
    </footer>
  );
};

export default Footer;