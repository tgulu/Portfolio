import photography from "../assets/portfolio/shotby.png";
import cameron from "../assets/portfolio/cameron4.jpg";
import movies from "../assets/portfolio/movies.jpeg";
import skater from "../assets/portfolio/e-commerce.jpg";
import ieuan from "../assets/portfolio/ieuan.jpg";
import deadwax from "../assets/portfolio/deadwax.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      child: (
        <>
          <span className="text-sm">The Green House Project</span>
        </>
      ),
      src: deadwax,
      href: "https://github.com/tgulu/Green-House-Projects",
      sourceCode: "https://greenhouseprojects.space/",
      style: "shadow-orange-400",
    },
    {
      id: 2,
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
      id: 3,
      child: (
        <>
          <span className="text-sm">Artist Portfolio</span>
        </>
      ),
      src: photography,
      href: "https://github.com/tgulu/Photography",
      sourceCode: "https://thabogulu.com",
      style: "shadow-purple-500",
    },
    {
      id: 4,
      child: (
        <>
          <span className="text-sm">Ieuan Garrish</span>
        </>
      ),
      src: ieuan,
      href: "https://github.com/tgulu/Illustrator-Portfolio",
      sourceCode: "https://ieuangarrish.com/",
      style: "shadow-green-400",
    },
    {
      id: 5,
      child: (
        <>
          <span className="text-sm">Skateboard E-Commerce</span>
        </>
      ),
      src: skater,
      href: "https://github.com/tgulu/Skateboard-E-Commerce",
      sourceCode: "https://skateby.thabogulu.com",
      style: "shadow-orange-600",
    },
    {
      id: 6,
      child: (
        <>
          <span className="text-sm">Show Time</span>
        </>
      ),
      src: movies,
      href: "https://github.com/tgulu/Show-Time",
      sourceCode: "https://show-time-movies.netlify.app/",
      style: "shadow-blue-500",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-[#f9f9f9] h-screen w-full text-white md:h-screen flex justify-center items-center"
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
          className="p-2 grid h-screen md:h-[300px] lg:h-[800px] mt-24 md:mt-0  grid-rows-6 grid-cols-none md:grid-rows-none md:grid-cols-3 gap-4 justify-center items-center"
        >
          {portfolios.map(({ id, child, src, href, style, sourceCode }) => (
            <div
              key={id}
              className={`group shadow-lg h-[100%] md:h-[90%] bg-zinc-800 border-4 border-zinc-950 flex justify-start md:block rounded-lg transition-all ease-out duration-500 ${style}`}
            >
              <a href={sourceCode} target="_blank" rel="noopener noreferrer">
                <img
                  src={src}
                  alt=""
                  className="rounded-md duration-200 h-full md:h-[69%] flex items-center hover:scale-95 w-full md:w-[900px] lg:w-[1200px] "
                />
              </a>
              <div className="flex items-center justify-center h-20">
                <button className="w-1/8 px-2 justify-center duration-200 hover:scale-105 text-sm">
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
