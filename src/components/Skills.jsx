import React from "react";

const Skills = () => {
  return (
    <div className="h-screen flex items-center bg-gray-600">
      <div className="container mx-auto text-center p-4">
        <h2 className="text-3xl font-bold mb-4">My Skills</h2>
        <ul className="list-disc list-inside text-lg">
          <li>React.js</li>
          <li>Node.js</li>
          <li>Tailwind CSS</li>
          <li>JavaScript</li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;
