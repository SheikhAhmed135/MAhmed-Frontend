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
    "SQL",
    "React",
    "HTML/CSS",
    "JavaScript",
    "Bootstrap CSS",
    "Tailwind",
    "AWS",
    "Github/Git",
  ];

  const learnings = ["Data Engineering", "Machine Learning"];

  return (
    <section className="about-section" id="About">
      <h1 className="about-title">
        About<span style={{ color: "#FF004F" }}>.</span>
      </h1>
      <div className="section-divider"></div>
      <div className="content-wrapper">
        <div className="about-text">
          <p>
            {
              "Hey there! I'm a software engineer with experience in web development and ETL processing, I am passionate about building innovative solutions that solve complex problems. I have worked with Python, Django, and React to develop web applications that are both functional and user-friendly. I am also interested in exploring the data engineering field as my main domain to work on."
            }
          </p>
          <br />
          <p>
            In my current role as a software engineer, I have gained valuable
            experience in developing and maintaining web applications, as well
            as designing and implementing ETL pipelines. I have a strong
            understanding of software development principles and best practices,
            and I am always looking for ways to improve my skills and knowledge.
          </p>
          <br />
          <p>
            I am excited about the opportunities that the data engineering field
            presents, and I am eager to continue exploring this area. I am
            confident that my skills and experience in software engineering will
            enable me to make a valuable contribution to any team or project.
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
