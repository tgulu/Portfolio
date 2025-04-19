import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { HiOutlineLocationMarker } from "react-icons/hi";
import Profile from "../assets/profile.png";
import TechStack from "./TechStack";
import Nav from "./Nav";
import Blur from "./Blur";

const Home = () => {
  return (
    <div className="min-h-screen text-black">
      <Blur />

      {/* Boxed wrapper */}
      <div className="max-w-6xl mx-auto space-y-12 py-10 px-6">
        <div className="max-w-6xl space-y-12   px-4">
          {/* Navbar */}

          <Nav />

          {/* Hero */}
          <section className="p-2 flex flex-col md:flex-row items-center gap-10 md:gap-10">
            <img
              src={Profile}
              alt="profile"
              className="md:w-[140px] md:h-[140px] w-24 h-24 rounded-full border-2 border-gray-700"
            />

            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-3xl font-bold">
                Hey, I'm Thabo. I'm a Frontend Software Developer.
                <span className="ml-4 inline-block text-sm bg-green-900 text-green-300 rounded-full px-2 py-1 font-medium">
                  ● Open to work
                </span>
              </h2>

              <div className="flex flex-col md:flex-row md:items-center gap-3 mt-3 text-sm text-white">
                <div className="flex items-center gap-1">
                  <HiOutlineLocationMarker className="text-xl " />
                  <span>United Kingdom</span>
                </div>

                <div className="flex gap-4 ">
                  <a
                    href="#"
                    className="flex items-center gap-1 hover:underline"
                  >
                    <FaLinkedin /> LinkedIn
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-1 hover:underline"
                  >
                    <FaGithub /> GitHub
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Tech Stack */}
          <section id="techstack" className=" px-2 ">
            <h3 className="text-lg font-bold mb-2">TECH STACK</h3>
            <TechStack />
          </section>
        </div>
      </div>
    </div>
  );
};

export default Home;
