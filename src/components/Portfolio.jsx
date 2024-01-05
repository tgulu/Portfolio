import React from "react";
import photography from "../assets/portfolio/shotby.png";
import musicReview from "../assets/portfolio/musicReview.jpg";
import cameron from "../assets/portfolio/cameron4.jpg";
import movies from "../assets/portfolio/movies.jpeg";
import skater from "../assets/portfolio/e-commerce.jpg";
import bnb from "../assets/portfolio/bnb.jpg";
// import musicAPI from "../assets/portfolio/musicAPI.jpg";
//import drone from "../assets/portfolio/drone.jpg";
// import weather from "../assets/portfolio/weather.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      child: (
        <>
          <span className="text-sm">Cameron Nesbitt</span>
        </>
      ),
      src: cameron,
      href: "https://github.com/tgulu/Music-Producer",
      sourceCode: "https://cameronnesbitt.netlify.app/",
      style: "shadow-orange-400",
    },
    {
      id: 2,
      child: (
        <>
          <span className="text-sm">Photography Portfolio</span>
        </>
      ),
      src: photography,
      href: "https://github.com/tgulu/Photography",
      sourceCode: "https://shotbygulu.netlify.app/",
      style: "shadow-purple-400",
    },
    {
      id: 3,
      child: (
        <>
          <span className="text-sm">Skateboard E-Commerce Website </span>
        </>
      ),
      src: skater,
      href: "https://github.com/tgulu/Skateboard-E-Commerce ",
      sourceCode: "https://axel-stall.netlify.app/",
      style: "shadow-yellow-400",
    },

    {
      id: 4,
      child: (
        <>
          <span className="text-sm">Show Time</span>
        </>
      ),
      src: movies,
      href: "https://github.com/tgulu/Show-Time",
      sourceCode: "https://show-time-movies.netlify.app/" ,
      style: "shadow-green-300",
    },

    {
      id: 5,
      child: (
        <>
          <span className="text-sm">Hestia Haven</span>
        </>
      ),
      src: bnb,
      href: "https://github.com/tgulu/Hestia-Haven",
      sourceCode: " https://tgulu.github.io/Hestia-Haven/",
      style: "shadow-pink-400",
    },
    {
      id: 6,
      child: (
        <>
          <span className="text-sm">Music Review Website</span>
        </>
      ),
      src: musicReview,
      href: "https://github.com/tgulu/Albums",
      sourceCode: "https://github.com/tgulu/Albums",
      style: "shadow-orange-400",
    },
    // {
    //   id: 6,
    //   child: (
    //     <>
    //       <span className="text-sm">Weather Website</span>
    //     </>
    //   ),
    //   src: weather,
    //   href: "https://github.com/tgulu/Weather",
    //   sourceCode: "https://tgulu.github.io/Weather/",
    //   style: "shadow-cyan-400",
    // },

    // {
    //   id: 6,
    //   child: (
    //     <>
    //       <span className="text-sm">Computer Science Trivia Website</span>
    //     </>
    //   ),
    //   src: quiz,
    //   href: "https://github.com/tgulu/Computer-Science-Trivia-Quiz",
    //   sourceCode: "https://computerscience-trivia.netlify.app/",
    //   style: "shadow-white",
    // },

    // {
    //   id: 7,
    //   child: (
    //     <>
    //       <span className="text-sm">Android Music Display </span>
    //     </>
    //   ),
    //   src: musicAPI,
    //   href: "https://github.com/tgulu/AppleMusic",
    //   sourceCode: "https://github.com/tgulu/AppleMusic",
    //   style: "shadow-pink-400",
    // },

    // {
    //   id: 8,
    //   child: (
    //     <>
    //       <span className="text-sm">Drone</span>
    //     </>
    //   ),
    //   src: drone,
    //   href: "https://github.com/tgulu/Drone",
    //   sourceCode: "https://github.com/tgulu/Drone",
    //   style: "shadow-pink-600",
    // },

    // {
    //   id: 9,
    //   child: (
    //     <>
    //       <span className="text-sm">Android Messenger</span>
    //     </>
    //   ),
    //   src: messageApp,
    //   href: "https://github.com/tgulu/Messenger-Chat-App",
    //   sourceCode: "https://github.com/tgulu/Messenger-Chat-App",
    //   style: "shadow-green-400",
    // },
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
                    Code: {child}
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
