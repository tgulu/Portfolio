import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { HiOutlineLocationMarker } from "react-icons/hi";
import Profile from "../assets/profile.png";
import TechStack from "./TechStack";
import Nav from "./Nav";

import Blur from "./Blur";

const Home = () => {
  return (
    <div className="min-h-screen  text-black px-4 md:px-56 ">
      <Blur />
      {/* Navbar */}

      <Nav />

      {/* Hero */}
      <section className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
        <img
          src={Profile}
          alt="profile"
          className="relative md:w-[140px] md:h-[140px] w-15 h-20 rounded-full left-8  border-2 border-gray-700"
        />

        <div className="relative right-4 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold">
            Hey, I'm Thabo. I'm a Frontend Software Developer.
            <span className=" ml-4 mb-3  inline-block text-sm bg-green-900 text-green-300 rounded-full px-2 py-1 font-medium">
              ● Open to work
            </span>
          </h2>

          <div className="flex flex-col md:flex-row md:items-center gap-3 text-sm text-black">
            <div className="flex items-center gap-3">
              <HiOutlineLocationMarker className="text-xl" />
              <span>United Kingdom</span>

              <div className="flex gap-4 text-black">
                <a href="#" className="flex items-center gap-1 hover:underline">
                  <FaLinkedin /> LinkedIn
                </a>
                <a href="#" className="flex items-center gap-1 hover:underline">
                  <FaGithub /> GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="techstack" className="relative">
        <h3 className="text-lg font-bold mx-10 my-6 right-9 ">TECH STACK</h3>
        <TechStack />
      </section>
    </div>
  );
};

export default Home;
