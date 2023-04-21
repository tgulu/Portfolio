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
          <span className="text-sm">Music Review</span>
        </>
      ),
      src: musicReview,
      href: "https://github.com/",
      style: "shadow-white",
    },
    {
      id: 2,
      child: (
        <>
          <span className="text-sm">Computer-Science-Trivia</span>
        </>
      ),
      src: quiz
      ,
      href: "https://github.com/tgulu/Computer-Science-Trivia-Quiz",
      style: "shadow-cyan-400",
    },
    {
      id: 3,
      child: (
        <>
          <span className="text-sm">Weather</span>
        </>
      ),
      src: weather,
      href: "https://github.com/",
      style: "shadow-purple-600",
    },
    {
      id: 4,
      child: (
        <>
          <span className="text-sm">Chat App</span>
        </>
      ),
      src: messageApp,
      href: "https://github.com/tgulu/Messenger-Chat-App",
      style: "shadow-cyan-400",
    },
    {
      id: 5,
      child: (
        <>
          <span className="text-sm">Apple Music Display </span>
        </>
      ),
      src: musicAPI
      ,
      href: "https://github.com/tgulu/AppleMusic",
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
      style: "shadow-pink-400",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800  w-full text-white md:h-screen"
      >
     <div className="max-w-screen-md p-8 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-2">
        <p className=" text-4xl font-jazz inline border-b-2 white">
            Portfolio
          </p>
          <p className="py-3">Recent Projects</p>
        </div>

        <div
          name="card strcuture"
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 px-12 sm:px-0"
        >
          {portfolios.map(({ id, child, src, href, style }) => (
                <div key={id} className={`shadow-md  rounded-lg ${style}`}>
                   <a href={href} target="_blank" rel="noreferrer">
                <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              </a>
               <div className="flex items-center justify-center">
                <button className="w-1/8 px-2 justify-center py-1/8 m-4 duration-200 hover:scale-105">
                  <a href={href} target="_blank" rel="noreferrer">

                    {child}
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