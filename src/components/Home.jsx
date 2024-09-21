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
        className="max-w-screen-lg mx-auto flex flex-col relative items-center justify-center h-full px-0.5 md:flex-row"
      >
        {/* <h6>Hi, my name is</h6>
        <h1></h1> */}
        <div className="flex flex-col lg:mr-12 justify-center items-center sm:items-start w-auto  h-full ">
          <h1 className="text-5xl relative bottom-10 lg:bottom-32 lg:text-7xl font-thin font-float text-black text-center sm:text-left">
            Software Developer
          </h1>

          <p className="text-black sm:absolute sm:top-40 ml-5 lg:ml-0 items-center sm:items-start w-full  lg:w-3/5 sm:h-96 relative top-96 lg:top-72 text-2xl font-thin ">
            Driven software developer with a passion for crafting visually
            engaging and user-friendly websites and mobile applications
          </p>

          <div>
            <Link
              to="portfolio"
              //    change to projects when you re-factor portfolio page  to="projects"
              smooth
              duration={500}
              className="text-white w-fit h-12 px-4 py-3 my-6 flex items-center rounded-md relative top-96 lg:-top-5 bg-gradient-to-r from-[#020617] to-[#0a0a0a] hover:scale-110 cursor-pointer border-2 border-[#e7e7e7]"
            >
              Projects
            </Link>
          </div>
        </div>

        <div>
          <img
            src={Profile}
            alt="profile pic"
            className=" justify-center relative bottom-96 lg:bottom-9 items-centers rounded-2xl mx-auto max-w-sm max-h-md w-64 md:h-full border-2 border-[#0c0a09] "
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
