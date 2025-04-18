import React from "react";
import { FaReact, FaHtml5, FaCss3Alt } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiCypress,
  SiJavascript,
} from "react-icons/si";

const stack = [
  { name: "React", icon: <FaReact size={30} color="#61DBFB" /> },
  { name: "JavaScript", icon: <SiJavascript size={30} color="#F7DF1E" /> },
  { name: "Next JS", icon: <SiNextdotjs size={30} color="#000000" /> },
  { name: "Tailwind", icon: <SiTailwindcss size={30} color="#38BDF8" /> },
  { name: "HTML", icon: <FaHtml5 size={30} color="#E34F26" /> },
  { name: "CSS", icon: <FaCss3Alt size={30} color="#1572B6" /> },
];

const TechStack = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-2 align-items-center justify-items-center ">
      {stack.map((tech, index) => (
        <div
          key={index}
          className="aspect-square w-32 sm:w-30 md:w-36 border border-black rounded-lg flex flex-col items-center justify-center  backdrop-blur-md transition duration-300"
        >
          <div className="mb-3 p-3 border border-black hover:bg-white/20 rounded-full">
            {tech.icon}
          </div>
          <span className="text-sm text-black font-light">{tech.name}</span>
        </div>
      ))}
    </div>
  );
};

export default TechStack;
