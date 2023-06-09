import React from "react";
import android from "../assets/android.png";
import javascript from "../assets/javascript.png";
import react from "../assets/react.png";
import github from "../assets/github.png";
import html from "../assets/html.png";
import css from "../assets/css.png";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: react,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 6,
      src: android,
      title: "Android",
      style: "shadow-green-400",
    },
    {
      id: 7,
      src: github,
      title: "GitHub",
      style: "shadow-white",
    },
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full text-white md:h-screen"
    >
      <div className="max-w-screen-md p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-2">
          <p className="pt-20 font-float mt-0 mb-4 text-4xl ">
            {" "}
            <span className="border-b-2 white">Experience </span>
          </p>
        </div>

        <div
          name="card strcuture"
          className="pt-4 grid sm:grid-cols-2  md:grid-cols-3 gap-6 px-12 sm:px-0 justify-items-center"
        >
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md w-56  h-52 px-1 py-4 hover:scale-105 duration-500 rounded-lg ${style}`}
            >
              <img
                src={src}
                alt=""
                className="justify-center w-20 mx-auto my-5"
              />
              <div className="text-center">
                <p className="mt-8">{title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
