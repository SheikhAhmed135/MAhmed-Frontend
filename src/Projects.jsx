import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faChrome } from "@fortawesome/free-brands-svg-icons";
import DataBridge from "./assets/DataBridge.jpg";
import IMS from "./assets/IMS.png";
import privacyte from "./assets/privacyte.png";
// import IID from "./assets/IID.avif";
import quiz from "./assets/quiz.webp";
// import SMS from "./assets/SMS.png";
// import api from "./assets/api.png";
import thumbnail from "./assets/thumbnail.png";
import "./CSS Files/projects.css";
import PropTypes from "prop-types";

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  imageSrc: PropTypes.string,
  githubLink: PropTypes.string,
  projectLink: PropTypes.string,
  date: PropTypes.string.isRequired,
  technologies: PropTypes.array,
  description: PropTypes.string.isRequired,
};

function ProjectCard({
  title,
  imageSrc,
  githubLink,
  projectLink,
  date,
  technologies,
  description,
}) {
  const tech = technologies.map(
    (tech, index) => tech + `${index == technologies.length - 1 ? "." : ", "}`
  );
  return (
    <div className="project">
      <a
        className="project-thumbnail"
        href={githubLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="images"
          src={imageSrc ?? thumbnail}
          alt={title}
          width="100%"
          height="250px"
        />
      </a>
      <div className="project-info">
        <div className="project-title">
          <h2>{title}</h2>
          <div className="project-badges">
            {githubLink && (
              <a
                className="badge"
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>
            )}
            {projectLink && (
              <a
                className="badge"
                href={projectLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faChrome} size="2x" />
              </a>
            )}
          </div>
        </div>
        <span>{date}</span>
        <h3 className="mb-5px">
          <span style={{ color: "#FF004F" }}>{tech}</span>
        </h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

function Projects() {
  const projects = [
    {
      name: "Privacyte",
      image: privacyte,
      date: "Dec 2023 - July 2024",
      technologies: ["Python", "Flask", "MongoDB", "Heroku", "Flutter"],
      details:
        "Privacyte is the final year project where me and my team focused on digital innovation creating\
        a diverse mobile application with flutter. Attention to detail was important in this because of\
        teamwork. We had to brainstorm ways to adapt our ideas into the application.",
    },
    {
      name: "Recipe App API",
      github: "https://github.com/muhammad-ahmed02/recipe-app-api",
      date: "March 2024 - May 2024",
      technologies: [
        "Python",
        "Django",
        "Django REST framework",
        "Docker",
        "Test Driven Development",
        "GitHub Actions",
        "Flake8 Linting",
      ],
      details:
        "A practice project base on Python programming language following the industry trend to write\
        and resolve issues in a professional way.",
    },
    {
      name: "DataBridge",
      image: DataBridge,
      github: "https://github.com/muhammad-ahmed02/DataBridge",
      website: "https://the-data-bridge-c59f00b20f6f.herokuapp.com/",
      date: "Oct 2023 - Nov 2023",
      technologies: [
        "Python",
        "Django",
        "Pandas",
        "AWS S3",
        "Snowflake",
        "HTML",
        "Bootstrap CSS",
        "Heroku",
      ],
      details:
        "The Data Bridge project showcases my expertise in data warehousing and ETL processing. \
        The project involves moving data from AWS S3 to Snowflake using ETL processing. \
        The ETL process is implemented using the Snowflake library in the Django framework.",
    },
    {
      name: "Invetory Management System",
      image: IMS,
      github: "https://github.com/muhammad-ahmed02/TFB-server.git",
      date: "May 2022 - Aug 2022",
      technologies: [
        "Python",
        "Django",
        "Rest APIs",
        "React.js",
        "Material-UI",
      ],
      details:
        "This project is created using Python Django framework and REST APIs. \
        The system is designed to manage inventory for small businesses and stores. \
        The project uses Django REST framework to create RESTful APIs for managing inventory data. \
        The system allows users to add, edit, and delete products, as well as track inventory levels and generate reports. \
        The project also includes features such as user authentication and authorization, search functionality, and pagination. \
        The system is designed to be scalable and can be easily customized to fit the needs of different businesses.",
    },
    {
      name: "AT8",
      date: "March 2021 - May 2021",
      technologies: ["Python", "Django", "REST APIs", "PostgreSQL", "React js"],
      details:
        "Putting the technology in the solution with a full web based environment for all the gamer\
        community to interact and participate in tournaments.",
    },
    {
      name: "Quizzers Club",
      image: quiz,
      date: "March 2022",
      technologies: ["Python", "Django", "React.js", "Firebase"],
      details:
        "Real time Quiz Application for client to take quiz for people in bulk at the same time. \
        No matter time zone, but 1 admin can control the quiz for multiple users at the same time. \
        I used firebase for the realtime communication between user and admin.",
    },
    // {
    //   name: "SMS Safety",
    //   image: SMS,
    //   github: "https://github.com/muhammad-ahmed02/sms-safety-frontend.git",
    //   date: "Dec 2021",
    //   website: "https://smssafty.com/",
    //   technologies: ["React.js"],
    //   details:
    //     "Business website for a company named SMS Safety for the display of their safety products mainly leather gloves.",
    // },
    // {
    //   name: "Instagram Image Downloader",
    //   image: IID,
    //   github:
    //     "https://github.com/muhammad-ahmed02/Instagram-Image-Scrapper.git",
    //   date: "Aug 2021",
    //   technologies: ["Python"],
    //   details:
    //     "Instagram Image Downloader - Python script to download images of any account that you follow or is public, \
    //     videos can't be downloaded instead thumbnails will be downloaded.",
    // },
  ];

  return (
    <div id="Projects">
      <h1 className="title">
        My Projects <span style={{ color: "#FF004F" }}>.</span>{" "}
      </h1>
      <div className="projects-wrapper">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.name}
            imageSrc={project.image}
            githubLink={project.github}
            projectLink={project.website}
            date={project.date}
            technologies={project.technologies}
            description={project.details}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
