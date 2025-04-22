import React from "react";
import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  //   SiJest,
  SiTailwindcss,
  SiJavascript,
} from "react-icons/si";

const stack = [
  // Scripting
  { name: "JavaScript", icon: <SiJavascript size={25} color="#F7DF1E" /> },
  { name: "TypeScript", icon: <SiTypescript size={25} color="#3178C6" /> },
  // Core frontend
  { name: "React", icon: <FaReact size={25} color="#61DBFB" /> },
  { name: "Next JS", icon: <SiNextdotjs size={25} color="#000000" /> },

  // Styling
  { name: "HTML", icon: <FaHtml5 size={25} color="#E34F26" /> },
  { name: "CSS", icon: <FaCss3Alt size={25} color="#1572B6" /> },
  { name: "Tailwind", icon: <SiTailwindcss size={25} color="#38BDF8" /> },

  // Backend
  { name: "Node.js", icon: <FaNodeJs size={25} color="#3C873A" /> },

  // Testing
  //   { name: "Jest", icon: <SiJest size={25} color="#99425b" /> },
];

const TechStack = () => {
  return (
    <div className="grid grid-cols-2  md:grid-cols-4 2xl:grid-cols-3 gap-x-10 gap-y-2 xl:gap-x-24 xl:gap-y-20 justify-items-center ">
      {stack.map((tech, index) => (
        <div
          key={index}
          className="aspect-square w-32 md:w-28 2xl:w-36 border border-black rounded-lg flex flex-col items-center justify-center backdrop-blur-md transition duration-300 shadow-md"
        >
          <div className="mb-3 p-3 border border-black  rounded-full">
            {tech.icon}
          </div>
          <span className="text-sm xl:text-lg text-black font-light">
            {tech.name}
          </span>
        </div>
      ))}
    </div>
  );
};

export default TechStack;
