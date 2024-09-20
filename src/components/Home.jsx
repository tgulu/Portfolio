import Profile from "../assets/profile.png";
import { RxDoubleArrowRight } from "react-icons/rx";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div
        name="bio"
        className="max-w-screen-lg mx-auto flex flex-col items-center justify-center  h-full px-5 md:flex-row"
      >
        <div className="flex flex-col justify-center w-auto h-full">
          <h5 className="lg:flex flex-col text-4xl max-w-md py-8 sm:text-6xl font-float text-white">
            Software Developer
          </h5>
          <p className="text-white text-base max-w-md">
            Driven software developer with a passion for crafting visually
            engaging and user-friendly web experiences and mobile applications
          </p>
          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="text-white w-fit h-10 px-4 py-3 my-3 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-purple-500 hover:scale-110 cursor-pointer group"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300 ">
                <RxDoubleArrowRight size={15} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={Profile}
            alt="profile pic"
            className=" rounded-3xl mx-auto max-w-sm max-h-md w-56 md:h-full border-4 border-cyan-200"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
