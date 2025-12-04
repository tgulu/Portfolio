import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiJavascript,
  // SiPython,
  // SiMongodb,
  // SiExpress,
} from "react-icons/si";

const stack = [
  { name: "React", icon: <FaReact size={35} color="#61DBFB" /> },
  { name: "JavaScript", icon: <SiJavascript size={35} color="#F7DF1E" /> },
  { name: "Typescript", icon: <SiTypescript size={35} color="#3178C6" /> },
  { name: "Next", icon: <SiNextdotjs size={35} color="#000000" /> },
  { name: "Node.js", icon: <FaNodeJs size={35} color="#3C873A" /> },
  { name: "Tailwind", icon: <SiTailwindcss size={35} color="#38BDF8" /> },

  // { name: "Express", icon: <SiExpress size={35} color="#000000" /> },
  // { name: "MongoDB", icon: <SiMongodb size={35} color="#47A248" /> },
  // { name: "HTML", icon: <FaHtml5 size={35} color="#E34F26" /> },
  // { name: "CSS", icon: <FaCss3Alt size={35} color="#1572B6" /> },
];

const TechStack = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 2xl:grid-cols-3 gap-x-6 gap-y-6  md:gap-x-2 md:gap-y-20 justify-items-center">
      {stack.map((tech, index) => (
        <div
          key={index}
          className="group aspect-square w-32 md:w-28 2xl:w-36 border border-black rounded-lg flex flex-col items-center justify-center backdrop-blur-md transition duration-300 shadow-md"
        >
          <div className="mb-4 p-3 border border-black rounded-full transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover:shadow-lg">
            {tech.icon}
          </div>
          <span className="text-lg md:text-2xl text-black font-light">
            {tech.name}
          </span>
        </div>
      ))}
    </div>
  );
};

export default TechStack;
