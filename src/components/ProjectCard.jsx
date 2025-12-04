import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({ project, className = "" }) => {
  const titleContent = project.title || project.child;
  const altText =
    project.title ||
    (typeof project.child === "string" ? project.child : "Project preview");

  return (
    <div
      className={`bg-white/70 backdrop-blur-md rounded-2xl px-10 py-6 z-10 ${className}`}
    >
      <img
        src={project.src}
        alt={altText}
        className="rounded-lg border shadow-md border-neutral-800 w-full"
      />

      <div className="mt-4">
        <h3 className="text-lg font-bold text-center tracking-wide">
          {titleContent}
        </h3>
        <p className="text-xl md:text-2xl  text-black mt-2">
          {project.descrption}
        </p>
      </div>

      <div className="grid grid-rows-4 md:grid-cols-1 items-center gap-2 my-5">
        {project.tech.map((item, index) => (
          <div
            key={index}
            className="flex text-xl md:text-2xl h-8 items-center justify-center gap-1.5 px-2 rounded-full bg-white/90 text-black shadow-md"
          >
            <span>{item.name}</span>
            {item.icon}
          </div>
        ))}
      </div>

      <div className=" items-center flex justify-center mt-4 gap-4">
        <a
          href={project.liveDemo}
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center gap-5 px-4 py-2 bg-white/20 text-black font-semibold rounded-lg hover:bg-white/90 transition shadow-md"
        >
          <FaExternalLinkAlt className="text-2xl md:text-lg" />
          Live Demo
        </a>
        <a
          href={project.gitCode}
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center gap-2 px-4 py-2 bg-white/20 text-black font-semibold rounded-lg hover:bg-white/90 transition shadow-md"
        >
          <FaGithub className="text-2xl md:text-lg" />
          Source Code
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
