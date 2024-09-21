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
        className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-0.5  md:flex-row"
      >
        <div className="flex flex-col justify-center w-auto h-full">
          <h5 className="lg:flex flex-col text-4xl max-w-md py-8 sm:text-6xl font-float text-black">
            Software Developer
          </h5>
          <p className="text-black text-base max-w-md">
            Driven software developer with a passion for crafting visually
            engaging and user-friendly web experiences and mobile applications
          </p>
          <div>
            <Link
              to="portfolio"
              //    change to projects when you re-factor portfolio page  to="projects"
              smooth
              duration={500}
              className="text-white w-fit h-10 px-4 py-3 my-6 flex items-center rounded-md bg-gradient-to-r from-[#020617] to-[#0a0a0a] hover:scale-110 cursor-pointer group"
            >
              Projects
            </Link>
          </div>
        </div>

        <div>
          <img
            src={Profile}
            alt="profile pic"
            className=" rounded-3xl mx-auto max-w-sm max-h-md w-56 md:h-full border-2 border-[#0c0a09] "
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
