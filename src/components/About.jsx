import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen mx-auto bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className=" mx-auto p-4 max-w-screen-md flex flex-col py-6 justify-center w-full h-full">
        <div className="">
          <p className=" text-4xl font-jazz inline border-b-2 white">About</p>
        </div>
        <p className=" text-start mx-auto px-4.5 mt-10"> 
          Experienced and innovative junior software engineer skilled in object-oriented programming, test-driven development, and agile project management. Proficient in Javascript, Java, Python, C, and Kotlin, as well as HTML, CSS, Bootstrap, Tailwind, React, and GIT. Strong analytical and critical thinking abilities with excellent communication skills. Proven ability to lead and collaborate with teams to deliver high-quality projects.
          </p>
      </div>
    </div>
  );
};

export default About;
