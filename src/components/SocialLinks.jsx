import React from "react";
import { VscGithub } from "react-icons/vsc";
import { SlSocialLinkedin } from "react-icons/sl";
import { TbMailForward } from "react-icons/tb";
import { BsPersonWorkspace } from "react-icons/bs";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <SlSocialLinkedin size={30} />
        </>
      ),
      href: "https://linkedin.com/in/thabo-gulu",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          Github <VscGithub size={30} />
        </>
      ),
      href: "https://github.com/tgulu",
    },
    {
      id: 3,
      child: (
        <>
          Mail <TbMailForward size={32} />
        </>
      ),
      href: "mailto:thabogulu@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          CV <BsPersonWorkspace size={30} />
        </>
      ),
      href: "/Thabo Gulu CV.pdf",
      style: "rounded-br-md",
      download: true,
    },
  ];
  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={
              "flex justify-between cursor-pointer items-center w-40 h-14 px-4 ml-[-100px] font-style hover:ml-[-10px] hover:rounded-md duration-300 bg-gradient-to-r from-cyan-300 to-purple-400" +
              " " +
              style
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-black"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
