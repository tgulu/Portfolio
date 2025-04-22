import React from "react";
import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiJavascript,
  SiMongodb,
  SiExpress,
} from "react-icons/si";

const stack = [
  { name: "React", icon: <FaReact size={25} color="#61DBFB" /> },
  { name: "JavaScript", icon: <SiJavascript size={25} color="#F7DF1E" /> },
  { name: "Node.js", icon: <FaNodeJs size={25} color="#3C873A" /> },
  { name: "Tailwind", icon: <SiTailwindcss size={25} color="#38BDF8" /> },
  { name: "Express", icon: <SiExpress size={25} color="#000000" /> },
  { name: "MongoDB", icon: <SiMongodb size={25} color="#47A248" /> },
  { name: "HTML", icon: <FaHtml5 size={25} color="#E34F26" /> },
  { name: "CSS", icon: <FaCss3Alt size={25} color="#1572B6" /> },
];

const TechStack = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 2xl:grid-cols-3 gap-x-6 gap-y-6 md:gap-x-10 md:gap-y-10 2xl:gap-x-24 2xl:gap-y-20 justify-items-center">
      {stack.map((tech, index) => (
        <div
          key={index}
          className="group aspect-square w-32 md:w-28 2xl:w-36 border border-black rounded-lg flex flex-col items-center justify-center backdrop-blur-md transition duration-300 shadow-md"
        >
          <div className="mb-3 p-3 border border-black rounded-full transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover:shadow-lg">
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
