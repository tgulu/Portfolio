import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const NavBar = () => {
  const [nav, setNav] = useState(false); // State to toggle mobile navigation menu
  const [fontIndex, setFontIndex] = useState(0); // State to track the font index for rotating fonts

  const fonts = ["font-jazz", "font-rise", "font-signature", "font-float"];

  //  rotate fonts at regular intervals
  useEffect(() => {
    const intervalId = setInterval(() => {
      setFontIndex((fontIndex + 1) % fonts.length); // Update the font index at regular intervals
    }, 3000);

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, [fontIndex, fonts.length]);

  const links = [
    // Navigation links for scrolling to different sections of the page
    {
      id: 1,
      link: "home",
    },
    // {
    //   id: 2,
    //   link: "about",
    // },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

  return (
    <div className="drop-shadow-lg flex justify-between items-center z-30 w-full h-10 text-black bg-[#fafafa] fixed">
      <div className="flex">
        <h1
          className={`text-3xl cursor-pointer hover:scale-105 duration-200 ml-20 ${fonts[fontIndex]}`} // Font change based on fontIndex
        >
          Thabo Gulu
        </h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-7 cursor-pointer capitalize font-signature text-black hover:scale-125 duration-200"
          >
            <Link to={link} smooth duration={200}>
              {/* Smooth scroll for the link */}
              {link}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile menu toggle button */}
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-7 z-10 hover:scale-125 text-black md:hidden"
      >
        {nav ? <FaTimes size={35} /> : <FaBars size={30} />}{" "}
        {/* Display close or open icon */}
      </div>

      {/* Mobile menu */}
      {nav && (
        <ul className="flex flex-col gap-10 justify-center items-center font-light absolute top-0 left-0 w-full h-screen bg-[#f9fafb]">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer  capitalize py-6 text-4xl"
            >
              <Link
                onClick={() => setNav(!nav)} // Close menu on link click
                to={link}
                smooth
                duration={900}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
