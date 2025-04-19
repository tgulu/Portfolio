import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { HiOutlineLocationMarker } from "react-icons/hi";
import Profile from "../assets/profile.png";
import TechStack from "./TechStack";
import Nav from "./Nav";
import Blur from "./Blur";

const Home = () => {
  return (
    <div className="w-full min-h-screen h-screen flex justify-center  ">
      <Blur />

      {/* Boxed wrapper */}
      <div className="max-w-6xl mx-auto space-y-12 py-8 px-6">
        <Nav />

        {/* Hero Section */}
        <section className="flex flex-col md:flex-row items-start gap-10 md:gap-18">
          {/* Profile Pic */}
          <img
            src={Profile}
            alt="Thabo Gulu profile"
            className="w-24 h-24 md:w-[120px] md:h-[140px] ml-0 md:ml-4 rounded-full border-2 border-gray-700 object-cover"
          />

          {/* Text Section */}
          <div className="flex flex-col items-start gap-6">
            {/* Heading with Badge */}
            <div className="relative text-[28px] font-bold tracking-[0.03em] leading-snug text-black">
              <h1>
                <span className="text-black">Hey, I'm Thabo.</span> I'm a
                Frontend <br />
                Software Developer.
              </h1>
              {/* "Open to work" badge */}
              <div className="bg-green-900 absolute max-md:relative right-0 bottom-1.5 whitespace-nowrap text-green-300 hover:bg-green-500/25 text-sm px-3 py-1 rounded-full inline-block hover:text-green-500">
                <span className="p-1  mr-1.5 inline-block bg-green-400 rounded-full"></span>
                Open to work
              </div>
            </div>

            {/* Social / Location */}
            <div className="w-full flex items-center justify-between max-md:flex-col max-md:gap-3">
              {/* Location */}
              <div className="flex items-center gap-2 text-sm text-gray-200">
                <HiOutlineLocationMarker className="text-lg" />
                United Kingdom
              </div>

              {/* Social Links */}
              <div className="flex items-center justify-end max-md:justify-center gap-5 text-base text-gray-900">
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="flex gap-1 items-center hover:text-black"
                  href="https://www.linkedin.com/in/thabo-gulu/"
                >
                  <FaLinkedin className="text-xl" /> LinkedIn
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="flex gap-1 items-center hover:text-black"
                  href="https://github.com/tgulu"
                >
                  <FaGithub className="text-xl" /> GitHub
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section id="techstack" className="px-2">
          <h3 className="text-lg font-bold mb-2">TECH STACK</h3>
          <TechStack />
        </section>
      </div>
    </div>
  );
};

export default Home;
