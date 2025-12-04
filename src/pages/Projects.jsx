import { portfolio } from "../assets/data/data";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  return (
    <div className="grid grid-cols-1  md:grid-cols-2 gap-x-4 gap-y-2  justify-items-center">
      {portfolio.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
          className="w-80 md:w-[40rem] "
        />
        //
      ))}
    </div>
  );
};

export default Projects;
