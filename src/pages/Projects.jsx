import { portfolio } from "../assets/data/data";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 2xl:grid-cols-2 gap-x-4 gap-y-2 md:gap-x-10 md:gap-y-10 2xl:gap-x-24 2xl:gap-y-10 justify-items-center">
      {portfolio.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
          className="w-72 md:w-96 "
        />
      ))}
    </div>
  );
};

export default Projects;
