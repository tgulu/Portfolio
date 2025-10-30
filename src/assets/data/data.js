import photography from "../portfolio/shotby.png";
import cameron from "../portfolio/cameron4.jpg";
// import movies from "../portfolio/movies.jpeg";
import skater from "../portfolio/e-commerce.jpg";
import ieuan from "../portfolio/ieuan.jpg";
import deadwax from "../portfolio/deadwax.jpg";
import {
  SiJavascript,
  SiTailwindcss,
  SiAxios,
  SiCss3,
  SiHtml5,
} from "react-icons/si";
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
      "The Greenhouse Project is a website showcasing a Brighton collective that platforms R&B singers, rappers, DJs, and other emerging young musicians from the local scene.",
  },
  {
    id: 2,
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
    ],
    descrption:
      "An e-commerce website for skateboard enthusiasts, featuring brand lookbooks, a showcase of skate gear, and direct links to purchase items from top skate labels",
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
      {
        name: "JavaScript",
        icon: <SiJavascript className="text-yellow-400" />,
      },
      {
        name: "CSS",
        icon: <SiCss3 className="text-blue-500" />,
      },
      {
        name: "HTML",
        icon: <SiHtml5 className="text-orange-500" />,
      },
    ],
    descrption:
      "A portfolio website showcasing creative photography and videography, featuring portraits, urban scenes, and event coverage with a focus on visual storytelling.",
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
      {
        name: "JavaScript",
        icon: <SiJavascript className="text-yellow-400" />,
      },
      {
        name: "CSS",
        icon: <SiCss3 className="text-blue-500" />,
      },
      {
        name: "HTML",
        icon: <SiHtml5 className="text-orange-500" />,
      },
    ],
    descrption:
      "A personal portfolio website showcasing the work, projects, and creative output of Ieuan Garrish, including web development, design, and multimedia content",
  },
  {
    id: 5,
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
      {
        name: "JavaScript",
        icon: <SiJavascript className="text-yellow-400" />,
      },
      {
        name: "CSS",
        icon: <SiCss3 className="text-blue-500" />,
      },
      {
        name: "HTML",
        icon: <SiHtml5 className="text-orange-500" />,
      },
    ],
    descrption:
      "A website showcasing a Brighton-based music producer and mixer, featuring artists they've worked with, labels they've collaborated with, and notable show credits.",
  },

  // {
  //   id: 6,
  //   child: (
  //     <>
  //       <span className="text-sm">Show Time</span>
  //     </>
  //   ),
  //   src: movies,
  //   gitCode: "https://github.com/tgulu/Show-Time",
  //   liveDemo: "https://show-time-movies.netlify.app/",
  //   style: "shadow-blue-500",
  //   tech: [
  //     {
  //       name: "JavaScript",
  //       icon: <SiJavascript className="text-yellow-400" />,
  //     },
  //     {
  //       name: "CSS",
  //       icon: <SiCss3 className="text-blue-500" />,
  //     },
  //     {
  //       name: "HTML",
  //       icon: <SiHtml5 className="text-orange-500" />,
  //     },
  //   ],
  //   descrption:
  //     "Show Time is a movie database website displaying popular films using the TMDb API. Users can browse titles, posters, overviews, and release dates in a table view.",
  // },
];
