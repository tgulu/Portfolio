import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Nav = () => {
  const [nav, setNav] = useState(false); // State to toggle mobile nav

  const links = [
    { id: 2, link: "projects" },
    { id: 3, link: "contact" },
  ];

  return (
    <div className="flex justify-between items-center w-full ">
      <h1 className="text-xl justify-start font-semibold tracking-wide">
        THABO GULU
      </h1>

      {/* Desktop Navigation */}

      <ul className="hidden md:flex space-x-12 text-sm hover:underline font-light">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="mx-9 cursor-pointer capitalize font-signature text-black hover:scale-125 duration-200"
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
        className="cursor-pointer  z-10 hover:scale-125 text-black md:hidden"
      >
        {nav ? <FaTimes size={25} /> : <FaBars size={25} />}
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

export default Nav;
