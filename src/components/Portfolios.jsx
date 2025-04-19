import React from "react";
import { FaReact, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiAxios } from "react-icons/si";
import projectImage from "../assets/portfolio/deadwax.jpg";
import Blur from "./Blur";

const tech = [
  { name: "React", icon: <FaReact className="text-blue-400" /> },
  { name: "Javascript", icon: <SiJavascript className="text-yellow-500" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-400" /> },
  { name: "Axios", icon: <SiAxios className="text-sky-600" /> },
];

const Portfolio = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-4">
      {/* MAIN CONTENT BOX */}
      <div className="bg-white/70 backdrop-blur-md rounded-2xl p-8 w-full max-w-3xl shadow-lg z-10">
        {/* Project Screenshot */}
        <img
          src={projectImage}
          alt="Portfolio Screenshot"
          className="rounded-lg border shadow-md border-neutral-800 w-full"
        />

        {/* Title & Description */}
        <div className="mt-4">
          <h3 className="text-lg font-bold tracking-wide">
            PHOTOGRAPHY PORTFOLIO
          </h3>
          <p className="text-sm text-black mt-2">
            A showcase of creative photography work including portraits, events,
            and urban scenes. Built using React, Tailwind, and Axios.
          </p>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-5">
          {tech.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-2 text-sm px-3 py-1 bg-white border border-black/20 rounded-full"
            >
              {item.icon}
              <span>{item.name}</span>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center sm:justify-between gap-4 mt-6">
          <a
            href="#"
            className="flex items-center justify-center gap-2 px-4 py-2 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition"
          >
            <FaExternalLinkAlt />
            Live Demo
          </a>
          <a
            href="#"
            className="flex items-center justify-center gap-2 px-4 py-2 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition"
          >
            <FaGithub />
            Source Code
          </a>
        </div>
      </div>

      {/* BACKGROUND BLUR */}
      <Blur />
    </div>
  );
};

export default Portfolio;
