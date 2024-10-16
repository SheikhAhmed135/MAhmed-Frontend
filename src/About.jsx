import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFaceSmileWink,
  faFaceSmileBeam,
} from "@fortawesome/free-regular-svg-icons";
import "./CSS Files/about.css";

function About() {
  const languages = [
    "Python",
    "Django",
    "Flask",
    "Pandas",
    "SQL",
    "React",
    "HTML/CSS",
    "JavaScript",
    "AWS",
    "Git",
  ];

  const learnings = ["Data Engineering", "Docker"];

  return (
    <section className="about-section" id="About">
      <h1 className="about-title">
        About<span style={{ color: "#FF004F" }}>.</span>
      </h1>
      <div className="section-divider"></div>
      <div className="content-wrapper">
        <div className="about-text">
          <p>
            With over 2 years of experience as a software developer, I have had
            the opportunity to work on diverse projects under both Agile and
            Waterfall methodologies. My focus has always been on delivering
            high-quality, efficient software solutions that align with client
            requirements. Working in collaborative team environments has allowed
            me to refine my problem-solving skills and contribute meaningfully
            to each project’s success.
          </p>
          <br />
          <p>
            What sets me apart is my passion for resolving challenges with
            honesty and professionalism. I enjoy the process of troubleshooting
            and finding innovative ways to overcome obstacles, ensuring that the
            end result not only meets but exceeds expectations. Whether working
            independently or within a team, I maintain a strong commitment to
            delivering software that adds value and drives results.
          </p>
          <br />
          <p>
            As I continue to grow in my career, I remain eager to learn and
            adapt to new technologies and practices, always striving to improve
            the quality of my work and the satisfaction of my clients.
          </p>
        </div>
        <div className="right-section">
          <div className="tools">
            <h1>
              <FontAwesomeIcon
                icon={faFaceSmileWink}
                style={{ color: "#ff005a" }}
              />{" "}
              Languages/Frameworks
            </h1>
            {languages.map((language, index) => (
              <span key={index}>{language}</span>
            ))}
            <br />
            <h1>
              <FontAwesomeIcon
                icon={faFaceSmileBeam}
                style={{ color: "#ff005a" }}
              />{" "}
              Learning
            </h1>
            {learnings.map((item, index) => (
              <span key={index}>{item}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
