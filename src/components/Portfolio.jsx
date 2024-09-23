// import React, { useState } from "react";
import photography from "../assets/portfolio/shotby.png";
import musicReview from "../assets/portfolio/musicReview.jpg";
import cameron from "../assets/portfolio/cameron4.jpg";
import movies from "../assets/portfolio/movies.jpeg";
import skater from "../assets/portfolio/e-commerce.jpg";
import ieuan from "../assets/portfolio/ieuan.jpg";
// import bnb from "../assets/portfolio/bnb.jpg";
// import musicAPI from "../assets/portfolio/musicAPI.jpg";
// import drone from "../assets/portfolio/drone.jpg";
// import weather from "../assets/portfolio/weather.jpg";

const Portfolio = () => {
  // const [showWebProjects, setWebProjects] = useState(true);

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
      sourceCode: "https://cameronnesbitt.com/",
      style: "shadow-orange-400",
    },
    {
      id: 2,
      child: (
        <>
          <span className="text-sm">Photography </span>
        </>
      ),
      src: photography,
      href: "https://github.com/tgulu/Photography",
      sourceCode: "https://thabogulu.com",
      style: "shadow-purple-400",
    },
    {
      id: 3,
      child: (
        <>
          <span className="text-sm">Ieuan Garrish</span>
        </>
      ),
      src: ieuan,
      href: "https://github.com/tgulu/Illustrator-Portfolio",
      sourceCode: "https://ieuangarrish.com/",
      style: "shadow-blue-700",
    },
    {
      id: 4,
      child: (
        <>
          <span className="text-sm">Skateboard E-Commerce</span>
        </>
      ),
      src: skater,
      href: "https://github.com/tgulu/Skateboard-E-Commerce ",
      sourceCode: "https://skateby.thabogulu.com",
      style: "shadow-yellow-400",
    },
    {
      id: 5,
      child: (
        <>
          <span className="text-sm">Show Time</span>
        </>
      ),
      src: movies,
      href: "https://github.com/tgulu/Show-Time",
      sourceCode: "https://show-time-movies.netlify.app/",
      style: "shadow-green-300",
    },
    {
      id: 6,
      child: (
        <>
          <span className="text-sm">Music Review</span>
        </>
      ),
      src: musicReview,
      href: "https://github.com/tgulu/Albums",
      sourceCode: "https://github.com/tgulu/Albums",
      style: "shadow-orange-400",
    },
  ];

  // const android = [
  //   {
  //     id: 1,
  //     child: (
  //       <>
  //         <span className="text-sm">Hestia Haven</span>
  //       </>
  //     ),
  //     src: bnb,
  //     href: "https://github.com/tgulu/Hestia-Haven",
  //     sourceCode: " https://tgulu.github.io/Hestia-Haven/",
  //     style: "shadow-pink-400",
  //   },
  //   {
  //     id: 2,
  //     child: (
  //       <>
  //         <span className="text-sm">Weather Website</span>
  //       </>
  //     ),
  //     src: weather,
  //     href: "https://github.com/tgulu/Weather",
  //     sourceCode: "https://tgulu.github.io/Weather/",
  //     style: "shadow-cyan-400",
  //   },

  //   // {
  //   //   id: 6,
  //   //   child: (
  //   //     <>
  //   //       <span className="text-sm">Computer Science Trivia Website</span>
  //   //     </>
  //   //   ),
  //   //   src: quiz,
  //   //   href: "https://github.com/tgulu/Computer-Science-Trivia-Quiz",
  //   //   sourceCode: "https://computerscience-trivia.netlify.app/",
  //   //   style: "shadow-white",
  //   // },

  //   {
  //     id: 2,
  //     child: (
  //       <>
  //         <span className="text-sm">Android Music Display </span>
  //       </>
  //     ),
  //     src: musicAPI,
  //     href: "https://github.com/tgulu/AppleMusic",
  //     sourceCode: "https://github.com/tgulu/AppleMusic",
  //     style: "shadow-pink-400",
  //   },

  //   {
  //     id: 3,
  //     child: (
  //       <>
  //         <span className="text-sm">Drone</span>
  //       </>
  //     ),
  //     src: drone,
  //     href: "https://github.com/tgulu/Drone",
  //     sourceCode: "https://github.com/tgulu/Drone",
  //     style: "shadow-pink-600",
  //   },

  //   // {
  //   //   id: 4,
  //   //   child: (
  //   //     <>
  //   //       <span className="text-sm">Android Messenger</span>
  //   //     </>
  //   //   ),
  //   //   src: messageApp,
  //   //   href: "https://github.com/tgulu/Messenger-Chat-App",
  //   //   sourceCode: "https://github.com/tgulu/Messenger-Chat-App",
  //   //   style: "shadow-green-400",
  //   // },
  // ];

  return (
    <div
      name="portfolio"
      className="bg-[#f9f9f9] h-screen w-full text-white md:h-screen"
    >
      {/* Button to toggle between web-projects and android  */}
      {/* <button
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all"
        onClick={() => setWebProjects(!showWebProjects)}
      >
        {showWebProjects ? "Web Projects" : "Android"}
      </button> */}
      <div className="max-w-screen-xl p-4 mx-auto flex flex-col justify-center h-screen">
        <div name="project-cards">
          {/* <p className="pt-20 font-float mt-0 mb-4 text-4xl ">
            <span className="border-b-2 white">Portfolio </span>
          </p> */}
        </div>

        <div
          name="card strcuture"
          className="p-2 grid h-screen md:h-[300px] lg:h-[800px] grid-rows-1 md:grid-cols-3 gap-4 justify-center items-center"
        >
          {portfolios.map(({ id, child, src, href, style, sourceCode }) => (
            <div
              key={id}
              className={`shadow-md h-[80%] bg-slate-900 border-2 border-black flex md:block rounded-lg ${style}`}
            >
              <a href={sourceCode} target="_blank" rel="noopener noreferrer">
                <img
                  src={src}
                  alt=""
                  className="rounded-md duration-200 h-24 md:h-[75%]  flex justify-center items-center hover:scale-125 w-[140px] md:w-[900px] lg:w-[1200px] "
                />
              </a>
              <div className="flex items-center justify-center h-20">
                <button className="w-1/8 px-2 justify-center duration-200 hover:scale-110 text-sm">
                  <a href={href} target="_blank" rel="noopener noreferrer">
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
