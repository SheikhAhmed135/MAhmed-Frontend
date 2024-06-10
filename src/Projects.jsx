import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faChrome } from "@fortawesome/free-brands-svg-icons";
import DataBridge from "../src/assets/DataBridge.jpg";
import IMS from "../src/assets/IMS.png";
// import IID from "../src/assets/IID.avif";
import SMS from "../src/assets/SMS.png";
import quiz from "../src/assets/quiz.webp";
import api from "../src/assets/api.png";
import thumbnail from "../src/assets/thumbnail.png";
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
        "The purpose for this is to learn the advanced concepts of Python Django API with Test Driven Development methodology.",
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
      ],
      details:
        "The Data Bridge project showcases my expertise in data warehousing and ETL processing. \
        The project involves moving data from AWS S3 to Snowflake using ETL processing. \
        The ETL process is implemented using the Snowflake library in the Django framework.",
    },
    {
      name: "API integrations (Company Product)",
      image: api,
      date: "July 2022 - Present",
      technologies: ["Python", "Pandas"],
      details: `1. LinkedIn. \
             2. BusinessCenteral365. \
             3. Google Drive. \
             4. Gmail. \
             5. Slack. \
             6. AWS S3. \
             7. Microsoft Azure. \
             And many more APIs like these...`,
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
      name: "Quizzers Club",
      image: quiz,
      date: "March 2022",
      technologies: ["Python", "Django", "React.js", "Firebase"],
      details:
        "Real time Quiz Application for client to take quiz for people in bulk at the same time. \
        No matter time zone, but 1 admin can control the quiz for multiple users at the same time. \
        I used firebase for the realtime communication between user and admin.",
    },
    {
      name: "SMS Safety",
      image: SMS,
      github: "https://github.com/muhammad-ahmed02/sms-safety-frontend.git",
      date: "Dec 2021",
      website: "https://smssafty.com/",
      technologies: ["React.js"],
      details:
        "Business website for a company named SMS Safety for the display of their safety products mainly leather gloves.",
    },
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
        {/* <ProjectCard
          title="Health Policy Student Association"
          imageSrc={medical}
          githubLink="https://github.com/ChrisMikhail/hpsa-website"
          technologies="HTML CSS JavaScript JQuery"
          description="The website is a nonprofit organization aiming to raise awareness among students by providing information on corporate health and policies. It serves as a project proposal with a fully responsive design for both mobile and desktop platforms. Website url/link is posted in the READ ME."
        />

        <ProjectCard
          title="Hackathon Fault Finder"
          imageSrc={fault}
          githubLink="https://github.com/HNow/MetHacks2023Base"
          technologies="NodeJS, Astro/React, HTML/CSS, JS/JSX, Python, OpenAI API, Figma"
          description="The project employs OpenAI's API to generate interview-level questions paired with intentionally incorrect solutions. It utilizes a backend database in Node.js to present users with these questions and solutions, allowing them to review and debug the provided code. The system then provides feedback on the accuracy of the debugging process."
        />

        <ProjectCard
          title="React Calendar"
          imageSrc={calendar}
          githubLink="https://github.com/Octrainn/React-Calendar-App"
          technologies="React JSX, GH-Pages, Vite, CSS"
          description="React-Calendar is a feature-rich calendar component built using React. Leveraging the power of React, it offers several dynamic and interactive features to enhance the user experience."
        />

        <ProjectCard
          title="Discord Bot Weaver"
          imageSrc={discord}
          githubLink="https://github.com/Octrainn/DiscordBot"
          technologies="Python, OAuth 2.0, Spotify API"
          description="Versatile Discord bot that utilizes the Spotify API to stream music, and it offers several other functionalities like moderation, chat restriction, image generation, and meme generation."
        />

        <ProjectCard
          title="Tensor Flow Model"
          imageSrc={tensor}
          githubLink="https://github.com/Octrainn/TensorFlowModel"
          technologies="Python, Juypter Notebook, Google Colab"
          description="Mini-project that focuses on implementing a machine learning model to accurately differentiate between images of humans and animals, specifically distinguishing between dogs and cats. Additionally, the project leverages the computational capabilities of Google Colab to efficiently train the model and handle the image datasets effectively."
        />
        <ProjectCard
          title="Static Portfolio "
          imageSrc={picture}
          githubLink="https://github.com/Octrainn/octrainn.github.io"
          technologies="HTML, CSS, JavaScript, JQuery, Bootstrap CSS"
          description="Experience my previous static portfolio designed to elegantly display my abilities and projects. Its responsive and dynamic layout ensures seamless viewing across various devices, including laptops, mobiles, and PCs. Website url/link is posted in the READ ME."
        /> */}
      </div>
    </div>
  );
}

export default Projects;
