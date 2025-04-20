import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { portfolio } from "../assets/data/data";
import Blur from "./Blur";
import Slider from "react-slick";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Custom Arrow Components
function SampleNextArrow({ onClick }) {
  return (
    <div
      onClick={onClick}
      className="absolute top-[50%] right-[-30px] z-10 text-indigo-600 hover:text-white cursor-pointer"
    >
      <MdKeyboardArrowRight size={40} />
    </div>
  );
}

function SamplePrevArrow({ onClick }) {
  return (
    <div
      onClick={onClick}
      className="absolute top-[50%] left-[-30px] z-10 text-indigo-600 hover:text-white cursor-pointer"
    >
      <MdKeyboardArrowLeft size={40} />
    </div>
  );
}

const Portfolio = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div
      name="projects"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 py-5"
    >
      <div className="w-full max-w-3xl">
        <Slider {...settings}>
          {portfolio.map((project) => (
            <div
              key={project.id}
              className="bg-white/70 backdrop-blur-md rounded-2xl p-8 w-full z-10"
            >
              {/* Image */}
              <img
                src={project.src}
                alt={project.title}
                className="rounded-lg border shadow-md border-neutral-800 w-full"
              />

              {/* Title & Description */}
              <div className="mt-4">
                <h3 className="text-lg font-bold tracking-wide">
                  {project.title}
                </h3>
                <p className="text-sm text-black mt-2">{project.descrption}</p>
              </div>

              {/* Tech Stack */}
              <div className="grid grid-cols-4 max-sm:grid-cols-3 max-[500px]:grid-cols-2 items-center gap-2 mt-5">
                {project.tech.map((item, index) => (
                  <div
                    key={index}
                    // className="flex items-center gap-2 text-sm px-3 py-1 bg-white border border-black/20 rounded-full"
                    className=" flex h-6 items-center justify-center gap-1.5 px-4 rounded-full
                    bg-white/60 text-black shadow-md"
                  >
                    {item.icon}
                    <span>{item.name}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row justify-center  sm:justify-between gap-4 mt-6">
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-2 bg-white/50 text-black font-semibold rounded-lg hover:bg-gray-800 transition shadow-md"
                >
                  <FaExternalLinkAlt />
                  Live Demo
                </a>
                <a
                  href={project.gitCode}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-2 bg-white/50 text-black font-semibold rounded-lg hover:bg-gray-800 transition shadow-md"
                >
                  <FaGithub />
                  Source Code
                </a>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Background Blur */}
      <Blur />
    </div>
  );
};

export default Portfolio;
