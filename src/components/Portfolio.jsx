import React from "react";
import quiz from "../assets/portfolio/quiz.jpg";
import musicReview from "../assets/portfolio/musicReview.jpg";
import weather from "../assets/portfolio/weather.jpg";
import messageApp from "../assets/portfolio/messageApp.jpg";
import musicAPI from "../assets/portfolio/musicAPI.jpg";
import drone from "../assets/portfolio/drone.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      child: (
        <>
          <span className="text-sm">Music Review Website</span>
        </>
      ),
      src: musicReview,
      href: "https://github.com/tgulu/Albums",
      sourceCode: "https://github.com/tgulu/Albums",
      style: "shadow-cyan-400",
    },
    {
      id: 2,
      child: (
        <>
          <span className="text-sm">Computer Science Trivia</span>
        </>
      ),
      src: quiz,
      href: "https://github.com/tgulu/Computer-Science-Trivia-Quiz" ,
      sourceCode: "https://computerscience-trivia.netlify.app/",
      style: "shadow-white",
    },
    {
      id: 3,
      child: (
        <>
          <span className="text-sm">Weather</span>
        </>
      ),
      src: weather,
      href: "https://github.com/tgulu/Weather",
      sourceCode: "https://tgulu.github.io/Weather/",
      style: "shadow-pink-600",
    },
    {
      id: 4,
      child: (
        <>
          <span className="text-sm">Android Messenger</span>
        </>
      ),
      src: messageApp,
      href: "https://github.com/tgulu/Messenger-Chat-App",
      sourceCode: "https://github.com/tgulu/Messenger-Chat-App",
      style: "shadow-cyan-400",
    },
    {
      id: 5,
      child: (
        <>
          <span className="text-sm">Music Display </span>
        </>
      ),
      src: musicAPI,
      href: "https://github.com/tgulu/AppleMusic",
      sourceCode: "https://github.com/tgulu/AppleMusic",
      style: "shadow-white",
    },
    {
      id: 6,
      child: (
        <>
          <span className="text-sm">Drone</span>
        </>
      ),
      src: drone,
      href: "https://github.com/tgulu/Drone",
      sourceCode: "https://github.com/tgulu/Drone",
      style: "shadow-pink-600",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800  w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="">
          <p className="pt-20 font-float mt-0 mb-4 text-4xl ">
            <span className="border-b-2 white">Portfolio </span>
          </p>
        </div>

        <div
          name="card strcuture"
          className="pt-4 grid sm:grid-cols-2 md:grid-cols-3 gap-6 px-12 sm:px-0"
        >
          {portfolios.map(({ id, child, src, href, style, sourceCode }) => (
            <div key={id} className={`shadow-md  rounded-lg ${style}`}>
              <a href={sourceCode} target="_blank" rel="noreferrer">
                <img
                  src={src}
                  alt=""
                  className="rounded-md duration-200 hover:scale-125"
                />
              </a>
              <div className="flex items-center justify-center">
                <button className="w-1/8 px-2 justify-center py-1/8 m-4 duration-200 hover:scale-110">
                  <a href={href} target="_blank" rel="noreferrer">
                    Code:  {child}
                  </a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
