import Profile from "../assets/profile.png";
import { Link } from "react-scroll";
import { VscGithub } from "react-icons/vsc";
import { SlSocialLinkedin } from "react-icons/sl";

const Homes = () => {
  // const links = [
  //   {
  //     id: 1,
  //     child: (
  //       <>
  //         <SlSocialLinkedin size={30} />
  //       </>
  //     ),
  //     href: "https://linkedin.com/in/thabo-gulu",
  //   },
  //   {
  //     id: 2,
  //     child: (
  //       <>
  //         <VscGithub size={30} />
  //       </>
  //     ),
  //     href: "https://github.com/tgulu",
  //   },
  // ];

  return (
    <div
      name="home"
      className="h-screen flex w-full bg-gradient-to-b from-white via-[#f9fafb] to-white"
    >
      <div
        name="bio"
        className="flex lg:max-h-screen max-w-screen-xl mx-auto items-center justify-center h-screen "
      >
        {/* Flex container to align title, bio, and image */}
        <div className="flex flex-col-reverse md:flex-row gap-4 md:gap-0 items-center md:items-start  md:justify-between w-full mt-14  p-2 md:p-20">
          {/* Left section: Title and Bio */}
          <div className="flex-row justify-start  max-w p-5">
            <h1 className="text-5xl lg:text-7xl font-bold pb-2 font-float text-black sm:text-left mb-5">
              Software Developer
            </h1>
            <p className="text-lg">
              Hi, I'm Thabo Gulu. A passionate software developer who creates
              websites and mobile applications.
            </p>
            <div className="flex flex-wrap gap-5 mt-10 justify-center items-center md:justify-start">
              <div className="flex gap-5 items-center">
                <a
                  href="https://linkedin.com/in/thabo-gulu"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SlSocialLinkedin size={30} />
                </a>

                <a
                  href="https://github.com/tgulu"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <VscGithub size={30} />
                </a>

                {/* <ul>
                  {links.map(({ id, href, child }) => (
                    <li key={id} className={"gap-5"}>
                      <a
                        href={href}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-row"
                      >
                        {child}
                      </a>
                    </li>
                  ))}
                </ul> */}

                <button className="text-white h-12 w-20 flex justify-around items-center rounded-md bg-[#020617] hover:scale-110 cursor-pointer border-2 border-[#e7e7e7]">
                  <Link to="portfolio" smooth duration={500}>
                    Projects
                  </Link>
                </button>
              </div>
            </div>
            <div className="mt-4 md:mt-20">
              <p className="text-center text-2xl">Tech Stack</p>

              <ul className="mt-3 flex flex-row gap-5 md:gap-24 justify-center ">
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
          <div className="md:ml-10 m-0 flex-shrink-0  rounded-2xl">
            <img
              src={Profile}
              alt="profile pic"
              className="rounded-2xl lg:w-60 w-52 h-auto border-2 border-[#060302]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homes;
