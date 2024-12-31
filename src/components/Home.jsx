import React from "react";

const Home = () => {
  const handleScroll = () => {
    document.getElementById("introduction").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-700">
    <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
      {/* Left Side: Photo */}
      <div className="w-full md:w-1/2 h-full">
        <img
          src="/assets/images/profile_photo.jpg"
          alt="Profile"
          className="w-full h-full  object-cover border-2 "
        />
      </div>
      {/* Right Side: Text and Button */}
      <div className="text-center md:text-left">
        <h1 className="text-4xl font-bold text-white">My Portfolio Studio</h1>
        <button
          onClick={handleScroll}
          className="mt-4 px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Explore Now
        </button>
      </div>
    </div>
  </div>
  );
};

export default Home;
