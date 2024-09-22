import Profile from "../assets/profile.png";
import { RxDoubleArrowRight } from "react-icons/rx";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-white via-[#f9fafb] to-white"
    >
      <div
        name="bio"
        className="max-w-screen-lg mx-auto md:px-10 px-2 flex flex-col relative items-center justify-center h-full sm:flex-row"
      >
        {/* <h6>Hi, my name is</h6>
        <h1></h1> */}
        <div className="flex flex-col lg:mr-12 justify-center items-center sm:items-start w-auto h-full ">
          <h1 className="text-5xl relative bottom-10 md:bottom-28 lg:text-7xl font-bold pb-2 font-float text-black text-center sm:text-left md:mb-5 ">
            Software Developer
          </h1>

          <p className="text-black sm:absolute sm:top-40 ml-5 lg:mt-6 lg:ml-0 items-center w-full sm:w-3/5  relative top-96 md:top-96  text-2xl lg:text-3xl font-thin py-18 md:py-14 ">
            Hi I'm Thabo Gulu. A passionate software devloper who creates
            websites and mobile applications
          </p>

          {/* Driven software developer with a passion for crafting visually
            engaging and user-friendly websites and mobile applications 
            A driven Front-End and Mobile developer
             */}

          <button>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="text-white h-10 w-20 flex relative lg:absolute items-center justify-around rounded-md m-4 top-96 md:top-[90]  bg-[#020617] hover:scale-110 cursor-pointer border-2 border-[#e7e7e7]"
            >
              Projects
            </Link>
          </button>
        </div>

        <div>
          <img
            src={Profile}
            alt="profile pic"
            className=" justify-center relative bottom-96 lg:bottom-9 items-centers rounded-2xl mx-auto max-w-sm max-h-md w-64 md:h-full border-2 border-[#0c0a09] "
          />
        </div>
        <div>
          <p className="justify-center absolute bottom-28 right-44  lg:bottom-60 lg:left-72 items-center ">
            Tech Stack
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
