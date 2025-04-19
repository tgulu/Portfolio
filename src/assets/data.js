import photography from "../assets/portfolio/shotby.png";
import cameron from "../assets/portfolio/cameron4.jpg";
import movies from "../assets/portfolio/movies.jpeg";
import skater from "../assets/portfolio/e-commerce.jpg";
import ieuan from "../assets/portfolio/ieuan.jpg";
import deadwax from "../assets/portfolio/deadwax.jpg";
import { SiJavascript, SiTailwindcss, SiAxios } from "react-icons/si";
import { FaReact } from "react-icons/fa";

export const portfolio = [
  {
    id: 1,
    child: (
      <>
        <span className="text-sm">The Green House Project</span>
      </>
    ),
    src: deadwax,
    gitCode: "https://github.com/tgulu/Green-House-Projects",
    liveDemo: "https://greenhouseprojects.space/",
    style: "shadow-orange-400",
    tech: [
      { name: "React", icon: <FaReact className="text-blue-400" /> },
      {
        name: "Javascript",
        icon: <SiJavascript className="text-yellow-500" />,
      },
      { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-400" /> },
      { name: "Axios", icon: <SiAxios className="text-sky-600" /> },
    ],
    descrption:
      "A showcase of creative photography work including portraits, events,and urban scenes. Built using React, Tailwind, and Axios.",
  },
  {
    id: 2,
    child: (
      <>
        <span className="text-sm">Cameron Nesbitt</span>
      </>
    ),
    src: cameron,
    gitCode: "https://github.com/tgulu/Music-Producer",
    liveDemo: "https://cameronnesbitt.com/",
    style: "shadow-orange-400",
    tech: [
      { name: "React", icon: <FaReact className="text-blue-400" /> },
      {
        name: "Javascript",
        icon: <SiJavascript className="text-yellow-500" />,
      },
      { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-400" /> },
      { name: "Axios", icon: <SiAxios className="text-sky-600" /> },
    ],
    descrption:
      " A showcase of creative photography work including portraits, events,and urban scenes. Built using React, Tailwind, and Axios.",
  },

  {
    id: 3,
    child: (
      <>
        <span className="text-sm">Artist Portfolio</span>
      </>
    ),
    src: photography,
    gitCode: "https://github.com/tgulu/Photography",
    liveDemo: "https://thabogulu.com",
    style: "shadow-purple-500",
    tech: [
      { name: "React", icon: <FaReact className="text-blue-400" /> },
      {
        name: "Javascript",
        icon: <SiJavascript className="text-yellow-500" />,
      },
      { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-400" /> },
      { name: "Axios", icon: <SiAxios className="text-sky-600" /> },
    ],
    descrption:
      " A showcase of creative photography work including portraits, events,and urban scenes. Built using React, Tailwind, and Axios.",
  },
  {
    id: 4,
    child: (
      <>
        <span className="text-sm">Ieuan Garrish</span>
      </>
    ),
    src: ieuan,
    gitCode: "https://github.com/tgulu/Illustrator-Portfolio",
    liveDemo: "https://ieuangarrish.com/",
    style: "shadow-green-400",
    tech: [
      { name: "React", icon: <FaReact className="text-blue-400" /> },
      {
        name: "Javascript",
        icon: <SiJavascript className="text-yellow-500" />,
      },
      { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-400" /> },
      { name: "Axios", icon: <SiAxios className="text-sky-600" /> },
    ],
    descrption:
      " A showcase of creative photography work including portraits, events,and urban scenes. Built using React, Tailwind, and Axios.",
  },
  {
    id: 5,
    child: (
      <>
        <span className="text-sm">Skateboard E-Commerce</span>
      </>
    ),
    src: skater,
    gitCode: "https://github.com/tgulu/Skateboard-E-Commerce",
    liveDemo: "https://skateby.thabogulu.com",
    style: "shadow-orange-600",
    tech: [
      { name: "React", icon: <FaReact className="text-blue-400" /> },
      {
        name: "Javascript",
        icon: <SiJavascript className="text-yellow-500" />,
      },
      { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-400" /> },
      { name: "Axios", icon: <SiAxios className="text-sky-600" /> },
    ],
    descrption:
      " A showcase of creative photography work including portraits, events,and urban scenes. Built using React, Tailwind, and Axios.",
  },
  {
    id: 6,
    child: (
      <>
        <span className="text-sm">Show Time</span>
      </>
    ),
    src: movies,
    gitCode: "https://github.com/tgulu/Show-Time",
    liveDemo: "https://show-time-movies.netlify.app/",
    style: "shadow-blue-500",
    tech: [
      { name: "React", icon: <FaReact className="text-blue-400" /> },
      {
        name: "Javascript",
        icon: <SiJavascript className="text-yellow-500" />,
      },
      { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-400" /> },
      { name: "Axios", icon: <SiAxios className="text-sky-600" /> },
    ],
    descrption:
      " A showcase of creative photography work including portraits, events,and urban scenes. Built using React, Tailwind, and Axios.",
  },
];
