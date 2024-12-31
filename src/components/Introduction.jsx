import React from "react";

const Introduction = () => {
  return (
    <div className="h-screen flex items-center bg-gray-800">
      <div className="container mx-auto flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8 p-4">
        {/* Left Side: Text */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4">Introduction</h2>
          <p className="text-lg">
            Welcome to my portfolio! Here, you'll find details about my journey, skills, and experiences.
          </p>
        </div>
        {/* Right Side: Image */}
        <div>
          <img
            src="/assets/images/introduction_image.jpg"
            alt="Introduction"
            className="w-64 rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Introduction;
