import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [fontIndex, setFontIndex] = useState(0);


  const fonts = ["font-jazz", "font-rise", "font-signature", "font-style","font-float", "font-sedgwick", "font-lilita", "font-neue"];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setFontIndex((fontIndex + 1) % fonts.length); // Update the font index at regular intervals
    }, 1500);

    return () => clearInterval(intervalId);
  }, [fontIndex, fonts.length]);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "experience",
    },
    {
      id: 5,
      link: "contacts",
    },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 text-white bg-black fixed">
      <div className="flex">
      <h1 className={`text-3xl cursor-pointer hover:scale-105 duration-200 ml-3  ${fonts[fontIndex]}`}
          >
            Thabo
          Gulu
        </h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-white hover:scale-125 duration-200"
          >
            <Link to={link} smooth duration={200}>
              {link}
            </Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-7 z-10 hover:scale-125 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={20} /> : <FaBars size={20} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-600 text=gray-600">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
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
