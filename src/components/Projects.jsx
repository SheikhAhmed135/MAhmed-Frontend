import ReactHtmlParser from "react-html-parser";
import { useInView } from "react-intersection-observer";

import "./Projects.scss";
import useProjects from "../hooks/useProjects";

const Projects = () => {
  const projects = useProjects();
  const { ref, inView } = useInView({ threshold: 0.5 });

  return (
    <div className="projects">
      {projects.hasLoaded && (
        <>
          <div className="project-cards" ref={ref}>
            {projects.state.map((project, i) => (
              <div className="project-card w3-animate-opacity" key={i}>
                {project.image && (
                  <img
                    className="project-logo"
                    src={project.image}
                    alt="Logo"
                    width="80px"
                  />
                )}
                <h3 className={`project-name ${inView && "w3-animate-left"}`}>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.name}
                  </a>
                </h3>
                <div
                  className={`project-details ${inView && "w3-animate-left"}`}
                >
                  {ReactHtmlParser(project.details)}
                </div>
                <hr />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Projects;
