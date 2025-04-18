import React from "react";
import { FaReact, FaHtml5, FaCss3Alt, FaSass } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiCypress,
  SiJavascript,
} from "react-icons/si";

const stack = [
  { name: "React", icon: <FaReact size={30} /> },
  { name: "JavaScript", icon: <SiJavascript size={30} /> },
  { name: "Next JS", icon: <SiNextdotjs size={30} /> },
  { name: "Tailwind", icon: <SiTailwindcss size={30} /> },
  { name: "HTML", icon: <FaHtml5 size={30} /> },
  { name: "CSS", icon: <FaCss3Alt size={30} /> },
];

const TechStack = () => {
  return (
    <div className="grid grid-rows-3 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {stack.map((tech, index) => (
        <div
          key={index}
          className=" border border-gray-800 rounded-xl p-4 flex flex-col items-center justify-center hover:border-gray-600 transition"
        >
          <div className="mb-2">{tech.icon}</div>
          <span className="text-sm font-light">{tech.name}</span>
        </div>
      ))}
    </div>
  );
};

export default TechStack;
