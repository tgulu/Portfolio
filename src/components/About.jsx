import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen mx-auto bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-md p-4 mx-auto flex flex-col py-6 justify-center w-full h-full">
        <div className="">
          <p className="pt-20 font-float mt-0 mb-4 text-4xl ">

            <span className="border-b-2 white">About </span>
          </p>
        </div>
        <p className=" text-start mx-auto px-4.5 mt-10">
          I am an innovative and highly skilled junior software engineer with a
          passion for front-end development using React. I have a strong
          background in object-oriented programming, test-driven development,
          and agile project management methodologies. My technical proficiency
          includes Javascript, Java, Python, C, and Kotlin, as well as HTML,
          CSS, Bootstrap, Tailwind, and GIT.
        </p>

        <br />
        <p className=" text-start mx-auto px-4.5 mt-10">
          My analytical and critical thinking skills enable me to quickly
          identify and solve complex problems in code, while my excellent
          communication skills allow me to effectively collaborate with
          cross-functional teams and stakeholders. I have a proven track record
          of leading and working collaboratively with teams to deliver
          high-quality projects on time and within budget.
        </p>
      </div>
    </div>
  );
};

export default About;
