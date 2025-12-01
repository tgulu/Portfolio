import React, { useState } from "react";
import { Link } from "react-scroll";
import { AiOutlineMenu } from "react-icons/ai";
import { IoIosClose } from "react-icons/io";

const Nav = () => {
  const [nav, setNav] = useState(false);

  const links = [
    { id: 1, link: "skills" },
    { id: 2, link: "projects" },
    { id: 3, link: "contact" },
  ];

  const toggleMenu = () => setNav(!nav);

  return (
    <header className="w-full mt-3 z-50 xl:mt-16">
      {/* Desktop Nav */}
      <div className="hidden md:flex justify-between items-center w-full">
        <h1 className="text-2xl font-semibold tracking-wide">THABO GULU</h1>
        <ul className="flex space-x-12 text-xl font-light">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="mx-2 cursor-pointer capitalize text-black hover:scale-125 duration-200"
            >
              <Link to={link} smooth duration={800}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Nav Toggle */}
      <div className="flex justify-between items-center md:hidden px-4 py-2">
        <h1 className="text-xl font-semibold tracking-wide">THABO GULU</h1>

        {/* Show hamburger only if menu is closed */}
        {!nav && (
          <div className="z-50 text-black cursor-pointer" onClick={toggleMenu}>
            <AiOutlineMenu size={25} />
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      {nav && (
        <div className="bg-white text-black flex flex-col h-screen absolute top-0 left-0 w-full z-40">
          {/* Close Icon */}
          <div className="flex justify-end p-6 mx-4">
            <IoIosClose
              size={55}
              className="cursor-pointer"
              onClick={toggleMenu}
            />
          </div>

          {/* Nav Links */}
          <ul className="flex flex-col items-center gap-y-20 mt-10">
            {links.map(({ id, link }) => (
              <li
                key={id}
                className="text-3xl cursor-pointer py-1.5 capitalize"
              >
                <Link to={link} smooth duration={800} onClick={toggleMenu}>
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Nav;
