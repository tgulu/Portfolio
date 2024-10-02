import Profile from "../assets/profile.png";
import { Link } from "react-scroll";
import { VscGithub } from "react-icons/vsc";
import { SlSocialLinkedin } from "react-icons/sl";

const Homes = () => {
  return (
    <div
      name="home"
      className="h-screen flex justify-between w-full bg-gradient-to-b from-white via-[#f9fafb] to-white"
    >
      <div
        name="bio"
        className="flex lg:max-h-screen max-w-screen-xl mx-auto items-center justify-center h-screen "
      >
        {/* Flex container to align title, bio, and image */}
        <div className="flex flex-col-reverse md:flex-row gap-4 md:gap-0 items-center md:items-start  md:justify-between w-full mt-[-50px] md:mt-14  p-1 md:p-20">
          {/* Left section: Title and Bio */}
          <div className="flex-row justify-start  max-w p-5">
            <h1 className="text-3xl lg:text-7xl font-bold pb-2 font-float text-black sm:text-left mb-5">
              Hi, How Are You?
            </h1>
            <p class="bio" className="text-lg">
              I'm Thabo Gulu, a passionate software developer.
            </p>
            <div className="flex flex-wrap gap-5 mt-10 justify-center items-center md:justify-start">
              <div className="flex gap-5 items-center">
                <a
                  href="https://linkedin.com/in/thabo-gulu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" hover:scale-150"
                >
                  <SlSocialLinkedin size={30} />
                </a>

                <a
                  href="https://github.com/tgulu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-150"
                >
                  <VscGithub size={30} />
                </a>

                <button className="text-white h-12 w-20 flex  justify-around items-center rounded-md bg-[#020617] hover:scale-125 cursor-pointer border-2 border-[#e7e7e7]">
                  <Link to="portfolio" smooth duration={500}>
                    Portfolio
                  </Link>
                </button>
              </div>
            </div>
            <div className="mt-4 md:mt-20">
              <p className="text-center text-2xl">Tech Stack</p>

              <ul className="mt-3 flex flex-row gap-5 md:gap-10 justify-center">
                <li className="hover:scale-125 duration-200">
                  <img
                    src="https://skillicons.dev/icons?i=js,kotlin"
                    alt="JS and Kotlin Icons"
                  />
                </li>
                <li className="hover:scale-125 duration-200">
                  <img
                    src="https://skillicons.dev/icons?i=react,tailwind"
                    alt="React and C Icons"
                  />
                </li>
                <li className="hover:scale-125 duration-200">
                  <img
                    src="https://skillicons.dev/icons?i=html,css"
                    alt="HTML and CSS Icons"
                  />
                </li>
              </ul>
            </div>
          </div>

          {/* Right section: Profile Image */}
          <div className="md:ml-10 m-0 flex-shrink-0 rounded-2xl">
            <img
              src={Profile}
              alt="profile pic"
              className="rounded-2xl animate-morph shadow-xl shadow-cyan-300/95  lg:w-60 h-52 w-40 md:h-80 md:w-60 "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homes;
