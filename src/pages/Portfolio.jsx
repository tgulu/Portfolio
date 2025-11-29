import { portfolio } from "../assets/data/data";
import Slider from "react-slick";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProjectCard from "../components/ProjectCard";

// Custom Arrow Components
function SampleNextArrow({ onClick }) {
  return (
    <div
      onClick={onClick}
      className="absolute top-[50%] right-[-30px] z-10 text-indigo-600 hover:text-white cursor-pointer"
    >
      <MdKeyboardArrowRight size={40} />
    </div>
  );
}

function SamplePrevArrow({ onClick }) {
  return (
    <div
      onClick={onClick}
      className="absolute top-[50%] left-[-30px] z-10 text-indigo-600 hover:text-white cursor-pointer"
    >
      <MdKeyboardArrowLeft size={40} />
    </div>
  );
}

const Portfolio = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div
      name="projects"
      className="w-full flex flex-col items-center justify-center px-4 pt-8 pb-20"
    >
      <div className="w-full max-w-3xl">
        <h1 className="pt-14 md:pt-0 mt-0 mb-1 text-center font-bold text-lg md:text-2xl lg:text-4xl">
          PORTFOLIO
        </h1>

        <Slider {...settings}>
          {portfolio.map((project) => (
            <ProjectCard key={project.id} project={project} className="w-full" />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Portfolio;
